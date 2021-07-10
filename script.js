$('#compteur').text("Message total : " + $('.bloc-message').length)


$("body").on("click", '.trash', function(){
    console.log("click detecté");
    $(this).parent().remove();
    $('#compteur').text("Message total : " + $('.bloc-message').length)
})

function addMessage () {
    $("body").append(`
        <div class="bloc-message">
            <img class="avatar" src="/ressources/avatar-1.jpg" alt="avatar-1"/>
            <div class="text">
                <h6>Maxime Violi</h6>
                <p>${$("#userText").val()}</p>
            </div>
            <img class="trash" src="/ressources/trash.png" alt="poublle">
        </div>
    `)
    $('#compteur').text("Message total : " + $('.bloc-message').length)
    $("#userText").val("");
}

$('#buttonAdd').click(function(){
    addMessage();

})

$('.addMessage').on('keyup', function (e) {
    if (e.key == 'Enter') {
        addMessage();
    }
})

function search (){
    $("h6").each(function (){
        console.log($(this).text());
        console.log($("#search-message").val())
        // console.log($(this)[0])
         if ($(this).text() == $("#search-message").val() ){
            $(this).parent().parent().show()
        } else {
            $(this).parent().parent().hide();
        }
            // console.log("---")
        
    })

    $("#search-message").val("")
}


$("#btn-search").click(function(){
    search();
})

$('.hautDePage').on('keyup', function(e){
    if (e.key == 'Enter'){
        search();
    }
})