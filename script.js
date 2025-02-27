// Sample users for random match simulation
const users = ["Player123", "GamerX", "ProPlayer99", "FastShooter", "Champion88"];

document.getElementById("randomMatchBtn").addEventListener("click", function () {
    const randomUser = users[Math.floor(Math.random() * users.length)];
    document.getElementById("matchResult").innerText = `You matched with: ${randomUser}`;
});

document.getElementById("codeMatchBtn").addEventListener("click", function () {
    const code = document.getElementById("matchCode").value;
    if (code.trim() === "") {
        document.getElementById("matchResult").innerText = "Please enter a valid code!";
    } else {
        document.getElementById("matchResult").innerText = `You matched using code: ${code}`;
    }
});
