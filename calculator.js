let display=document.getElementById("display");

function SHOW(value)
    {
        display.value +=value;

    }

    function calculate()
    {
        display.value = eval(display.value)
    }

    function cleardisplay()
    {
        display.value = "";
    }

    function deletelast()  
    {
        display.value = display.value.slice(0,-1);
    }

     
