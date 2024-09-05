import { FetchBaseQueryError } from "@reduxjs/toolkit/query/react"
import { SerializedError } from "@reduxjs/toolkit/react"
import Message from "./Message"

interface ErrorSliceProps {
  error: FetchBaseQueryError | SerializedError | undefined
}

function ErrorSlice({ error }: Readonly<ErrorSliceProps>): JSX.Element {
  let errorMessage = ""
  if (!error) {
    errorMessage = "An unknown error occurred"
  }
  // Si es un error del servidor
  else if ("status" in error) {
    const serverError = error
    errorMessage =
      serverError.data && typeof serverError.data === "object" && "message" in serverError.data
        ? `Server error: ${(serverError.data as { message: string }).message}`
        : `Server error: ${serverError.status || "Unknown status"}`
  }

  // Si es un error del cliente
  else if ("message" in error) {
    const clientError = error
    errorMessage = clientError.message ? `Client error: ${clientError.message}` : "An unknown client error occurred"
  }

  return <Message variant="danger">{errorMessage}</Message>
}

export default ErrorSlice
