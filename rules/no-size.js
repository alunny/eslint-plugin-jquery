'use strict';

const utils = require('./utils.js')

module.exports = function(context) {
  return {
    CallExpression: function(node) {
      if (node.callee.type !== 'MemberExpression') return
      if (node.callee.property.name !== 'size') return

      if (utils.isjQuery(node)) {
        context.report({
          node: node,
          message: 'Prefer length to $.size'
        })
      }
    }
  }
}

module.exports.schema = []
