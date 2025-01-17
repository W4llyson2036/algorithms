// https://www.youtube.com/watch?v=xGYsEqe9Vl0&list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O&index=4

function swap() {
    let value1 = "hi";
    let value2 = "sup";
    
    console.log(`before: value1: ${value1} value2: ${value2}`);
    
    let tmp = value1;
    value1 = value2;
    value2 = tmp;

    console.log(`after: value1: ${value1} value2: ${value2}`);
}

swap();

// space
// 1 
// 1 
// 1  
// s(n) = 3 
// O(i) 