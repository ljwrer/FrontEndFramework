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

/* Commonjs */
//var math=require("./math");
//function Calcuator(container){
//	this.left=container.querySelector(".j-left");
//	this.right=container.querySelector(".j-right");
//	this.add=container.querySelector(".j-add");
//	this.result=container.querySelector(".j-result");
//	this.add.addEventListener("click",this.compute.bind(this));
//}
//Calcuator.prototype.compute=function(){
//	this.result.textContent=math.add(+this.left.value,+this.right.value)
//}
//exports.Calcuator=Calcuator;

/* Simplified CommonJS wrapping */
//define(function(require, exports) {
//	var math = require("./math");//依赖声明
//	function Calcuator(container) {
//		this.left = container.querySelector(".j-left");
//		this.right = container.querySelector(".j-right");
//		this.add = container.querySelector(".j-add");
//		this.result = container.querySelector(".j-result");
//		this.add.addEventListener("click", this.compute.bind(this));
//	}
//	Calcuator.prototype.compute = function() {
//		this.result.textContent = math.add(+this.left.value, +this.right.value)
//	}
//	exports.Calcuator = Calcuator;//接口暴露
//})

/ *Loader Plugins* /
//文本类资源依赖 加载css资源
//define(["regularjs","text!path/tp/foo.html","css!path/to/style.css"],function(Regular,template){
//	Component = Regular.extend({
//		template:template,//字符串文本
//		show:function(){},
//		hide:function(){}
//	})
//	return Component;
//})


/* AMD */
define(["math"], function(math) {
	var action = "add";
	var compute = function(a, b) {
		switch (action) {
			case "add":
				return math.add(a, b);
				break;
			case "sub":
				return math.sub(a, b);
				break;
			default:
				break;
		}
	};
	return {
		compute: compute
	}
});

/* ES6 module */
//	import{ add } from "./math";//import关键字，引入依赖
//	class Calcuator(container) {//class关键字
//		constructor(container){};
//		compute(){
//			this.result.textContent=add(+this.left.value, +this.right.value);
//		}
//	}
//	exports.Calcuator = Calcuator;//接口暴露
