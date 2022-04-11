const milili = [10, 25, 4];
function myArr(mili){
    'use strict';
    milili.pop();
    mili = milili.unshift(4);
    
    return milili; 
}
console.log(myArr(milili));
module.exports = myArr;