import logo from './logo.svg';
import { connect } from '@joyid/ckb';
import './App.css';

function App() {
  const onConnect = async () => {
    try {
      const authData = await connect();
      console.log(`JoyID user info:`, authData);
    } catch (error) {
      console.error(error);
    }
  }
 
  return (
    <div>
      <h1>Hello JoyID!</h1>
      <button onClick={onConnect}>Connect JoyID</button>
    </div>
  );
}

export default App;
