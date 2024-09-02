var a = document.querySelectorAll(".drum");
for (i = 0; i < a.length; i++) {
    a[i].addEventListener("click", function () {
        check(this.innerHTML);
        animation(this.innerHTML);
    });
    document.addEventListener("keydown", function (event) {
        animation(event.key);
        check(event.key);

    });

}

function check(bt) {

    switch (bt) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;

        case "k":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;

        case "l":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;

        default:
            console.log(this);
            break;
    }

}

function animation(currKey) {
    var button = document.querySelector("." + currKey);
    button.classList.add("pressed");
    setTimeout(
        function remove() {
            button.classList.remove("pressed");
        },
        300
    )
}
