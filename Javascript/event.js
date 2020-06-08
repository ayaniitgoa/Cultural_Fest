// Desktop begins
var page = document.getElementsByClassName("Event-container");
var events = document.getElementsByClassName("card-tech-cult");
var back_buttons = document.getElementsByClassName("left-back-button-desktop");
var alien1 = document.getElementById("left-alien");
var alien2 = document.getElementById("right-alien");
events[0].addEventListener("click", function(event) {
    
    $(page[0]).css("display", "none");
    
    page[1].style.display = "block";
    
    page[2].style.display = "none";
    
});
events[1].addEventListener("click", function(event) {
    page[0].style.display = "none";
    page[1].style.display = "none";
    page[2].style.display = "block";

    
});
back_buttons[0].addEventListener("click", function(event) {
    
    page[0].style.display = "block";    
    page[1].style.display = "none";
    page[2].style.display = "none";
    
});
back_buttons[1].addEventListener("click", function(event) {
    page[0].style.display = "block";
    page[1].style.display = "none";
    page[2].style.display = "none";
    
});
// each popup
var large_popup = document.getElementsByClassName("event-card");
var large_popup2 = document.getElementsByClassName("event-card2");

var large_event_type = document.getElementsByClassName("event-heading");
var large_event_name = document.getElementsByClassName("event-name");
var large_event_description = document.getElementsByClassName("event-description");
var poster_img = document.getElementsByClassName("poster-img");
var click = 0; //click=1 for tech//click=2 for cult
var return_to = document.getElementsByClassName("left_back_button");
var desktop_left_image=document.getElementById("desktop-left-image");
var desktop_right_image=document.getElementById("desktop-right-image");
// to close popup
return_to[0].addEventListener("click", function(event) {
    if (click == 1)
        page[1].style.display = "block";
    if (click == 2)
        page[2].style.display = "block";

    page[3].style.display = "none";
    alien1.style.left = "-35vh";
    alien1.style.bottom = "-14vh";
    alien1.style.width = "70vh";

    alien2.style.right = "-35vh";
    alien2.style.bottom = "-14vh";
    alien2.style.width = "70vh";
});
$(large_popup).click(function(){
    $(page[3]).fadeIn(300);
    $(large_event_description[0]).animate({width:"40vw",marginLeft:"10vw",marginRight:"0vw" },100,'linear');
    $(poster_img[0]).animate({height:"55vh",width:"55vh" },0,'linear');

    alien1.style.left = "85vw";
    alien1.style.bottom = "0";
    alien1.style.width = "15vw";
    alien2.style.right = "85vw";
    alien2.style.bottom = "0";
    alien2.style.width = "15vw";
  });
$(large_popup2).click(function(){
    $(page[3]).fadeIn(300);
    $(large_event_description[0]).animate({width:"40vw",marginLeft:"10vw",marginRight:"0vw",fontSize:"1.8rem",lineHeight:"2.3rem" },100,'linear');
    $(poster_img[0]).animate({height:"55vh",width:"55vh" },0,'linear');

    alien1.style.left = "85vw";
    alien1.style.bottom = "0";
    alien1.style.width = "15vw";
    alien2.style.right = "85vw";
    alien2.style.bottom = "0";
    alien2.style.width = "15vw";
  });
// for tech begins

