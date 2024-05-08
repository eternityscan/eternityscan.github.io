function checkPasscode() {
  var passcodeInput = document.getElementById("passcode").value;
  var passcode = "4370";

  if (passcodeInput === passcode) {
    // If passcode is correct, display the web content
    document.querySelector('.passcode-form').style.display = 'none';
    document.querySelector('.web-content').style.display = 'block';
  } else {
    // If passcode is incorrect, show a warning message
    alert("Access denied! Your worthiness remains unseen. Incorrect passcode.");
  }
}
