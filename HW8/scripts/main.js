var popSelector = "#naruto";
var allpop = new Array();
class popInfo{
    constructor(selector, imagePath)
    {
        this.selector = selector;
        this.imagePath = imagePath;
    }

    get theSelector(){
        return this.selector;
    }

    get theImagePath(){
        return this.imagePath;
    }

    toString()
    {
        return this.selector + ":" + this.imagePath; 
    }
}

function initializeArray()
{

    var pop = new popInfo("#naruto", "images/naruto.jpg");
    allpop.push(pop);

}
$(document).ready(function(){
    initializeArray();
    console.log(allpop.length);
    console.log(allpop[0].toString());
    console.log(allpop[0].theSelector);
    console.log(allpop[0].theImagePath);

    $(allpop[0].theSelector).src = allpop[0].theImagePath;
    $("#naruto").attr("src","images/hulk.jpg");

    $("button").click(function(){
       
        $(".quotes").fadeOut().fadeIn();

        $("#quote3").toggle();
           setInterval(moveSquare, 500);
        
           $("#quote3").fadeIn();
           setInterval(moveCircle, 10);
        
        $(allpop[0].theSelector).fadeOut().fadeIn();
        
    });
    
});
function moveSquare()
{
    $("#square").animate({left:250}).animate({top:400}).animate({left:0}).animate({top:300});
}
function moveCircle()
{
    $("#circle").animate({left:150}).animate({top:500}).animate({left:0}).animate({top:300});
}
