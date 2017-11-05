function start(){
    onSubmit();
    console.log(name + month + day);
    document.getElementById("horoscope").innerHTML = determineSign();
    document.getElementById("birthday").innerHTML = birthday();
}

function onSubmit(){
    name = document.getElementById("name").value;
    month = document.getElementById("month").value;
    day = document.getElementById("days").value;
    //year = document.getElementById("year").value;
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

function determineSign(month,day){
    var sign ="";
    var signs = ["Aquarius","Pisces","Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Sagittarius","Capricorn"];
    if(month == 1 && day >= 20 || (month == 2 && day <=18)){
        sign = signs[0];
    }else if((month == 2 && day>= 19) ||(month == 3 && day<=20)){
        sign = signs[1];
    }else if((month == 3 && day>= 21) || (month == 4 && day<= 19)){
        sign = signs[2];
    }else if((month == 4 && day >= 20) || (month == 5 && day<= 20)){
        sign = signs[3];
    }else if((month == 5 && day >= 21) || (month == 6 && day <= 20)){
        sign = signs[4];
    }else if((month == 6 && day >= 21) || (month == 7 && day <= 22)){
        sign = signs[5];
    }else if((month == 7 && day>= 23) || (month == 8 && day <= 22)){
        sign = signs[6];
    }else if((month == 8 && day >= 23) || (month == 9 && day <= 22)){
        sign = signs[7];
    }else if((month == 9 && day >= 23) || (month == 10 && day<= 22)){
        sign = signs[8];
    }else if((month == 10 && day >=23) || (month ==  11 && day <=21)){
        sign = signs[9];
    }else if((month == 11 && day >=22) || (month == 12 && day <= 21)){
        sign = signs[10];
    }else{
        sign = signs[11];
    }
    return name + ", your sign is " + sign;

}
function determineHoroscope(){

}
function birthday(month,day){
    day = new Date();
    var m = day.getMonth();
    m+=1;
    var d = day.getDate();
    if(month == m && day == d){
        return "Happy Birthday!";
    }
}
