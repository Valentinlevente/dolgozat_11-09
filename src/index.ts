//import { Artwork } from "./artwork";
interface Artwork{
    title : string;
    year : number;
    price: number;
}


class Statue implements Artwork{
    title: string;
    year: number;
    price: number;
    height: number;

    constructor(title: string, year: number, price: number, height: number){
        this.title = title;
        this.year = year;
        this.price = price;
        this.height = height;
    }
}

let artworks : Artwork[] = [];

function display(){
    let sum : number = 0;
    for(let e of artworks){
        sum += e.price;
    }
    document.getElementById("artAmount")!.innerHTML = "Művek száma: " + artworks.length;
    document.getElementById("priceSum")!.innerHTML = "Művek összesített ára: " + sum;
}

document.addEventListener("DOMContentLoaded", ()=>{
    (document.getElementById("add") as HTMLButtonElement)?.addEventListener('click', ()=>{
        let title:string = (document.getElementById("title") as HTMLInputElement).value;
        let year:number = parseInt((document.getElementById("year") as HTMLInputElement).value);
        let price:number = parseInt((document.getElementById("price") as HTMLInputElement).value);
        let height:number = parseInt((document.getElementById("height") as HTMLInputElement).value);
    
        let wrongTitle = document.getElementById("wrongTitle") as HTMLHRElement;
        let wrongYear = document.getElementById("wrongYear") as HTMLHRElement;
        let wrongPrice = document.getElementById("wrongPrice") as HTMLHRElement;
        let wrongHeight = document.getElementById("wrongHeight") as HTMLHRElement;

        let titleTrue : boolean = /^[a-zA-Z, ]*$/.test(title) && title.length > 0;
        let today : Date = new Date();
        let yearTrue : boolean = year <= today.getFullYear();
        let priceTrue : boolean = price >= 1;
        let heightTrue : boolean = height >= 10;


        if(titleTrue && yearTrue && priceTrue && heightTrue){
            artworks.push(new Statue(title, year, price, height));
            wrongTitle.style.display = "none";
            wrongYear.style.display = "none";
            wrongPrice.style.display = "none";
            wrongHeight.style.display = "none";
            display();
        }else{
            if(!titleTrue){
                wrongTitle.style.display = "block";
            }else{
                wrongTitle.style.display = "none";
            }
            if(!yearTrue){
                wrongYear.style.display = "block";
            }else{
                wrongYear.style.display = "none";
            }
            if(!priceTrue){
                wrongPrice.style.display = "block";
            }else{
                wrongPrice.style.display = "none";
            }
            if(!heightTrue){
                wrongHeight.style.display = "block";
            }else{
                wrongHeight.style.display = "none";
            }
        }

    })
})