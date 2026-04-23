function somme(arr, num) {
    let arr2 = []

    for (let i = 0; i < arr.length; i++) {

        for (let j = 1; j < arr.length; j++) {
         
            if (arr[i] + arr[j] === num && arr2.includes([arr[j],arr[i]])===false) {
                arr2.push([arr[i], arr[j]])
            }
        }
    }
    return arr2
}
let arr3 = [4, 7, 9, 1, 3, 7, 2, 6]
console.log(somme(arr3, 10))