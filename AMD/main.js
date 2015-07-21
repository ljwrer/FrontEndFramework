require.config({
	baseUrl:"../js",
	paths:{
		"calculator":"calculator",
		"math":"math"
	}
});
require(["calculator"],function(calculator){
	var a=2,b=5;
	alert(calculator.compute(a,b));
});
