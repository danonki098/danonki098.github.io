var logined = false;

var objPeople = [
    {
        username: "admin",
        password: "1234"
    },
    {
        username: "test",
        password: "test"
    }
]

function test() {
    var username = document.getElementById("login").value;
    var password = document.getElementById("password").value

    for(var i = 0; i < objPeople.length; i++){
        if(username == objPeople[i].username
            && password == objPeople[i].password) {
                alert("Zalogowano");
                console.log("Zalogowano");
                logined = true;
                location.href="https://danonki098.github.io/indexs/menu.html";
                return;
            } 
            
    }
    alert("Nieprawidłowe login lub hasło!");
    console.log("Nieprawidłowe login lub hasło!");
}

function register() {
    alert("Narazie nie dziala!")
}

function menu() {
    location.href="https://danonki098.github.io/";
}