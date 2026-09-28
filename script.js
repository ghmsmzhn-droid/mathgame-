const questions = [
    { q: "مجموعة تعريف الدالة د(س) = ٥س² − ٣س + ٧ هي:", o: ["ح", "ح − {٠}", "[٠ ، ∞+)"], a: 0 },
    { q: "مجموعة تعريف الدالة د(س) = (س + ٤) / (س² − ٩) هي:", o: ["ح − {٣}", "ح − {-٣}", "ح − {٣ ، -٣}"], a: 2 }
];

const qBox = document.getElementById("question-box");
const oBox = document.getElementById("options-box");

function loadQuestion(index) {
    const q = questions[index];
    qBox.innerText = q.q;
    oBox.innerHTML = "";
    q.o.forEach((opt, i) => {
        let btn = document.createElement("button");
        btn.innerText = opt;
        btn.onclick = () => alert(i === q.a ? "صحيح!" : "خطأ");
        oBox.appendChild(btn);
    });
}

loadQuestion(0);
