angular.module('mongular-schema', []).factory('MongularSchema', ['$injector',
  function($injector) {
    return {
      convert: function(sharedSchema)  {
        return this.get(sharedSchema);
      },
      get: function(sharedSchema) {
        return $injector.get(sharedSchema);
      }
    };
  }
]);