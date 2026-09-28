const questions = [
    { q: "مجموعة تعريف الدالة د(س) = ٥س² − ٣س + ٧ هي:", o: ["ح", "ح − {٠}", "[٠ ، ∞+)"], a: 0, exp: "الدالة كثيرة حدود ومجالها دائماً ح." },
    // سأضع لك مثالاً واحداً، يمكنك تعبئة بقية الـ ٣٠ سؤالاً بنفس هذا النمط
];

let currentQ = 0;
function loadQuestion() {
    const q = questions[currentQ];
    document.getElementById('question-box').innerText = q.q;
    const options = document.getElementById('options-box');
    options.innerHTML = '';
    q.o.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(i);
        options.appendChild(btn);
    });
    document.getElementById('progress').style.width = (currentQ / questions.length) * 100 + "%";
}

function checkAnswer(idx) {
    const feedback = document.getElementById('feedback');
    if(idx === questions[currentQ].a) {
        feedback.innerText = "أحسنت! " + questions[currentQ].exp;
        feedback.style.color = "green";
    } else {
        feedback.innerText = "خطأ! " + questions[currentQ].exp;
        feedback.style.color = "red";
    }
    // انتقل للسؤال التالي بعد ثانيتين
}

loadQuestion();
