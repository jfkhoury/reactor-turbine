'use strict';

var getQueryParamSpy = jasmine.createSpy().and.returnValue('bar');
var dataElementDelegate = require('inject!../queryParam')({
  getQueryParam: getQueryParamSpy
});

describe('queryParam data element delegate', function() {
  it('should return a query parameter value', function() {
    var config = {
      dataElementConfig: {
        name: 'foo',
        ignoreCase: true
      }
    };

    var value = dataElementDelegate(config);

    expect(value).toBe('bar');
    expect(getQueryParamSpy.calls.argsFor(0)).toEqual(['foo', true]);
  });
});
