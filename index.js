const yearOptions = [
    {
        id: 1,
        value: 2014
    },
    {
        id: 2,
        value: 2015
    },
    {
        id: 3,
        value: 2016
    },
    {
        id: 4,
        value: 2017
    },
    {
        id: 5,
        value: 2019
    }
];

const makeOptions = [
    {
        id: 1,
        value: "Volkswagen"
    },
    {
        id: 2,
        value: "Toyota"
    },
    {
        id: 3,
        value: "Lexus"
    },
    {
        id: 4,
        value: "Hyundai"
    },
    {
        id: 5,
        value: "Mercedes"
    }
];



const modelOptions = [
    {
        id: 1,
        value: "Tiguan"
    },
    {
        id: 2,
        value: "Highlander"
    },
    {
        id: 3,
        value: "LUXURY"
    },
    {
        id: 4,
        value: "Elantra"
    },
    {
        id: 5,
        value: "Benz"
    },
    {
        id: 6,
        value: "Venza"
    },
    {
        id: 7,
        value: "F-SPORT"
    },
    
];


const trimOptions = [
    {
        id: 1,
        value: "XLE"
    },
    {
        id: 2,
        value: "RX 350"
    },
    {
        id: 3,
        value: "LE A"
    },
    {
        id: 4,
        value: "GLE-Cl"
    },
    {
        id: 5,
        value: "AWD XLE"
    },
    {
        id: 6,
        value: "RX 350"
    }
];

const mileageOptions = [
    {
        id: 1,
        value: "19,855 km"
    },
    {
        id: 2,
        value: "39,850 km"
    },
    {
        id: 3,
        value: "59,800 km"
    },
    {
        id: 4,
        value: "69,000 km"
    },
    {
        id: 5,
        value: "86,000 km"
    },
    {
        id: 6,
        value: "95,000 km"
    },
    {
        id: 7,
        value: "99,000 km"
    },
    {
        id: 8,
        value: "104,000 km"
    }
];

const sortOptions = [
    {
        id: 1,
        value: "Publication date (ascending)",
        direction: "asc"
    },
    {
        id: 2,
        value: "Publication date (descending)",
        direction: "desc"
    },
    {
        id: 3,
        value: "Price (ascending)",
        direction: "asc"
    },
    {
        id: 4,
        value: "Price (descending)",
        direction: "desc"
    },
    {
        id: 5,
        value: "Mileage (ascending)",
        direction: "asc"
    },
    {
        id: 6,
        value: "Mileage (descending)",
        direction: "desc"
    },
    {
        id: 7,
        value: "Performance (ascending)",
        direction: "asc"
    },
    {
        id: 8,
        value: "Performance (descending)",
        direction: "desc"
    },
    {
        id: 9,
        value: "Publication date (asсending)",
        direction: "asc"
    }
] 


