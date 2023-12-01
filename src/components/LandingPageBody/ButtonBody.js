// import '../../App.css';
// import '../../../src/ButtonBody.css';
import '../../pages/LandingPageBody/ButtonBody.css';
import { Link } from 'react-router-dom';

function Button() {
  return (
    <>
      <Link to="/contactUs">
        <button className="my-button">Get Started</button>
      </Link>
    </>
  );
}

export default Button;
