function start(){
    onSubmit();
    document.getElementById("horoscope").innerHTML = determineSign();
    document.getElementById("horoscopetext").innerHTML = determineHoroscope();
    document.getElementById("image").innerHTML = determineImage(sign);
    document.getElementById("birthday").innerHTML = birthday(day,month);


}

function onSubmit(){
    name = document.getElementById("name").value;
    month = document.getElementById("month").value;
    day = document.getElementById("days").value;

}

function doDays(month){
    var mDays = [0,31,28,31,30,31,30,31,31,30,31,30,31];
    var result = "";
    for(var i = 1; i <= mDays[month]; i++){
        result += "<option value =" + i + ">" + i + "</option>"
    }
    document.getElementById("days").innerHTML=result;
}




var sign = 0;
function determineSign(){
    if(name==""){
        return "Please enter your name"
    }
    if((month == 1 && day >= 20) || (month == 2 && day <=18)){
        sign = 1;
        return name + ", you are an Aquarius."
    }else if((month == 2 && day>= 19) || (month == 3 && day<=20)){
        sign = 2;
        return name +  ", you are a Pisces."
    }else if((month == 3 && day>= 21) || (month == 4 && day<= 19)){
        sign = 3;
        return name + ", you are an Aries."
    }else if((month == 4 && day >= 20) || (month == 5 && day<= 20)){
        sign = 4;
        return name + ", you are a Taurus."
    }else if((month == 5 && day >= 21) || (month == 6 && day <= 20)){
        sign = 5;
        return name + ", you are a Gemini."
    }else if((month == 6 && day >= 21) || (month == 7 && day <= 22)){
        sign = 6;
        return name + ", you are a Cancer."
    }else if((month == 7 && day>= 23) || (month == 8 && day <= 22)){
        sign = 7;
        return name + ", you are a Leo."
    }else if((month == 8 && day >= 23) || (month == 9 && day <= 22)){
        sign = 8;
        return name + ", you are a Virgo."
    }else if((month == 9 && day >= 23) || (month == 10 && day<= 22)){
        sign = 9;
        return name + ", you are a Libra."
    }else if((month == 10 && day >=23) || (month ==  11 && day <=21)){
        sign = 10;
        return name + ", you are a Scorpio."
    }else if((month == 11 && day >=22) || (month == 12 && day <= 21)){
        sign = 11;
        return name + ", you are a Sagittarius."
    }else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
        sign = 12;
        return name + ", you are a Capricorn."
    }else{
        sign = 0;
        return "Please enter your name AND birthday.";
    }
}

