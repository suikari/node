let list = [1,5,4,8,6];



//let newList = [];
//let newList2 = [];
let count = 0;


// for (i=0;i<list.length;i++) {
    
//     if (list[i] >= 5) {
//         newList.push(list[i]);
//         count++;
//     }

// }



let newList = list.filter(
    function(list) {
        return list >= 5
    }
);

// map api 함수 , 화살표, 익명 2가지로

//let newList2 = list.map( x => x * 2);

let newList2 = list.map(
    function (x) {
        return x * 2
    });


// for (i=0;i < list.length;i++) {
//     newList2.push(list[i]*2);
// }

console.log(newList);
console.log(newList2);