const switched = document.getElementById("LightSwitch");
switched.checked = localStorage.switched === "1";
switched.onchange = () => localStorage.switched = switched.checked ? "1" : "0";