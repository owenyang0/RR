var RR = require('reactive-react');

var PlusMinusAction = RR.Observable.createAction({

  plusMinus$: function(plus$, minus$) {
    return plus$.merge(minus$);
  },

  create$: function(create$) {
    return create$;
  },

  remove$: function(remove$) {
    return remove$;
  }

});

module.exports = PlusMinusAction;
