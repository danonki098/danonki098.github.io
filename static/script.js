var logined = false;

var objPeople = [
    {
        email: "admin@wp.pl",
        password: "1234"
    },
    {
        email: "test@wp.pl",
        password: "test"
    }
]

function test() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value

    for(var i = 0; i < objPeople.length; i++){
        if(email == objPeople[i].email
            && password == objPeople[i].password) {
                alert("Zalogowano");
                console.log("Zalogowano");
                logined = true;
                location.href="/indexs/menu.html";
                return;
            } 
            
    }
    alert("Nieprawidłowe login lub hasło!");
    console.log("Nieprawidłowe login lub hasło!");
}

function register() {
    alert("Narazie nie dziala!")
}

function logout() {
    location.href="/indexs/login.html";
}

function toMenu() {
    location.href="/";
}