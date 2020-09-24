// import App from 'next/app'
import "../assets/sass/style.scss";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div className="site">
      <Navigation />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
      <style jsx>
        {`
          .site {
            display: flex;
            min-height: 100vh;
            flex-direction: column;
          }
          main {
            flex: 1;
          }
        `}
      </style>
    </div>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
