import './App.css';
import react, {useEffect, useState} from 'react'

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
    fetch('http://localhost:2000/api/version').then((response) => {
      return response.json();
    }).then((obj) => {
      setVersion(obj.version);
    })
  };

  useEffect(() => {
    getVersion();
  });

  return (
  <div>
    <p id='api-version'>{version}</p>
  </div>
  )
}

export default App;
