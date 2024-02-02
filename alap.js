var viccek=[
    {
        "Szöveg":`- Mi az: Öreg emberek ugrálnak le a hídról, lábukon gumikötéllel? <br>
        - Bácsijumping.`,
        "kep":"1.jpg"
    },
    {
        "Szöveg":`- Mi a Húsvét-szigetek fővárosa? <br>
        - Nyúl York.`,
        "kep":"2.jpg"
    },
    {
        "Szöveg":`- Miért büdös a pók? <br>
        - Mert nyolc hónalja van...`,
        "kep":"3.jpg"
    },
    {
        "Szöveg":`- Mi a különbség egy terrorista meg egy menstruáló nő között? <br>
        - A terroristával lehet tárgyalni.`,
        "kep":"4.jpg"
    },
    {
        "Szöveg":`A tanár felelni szólítja Pistikét:
        - Pistike, mondd meg mi az egyes szám 3. személy! <br>
        - Őőőőőő...`,
        "kep":"5.jpg"
    },


]



console.log(viccek)
var veletlen=-1
kattintas()
console.log("Globális változó"+veletlen)
function sorsolas(){
    document.getElementById("kesleltetes").innerHTML=""
    do{
        var ujveletlen=Math.floor(Math.random()*viccek.length);
        console.log("Újból kisorsolta"+ujveletlen)
    }
    while(veletlen==ujveletlen)
    veletlen=ujveletlen
    veletlen=Math.floor(Math.random()*viccek.length);
    console.log(veletlen)
    document.getElementById("szoveghely").innerHTML=viccek[veletlen].Szöveg
    document.getElementById("kephely").innerHTML=`<img src="${viccek[veletlen].kep}" alt="" title="">`

}
function kattintas(){
    document.getElementById("szoveghely").innerHTML=""
    document.getElementById("kephely").innerHTML=""
    document.getElementById("kesleltetes").innerHTML='<img src="mozgo.gif" alt="">'
    setTimeout(sorsolas, 2000);

}