$(document).ready(function(){
    

    $("#findBtn").click(function(e) {
        e.preventDefault();

        let url = "https://pokeapi.co/api/v2/pokemon/";
        let query = $("input:text").val().toLowerCase();
        $.get(`${url}${query}`,function(response){
            console.log(response);
            console.log(response.name);
            $('#place').append(`<img src="${response.sprites.front_default}">`);
            $('#place').append(`<h1>name: ${response.name}<h1>`);
            $('#place').append(`<h1>type: ${response.types[0].type.name}<h1>`);
        });



    });
});