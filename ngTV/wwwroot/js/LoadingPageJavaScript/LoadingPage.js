function RedirectToNewPage() {

    window.location.href = "/SelectionPage/SelectionPage";

}


window.addEventListener("load", function () {

    this.setTimeout(RedirectToNewPage, 6000);

}

)








const InterestingPhrases = ["Reticulating Splines...", "Baking pixel cookies...", "Transmitting ones and zeros...", "Chasing unicorns in the cloud..."];
const NumberofItemsInArray = InterestingPhrases.length;


function GenerateRandomText() {
    const MaxNumber = NumberofItemsInArray;
    const RandomNunber = Math.floor(Math.random() * (MaxNumber - 1));
    const TheRandomText = document.getElementById("RandomTextGoesHere");
    TheRandomText.innerHTML = '';
    TheRandomText.style.color = "yellow";
    TheRandomText.innerHTML = InterestingPhrases[RandomNunber];
    setTimeout(GenerateRandomText, 1500);
}


window.addEventListener('load', function () {

    GenerateRandomText();

});

