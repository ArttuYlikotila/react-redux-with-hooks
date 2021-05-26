import { useSelector } from 'react-redux';
import './BirdsPage.css';
import BirdForm from './BirdForm';
import Bird from './Bird';

// Component that renders the page "Birds", composed of smaller components
export default function BirdsPage() {
  // React-Redux hook that gets the state out of the store the "normal way"
  //const birds = useSelector(state => state.birds);

  // Getting state out of store with useSelector hook and sorting a copy of the returned state.
  // Data stays in the defined order after all updates this way and the reducer is simpler,
  // but will this affect performance with larger data sets?
  const birds = [...useSelector(state => state.birds)].sort((a,b) => {
    return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
  });
  
  // Function that maps through the birds-data and returns Bird-components with data of a single
  // bird passed in them as a prop
  function renderBirds() {   
    return birds.map((bird) => <Bird key={bird.name} bird={bird} />)
  }

  return (
    <div className='container birdpage'>
      <h2>Bird List</h2>
      <BirdForm />
      <ul>
        {renderBirds()}
      </ul>
    </div>
  );
}