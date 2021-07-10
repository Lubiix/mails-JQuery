// console.log($('#compteur').text())
// console.log($('.bloc-message'))
$('#compteur').text("Message total : " + $('.bloc-message').length)


$("body").on("click", '.trash', function(){
    console.log("click detecté");
    $(this).parent().remove();
    $('#compteur').text("Message total : " + $('.bloc-message').length)
})


$('#buttonAdd').click(function(){
    // console.log("click detecté")
    // console.log($("#userText").val());
    $("body").append('<div class="bloc-message">'+'<img class="avatar" src="/ressources/avatar-1.jpg" alt="avatar-1"/>'+'<div class="text">'+'<h6>Maxime Violi</h6>'+'<p>'+ $("#userText").val() +'</p>'+'</div>'+'<img class="trash" src="/ressources/trash.png" alt="poublle">'+'</div>')
    
    $('#compteur').text("Message total : " + $('.bloc-message').length)
    $("#userText").val("");

})

$("#btn-search").click(function(){
    // console.log("click detecté")
    // console.log($("#search-message").val())
    // console.log($("h6"))
    // console.log($("h6").text());
    $("h6").each(function (){
        console.log($(this).text());
        console.log($("#search-message").val())
        // console.log($(this)[0])
        if ($(this).text() == $("#search-message").val() ){
            console.log("It worked");
            $(this).parent().parent().show()
        } else {
            console.log("It didn't work");
            console.log($(this).parent().parent())
            $(this).parent().parent().hide();

        }
            console.log("---")
        
    })

    $("#search-message").val("")
})