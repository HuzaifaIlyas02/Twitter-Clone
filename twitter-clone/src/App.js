import './App.css';
import Feed from './components/Feed/Feed';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      {/* SideBar */}
      <Sidebar />
      
      {/* Feed */}
      <Feed />
      {/* Widgets */}
    </div>
  );
}

export default App;
