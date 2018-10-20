
    
    var counter= 100;
    var corr= 0;
    var inco= 0;
    var notanswer= 0;
    var buttonarray =[];
    var snowball =0;
    var check1 =false;
    var check2 =false;
    var check3 = false;
    var check4 =false;
    var startnool =true;
    var timeleft = 30;
    var timebool = true;
    
var questionsobject = [{
    question: "What were Luke's aunt and uncle's job on Tatooine?",
    answers: ["Moisture Farmers", "Miners", "Fuel Depot", "Robot Repair"],
    correctAnswer: ["Moisture Farmers",0]
}, {
    question: "In how many languages is C-3P0 fluent?",
    answers: ["6 million", "More than 6 million", "Less than 6 billion"],
    correctAnswer: ["More than 6 million",1]
}, {
    question: "What is the Wookiee's home world",
    answers: ["Endor", "Kashyyyk", "Roth","Yavin"],
    correctAnswer: ["Kashyyyk",1]
}, {
    question: "In which movie does the camera pan back up after the crawl?",
    answers: ["The Last Jedi", "Episode II: Attack of the Clones", "The Empire Strikes Back", "Revinge of the Sith"],
    correctAnswer: ["Episode II: Attack of the Clones",1]
}];




 function generatequestion() {



        
        
        for (var i = 0; i < 4; i++) {
            buttonarray =[];
            var  newdivforeachq= $("<div ></div'").addClass([i]+'main').css("margin","25px");
            var newdivforq =$("<div class =></div").addClass([i]+'forq').attr('id',questionsobject[i].question);
            var newdivforbutts =$("<div 'buttonclass'></div'").addClass([i]+'forb');
            var newq =questionsobject[i].question;
            var curq =questionsobject[i];
           
            console.log(curq)
            for(var k = 0; k<curq.answers.length; k++){
                var currentanswer = curq.answers[k];
                var newbut = $("<button class='wasitclicked'>"+currentanswer+"</button>").attr('id',questionsobject[i].answers[k]).attr('data-name',[i]).addClass( [i]).css("margin","25px");
                buttonarray.push(newbut);
                              
            }
            
           
            $('#butts').append(newdivforeachq);
            $(newdivforq).appendTo(["."+[i]+"main"]);
            $(newdivforbutts).appendTo(["."+[i]+"main"]);
            $("."+[i]+"forq").append(newq);
            $("."+[i]+"forb").append(buttonarray);
            
           

        }

    }



function score() {
    timebool =false;
        console.log("we made it to score")
        $('#butts').empty();
        
        var table = $('<table></table>').addClass('foo');
        
        $('#butts').append(table);
        $(".foo").append("<tr><td>Your Results</td></tr><tr>")
        var row1 =$("<td >Number correct:</td><td class ='numcorrect'></td></tr>");
       var row2 = $("<tr><td >Number Incorrect:</td><td class = 'numincorrect'></td></tr>");
        var row3 =$("<tr><td>Left Blank</td><td class = 'numleftblank'></td></tr>");
        $(".foo").append(row1);
        $(".foo").append(row2);
        $(".foo").append(row3);
        $(".numcorrect").append(corr);
        $(".numincorrect").append(inco);
        $(".numleftblank").append(notanswer);
        $('#butts').append("<button id='reset'>RESET</button>")
        $("#head-here").empty();
        $("#timehere").empty();
    }
    function clean(){
        $(".foo").append(row1);
        $(".foo").append(row2);
        $(".foo").append(row3);
        $(".numcorrect").append(corr);
        $(".numincorrect").append(inco);
        $(".numleftblank").append(notanswer);
        $('#butts').append("<button id='reset'>RESET</button>")
    }


    function clickclock(){
    //     $("#timehere").empty();
    //     var clock =$("<h2>Timeleft:<span id ='timehere' ></span></h2>")
    //     $("#head-area").append(clock);
        
    //     $("#timehere").append(timeleft);
    //  var t =setInterval(function(){
    //     $("#timehere").empty();
    //     timeleft--;
    //     $("#timehere").append(timeleft);
    //     if(timeleft <= 0){
    //     clearInterval(t);
    //     alert("You're out of time!");
    // }

    //      },1000);
    //      if(!timebool){
    //         clearInterval(t);
           
    //     }
    }
function increasenotanswer(){
                if(check1){
                notanswer = notanswer +1;
            }
            if(check2){
                notanswer = notanswer +1;
            }
            if(check3){
                notanswer = notanswer +1;
            }
            if(check4){
                notanswer = notanswer +1;
            }
            score();
            $('#butts').append("<button id='reset'>RESET</button>");
        }
    $(document).on("click", "#start", function () {
        if(startnool){
        generatequestion();   
        clickclock();}
        startnool =false;
    });
    $(document).on("click", "#reset", function () {
        generatequestion(); 
        clickclock();  
        startnool =true;
    });

    function myStopFunction() {
        clearTimeout(timeleft);
    }
    $(document).on("click", ".wasitclicked", function (){
        
        if(snowball === 4){
            myStopFunction();
            score();
        }

        
        var whchid = $(this).attr('id');
        var charforcheck = $(this).attr('data-name');
        

        
        
        
        var includ1 = charforcheck.includes(0);
        var includ2 = charforcheck.includes(1);
        var includ3 = charforcheck.includes(2);
        var includ4 = charforcheck.includes(3);

        
        var ca1 =questionsobject[charforcheck].correctAnswer[1];
        var isitgonnawork = whchid.includes(questionsobject[charforcheck].answers[ca1]);
        
        
        
        

        if ((includ1) &&(!check1) && (isitgonnawork)){
            
            corr = corr +1;
            console.log(corr);
            check1 =true;
            includ1 =false;
            snowball =snowball +1;
            
        }else if((includ1) &&(!check1) && (!isitgonnawork)){
            inco = inco +1;
            check1 =true;
            includ1 =false;
            snowball =snowball +1;
           
        }
        if ((includ2) &&(!check2) && (isitgonnawork)){
            
            corr = corr +1;
            console.log(corr);
            check1 =true;
            includ2 =false;
            snowball =snowball +1;
            
        }else if((includ2) &&(!check2) && (!isitgonnawork)){
            inco = inco +1;
            check1 =true;
            includ2 =false;
            snowball =snowball +1;
            
           
           
        }
        if ((includ3) &&(!check3) && (isitgonnawork)){
            
            corr = corr +1;
            console.log(corr);
            check1 =true;
            includ3 =false;
            snowball =snowball +1;
            
        }else if((includ3) &&(!check3) && (!isitgonnawork)){
            inco = inco +1;
            check1 =true;
            includ3 =false;
            snowball =snowball +1;
            
            
           
        }
        if ((includ4) &&(!check4) && (isitgonnawork)){
            
            corr = corr +1;
            console.log(corr);
            check1 =true;
            includ4 =false;
            snowball =snowball +1;
          
        }else if ((includ4) &&(!check4) && (!isitgonnawork)){
            inco = inco +1;
            check1 =true;
            includ4 =false;
            snowball =snowball +1;
            
           
        }
    

    
    
    
    });


