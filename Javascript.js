function checkAnswer(ans) {
  if(ans === 15) {
    document.getElementById("result").innerHTML = "🎉 إجابة صحيحة!";
  } else {
    document.getElementById("result").innerHTML = "❌ حاول مرة أخرى.";
  }
}