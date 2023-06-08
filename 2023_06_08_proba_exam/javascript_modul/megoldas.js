const TeglalapKerulet = (aOldal, bOldal) => {
    return 2 * (aOldal + bOldal);
}

const VizHalmazallapot = (fok) => {
    if (fok < 0) {
        return "szilard";
    } else if (fok > 100) {
        return "legnemu";
    } else {
        return "folyekony";
    }
}

const Csatlakozott2004 = (vizsgaltObjektum) => {
    console.log(vizsgaltObjektum);
    return vizsgaltObjektum.reduce((acc, curr) => (curr.csatlakozas.split(".")[0] == "2004") ? acc + 1 : acc, 0);
}