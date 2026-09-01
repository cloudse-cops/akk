/* =========================================================
   MINI GET-TO-KNOW-YOU GAME
========================================================= */

const questions = [
    {
        question: "Coffee ☕ or Tea 🍵?",
        options: [
            ["Coffee ☕", "Okay... coffee person. Noted. Maybe I already know what to invite you for someday. 👀"],
            ["Tea 🍵", "Tea? Cute choice. Somehow that answer suits you. 😌"]
        ]
    },
    {
        question: "Sunrise 🌅 or Sunset 🌇?",
        options: [
            ["Sunrise 🌅", "So you're a sunrise person... unexpectedly wholesome. 🥹"],
            ["Sunset 🌇", "Sunset was my guess. Romantic taste detected. 👀❤️"]
        ]
    },
    {
        question: "Mountains 🏔️ or Beach 🌊?",
        options: [
            ["Mountains 🏔️", "Fresh air, quiet views... I can see the vision. ✨"],
            ["Beach 🌊", "Beach person. Fine... now I'm imagining sunset pictures. 😭"]
        ]
    },
    {
        question: "Late-night talks 🌙 or Random adventures ✨?",
        options: [
            ["Late-night talks 🌙", "Good answer. Those conversations hit differently. 👀"],
            ["Random adventures ✨", "Dangerous answer... that sounds way too fun. 😏"]
        ]
    },
    {
        question: "Someone says you're beautiful. What do you say? 😌",
        options: [
            ["Aww 🥹", "That reaction is somehow even cuter than the compliment. 😭❤️"],
            ["I already know 😌", "Confidence. I respect it. And honestly... you're not wrong. 😂"],
            ["Depends who says it 👀", "Interesting... very interesting answer. 👀"]
        ]
    }
];

const questionElement =
    document.getElementById("quiz-question");

const optionsElement =
    document.getElementById("quiz-options");

const responseElement =
    document.getElementById("quiz-response");

const progressText =
    document.getElementById("quiz-progress-text");

const progressBar =
    document.getElementById("quiz-progress-bar");

let currentQuestion = 0;

function renderQuizQuestion() {
    const question =
        questions[currentQuestion];

    questionElement.textContent =
        question.question;

    progressText.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    progressBar.style.width =
        `${((currentQuestion + 1) / questions.length) * 100}%`;

    optionsElement.innerHTML = "";
    responseElement.textContent = "";

    question.options.forEach(
        ([label, response]) => {
            const button =
                document.createElement("button");

            button.type = "button";
            button.className =
                "button button-soft";

            button.textContent = label;

            button.addEventListener(
                "click",
                () => {
                    responseElement.textContent =
                        response;

                    optionsElement
                        .querySelectorAll("button")
                        .forEach((item) => {
                            item.disabled = true;
                        });

                    window.setTimeout(() => {
                        if (
                            currentQuestion <
                            questions.length - 1
                        ) {
                            currentQuestion += 1;
                            renderQuizQuestion();
                        } else {
                            finishQuiz();
                        }
                    }, 1200);
                }
            );

            optionsElement.appendChild(button);
        }
    );
}

function finishQuiz() {
    questionElement.textContent =
        "Interesting... 👀";

    optionsElement.innerHTML = "";

    responseElement.textContent =
        "I think I just learned more about you in 30 seconds than I expected. ❤️";

    progressText.textContent =
        "Quiz complete";

    progressBar.style.width = "100%";
}

if (questionElement) {
    renderQuizQuestion();
}
