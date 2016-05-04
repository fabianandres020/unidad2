/**
 * Created by Fabian on 02-05-2016.
 */

//Generar modulo

var app=angular.module('LoginFormModule',[]);

//controller
app.controller('LoginFormController',function($scope,$http){
    $scope.formModel={};


    //funcion que llama al submit
    $scope.onSubmit=function(){
      console.log("LLegue,!Primer submit con AngularJs");
        console.log($socpe.formModel);
        //llamadas Http
    };
})
