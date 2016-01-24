(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;

/* Package-scope variables */
var _, lodash;

(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/stevezhu_lodash/server.js                                //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
_ = lodash = Npm.require('lodash');                                  // 1
                                                                     // 2
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['stevezhu:lodash'] = {
  lodash: lodash,
  _: _
};

})();

//# sourceMappingURL=stevezhu_lodash.js.map
