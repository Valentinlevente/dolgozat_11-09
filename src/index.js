"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const statue_1 = require("./statue");
let artworks = [];
function display() {
    let sum = 0;
    for (let e of artworks) {
        sum += e.price;
    }
    document.getElementById("artAmount").innerHTML = "Művek száma: " + artworks.length;
    document.getElementById("priceSum").innerHTML = "Művek összesített ára: " + sum;
}
document.addEventListener("DOMContentLoaded", () => {
    var _a;
    (_a = document.getElementById("add")) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        let title = document.getElementById("title").value;
        let year = parseInt(document.getElementById("year").value);
        let price = parseInt(document.getElementById("price").value);
        let height = parseInt(document.getElementById("height").value);
        let wrongTitle = document.getElementById("wrongTitle");
        let wrongYear = document.getElementById("wrongYear");
        let wrongPrice = document.getElementById("wrongPrice");
        let wrongHeight = document.getElementById("wrongHeight");
        let titleTrue = /^[a-zA-Z, ]*$/.test(title) && title.length > 0;
        let today = new Date();
        let yearTrue = year <= today.getFullYear();
        let priceTrue = price >= 1;
        let heightTrue = height >= 10;
        if (titleTrue && yearTrue && priceTrue && heightTrue) {
            artworks.push(new statue_1.Statue(title, year, price, height));
            wrongTitle.style.display = "none";
            wrongYear.style.display = "none";
            wrongPrice.style.display = "none";
            wrongHeight.style.display = "none";
            display();
        }
        else {
            if (!titleTrue) {
                wrongTitle.style.display = "block";
            }
            else {
                wrongTitle.style.display = "none";
            }
            if (!yearTrue) {
                wrongYear.style.display = "block";
            }
            else {
                wrongYear.style.display = "none";
            }
            if (!priceTrue) {
                wrongPrice.style.display = "block";
            }
            else {
                wrongPrice.style.display = "none";
            }
            if (!heightTrue) {
                wrongHeight.style.display = "block";
            }
            else {
                wrongHeight.style.display = "none";
            }
        }
    });
});
