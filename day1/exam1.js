
//callback 함수 




function hello(name){
    console.log(name + "님 안녕하세요!.");

}



function imgLoad( callback, name) {
    console.log("끝22");

    callback(name);

}

imgLoad(hello,'홍길동');
