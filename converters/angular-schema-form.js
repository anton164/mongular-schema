angular.module('mongular-schema').factory('MongularSchemaForm', ['MongularSchema',
  function(MongularSchema) {
    return angular.extend(MongularSchema, {
      convert: function(sharedSchema)  {
        var schemaForm = this.get(sharedSchema);
        return schemaForm;
      }
    });
  }
]);