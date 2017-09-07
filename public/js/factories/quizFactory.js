/* Created by kinamartinez on 8/16/17.
 */


app.factory('quizFactory', [function () {

    const quizObj = {
        quizActive: false,
        changeState: changeState
    };

    function changeState(state) {
        quizObj.quizActive = state;
    }

    return {
        quizObj,
    };


}]);
