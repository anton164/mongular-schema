angular.module('myApp', ['mongular-schema'])
  .controller('UserCtrl', ['UserSchema', 'MongularSchemaForm',
    function(UserSchema, MongularSchemaForm) {
      // Here we can either directly access
      // the schema definition in example.js (UserSchema)
      UserSchema.name;
      UserSchema.role.enum;
      // or perhaps use a MongularSchema converter
      // for converting to some other Schema (e.g. a compatible 
      // format with the angular-schema-form library)
      MongularSchemaForm.convert(UserSchema);
      // or if UserSchema isn't injected
      MongularSchemaForm.convert('UserSchema');
    }
  ]);