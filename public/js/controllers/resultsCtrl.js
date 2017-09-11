/**
 * Created by kinamartinez on 9/11/17.
 */
app.controller('resultsCtrl', ['quizFactory', 'dataService', function (quizFactory, dataService) {
    const vm = this;
    vm.quizFactoryObj = quizFactory.quizObj;
    vm.dataServiceObj = dataService;
    vm.activeQuestion = 0;
    vm.getClassBackground = getClassBackground;
    vm.setActiveQuestion = setActiveQuestion;
    vm.calculatePorcentage = calculatePorcentage;
    vm.reset = reset;

    function calculatePorcentage() {
        return vm.quizFactoryObj.numCorrectAnswers / dataService.quizQuestions.length * 100;
    }

    function setActiveQuestion(index) {
        vm.activeQuestion = index;
    }

    function getClassBackground(index) {
        if (index === vm.quizFactoryObj.correctAnswers[vm.activeQuestion]) {
            return 'bg-success';
        } else if (index === vm.dataServiceObj.quizQuestions[vm.activeQuestion].selected) {
            return 'bg-danger';
        }
    }

    function reset() {
        vm.quizFactoryObj.changeState('results', false);
        vm.quizFactoryObj.numCorrectAnswers = 0;

        for(let i=0; i<dataService.quizQuestions.length; i++){
            const data = vm.dataServiceObj.quizQuestions[i];
            data.selected = null;
            data.correct = null;
        }
    }
}]);