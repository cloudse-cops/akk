/* =========================================================
   PLAYFUL YES / NO QUESTION
   The repeated NO responses are playful, but a genuine
   decline option remains available.
========================================================= */

const yesButton =
    document.getElementById("yes-button");

const noButton =
    document.getElementById("no-button");

const declineButton =
    document.getElementById("decline-button");

const title =
    document.getElementById("question-title");

const subtitle =
    document.getElementById("question-subtext");

const noMessage =
    document.getElementById("no-message");

const noResponses =
    window.CRUSH_CONTENT.noMessages;

let noCount = 0;

function showYes() {
    title.textContent =
        "Okay... you made me smile. 🥹❤️";

    subtitle.textContent =
        "You're beautiful, you're cute, and I'd really like to know you better. Maybe we start with a conversation? 👀";

    noMessage.textContent = "";

    yesButton.hidden = true;
    noButton.hidden = true;
    declineButton.hidden = true;

    window.createHeartBurst?.(55);
}

function showDecline() {
    title.textContent =
        "Okay ❤️";

    subtitle.textContent =
        "No worries. I respect your answer. I still hope this little website made you smile. 🌷";

    noMessage.textContent = "";

    yesButton.hidden = true;
    noButton.hidden = true;
    declineButton.hidden = true;
}

if (yesButton) {
    yesButton.addEventListener(
        "click",
        showYes
    );
}

if (noButton) {
    noButton.addEventListener(
        "click",
        () => {
            const response =
                noResponses[
                    Math.min(
                        noCount,
                        noResponses.length - 1
                    )
                ];

            title.textContent =
                response.title;

            noMessage.textContent =
                response.message;

            noCount += 1;

            if (
                noCount >=
                noResponses.length
            ) {
                noButton.hidden = true;
                yesButton.textContent =
                    "Maybe another time ❤️";

                yesButton.removeEventListener(
                    "click",
                    showYes
                );

                yesButton.addEventListener(
                    "click",
                    showDecline
                );
            }
        }
    );
}

if (declineButton) {
    declineButton.addEventListener(
        "click",
        showDecline
    );
}
