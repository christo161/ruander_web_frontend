//feladat1
document.write("feladat1");
document.write("<br>");

function keszito() {
    document.write("Név: Kovács Ádám");
    document.write("<br>");
    document.write("Tanfolyam: Junior Frontend + Webfejlesztés");
    document.write("<br>");
    document.write("Csoport: #Team11");
    document.write("<br>");
}

keszito();

document.write("<hr>");

//feladat2
document.write("feladat2");
document.write("<br>");

function hatvanyozo(alap, kitevo) {
    return alap ** kitevo;
}

document.write("hatvanyozo(2,3): " + hatvanyozo(2, 3));
document.write("<br>");
document.write("hatvanyozo(5,3): " + hatvanyozo(5, 3));
document.write("<br>");

document.write("<hr>");

//feladat3
document.write("feladat3");
document.write("<br>");

function parosLetrehoz(min, max) {
    let paros = Math.round((Math.random() * max - min) + min);
    if (paros % 2 != 0) {
        if (paros == max) {
            --paros;
        } else {
            ++paros;
        }
    }
    return paros;
}

document.write("parosLetrehoz(1,100): " + parosLetrehoz(1, 100));
document.write("<br>");
document.write("parosLetrehoz(2,5): " + parosLetrehoz(2, 5));
document.write("<br>");

document.write("<hr>");

//feladat4
document.write("feladat4");
document.write("<br>");

function testTomegIndex(suly, magassag) {
    let tti = suly / magassag ** 2;

    if (tti < 16) {
        return "sulyosSovanysag";
    } else if (16 <= tti && tti < 17) {
        return "mersekeltSovanysag";
    } else if (17 <= tti && tti < 18.5) {
        return "enyheSovanysag";
    } else if (18.5 <= tti && tti < 25) {
        return "normalisTestsuly";
    } else if (25 <= tti && tti < 30) {
        return "tulsulyos";
    } else if (30 <= tti && tti < 35) {
        return "IfokuElhizas";
    } else if (35 <= tti && tti < 40) {
        return "IIfokuElhizas";
    } else if (40 < tti) {
        return "IIIfokuSulyosElhizas";
    }
}

document.write("testTomegIndex(200,2): " + testTomegIndex(200, 2));
document.write("<br>");
document.write("testTomegIndex(45,1.5): " + testTomegIndex(45, 1.5));
document.write("<br>");
document.write("testTomegIndex(25,1.2): " + testTomegIndex(25, 1.2));
document.write("<br>");

document.write("<hr>");

//feladat5
document.write("feladat5");
document.write("<br>");

function egeszOsztoE(szam, oszto) {
    return (szam % oszto == 0);
}

document.write("egeszOsztoE(25,5): " + egeszOsztoE(25, 5));
document.write("<br>");
document.write("egeszOsztoE(1050,7): " + egeszOsztoE(1050, 7));
document.write("<br>");
document.write("testTomegIndex(25,1.2): " + egeszOsztoE(2048, 3));
document.write("<br>");