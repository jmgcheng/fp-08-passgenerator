/**
 * Generates a random password and displays it above the button.
 */
function generatePassword() {
    var passwordLength = parseInt(document.getElementById("passwordLength").value);
    if (isNaN(passwordLength) || passwordLength <= 0) {
        alert("Please enter a valid password length.");
        return;
    }
    var password = generateRandomPassword(passwordLength);
    document.getElementById("password").innerHTML = password;
}
/**
 * Generates a random password.
 * @param {number} length - The length of the password.
 * @returns {string} The generated password.
 */
function generateRandomPassword(length) {
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    var password = "";
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
    }
    return password;
}