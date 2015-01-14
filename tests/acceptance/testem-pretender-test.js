import Pretender from 'pretender';
import Ember from 'ember';
import startApp from '../helpers/start-app';

var application;
var pretender;

module('Acceptance: TestemPretender', {
  setup: function() {
    application = startApp();
    pretender = new Pretender();
    var send = window.XMLHttpRequest.prototype.send;
    window.XMLHttpRequest.prototype.send = function () {
      console.log('inside test');
      debugger;
      send.apply(this, arguments);
    }
  },
  teardown: function() {
    console.log('outside test');
    Ember.run(application, 'destroy');
    pretender.shutdown();
  }
});

test('visiting /testem-pretender', function() {
  visit('/testem-pretender');

  andThen(function() {
    equal(currentPath(), 'testem-pretender');
  });
});
