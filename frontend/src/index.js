import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import "./index.css";
// import { createRoot } from 'react-dom/client';
import App from "./App";

import ChatProvider from "./Context/ChatProvider";
import { ChakraProvider } from "@chakra-ui/react";
import {BrowserRouter} from "react-router-dom";


const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
   
  <ChakraProvider>
    <BrowserRouter>
    <ChatProvider>
     
        <App />
      </ChatProvider>
    </BrowserRouter>
  </ChakraProvider>,
  // document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
