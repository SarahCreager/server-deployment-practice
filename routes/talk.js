'use strict';

module.exports = function (request, response) {
  let words = request.body.words;
  response.send(words);
}