let data;
async function loadData(){
    let response = await fetch(document.currentScript.getAttribute('fileName'));
    let result = await response.json();
    data = result;
    return result;
}

start();

async function start(){
    data = await loadData();
    let body = document.getElementById("mainContainer");
    let ele; 
    for(let i=0;i<data.length;i++){
        if(i==0){
            ele = createNewCards(null, data[i], i);
        }else{
            ele = createNewCards("mt-5", data[i], i);
        }
        body.appendChild(ele);
    }

}
function createNewCards(val, data, idVal){
    let newDivForCard = document.createElement("div");
    if(val == null){
        newDivForCard.classList.add("row", "camera", "rounded");
    }else{
        newDivForCard.classList.add("row", "camera", "rounded", val);
    }
    // Create Main Title For the Cards
    let mainTitle = document.createElement("p");
    mainTitle.classList.add("device-title")
    mainTitle.appendChild(document.createTextNode(data.device));
    newDivForCard.appendChild(mainTitle);

    // First Coloumn for Image Views
    let leftCol = document.createElement("div");
    leftCol.classList.add("col-md-4", "col-icon");
    
    // New Div for Carousel inside First Col
    let carDiv = document.createElement("div");
    carDiv.setAttribute("class", "carousel slide");
    carDiv.setAttribute("data-bs-ride", "carousel"); 
    carDiv.setAttribute("data-bs-interval", "3000");

    // New Inner Carousel
    let carInnerDiv = document.createElement("div");
    carInnerDiv.classList.add("carousel-inner");

    // New Carousel Item Div
    for(let i =0;i<data.images.length;i++){
        let carItemDiv = document.createElement("div");
        let img = document.createElement("img");
        if(i==0){
            carItemDiv.classList.add("carousel-item", "active");
            img.classList.add("d-block", "img-thumbnail");
            img.src = data.images[i];
        }else{
            carItemDiv.classList.add("carousel-item");
            img.classList.add( "d-block", "img-thumbnail");
            img.src = data.images[i];
        }
        carItemDiv.appendChild(img);
        carInnerDiv.appendChild(carItemDiv);
    }
    carDiv.appendChild(carInnerDiv);
    leftCol.appendChild(carDiv);
    newDivForCard.appendChild(leftCol);

    // Second Right Coloumn For ID Card
    let rightCol = document.createElement("div");
    rightCol.classList.add("col-md-8" ,"col-describe");
    // New Div For Card
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card", "border-0");
    // New Div for Card Body
    let cardBodyDiv = document.createElement("div");
    cardBodyDiv.classList.add("card-body");
    // New Div for Card Title
    let cardTitleDiv = document.createElement("div");
    cardTitleDiv.classList.add("card-title");
    // Inside Row of Card Title
    let innerCardRowTitle = document.createElement("div");
    innerCardRowTitle.classList.add("row");
    // Inside Coloumn of Row - Card Title - 4 Space
    let innerCardCol4Title = createColInfo(4);
    // Data Type
    let info = createInformation("Type of Data:", data.dataType);
    innerCardCol4Title.appendChild(info[0]);
    innerCardCol4Title.appendChild(info[1]);
    innerCardRowTitle.appendChild(innerCardCol4Title);

    // Inside Coloumn of Row - Card Title - 6 Space
    let innerCardCol6Title = createColInfo(6);
    // Purpose of Sharing
    info = createInformation("Purpose of Sharing", data.purpose);
    innerCardCol6Title.appendChild(info[0]);
    innerCardCol6Title.appendChild(info[1]);
    innerCardRowTitle.appendChild(innerCardCol6Title);
    
    //Finishing up CardTitle
    cardTitleDiv.appendChild(innerCardRowTitle);
    cardBodyDiv.appendChild(cardTitleDiv);

    // Adding Button to Card Body
    let button = document.createElement("a");
    button.classList.add("btn", "btn-primary");
    button.setAttribute("href", "#collapse"+idVal);
    button.setAttribute("role","button");
    button.setAttribute("aria-expanded","false");
    button.setAttribute("data-bs-toggle", "collapse");
    button.setAttribute("aria-controls", "collapse"+idVal);
    button.appendChild(document.createTextNode("Get More Info"));
    cardBodyDiv.appendChild(button);

    // Creating Hiding Element
    let collapseDiv = document.createElement("div");
    collapseDiv.classList.add("collapse");
    collapseDiv.setAttribute("id", "collapse"+idVal);
    let rowCollapseDiv =document.createElement("div");
    rowCollapseDiv.classList.add("row", "mt-2");

    let collapseCol4 = createColInfo(4);
    // Sensor Info
    info = createInformation("Sensor on Device", data.sensor);
    collapseCol4.appendChild(info[0]);
    collapseCol4.appendChild(info[1]);
    
    //Retention Info
    info = createInformation("Retention of the Data", data.dataRention);
    collapseCol4.appendChild(info[0]);
    collapseCol4.appendChild(info[1]);
    rowCollapseDiv.appendChild(collapseCol4);

    
    let collapseCol6 = createColInfo(6);
    //Data Access
    info = createInformation("Access to your Data", data.dataAccess);
    collapseCol6.appendChild(info[0]);
    collapseCol6.appendChild(info[1]);
    // Description
    info = createInformation("Description", data.description);
    collapseCol6.appendChild(info[0]);
    collapseCol6.appendChild(info[1]);

    rowCollapseDiv.appendChild(collapseCol6);
    collapseDiv.appendChild(rowCollapseDiv);
    
    cardBodyDiv.appendChild(collapseDiv);
    cardDiv.appendChild(cardBodyDiv);
    rightCol.appendChild(cardDiv);

    newDivForCard.appendChild(rightCol);

    return newDivForCard;
}


function createParaTags(value){
    let para = document.createElement("p");
    para.appendChild(document.createTextNode(value));
    return para;
}

function createInformation(value1, value2){
    let divTitle = document.createElement("div");
    divTitle.classList.add("row", "row-ciTitle");
    divTitle.appendChild(createParaTags(value1));
    let divInfo = document.createElement("div");
    divInfo.classList.add("row","row-ciInfo");
    divInfo.appendChild(createParaTags(value2));
    return [divTitle, divInfo];
}

function createColInfo(colDescrip){
    let col = document.createElement("div");
    if(colDescrip == 4){
        col.classList.add("col-md-4");
    }else{
        col.classList.add("col-md-6");
    }
    return col;
}

