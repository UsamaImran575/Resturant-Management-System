function Checks()
{
    var x = document.myform.email.value;
    var atposition = x.indexOf("@");
    var dotposition = x.lastIndexOf(".");
    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {
        alert("Please enter a valid e-mail address");
        return false;
    }

    var pass = document.myform.psw.value;

    if (pass.length <= 8) {
        alert("Password too short");
        return false;
    }

    var password = document.getElementById("psw").value;
    var confirmPassword = document.getElementById("pswrep").value;
    if (password != confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    return true;
}