const currentOffers = [
    {
        id: 1,
        img: "./data/car_img_1.png",
        year: 2019,
        make: "Volkswagen",
        model: "Tiguan",
        trim: "",
        title: "Volkswagen Tiguan",
        mileage: "19,855 km",
        type: "Automatic",
        fuel: "Diesel",
        price: '$34,888',
        status: "",
        available: true,
    },
    {
        id: 2,
        img: "./data/car_img_2.png",
        year: 2014,
        make: "Toyota",
        model: "Highlander",
        trim: "XLE",
        title: "Toyota Highlander XLE",
        mileage: "69,000 km",
        type: "Automatic",
        fuel: "Gas",
        price: '$27,875',
        status: "New",
        available: true,
    },
    {
        id: 3,
        img: "./data/car_img_3.png",
        year: 2017,
        make: "Lexus",
        model: "LUXURY",
        trim: "RX 350",
        title: "Lexus RX 350 LUXURY",
        mileage: "39,850 km",
        type: "Automatic",
        fuel: "Gas",
        price: '$38,775',
        status: "",
        available: true,
    },
    {
        id: 4,
        img: "./data/car_img_4.png",
        year: 2016,
        make: "Toyota",
        model: "Highlander",
        trim: "LE A",
        title: "Toyota Highlander LE A...",
        mileage: "104,000 km",
        type: "Automatic",
        fuel: "Gas",
        price: '$23,728',
        status: "",
        available: true,
    },
    {
        id: 5,
        img: "./data/car_img_5.png",
        year: 2017,
        make: "Hyundai",
        model: "Elantra",
        trim: "",
        title: "Hyundai Elantra",
        mileage: "95,000 km",
        type: "Automatic",
        fuel: "Gas",
        price: '$11,788',
        status: "",
        available: true,
    },
    {
        id: 6,
        img: "./data/car_img_6.png",
        year: 2016,
        make: "Mercedes",
        model: "Benz",
        trim: "GLE-Cl",
        title: "Mercedes-Benz GLE-Cl...",
        mileage: "59,800 km",
        type: "Automatic",
        fuel: "Diesel",
        price: '$38,878',
        status: "",
        available: true,
    },
    {
        id: 7,
        img: "./data/car_img_7.png",
        year: 2015,
        make: "Toyota",
        model: "Venza",
        trim: "AWD XLE",
        title: "Toyota Venza AWD XLE...",
        mileage: "99,000 km",
        type: "Automatic",
        fuel: "Gas",
        price: '$18,620',
        status: "",
        available: false,
    },
    {
        id: 8,
        img: "./data/car_img_8.png",
        year: 2016,
        make: "Lexus",
        model: "F-SPORT",
        trim: "RX 350",
        title: "Lexus RX 350 F-SPORT",
        mileage: "86,000 km",
        type: "Automatic",
        fuel: "Gas",
        price: '$34,888',
        status: "New",
        available: true,
    },
    {
        id: 9,
        img: "./data/car_img_1.png",
        year: 2019,
        make: "Volkswagen",
        model: "Tiguan",
        trim: "",
        title: "Volkswagen Tiguan",
        mileage: "19,855 km",
        type: "Automatic",
        fuel: "Diesel",
        price: '$34,888',
        status: "",
        available: true,
    },
    {
        id: 10,
        img: "./data/car_img_2.png",
        year: 2014,
        make: "Toyota",
        model: "Highlander",
        trim: "XLE",
        title: "Toyota Highlander XLE",
        mileage: "69,000 km",
        type: "Automatic",
        fuel: "Gas",
        price: '$27,875',
        status: "",
        available: true,
    },
    {
        id: 11,
        img: "./data/car_img_3.png",
        year: 2017,
        make: "Lexus",
        model: "LUXURY",
        trim: "RX 350",
        title: "Lexus RX 350 LUXURY",
        mileage: "39,850 km",
        type: "Automatic",
        fuel: "Gas",
        price: '$38,775',
        status: "",
        available: true,
    },
    {
        id: 12,
        img: "./data/car_img_4.png",
        year: 2016,
        make: "Toyota",
        model: "Highlander",
        trim: "LE A",
        title: "Toyota Highlander LE A...",
        mileage: "104,000 km",
        type: "Automatic",
        fuel: "Gas",
        price: '$23,728',
        status: "",
        available: true,
    },
    {
        id: 13,
        img: "./data/car_img_1.png",
        year: 2019,
        make: "Volkswagen",
        model: "Tiguan",
        trim: "",
        title: "Volkswagen Tiguan",
        mileage: "19,855 km",
        type: "Automatic",
        fuel: "Diesel",
        price: '$34,888',
        status: "New",
        available: true,
    },
    {
        id: 14,
        img: "./data/car_img_2.png",
        year: 2014,
        make: "Toyota",
        model: "Highlander",
        trim: "XLE",
        title: "Toyota Highlander XLE",
        mileage: "69,000 km",
        type: "Automatic",
        fuel: "Gas",
        price: '$27,875',
        status: "",
        available: true,
    },
    {
        id: 15,
        img: "./data/car_img_3.png",
        year: 2017,
        make: "Lexus",
        model: "LUXURY",
        trim: "RX 350",
        title: "Lexus RX 350 LUXURY",
        mileage: "39,850 km",
        type: "Automatic",
        fuel: "Gas",
        price: '$38,775',
        status: "",
        available: true,
    },
    {
        id: 16,
        img: "./data/car_img_4.png",
        year: 2016,
        make: "Toyota",
        model: "Highlander",
        trim: "LE A",
        title: "Toyota Highlander LE A...",
        mileage: "104,000 km",
        type: "Automatic",
        fuel: "Gas",
        price: '$23,728',
        status: "",
        available: true,
    },
    {
        id: 17,
        img: "./data/car_img_5.png",
        year: 2017,
        make: "Hyundai",
        model: "Elantra",
        trim: "",
        title: "Hyundai Elantra",
        mileage: "95,000 km",
        type: "Automatic",
        fuel: "Gas",
        price: '$11,788',
        status: "",
        available: true,
    },
    {
        id: 18,
        img: "./data/car_img_6.png",
        year: 2016,
        make: "Mercedes",
        model: "Benz",
        trim: "GLE-Cl",
        title: "Mercedes-Benz GLE-Cl...",
        mileage: "59,800 km",
        type: "Automatic",
        fuel: "Diesel",
        price: '$38,878',
        status: "",
        available: true,
    },
    {
        id: 19,
        img: "./data/car_img_7.png",
        year: 2015,
        make: "Toyota",
        model: "Venza",
        trim: "AWD XLE",
        title: "Toyota Venza AWD XLE...",
        mileage: "99,000 km",
        type: "Automatic",
        fuel: "Gas",
        price: '$18,620',
        status: "",
        available: true,
    },
    {
        id: 20,
        img: "./data/car_img_8.png",
        year: 2016,
        make: "Lexus",
        model: "F-SPORT",
        trim: "RX 350",
        title: "Lexus RX 350 F-SPORT",
        mileage: "86,000 km",
        type: "Automatic",
        fuel: "Gas",
        price: '$34,888',
        status: "New",
        available: true,
    },
    {
        id: 21,
        img: "./data/car_img_1.png",
        year: 2019,
        make: "Volkswagen",
        model: "Tiguan",
        trim: "",
        title: "Volkswagen Tiguan",
        mileage: "19,855 km",
        type: "Automatic",
        fuel: "Diesel",
        price: '$34,888',
        status: "",
        available: true,
    },
    {
        id: 22,
        img: "./data/car_img_2.png",
        year: 2014,
        make: "Toyota",
        model: "Highlander",
        trim: "XLE",
        title: "Toyota Highlander XLE",
        mileage: "69,000 km",
        type: "Automatic",
        fuel: "Gas",
        price: '$27,875',
        status: "",
        available: true,
    },
]


