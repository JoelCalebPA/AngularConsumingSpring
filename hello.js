angular.module('myApp', []).controller('ctrl', function ($scope, $http) {

    var URI_MARCAS = 'http://localhost:9090/api/marca/';
    var URI_PRODUCTOS = 'http://localhost:9090/api/productos/';

    $http.get(URI_MARCAS)
        .then(function (response) {
            $scope.marcas = response.data;
        });

    $http.get(URI_PRODUCTOS)
        .then(function (response) {
            $scope.productos = response.data;
        });

    $scope.productosMarca = function (marca) {
        $http.get(URI_PRODUCTOS.concat(marca))
            .then(function (response) {
                $scope.productosPorMarca = response.data;
            })
    };
});