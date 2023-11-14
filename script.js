document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.querySelector('.main-content');

    // Number Guessing Game
    document.getElementById('game1').addEventListener('click', () => {
        mainContent.innerHTML = `
            <h2>Number Guessing Game</h2>
            <p>Guess a number between 1 and 100</p>
            <input type="number" id="guessInput" min="1" max="100">
            <button id="guessButton">Guess</button>
            <p id="result"></p>
        `;

        const randomNumber = Math.floor(Math.random() * 100) + 1;
        const resultElement = document.getElementById('result');
        const guessButton = document.getElementById('guessButton');
        const guessInput = document.getElementById('guessInput');

        guessButton.addEventListener('click', () => {
            const userGuess = parseInt(guessInput.value);
            if (userGuess === randomNumber) {
                resultElement.textContent = 'Congratulations! You guessed right!';
            } else if (userGuess < randomNumber) {
                resultElement.textContent = 'Too low. Try again.';
            } else {
                resultElement.textContent = 'Too high. Try again.';
            }
        });
    });

    // Sorting Game
    document.getElementById('game2').addEventListener('click', () => {
        mainContent.innerHTML = `
            <h2>Sorting Game</h2>
            <p>Enter numbers separated by commas (e.g., 3, 1, 4) and click sort:</p>
            <input type="text" id="sortInput">
            <button id="sortButton">Sort</button>
            <p id="sortedResult"></p>
        `;

        const sortButton = document.getElementById('sortButton');
        const sortInput = document.getElementById('sortInput');
        const sortedResult = document.getElementById('sortedResult');

        sortButton.addEventListener('click', () => {
            const numbers = sortInput.value.split(',').map(num => parseInt(num.trim())).filter(num => !isNaN(num));
            numbers.sort((a, b) => a - b);
            sortedResult.textContent = `Sorted Numbers: ${numbers.join(', ')}`;
        });
    });

    // Simple Counter Game
    document.getElementById('game3').addEventListener('click', () => {
        mainContent.innerHTML = `
            <h2>Simple Counter</h2>
            <button id="decreaseButton">-</button>
            <span id="counterValue">0</span>
            <button id="increaseButton">+</button>
        `;

        let counter = 0;
        const counterValue = document.getElementById('counterValue');
        document.getElementById('increaseButton').addEventListener('click', () => {
            counter++;
            counterValue.textContent = counter;
        });
        document.getElementById('decreaseButton').addEventListener('click', () => {
            counter--;
            counterValue.textContent = counter;
        });
    });

    // Addendum
    document.getElementById('addendum').addEventListener('click', () => {
        mainContent.innerHTML = '<h2>Addendum</h2><p>check footer</p>';
    });
});
