document.addEventListener("DOMContentLoaded", () => {
    const rColor = document.getElementById("red");
    const gColor = document.getElementById("green");
    const bColor = document.getElementById("blue");
    const oColor = document.getElementById("opacity");

    const sliders = document.querySelectorAll(".container-slider input[type='range']");
    const copyBtn = document.getElementById("copy-btn");
    const result = document.querySelector(".container-result input");

    let generateColor = () => {
        let rColorValue = rColor.value;
        let gColorValue = gColor.value;
        let bColorValue = bColor.value;
        let oColorValue = oColor.value;

        let finalColor = `rgba(${rColorValue}, ${gColorValue}, ${bColorValue}, ${oColorValue})`;
        result.value = finalColor;
        document.body.style.backgroundColor = finalColor;
    };

    let copyColorCode = () => {
        result.select();
        document.execCommand("copy");
        copyBtn.innerText = "Copied";
        setTimeout(() => {
            copyBtn.innerText = "Copy Color Code";
        }, 1000);
    };

    sliders.forEach((inp) => {
        inp.addEventListener("input", generateColor);
    });

    window.addEventListener("load", generateColor);
    copyBtn.addEventListener("click", copyColorCode);

    setInterval(() => {
        console.log(`Red: ${rColor.value}, Green: ${gColor.value}, Blue: ${bColor.value}`);
    }, 1000);
});

function reduceCopy(){
    const btn = document.getElementById("copy-btn");
    if(window.innerWidth < 845){
        btn.textContent = 'Copy';
    } else {
        btn.textContent = 'Copy Color Code';
    }
}

window.addEventListener('load', reduceCopy);
window.addEventListener('resize', reduceCopy);




