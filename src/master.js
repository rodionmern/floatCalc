function Solution() {
	if (document.getElementById("selectSymbol").value == "+") {
		let Solving__First1st = document.getElementById("inputFirst1st").value;
		let Solving__Second1st = document.getElementById("inputSecond1st").value;
		
		let Solving_Solve__First = Solving__First1st / Solving__Second1st;
		
		let Solving__First2nd = document.getElementById("inputFirst2nd").value;
		let Solving__Second2nd = document.getElementById("inputSecond2nd").value;
		
		let Solving_Solve__Second = Solving__First2nd / Solving__Second2nd;

		console.log(Solving_Solve__First, Solving_Solve__Second)
		
		let solveSolution = document.getElementById("solution").innerHTML = Solving_Solve__First + Solving_Solve__Second;
	}
		
}
