/*
Given an input string mac = "EC:B0:8T:E4"
and object mapper={
    E: 0,
    T: 0
}
Desired output = "0C:B0:80:04"
print mac after changing the occurences of keys of mapper to value on mac string

*/
let mac = "EC:B0:8T:E4";
let macArray = [...mac];
const mapper = {
  E: 0,
  T: 0
}

let arr = (data,macArray)=> {
    // Object.entries() can also be used to get [key, value] from object
    let keys = Object.keys(data);
    // Array.from(mac).forEach OR 
    // [...mac]  -> another way
    // to loop on string
    macArray.forEach((element, index)  => { 
        for (let i = 0; i < keys.length; i++) {
            if(element ==keys[i]){
                let tmpString = data[keys[i]] +"";
                macArray[index] = tmpString;
            }
        }
    });
}
console.log(macArray.join(''));
let ans = arr(mapper,macArray);
console.log(macArray.join(''));