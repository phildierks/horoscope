function start(){
    var name = document.getElementById("name").value;
    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;
    var sign = determineHoroscope(month,day,name).value;
    console.log(month + day + name);
}


function determineHoroscope(month,day, name){
    if(month == 1 &&  day >= 20 || (month == 2 && day <=18)){
        return name + ", You are an Aquarius";
    }else if(month == 2 &&  day>= 19 ||(month == 3 && day<=20)){
        return name + ", You are a Pisces";
    }else if(month == 3 && day>= 21 || (month == 4 && day<= 19)){
        return name + ", You are an Aries";
    }else if(month == 4 && day >= 20 || (month == 5 && day<= 20)){
        return name + ", You are a Taurus";
    }else if(month == 5 && day >= 21 || (month == 6 && day <= 20)){
        return name + ", You are a Gemini";
    }else if(month == 6 && day >= 21 || (month == 7 && day <= 22)){
        return name + ", You are a Cancer";
    }else if(month == 7 && day>= 23 || (month == 8 && day <= 22)){
        return  name + ", You are a Leo";
    }else if(month == 8 && day >= 23 || (month == 9 && day <= 22)){
        return name + ", You are a Virgo";
    }else if(month == 9 && day >= 23 || (month == 10 && day<= 22)){
        return name + ", You are a Libra";
    }else if(month == 10 && day >=23 || (month ==  11 && day <=21)){
        return name +  ", You are a Scorpio";
    }else if(month == 11 && day >=22 || (month == 12 && day <= 21)){
        return name + ", You are a Sagittarius";
    }else{
        return name + ", You are a Capricorn";
    }
}