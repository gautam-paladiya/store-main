import './App.css';
import './style.css';
import LoginScreen from './screens/admin/LoginScreen';
import Wrapper from './components/Wrapper';
import { Routes, Route, Link } from "react-router-dom";
import SuccessScreen from './screens/admin/SuccessScreen';
import AddAgentScreen from './screens/admin/agent/AddAgentScreen';
import HomeScreen from './screens/admin/agent/HomeScreen';
import AddAgentKYC from './screens/admin/agent/AgentKYC';
import CustomerList from './screens/admin/customer/CustomerList';
import CreateCustomer from './screens/admin/customer/CreateCustomer';
import KycCustomer from './screens/admin/customer/KycCustomer';
import ViewCustomer from './screens/admin/customer/ViewCustomer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// wholsaler screens import
import ProductList from './screens/wholesaler/product/ProductList';
import AddProduct from './screens/wholesaler/product/AddProduct';
import OfferList from './screens/wholesaler/offer/OfferList';
import CreateOffer from './screens/wholesaler/offer/CreateOffer';
import AgentList from './screens/wholesaler/agent/AgentList';
import AgentCreate from './screens/wholesaler/agent/AgentCreate';
import AgentKYC from './screens/wholesaler/agent/AgentKYC';

function App() {
  return (
    <div className="App h-100">
      <ToastContainer />
      <Routes>
        <Route path="/" element={
          <Wrapper cardTitle={'Login to Dashboard'} mainTitle="Super Admin" cardSubTitle={'Enter your registered mobile no to get OTP'}>
            <LoginScreen name="super_admin" />
          </Wrapper>
        } />
        <Route path='/agent-list' element={<HomeScreen />} />
        <Route path='/success' element={<SuccessScreen />} />
        <Route path='/add-agent' element={<AddAgentScreen />} />
        <Route path='/add-agent-kyc/:mobile' element={<AddAgentKYC />} />
        <Route path='/customer-list' element={<CustomerList />} />
        <Route path='/customer-create' element={<CreateCustomer />} />
        <Route path='/customer-kyc/:mobile' element={<KycCustomer />} />
        <Route path='/customer-view/:mobile' element={<ViewCustomer />} />


        {/* Wholesaler routes */}

        <Route path="/wholesaler/login" element={
          <Wrapper cardTitle={'Login to Dashboard'} mainTitle="Wholesaler" cardSubTitle={'Enter your registered mobile no to get OTP'}>
            <LoginScreen name="wholesaler" />
          </Wrapper>
        } />
        <Route path='/wholesaler/product-list' element={<ProductList />} />
        <Route path='/wholesaler/product-create' element={<AddProduct />} />
        <Route path='/wholesaler/offer-list' element={<OfferList />} />
        <Route path='/wholesaler/offer-create' element={<CreateOffer />} />
        <Route path='/wholesaler/agent-list' element={<AgentList />} />
        <Route path='/wholesaler/add-agent' element={<AgentCreate />} />
        <Route path='/wholesaler/add-agent-kyc' element={<AgentKYC />} />
      </Routes>

    </div>
  );
}

export default App;
