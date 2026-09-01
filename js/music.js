/* =========================================================
   ROMANTIC MUSIC PLAYER
   Put your own MP3 at:
   assets/music/our-song.mp3
========================================================= */

const audio =
    document.getElementById("romantic-audio");

const musicButton =
    document.getElementById("music-button");

const vinyl =
    document.getElementById("vinyl");

if (audio && musicButton && vinyl) {
    musicButton.addEventListener(
        "click",
        async () => {
            if (audio.paused) {
                try {
                    await audio.play();

                    vinyl.classList.add("playing");

                    musicButton.textContent =
                        "⏸ Pause the song";
                } catch (error) {
                    alert(
                        "Add your MP3 as assets/music/our-song.mp3 first."
                    );
                }
            } else {
                audio.pause();

                vinyl.classList.remove(
                    "playing"
                );

                musicButton.textContent =
                    "▶ Play the song";
            }
        }
    );

    audio.addEventListener(
        "ended",
        () => {
            vinyl.classList.remove(
                "playing"
            );

            musicButton.textContent =
                "▶ Play the song";
        }
    );
}
