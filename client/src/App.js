import logo from './logo.svg';
import './App.css';
import AppLeftBar from './component/app-left-bar/app-left-bar';
import AppMiddle from './component/app-middle/app-middle';
import AppRightBar from './component/app-right-bar/app-right-bar';

function App() {
  return (
    <div>
      <AppLeftBar />
      <AppMiddle />
      <AppRightBar />
    </div>
  );
}

export default App;
