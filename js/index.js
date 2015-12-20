$( document ).ready(function() {
	//total=0 add=1, sub=2, multiply=3, divide=4
	var operator = 0;
	var currentnum = 0;
	var total = 0;
	
	
	
	function run() {
		
		switch(operator){
			case 0:
				sum();
				break;
			case 1:
				add();
				break;
			case 2:
				subtract();
				break;
			case 3:
				multiply();
				break;
			case 4:
				divide();
				break;
		}
		
	}
	
	function addDigit(newnum) {
		currentnum = parseInt("" + currentnum + newnum);
		updateScreen(currentnum);
	}
	
	function sum() {
		total = currentnum;
		currentnum = 0;
	}
	
	function add() {
		total = total + currentnum;
		currentnum = 0;
	}
	
	function subtract() {
		total = total - currentnum;
		currentnum = 0;
	}
	
	function multiply() {
		total = total * currentnum;
		currentnum = 0;
	}
	
	function divide() {
		total = total / currentnum;
		currentnum = 0;
	}
	
	function updateScreen(num) {
		$('#total').text(num);
	}
	
	$("#equal").on( "click", function() {
		run();
		updateScreen(total);
		operator = 0;
		
	});
	$("#add").on( "click", function() {
		run();
		updateScreen(total);
		operator = 1;
	});
	$("#subtract").on( "click", function() {
		run();
		updateScreen(total);
		operator = 2;
	});
	$("#multiply").on( "click", function() {
		run();
		updateScreen(total);
		operator = 3;
	});
	$("#divide").on( "click", function() {
		run();
		updateScreen(total);
		operator = 4;
	});
	
	$("#one").on( "click", function() {
		addDigit(1);
	});
	$("#two").on( "click", function() {
		addDigit(2);
	});
	$("#three").on( "click", function() {
		addDigit(3);
	});
	$("#four").on( "click", function() {
		addDigit(4);
	});
	$("#five").on( "click", function() {
		addDigit(5);
	});
	$("#six").on( "click", function() {
		addDigit(6);
	});
	$("#seven").on( "click", function() {
		addDigit(7);
	});
	$("#eight").on( "click", function() {
		addDigit(8);
	});
	$("#nine").on( "click", function() {
		addDigit(9);
	});
	$("#zero").on( "click", function() {
		addDigit(0);
	});
	
});