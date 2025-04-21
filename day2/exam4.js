

// console.log('1111');


// setTimeout(function(){
//     console.log('222');
// },1000);

// console.log('3333');


/// A라는 문자를 실행 후 1 초 뒤에 출력 , A출력후 1초 뒤에 B출력 , B출력 후 1초뒤에 C출력 , C출력후 3초 뒤 D 출력




function atext() {
    console.log("A");

    return setTimeout(btext,1000);
}

function btext() {
    console.log("B");
    
    return setTimeout(ctext,1000);
}

function ctext() {
    console.log("C");
    
    return setTimeout(dtext,3000);
}

function dtext() {
    console.log("D");
}

setTimeout(atext,1000);






