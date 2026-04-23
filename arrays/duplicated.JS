

function check(){
    
    
    let arr=[1,5,6,9,8] 
   
    let arr2=[]

   for(let i=0;i<arr.length;i++)
   {
        for(let j=1;j<arr.length;j++)
        {
            if (arr[i]==arr[j] && arr2.includes(arr[i])==false )
            {arr2.push(i)}
        }
   }
   
return arr2}

console.log(check())
