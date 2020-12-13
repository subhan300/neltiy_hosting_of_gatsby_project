 
import React from "react"
import ReactDOM from 'react-dom'
import { Router } from "@reach/router"
import Layout from "../components/Layout"
import ClientPage1 from "../components/Client1"
import Default from "../components/Default"

const App = () => {
  return (
   <>
 <Layout>
      <Router basepath="/app">
        <ClientPage1 path="/page1" />
        <Default path="/" />
      </Router>
    </Layout>

   </>
  )
}

export default App