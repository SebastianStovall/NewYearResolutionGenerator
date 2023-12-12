import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

export default function Home() {

  async function handleFetch() {
    const res = await fetch('/api/resolutions/')
    console.log(res)
  }

  return (
    <>
      <h1>Need help finding a New Year's Resolution?</h1>
      <button
      onClick={handleFetch}
      >Generate Me A Resolution</button>
    </>
  )
}
