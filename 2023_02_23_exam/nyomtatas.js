function kalkulal() {
    //Űrlapadatok
    const szelesseg = parseInt(document.querySelector("input#szelesseg").value);
    const magassag = parseInt(document.querySelector("input#magassag").value);
    const papir = document.getElementById('papirtipus').value;
    //Számítások
    let terulet = Math.round((szelesseg * magassag) / 10000);
    let koltseg = terulet * papir;
    document.querySelector("span#terulet").innerHTML = terulet;
    //document.querySelector("span#papir").innerHTML = parseInt(document.querySelector("option[selected='selected']").value);
    document.querySelector("span#papir").innerHTML = parseInt(document.querySelector("option:checked").value);
    document.querySelector("span#koltseg").innerHTML = koltseg;
    //Megjelenítés
    document.getElementById('valasz').style.visibility = "visible";
}

