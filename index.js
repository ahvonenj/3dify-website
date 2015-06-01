$(document).ready(function()
{

    var w = screen.availWidth;
    var h = screen.availHeight;
    /*$("body").append( "<span id = '4343DFe34fd'>Q/E: 2Drotate</br>Mouse-middle: 3Drotate</br>Mouse-right: Drag</span>");
    $("#4343DFe34fd").css("color", "#3498db");
    $("#4343DFe34fd").css("font-size", "200%");
    $("#4343DFe34fd").css("position", "absolute");
    $("#4343DFe34fd").css("font-weight", "bold");
    $("#4343DFe34fd").css("left", w/2);
    $("#4343DFe34fd").css("top", h/2);

    $("#4343DFe34fd").fadeOut(2000);*/

    /*document.onselectstart = function () { return false; };*/
    document.oncontextmenu = function() {return false;};

    $('html').bind("contextmenu", function () 
    {
        return false;
    });

    var lastX = -6666666;
    var lastY = -6666666;
    var curX;
    var curY;
    var deltaX;
    var deltaY;

    $("html").mousemove(function(event) 
    {
        if(mdown)
        {
            if(lastX == -6666666 || lastY == -6666666)
            {
                lastX = event.pageX;
                lastY = event.pageY;
            }

            curX = event.pageX;
            curY = event.pageY;
            deltaX = lastX - curX;
            deltaY = lastY - curY;
            lastX = curX;
            lastY = curY;

            $('html').css({
                perspective: '250px',
                rotateX: '+=' + deltaY / 20 + 'deg',
                rotateY: '+=' + deltaX / 20 + 'deg'
            }).stop(true, true);
        }
        else if(rdown)
        {
            curX = event.pageX;
            curY = event.pageY;
            deltaX = (lastX - curX) * -1;
            deltaY = (lastY - curY) * -1;
            lastX = curX;
            lastY = curY;

            var left = parseInt($('html').css("margin-left")); 
            $('html').css("margin-left", left + deltaX);

            var top = parseInt($('html').css("margin-top")); 
            $('html').css("margin-top", top + deltaY);
        }
        else
        {
            curX = event.pageX;
            curY = event.pageY;
            deltaX = lastX - curX;
            deltaY = lastY - curY;
            lastX = curX;
            lastY = curY;
        }	
    });

    var ldown = false;
    var mdown = false;
    var rdown = false;

    $("html").mousedown(function(event) 
    {
        if(event.which == 1)
        {
            ldown = true;
        }
        else if(event.which == 2)
        {
            mdown = true;
            event.preventDefault();
        }
        else if(event.which == 3)
        {
            rdown = true;
            event.preventDefault();
        }

    });

    $("html").mouseup(function() 
    {
        ldown = false;
        mdown = false;
        rdown = false;
    });

    var current = 1;
    $('html').mousewheel(function(event) 
    {

        if(altdown)
        {
            event.preventDefault();
            current += event.deltaY / 10;
            $('html').css({
                scale: current
            });
            console.log(current);
        }

    });

    var altdown = false;

    $("html").keydown(function(event) 
    {
        switch(event.which)
        {
            case 18: /*alt*/
                event.preventDefault();
                altdown = true;
                break;
            case 81: /*q*/
                $("html").css({ rotate: '-=2deg' }).stop(true, true);				
                break;
            case 69: /*e*/
                $("html").css({ rotate: '+=2deg' }).stop(true, true);
                break;
            case 82:
                $('html').css({
                    perspective: '0px',
                    rotateX: 0 + 'deg',
                    rotateY: 0 + 'deg',
                    rotate: 0 + 'deg',
                    scale: 1
                }).stop(true, true);
                $('html').css("margin-left", 5);
                $('html').css("margin-top", 5);
                break;
        }
    });

    $("html").keyup(function(event) 
    {
        altdown = false;
    });
});