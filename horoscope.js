function start(){
    onSubmit();
    console.log(name + month + day);
    document.getElementById("horoscope").innerHTML = determineHoroscope();
}

function onSubmit(){
    name = document.getElementById("name").value;
    month = document.getElementById("month").value;
    day = document.getElementById("days").value;
}
function yearBox() {
    var result ="";
    for(var i = 1; i <= 100; i++){
        result+="<option value =" + i + ">" + (i+ 1899) + "</option>"
    }
    document.getElementById("years").innerHTML=result;

}
function doDays(month){
    var mDays = [0,31,28,31,30,31,30,31,31,30,31,30,31];
    var result = "";
    for(var i = 1; i <= mDays[month]; i++){
        result += "<option value =" + i + ">" + i + "</option>"
    }
    document.getElementById("days").innerHTML=result;
}

var sign ="";
function determineSign(month,day){
    if(month == 1 && day >= 20 || (month == 2 && day <=18)){
        sign += "Aquarius";
    }else if(month == 2 && day>= 19 ||(month == 3 && day<=20)){
        sign += "Pisces";
    }else if(month == 3 && day>= 21 || (month == 4 && day<= 19)){
        sign += "Aries";
    }else if(month == 4 && day >= 20 || (month == 5 && day<= 20)){
        sign += "Taurus";
    }else if(month == 5 && day >= 21 || (month == 6 && day <= 20)){
        sign += "Gemini";
    }else if(month == 6 && day >= 21 || (month == 7 && day <= 22)){
        sign += "Cancer";
    }else if(month == 7 && day>= 23 || (month == 8 && day <= 22)){
        sign += "Leo";
    }else if(month == 8 && day >= 23 || (month == 9 && day <= 22)){
        sign += "Virgo"
    }else if(month == 9 && day >= 23 || (month == 10 && day<= 22)){
        sign+= "Libra";
    }else if(month == 10 && day >=23 || (month ==  11 && day <=21)){
        sign += "Scorpio";
    }else if(month == 11 && day >=22 || (month == 12 && day <= 21)){
        sign+= "Sagittarius";
    }else{
        sign += "Capricorn";
    }
}
function determineHoroscope(){
    return name + ", you are a " + sign;
}