import './App.css';
import Header from './components/header';
import SideBar from './components/sidebar';
import Footer from './components/footer';
import CreateOrderButton from './components/createOrderButton';


function App() {
  return (
    <div className="App">
      <Header/>
      <CreateOrderButton/>
      <SideBar/>
      <Footer/>
      
    </div>
  );
}

export default App;
