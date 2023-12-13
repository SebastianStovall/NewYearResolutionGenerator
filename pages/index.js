import { useState } from "react";
import styles from './index.module.css'
import Confetti from 'react-confetti';
import CountDown from "@/components/countdown";
import getYear from "@/lib/getNewYear";
import { useRouter } from "next/router";

// App.js or your main component file
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home() {
  const router = useRouter()
  const [resolution, setResolution] = useState(null)
  const [isConfettiActive, setIsConfettiActive] = useState(false);
  const [error, setError] = useState({})
  const year = getYear()


  async function handleFetch() {

    if(isConfettiActive) return // if confetti effect not complete, dont start next fetch, (breaks confetti otherwise)

    const response = await fetch('/api/resolutions/')
    if(response.ok) {
      const resolutionData = await response.json()
      setResolution(resolutionData)
      setError({})

      setIsConfettiActive(true);
      setTimeout(() => {
        setIsConfettiActive(false);
      }, 3000)

    } else {
      setResolution(null)
      setError({message: 'Error Generating Resolution! Please Try Again'})
    }

  }

  return (
    <div className={styles.snow_wrap}>  {/* image background */}
      {isConfettiActive && <Confetti />} {/* confetti effect */}
      <div className={styles.snow}></div> {/* snow effect */}

      <h1 className={styles.centerHeading}>Need help finding a New Year's Resolution?</h1>
      <h2 className={styles.centerCountdownTxt}>Clocks Ticking!</h2>
      <CountDown newYear={year}></CountDown>
      <div className={styles.center}>
        <button onClick={handleFetch} className={styles.resolutionButton}>Generate Me A Resolution</button>
      </div>
        <div className={styles.or}>or</div>
        <div className={styles.formButton}>
          <button className={styles.resolutionButton} onClick={() => router.push('./resolutionForm')}>Submit Your Own</button>
        </div>

      {/* display resolution */}
      {resolution && <p className={styles.centerText}>{resolution.prompt}</p>}
      {Object.values(error).length > 0 && <p>{error.message}</p>}

      <div className={styles.resolutionImgContainer}>
        {resolution && resolution.image && <img src={resolution.image} />}
        {resolution && resolution.image === null && <img src='https://th.bing.com/th/id/OIG.2xoPFTgitQSB1uiCN9LD?pid=ImgGn' />}
      </div>

      <ToastContainer />
    </div>
  )
}

// className={styles.centerText}

export default Home;
