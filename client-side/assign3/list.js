
var callback = function(){
    document.getElementById("add-button").addEventListener("click",function(){
        var grocery_item = document.getElementById("grocery-item");
        var grocery_text = grocery_item.value
        var ol = document.getElementById("list-container");
        var li = document.createElement("li");
        li.innerHTML = grocery_text
        ol.appendChild(li);
        grocery_item.value = "";
    });

    document.getElementById("remove-button").addEventListener("click", function(){
        var ol = document.getElementById("list-container");
        var lastChild = ol.lastElementChild;
        ol.removeChild(lastChild);
    })

    document.getElementById("change-background").addEventListener("click",function(){
        var new_color = prompt("Please enter a new color", "White");
        if(new_color !== null && new_color !== ""){
            document.body.style.backgroundColor = new_color
        }
    })
};




if ( document.readyState === "complete" ||
 (document.readyState !== "loading" && !document.documentElement.doScroll)
) 
{ callback(); }
else 
{ 
  document.addEventListener("DOMContentLoaded", callback); 
}
