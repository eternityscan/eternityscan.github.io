
function sha256(input) {
  const crypto = require('crypto');
  return crypto.createHash('sha256').update(input).digest('hex');
}

function checkPasscode() {
  var passcodeInput = document.getElementById("passcode").value;
  var storedPasscodeHash = "f75443d49e2b124e49d0cb6f12d38e2b41de5ad1d6929a28a6c56d03e07ad2c0"; 


  var passcodeInputHash = sha256(passcodeInput);

  if (passcodeInputHash === storedPasscodeHash) {
    // If passcode is correct, display the web content
    document.querySelector('.passcode-form').style.display = 'none';
    document.querySelector('.web-content').style.display = 'block';
  } else {

    alert("Access denied! Your worthiness remains unseen. Incorrect passcode.");
  }
}
