
/**********************
	HELPER FUNCTIONS
**********************/
// get a random integer in range (min and max inclusive)
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
// get the lowest common multiple of two integers
function lcm(x, y) {
	return (!x || !y) ? 0 : Math.abs((x * y) / gcd_two_numbers(x, y));
}
// get the greatest common denominator of two integers
function gcd_two_numbers(x, y) {
	x = Math.abs(x);
	y = Math.abs(y);
	while(y) {
		var t = y;
		y = x % y;
		x = t;
	}
	return x;
}
// return a string representing a (positive) integer in roman numeral system
function romanize(num) {
	if (!+num)
		return NaN;
	var digits = String(+num).split(""),
		key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
			"","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
			"","I","II","III","IV","V","VI","VII","VIII","IX"],
			roman = "",
			i = 3;
	while (i--)
		roman = (key[+digits.pop() + (i * 10)] || "") + roman;
	return Array(+digits.join("") + 1).join("M") + roman;
}

// list of anions
var anions = [
	{"name": "cianid", "formula": "CN", "charge": 1, "fullname": "cianovodikova", "needsParentheses": true},
	{"name": "sulfid", "formula": "S", "charge": 2, "fullname": "žveplovodikova"},
	{"name": "hidrogensulfid", "formula": "HS", "charge": 1, "fullname": "žveplovodikova", "needsParentheses": true},
	{"name": "nitrat(V)", "formula": "NO<sub>3</sub>", "charge": 1, "fullname": "dušikova (V)", "needsParentheses": true},
	{"name": "nitrat(III)", "formula": "NO<sub>2</sub>", "charge": 1, "fullname": "dušikova (III)", "needsParentheses": true},
	{"name": "sulfat(VI)", "formula": "SO<sub>4</sub>", "charge": 2, "fullname": "žveplova (VI)", "needsParentheses": true},
	{"name": "hidrogensulfat(VI)", "formula": "HSO<sub>4</sub>", "charge": 1, "fullname": "žveplova (VI)", "needsParentheses": true},
	{"name": "sulfat(IV)", "formula": "SO<sub>3</sub>", "charge": 2, "fullname": "žveplova (IV)", "needsParentheses": true},
	{"name": "hidrogensulfat(IV)", "formula": "HSO<sub>3</sub>", "charge": 1, "fullname": "žveplova (IV)", "needsParentheses": true},
	{"name": "karbonat", "formula": "CO<sub>3</sub>", "charge": 2, "fullname": "ogljikova", "needsParentheses": true},
	{"name": "hidrogenkarbonat", "formula": "HCO<sub>3</sub>", "charge": 1, "fullname": "ogljikova", "needsParentheses": true},
	{"name": "fosfat(V)", "formula": "PO<sub>4</sub>", "charge": 3, "fullname": "fosforjeva (V)", "needsParentheses": true},
	{"name": "hidrogenfosfat(V)", "formula": "HPO<sub>4</sub>", "charge": 2, "fullname": "fosforjeva (V)", "needsParentheses": true},
	{"name": "dihidrogenfosfat(V)", "formula": "H<sub>2</sub>PO<sub>4</sub>", "charge": 1, "fullname": "fosforjeva (V)", "needsParentheses": true},
	{"name": "fosfat(III)", "formula": "PO<sub>3</sub>", "charge": 3, "fullname": "fosforjeva (III)", "needsParentheses": true},
	{"name": "hidrogenfosfat(III)", "formula": "HPO<sub>3</sub>", "charge": 2, "fullname": "fosforjeva (III)", "needsParentheses": true},
	{"name": "dihidrogenfosfat(III)", "formula": "H<sub>2</sub>PO<sub>3</sub>", "charge": 1, "fullname": "fosforjeva (III)", "needsParentheses": true},

	{"name": "klorid", "formula": "Cl", "fullname": "klorovodikova", "charge": 1},
	{"name": "klorat(I)", "formula": "ClO", "charge": 1, "fullname": "klorova (I)/hipoklorova", "needsParentheses": true},
	{"name": "klorat(III)", "formula": "ClO<sub>2</sub>", "charge": 1, "fullname": "klorova (III)/klorasta", "needsParentheses": true},
	{"name": "klorat(V)", "formula": "ClO<sub>3</sub>", "charge": 1, "fullname": "klorova (V)", "needsParentheses": true},
	{"name": "klorat(VII)", "formula": "ClO<sub>4</sub>", "charge": 1, "fullname": "klorova (VII)/perklorova", "needsParentheses": true},

	{"name": "bromid", "formula": "Br", "fullname": "bromovodikova", "charge": 1},
	{"name": "bromat(I)", "formula": "BrO", "charge": 1, "fullname": "bromova (I)/hipobromova", "needsParentheses": true},
	{"name": "bromat(III)", "formula": "BrO<sub>2</sub>", "charge": 1, "fullname": "bromova (III)/bromasta", "needsParentheses": true},
	{"name": "bromat(V)", "formula": "BrO<sub>3</sub>", "charge": 1, "fullname": "bromova (V)", "needsParentheses": true},
	{"name": "bromat(VII)", "formula": "BrO<sub>4</sub>", "charge": 1, "fullname": "bromova (VII)/perbromova", "needsParentheses": true},

	{"name": "jodid", "formula": "I", "fullname": "jodovodikova", "charge": 1},
	{"name": "jodat(I)", "formula": "IO", "charge": 1, "fullname": "jodova (I)/hipojodova", "needsParentheses": true},
	{"name": "jodat(III)", "formula": "IO<sub>2</sub>", "charge": 1, "fullname": "jodova (III)/jodasta", "needsParentheses": true},
	{"name": "jodat(V)", "formula": "IO<sub>3</sub>", "charge": 1, "fullname": "jodova (V)", "needsParentheses": true},
	{"name": "jodat(VII)", "formula": "IO<sub>4</sub>", "charge": 1, "fullname": "jodova (VII)/perjodova", "needsParentheses": true}
]

