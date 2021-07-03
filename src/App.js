import { Container } from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
import TopHeader from './components/TopHeader';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <div>
      <TopHeader /> 
      <Header />
        <main>
          <Container>
            <HomeScreen />
          </Container>
        </main>
      <Footer />
    </div>
  )
}

export default App
