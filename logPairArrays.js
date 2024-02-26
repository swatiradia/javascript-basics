 const array1 = ['a', null,'c','x'];
const array2 = ['z',null,'e'];

// function containCommanItems(array1, array2){
//     let map={};
//     for(let i=0;i<array1.length;i++){
//         if(!map[array1[i]]){
//             const item = array1[i];
//             map[item] = true;
//         }
//     }
//     for(let j=0;j<array2.length;j++){
//         if(map[array2[j]]){
//             console.log("true");
//             return true;
//         }
//     }
//     console.log("false");
//     return false;
// }

function containCommanItems1(array1, array2){
    return array1.some(item => array2.includes(item));
}


containCommanItems1(array1, array2)