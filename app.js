var app = angular.module('noteApp', []);

app.controller('mainCtrl', ['$scope', '$log', function($scope, l) {

    $scope.note = "";
    $scope.notes = [];

    // Add home url and the url of the file where yopu can get the notes from

    $scope.toggleAddNote = function() {
        $scope.addNote = true;
        l($scope.addNote);
    };

    $scope.AddNote = function() {
        $scope.notes.push($scope.note);
        console.log($scope.notes);
        $scope.note = "";
    };

    $scope.deleteNote = function(index){
    	console.log(index);
    	$scope.notes.splice(index,1);
    }

    var homeUrl = '';

    $scope.getAllNotes=function(){
        $http({
              method: 'GET',
              url: homeUrl+'',
            }).then(function successCallback(response) {
            if (response.status == 200){
                resolve(response.data);
            } else {
                reject(response.statusText);
            }
        });
    };
    // Resolving the promise function and assigning the data to $scope.calConfig.
    $scope.allNotes = $scope.getAllNotes();
    $scope.allNotes.then(
        function (allNotes){
            $scope.notes = allNotes;
        },
        function (error){
            console.log(error);
        }
    );

    // POST
    $http({
          method: 'POST',
          url: homeUrl + '',
          data: notes,
          headers: {'Content-Type': 'notes'}
        }).then(function successCallback(response) {
        if (response.status == 200){
            resolve(response.data);
        } else {
            reject(response.statusText);
        }




}])
