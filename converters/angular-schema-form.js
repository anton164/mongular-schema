angular.module('mongular-schema', []).factory('MongularSchemaForm', ['MongularSchema',
  function(MongularSchema) {
    return {
      convert: function(sharedSchema)  {
        var schemaForm = this.get(sharedSchema);
        return schemaForm;
      },
    };
  }
]);