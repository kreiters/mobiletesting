pixelBtn = document.getElementById("btn");
xBtn = document.getElementById("xBtn");
ratio = window.devicePixelRatio
dimensionX = window.screenX

pixelBtn.addEventListener("click", function() {
    console.log("button clicked");
    alert("Your device pixel ratio is: " + ratio);
});

xBtn.addEventListener("click", function() {
    console.log("button clicked");
    alert("Your screen resolution is: " + screen.width + "x" + screen.height);
});
