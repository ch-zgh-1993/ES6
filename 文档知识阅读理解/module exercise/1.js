const firstName = 'zhang';
const lastName = 'guohua';

function add(a, b){
	return a+b;
}


// export {firstName};
// export var firstName = '';
// export {n as firstName};
// export firstName  这种写法是错误的，必须与模块内部的变量一一对应关系。
// 推荐使用输出一组变量。
// export {firstName, lastName, add as sum};
// 默认输出, 一个模块只能有一个默认输出。
export default function(){
	console.info('此时import不需要使用大括号');
}