const popularQuestions = [
    {
        id: 1,
        value: "1. Scope",
        details: [
            "1.1 The statutory warranty is completely excluded to the extent permitted by law.",
            "1.2 If the vehicle still has a current factory warranty, a sales representative (brand representative) of the manufacturer shall provide the services owed therein. If there is a factory warranty, the beginning of the warranty for new vehicles or vehicles with a current manufacturer's warranty is not the date of the first placing on the market, but the beginning of the warranty in the manufacturer's system or the contractually agreed beginning of the warranty, if any.",
            "1.3 If there is a special warranty insurance for the vehicle, this will take the place of the material warranty according to section 3.1 and replace it. In this case, the General Terms and Conditions of the respective warranty service provider apply."
        ]
    },
    {
        id: 2,
        value: "2. Vehicle characteristics",
        details: [
            "2.1 The statutory warranty is completely excluded to the extent permitted by law.",
            "2.2 If the vehicle still has a current factory warranty, a sales representative (brand representative) of the manufacturer shall provide the services owed therein. If there is a factory warranty, the beginning of the warranty for new vehicles or vehicles with a current manufacturer's warranty is not the date of the first placing on the market, but the beginning of the warranty in the manufacturer's system or the contractually agreed beginning of the warranty, if any.",
            "2.3 If there is a special warranty insurance for the vehicle, this will take the place of the material warranty according to section 3.1 and replace it. In this case, the General Terms and Conditions of the respective warranty service provider apply."
        ]
    },
    {
        id: 3,
        value: "3. Warranty / guarantee",
        details: [
            "3.1 The statutory warranty is completely excluded to the extent permitted by law.",
            "3.2 If the vehicle still has a current factory warranty, a sales representative (brand representative) of the manufacturer shall provide the services owed therein. If there is a factory warranty, the beginning of the warranty for new vehicles or vehicles with a current manufacturer's warranty is not the date of the first placing on the market, but the beginning of the warranty in the manufacturer's system or the contractually agreed beginning of the warranty, if any.",
            "3.3 If there is a special warranty insurance for the vehicle, this will take the place of the material warranty according to section 3.1 and replace it. In this case, the General Terms and Conditions of the respective warranty service provider apply."
        ]
    },
    {
        id: 4,
        value: "4. Trade-in vehicle",
        details: [
            "4.1 The statutory warranty is completely excluded to the extent permitted by law.",
            "4.2 If the vehicle still has a current factory warranty, a sales representative (brand representative) of the manufacturer shall provide the services owed therein. If there is a factory warranty, the beginning of the warranty for new vehicles or vehicles with a current manufacturer's warranty is not the date of the first placing on the market, but the beginning of the warranty in the manufacturer's system or the contractually agreed beginning of the warranty, if any.",
            "4.3 If there is a special warranty insurance for the vehicle, this will take the place of the material warranty according to section 3.1 and replace it. In this case, the General Terms and Conditions of the respective warranty service provider apply."
        ]
    },
    {
        id: 5,
        value: "5. Home Delivery",
        details: [
            "5.1 The statutory warranty is completely excluded to the extent permitted by law.",
            "5.2 If the vehicle still has a current factory warranty, a sales representative (brand representative) of the manufacturer shall provide the services owed therein. If there is a factory warranty, the beginning of the warranty for new vehicles or vehicles with a current manufacturer's warranty is not the date of the first placing on the market, but the beginning of the warranty in the manufacturer's system or the contractually agreed beginning of the warranty, if any.",
            "5.3 If there is a special warranty insurance for the vehicle, this will take the place of the material warranty according to section 3.1 and replace it. In this case, the General Terms and Conditions of the respective warranty service provider apply."
        ]
    },
    {
        id: 6,
        value: "6. Right of return",
        details: [
            "6.1 The statutory warranty is completely excluded to the extent permitted by law.",
            "6.2 If the vehicle still has a current factory warranty, a sales representative (brand representative) of the manufacturer shall provide the services owed therein. If there is a factory warranty, the beginning of the warranty for new vehicles or vehicles with a current manufacturer's warranty is not the date of the first placing on the market, but the beginning of the warranty in the manufacturer's system or the contractually agreed beginning of the warranty, if any.",
            "6.3 If there is a special warranty insurance for the vehicle, this will take the place of the material warranty according to section 3.1 and replace it. In this case, the General Terms and Conditions of the respective warranty service provider apply."
        ]
    },
    {
        id: 7,
        value: "7. Written form",
        details: [
            "7.1 The statutory warranty is completely excluded to the extent permitted by law.",
            "7.2 If the vehicle still has a current factory warranty, a sales representative (brand representative) of the manufacturer shall provide the services owed therein. If there is a factory warranty, the beginning of the warranty for new vehicles or vehicles with a current manufacturer's warranty is not the date of the first placing on the market, but the beginning of the warranty in the manufacturer's system or the contractually agreed beginning of the warranty, if any.",
            "7.3 If there is a special warranty insurance for the vehicle, this will take the place of the material warranty according to section 3.1 and replace it. In this case, the General Terms and Conditions of the respective warranty service provider apply."
        ]
    },
    {
        id: 8,
        value: "8. Applicable law and place of jurisdiction",
        details: [
            "8.1 The statutory warranty is completely excluded to the extent permitted by law.",
            "8.2 If the vehicle still has a current factory warranty, a sales representative (brand representative) of the manufacturer shall provide the services owed therein. If there is a factory warranty, the beginning of the warranty for new vehicles or vehicles with a current manufacturer's warranty is not the date of the first placing on the market, but the beginning of the warranty in the manufacturer's system or the contractually agreed beginning of the warranty, if any.",
            "8.3 If there is a special warranty insurance for the vehicle, this will take the place of the material warranty according to section 3.1 and replace it. In this case, the General Terms and Conditions of the respective warranty service provider apply."
        ]
    },
];



