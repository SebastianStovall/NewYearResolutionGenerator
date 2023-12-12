import { useState } from "react";
import styles from './index.module.css'
import FireworkButton from "@/components/ui/fireworkButton";

function Home() {
  const [resolution, setResolution] = useState(null)
  const [error, setError] = useState({})

  async function handleFetch() {
    const response = await fetch('/api/resolutions/')
    if(response.ok) {
      const resolutionData = await response.json()
      setResolution(resolutionData)
      setError({})
    } else {
      setResolution(null)
      setError({message: 'Error Generating Resolution! Please Try Again'})
    }
  }

  return (
    <div className={styles.snow_wrap}>
      <div className={styles.snow}></div>

      <h1 className={styles.centerHeading}>Need help finding a New Year's Resolution?</h1>
      <div className={styles.center}>
        <button onClick={handleFetch} className={styles.resolutionButton}>Generate Me A Resolution</button>
      </div>
      {resolution && <p className={styles.centerText}>{resolution.prompt}</p>}
      {Object.values(error).length > 0 && <p>{error.message}</p>}
    </div>
  )
}


export default Home;
