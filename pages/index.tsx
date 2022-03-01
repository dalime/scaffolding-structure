import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { TITLE } from '../constants'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Scaffoling App - {TITLE}</title>
        <meta name="description" content="Sample PrimeLab Scaffolding app" />
        <link rel="icon" href="/img/near-logo.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {TITLE}
        </h1>

        <p className={styles.description}>
          Review, Add, Update, and Check off your Todo list items
        </p>

        <div className={styles.grid}>
          <Link href="/add">
            <a className={styles.card}>
              <h2>Add an Item &rarr;</h2>
              <p>Have something to do? Add an item</p>
            </a>
          </Link>

          <Link href="/list">
            <a className={styles.card}>
              <h2>See your List &rarr;</h2>
              <p>What do you have to finish today?</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://primlab.io'
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/svg/near-logo.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
          NEAR
        </a>
      </footer>
    </div>
  )
}

export default Home
