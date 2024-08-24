/**
 * AppController class handles application-level routes and actions.
 */
class AppController {
  /**
   * Handles the request for the homepage.
   *
   * This method sends a response with a status code of 200 and the message
   * "Hello Holberton School!" when the homepage route is accessed.
   *
   * @param {Object} request - HTTP request object.
   * @param {Object} response - HTTP response object.
   */
  static getHomepage(request, response) {
    response.send(200, 'Hello Holberton School!');
  }
}

export default AppController;
