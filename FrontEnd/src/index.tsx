// index.tsx
import React from "react"
import ReactDOM from "react-dom/client" // Asegúrate de usar 'react-dom/client' si estás usando React 18+
import { Provider } from "react-redux"
import { PayPalScriptProvider } from "@paypal/react-paypal-js"
import { HelmetProvider } from "react-helmet-async"
import store from "./store"
import App from "./App"

const { PAYPAL_CLIENT_ID } = process.env

// Asegúrate de que el elemento existe o maneja el caso en que sea null
const rootElement = document.getElementById("root") as HTMLElement
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <React.StrictMode>
      <HelmetProvider>
        <Provider store={store}>
          <PayPalScriptProvider options={{ clientId: PAYPAL_CLIENT_ID as string }} deferLoading={true}>
            <App />
          </PayPalScriptProvider>
        </Provider>
      </HelmetProvider>
    </React.StrictMode>,
  )
} else {
  console.error("Root element not found")
}

// TODO: implementar metricas
// import reportWebVitals from './reportWebVitals'
// reportWebVitals()