const displayCarsCatalog = (sortedArray) => {
    const container = document.getElementById("catalogContainer");
    sortedArray.forEach(function(item) {

        const figure = document.createElement('figure');
        figure.className = "Catalog-Item figure";
        figure.id = "catalogItem";
        container.appendChild(figure);

        const img = document.createElement('img');
        img.src = item.img;
        img.alt = item.title;
        img.className = "Catalog-Image";
        if (!item.available) { 
          img.style = "filter: grayscale(1)"  
        };
        figure.appendChild(img);

        const caption = document.createElement('figcaption');
        caption.className = "Catalog-Caption-Container";
        figure.appendChild(caption);

        const title = document.createElement("div");
        title.className = "Catalog-Title";
        caption.appendChild(title);

        const year = document.createElement("p");
        year.className = "Catalog-Year";
        year.innerText = item.year;
        title.appendChild(year);

        const model = document.createElement("h4");
        model.className = "Catalog-Model";
        model.innerText = item.title;
        title.appendChild(model);

        const params = document.createElement("p");
        params.className = "Catalog-Params";
        params.innerText = `${item.mileage} | ${item.type} | ${item.fuel}`
        caption.appendChild(params);

        const price = document.createElement("p");
        price.className = "Catalog-Price";
        price.innerText = item.price;
        caption.appendChild(price);

        if (item.status === "New") {
            const statusCaption = document.createElement('p');
            statusCaption.className = "Catalog-Status-Caption";
            statusCaption.innerText = item.status;
            figure.appendChild(statusCaption);
        }

        if (!item.available) {
            const soldCaption = document.createElement('p');
            soldCaption.className = "Catalog-Sold-Caption";
            soldCaption.innerText = "SOLD";
            figure.appendChild(soldCaption);
        }



        
    });
} 