large_popup[0].addEventListener("click", function(event) {
	console.log("event-1");
    click = 1;
    page[1].style.display = "none";
    page[3].style.display = "block";
    large_event_type[2].innerHTML = "Technical";
    large_event_name[0].innerHTML = "Robbo Soccer";
    large_event_description[0].innerHTML = "The objective is to design a manual robot and which can compete on an arena specially designed for robotic soccer match. The event is aimed at testing the Flipping, Kicking, maneuvering skills and the control of the robot";
    poster_img[0].src = "./images/robosoccer.png";
    

});
large_popup[1].addEventListener("click", function(event) {
    click = 1;
    page[1].style.display = "none";
    page[3].style.display = "block";
    large_event_type[2].innerHTML = "Technical";
    large_event_name[0].innerHTML = "Race it out";
    large_event_description[0].innerHTML = "Program a remote controlled electric car  to complete the given track filled with hurdles like zig zag, fidgrt spinner, bumpy bump, draw bridge, etc. in the shortest possible time. Can you do it?";
    poster_img[0].src = "./images/raceitout.png";
    $(poster_img[0]).animate({height:"55vh",width:"45vh" },0,'linear');
});
large_popup[2].addEventListener("click", function(event) {
    click = 1;
    page[1].style.display = "none";
    page[3].style.display = "block";
    large_event_type[2].innerHTML = "Technical";
    large_event_name[0].innerHTML = "Line follower";
    large_event_description[0].innerHTML = "The challenge of the competition is to make a robot that can move on black lines on a white background and reach the finish as soon as possible. The participants must create an autonomous vehicle (hereafter ROBOT), that will move on the COMPETITION FIELD and do certain tasks.";
    poster_img[0].src = "./images/line.png";
});
large_popup[3].addEventListener("click", function(event) {
    click = 1;
    page[1].style.display = "none";
    page[3].style.display = "block";
    large_event_type[2].innerHTML = "Technical";
    large_event_name[0].innerHTML = "The Coding Triathlon";
    large_event_description[0].innerHTML = "A unique race of brains presented to you as a triathlon which will put your geeky skills to the real test. Do you have what it takes ?";
    poster_img[0].src = "./images/triathlon.png";
});
large_popup[4].addEventListener("click", function(event) {
    click = 1;
    page[1].style.display = "none";
    page[3].style.display = "block";
    large_event_type[2].innerHTML = "Technical";
    large_event_name[0].innerHTML = "AI Gaming";
    large_event_description[0].innerHTML = "The third world war will not be fought between humans but between the technologies of the superpowers of the world. Wanna experience how it feels to see artificial intelligence compete against each other, then join this AI Gaming event.";
    poster_img[0].src = "./images/ai.png";
});
large_popup[5].addEventListener("click", function(event) {
    click = 1;
    page[1].style.display = "none";
    page[3].style.display = "block";
    large_event_type[2].innerHTML = "Technical";
    large_event_name[0].innerHTML = "Chaos";
    large_event_description[0].innerHTML = "A market simulation game that generates enthusiasm in economics and gives practical examples of trading goods and services.";
    poster_img[0].src = "./images/chaos.png";
});


