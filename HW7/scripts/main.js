// let's create an empty array. We will add to this later
var myViewFinderArray = new Array();

class ViewFinder
{
    // the constructor requires only one title, the description, imagePath, etc.
    // we will create multiple objects from this class
    constructor(title)
    {
        this.title = title;
    }
    toString()
    {
        return "Title: " + this.title;      

    }
    get theTitle()
    {
        return this.title;
    }

}

// this function is called in the body of the HTML page so that the objects are created and added to the 
// array myViewFinderArray
function initializeArray()
{
    var myViewFinder = new ViewFinder("Nothing About Us");
    var myViewFinder1 = new ViewFinder("Blind Justice");
    var myViewFinder2 = new ViewFinder("Century Of Struggle");
    var myViewFinder3 = new ViewFinder("My Vote");
    var myViewFinder4 = new ViewFinder("Vintage Scale");
    // add the first object to the array
    myViewFinderArray.push(myViewFinder); nvssnvvv
    myViewFinderArray.push(myViewFinder1);
    myViewFinderArray.push(myViewFinder2);
    myViewFinderArray.push(myViewFinder3);
    myViewFinderArray.push(myViewFinder4);
    

}

// this function gets an object from the array and puts it into the element with the id title 
function accessInformation()
{

    var randomNumber = Math.floor(Math.random() * myViewFinderArray.length);
    document.getElementById("title").innerHTML = myViewFinderArray[randomNumber].toString();
    document.getElementById("description").innerHTML = myViewFinderArray[randomNumber].toString();
}