function determineHoroscope(){
    if(sign == 0){
        return "";
    }
if(sign == 1){
    return "You have an unusual gift for making a situation seem less dramatic. You'll be the one who reassures" +
        " people and is able to sum up the situation objectively without panic or exaggerating. This, coupled" +
        " with your legendary calm, makes for a great combination!"
}
if(sign == 2){
    return "Dare to express your ideas without fearing ridicule. This is exactly what you like, because fear of " +
        "ridicule is generally your downfall. The challenge for you is to say what you think clearly without" +
        " borrowing the ideas of others. Dare to do it!";
}
if(sign == 3){
    return "Making things happen is what it's all about for you. You are also unafraid of stepping " +
        "onto new terrain. The challenge inherent in taking on the unknown is heaven on Earth for you. " +
        "Sure, you may appear arrogant when you take on the world, but you'll be quick to tell you it's " +
        "the only way to go.";
}
if(sign == 4){
    return "Practical and well-grounded, Taurus is the sign that harvests the fruits of labor. You " +
        "feel the need to always be surrounded by love and beauty, turned to the material world," +
        " hedonism, and physical pleasures. You are sensual and tactile, considering touch and taste" +
        " the most important of all senses. Stable and conservative, you are ready to endure and stick to " +
        "your choices until you reach the point of personal satisfaction.";
}
if(sign == 5){
    return "Expressive and quick-witted, Gemini represents two different personalities in one and you will" +
        " never be sure which one you will face. You are sociable, communicative and ready for fun, with" +
        " a tendency to suddenly get serious, thoughtful and restless. You are fascinated with the world" +
        " itself, extremely curious, with a constant feeling that there is not enough time to experience everything you want to see.";
}
if(sign == 6){
    return "You are very emotional and sensitive, and you care deeply about matters of your family and " +
        "home. You are sympathetic and attached to people you keep close. You are very loyal and able" +
        " to empathize with other people's pain and suffering.";
}
if(sign == 7){
    return "People born under the sign of Leo are natural born leaders. You are dramatic, creative, " +
        "self-confident, dominant and extremely difficult to resist, able to achieve anything you " +
        "want to in any area of life you commit to. You have many friends who are generous and loyal.";
}
if(sign == 8){
    return "Your methodical approach to life ensures that nothing is left to chance, and although you" +
        " are often tender, your heart might be closed for the outer world. This is a sign often misunderstood," +
        " not because you lack the ability to express, but because you won’t accept your feelings as" +
        " valid, true, or even relevant when opposed to reason";
}
if(sign == 9){
    return "You are peaceful, fair, and you hate being alone. " +
        "Partnership is very important to you, as your mirror and someone giving you the ability " +
        "to be the mirror yourself. You are fascinated by balance and symmetry, you " +
        "are in a constant chase for justice and equality, realizing through life that the only thing" +
        " that should be truly important to you is your own inner core of personality.";
}
if(sign == 10){
    return "You are a passionate and assertive person. You are determined and decisive," +
        " and will research until you find out the truth. You are a great leader, always " +
        "aware of the situation, and also feature prominently in resourcefulness.";
}
if(sign == 11){
    return "Curious and energetic, you are one of the biggest travelers among" +
        " all zodiac signs. Your open mind and philosophical view motivates you to" +
        " wander around the world in search of the meaning of life." +
        "You are extrovert, optimistic and enthusiastic, and" +
        " like changes. You are able to transform your" +
        " thoughts into concrete actions and you will do anything to achieve your goals.";
}
if(sign == 12){
    return "Capricorn is a sign that represents time and responsibility, and its representatives" +
        " are traditional and often very serious by nature. You possess an inner" +
        " state of independence that enables significant progress both in your personal and " +
        "professional life. You are a master of self-control and have the ability to lead the way," +
        " make solid and realistic plans, and manage many people who work for you at any time. " +
        "You will learn from your mistakes and get to the top based solely on your experience and expertise.";
}

}
function determineImage(sign){
    if(sign == 0){
        return "";
    }
    if (sign == 1){
        return "<img src='img/aquarius.jpeg' width=\"400\" height=\"300\" alt=\"\">"
    }
    if(sign == 2){
        return "<img src='img/pisces.jpg' width=\"400\" height=\"300\" alt=\"\">"
    }
    if(sign == 3){
        return "<img src='img/aries.png' width=\"400\" height=\"300\" alt=\"\">"
    }
    if(sign == 4){
        return "<img src='img/taurus.png' width=\"400\" height=\"300\" alt=\"\">"
    }
    if(sign == 5){
        return "<img src='img/gemini.jpg' width=\"400\" height=\"300\" alt=\"\">"
    }
    if(sign == 6){
        return "<img src='img/cancer.jpg' width=\"400\" height=\"300\" alt=\"\">"
    }
    if(sign == 7){
        return "<img src='img/leo.jpg' width=\"400\" height=\"300\" alt=\"\">"
    }
    if(sign == 8){
        return "<img src='img/virgo.jpg' width=\"400\" height=\"300\" alt=\"\">"
    }
    if(sign == 9){
        return "<img src='img/libra.jpg' width=\"400\" height=\"300\" alt=\"\">"
    }
    if(sign == 10){
        return "<img src='img/scorpio.jpg' width=\"400\" height=\"300\" alt=\"\">"
    }
    if(sign == 11){
        return "<img src='img/sagittarius.jpg' width=\"400\" height=\"300\" alt=\"\">"
    }
    if(sign == 12){
        return "<img src='img/capricorn.jpg' width=\"400\" height=\"300\" alt=\"\">"
    }
}



function birthday(day, month) {
    var today = new Date();
    var d = today.getDate();
    var m = today.getMonth() + 1;
    if (day == d && month == m) {
        return "Happy Birthday " + name + "!";
    }
    return "";
}
