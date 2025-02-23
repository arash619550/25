function hashtaGgenerator(name) {
    let temp = "#";
    temp += name[0].toUpperCase();
    for (let i = 1; i < name.length; i++) {
        if (name[i] != " ") {
            temp += name[i];
        }
        else if (name[i] == " ") {
            temp += "_";
            temp += name[i + 1].toUpperCase();
            i++;
        }
    }
    return temp;
}
const hashtag = hashtaGgenerator("salam arash");
console.log(hashtag);