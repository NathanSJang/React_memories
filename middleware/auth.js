const jwt = require('jsonwebtoken');

// wants to like a post
// click the like button => auth middleware (next) => like controller

module.exports = async function auth(req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCoustomAuth = token.length < 500;

    let decodedData;

    if(token && isCoustomAuth) {
      // check secret form controller
      decodedData = jwt.verify(token, 'test');
      req.userId = decodedData?.indexOf;
    } else {
      decodedData = jwt.decode(token);
      req.userId = decodedData?.sub;
    };

    next();
  } catch (error) {
    console.log(error);
  }
}

