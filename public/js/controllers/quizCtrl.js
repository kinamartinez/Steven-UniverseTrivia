/**
 * Created by kinamartinez on 9/7/17.
 */
app.controller('quizCtrl', ['quizFactory','dataService',function (quizFactory, dataService) {

    const vm = this;
    vm.quizFactoryObj = quizFactory.quizObj;
    vm.dataServiceObj = dataService;




}]);