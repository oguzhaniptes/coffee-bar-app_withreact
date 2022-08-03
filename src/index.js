import React from 'react';
import ReactDOM from 'react-dom/client';
import Welcomepage from './welcomepage/welcomepage';
 import SignupPage from './SignUp/signupPage';
import SigninPage from './SignIn/signinPage';
import Basic from './component/Form'
import HomePage from './homePage/homePage';
import Announcement from './component/Announcement';
import Cards from './component/Cards';
import { ChakraProvider } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <HomePage></HomePage>
      {/* <SigninPage></SigninPage> */}
      {/* <SignupPage></SignupPage> */}
      {/* <Announcement></Announcement> */}
      {/* <Cards></Cards> */}
    </ChakraProvider>
  </React.StrictMode>
);