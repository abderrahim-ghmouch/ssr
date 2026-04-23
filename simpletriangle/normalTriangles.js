
function Triangle(num) {
    let stars=""
    for (let i = 0; i <= num; i++)
        {
            for (let j=num;j>=num*2-1;j--)
            {    
            stars +=" "
            }
        
            for (let k = 0;k<i; k++)
            {
                stars +="*"
            }
        stars+="\n"
    }
        return stars
}
console.log(Triangle(8))