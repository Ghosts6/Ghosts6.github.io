document.addEventListener("DOMContentLoaded", function () {
    const imgElement = document.getElementById("meme-image");

    function generateMemeUrls(count) {
        const memes = [];
        for (let i = 1; i <= count; i++) {
            memes.push(`static/img/meme/meme${i}.jpg`);
        }
        return memes;
    }

    const memeCount = 10; 
    const memes = generateMemeUrls(memeCount);

    const fallbackImageUrl = "static/img/500.jpg";

    function getRandomMeme() {
        const randomIndex = Math.floor(Math.random() * memes.length);
        return memes[randomIndex];
    }

    function displayRandomMeme() {
        const randomMemeUrl = getRandomMeme();

        const tempImg = new Image();
        tempImg.src = randomMemeUrl;

        tempImg.onload = function() {
            imgElement.src = randomMemeUrl;
        };

        tempImg.onerror = function() {
            imgElement.src = fallbackImageUrl;
        };

        imgElement.style.height = "400px";
        imgElement.style.display = "block";
        imgElement.style.margin = "0 auto";
        imgElement.alt = "Random Dev Meme";
    }

    displayRandomMeme();
    
});
