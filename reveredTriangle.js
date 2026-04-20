
function abdelhadi(num){

    let abdelhadi=""
    
     for(let i=0;i<=num;i++)
        {
            for(let j=num;j>i;j--)
                {
                    abdelhadi += "*"
                }
        
            abdelhadi+="\n"
        }
return abdelhadi
    }
console.log(abdelhadi(6))