function sectionCheck() {
	var sect = document.getElementById('idCateg').value;
	switch(sect) {
		case "F":
			document.getElementById('sectionResult').innerHTML = 'Fiction!';
			break;
		case "N":
			document.getElementById('sectionResult').innerHTML = 'Non-Fiction!';
			break;
		case "R":
			document.getElementById('sectionResult').innerHTML = 'References!';
			break;
		default:
			document.getElementById('sectionResult').innerHTML = 'Try again...';
	}

}

function yearCheck() {
	var lvl = document.getElementById('idGrade').value;
	switch(lvl) {
		case '1':
			document.getElementById('classResult').innerHTML = 'Emerald!';
			break;
		case '2':
			document.getElementById('classResult').innerHTML = 'Ruby!';
			break;
		case'3':
			document.getElementById('classResult').innerHTML = 'Sapphire!';
			break;
		case '4':
			document.getElementById('classResult').innerHTML = 'Topaz!';
			break;
		default:
			document.getElementById('classResult').innerHTML = 'Try again...';
	}
}