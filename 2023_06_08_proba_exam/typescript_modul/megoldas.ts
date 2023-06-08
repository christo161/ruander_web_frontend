const EkezetesBetukSzama = (vizsgaltSzoveg:string):number => {
    const ekezetesBetuk = "áéíóöőúüűÁÉÍÓÖŐÚÜŰ";
    return vizsgaltSzoveg.split("").reduce((acc,curr) => ekezetesBetuk.includes(curr)? acc+1 : acc, 0);
}

const ElsoNszamSzorzat = (mennyiseg:number):number => {
    let fakt = 1;
    for (let i:number = 2; i <=mennyiseg; ++i) {
        fakt*=i;
    }
    return fakt;
}

const ParosakOsszege = (vizsgaltTomb:Array<number>):number => {
    return vizsgaltTomb.reduce((acc,curr) => curr % 2 == 0 ? acc+curr : acc, 0);
}