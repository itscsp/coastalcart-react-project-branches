import { Container } from 'react-bootstrap';
import {BrowserRouter as Router, Route ,  Switch } from 'react-router-dom';

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
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import OrderListScreen from './screens/OrderListScreen'

import NotFound from './screens/NotFound';

function App() {
  return (
    <Router>
      
      <TopHeader /> 
      <Header />
        <main>
          <Container>
            <Switch>
            <Route path="/" component={HomeScreen} exact />
            <Route path='/login' component={LoginScreen} exact/>
            <Route path='/register' component={RegisterScreen} exact/>
            <Route path='/profile' component={ProfileScreen} exact/>
            <Route path='/shipping' component={ShippingScreen} exact/>
            <Route path='/payment' component={PaymentScreen} />
            <Route path='/placeorder' component={PlaceOrderScreen} exact/>
            <Route path='/order/:id' component={OrderScreen} exact/>
            <Route path="/product/:id" component={ProductScreen} exact/>
            <Route path="/cart/:id?" component={CartScreen} exact/>

            {/* admin routes */}
            <Route path='/admin/userlist' component={UserListScreen} exact/>
            <Route path='/admin/user/:id/edit' component={UserEditScreen} exact/>
            <Route path='/admin/product/:id/edit' component={ProductEditScreen} exact/>

            <Route path='/admin/productlist' component={ProductListScreen} exact/>
            <Route path='/admin/orderlist' component={OrderListScreen} exact/>


            <Route path='/*' component={NotFound} />
          </Switch>
          </Container>
        </main>
      <Footer />
    </Router>
  )
}

export default App
