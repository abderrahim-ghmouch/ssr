function triangle(num)
{
let start=""

    for(let i=0;i<num;i++)
    {
        for(let j=0;j<=i;j++)
            {
                start += "*"
            
            }
    
            start += "\n"
        
          
    }
    return start
}
console.log(triangle(8))