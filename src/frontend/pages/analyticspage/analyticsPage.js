document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll(".task-checkbox");
    const taskProgressBars = [
        document.querySelector(".Task1Progress .progress"),
        document.querySelector(".Task2Progress .Task2p"),
        document.querySelector(".Task3Progress .Task3p"),
        document.querySelector(".Task4Progress .Task4p")
    ];

    const ratingSlider = document.getElementById("contentmentRating");
    const contentmentText = document.getElementById("contentmentText");

    function updateProgress() {
        let completedTasks = 0;

        checkboxes.forEach((checkbox, index) => {
            const progressBar = taskProgressBars[index];
            if (checkbox.checked) {
                completedTasks++;
                progressBar.style.width = "100%";
                pieChart.data.datasets[0].data[index] = 1; // pie chart
            } else {
                progressBar.style.width = "0";
                pieChart.data.datasets[0].data[index] = 0; // pie chart
            }
        });
        const totalTasks = checkboxes.length;
        const progressPercentage = (completedTasks / totalTasks) * 100;
        ratingSlider.value = progressPercentage;
        contentmentText.innerText = `Contentment: ${Math.round(progressPercentage)}%`;
        pieChart.update(); // pie chart
    }
    checkboxes.forEach(checkbox => checkbox.addEventListener("change", updateProgress));
    ratingSlider.addEventListener("input", () => {
        contentmentText.innerText = `Contentment: ${ratingSlider.value}%`;
    });
    updateProgress();

    // pie chart dynamic code
    let pieChart;
    const pieChartCanvas = document.createElement('canvas');
    const chartContainer = document.querySelector('.pie-chart-container');
    chartContainer.appendChild(pieChartCanvas);
    
    const pieChartData = {
        labels: ["Task 1", "Task 2", "Task 3", "Task 4"],
        datasets: [{
            data: [0, 0, 0, 0],
            backgroundColor: ["#A6AEBF", "#006A67", "#608BC1", "#98B4A6"],
            hoverOffset: 4
        }]
    };

    const pieChartConfig = {
        type: 'doughnut',
        data: pieChartData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top'
                }
            },
            cutout: '70%'
        }
    };

    pieChart = new Chart(pieChartCanvas, pieChartConfig);
});
