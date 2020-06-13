var Question(que,ans,correct){
    this.que = que
    this.ans = ans
    this.correct = correct
}

Question.prototype.displayQuestion = function(){
    console.log(this.que)
    for (var i = 0; i<=this.ans.length; i++){
        console.log(i + ':' + this.answer[i])
    }
}