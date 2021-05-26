// Component that renders static html
export default function SecretPage() {
  return (
    <div className='container'>
      <h2>Protected Page</h2>
      <p>
        This is highly protected component. Can be seen only by users who are logged in.
        Users who are not logged in will be redirected to login page if trying to access
        this page.
      </p>
    </div>
  );
}