/**
 * Created by kinamartinez on 9/7/17.
 */
app.controller('quizCtrl', ['quizFactory', 'dataService', function (quizFactory, dataService) {

    const vm = this;
    vm.quizFactoryObj = quizFactory.quizObj;
    vm.dataServiceObj = dataService;
    vm.activeQuestion = 0;
    vm.questionAnswered = questionAnswered;
    vm.setActiveQuestion = setActiveQuestion;
    vm.finishAnswers  = finishAnswers;
    vm.selectedAnswer = selectedAnswer;
    vm.error = false;
    vm.finish = false;
    let numQuestionAnswered = 0;

    console.log(vm.dataServiceObj.quizQuestions.length);

    function setActiveQuestion(index) {
        if (index === undefined) {
            const quizLength = dataService.quizQuestions.length - 1;
            let breakOut = false;
            while (!breakOut) {
                // esta siguiente linea es para darle el value a activequestion, que si active question es menor que el tamano del array quizQuestion con el activquestion -1
                // para que nos de la posicion 0 hasta la ultima y no tome un valor posterior, y si es asi entonces lo incremente, pero si no es asi, si es la ultima pregunta
                // entonces nos devuelva a la posicion 0
                vm.activeQuestion = vm.activeQuestion < quizLength ? ++vm.activeQuestion : 0;
                if (vm.activeQuestion === 0) {
                    vm.error = true;
                }
                if (dataService.quizQuestions[vm.activeQuestion].selected === null) {
                    breakOut = true;
                }
            }
        } else {
            vm.activeQuestion = index;
        }
    }

    function questionAnswered() {
        const quizLength = vm.dataServiceObj.quizQuestions.length;
        if (dataService.quizQuestions[vm.questionAnswered] !== null) {
            numQuestionAnswered++;
            if (numQuestionAnswered >= quizLength) {
                //Se finaliza el quiz
                for (let i = 0; i < quizLength; i++) {
                    if (dataService.quizQuestions[i].selected === null) {
                        setActiveQuestion(i);
                        return;
                    }
                }
                vm.error = false;
                vm.finish = true;
                return;
            }
        }
        setActiveQuestion();
    }

    function selectedAnswer(index) {
        vm.dataServiceObj.quizQuestions[vm.activeQuestion].selected = index;

    }
    function finishAnswers() {

       numQuestionAnswered = 0;
       vm.finish = false;
       vm.activeQuestion = 0;
       vm.quizFactoryObj.markQuiz();
       vm.quizFactoryObj.changeState('quiz', false);
       vm.quizFactoryObj.changeState('results', true);



    }


}]);