/* 反模式 */
//function add(a,b){
//	return a+b;
//}
//function sub(a,b){
//	return a-b;
//}

/* 字面量 */
//var math={
//	add:function(a,b){
//		return a+b;
//	},
//	sub:function(a,b){
//		return a-b;
//	}
//}

/* namespace */
namespace("math",[],function(){
	function add(a,b){
		return a+b;
	}
	function sub(a,b){
		return a-b;
	}
	return{
		add:add,
		sub:sub
	}
})



