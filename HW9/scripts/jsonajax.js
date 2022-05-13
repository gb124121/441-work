$(document).ready(function () {
    $("button").click(function () {
        $("#pokeInformation").load("data/poke.json", function(responseText){
            var poke = JSON.parse(responseText);
            $("#pokeInformation").html("Manufacturer: " + poke.manufacturer 
        + "<br>Model:" + poke.model + "<br>First Name:" + poke.owner.firstName + "<br>Last Name:" 
        + poke.owner.lastName + "<br>Sizes Available:<br>" +
        poke.sizes[0] + "<br>" + poke.sizes[1] + "<br>" + poke.sizes[2] + "<br>" + poke.sizes[3]);
        });
    });
});

function fadeText()
{
    $("#pokeInformation").fadeOut("slow").fadeIn("slow");
}
