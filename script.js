pixelBtn = document.getElementById("btn");
ratio = window.devicePixelRatio

pixelBtn.addEventListener("click", function() {
    console.log("button clicked");
    alert("Your device pixel ratio is: " + ratio);
});
    