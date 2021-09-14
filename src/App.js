import { Container } from 'react-bootstrap';
import {BrowserRouter as Router, Route } from 'react-router-dom';

// components
import Header from './components/Header';
import TopHeader from './components/TopHeader';
import Footer from './components/Footer';

// screens
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import ProfileScreen from './screens/ProfileScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import UserListScreen from './screens/UserListScreen'

function App() {
  return (
    <Router>
      <TopHeader /> 
      <Header />
        <main>
          <Container>
            <Route path="/" component={HomeScreen} exact />
            <Route path='/login' component={LoginScreen} />
            <Route path='/register' component={RegisterScreen} />
            <Route path='/profile' component={ProfileScreen} />
            <Route path='/shipping' component={ShippingScreen} />
            <Route path='/payment' component={PaymentScreen} />
            <Route path='/placeorder' component={PlaceOrderScreen} />
            <Route path='/order/:id' component={OrderScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />

            {/* admin routes */}
            <Route path='/admin/userlist' component={UserListScreen} />

          </Container>
        </main>
      <Footer />
    </Router>
  )
}

export default App
