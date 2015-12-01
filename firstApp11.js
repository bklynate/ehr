           
var allurl = "http://localhost:8000/all";
var qburl = "http://localhost:8000/qb";
var wrurl = "http://localhost:8000/wr";
var rburl = "http://localhost:8000/rb";
var teurl = "http://localhost:8000/te";
var kurl = "http://localhost:8000/k";
                                                                                                       
angular.module('firstApp', [])
.constant('_', $window._)
                                                                                                       
.controller('mainController', [ '$scope', '$http', function($scope, $http) {                           
    // bind this to vm (view-model)                                                                    
    // define variables and objects on this                                                            
    // this lets them be available to our views                                                        
    // define a list of items                                                                          
  $scope.response = [];                                                                                                      
  $scope.all = function(){                                                                         
                                     
        $http.get(allurl).success(function(data, status){ 
           console.log(status, data);       
           $scope.response = data; 
       }); 
        
  };       
     
  $scope.qb = function(){                                                                         
        $http.get(qburl).success(function(data, status){ 
           console.log(status);       
           $scope.response = data; 
       }); 
        
  };    
  $scope.wr = function(){                                                                         
                                    
        $http.get(wrurl).success(function(data, status){ 
           console.log(status);       
           $scope.response = data; 
  });
  }; 
  
  $scope.rb = function(){                                                                         
        $http.get(rburl).success(function(data, response){ 
           console.log(response);       
           $scope.response = data; 
       }); 
  }; 
           
$scope.te = function(){                                                                         
        $http.get(teurl).success(function(err, response){ 
           console.log(response);       
           $scope.response = err; 
       }); 
        
  };            
           
$scope.k = function(){                                                                         
                                    
        $http.get(kurl).success(function(err, response){ 
           console.log(response);       
           $scope.response = err; 
       }); 
        
  };    
  
  $scope.filterAll = function(){
           var temp = JSON.parse(JSON.stringify($scope.response));
           temp = _.sortBy(temp, function(o) { return (-1)*o.stat6; })
           temp = [temp[0],temp[1],temp[2],temp[-3],temp[-2],temp[-1] ];
           $scope.response = temp;
  }
                                                                                                       
}]); 
