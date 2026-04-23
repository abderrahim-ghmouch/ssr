function fliped(num)
{
    let stars=""
    for (let i = 0; i < num;i++)
    {
        for (let j=num-i; j> 0; j--)
        {
            stars+=" "
        }   
        for (let k=0; k<i;k++)
        {
            stars+="*"
        }

        stars+="\n"
        

    }
     return stars   
}
console.log(fliped(10))