class CustomErrorHandler extends Error {
  constructor(status, msg) {
    super();
    this.status = status;
    this.message = msg;
  }

  static wrongCredentials(message = "Invalid Credentatials!") {
    return new CustomErrorHandler(401, message);
  }

  static serverError(message = "Internal server error") {
    return new CustomErrorHandler(500, message);
  }

  static notFound(message = "Not Found") {
    return new CustomErrorHandler(404, message);
  }
}

module.exports = CustomErrorHandler;
