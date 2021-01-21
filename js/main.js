$(function () {
    addDataProgressBar(progress);
});

const selected = document.querySelectorAll(".selected");
const optionsContainer = document.querySelectorAll(".options-container");
const optionsList = document.querySelectorAll(".option");

let progress = 0;
const percentage = document.querySelector('#percentage');
const progressBar = document.querySelector('#progress-bar');

for (let i = 0; i < selected.length; i++) {
    selected[i].addEventListener("click", () => {
        optionsContainer[i].classList.toggle("active");
        testFunction(i);
    });

}

function testFunction(val) {
    optionsList.forEach(o => {
        o.addEventListener("click", () => {
            if (val !== undefined) {
                selected[val].innerHTML = o.querySelector("label").innerHTML;
                optionsContainer[val].classList.remove("active");
                if (progress < 100) {
                    progress += 12.5;
                }
                increaseProgressBar(progress);
                addDataProgressBar(progress);
            }
            val = undefined;
        });
    });
}

function increaseProgressBar(num) {
    if (num === 100) {
        progressBar.style.backgroundColor = '#4CBB17';
        document.querySelector('#displayPopup').removeAttribute('disabled');
    }
    progressBar.style.width = `${num}%`;
}
function addDataProgressBar(num) {
    percentage.innerHTML = '';
    percentage.append(`${num}%`);
}



