import JSZip from "jszip"
import modInfo from "../resources/data/modinfo.json"

var json = {};
var zip = new JSZip();

function setData(key, type, data) {
    json[key] = JSON.stringify(data, null, "\t");

    zip.folder("data").folder("local").folder("lng").folder(type).file(key + ".json", json[key]);
}

function setModData(name, savepath) {
    modInfo.name = name;
    modInfo.savepath = savepath;
    zip.file("modinfo.json", JSON.stringify(modInfo, null, "\t"));
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
    setData, setModData, download
}