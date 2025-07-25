import { useRouter } from "next/router";
import Head from "next/head";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";
import Footer from "../components/Footer";

export default function Home() {
  const router = useRouter();
  const [isContentVisible, setIsContentVisible] = useState(false);
  // checking if first time user, by checking availability of stored username
  useEffect(() => {
    if (
      localStorage.getItem("summerx_username") &&
      localStorage.getItem("summerx_locationPermission") === "true"
    ) {
      setIsContentVisible(true);
    } else {
      router.push("/home");
    }
  });
  return (
    <>
      <Head>
        {isContentVisible ? (
          <title>SummerX - Dashboard</title>
        ) : (
          <title>SummerX</title>
        )}
        { }
        <meta name="title" content="SummerX" />

        <meta
          name="description"
          content="We are on a mission to save lives of people who suffer from heat waves, excessive heat, illness and more."
        />

        <meta name="copyright" content="Nikhil Sundriya" />

        <meta property="og:type" content="website" />

        <meta property="og:title" content="SummerX" />

        <meta
          property="og:description"
          content="We are on a mission to save lives of people who suffer from heat waves, excessive heat, illness and more."
        />

        <meta property="twitter:card" content="summary_large_image" />

        <meta property="twitter:title" content="SummerX" />

        <meta
          property="twitter:description"
          content="We are on a mission to save lives of people who suffer from heat waves, excessive heat, illness and more."
        />
        <link rel="icon" href="/logo.png" />
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-BMEHXZ1PSM"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BMEHXZ1PSM', { page_path: window.location.pathname });
            `,
          }}
        />
      </Head>
      <main className="p-4 sm:p-6 text-primary dark:text-secondary transition-all ease-in-out">
        {isContentVisible ? (
          <>
            <Header />
            <Dashboard />
            <Footer />
          </>
        ) : (
          <></>
        )}
      </main>
    </>
  );
}