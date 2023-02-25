let button = document.getElementById("cal test");
function Start() {
    let l = document.getElementById("Login").value;
    let h = document.getElementById("Haslo").value;

    if (l == "admin") //"admin"
    {
        if (h == "1234") //"1234"
        {
            alert("Zalogowano");
        } else {
            alert("Błąd w logowaniu sprawdz dane jeszcze raz!");
        }

    } else {
        alert("Błąd w logowaniu sprawdz dane jeszcze raz!");
    }
}

function Register() {
    alert("Ta opcja jest obecnie wyłączona!");
}

function EnterIcon() {
    alert("WWW.THE-GLADE.NET")
}