// function generateCaptcha(length = 6) {
//     const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
//     let captcha = '';
//     for (let i = 0; i < length; i++) {
//       captcha += letters.charAt(Math.floor(Math.random() * letters.length));
//     }
//     return captcha;
//   }
  
//   // Example usage
//   const captcha = generateCaptcha();
//   console.log(captcha); 


function generateCaptcha() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
        captcha += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    return captcha;
}

const display = document.getElementById("captcha-value").getElementsByTagName("h2")[0];
let captchaGenerated = display.innerText = generateCaptcha();

const inputArea = document.getElementById("input");
const verify = document.getElementById("button");
const msgArea = document.getElementById("msg");

verify.addEventListener("click", ()=> {
    console.log(inputArea.value);

    if (inputArea.value === captchaGenerated) {
        msgArea.innerHTML = "<h2>Verified</h2>";
        msgArea.classList.add("success");
    } else {
        msgArea.innerHTML = "<h2>Invalid Captcha</h2>";
        msgArea.classList.add("fail");
    }

    setTimeout(() => {
        msgArea.innerHTML = "";
        msgArea.classList.remove("success", "fail");
        captchaGenerated = display.innerText = generateCaptcha();
        inputArea.value = '';
    }, 2000);
    // setTimeout(() => {
    //     location.reload();  // Reload the entire page
    // }, 2000);
});
