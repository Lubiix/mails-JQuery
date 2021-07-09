// console.log($('#compteur').text())
// console.log($('.bloc-message'))
$('#compteur').text("Message total : " + $('.bloc-message').length)

$('.trash').click(function(){
    // console.log("click detecté");
    $(this).parent().remove();
    $('#compteur').text("Message total : " + $('.bloc-message').length)
})

$('#buttonAdd').click(function(){
    // console.log("click detecté")
    // console.log($("#userText").val());
    $("body").append('<div class="bloc-message">'+'<img class="avatar" src="/ressources/avatar-1.jpg" alt="avatar-1"/>'+'<div class="text">'+'<h6>Violi Maxime</h6>'+'<p>'+ $("#userText").val() +'</p>'+'</div>'+'<img class="trash" src="/ressources/trash.png" alt="poublle">'+'</div>')
    $('.trash').click(function(){
        // console.log("click detecté");
        $(this).parent().remove();
        $('#compteur').text("Message total : " + $('.bloc-message').length)
    })
    
    $('#compteur').text("Message total : " + $('.bloc-message').length)
    $("#userText").val("");

})

