import {EntriesSearch} from '@/components/EntriesSearch'
import {Entry} from '@/interfaces/Entry'
import Head from 'next/head'
import {useState} from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [entrySelected, setEnrtySelected] = useState<Entry>()

  return (
    <div className={styles.container}>
      <Head>
        <title>Example Page for autocomplete component</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Example Page for autocomplete component
        </h1>

        <div
          style={{
            display: 'flex',
            padding: '20px',
            width: '100%',
            gap: '100px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              minWidth: '30em',
            }}
          >
            <h2>Search for an entry</h2>
            <EntriesSearch
              label="Search"
              onObjectSelected={(entry: Entry) => {
                setEnrtySelected(entry)
              }}
            />
          </div>

          {entrySelected && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'nowrap',
                alignItems: 'flex-end',
              }}
            >
              <h2 data-cy="result-title">Entry selected</h2>
              <p data-cy="result-name">
                <u>{entrySelected.API}</u>
              </p>
              <p className={styles.text}>
                <i>{entrySelected.Description}</i>
              </p>
              <p className={styles.text}>
                <b>Category:</b> {entrySelected.Category}
              </p>
              <p className={styles.text}>
                <a href={entrySelected.Link} target="_blank" rel="noreferrer">
                  {entrySelected.Link}
                </a>
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
