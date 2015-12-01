           
var allurl = "http://localhost:8000/all";
var qburl = "http://localhost:8000/qb";
var wrurl = "http://localhost:8000/wr";
var rburl = "http://localhost:8000/rb";
var teurl = "http://localhost:8000/te";
var kurl = "http://localhost:8000/k";
                                                                                                       
angular.module('firstApp', [])                                                                         
                                                                                                       
.controller('mainController', [ '$scope', '$http', function($scope, $http) {                           
    // bind this to vm (view-model)                                                                    
    // define variables and objects on this                                                            
    // this lets them be available to our views                                                        
    // define a list of items                                                                          
                                                                                                      
  $scope.all = function(){                                                                         
           console.log(here);                           
        $http.get(url).success(function(err, response){ 
           console.log(here);       
           $scope.response = response; 
       }); 
        
  };       
     
  $scope.qb = function(){                                                                         
           console.log(here);                           
        $http.get(qburl).success(function(err, response){ 
           console.log(here);       
           $scope.response = response; 
       }); 
        
  };    
  $scope.wr = function(){                                                                         
           console.log(here);                           
        $http.get(wrurl).success(function(err, response){ 
           console.log(here);       
           $scope.response = response; 
  });
  }; 
  
  $scope.rb = function(){                                                                         
           console.log(here);                           
        $http.get(rburl).success(function(err, response){ 
           console.log(here);       
           $scope.response = response; 
       }); 
  }; 
           
$scope.te = function(){                                                                         
           console.log(here);                           
        $http.get(teurl).success(function(err, response){ 
           console.log(here);       
           $scope.response = response; 
       }); 
        
  };            
           
$scope.k = function(){                                                                         
           console.log(here);                           
        $http.get(kurl).success(function(err, response){ 
           console.log(here);       
           $scope.response = response; 
       }); 
        
  };            
                                                                                                       
}]); 
