$(document).ready(function(){
	$("#btn1").click(getPokemon);

	let pokemon = {
		name:'',
		type:'',
		attack:0,
		spriteImg:''
	};

		function getPokemon(){
			let id = Math.floor(Math.random()*800);
			$.get(`https://pokeapi.co/api/v2/pokemon/${id}/`,function(response){
				console.log(response);
				console.log(response.name);
				$('#first').empty();
				$('#first').append(`<img src=${response.sprites.front_default}>`);
				$('#first').append(`<h3>name: ${response.name}<h3>`);
				$('#first').append(`<h3>type: ${response.types[0].type.name}<h3>`);
				$('#first').append(`<h3>Attack: ${response.stats[4].base_stat}<h3>`);
			});
		};
	
		$("#btn2").click(gitPokemon);
	
		function gitPokemon(){
			let id = Math.floor(Math.random()*800);
			$.get(`https://pokeapi.co/api/v2/pokemon/${id}/`,function(response){
				console.log(response);
				console.log(response.name);
				$('#second').empty();
				$('#second').append(`<img src=${response.sprites.front_default}>`);
				$('#second').append(`<h3>name: ${response.name}<h3>`);	
				$('#second').append(`<h3>type: ${response.types[0].type.name}<h3>`);
				$('#second').append(`<h3>Attack: ${response.stats[4].base_stat}<h3>`);
			});
		};

		$("#battle").click(battle);

		function battle(){
		};
 
    $("#findBtn").click(function(e) {
        e.preventDefault();

        let url = "https://pokeapi.co/api/v2/pokemon/";
        let query = $("input:text").val().toLowerCase();
        $.get(`${url}${query}`,function(response){
            console.log(response);
            console.log(response.name);
            $('.container').append(`<img src="${response.sprites.front_default}">`);
            $('.container').append(`<h2>name: ${response.name}<h2>`);
            $('.container').append(`<h2>type: ${response.types[0].type.name}<h2>`);
		});
	});
});