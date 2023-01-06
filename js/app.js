const fishes = [
    {
        name: "clown-loach",
        size: 20,
        priceByKg: 8
    },
    {
        name: "seahorse",
        size: 2,
        priceByKg: 3.5
    },
    {
        name: "puffer-fish",
        size: 8,
        priceByKg: 6
    },
    {
        name: "shrimp",
        size: 6,
        priceByKg: 14
    },
    {
        name: "neon-tetra",
        size: 10,
        priceByKg: 5.5
    },
    {
        name: "rockfish",
        size: 12,
        priceByKg: 10
    },
    {
        name: "shell",
        size: 3,
        priceByKg: 4
    },
    {
        name: "squid",
        size: 5,
        priceByKg: 2.5
    }

            
];

    
let fish_price = fishes.map(fish=>{
    let properties = {
        "name" : fish.name,
        "price" : fish.size * fish.priceByKg
    };
    return properties;
});

// let total = document.querySelector("#box_shop_bill_total");
// let square = document.querySelector("#box_shop_square-scale");

// var total_value = 0;

// function initialDrag(e, value){
//     e.dataTransfer.setData("text",value);
// };

// square.ondragover= function(e){
//     e.preventDefault();
// };

// square.ondrop= function(e){
    
//     e.preventDefault();
//     let data= e.dataTransfer.getData("text");
//     total_value+=parseInt(data);
//     total.innerText= total_value;

// }

const total = document.querySelector("#box_shop_bill_total");
const dropZone = document.querySelector("#box_shop_square-scale");
total_value = 0;

for(const fish of document.querySelectorAll(".fish")){

    fish.addEventListener("dragstart", e=>{
        e.dataTransfer.setData("text/plain", fish.id) ;
        fish.classList.add("scale--over");
      
       
    });

   
};

dropZone.addEventListener("dragover", e=>{
    e.preventDefault();
    
});

dropZone.addEventListener("drop",e=>{

    e.preventDefault();
    const droppedFishid = e.dataTransfer.getData("text/plain");
    const droppedFish = document.getElementById(droppedFishid);
    droppedFish.classList.remove("scale--over")
    let fishprice = droppedFish.getAttribute("data-value");
    total_value+=parseInt(fishprice);
    total.innerText = total_value;
    dropZone.appendChild(droppedFish);
   

});


