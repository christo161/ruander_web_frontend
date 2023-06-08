const EkezetesBetukSzama = (vizsgaltSzoveg) => {
    const ekezetesBetuk = "áéíóöőúüűÁÉÍÓÖŐÚÜŰ";
    return vizsgaltSzoveg.split("").reduce((acc, curr) => ekezetesBetuk.includes(curr) ? acc + 1 : acc, 0);
};
const ElsoNszamSzorzat = (mennyiseg) => {
    let fakt = 1;
    for (let i = 2; i <= mennyiseg; ++i) {
        fakt *= i;
    }
    return fakt;
};
const ParosakOsszege = (vizsgaltTomb) => {
    return vizsgaltTomb.reduce((acc, curr) => curr % 2 == 0 ? acc + curr : acc, 0);
};