// tech ends
// for cult begins
large_popup2[0].addEventListener("click", function(event) {
    click = 2;
    page[2].style.display = "none";
    page[3].style.display = "block";
    large_event_type[2].innerHTML = "Cultural";
    large_event_name[0].innerHTML = "Tamasha";
    large_event_description[0].innerHTML = "Who needs a stage when you can perform on the streets? Street plays are a powerful means to create awareness and bring about a change in society. Connect with common man by enthralling the crowd with your performance, bring the Dramebaaz inside you at the Cult Rang’s street play - Tamasha <br> Be the change you want to see!";
    poster_img[0].src = "./images/tamasha.jpg";
    $(poster_img[0]).animate({height:"55vh",width:"65vh" },0,'linear');
    
});
large_popup2[1].addEventListener("click", function(event) {
    click = 2;
    page[2].style.display = "none";
    page[3].style.display = "block";
    large_event_type[2].innerHTML = "Cultural";
    large_event_name[0].innerHTML = "Know it all";
    large_event_description[0].innerHTML = "Are you generally the walking encyclopedia of your gang or does information unintentionally come blurting out every time you open your mouth? <br> Well, if that’s the case, get ready to put your knowledge of the world to the test in the bustling atmosphere of the Cult Rang’s quiz competition – Know It All <br>Be there to fight it out at the pop-culture and general quizzes.";
    poster_img[0].src = "./images/knowitall.png";
});
large_popup2[2].addEventListener("click", function(event) {
    click = 2;
    page[2].style.display = "none";
    page[3].style.display = "block";
    large_event_type[2].innerHTML = "Cultural";
    large_event_name[0].innerHTML = "Cascading Amps";
    large_event_description[0].innerHTML = "Transfix the crowd with an energetic performance with music booming in their ears long after you stop entertaining and the show ends! Get your vocal chords and your band ready for a mesmerizing musical night because, without music, life would be a mistake! <br>See you at Cult Rang’s band competition Cascadic Amps.";
    poster_img[0].src = "./images/cascadingamps.png";
});
large_popup2[3].addEventListener("click", function(event) {
    click = 2;
    page[2].style.display = "none";
    page[3].style.display = "block";
    large_event_type[2].innerHTML = "Cultural";
    large_event_name[0].innerHTML = "Battle of feets";
    large_event_description[0].innerHTML = "They say dance is the hidden language of the soul. So, dance it out like nobody is watching and set the streets ablaze! Bring your best moves and all the attitude you’ve got for the street battle. The crowd is waiting to be wowed! Dance it out at the Battle of the feets";
    poster_img[0].src = "./images/battleoffeet.png";
});
large_popup2[4].addEventListener("click", function(event) {
    click = 2;
    page[2].style.display = "none";
    page[3].style.display = "block";
    large_event_type[2].innerHTML = "Cultural";
    large_event_name[0].innerHTML = "Groove It";
    large_event_description[0].innerHTML = "Think you got the moves?! Well guess what, we have the platform! Get your gang together, practice like you’ve never won and perform like you’ve never lost! Come, scale up the temperature, set the stage on fire and get the crowd grooving. We’ll be waiting to see you at the Cult Rang group dance event – Groove It Take more chances, Dance more dances!";
    poster_img[0].src = "./images/grooveit.png";
});
large_popup2[5].addEventListener("click", function(event) {
    click = 2;
    page[2].style.display = "none";
    page[3].style.display = "block";
    large_event_type[2].innerHTML = "Cultural";
    large_event_name[0].innerHTML = "Lafz";
    large_event_description[0].innerHTML = "Cultrang's poetry competition Lafz is here to mesmerize you with poetry that expresses more than ordinary sentences ever could.<br>Don't miss out on this opportunity to get attractive prizes if you think you have a knack for poetry.";
    poster_img[0].src = "./images/lafz.png";
});
large_popup2[6].addEventListener("click", function(event) {
    click = 2;
    page[2].style.display = "none";
    page[3].style.display = "block";
    large_event_type[2].innerHTML = "Cultural";
    large_event_name[0].innerHTML = "Bellas Artes";
    large_event_description[0].innerHTML = "Consists of many artistic events ranging from Tee Painting, Live Sketching, Unbrush, Blind Art, Face Painting.";
    poster_img[0].src = "./images/artevents.png";
});
large_popup2[7].addEventListener("click", function(event) {
    click = 2;
    page[2].style.display = "none";
    page[3].style.display = "block";
    large_event_type[2].innerHTML = "Cultural";
    large_event_name[0].innerHTML = "Symphony";
    large_event_description[0].innerHTML = "Ever been caught for humming inside the classroom? Ever lost yourself singing while taking a shower?<br>Here comes a platform where you can sing your heart and soul aloud.<br>We invite you to participate in the solo-duo singing competition at CultRang.";
    poster_img[0].src = "./images/symphony.png";
});
large_popup2[8].addEventListener("click", function(event) {
    click = 2;
    page[2].style.display = "none";
    page[3].style.display = "block";
    large_event_type[2].innerHTML = "Cultural";
    large_event_name[0].innerHTML = "Debate";
    large_event_description[0].innerHTML = "For those who don't merely speak but, assert For those who don't just carry an opinion but, stamp it For those who don't just have a say but, deliver the verdict. If you have the gift of the gab, we present before you a stage and a worthy opponent.";
    poster_img[0].src = "./images/debate.png";
});
large_popup2[9].addEventListener("click", function(event) {
    click = 2;
    page[2].style.display = "none";
    page[3].style.display = "block";
    large_event_type[2].innerHTML = "Cultural";
    large_event_name[0].innerHTML = "Online Literary Events";
    large_event_description[0].innerHTML = "If creativity for you is integral to your existence. If words for you are an expression of your soul. If the pen is a gateway to your imagination. And if your hand-crafted fantasies mesmerize all and sundry, then creative writing at Cultrang is for you.";
    poster_img[0].src = "./images/lit.png";
});
large_popup2[10].addEventListener("click", function(event) {
    click = 2;
    page[2].style.display = "none";
    page[3].style.display = "block";
    large_event_type[2].innerHTML = "Cultural";
    large_event_name[0].innerHTML = "Capture It";
    large_event_description[0].innerHTML = "Bring out your DSLRs and turn on the professional mode for CultRang's photography event Capture It.<br>Be at the right place at the right time and when you find that perfect moment just capture it.";
    poster_img[0].src = "./images/captureit.png";
    $(poster_img[0]).animate({height:"55vh",width:"30vw" },0,'linear');
});
large_popup2[11].addEventListener("click", function(event) {
    click = 2;
    page[2].style.display = "none";
    page[3].style.display = "block";
    large_event_type[2].innerHTML = "Cultural";
    large_event_name[0].innerHTML = "Behind The Scenes";
    large_event_description[0].innerHTML = "'If it can be written or thought, it can be filmed.'<br> Time to unleash the actor/director/screenplay writer in you in the CultRang's 40 hours Film Making competition - Behind the Scenes";
    poster_img[0].src = "./images/40hrfilm.png";
});
large_popup2[12].addEventListener("click", function(event) {
    click = 2;
    page[2].style.display = "none";
    page[3].style.display = "block";
    large_event_type[2].innerHTML = "Cultural";
    large_event_name[0].innerHTML = "Film Wars";
    large_event_description[0].innerHTML = "“You shouldn't dream your film, you should make it!” - Steven Spielberg<br> We live in a box of space and time. Movies are windows in its walls. They allow us to enter other minds, not simply in the sense of identifying with the characters, although that is an important part of it, but by seeing the world as another person sees it.  Do you often find yourself immersed in this world? If Yes? Then participate in this competition.<br> Theme: Justice";
    poster_img[0].src = "./images/film.png";
});
large_popup2[13].addEventListener("click", function(event) {
    click = 2;
    page[2].style.display = "none";
    page[3].style.display = "block";
    large_event_type[2].innerHTML = "Cultural";
    large_event_name[0].innerHTML = "Designer Hunt";
    large_event_description[0].innerHTML = "It is time to buckle up and exercise your minds, to give the best you can.<br>Leaving the doors to creativity open, we invite all the illustrators & graphic designers to this poster making competition. <br>Theme- Break The Stigma";
    poster_img[0].src = "./images/designer_hunt.png";
    $(poster_img[0]).animate({height:"55vh",width:"65vh" },0,'linear');
});
// eachpopup ends

