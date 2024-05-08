// Function to hash a string using SHA-256 algorithm
function sha256(input) {
  const crypto = require('crypto');
  return crypto.createHash('sha256').update(input).digest('hex');
}

function checkPasscode() {
  var passcodeInput = document.getElementById("passcode").value;
  var storedPasscodeHash = "fbfbab2ec07e82efc789c277b3dce1ee7e21b1102b6fe3c623b6e8fbcf5a3e2c"; // Hashed value of "4370"

  // Hash the user input
  var passcodeInputHash = sha256(passcodeInput);

  if (passcodeInputHash === storedPasscodeHash) {
    // If passcode is correct, display the web content
    document.querySelector('.passcode-form').style.display = 'none';
    document.querySelector('.web-content').style.display = 'block';
  } else {
    // If passcode is incorrect, show a warning message
    alert("Access denied! Your worthiness remains unseen. Incorrect passcode.");
  }
}
