//Using array built in functions
const IsAnagramUsingBuiltInFunc = (s,t) => s.split("").sort().join("") === t.split("").sort().join("") ? true : false;


//using HashMap
const IsAnagram = (firstString, secondString) => {
    if (firstString.length != secondString.length) return false;

    let map = new Map();

    for( let i = 0; i< firstString.length;i++) {
        if(map.has(firstString[i])) {
            map.set(firstString[i], map.get(firstString[i]) + 1)
        } else {
            map.set(firstString[i], 1)
        }
    }

    for( let i = 0; i < secondString.length;i++) {
        if(map.has(secondString[i])) {
            map.set(secondString[i], map.get(secondString[i]) - 1)
        }
    }

    let keys = map.keys();

    for (let key of keys) {
        if(map.get(key) != 0) return false;
    }

    return true;
}

const s= "jam" , t = "amj";
console.log(IsAnagramUsingBuiltInFunc(s,t))

const firstString = "racecar" , secondString = "carrace";
console.log(IsAnagram(firstString,secondString));