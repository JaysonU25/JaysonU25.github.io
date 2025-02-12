const overlay = document.getElementById("overlay");

document.getElementById("options").onclick = function showOverlay() {
    console.log("Overlay Opened");
    overlay.style.display = "flex";
}

document.getElementById("close").onclick = function closeOverlay(){
    console.log("Overlay closed")
    overlay.style.display = "none";
}


const rectangle3 = document.querySelector(".Rectangle3");

if (rectangle3){
rectangle3.addEventListener('click', function() { 
    rectangle3.classList.toggle('shrunk');
    document.querySelector('.content-About').classList.toggle('content-shrank')
});
}


const rectangle4 = document.querySelector(".Rectangle4");
rectangle4_shrunk = false;
rectangle4.addEventListener('click', function() { 
    rectangle4.classList.toggle('shrunk');
    if (document.getElementsByClassName("Rectangle5 shrunk").length > 0){
        document.querySelector('.content-Employment-Based').classList.toggle('content-shrank');
    }
});

const rectangle5 = document.querySelector(".Rectangle5");

rectangle5.addEventListener('click', function() { 
    rectangle5.classList.toggle('shrunk');
    if (document.getElementsByClassName("Rectangle4 shrunk").length > 0){
        document.querySelector('.content-Employment-Based').classList.toggle('content-shrank');
    }
});

