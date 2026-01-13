document.querySelector("#light_on").addEventListener('click',function(){
    //console.log("The light was turned on");
    /* this is a multi
    line comment */
    document.querySelector("#status").textContent = "Lights are on";
    document.querySelector("#lightbulb").src="lightbulb_on.webp";
    document.querySelector("#lightbulb").alt="An illustration of a lightbulb with a yellow globe, indicating it is on"


    //change the background and foreground color

      document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#d9d9d9";

    document.querySelector("#light_on").style.display="none";
    document.querySelector("#light_off").style.display="initial";
})

