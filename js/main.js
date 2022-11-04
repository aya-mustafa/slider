var images=Array.from(document.getElementsByClassName("img-fluid"));
var lightBox=document.getElementById("box");
var close=document.getElementById("close");
var prev=document.getElementById("prev");
var next=document.getElementById("next");
var bg = document.getElementById("bg");
var counter =0;

for(var i=0;i<images.length;i++)
{
    images[i].addEventListener("click",function(eventInfo)
    {
        lightBox.style.display="flex";
        var imgSrc=eventInfo.target.src;
        counter= images.indexOf(eventInfo.target);
        bg.style.backgroundImage=`url(${imgSrc})`;
    })
}
close.addEventListener("click",function()
{
    closeItem();
})
function closeItem()
{
    lightBox.style.display="none";
}

prev.addEventListener("click",function()
{
    prevItem();
})
function prevItem()
{
    counter--;
    if(counter<0)
    {
        counter=images.length-1;
    }
    var imgSrc= images[counter].src;
    bg.style.backgroundImage=`url(${imgSrc})`;
}

next.addEventListener("click",function()
{
    nextItem();
})
function nextItem()
{
    counter++;
    if(counter==images.length)
    {
        counter=0;
    }
    var imgSrc= images[counter].src;
    bg.style.backgroundImage=`url(${imgSrc})`;
}
document.addEventListener(('keydown'),function(e)
{
    if(e.key=="ArrowRight")
    {
        nextItem();
    }
    else if(e.key=="ArrowLeft")
    {
        prevItem();
    }
    else if(e.key=="Escape")
    {
        closeItem()
    }
})