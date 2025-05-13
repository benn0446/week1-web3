//the alert function will add a pop-up with a message
//alert("hello world!"); 

console.log("hello world!...quietly");
//tell the first paraghraph (id p1) to listne for a click 
document.getElementById("p1").addEventListener("click",function(){
    console.log("click")
    // change the text in the second paraghraph (id p2)
    document.getElementById("p2").textContent = "You clicked on the first paraghraph";
});