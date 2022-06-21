let table = document.getElementById("csvTable");
let filePicker = document.getElementById("csvFile");
let csvInput = document.getElementById("csvInput");

// lê arquivo
filePicker.onchange = () => {
    table.innerHTML = "";
    let reader = new FileReader();
    reader.addEventListener("loadend", () => {
        let csv = reader.result.split("\n");
        for (let row of csv) {
            let tr = table.insertRow();
            for (let col of row.split(",")) {
                let td = tr.insertCell();
                td.innerHTML = col;
            }
        }
    });
    reader.readAsText(filePicker.files[0]);
};

// lê input
function csvToTable() {
    let csv = csvInput.value.split("\n");
    for (let row of csv) {
        let tr = table.insertRow();
        for (let col of row.split(",")) {
            let td = tr.insertCell();
            td.innerHTML = col;
        }
    }
}