// Desktop ends
// mobile begins
var mobile_heading = document.getElementById("mobile-heading");
var subheadingt = document.getElementById("subheadingt");
var subheadingc = document.getElementById("subheadingc");
var t_c_page = document.getElementById("tech-cult-heading");
var tech_events = document.getElementById("techeventslist");
var cult_events = document.getElementById("culteventslist");
var cult_events2 = document.getElementById("culteventslist2");
var tevent = document.getElementsByClassName("tevent");
var cevent = document.getElementsByClassName("cevent");
var tdata = document.getElementsByClassName("tdata");
var cdata = document.getElementsByClassName("cdata");
var cdata2 = document.getElementsByClassName("cdata2");
var texttdata = document.getElementsByClassName("ttext");
var textcdata = document.getElementsByClassName("ctext");
var hidedata = document.getElementsByClassName("hidedata");
var hidedatac = document.getElementsByClassName("hidedatac");
var back = document.getElementById("back");
var tevent1 = document.getElementById("tevent1");
var tevent2 = document.getElementById("tevent2");
var tevent3 = document.getElementById("tevent3");
var tevent4 = document.getElementById("tevent4");
var tevent5 = document.getElementById("tevent5");
var tevent6 = document.getElementById("tevent6");


var cevent1 = document.getElementById("cevent1");
var cevent2 = document.getElementById("cevent2");
var cevent3 = document.getElementById("cevent3");
var cevent4 = document.getElementById("cevent4");
var cevent5 = document.getElementById("cevent5");
var cevent6 = document.getElementById("cevent6");
var cevent7 = document.getElementById("cevent7");

