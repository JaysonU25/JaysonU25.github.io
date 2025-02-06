const overlay = document.getElementById("overlay");

document.getElementById("options").onclick = function showOverlay() {
    console.log("Overlay Opened");
    overlay.style.display = "flex";
}

document.getElementById("close").onclick = function closeOverlay(){
    console.log("Overlay closed")
    overlay.style.display = "none";
}