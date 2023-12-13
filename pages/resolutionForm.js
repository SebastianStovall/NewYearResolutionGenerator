import styles from "./index.module.css";
import formStyles from "./resolutionForm.module.css";
import getYear from "@/lib/getNewYear";
import { useRouter } from "next/router";
import { useState } from "react";

import { toast } from 'react-toastify'

function ResolutionForm() {
    const router = useRouter()
    const [resolutionText, setResolutionText] = useState('')
    const [formErrors, setFormErrors] = useState({})

    const currentYearTimestamp = getYear() // display current year in form header
    const date = new Date(currentYearTimestamp);
    const currentYear = date.getUTCFullYear();


    async function handleResolutionCreation(e) {
        e.preventDefault()
        const errors = {}
        setFormErrors({})

        if(resolutionText.trim().length === 0) {
            errors.resolution = 'Please Provide a Resolution'
        }
        if(resolutionText.length > 80) {
            errors.resolution = 'Please Provide a Resolution That is 80 Characters or Less'
        }

        if(Object.keys(errors).length > 0) {  // if errors, return here
            setFormErrors(errors)
            return
        }

        const newResolutionObj = {text: resolutionText} // req body

        const response = await fetch('/api/resolutions/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({resolution: newResolutionObj}),
        })

        if(response.ok) {
            toast.success('Creation successful!')
            router.push('/')
        } else {
            toast(`Error while creating resolution`, { type: 'error' })
            router.push('/')
        }
    }

  return (
    <div className={styles.snow_wrap}> {/* image background */}
      <div className={styles.snow}></div> {/* snow effect */}

      <div className={formStyles.banner}>
        <img src='https://i.pinimg.com/originals/80/4c/98/804c98742bd28408ef94298b633e446d.png' />
      </div>

      <div className={formStyles.login}>
        <h2>{currentYear} Resolution Idea</h2>
        <form>
          <div className={formStyles.user}>
            <input type="text" name="" onChange={(e) => setResolutionText(e.target.value)} />
            <label>Resolution Idea:</label>
            {formErrors && formErrors.resolution && <p>{formErrors.resolution}</p>}
          </div>

          <a href="#" onClick={() => router.push('/')}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Cancel
          </a>


          <a href="#" onClick={handleResolutionCreation}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
        </form>
      </div>

    </div>
  );
}

export default ResolutionForm;
