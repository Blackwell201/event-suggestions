const webhookURL = "WEBHOOK_URL"; // ضع رابط الويب هوك هنا

const langBtn = document.getElementById("langBtn");
let lang = "ar";

langBtn.addEventListener("click", () => {
    if(lang === "ar") {
        document.querySelector("h2").innerText = "🔥 Event Suggestions 🔥";
        document.getElementById("server").placeholder = "Server Name";
        document.getElementById("name").placeholder = "Your Name";
        document.getElementById("idea").placeholder = "Write your idea here...";
        document.getElementById("form").querySelector("button[type='submit']").innerText = "Send 🚀";
        document.getElementById("successMsg").innerText = "Your suggestion has been sent successfully 🔥";
        langBtn.innerText = "عربي";
        lang = "en";
    } else {
        document.querySelector("h2").innerText = "🔥 اقتراح فعاليات 🔥";
        document.getElementById("server").placeholder = "اسم السيرفر";
        document.getElementById("name").placeholder = "اسمك";
        document.getElementById("idea").placeholder = "اكتب اقتراحك هنا...";
        document.getElementById("form").querySelector("button[type='submit']").innerText = "إرسال 🚀";
        document.getElementById("successMsg").innerText = "تم إرسال اقتراحك بنجاح 🔥";
        langBtn.innerText = "English";
        lang = "ar";
    }
});

document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    const server = document.getElementById("server").value.trim();
    const name = document.getElementById("name").value.trim();
    const idea = document.getElementById("idea").value.trim();

    fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            content: `🔥 اقتراح جديد 🔥\n\n🏷️ السيرفر: ${server}\n👤 الاسم: ${name}\n💡 الفكرة:\n${idea}`
        })
    }).then(() => {
        const msg = document.getElementById("successMsg");
        msg.style.display = "block";
        setTimeout(() => { msg.style.display = "none"; }, 4000);
        document.getElementById("form").reset();
    });
});
