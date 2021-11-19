import './App.scss';
import { Message } from './Message/Message';

const message = 'test props';

function App({name}) {
  return (
    <div className="app">
      <header className="app-header">
        <h1>App component</h1>
        <Message message={ message } />
      </header>
    </div>
  );
}

export default App;