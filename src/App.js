import { Container } from 'react-bootstrap';
import {BrowserRouter as Router, Route } from 'react-router-dom';

// components
import Header from './components/Header';
import TopHeader from './components/TopHeader';
import Footer from './components/Footer';

// screens
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <Router>
      <TopHeader /> 
      <Header />
        <main>
          <Container>
            <Route path="/" component={HomeScreen} exact />
            <Route path="/product/:id" component={ProductScreen} />

          </Container>
        </main>
      <Footer />
    </Router>
  )
}

export default App
