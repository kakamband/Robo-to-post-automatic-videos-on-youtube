const readline = require('readline-sync');

function start(){
	const content = {};
	
	content.searchTerm = askAndreturnSearchTerm();
	content.prefix = askAndReturnPrefix();

	function askAndreturnSearchTerm(){
		return readline.question('Type a Wikipedia search terms: ');
	}

	function askAndReturnPrefix(){
		const prefix = ['Who is', 'What is', 'The Histoty of'];
		const selectedPrefixIndex = readline.keyInSelect(prefix);
		const selectedPrefixText = prefix[selectedPrefixIndex];
		return selectedPrefixText;
	}
	console.log(content);
}

start();




