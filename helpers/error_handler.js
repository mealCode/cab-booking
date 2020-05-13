module.exports = {
  codes: require('./error_codes'),
  ApiError: (appErr, msg) => {
    const err = new Error(msg);
		err.appErr = appErr;
		return err;
  }
}