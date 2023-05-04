const PhErtek = (vizsgaltErtek) => {
    return vizsgaltErtek == 7 ? "semleges" : (vizsgaltErtek < 7 ? "savas" : "lugos");
};
const PrimekSzama = (vizsgaltTomb) => {
    const isPrime = (p_number) => {
        if (p_number < 2) {
            return false;
        }
        else if (p_number == 2) {
            return true;
        }
        else {
            for (let i = 2; i * i <= p_number; ++i) {
                if (p_number % i == 0) {
                    return false;
                }
            }
            return true;
        }
    };
    return vizsgaltTomb.reduce((accumulator, current) => isPrime(current) ? accumulator + 1 : accumulator, 0);
};
const MaganHangzokSzama = (vizsgaltSzoveg) => {
    const arr_of_vowels = ['a', 'á', 'e', 'é', 'i', 'í', 'o', 'ó', 'ö', 'ő', 'u', 'ú', 'ü', 'ű'];
    return vizsgaltSzoveg.split('').reduce((accumulator, current) => arr_of_vowels.includes(current) ? accumulator + 1 : accumulator, 0);
};
