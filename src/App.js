import * as React from 'react';
import { connect, signChallenge } from '@joyid/ckb';
import './App.css';

function App() {
  const [joyidInfo, setJoyidInfo] = React.useState(null);
  const [challenge, setChallenge] = React.useState('Sign this for me');

  const onConnect = async () => {
    try {
      const authData = await connect();
      setJoyidInfo(authData);
      console.log(`JoyID user info:`, authData);
    } catch (error) {
      console.error(error);
    }
  }
 
  const onSign = async () => {
    const res = await signChallenge(challenge, joyidInfo.address);
    if (res) {
      alert('Sign message successful');
      console.log(`Sign message result: ${res}`);
    }
  }

  return (
    <div>
      <h1>Hello JoyID!</h1>
      {joyidInfo ? null : <button onClick={onConnect}>Connect JoyID</button>}
      {joyidInfo ? (
        <div>
          <textarea value={challenge} onChange={e => setChallenge(e.target.value)} />
          <button onClick={onSign}>Sign With JoyID</button>
        </div>
      ) : null}
    </div>
  );
}

export default App;
