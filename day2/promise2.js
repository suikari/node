
// function delay(time){
//     return new Promise( (resolve) => {
//         setTimeout(
//             function () {
//                 resolve(time);
//             },time);
//     } );
// }




function delay(time){
    return new Promise( (resolve) => {
        setTimeout(resolve,time);
    } );
}

async function test () {
    await delay(1000);
    console.log('A');
    await delay(1000);
    console.log('B');
    await delay(1000);
    console.log('C');
    await delay(1000);
    console.log('D');
}

test();

// delay(1000)
//     .then((res)=>{
//         console.log(`${res/1000}초 뒤 실행`);
//         return delay(3000);
//     })
//     .then((res)=>{
//         console.log(`${res/1000}초 뒤 실행`);
//         return delay(5000);
//     })
//     .then ((res)=>{
//         console.log(`${res/1000}초 뒤 실행`);
//     });