let sortedCurrentOffers = [...currentOffers]

displayCarsCatalog(sortedCurrentOffers);


let curentYearValue = "";
let curentMakeValue = "";
let curentModelValue = "";
let curentTrimValue = "";
let curentMileageValue = "";
let sortingParameter = "";
let checkBoxValue = false;


let chosenOptionsQuantity = 0;



function priceAcsendingComparison(a, b) {
    if (a.price > b.price) {
      return 1;
    }
    if (a.price < b.price) {
      return -1;
    }
    return 0;
  }


  function priceDescendingComparison(a, b) {
    if (a.price < b.price) {
      return 1;
    }
    if (a.price > b.price) {
      return -1;
    }
    return 0;
  }

  function mileageAcsendingComparison(a, b) {
    if (parseFloat(a.mileage) > parseFloat(b.mileage)) {
      return 1;
    }
    if (parseFloat(a.mileage) < parseFloat(b.mileage)) {
      return -1;
    }
    return 0;
  }

  function mileageDecsendingComparison(a, b) {
    if (parseFloat(a.mileage) < parseFloat(b.mileage)) {
        return 1;
      }
      if (parseFloat(a.mileage) > parseFloat(b.mileage)) {
        return -1;
      }
      return 0;
  }

  function publicationDateDescendingComparison(a, b) {
    if (a.status === "New" && b.status === "") {
      return 1;
    }
    if (a.status === "" && b.status === "New") {
      return -1;
    }
    return 0;
  }

  function publicationDateAscendingComparison(a, b) {
    if (a.status === "New" && b.status === "") {
      return -1;
    }
    if (a.status === "" && b.status === "New") {
      return 1;
    }
    return 0;
  }

  function performanceAscendingComparison(a, b) {
    if (a.fuel === "Gas" && b.fuel === "Diesel") {
      return 1;
    }
    if (a.fuel === "Diesel" && b.fuel === "Gas") {
      return -1;
    }
    return 0;
  }

  function performanceDescendingComparison(a, b) {
    if (a.fuel === "Gas" && b.fuel === "Diesel") {
      return -1;
    }
    if (a.fuel === "Diesel" && b.fuel === "Gas") {
      return 1;
    }
    return 0;
  }


