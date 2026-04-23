
function reverse(num){

    let result=""
    
     for(let i=0;i<=num;i++)
        {
            for(let j=num;j>=i;j--)
                {
                    result += "*"
                }
        
            result+="\n"
        }
return result
    }
console.log(reverse(6))