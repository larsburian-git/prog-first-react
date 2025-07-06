import './RestaurantMain.css';
import esstaurantImage from './esstaurant.png';
import Speisekarte from '../Speisekarte/Speisekarte'


const RestaurantMain = () => {
  return (
    <main>
      <div className="container">
        <div>
          <h1>Restaurant Japakoreanesisch</h1>
          <h2>mmh lecki essen</h2>
        </div>
        <Speisekarte />
        <img src={esstaurantImage} alt="Restaurant Visual" />
      </div>
    </main>
  );
};

export default RestaurantMain;
