document.getElementById('startButton').addEventListener('click', function() {
    const width = parseInt(document.getElementById('width').value);
    const growthAmount = parseInt(document.getElementById('growthAmount').value);
    const growRate = parseInt(document.getElementById('growRate').value);
    const numCircles = parseInt(document.getElementById('numCircles').value);

    const container = document.getElementById('circleContainer');
    container.innerHTML = ''; // Clear existing circles

    for (let i = 0; i < numCircles; i++) {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        circle.style.width = `${width}px`;
        circle.style.height = `${width}px`;

        // Position circles randomly within the container
        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;
        const left = Math.random() * (containerWidth - width);
        const top = Math.random() * (containerHeight - width);
        circle.style.left = `${left}px`;
        circle.style.top = `${top}px`;

        let currentSize = width;
        const intervalId = setInterval(() => {
            currentSize += growthAmount;
            circle.style.width = `${currentSize}px`;
            circle.style.height = `${currentSize}px`;
        }, growRate);

        circle.addEventListener('click', function() {
            clearInterval(intervalId);
            container.removeChild(circle);
        });

        container.appendChild(circle);
    }
});
