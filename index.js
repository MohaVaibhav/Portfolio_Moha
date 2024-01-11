function ToggleEvent() {
    var obj=document.getElementById("navigration");
    obj.classList.toggle("navigation_mobile");
    obj.classList.toggle("navigation");
    var obj2=document.getElementById("overlay");
    if (obj2.style.display === "none"){
        obj2.style.display = "block";
        
    }
    else{
        obj2.style.display = "none";
    }
}