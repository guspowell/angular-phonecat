'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function() {

  describe('phoneListCtrl', function() {

    beforeEach(module('phonecatApp'));

    it('should create phones model with three phones', inject(function($controller) {
      var scope = {},
          ctrl = $controller('phoneListCtrl', {$scope: scope});
      expect(scope.phones.length).toBe(3);
      expect(scope.name).toBe('Gus');
    }));

  });

});
