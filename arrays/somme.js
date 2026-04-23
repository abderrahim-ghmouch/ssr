// Trouvez les paires dont la somme égale une valeur donnée
/// Entrée: [3, 1, 5, 7, 9, 2, 6, 4, 8], sommeRecherchee = 10
//  Sortie: [[3,7], [1,9], [5,5]...]
// Parcourez une matrice en spirale
// Implémentez votre propre méthode spli


function somme(arr, num)
{
    let arr2=[]
        for (let i= 0; i < arr.length; i++)
            {
                    for (let j=1; j<arr.length; j++)
                    {
                    
                        if (arr[i]+arr[j] ===num)
                            {
                                
                                arr2.push([arr[i],arr[j]])
                    
                            }
                
                    }
            
            }
        return arr2
    }

let ar=[5,1,7,3,9]
console.log(somme(ar, 12))

//this is the result
//[ [ 5, 5 ], [ 7, 3 ], [ 3, 7 ], [ 1, 9 ], [ 9, 1 ] ]