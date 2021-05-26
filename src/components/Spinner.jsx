// Basic Spinner component usings stylings of Bootstrap 5
export default function Spinner() {
  return (
    <div className='text-center'>
      <div className='spinner-border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </div>
    </div>
  );
}