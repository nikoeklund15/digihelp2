/*function next() {
    console.log("moved to next page")
    window.open("C:\Users/sonera\Desktop\Niko\Visual Studio Code\My first project\index2.html");
}*/

function myFunction() {
    alert("Niko Eklund Is Developer!!!");
}

function changeColor() {
    console.log("bg color is changed")
    document.getElementById("body").style["background-color"] = "lightblue";
}
function message() {
    console.log("message has been sended")
    document.getElementById("message").style["background-color"] = "lightblue";
}
function color() {
    /*console.log("txt color is changed")
    var elementList = document.getElementsByClassName("textChangeColor")
    var elementsInArray = Array.from(elementList)
    elementsInArray.forEach(element => element.style.color = "black")*/
    
    var pElements = document.getElementsByTagName("p")
    var hElements = document.getElementsByTagName("h1")
    var parray = Array.from(pElements)
    var harray = Array.from(hElements)
    var both = harray.concat(parray)
    both.forEach(element => {
        console.log(element)
        element.style.color = "black"
    })
    
    
    
    }
    
    