var cevent8 = document.getElementById("cevent8");
var cevent9 = document.getElementById("cevent9");
var cevent10 = document.getElementById("cevent10");
var cevent11 = document.getElementById("cevent11");
var cevent12 = document.getElementById("cevent12");
var cevent13 = document.getElementById("cevent13");
var cevent14 = document.getElementById("cevent14");

var alienm1 = document.getElementById("left-alien1");
var alienm2 = document.getElementById("right-alien1");
var next = document.getElementById("next");
var prev = document.getElementById("prev");

function showtechevents(){
    t_c_page.style.display = "none";
    back.style.display = "block";
    tech_events.style.display = "inline-block";
    mobile_heading.style.display = "none";
    subheadingt.style.display = "block";
}
function showcultevents(){
    t_c_page.style.display = "none";
    back.style.display = "block";
    cult_events.style.display = "inline-block";
    mobile_heading.style.display = "none";
    subheadingc.style.display = "block";
}
function shownextcevent(){
    cult_events.style.display = "none";
    cult_events2.style.display = "inline-block";
}
function showprevcevent(){
    cult_events2.style.display = "none";
    cult_events.style.display = "inline-block";
}

function showtevent(x){
    for(var i=0;i<7;i++)
    {
        if(i==(x-1))
        {
            alienm1.style.left = "70vw";
            alienm1.style.bottom = "0";
            alienm1.style.width = "30vw";
            alienm2.style.right = "70vw";
            alienm2.style.bottom = "0";
            alienm2.style.width = "30vw";
            back.style.display = "none";
            tevent[i].style.top = "12vh";
            hidedata[i].style.display = "block";
            setTimeout(
                function (){
                    tdata[x-1].style.display = "block";
                    texttdata[x-1].style.display = "block";
                    $(tdata[x-1]).fadeIn(300);
                    $(tdata[x-1]).animate({height:"70vh"},300,'linear');
                },300);
        }
        else if(i!=(x-1))
        {
            tevent[i].style.display = "none";
        }
    }   
}

function showcevent(x){
    for(var i=0;i<8;i++)
    {
        if(i==(x-1))
        {
            alienm1.style.left = "70vw";
            alienm1.style.bottom = "0";
            alienm1.style.width = "30vw";
            alienm2.style.right = "70vw";
            alienm2.style.bottom = "0";
            alienm2.style.width = "30vw";
            back.style.display = "none";
            cevent[i].style.top = "12vh";
            hidedatac[i].style.display = "block";
            next.style.display = "none";
            setTimeout(
                function (){
                    cdata[x-1].style.display = "block";
                    textcdata[x-1].style.display = "block";
                    $(cdata[x-1]).fadeIn(300);
                    $(cdata[x-1]).animate({height:"70vh"},300,'linear');
                    
                },300);
        }
        else if(i!=(x-1))
        {
            cevent[i].style.display = "none";
        }
    }   
}
function showcevent2(x){
    for(var i=0;i<8;i++)
    {
        if(i==(x-1))
        {
            alienm1.style.left = "70vw";
            alienm1.style.bottom = "0";
            alienm1.style.width = "30vw";
            alienm2.style.right = "70vw";
            alienm2.style.bottom = "0";
            alienm2.style.width = "30vw";
            back.style.display = "none";
            cevent[i+7].style.top = "12vh";
            hidedatac[i+7].style.display = "block";
            prev.style.display = "none";
            setTimeout(
                function (){
                    cdata[x-1+7].style.display = "block";
                    textcdata[x-1+7].style.display = "block";
                    $(cdata[x-1+7]).fadeIn(300);
                    $(cdata[x-1+7]).animate({height:"70vh"},300,'linear');
                    
                },300);
        }
        else if(i!=(x-1))
        {
            cevent[i+7].style.display = "none";
        }
    }   
}

