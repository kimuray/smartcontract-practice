import { useContract } from 'hooks/useContract'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react';
import { ItemListItem } from 'components/ItemListItem'

const Home: NextPage = () => {
  const [hashedItems, setHashedItems] = useState<string[]>([])
  const { contract } = useContract()

  useEffect(() => { init() }, [contract])

  const init = async () => {
    if(!contract) return
    const items = await contract?.methods.items().call()
    console.log(items)
    setHashedItems(items)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ul>
        {hashedItems.map((hashedItem) => (
          <ItemListItem hashedItem={hashedItem} key={hashedItem} />
        ))}
      </ul>
    </div>
  )
}

export default Home
