/* namespace */
var namespace=(
	function(){
		//缓存所有模块
		var cache={};
		//真正返回的namespace函数
		function createModule(name,deps,definition){//模块名，依赖列表，定义
			if(arguments.length===1)return cache[name];//参数只有模块名就输出
			//必须先取得所有依赖的模块
			deps=deps.map(function(depName){
				return ns(depName);
			});//需保证前面的模块已经定义
			//初始化模块并返回
			cache[name]=definition.apply(null,deps);
			return cache[name];
		}
		return createModule
	}
)()
