document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll(".task-checkbox");
    const taskProgressBars = [
        document.querySelector(".Task1Progress .progress"),
        document.querySelector(".Task2Progress .Task2p"),
        document.querySelector(".Task3Progress .Task3p")
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
            } else {
                progressBar.style.width = "0"; 
            }
        });
        const totalTasks = checkboxes.length;
        const progressPercentage = (completedTasks / totalTasks) * 100;
        ratingSlider.value = progressPercentage;
        contentmentText.innerText = `Contentment: ${Math.round(progressPercentage)}%`;
    }
    checkboxes.forEach(checkbox => checkbox.addEventListener("change", updateProgress));
    ratingSlider.addEventListener("input", () => {
        contentmentText.innerText = `Contentment: ${ratingSlider.value}%`;
    });
    updateProgress();
});