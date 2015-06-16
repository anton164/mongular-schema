var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  _ = require('lodash'),
  appRoot = require('app-root-path');

var MongularSchema = {
  prepare: function(sharedSchema) {
    return _.transform(sharedSchema, function(result, field, key) {
      if (_.isPlainObject(field)) {
        if (typeof field.type === 'string') {
          field.type = Schema[field.type];
        }
        // Convert possible enum with labels
        if (_.isPlainObject(field.enum)) {
          field.enum = _.keys(field.enum);
        }
      }
      result[key] = field;
    });
  },
  convert: function(sharedSchema) {
    return new Schema(this.prepare(sharedSchema));
  },
  merge: function(sharedSchema, mongooseSchema)  {
    var sharedSchema = (typeof sharedSchema === 'string' ?
      this.get(sharedSchema) : sharedSchema);
    return new Schema(_.merge(this.prepare(sharedSchema), mongooseSchema));
  },
  get: function(sharedSchema) {
    var filename = /.js$/.test(sharedSchema) ? sharedSchema : sharedSchema + ".js";
    return require(appRoot + sharedSchema);
  }
};

module.exports = MongularSchema;