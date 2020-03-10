

$(document).ready( function () {     
    $("#another_ingredient").click(function(){
        var new_i = document.createElement("input");
        new_i.setAttribute('type', 'text')
        var new_line = document.createElement("br");
        var ingreds = document.getElementById("ingredients")
        ingreds.appendChild(new_line)
        ingreds.appendChild(new_i)
    })
});


