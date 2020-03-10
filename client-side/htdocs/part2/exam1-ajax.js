
$(document).ready( function () {     
    $("#nbutton ").click(function(){
        
        $.ajax({
            url: 'https://api.nasa.gov/planetary/apod?api_key=tkfIqWNYP4rcT69VnKtpOlsMG8bhU3cG1xiuzwgp',
            dataType: 'json',
            success: function(result){

                alert(result.explanation);
            },
            error: function(reason, ex){
                alert(reason)
            }
            
        })
    })
});