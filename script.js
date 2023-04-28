const zodiac = document.getElementById("zodiac");
const body = document.body;

const changeBackground = () =>{
    switch (zodiac.value) {
        case "aries":
            body.style.backgroundColor = "blue";
        break;
        case "tarus":
            body.style.backgroundColor = "green";
        break;
        case "gemini":
            body.style.backgroundColor = "red";
        break;
        case "cancer":
            body.style.backgroundColor = "black";
        break;
        case "leo":
            body.style.backgroundColor = "yellow";
        break;
        case "vigro":
            body.style.backgroundColor = "grey";
        break;
        case "libra":
            body.style.backgroundColor = "violet";
        break;
        case "scorpio":
            body.style.backgroundColor = "pink";
        break;
        case "sagittarius":
            body.style.backgroundColor = "white";
        break;
        case "aquarius":
            body.style.backgroundColor = "brown";
        break;
        case "capricorn":
            body.style.backgroundColor = "cyan";
        break;
        case "pisces":
            body.style.backgroundColor = "orange";
        break;

        default:
            break;
    }
};