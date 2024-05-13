let data;
async function loadData(){
    let response = await fetch(document.currentScript.getAttribute('fileName'));
    let result = await response.json();
    data = result;
    return result;
}


loadDataFromJson();

async function loadDataFromJson(){
    data = await loadData();
    let table = document.getElementById("noticeBody");
    let thead = document.createElement("thead")
    let th1 = document.createElement("th");
    th1.appendChild(document.createTextNode("Device"));
    th1.classList.add("colorHead1");
    thead.appendChild(th1);

    // Create Header wiht Devices
    for(let i=0;i<data.length;i++){
        let th2 = document.createElement("th");
        th2.appendChild(document.createTextNode(data[i].device));
        th2.classList.add("colorHead2");
        thead.appendChild(th2);
    }
    let tbody = document.createElement("tbody");
    
    // Create Type of Data
    let trDataType = document.createElement("tr");
    let tdDataType = document.createElement("td");
    tdDataType.appendChild(document.createTextNode("Type of Data"));
    tdDataType.classList.add("colorAddition1");
    trDataType.appendChild(tdDataType);

    for (let i=0; i<data.length;i++){
        let td2 = document.createElement("td");
        td2.appendChild(document.createTextNode(data[i].dataType));
        td2.classList.add("colorAddition2");
        trDataType.appendChild(td2);
    }

    // Create Purpose
    let trPurpose =  document.createElement("tr");
    let tdPurpose = document.createElement("td");
    tdPurpose.appendChild(document.createTextNode("Purpose"));
    tdPurpose.classList.add("colorAddition1");
    trPurpose.appendChild(tdPurpose);

    for (let i=0; i<data.length;i++){
        let td2 = document.createElement("td");
        td2.appendChild(document.createTextNode(data[i].purpose));
        td2.classList.add("colorAddition2");
        trPurpose.appendChild(td2);
    }

    // Create Sensor
    let trSensor =  document.createElement("tr");
    let tdSensor = document.createElement("td");
    tdSensor.appendChild(document.createTextNode("Sensor on Device"));
    tdSensor.classList.add("colorAddition1");
    trSensor.appendChild(tdSensor);

    for (let i=0; i<data.length;i++){
        let td2 = document.createElement("td");
        td2.appendChild(document.createTextNode(data[i].sensor));
        td2.classList.add("colorAddition2");
        trSensor.appendChild(td2);
    }

    // Create Access to Data
    let trDataAccess =  document.createElement("tr");
    let tdDataAccess = document.createElement("td");
    tdDataAccess.appendChild(document.createTextNode("Access to Your Data"));
    tdDataAccess.classList.add("colorAddition1");
    trDataAccess.appendChild(tdDataAccess);

    for (let i=0; i<data.length;i++){
        let td2 = document.createElement("td");
        td2.appendChild(document.createTextNode(data[i].dataAccess));
        td2.classList.add("colorAddition2");
        trDataAccess.appendChild(td2);
    }

    // Create Retention
    let trDataRetention =  document.createElement("tr");
    let tdDataRetention = document.createElement("td");
    tdDataRetention.appendChild(document.createTextNode("Retention of the Data"));
    tdDataRetention.classList.add("colorAddition1");
    trDataRetention.appendChild(tdDataRetention);

    for (let i=0; i<data.length;i++){
        let td2 = document.createElement("td");
        td2.appendChild(document.createTextNode(data[i].dataRetention));
        td2.classList.add("colorAddition2");
        trDataRetention.appendChild(td2);
    }

    // Create Description
    let trDescription =  document.createElement("tr");
    let tdDescription = document.createElement("td");
    tdDescription.appendChild(document.createTextNode("Description"));
    tdDescription.classList.add("colorAddition1");
    trDescription.appendChild(tdDescription);

    for (let i=0; i<data.length;i++){
        let td2 = document.createElement("td");
        td2.appendChild(document.createTextNode(data[i].description));
        td2.classList.add("colorAddition2");
        trDescription.appendChild(td2);
    }

    
    tbody.appendChild(trDataType);
    tbody.appendChild(trPurpose);
    tbody.appendChild(trSensor);
    tbody.appendChild(trDataAccess);
    tbody.appendChild(trDataRetention);
    tbody.appendChild(trDescription);

    table.appendChild(thead);
    table.appendChild(tbody);

}
