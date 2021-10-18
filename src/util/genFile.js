import JSZip from "jszip"
import modInfo from "../resources/data/modinfo.json"

var json;
var zip = new JSZip();

function setData(data) {
    json = JSON.stringify(data, null, "\t");
}

function setStringData(type, fileName) {
    zip.folder("data").folder("local").folder("lng").folder(type).file(fileName, json);
}

function setModData() {
    zip.folder("data").file("modinfo.json", JSON.stringify(modInfo, null, "\t"));
}

function download(fileName) {
    zip.generateAsync({ type: "blob" }).then(async function (content) {
        const url = window.URL.createObjectURL(new Blob([content]));
        const anchor = document.createElement("a");

        anchor.href = url;
        anchor.setAttribute("download", fileName + ".mpq.zip");
        document.body.appendChild(anchor);
        anchor.click();
    })
}

export {
    setData, setStringData, setModData, download
}