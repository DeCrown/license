var crypto = require('crypto')
var shasum = crypto.createHash('sha1')

exports.handler = async function http(req) {
  
  let today = new Date()
  let d = ('0' + today.getDate()).slice(-2)
  let m = ('0' + today.getMonth()).slice(-2)
  let y = ('' + today.getFullYear()).slice(-2)
  
  shasum.update(d + m + y)
  let res = shasum.digest('hex')

  let html = d + m + y

  return {
    headers: {
      'content-type': 'text/html; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    statusCode: 200,
    body: html
  }
}
