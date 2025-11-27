const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter countdown time in seconds: ", (input) => {
  let timeLeft = parseInt(input);

  if (isNaN(timeLeft) || timeLeft <= 0) {
    console.log("Please enter a valid positive number.");
    rl.close();
    return;
  }

  console.log(`Countdown started for ${timeLeft} seconds...`);
  console.log("Press 's' anytime to stop the countdown.\n");

  const timer = setInterval(() => {
    console.log("Time left:", timeLeft, "seconds");
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(timer);
      console.log("Countdown Complete!");
      rl.close();
    }
  }, 1000);

  const checkStop = () => {
    rl.input.once("data", (key) => {
      const pressed = key.toString().trim().toLowerCase();

      if (pressed === "s") {
        console.log("Countdown stopped by user.");
        clearInterval(timer);
        rl.close();
      } else {
        setTimeout(checkStop, 200);
      }
    });
  };

  setTimeout(checkStop, 200);
});
