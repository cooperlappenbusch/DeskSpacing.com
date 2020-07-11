/*var dropDownDict = {
    "16:9": ["23\"", "24\""],
    "21:9": ["34\"", "27\""],
    "32:9": ["49\""]
}
var aspectRatioForm = document.getElementById("aspectRatioForm");
var monitorSizeForm = document.getElementById("monitorSizeForm");

aspectRatioForm.addEventListener("click", resetCustomAspectRatio, false);

function resetCustomAspectRatio(e) {
    monitorSizeForm.innerHTML = '';
    console.log(aspectRatioForm.value);
    for (var i = 0; i < dropDownDict[aspectRatioForm.value].length; i++) {
        var newSize = document.createElement('option');
        newSize.value = dropDownDict[aspectRatioForm.value][i];
        newSize.innerHTML = dropDownDict[aspectRatioForm.value][i];
        monitorSizeForm.appendChild(newSize);
    }
}*/
