let poke = {
    "manufacturer" : "Pokedex",
    "model" : "2300",
    "owner" : {
        "firstName" : "joe",
        "lastName" : "Joe"
    },
    "sizes" : [
        "Small Edition",
        "Medium Edition",
        "Large Edition",
        "X-large Edition"
    ]
}

$(function () {
$("button").click(function () {
    showPokeInfo();
});

});

function showPokeInfo()
{
    $("#pokeInformation").html("Manufacturer: " + poke.manufacturer 
    + "<br>Model:" +poke.model + "<br>First Name:" + poke.owner.firstName + "<br>Last Name:" 
    +poke.owner.lastName + "<br>Sizes Available:<br>" +
poke.sizes[0] + "<br>" +poke.sizes[1] + "<br>" +poke.sizes[2] + "<br>" +poke.sizes[3]);
}