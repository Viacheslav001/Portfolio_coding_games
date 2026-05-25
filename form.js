document.addEventListener("DOMContentLoaded", function () {
    emailjs.init({
      publicKey: "QgputJIHWCc4dcH_B",
    });

    const form = document.getElementById("emailForm");
    const submitBtn = document.getElementById("submitBtn");
    const statusMessage = document.getElementById("statusMessage");

    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        
        submitBtn.textContent = "Відправка...";
        submitBtn.disabled = true;
        emailjs.sendForm('service_9fvqfbj', 'template_qsmqubb', form)
            .then(() => {
                statusMessage.textContent = "Дякую! Повідомлення успішно надіслано.";
                statusMessage.style.color = "#00ff00";
                form.reset();
            }, (error) => {
                statusMessage.textContent = "Ой! Сталася помилка при відправці.";
                statusMessage.style.color = "#ff0000";
                console.log('FAILED...', error);
            })
            .finally(() => {
                submitBtn.textContent = "Надіслати";
                submitBtn.disabled = false;
            });
    });
});