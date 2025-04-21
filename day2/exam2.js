
function sum(x,y) {
    return x+y;
}


sum(1,2);


function greeting(name) {
    console.log(name + "님 환영합니다.");
}

greeting("홍길동");
greeting("김철수");

function test(x) {
    console.log(x);
}

test("안녕");
test(1);
test([1,2,3,4]);
test(function(){});


let func = function(){
    console.log("변수에 넣은 함수!");
}

let func2 = test;

func();

func2('헬로');