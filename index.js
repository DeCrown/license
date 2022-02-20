const crypto = require('crypto')

exports.handler = async function http(req) {
  
  let today_ = new Date()
  let today = new Date(today_.getTime() + 10800000)
  let d = ('0' + today.getDate()).slice(-2)
  let m = ('0' + today.getMonth()).slice(-2)
  let y = ('' + today.getFullYear()).slice(-2)
  let secret = 'bbef7ec9e2';
  
  let shasum = crypto.createHash('sha1')
  shasum.update(d + m + y + secret)
  let res = shasum.digest('hex');

  return {
    headers: {
      'content-type': 'text/html; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    statusCode: 200,
    body: res
  }
}
