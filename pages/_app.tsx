import { AppProps } from "next/app";
import Head from "next/head";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Nav } from "../components/Nav";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Hörspiel2021</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Header />
      </header>
      <nav>
        <Nav />
      </nav>
      <Component {...pageProps} />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default MyApp;