const sortCarItems = (comparisonFunction) => {
        const container = document.getElementById("catalogContainer");
        container.innerHTML = "";
        sortedCurrentOffers.sort(comparisonFunction);
      displayCarsCatalog(sortedCurrentOffers);
}




const createDropdownItems = (data, id, buttonTextId, containerId, arrowId, headingId, buttonId) => {
    const dropdownContent = document.querySelector(`#${id}`);
    data.forEach(function(item) {
    const li = document.createElement('li');
    li.textContent = item.value;
    li.className = "Dropdown-Item";

    if (data === sortOptions) {
        li.className = "Dropdown-Item Sort-Item";
    }

    if (item.id === 9) {
        li.id = "elementToBeChanged";
        li.style = "display: none"
    }

    
    const liClickHandler = () => {
        const buttonText = document.getElementById(buttonTextId);
        buttonText.innerHTML = item.value;
        const button = document.getElementById(buttonId);
        const container = document.getElementById(containerId);
        const heading = document.getElementById(headingId);
        container.style = "display: none";
        heading.style = "font-weight: 400";

        const arrow = document.getElementById(arrowId);
        button.style = "color: #DF4E3C";

        if (arrow) {
            button.style = "color: #000000";
            arrow.style = "display: block";  
            button.style = "border: 1px solid #DF4E3C";  
        } 

        if (!dropdownContent.textContent.includes(sortOptions[0].value)) {
            const elementToChange = document.getElementById("elementToBeChanged");
            elementToChange.style = "display: block"; 
        }

        if (item.direction === "asc") {
            const ascIcon = document.getElementById("ascIcon");
            ascIcon.style = "display: block";
            const descIcon = document.getElementById("descIcon");
            descIcon.style = "display: none";


           

            if (li.textContent === "Price (ascending)") {
                sortCarItems(priceAcsendingComparison);
                sortingParameter = "Price (ascending)"
            }

            if (li.textContent === "Mileage (ascending)") {
                sortCarItems(mileageAcsendingComparison);
                sortingParameter = "Mileage (ascending)"
            }

            if (li.textContent === "Performance (ascending)") {
                sortCarItems(performanceAscendingComparison);
                sortingParameter = "Performance (ascending)"
            }

            



        } else if (item.direction === "desc") {
            const ascIcon = document.getElementById("ascIcon");
            ascIcon.style = "display: none";
            const descIcon = document.getElementById("descIcon");
            descIcon.style = "display: block";


            if (li.textContent === "Price (descending)") {
                sortCarItems(priceDescendingComparison);
                sortingParameter = "Price (descending)"
            }

            if (li.textContent === "Mileage (descending)") {
                sortCarItems(mileageDecsendingComparison);
                sortingParameter = "Mileage (descending)"
            }

            if (li.textContent === "Publication date (descending)") {
                sortCarItems(publicationDateDescendingComparison);
                sortingParameter = "Publication date (descending)"
            }

            if (li.textContent === "Performance (descending)") {
                sortCarItems(performanceDescendingComparison);
                sortingParameter = "Performance (descending)"
            }
        }



        if (yearOptions.includes(item)) {
            curentYearValue = item.value;
        } else if (makeOptions.includes(item)) {
            curentMakeValue = item.value
        } else if (modelOptions.includes(item)) {
            curentModelValue = item.value
        } else if (trimOptions.includes(item)) {
            curentTrimValue = item.value
        } else if (mileageOptions.includes(item)) {
            curentMileageValue = item.value
        }

        chosenOptionsQuantity = 0;
        sortedCurrentOffers = [];
        for (let element of currentOffers) {
            if ((element.year === curentYearValue || curentYearValue === '') && (element.make === curentMakeValue || curentMakeValue === '') && (element.model === curentModelValue || curentModelValue === '') && (element.trim === curentTrimValue || curentTrimValue === '') && (element.mileage === curentMileageValue || curentMileageValue === '')){
                chosenOptionsQuantity++;
                if (!sortedCurrentOffers.includes(element)) {
                    sortedCurrentOffers.push(element)
                }
            }
        }
        const quantity = document.getElementById("currentCarsQuantity");
        quantity.innerText = chosenOptionsQuantity;

        

    }
    li.onclick = liClickHandler;
    if (item.value !== sortOptions[0].value) {
        dropdownContent.appendChild(li);
    
    }
   
});
}






