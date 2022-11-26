import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Web3 from "web3";
import { Web3ReactProvider } from "@web3-react/core";
import MetamaskProvider from "./connectors";
import { Component } from 'react';

function getLibrary(provider) {
  return new Web3(provider, "any");
}

function App() {
  return (
    <div>
      <Web3ReactProvider getLibrary={getLibrary}>
        <MetamaskProvider>
          <Dashboard />
        </MetamaskProvider>
      </Web3ReactProvider>
    </div>
  );
}

export default App;
