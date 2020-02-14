const user = document.querySelector("#user");
const pass = document.querySelector("#pass");
const mail = document.querySelector("#mail");
const sub = document.querySelector("#sub");
if (sub) {
    sub.addEventListener("submit", e => {
        e.preventDefault();
        localStorage.setItem("username",user.value);
        localStorage.setItem("password",pass.value);
        localStorage.setItem("email",mail.value);
    });
}

const user_log = document.querySelector("#user_log");
const pass_log = document.querySelector("#pass_log");
const sub_log = document.querySelector("#sub_log");
if (sub_log) {
    sub_log.addEventListener("submit", el => {
        el.preventDefault();
        if (user_log.value.length) {
            if (user_log.value!=localStorage.getItem("username")) {
                alert("wrong username")
            };            
        };
        if (pass_log.value.length) {
            if (pass_log.value != localStorage.getItem("password")){
                alert("wrong password")
            };    
        };
    });
}
