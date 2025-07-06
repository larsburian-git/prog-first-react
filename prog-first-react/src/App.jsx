// Import CSS to file, to use classes
import './App.css';

import HeadingAndButton from './components/HeadingAndButton/HeadingAndButton';
import RestaurantFooter from './components/RestaurantFooter/RestaurantFooter';
import RestaurantHeader from './components/RestaurantHeader/RestaurantHeader';
import RestaurantMain from './components/RestaurantMain/RestaurantMain';
import LoginForm from './components/LoginForm/LoginForm';
import Checkout from './components/Checkout/Checkout';

function App() {
  // Öffnungszeiten zentral definieren
  const OPENING_HOURS = {
    start: '16:00',
    end: '22:00',
    closedDays: [2], // Mittwoch (0 = Montag)
    days: [
      'Montag',
      'Dienstag',
      'Mittwoch',
      'Donnerstag',
      'Freitag',
      'Samstag',
      'Sonntag',
    ],
  };

  // Login-Handler für Formular
  const handleLogin = (credentials) => {
    console.log("Login-Daten:", credentials);
  };

  return (
    <>
      <RestaurantHeader />
      <RestaurantMain />
      <LoginForm onSubmit={handleLogin} />
      <Checkout openingHours={OPENING_HOURS} />

      <RestaurantFooter openingHours={OPENING_HOURS} />
    </>
  );
}

export default App;
