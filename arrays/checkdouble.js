function checkDouble(arr) {
    let arr2 = []
    let res = {};
    arr.forEach(value =>
    {

        if (res[value]) {
            res[value]++
        
        } else {
            
            res[value]=1
        }

    }    

    )
    for (let key in res)
    {
        if (res[key] > 1)
        {
            arr2.push(key)
        }
    }
    return arr2[0   ]
}

let arra = [7,7,8,9,8,9,7]
console.log(checkDouble(arra))