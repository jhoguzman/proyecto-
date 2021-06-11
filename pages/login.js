import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cudo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.content}>
        <main className={styles.main}>
          <img
            className={styles.img}
            src="/undraw_nature_m5ll.png"
            alt="logo"
          />
          <h1>Iniciar Sesion</h1>
          <dev className={styles.panel}>
            <input
              className={styles.input}
              type="text"
              placeholder="Usuario"
            ></input>
            <input
              className={styles.input}
              type="password"
              placeholder="Contraseña"
            ></input>
          </dev>
          <button className={styles.boton}>Aceptar</button>
          <p className={styles.title}>
            No tengo una cuenta,
            <a href="http://localhost:3000/registrar"> crea una.</a>
          </p>
        </main>
      </div>
    </div>
  );
}