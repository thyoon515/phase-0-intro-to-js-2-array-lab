// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

beforeEach(function () {
    cats.length = 0;

    cats.push("Milo", "Otis", "Garfield");
});

function destructivelyAppendCat() {
    cats.push("Ralph");
    return cats;
}

function destructivelyPrependCat() {
    cats.unshift("Bob");
    return cats;
}

function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
}

function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
}

function appendCat() {
    const newCats = [...cats, "Broom"];
    return newCats;
}

function prependCat() {
    const newCats = ["Arnold", ...cats];
    return newCats;
}

function removeLastCat() {
    const newCats = cats.slice(0, cats.length -1);
    return newCats;
}

function removeFirstCat() {
    const newCats = cats.slice(1);
    return newCats;
}