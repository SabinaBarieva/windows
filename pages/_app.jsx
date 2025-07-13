import GoogleTag from '../components/GoogleTag';
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <GoogleTag />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
