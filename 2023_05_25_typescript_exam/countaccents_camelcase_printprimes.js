const count_accents = (p_text) => {
    const str_of_accents = "áéíóöőúüű";
    return p_text.split("").reduce((accumulator, current) => str_of_accents.includes(current) ? accumulator + 1 : accumulator, 0);
};
const convert_camelcase = (p_text) => {
    return p_text.split(" ").map((element, index) => index == 0 ?
        element.toLowerCase() :
        element.charAt(0).toUpperCase() +
            element.slice(1).toLowerCase()).join("");
};
const isprime = (p_number) => {
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
const print_primes = (p_array) => {
    return p_array.filter(element => isprime(element));
};
