/* 反模式 */
//var action="add";
//function compute(a,b){
//	switch (action){
//		case "add":
//			return add(a,b);
//				break;
//		case "sub":
//			return sub(a,b);
//				break;
//		default:
//			break;
//	}
//}

/* 字面量 */
//var calculator={
//	action:"add",
//	compute:function(a,b){
//		switch(this.action){
//			case "add":
//				return math.add(a,b);
//				break;
//			case "sub":
//				return math.sub(a,b);
//				break;
//			default:
//				break;
//		}
//	}
//}

/* IIFE */
//var calculator=(function(){
//	var action="add";
//	return {
//		compute:function(a,b){
//			switch(action){
//				case "add":
//					return math.add(a,b);
//					break;
//				case "sub":
//					return math.sub(a,b);
//					break;
//				default:
//					break;
//			}
//		}
//	}
//})();

/* IIFE-review module pattern */
//var calculator=(function(m){
//	var action="add";
//	var compute=function(a,b){
//		switch(action){
//			case "add":
//				return m.add(a,b);
//				break;
//			case "sub":
//				return m.sub(a,b);
//				break;
//			default:
//				break;
//		}
//	}
//	return {
//		compute:compute
//	};
//})(math);


/* namespace */
//namespace("calculator",["math"],function(m){
//	var action="add";
//	function compute(a,b){
//		return m[action](a,b);
//	}
//	return{
//		compute:compute
//	}
//})

/* require */

define(["math"],function(math){
	var action="add";
	var compute=function(a,b){
		switch(action){
			case "add":
			return math.add(a,b);
			break;
			case "sub":
			return math.sub(a,b);
			break;
			default:
			break;
		}
	};
	return{
		compute:compute
	}
});


