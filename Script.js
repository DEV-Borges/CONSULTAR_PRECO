	const cod = document.getElementById("cod");
	const descricao = document.getElementById("descricao");
	const barra = document.getElementById("barra");
	
	// Get all data
	/*axios.get('https://sheetdb.io/api/v1/58f61be4dda40')
	.then( response => {
		
	});

	// Get 10 results starting from 20
	axios.get('https://sheetdb.io/api/v1/58f61be4dda40?limit=10&offset=1')
	.then( response => {
		console.log(response.data);
	});

	// Get all data sorted by name in ascending order
	axios.get('https://sheetdb.io/api/v1/58f61be4dda40?sort_by=name&sort_order=asc')
	.then( response => {
		console.log(response.data);
	});
	
	axios.get('https://sheetdb.io/api/v1/58f61be4dda40/keys')
    .then( response => {
        console.log(response.data);
    });*/
function Search(){
	
	const x = document.getElementById("codigo").value;
	
	axios.get(`https://sheetdb.io/api/v1/jmrpgihom7kxp/search?CODBARRA=${x}`)
    .then( response => {
        const A =response.data;
		const B = A[0]
		const C = B.CODIGO
		const D = B.DESCRICAO
		const E = B.CODBARRA
		console.log(response.data) 
		cod.innerHTML = C
		descricao.innerHTML = D
		barra.innerHTML = E
})
}