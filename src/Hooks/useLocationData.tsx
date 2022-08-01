import { useState, useEffect } from "react"
import { api } from "../utilities/helpers"

export default function useLocationData() {
  const [ipData, setIpData] = useState(null)

  useEffect(() => {
    async function ipData() {
      const ipData = await api("https://ipapi.co/json")
      setIpData(ipData)
    }
    ipData()
  }, [])

  return { ipData }
}
