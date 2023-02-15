function sample1 () {(function (){
var MYAPP= {}
MYAPP.calculator ={
    'left' : null,
    'right' : null
}
MYAPP.coordinate= {
    'left': null,
    'right': null
}
MYAPP.calculator.left = 10;
MYAPP.coordinate.right= 10;
function sum(){
    return MYAPP.calculator.left + MYAPP.coordinate.right;
}
console.log(sum());
} () )
// 전역변수가 없음
// 터미널 출력시 'node 주소'
// 객체속에 함수는 메소드
}
function sample2 () {
    var arr = []
    for(var i = 0; i < 5; i++){
        arr[i] = function(id) {
            return function(){
                return id;
            }
        }(i);
    }
    for(var index in arr) {
        console.log(arr[index]());
    }
}
function sample3 () {
    function sum(){
        var i, _sum = 0;    
        for(i = 0; i < arguments.length; i++){
            document.write(i+' : '+arguments[i]+'<br />');
            _sum += arguments[i];
        }   
        return _sum;
    }
    document.write('result : ' + sum(1,2,3,4));
}
function sample4() {
o1 = {val1:1, val2:2, val3:3}
o2 = {v1:10, v2:50, v3:100, v4:25}
function sum(){
    var _sum = 0;
    for(name in this){
        _sum += this[name];
    }
    return _sum;
}
alert(sum.apply(o1)) // 6
alert(sum.apply(o2)) // 185
}