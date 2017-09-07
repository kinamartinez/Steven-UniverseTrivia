/* Created by kinamartinez on 8/16/17.
 */

app.controller('listCtrl', ['quizFactory', 'dataService', function (quizFactory, dataService) {

    const vm = this;
    vm.quizFactoryObj = quizFactory.quizObj;
    vm.gemsData = dataService.gemsData;
    vm.activeCharacter = {};
    vm.changeActiveCharacter = changeActiveCharacter;
    vm.searchText = '';
    vm.searchTextChange = searchTheCharacters;
    vm.filteredCharacters = [];
    vm.pageData = [];
    vm.currentPage = 1;
    vm.itemsPerPage = 4;
    vm.searchTextChange = searchTheCharacters;
    vm.onPageChange = updateThePage;
    vm.maxSize = 5;
    vm.quizActivate = quizActivate;




    function quizActivate() {
        console.log('antes', vm.quizFactoryObj.quizActive);
        vm.quizFactoryObj.changeState(true);
        console.log('dsps', vm.quizFactoryObj.quizActive);
        console.log('soy el quiz activate');

    }

    function changeActiveCharacter(index) {
        vm.activeCharacter = index;
    }

    function searchTheCharacters(newSearch) {
        vm.searchText = newSearch;
        filterCharacters();

    }

    function updateThePage(currentPage) {
        vm.currentPage = currentPage;
        updatePageData();
    }


    function updatePageData() {
        vm.pageData = vm.filteredCharacters.slice(
            (vm.currentPage - 1) * vm.itemsPerPage,
            vm.currentPage * vm.itemsPerPage
        );
    }


    function filterCharacters() {
        let newFilteredCharacters = [];
        if (vm.searchText || vm.searchText.trim() === '') {
            newFilteredCharacters = dataService.gemsData;
        } else {
            for (let i = 0; i < vm.gemsData.length; i++) {
                character = vm.gemsData[i];
                if (character.name.includes(vm.searchText.charAt(0).toUpperCase() + vm.searchText.slice(1).toLowerCase())) {
                    newFilteredCharacters.push(character);
                }

            }
        }
        console.log(newFilteredCharacters);
        vm.filteredCharacters = newFilteredCharacters;
        vm.currentPage = 1;
        vm.totalItems = vm.filteredCharacters.length;
        updatePageData();
    }

    filterCharacters();
}]);
