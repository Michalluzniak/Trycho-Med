// create div elements for problems section and

const problemContainer = document.querySelector('.problems__points');

const createDiv = function () {
    let problemNumber = 2;
    const problemsDescriptionsArray = [
        "Łysieniem androgenowym", "Wszystkimi rodzajami łupieżu", "Świądem skory głowy", "Przesuszona/ odwodniona skóra głowy", "Nadwrażliwość skory głowy",
        "Uszkodzeniami łodygi włosa", "Po przeszczepie włosów"
    ]

    for (let i = 0; i < 7; i++) {
        const newDiv = document.createElement('div');
        const newParagraph = document.createElement('p');
        newDiv.className = `problem__${problemNumber++} allPoints`;
        problemContainer.appendChild(newDiv);
        newDiv.appendChild(newParagraph);
        newParagraph.textContent = problemsDescriptionsArray[i];
    }
}
window.onload = createDiv;