import { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "../styles/globals.css";
import Playbar from "../components/Playbar";

export default function App({ Component, pageProps }) {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <>
      <Head>
        <title>Spotify Clone</title>
        <meta name="description" content="Spotify clone, using a Deezer API" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="bg-spotify-lightgray min-h-screen text-gray-300">
        <Header setShowSideBar={setShowSideBar} />
        <Sidebar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
        <main>
          <Component {...pageProps} />
        </main>
        <Playbar/>
      </div>
    </>
  );
}
