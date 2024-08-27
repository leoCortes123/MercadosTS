import React from "react"
import { Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

// Definición de la interfaz para las props
interface CheckoutStepsProps {
  step1: boolean
  step2: boolean
  step3: boolean
  step4: boolean
}

// Definición de los pasos con sus rutas y etiquetas
const steps = [
  { key: "step1", label: "Sign In", path: "/login" },
  { key: "step2", label: "Shipping", path: "/shipping" },
  { key: "step3", label: "Payment", path: "/payment" },
  { key: "step4", label: "Place Order", path: "/placeorder" },
]

const CheckoutSteps: React.FC<CheckoutStepsProps> = (props) => {
  return (
    <Nav className="justify-content-center mb-4">
      {steps.map(({ key, label, path }) => (
        <Nav.Item key={key}>
          {props[key as keyof CheckoutStepsProps] ? (
            <Nav.Link as={Link} to={path}>
              {label}
            </Nav.Link>
          ) : (
            <Nav.Link disabled>{label}</Nav.Link>
          )}
        </Nav.Item>
      ))}
    </Nav>
  )
}

export default CheckoutSteps
