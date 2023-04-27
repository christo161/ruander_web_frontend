//compile:
//tsc megoldas.ts --target es2022
const DiakInfo = (nev, csoport, tipus) => {
    return `${nev} [Team${csoport < 10 ? '0' + csoport : csoport}] - ${tipus ? 'Junior Frontend' : 'Webprogramozó'}`;
};
const SzovegesErtekeles = (jegy) => {
    switch (jegy) {
        case 5:
            return ["Példás", "Példás"];
        case 4:
            return ["Jó", "Jó"];
        case 3:
            return ["Változó", "Változó"];
        case 2:
            return ["Hanyag", "Rossz"];
        default:
            return ["Érvénytelen", "adat"];
    }
};
const HarommalOszthatokSzama = (p_array) => {
    return p_array.reduce((accumulator, element) => element % 3 == 0 ? accumulator + 1 : accumulator, 0);
};
const Nyeroszamok = (mennyiseg, alsoHatar, felsoHatar) => {
    const nyeroSzamok = new Set();
    while (nyeroSzamok.size != mennyiseg) {
        nyeroSzamok.add((Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar));
    }
    return ([...nyeroSzamok].sort());
};
