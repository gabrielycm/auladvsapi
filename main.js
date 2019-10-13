//let marvelAPI = 'https://gateway.marvel.com/v1/public/comics';
    
//let apikey: 'fc0e2b2bcfc273962ce941db43aa2039'

function personagens() {
	const privateKey = "f379cea25367eb3252538ffe31fd91d2711baf5b";
	const publicKey = "7e12737fc57a541a234aeaeafdda5eb3";

		const ts = Date.now();
        const hash =  SparkMD5.hash(ts + privateKey + publicKey);
        const URL = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
        const URL2 = `http://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}`

		fetch(URL).then(res =>res.json().then(res =>
			 montarCard(res.data.results)
		))

}

function montarCard(content){
	
	let data = content;
	const lugar = document.querySelector("#root");
	let text = "";
	
	data.forEach(pessoa => {
		text += `
        	<div class="card">
            	<div class="cardimg">
					<img src="${pessoa.thumbnail.path}.jpg">
				</div>
				<div class="cardtext">
            		<h2>${pessoa.name}</h2>
            	</div>
			</div>
		`
    });

	lugar.innerHTML= text;
}

function apagarPers() {
	const lugar = document.querySelector("#root");
	text = "";
	lugar.innerHTML = text;
}

function Comics() {
	const privateKey = "f379cea25367eb3252538ffe31fd91d2711baf5b";
	const publicKey = "7e12737fc57a541a234aeaeafdda5eb3";

		const ts = Date.now();
        const hash =  SparkMD5.hash(ts + privateKey + publicKey);
		const URL2 = `http://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}`
		
		fetch(URL2).then(res =>res.json().then(res =>
			 montarCard2(res.data.results)
	   ))

}


function montarCard2(content){
	
	let data = content;
	const lugar = document.querySelector("#root2");
	let text = "";
	console.log(data)
	
	data.forEach(comic => {
		text += `
        	<div class="card">
            	<div class="cardimg">
					<img src="${comic.thumbnail.path}.jpg">
				</div>
				<div class="cardtext">
					<h2>${comic.title}</h2>
            		<h3>${comic.prices.price}</h3>
					
            	</div>
			</div>

        `
    });

	lugar.innerHTML= text;
}

function apagarComics() {
	const lugar = document.querySelector("#root2");
	text = "";
	lugar.innerHTML = text;
}