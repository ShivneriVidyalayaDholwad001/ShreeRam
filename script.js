async function generate() {

    const name = document.getElementById("name").value || "तुमचे नाव";
    const gender = document.getElementById("gender").value;

    const bg = await loadImage("https://i.ibb.co/8gZ7s7p/ram-bg.jpg");
    const logo = await loadImage("https://i.ibb.co/2kR8z7F/logo.png");
    const deco = await loadImage("https://i.ibb.co/Yd1Zp8X/mandir.png");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // background
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "rgba(0,0,0,0.4)";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    // logo
    ctx.drawImage(logo, 40, 40, 120, 120);

    // title
    ctx.fillStyle = "#fff";
    ctx.shadowBlur = 20;
    ctx.font = "bold 80px Arial";
    ctx.textAlign = "center";

    ctx.fillText("राम नवमी", 540, 150);
    ctx.fillText("हार्दिक शुभेच्छा!", 540, 230);

    // user image
    if (croppedImg) {
        const img = await loadImage(croppedImg);

        ctx.save();
        ctx.beginPath();
        ctx.arc(540, 750, 250, 0, Math.PI * 2);
        ctx.clip();

        ctx.drawImage(img, 290, 500, 500, 500);
        ctx.restore();

        ctx.strokeStyle = "#FFD700";
        ctx.lineWidth = 20;
        ctx.stroke();
    }

    // text
    ctx.font = "bold 70px Arial";
    ctx.fillText(name, 540, 1100);

    ctx.font = "45px Arial";
    ctx.fillText("मी माध्यमिक शाळेचा " + (gender==="मुलगा"?"विद्यार्थी":"विद्यार्थिनी"), 540, 1200);

    ctx.font = "40px Arial";
    ctx.fillText("Shivneri Vidyalaya Dholwad", 540, 1300);

    // decoration
    ctx.drawImage(deco, 0, 1400, 1080, 300);

    // footer
    let grad = ctx.createLinearGradient(0,1600,1080,1900);
    grad.addColorStop(0,"#ff9933");
    grad.addColorStop(1,"#800000");

    ctx.fillStyle = grad;
    ctx.fillRect(0,1600,1080,300);

    ctx.fillStyle = "#fff";
    ctx.font = "50px Arial";
    ctx.fillText("जय श्रीराम 🚩", 540, 1750);

    // ✅ IMPORTANT: mark ready
    window.imageReady = true;
}