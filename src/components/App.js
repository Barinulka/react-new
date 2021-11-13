import './App.scss';
import { Message } from './Message';

const message = 'test props';

function App({name}) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>App component</h1>
        <Message message={ message } />
      </header>
    </div>
  );
}

export default App;