let arr=[11,4,5,15,3,17,1];

let  sorted_arr=arr.sort(function(a,b){return a-b});
console.log(sorted_arr);
let count= sorted_arr[sorted_arr.length-1];
let missing_arr=[];

for (let i = 1; i < count; i++) {
    if(sorted_arr.indexOf(i)==-1){
        missing_arr.push(i);
    }


}
console.log(missing_arr);