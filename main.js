//let marvelAPI = 'https://gateway.marvel.com/v1/public/comics';
    
//let apikey: 'fc0e2b2bcfc273962ce941db43aa2039'

function test() {
	const privateKey = "f379cea25367eb3252538ffe31fd91d2711baf5b";
	const publicKey = "7e12737fc57a541a234aeaeafdda5eb3";

		const ts = Date.now();
        const hash =  SparkMD5.hash(ts + privateKey + publicKey);
        const URL = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
        

		fetch(URL).then(response => console.log(response.json()));
	};