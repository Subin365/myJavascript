const date =  new Date();
var monthNavigator = 0, indicator = 0;
var datearr = [];
const month = ["January", "February", "March", "April", "May","June","July", "August", "September", "October", "November", "December"];
const week = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
var year = date.getFullYear();
var mnth = date.getMonth();
window.onload = () =>{
    Calender("present");
    timer();
};
function initialize(Month){
    if(Month === 0 && indicator !== 1){
        indicator = -1;
    }
    if(indicator === -1){
        if(Month === 11){
            indicator = 1;
            year--;
        }
    }
    if(Month === 11 && indicator !== -1){
        indicator = 1;
    }
    if(indicator === 1){
        if(Month === 0){
            indicator = -1;
            year++;
        }
    }
    if(Month !== 0 && Month !== 11){
        indicator = 0;
    }
    startDate = startCounter(year,Month);
    days = dayCounter(year,Month);
    let day = 0;
    datearr = [];
    if(Month !== mnth){
        day = `Go to current month`;
    }
    else {
        day = week[date.getDay()];
    }
    datearr.push(
        `<th colspan=7>${year}</th>
        <tr><td rowspan = 2 type = button onclick = "Calender('pst')" class = "button"><</td><th colspan = 5>${month[Month]}</th><td rowspan = 2 type = button onclick = "Calender('future')" class = "button">></td></tr>
        <tr><th colspan=5 type = "button" onclick = "Calender('present')" class = "button">${day}</th></tr>
        <tr>`
    )
    week.forEach(element => {
        datearr.push(
            `<td class = "Day">${element}</td>`
        );
    });
    datearr.push(`</tr>`)
}
function Calender(op){
    switch(op){
        case "present":
            monthNavigator = 0;
            initialize((mnth+monthNavigator)%12);
            break;
        case "pst":
            monthNavigator = (monthNavigator+11)%12;
            initialize((mnth+monthNavigator)%12);
            break;
        case "future":
            monthNavigator = (monthNavigator+1)%12;
            initialize((mnth+monthNavigator)%12);  
            break;        
    } 
            pusher();  
}
function dayCounter(year,month){
    const days =  new Date(year,month+1,0).getDate();
    return days;
}
function startCounter(year,month){
    const startDate = new Date(year,month,01).getDay();
    return startDate;
}
function pusher(){
    var i = 0, dayInitializer = 0;
    let tempMonth =(dayCounter(year,(mnth+monthNavigator-1)%12)-startDate)+1;
    for(i=1 ; i<days+1+startDate; i++){
        if( i > startDate ) {
            dayInitializer += 1;
            if( dayInitializer !== date.getDate() ){
                datearr.push(
                    `<td type = "button" onclick = "today(${year},${(mnth+monthNavigator)%12},${dayInitializer})">${dayInitializer}</td>`
                )
            }
            else if( monthNavigator === 0 && year ===new Date().getFullYear() ){
                datearr.push(
                    `<td id = "currentDay" type = "button" onclick = "today(${year},${(mnth+monthNavigator)%12},${dayInitializer})"><strong>${dayInitializer}</strong></td>`
                )
            }
            else{
                datearr.push(
                    `<td>${dayInitializer}</td>`
                )
            }
            if( (i%7) === 0){
                datearr.push(`</tr>`);
            }
        }
        else{
            datearr.push(
                `<td class = "faded" type = button onclick = "Calender('pst')">${tempMonth++}</td>`
            )
        }
    }
    dayInitializer = 1;
    for(; (i%7) !== 1; i++){
        datearr.push(
            `<td class = "faded" type = button onclick = "Calender('future')" >${dayInitializer++}</td>`
        );
    }
    const pusharr = datearr.join("");
    document.getElementById("table").innerHTML = pusharr;
}

function today(y,tst,t){
    const todayPromise = new Promise((resolve,reject)=>{
        var xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function(){
            if(this.readyState === 4 && this.status === 200){
                resolve(JSON.parse(this.responseText));
        console.log("inside")
            }
        }
        xhr.open("GET",`https://api.duckduckgo.com/?q=${month[tst]}&format=json&pretty=1`)
        xhr.send()
    })
    todayPromise.then((response)=>{
        let today = response.RelatedTopics[0].Text
        console.log(today);
    window.alert("Details of March is: " +today);
    })
}
function timer(){
setInterval( () => {
    datearr = [];
    let ampm ="am";
    if((new Date().getHours())/12>=1) {
        ampm = "pm"
    };
    datearr.push(
        `
        <tr><td colspan = 4>Time</td></tr>
        <tr><td>${new Date().getHours()}</td><td>${new Date().getMinutes()}</td><td>${new Date().getSeconds()}</td><td>${ampm}</td></tr>
        `
    )
    const p = datearr.join("");
    document.getElementById("time").innerHTML = p;
    },-1000);
}
