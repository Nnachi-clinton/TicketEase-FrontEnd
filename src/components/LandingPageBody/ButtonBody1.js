import '../../pages/LandingPageBody/ButtonBody1.css';
import { NavLink } from 'react-router-dom';

function Button1() {
  return (
    <>
      <NavLink to="/contactUs">
        <button className="button">Join now</button>
      </NavLink>
    </>
  );
}

export default Button1;
