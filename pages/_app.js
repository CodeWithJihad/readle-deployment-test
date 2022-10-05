import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="container mx-auto transition-all" >
        <Header/>
        <Component {...pageProps} />
        <Footer/>
      </div>
    </>
  );
}

export default MyApp;
