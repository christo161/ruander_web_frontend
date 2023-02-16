// please notice that this is only practice, not guide, so certainly it can be done better
// figyelem: ez csak egy gyakorló feladat, nem útmutató, természetesen szebben is meg lehetne oldani
//tesztadatok
const Dolgozok = [{
    nev: "Koaxk Ábel",
    kor: 23,
    fizetes: 400000,
    beosztas: "Rendszergazda"
},
{
    nev: "Zsíros B. Ödön",
    kor: 45,
    fizetes: 1200000,
    beosztas: "Ügyvezető Igazgató"
},
{
    nev: "Meg Győző",
    kor: 32,
    fizetes: 600000,
    beosztas: "Marketing Manager"
},
{
    nev: "Békés Csaba",
    kor: 63,
    fizetes: 180000,
    beosztas: "Takarító"
},
{
    nev: "Pofá Zoltán",
    kor: 25,
    fizetes: 300000,
    beosztas: "Biztonsági Őr"
},
{
    nev: "Fejet Lenke",
    kor: 22,
    fizetes: 220000,
    beosztas: "Irodai Titkár"
},
{
    nev: "Vak Cina",
    kor: 30,
    fizetes: 500000,
    beosztas: "Üzem Orvos"
}
]

//1
function hosszEllenor(p_string) {
    return p_string.length >= 8;
}
//teszt (1)
document.write("hosszEllenor('teszt'): " + hosszEllenor("teszt") + "<br>");
document.write("hosszEllenor('feladatteszt'): " + hosszEllenor("feladatteszt") + "<br>");
document.write("<hr>");

//2
function tajSzamEllenor(p_tajszam) {
    if (p_tajszam.length != 9) {
        return false;
    }
    let paros_osszeg = 0;
    for (let i = 1; i < p_tajszam.length; i += 2) {
        paros_osszeg += parseInt(p_tajszam.charAt(i));
    }
    paros_osszeg *= 7;
    let paratlan_osszeg = 0;
    for (let i = 0; i < p_tajszam.length - 1; i += 2) {
        paratlan_osszeg += parseInt(p_tajszam.charAt(i));
    }
    paratlan_osszeg *= 3;
    return ((paros_osszeg + paratlan_osszeg) % 10) == parseInt(p_tajszam.charAt(p_tajszam.length - 1));
}
//teszt (2)
document.write("tajSzamEllenor(040655330): " + tajSzamEllenor("040655330") + "<br>");
document.write("tajSzamEllenor(037687210): " + tajSzamEllenor("037687210") + "<br>");
document.write("tajSzamEllenor(019536646): " + tajSzamEllenor("019536646") + "<br>");
document.write("tajSzamEllenor(111111111): " + tajSzamEllenor("111111111") + "<br>");
document.write("<hr>");

//3
function tombTerjedelem(p_tomb) {
    let min = p_tomb[0];
    for (let i = 1; i < p_tomb.length; ++i) {
        if (min > p_tomb[i]) {
            min = p_tomb[i];
        }
    }
    let max = p_tomb[0];
    for (let i = 1; i < p_tomb.length; ++i) {
        if (max < p_tomb[i]) {
            max = p_tomb[i];
        }
    }
    return max - min;
}
//teszt (3)
let vizsgaltTomb = [3, 5, 10, 16, 9];
document.write("tombTerjedelem(vizsgaltTomb): " + tombTerjedelem(vizsgaltTomb) + "<br>");
document.write("<hr>");

//4
function legidosebbDolgozo(p_arrof_objects) {
    let idx = 0;
    let kor_max = p_arrof_objects[0].kor;
    for (let i = 1; i < p_arrof_objects.length; ++i) {
        if (kor_max < p_arrof_objects[i].kor) {
            kor_max = p_arrof_objects[i].kor;
            idx = i;
        }
    }
    return idx;
}
//teszt (4)
document.write("legidosebbDolgozo(Dolgozok): " + legidosebbDolgozo(Dolgozok) + "<br>")
document.write("<hr>");

//5
function fizetesEmeles(p_arrof_objects) {
    let avg_fizetes = 0;
    for (let i = 0; i < p_arrof_objects.length; ++i) {
        avg_fizetes += p_arrof_objects[i].fizetes;
    }
    avg_fizetes /= p_arrof_objects.length;
    avg_fizetes = avg_fizetes.toFixed(2);
    //debug
    //document.write("atlagfizetes: " + avg_fizetes + "<br>");

    //new object
    let new_arrof_objects = JSON.parse(JSON.stringify(p_arrof_objects));

    for (let i = 0; i < new_arrof_objects.length; ++i) {
        if (new_arrof_objects[i].fizetes < avg_fizetes) {
            new_arrof_objects[i].fizetes += new_arrof_objects[i].fizetes * 0.1;
        }
    }

    return new_arrof_objects;
}

//teszt (5)
let teszt_arrof_objects = [];
teszt_arrof_objects = fizetesEmeles(Dolgozok);
teszt_arrof_objects.map(teszt_element => document.write(teszt_element.nev + " " + teszt_element.fizetes + "<br>"));
document.write("<hr>");