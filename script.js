
document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");
    const enigmes = window.enigmesData;
    let completedCount = 0;

    enigmes.forEach((enigme, index) => {
        const div = document.createElement("div");
        div.className = "enigme";
        const question = document.createElement("p");
        question.innerText = enigme.question;
        div.appendChild(question);

        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Votre réponse ici";

        const btn = document.createElement("button");
        btn.innerText = "Valider";

        const result = document.createElement("p");

        btn.addEventListener("click", () => {
            const response = input.value.trim().toLowerCase();
            const correct = enigme.reponses.map(r => r.toLowerCase());
            if (correct.includes(response)) {
                div.classList.add("solved");
                input.disabled = true;
                btn.disabled = true;
                result.innerText = enigme.success;
                completedCount++;
                if (completedCount === enigmes.length) {
                    const finalText = document.createElement("div");
                    finalText.innerHTML = `<h2>🎉 Toutes les énigmes sont résolues !</h2><p>${enigmesData.finalText}</p>`;
                    app.appendChild(finalText);
                }
            } else {
                input.classList.add("incorrect");
                result.innerText = "Ce n'est pas la bonne réponse.";
            }
        });

        div.appendChild(input);
        div.appendChild(btn);
        div.appendChild(result);
        app.appendChild(div);
    });
});
