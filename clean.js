document.addEventListener("DOMContentLoaded", () => {
    const circleContainer = document.querySelector(".circle-container");
    const startButton = document.getElementById("startButton");

    startButton.addEventListener("click", () => {
        const circleWidth = parseInt(document.getElementById("circleWidth").value);
        const growthAmount = parseInt(document.getElementById("growthAmount").value);
        const growRate = parseInt(document.getElementById("growRate").value);
        const numCircles = parseInt(document.getElementById("numCircles").value);

        for (let i = 0; i < numCircles; i++) {
            createCircle(circleWidth, growthAmount, growRate);
        }
    });

    function createCircle(width, growthAmount, growRate) {
        const circle = document.createElement("div");
        circle.classList.add("circle");
        circle.style.width = `${width}px`;
        circle.style.height = `${width}px`;

        circle.addEventListener("click", () => {
            circle.remove();
        });

        circleContainer.appendChild(circle);

        setInterval(() => {
            width += growthAmount;
            circle.style.width = `${width}px`;
            circle.style.height = `${width}px`;
        }, growRate);
    }
});
