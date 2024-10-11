let fodiv=document.getElementById("flex-container");

fodiv.className="flex-container"
let orszagok=["Magyarország","Franciaország","Olaszország","Németország","Spanyolország","Japán"]
let varosok=["Budapest","Párizs","Róma","Berlin","Madrid","Tokió"]

for(let i=0;i<6;i++){
    let div=document.createElement("div");
    let gomb =document.createElement("button");
    let gombdiv= document.createElement("div");
    let szoveg = document.createElement("span");
    let valasz = document.createElement("span");

    szoveg.innerHTML="<h1>Mi "+ orszagok[i] + " fővárosa?</h1>"

    gombdiv.className="gomb"
    div.className="kerdes"
    szoveg.className="cim"
    gomb.className="gomb"
    gomb.textContent="Mutat/Elrejt válasz"

    fodiv.appendChild(div)
    div.appendChild(szoveg);
    gombdiv.appendChild(gomb);
    div.appendChild(gombdiv)
    div.appendChild(valasz)   
}


