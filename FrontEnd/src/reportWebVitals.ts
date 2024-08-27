// web-vitals.ts
import { Metric } from "web-vitals"

type OnPerfEntry = (metric: Metric) => void

const reportWebVitals = (onPerfEntry?: OnPerfEntry) => {
  if (onPerfEntry && typeof onPerfEntry === "function") {
    import("web-vitals").then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
      onCLS(onPerfEntry)
      onINP(onPerfEntry)
      onFCP(onPerfEntry)
      onLCP(onPerfEntry)
      onTTFB(onPerfEntry)
    })
  }
}

export default reportWebVitals
