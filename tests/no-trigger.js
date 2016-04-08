'use strict';

const rule = require('../rules/no-trigger')
const RuleTester = require('eslint').RuleTester

const error = '$.trigger is not allowed'

const ruleTester = new RuleTester()
ruleTester.run('no-trigger', rule, {
  valid: [
    'trigger()',
    '[].trigger()',
    'div.trigger()',
  ],
  invalid: [
    {
      code: '$("div").trigger()',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$div.trigger()',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$("div").first().trigger()',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$("div").append($("input").trigger())',
      errors: [{message: error, type: 'CallExpression'}]
    }
  ]
})