// list of common cations
var cations_common = [
	{"name": "Litijev", "formula": "Li", "charge": 1},
	{"name": "Natrijev", "formula": "Na", "charge": 1},
	{"name": "Kalijev", "formula": "K", "charge": 1},
	{"name": "Rubidijev", "formula": "Rb", "charge": 1},
	{"name": "Berilijev", "formula": "Be", "charge": 2},
	{"name": "Magnezijev", "formula": "Mg", "charge": 2},
	{"name": "Kalcijev", "formula": "Ca", "charge": 2},
	{"name": "Stroncijev", "formula": "Sr", "charge": 2},
	{"name": "Barijev", "formula": "Ba", "charge": 2},
	{"name": "Aluminijev", "formula": "Al", "charge": 3},
	{"name": "Amonijev", "formula": "NH<sub>4</sub>", "charge": 1, "needsParentheses": true}
]

var cations_advanced = [
	{"name": "Skandijev", "formula": "Sc", "charge": [3]},
	{"name": "Titanov", "formula": "Ti", "charge": [4, 3, 2]},
	{"name": "Vanadijev", "formula": "V", "charge": [5, 4, 3, 2]},
	{"name": "Kromov", "formula": "Cr", "charge": [6, 3, 2]},
	{"name": "Manganov", "formula": "Mn", "charge": [7, 4, 3, 2]},
	{"name": "Železov", "formula": "Fe", "charge": [3, 2]},
	{"name": "Kobaltov", "formula": "Co", "charge": [3, 2]},
	{"name": "Nikljev", "formula": "Ni", "charge": [3, 2]},
	{"name": "Bakrov", "formula": "Cu", "charge": [2, 1]},
	{"name": "Itrijev", "formula": "Y", "charge": [3]},
	{"name": "Cikronijev", "formula": "Zr", "charge": [4]},
	{"name": "Molibdenov", "formula": "Mo", "charge": [6, 3, 2]},
	{"name": "Paladijev", "formula": "Pd", "charge": [4, 2]},
	{"name": "Kadmijev", "formula": "Cd", "charge": [2]},
	{"name": "Živosrebrov", "formula": "Hg", "charge": [2, 1]},
	{"name": "Talijev", "formula": "Tl", "charge": [3, 1]},
	{"name": "Svinčev", "formula": "Pb", "charge": [4, 2]},
	{"name": "Volframov", "formula": "W", "charge": [6, 4, 3, 2]},
	{"name": "Srebrov", "formula": "Ag", "charge": [1]},
	{"name": "Cinkov", "formula": "Zn", "charge": [2]}
]

