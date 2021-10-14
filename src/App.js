import './App.css';
import react, {useEffect, useState} from 'react'
import styled from 'styled-components'
import anime from 'animejs'

const API_URL = 'http://54.160.7.163:2000'

function App() {
  return (
    <div>
      <WelcomeLabel />
      <VersionLabel />
    </div>
  )
}

function WelcomeLabel() {
  return <h1 id='welcome'>Welcome!</h1>
}

const FooterBar = styled.div`
  position: fixed;
  bottom: 0px;
  height: fit-content;
  width: 100%;
  background-color: #0a0a0a;
  display: flex;
`;

const GithubRepo = (props) => {
    const targetUrl = "https://www.github.com/alecgirman/".concat(props.repo)

  return (
    <a href={targetUrl}>
      <img class='github-logo-svg' height="32" width="32" src="https://simpleicons.org/icons/github.svg" />
    </a>
  )
}

function VersionLabel() {
  const [version, setVersion] = useState({version: '--', stack: '--'})

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
    <FooterBar>
      <span class="version_label">API Version: <span class='version_info_label'>{version.version}</span></span>
      <span class="version_label">Stack: <span class='version_info_label'>{version.stack}</span></span>
      <GithubRepo repo='site-backend' />
      <GithubRepo repo='site-frontend' />
  </FooterBar>
  )
}

export default App;
