/* Created by kinamartinez on 8/16/17.
 */


app.factory('quizFactory', ['dataService', function (dataService) {

    const quizObj = {
        quizActive: false,
        resultsActive: false,
        changeState: changeState,
        correctAnswers: [],
        markQuiz: markQuiz,
        numCorrectAnswers: 0

    };

    function changeState(metric, state) {
        if (metric === 'quiz') {
            quizObj.quizActive = state;
        } else if (metric === 'results') {
            quizObj.resultsActive = state;
        } else {
            return false;
        }
    }

    function markQuiz() {
        quizObj.correctAnswers = dataService.correctAnswers;
        console.log(quizObj.correctAnswers);
        for (let i = 0; i < dataService.quizQuestions.length; i++) {
            if (dataService.quizQuestions[i].selected === dataService.correctAnswers[i]) {
                dataService.quizQuestions[i].correct = true;
                quizObj.numCorrectAnswers++;
            } else {
                dataService.quizQuestions[i].correct = false;

            }
        }
    }

    return {
        quizObj,
    };


}]);