var pendingPair = getRandomPair(); // the pair currently being displayed
var isPending = false; // is the person currently guessing? false means they're looking at the solution
var score = -0.5; // score will be the round-down of this
window.onload = function() {
	pendPair(getRandomPair()); // queue up a new random pair
	document.getElementById("card").addEventListener("click", function(e) { e.preventDefault(); pendPair(getRandomPair()); });
	document.getElementById("card").addEventListener("mousedown", function(e) { e.preventDefault(); }); // disable selections
}

// queue a new anion-cation pair to display - if the solution is being shown, replace it with the new newPair
// otherwise just show the solution
function pendPair(newPair) {
	if (isPending) revealPair(pendingPair);
	else hidePair(newPair);
	isPending = !isPending;
	score += 0.5; // the score goes up only every 2 function calls (no score for merely displaying the solution)
	document.getElementById("score").innerHTML = Math.ceil(score); // increment the score
}
// puts up a new pair and hides the infomation the user is supposed to guess (retrieves settings from DOM)
function hidePair(newPair) {
	pendingPair = newPair;
	var name = newPair[0];
	var formula = newPair[1];


	document.getElementById("card").classList.add("leaving");
	setTimeout(function(){
		document.getElementById("card").classList.remove("leaving");

		document.getElementById("postopek").classList.add("hidden");
		document.getElementById("name").innerHTML = name;
		document.getElementById("formula").innerHTML = formula;
		if (document.getElementById("guessing").checked)
			document.getElementById("formula").innerHTML = "?";
		else
			document.getElementById("name").innerHTML = "?";


		document.getElementById("card").classList.add("arriving");
		setTimeout(function(){
			document.getElementById("card").classList.remove("arriving");
		}, 500);
	}, 500);

	// log the solution for cheating purposes
	console.log(name.split('<sub>').join('').split('</sub>').join('') + " : " + formula.split('<sub>').join('').split('</sub>').join(''));
}
// generates a random cation-anion pair from the lists defined above
function getRandomPair() {
	var anion = anions[getRandomInt(0, anions.length-1)];
	var cation = cations_common[getRandomInt(0, cations_common.length-1)];

	if (Math.random() > 0.6) { /* 40% chance of uncommon cation */
		var selection = cations_advanced[getRandomInt(0, cations_common.length-1)]; // get a random uncommon cation from the list
		var charge = selection.charge[getRandomInt(0, selection.charge.length-1)]; // pick a random charge of all available charges
		cation = {"name": selection.name+"("+romanize(charge)+")", "formula": selection.formula, "charge": charge}; // create a cation object
	}

	var name = cation.name + " " + anion.name;
	var formula = createFormula(anion, cation);
	return [name, formula];
}
// reveals the solution of the problem
function revealPair(pair) {
	document.getElementById("card").classList.add("turning1"); // start turning the card
	setTimeout(function(){ // after 0.5 seconds, the turning is halfway done, change the card text
		document.getElementById("name").innerHTML = pair[0];
		document.getElementById("formula").innerHTML = pair[1];
		document.getElementById("postopek").classList.remove("hidden");

		 // finish turning the card
		document.getElementById("card").classList.remove("turning1");
		document.getElementById("card").classList.add("turning2");
		setTimeout(function(){
			document.getElementById("card").classList.remove("turning2");
		}, 250);
	}, 250);
}
// takes a anion-cation pair and forges them together into a formula
// it takes into account the ion charge to calculate the quantities
// and adds the parentheses if needed. Returns string - combined formula
function createFormula(anion, cation) {
	var veckratnik = lcm(Math.abs(anion.charge), Math.abs(cation.charge));
	var chargeAnion  = veckratnik /  anion.charge;
	var chargecation = veckratnik / cation.charge;

	var an = anion.formula;
	if (chargeAnion != 1) {
		if (anion.needsParentheses) an = "(" + an + ")";
		an += "<sub>" + chargeAnion + "</sub>";
	}

	var ca = cation.formula;
	if (chargecation != 1) {
		if (cation.needsParentheses) ca = "(" + ca + ")";
		ca += "<sub>" + chargecation + "</sub>";
	}

	return ca + an;
}
