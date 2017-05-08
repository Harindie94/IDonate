angular.module('app.services', [])

.factory('BlankFactory', [function(){


}])

.service('BlankService', [function(){

}])
.service('productService', [function() {
  var productList = [];

  var addProduct = function(newObj) {
      productList.push(newObj);
  };

  var getProducts = function(){
      return productList;
  };

  return {
    addProduct: addProduct,
    getProducts: getProducts
  };

}]);