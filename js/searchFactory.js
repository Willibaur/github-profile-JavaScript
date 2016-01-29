githubUserSearch.factory('Search', ['$http', function($http) {
  var queryUrl = 'https://api.github.com/search/users';
  return {
    query: function(searchTerm) {
      return $http({
        url: queryUrl,
        method: 'GET',
        params: {
          'access_token': "28761a306360a53f86ef7bdbd0b07cd2f7490d48",
          'q': searchTerm
        }
      });
    }
  };
}]);
