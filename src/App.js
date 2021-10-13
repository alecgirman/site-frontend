import './App.css';
import react, {useEffect, useState} from 'react'

const API_URL = 'http://localhost:2000'

function App() {
  return (
    <div>
      <WelcomeLabel />
      <VersionLabel />
    </div>
  )
}

function WelcomeLabel() {
  return <h1>Welcome!</h1>
}

function VersionLabel() {
  const [version, setVersion] = useState('--')

  const getVersion = () => {
    fetch(API_URL + '/api/version').then((response) => {
      return response.json();
    }).then((obj) => {
      setVersion(obj);
    })
  };

  useEffect(() => {
    getVersion();
  }, []);

  return (
  <div>
    <p id='api-version'>{version.version}</p>
    <p id='stack-label'>{version.stack}</p>
  </div>
  )
}

export default App;
