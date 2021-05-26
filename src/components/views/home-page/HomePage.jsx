// Component that renders static html
export default function HomePage() {
  return (
    <div className='container'>
      <h2>Homepage</h2>
      <p>
        This is the landing page for the demo-app and mainly exists for testing and demonstrating 
        the router. This app has five distinct pages that can be navigated via the menu below 
        the header. The router is configured so that the users will be re-routed to this page if
        they enter a path in this domain that is not defined. Defined paths are the root "/", 
        "/posts", "/birds", "/secret" and "/login".
      </p>
      <p>
        Post-page fetches 10 fake blog posts with a GET request from an open API 
        from <a href='https://jsonplaceholder.typicode.com'>https://jsonplaceholder.typicode.com</a> and 
        renders an excerpt of the posts on screen. Only first 100 characters are rendered from the body
        of the posts.
      </p>
      <p>
        Birds-page containts a simple bird watching application. User can add new birds to the 
        collection of seen birds and user can increment or decrement the times a bird has been seen and
        birds can be removed from the listing.
      </p>
      <p>
        Secret-page is a protected component that can only be accessed by users who are logged in. If 
        users who are not logged in try to navigate to the path directly, they are redirected to the 
        login page instead. The link to the page is only shown to users who are logged in.
      </p>
      <p>
        Login-page demonstrates how a login to a React application could be done. The code is incomplete 
        and shows the logic how the logging in could be done only on "proof of concept" level. The password
        is not checked at all and can even be left empty since there are no actual users that could be
        authenticated. In a real application the username and password should be authenticated in some
        way (eg. against own user database in back-end application, Shibboleth etc.). After a successful 
        authentication the user should be given a JWT-token or some other form of proof of authentication 
        that can be used in the React application to authorize actions like accessing the Secret-page 
        or sending POST-calls to routes in the back-end that make modifications to database. NOTE: the
        kind of calls to back-end that perform actions that need authorization should always be checked in 
        the back-end separately to make sure that the authorization is legit.
      </p>
      <p>
        This application contains only minimal styling with Bootstrap 5 and some custom CSS, since the 
        main purpose of the app is to demonstrate how React works with Redux. Secondary purpose
        for this demo-app is to test and design a way to structure the project folders and files in a
        way that supports the development of this kind of an application.
      </p>
    </div>
  );
}