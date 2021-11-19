import PropTypes from "prop-types";
import './App.css';
// import Shapes from './components/shapes/shapes'
// import Logos from './components/logos/logos'
// import {ReactComponent as MakeLogo} from './logo.svg'
// import {ReactComponent as ReactLogo} from './react-logo.svg'

function App({ headline, showLogos, backgroundImage }) {
  return (
    <div className="App" style={{ backgroundImage: `url('${backgroundImage}')` }}>

      <h1>{headline}</h1>

    </div>
  );
}

App.propTypes = {
  headline: PropTypes.string,
  showLogos: PropTypes.string,
  backgroundImage: PropTypes.string,
}

App.defaultProps = {
  headline: 'I am grateful for you.',
  showLogos: false,
  backgroundImage: 'https://files.outfit.io/media_library_items/349531/gratitude-bg1.png',
}

export default App;
