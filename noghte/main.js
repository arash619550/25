function noghte(name) {
    let temp = "";
    for (let i = 0; i < name.length; i++) {
        if (name[i] == ".")
            continue;
        temp += name[i];
    }
    return temp;
}
console.log(noghte("salam.chetori"));