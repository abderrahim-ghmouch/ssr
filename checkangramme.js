
// Vérification d'anagramme sans méthode intégrée
function angramme(a,b){
    // race care acer acer 

    let itsangramme=false
    if(a.length==b.length)
    {
    if(a.split("").sort().join("")===b.split("").sort().join(""))
    {
        itsangramme=true

    }
    }
    return itsangramme
}

console.log(angramme("22",222))