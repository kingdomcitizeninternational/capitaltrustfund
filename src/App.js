import React, { Suspense } from "react";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import FallBackComponent from './components/Fallback';
import { useSelector } from "react-redux";

import Home from './screens/Home';
import About from './screens/About';
import Card from './screens/Cards';
import Contact from './screens/Contact';
import Faq from './screens/Faq';
import Current from './screens/Current';
import Savings from './screens/Savings';
import Login from './screens/Login';
import Signup from './screens/Signup';
import EmailVerify from './screens/EmailVerify';
import EmailVerifification from './screens/EmailVerifification';
import RegisterationPage from './screens/Registeration';
import ForgetPassword from './screens/ForgetPassword';
import ResetPassword from './screens/ResetPassword';
import PhoneSignup from './screens/PhoneSignup';
import PhoneVerification from './screens/PhoneVerification';
import Sucess from './screens/Sucess';
import ProfilePhoto from './screens/ProfilePhoto';
import Dashboard from './screens/Dashboard';
import Transfer from './screens/FundTransfer';
import BillPay from './screens/BillPay';
import SendCard from './screens/SendToCard';
import SendAccount from './screens/SendToAccount';
import Notification from './screens/Notifications';
import TransactionHistory from './screens/TransactionHistory';
import Profile from './screens/Profile';
import Settings from './screens/Settings';
import Privacy from './screens/Privacy';
import Help from './screens/Help';
import Deposit from './screens/Deposit';
import Beneficiaries from './screens/Beneficiaries';
import AddBeneficiaries from './screens/AddBeneficiaries';
import Invite from './screens/Invite';
import NewCard from './screens/NewCard';
import CardForm from './screens/CardForm';
// import DashboardHome from './screens/DashboardHome';
import Withdraw from './screens/Withdraw';
import Tax from './screens/TaxCode';
import TAC from './screens/TACcode';
import NRC from './screens/NRCcode';
import IMF from './screens/IMFcode';
import COT from './screens/COTcode';
import BSA from './screens/BsaCode';
import OTP from './screens/OneTimePassword';
import Loan from './screens/Loan';
import CardDetails from './screens/CardDetails';
import NewCardForm from './screens/NewCardForm';


function App() {
  let { userToken} = useSelector(state => state.userAuth)


  return (
    <div className = "App">
      <Suspense fallback={<FallBackComponent />} >
        <Routes>
          {/* General*/}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/cards' element={<Card />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/current' element={<Current />} />
          <Route path='/savings' element={<Savings />} />
        
          {/*auth screens*/}
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/verify/:id' element={<EmailVerify />} />
          <Route path='/verification/:id' element={<EmailVerifification />} />
          <Route path='/registeration' element={<RegisterationPage />} />
          <Route path='/forgetpassword' element={<ForgetPassword />} />
          <Route path='/resetpassword/:token' element={<ResetPassword />} />
          <Route path='/phonesignup' element={<PhoneSignup />} />
          <Route path='/phoneverification' element={<PhoneVerification />} />
          <Route path='/profilephoto' element={userToken?<ProfilePhoto />:<Login/>} />
          <Route path='/success' element={<Sucess />} />
          <Route path='/dashboard' element={userToken?<Dashboard />:<Login/>} />
          <Route path='/transfer' element={userToken?<SendAccount />:<Login/>} />
          <Route path='/billpay' element={userToken?<BillPay />:<Login/>} />
          <Route path='/send-card' element={userToken?<SendCard />:<Login/>} />
          <Route path='/send-account' element={userToken?<SendAccount />:<Login/>} />
          <Route path='/notifications' element={userToken?<Notification/>:<Login/>} />
          <Route path='/transaction-history' element={userToken?<TransactionHistory/>:<Login/>} />
           <Route path='/profile' element={userToken?<Profile/>:<Login/>} />
           <Route path='/settings' element={userToken?<Settings/>:<Login/>} />
           <Route path='/privacy' element={userToken?<Privacy/>:<Login/>} />
           <Route path='/help' element={userToken?<Help/>:<Login/>} />
           <Route path='/deposit' element={userToken?<Deposit/>:<Login/>} />
           <Route path='/beneficiaries' element={userToken?<Beneficiaries/>:<Login/>} />
           <Route path='/add-beneficiaries' element={userToken?<AddBeneficiaries/>:<Login/>} />
           <Route path='/invite' element={userToken?<Invite/>:<Login/>} />
           <Route path='/new-card' element={userToken?<Dashboard />:<Login/>} />
           <Route path='/card-form' element={userToken?<CardForm/>:<Login/>} />
           <Route path='/home' element={userToken?<Dashboard />:<Login/>} />
           <Route path='/withdraw' element={userToken?<Withdraw/>:<Login/>} />


           <Route path='/tax' element={userToken?<Tax/>:<Login/>} />
           <Route path='/bsa' element={userToken?<BSA/>:<Login/>} />
           <Route path='/tac' element={userToken?<TAC/>:<Login/>} />
           <Route path='/nrc' element={userToken?<NRC/>:<Login/>} />
           <Route path='/imf' element={userToken?<IMF/>:<Login/>} />
           <Route path='/cot' element={userToken?<COT/>:<Login/>} />



           <Route path='/otp' element={userToken?<OTP/>:<Login/>} />
          
           <Route path='/loan' element={userToken?<Loan/>:<Login/>} />
           <Route path='/card' element={userToken?<CardForm/>:<Login/>} />
           <Route path='/new-card-form' element={userToken?<NewCardForm/>:<Login/>} />
           <Route path='/card-details/:id' element={userToken?<CardDetails/>:<Login/>} />


        </Routes>

      </Suspense>
    </div>
  );
}

export default App;

