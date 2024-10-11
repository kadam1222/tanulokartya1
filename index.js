let fodiv=document.getElementById("flex-container");

fodiv.className="flex-container"
let orszagok=["Magyarország","Franciaország","Olaszország","Németország","Spanyolország","Japán"]
let varosok=["Budapest","Párizs","Róma","Berlin","Madrid","Tokió"]

for(let i=0;i<6;i++){
    let div=document.createElement("div");
    let gomb =document.createElement("button");
    let gombdiv= document.createElement("div");
    let szoveg = document.createElement("span");
    let valasz = document.createElement("p");

    szoveg.innerHTML="<h1>Mi "+ orszagok[i] + " fővárosa?</h1>"
    valasz.innerHTML=""
    div.className="kerdes"
    szoveg.className="cim"
    
    gomb.innerHTML="Mutat/Elrejt válasz"


    fodiv.appendChild(div)
    div.appendChild(szoveg);
    div.appendChild(valasz)
    gombdiv.appendChild(gomb);
    div.appendChild(gombdiv)
    
    
    let jelen=0;
    gomb.addEventListener('click',function(){
        
        if(jelen==0){
            valasz.innerText=varosok[i];
            jelen=1
        }
        else{
            valasz.innerText="";
            jelen=0
        }

    })
}



