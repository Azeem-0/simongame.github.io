var j = 1,flag = 1,k;
var a;
var output = [];
var red,blue,yellow,green,wa;
red = new Audio("MUSIC/red.mp3");
blue = new Audio("MUSIC/blue.mp3");
green = new Audio("MUSIC/green.mp3");
yellow = new Audio("MUSIC/yellow.mp3");
wa = new Audio("MUSIC/WA.mp3");
$("button").css("font-size","1");


function Music(ms){
    switch(ms){
        case 1:
                red.play();
                break;
        case 2:
                blue.play();
                break;
        case 3:
                yellow.play();
                break;
        case 4:
                green.play();
                break;
    }
}
$("button").click(function(event){
    a = this.innerHTML;
    if(a != output[k]){
        $(".heading").text("GAME OVER ! PLEASE RESTART THE PAGE TO RESTART THE GAME");
        $("body").addClass("WA");
        output = [];
        setTimeout(function(){
            $("body").removeClass("WA");
        },500);
        wa.play();
    }
    else if (output.length >= 1){
        Animate("."+a);
        k++;
        Number(a);
        Music(a);
        if(k == output.length){
            setTimeout(function() {
                rnad_Gene();
            },1000);
        }
    }
    
});



function random_number(){
    var n = Math.random();
    n = n * 4;
    n = Math.floor(n) + 1;
    return n;
}



document.addEventListener("keydown",function(event)
{   
    if((event.key == "a" || event.key == "A") && flag == 1)
    {
        flag = 0;
        rnad_Gene();
    }
});



function Animate(me){
    $(me).addClass("animate");
    setTimeout(function() {
        $(me).removeClass("animate");
    },280);
}

function rnad_Gene()
{
    var rn = random_number();
    $(".heading").text("Level "+(j++));
    Music(rn);
    Animate("."+rn);
    output.push(rn);
    k = 0;
}
function Gs(ch){
    
}
