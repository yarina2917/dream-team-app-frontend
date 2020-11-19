import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link href={'/login'}><a>Login</a></Link>
      <Link href={'/registration'}><a>Registration</a></Link>

      <img src="/dog-fire.jpg" alt=""/>

    </div>
  )
};
