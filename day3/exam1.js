


let list = ["apple","banana","kiwi","orange","blueberry","pear"];



let newList = test(list, getFruit);


console.log(newList);

function test( flist, getFruit) {

    return getFruit(flist);
}


function getFruit (flist){
    let getlist = [];
    for (i=0;i<flist.length;i++) {
        if(flist[i].length > 4) {
            getlist.push(flist[i]);
        }    
    } 
    return getlist;
}
