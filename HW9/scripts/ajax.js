$(document).ready(function () {
    $("button").click(function () {
        $("#pokeInformation").load("data/pokeInfo.txt", fadeText);
    });
});

function fadeText()
{
    $("#pokeInformation").fadeOut("slow").fadeIn("slow");
}