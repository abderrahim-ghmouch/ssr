function pyramide(num)
{let stars=""

    for (let i=0;i<=num;i++)
    {
        for (let j =num; j > i; j--){
            stars+=" "
        }
        for (let k = 0; k < i*2-1; k++){
            stars+="*"
        }
        stars+="\n"
    }
return stars
}
console.log(pyramide(9))