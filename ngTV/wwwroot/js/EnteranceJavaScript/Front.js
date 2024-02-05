
console.log("x!");

document.getElementById("ThisIsTheLogoHere").addEventListener('click', function () {

    this.classList.add('BeenClicked');

})


function TheLinkToTheLoadingPage() {
    window.location.href = '/LoadingPage/LoadingPage';

}


function RedirectUserToLoadingPage() {

    setTimeout(TheLinkToTheLoadingPage, 1100);

}