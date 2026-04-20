function deleteDuplicate(str)
{
    let string=str.split("")
    
    for(let i=0;i<=string.length;i++)
    {
        if(string[i]==string[i+1])
        {
            string.splice(i,2)
            
        }

    }
    return string.join("")
}

console.log(deleteDuplicate("hello"))