
// function test(){
//     console.log("테스트 함수");

//     return () => {console.log("테스트 함수 2222")};
// }


// setTimeout(test(), 2000);



// console.log(test());


// let func = test();

// console.log(func);


// ////

// const readline = require('readline');
 
// // 인터페이스 객체를 만들자.
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let input = []
// rl.on("line", function(line){
//     input = line.split(' ').map((el) => parseInt(el));
//     rl.close();
// })
// let A , B ;
// rl.on("close", function(){
//     A = input[0];
//     B = input[1];
//     console.log(A+B);
// })

// /////

// function calculator(kind) {
    
//     let cal;

//     A = 5;
//     B = 4;

//     if (kind == 'add' ) {

//         cal = function(A,B) {
//             console.log(`${A}+${B} = ${A+B}`);
//             return A+B;
//         }

//     } else if (kind == 'minus') {
        
//         cal = function(A,B) {
//             console.log('2');
//             return A-B;
//         }

//     } else {

//     }

//     return cal;
// }

calc2 = {
    "add" : (x,y) => x+y,
    "minus" : (x,y) => x-y
}

console.log(calc2["add"](4,5));


function calculator(kind) {
    
    calc = {
        "add" : (x,y) => x+y,
        "minus" : (x,y) => x-y
    }

    return calc[kind]; 
}
let addFunc = calculator("add");
let minusFunc = calculator("minus");

console.log(addFunc(4,5));
console.log(minusFunc(7,5));