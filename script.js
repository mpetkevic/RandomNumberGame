var sugalvotasSkaicius = Math.floor(Math.random() * (100 - 0) + 0);



function tikrinti() {
	var inputElementas = document.getElementById("skaicius");
    var skaicius = inputElementas.value;
    isInteger(skaicius);
}

function isInteger(skaicius) {
    	if (skaicius % 1 === 0) {
    		patikrinimas(skaicius);
    	} else {
    		alert("Ne skaičius \nĮveskite skaičių!!!");
    	}
    }
	
function patikrinimas(skaicius) {
	if (skaicius == sugalvotasSkaicius) {
		alert("Bravo!!! Atspėjote \nSugalvotas skaičius:" + skaicius);
	} else {
		if (skaicius > sugalvotasSkaicius) {
			alert("Įveskite mažesnį skaičių");
		} else {
			alert("Įveskite didesnį skaičių");
		}
	}
}