const displaySelectOptions = (containerId, arrowId, headingId, buttonId) => {
    const container = document.getElementById(containerId);
    const arrow = document.getElementById(arrowId);
    const heading = document.getElementById(headingId);
    const button = document.getElementById(buttonId);
    if (container.style.display === "none") {
        container.style = "display: block";
        if (arrow) {
            arrow.style = "display: none";
            heading.style = "font-weight: 600";
            button.style = "border: 1px solid #8d8d8d";
        }
    } else {
        container.style = "display: none"; 
        heading.style = "font-weight: 400";
        if (arrow) {
            arrow.style = "display: block";
        }
    }
}

createDropdownItems(yearOptions, "Year-Select-Options-Container", "Year-Select-Heading", `Year-Select-Options-Container`, `Year-Select-Arrow`, `Year-Select-Heading`, "Year-Select");
createDropdownItems(makeOptions, "Make-Select-Options-Container", "Make-Select-Heading", `Make-Select-Options-Container`, `Make-Select-Arrow`, `Make-Select-Heading`, "Make-Select");
createDropdownItems(modelOptions, "Model-Select-Options-Container", "Model-Select-Heading", `Model-Select-Options-Container`, `Model-Select-Arrow`, `Model-Select-Heading`, "Model-Select");
createDropdownItems(trimOptions, "Trim-Select-Options-Container", "Trim-Select-Heading", `Trim-Select-Options-Container`, `Trim-Select-Arrow`, `Trim-Select-Heading`, "Trim-Select");
createDropdownItems(mileageOptions, "Mileage-Select-Options-Container", "Mileage-Select-Heading", `Mileage-Select-Options-Container`, `Mileage-Select-Arrow`, `Mileage-Select-Heading`, "Mileage-Select");
createDropdownItems(sortOptions, "Sort-Select-Options-Container", "Sort-Select-Heading", `Sort-Select-Options-Container`, `Sort-Select-Arrow`, `Sort-Select-Heading`, "Sort-Select");

const showButtonHandler = () => {
    const container = document.getElementById("catalogContainer");
    container.innerHTML = "";
    sortedCurrentOffers = [];
    for (let element of currentOffers) {
        if (!checkBoxValue) {
        if ((element.year === curentYearValue || curentYearValue === '') && (element.make === curentMakeValue || curentMakeValue === '') && (element.model === curentModelValue || curentModelValue === '') && (element.trim === curentTrimValue || curentTrimValue === '') && (element.mileage === curentMileageValue || curentMileageValue === '')) {
            if (!sortedCurrentOffers.includes(element)) {
                sortedCurrentOffers.push(element)
            }}
        } else {
            if ((element.available) && (element.year === curentYearValue || curentYearValue === '') && (element.make === curentMakeValue || curentMakeValue === '') && (element.model === curentModelValue || curentModelValue === '') && (element.trim === curentTrimValue || curentTrimValue === '') && (element.mileage === curentMileageValue || curentMileageValue === '')){
                if (!sortedCurrentOffers.includes(element)) {
                    sortedCurrentOffers.push(element)
                }
        }
        }
    }
    if (sortingParameter === "Price (descending)") {
        sortCarItems(priceDescendingComparison);    
    }
    if (sortingParameter === "Mileage (descending)") {
        sortCarItems(mileageDecsendingComparison);
    }

    if (sortingParameter === "Publication date (descending)") {
        sortCarItems(publicationDateDescendingComparison);
    }

    if (sortingParameter === "Performance (descending)") {
        sortCarItems(performanceDescendingComparison);
    }

    if (sortingParameter === "Price (ascending)") {
        sortCarItems(priceAcsendingComparison);
    }

    if (sortingParameter === "Mileage (ascending)") {
        sortCarItems(mileageAcsendingComparison);
    }

    if (sortingParameter === "Performance (ascending)") {
        sortCarItems(performanceAscendingComparison);
    }

    if (sortingParameter === "Publication date (ascending)") {
        sortCarItems(publicationDateAscendingComparison);
    }

    displayCarsCatalog(sortedCurrentOffers);
    
}

