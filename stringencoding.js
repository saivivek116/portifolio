//for every 3 consecutive same characters replace it with _ in the output string

function encode(str){
    let op = "";
    //bc
    if(str.length<=2)return str

    let currchar = str[0]
    let count = 1
    for(let i=1;i<str.length;i++){
        if(currchar === str[i]){
            count+=1
        }else{
            op = op.concat(new Array(count).fill(currchar).join(""))
            count = 1
            currchar = str[i];
        }
        if(count===3){
            op = op.concat("_");
            count=0
            if(i+1<str.length){
                currchar = str[i+1]
                i+=1
                count += 1;
            }

        }
        // console.log(count, currchar);
    }
    if(count==3){
        op+="_"
    }else{
        op = op.concat(new Array(count).fill(currchar).join(""))
    }
    return op;
}




// i = 0 currchar  = 'a'
// i = 1 count = 2
// i = 2 count = 3
// i=3 char mismatch count = 1 op = "_"



console.log(encode("AAABBBCCC"))
console.log(encode("AABBBCC"))

console.log(encode("AAABC"))

console.log(encode("ABCCC"))

console.log(encode("AAAABBBCCCC"))

console.log(encode("AA"))