function hidetevent(x){
    
    $(texttdata[x-1]).fadeOut(300);
    $(tdata[x-1]).animate({height:"0vh"},300,'linear');
    hidedata[x-1].style.display = "none";
    setTimeout(
        function(){

            tdata[x-1].style.display = "none";
            for(var i=0;i<7;i++)
            {
                back.style.display = "block";
                tevent[i].style.display = "block";
                tevent1.style.top = "12vh";
                tevent2.style.top = "22vh";
                tevent3.style.top = "32vh";
                tevent4.style.top = "42vh";
                tevent5.style.top = "52vh";
                tevent6.style.top = "62vh";

                alienm1.style.left = "-20vh";
                alienm1.style.bottom = "-8vh";
                alienm1.style.width = "40vh";
                alienm2.style.right = "-20vh";
                alienm2.style.bottom = "-8vh";
                alienm2.style.width = "40vh";
            }
        },800);

}
function hidecevent(x){
    
    $(textcdata[x-1]).fadeOut(300);
    $(cdata[x-1]).animate({height:"0vh"},300,'linear');
    hidedatac[x-1].style.display = "none";
    setTimeout(
        function(){

            cdata[x-1].style.display = "none";
            for(var i=0;i<8;i++)
            {
                back.style.display = "block";
                next.style.display = "block";
                cevent[i].style.display = "block";
                cevent1.style.top = "12vh";
                cevent2.style.top = "22vh";
                cevent3.style.top = "32vh";
                cevent4.style.top = "42vh";
                cevent5.style.top = "52vh";
                cevent6.style.top = "62vh";
                cevent7.style.top = "72vh";

                alienm1.style.left = "-20vh";
                alienm1.style.bottom = "-8vh";
                alienm1.style.width = "40vh";
                alienm2.style.right = "-20vh";
                alienm2.style.bottom = "-8vh";
                alienm2.style.width = "40vh";
            }
        },800);
}
function hidecevent2(x){
    
    $(textcdata[x-1+7]).fadeOut(300);
    $(cdata[x-1+7]).animate({height:"0vh"},300,'linear');
    hidedatac[x-1+7].style.display = "none";
    setTimeout(
        function(){

            cdata[x-1+7].style.display = "none";
            for(var i=0;i<8;i++)
            {
                back.style.display = "block";
                prev.style.display = "block";
                cevent[i+7].style.display = "block";
                cevent8.style.top = "12vh";
                cevent9.style.top = "22vh";
                cevent10.style.top = "32vh";
                cevent11.style.top = "42vh";
                cevent12.style.top = "52vh";
                cevent13.style.top = "62vh";
                cevent14.style.top = "72vh";

                alienm1.style.left = "-20vh";
                alienm1.style.bottom = "-8vh";
                alienm1.style.width = "40vh";
                alienm2.style.right = "-20vh";
                alienm2.style.bottom = "-8vh";
                alienm2.style.width = "40vh";
            }
        },800);
}
function hideevents(){
    t_c_page.style.display = "block";
    tech_events.style.display = "none";
    back.style.display = "none";
    cult_events.style.display = "none";
    cult_events2.style.display = "none";
    mobile_heading.style.display = "block";
    subheadingt.style.display = "none";
    subheadingc.style.display = "none";

}


// mobile ends