const checkboxHandler = () => {
    checkBoxValue = !checkBoxValue;
    const checboxText = document.getElementById("offersPageCheckboxText");
    if (checkBoxValue) {
        
        checboxText.style = "color: #df4e3c"
    } else{
        checboxText.style = "color: #000000"
    }
    showButtonHandler();
}

const displayPopularQuestions = () => {
    const container = document.getElementById("popularQuestionsContainer");
    popularQuestions.forEach(function(item) {

        const iconClickHandler = () => {
            if (icon.innerText === "+") {
                item.details.forEach(function(textBlock) {
                    const content = document.createElement("p");
                    content.className = "Popular-Questions-Content";
                    content.innerText = textBlock;
                    contentWrap.appendChild(content)
                })
                icon.innerText = "-";
                icon.style = "color: #df4e3c";
                heading.style = "color: #df4e3c";
                headingWrap.style = "border-bottom: none; background-color: #FFFFFF";
                contentWrap.style = "display: flex; background-color: #FFFFFF";
                commonWrap.style = "box-shadow: 0px 0px 18px 0px #44444417; border-top: 1px solid white; margin-top: -1px"
            } else {
                contentWrap.innerText = "";
                icon.innerText = "+";
                icon.style = "color: #000000";
                heading.style = "color: #000000";
                headingWrap.style = "border-bottom: 1px solid #C4C4C4";
                commonWrap.style = "box-shadow: none"
                contentWrap.style = "display: none"
            }
        }

        const commonWrap = document.createElement('div');
        commonWrap.className = "Popular-Questions-Common-Wrap";
        container.appendChild(commonWrap);


        const headingWrap = document.createElement('div');
        headingWrap.className = "Popular-Questions-Heading-Wrap";
        headingWrap.onclick = iconClickHandler;
        commonWrap.appendChild(headingWrap);

        const heading = document.createElement('p');
        heading.className = "Popular-Questions-Title";
        heading.innerText = item.value;
        headingWrap.appendChild(heading);

        const icon = document.createElement('p');
        icon.innerText = "+";
        icon.className = "Popular-Questions-Title";
        headingWrap.appendChild(icon);

        const contentWrap = document.createElement('div'); 
        contentWrap.className = "Popular-Questions-Content-Wrap";
        commonWrap.appendChild(contentWrap);




    })
}

displayPopularQuestions()


const marker = document.getElementById("emailValidationMarker");

const validateEmail = (emailValue) => {
    const cross = document.getElementById("crossSign");
    const tick = document.getElementById("tickSign");
    const input = document.getElementById("emailInput");
    const sign = document.getElementById("basic-addon2");
    var regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (!regExp.test(String(emailValue).toLowerCase())) {
        marker.innerText = "Incorrect email";
        cross.style = "display: block";
        tick.style = "display: none";
        input.style = "border: 1px solid #df4e3c; border-right: none";
        sign.style = "border: 1px solid #df4e3c; border-left: none";
    } else {
        marker.innerText = "";  
        tick.style = "display: block";
        cross.style = "display: none"; 
        input.style = "border: 1px solid #507a36; border-right: none";
        sign.style = "border: 1px solid #507a36; border-left: none";
    }
  }

const form = document.getElementById("emailForm")

  form.addEventListener('submit', e => {
    if(marker.innerText === "Incorrect email")
        e.preventDefault()
})

