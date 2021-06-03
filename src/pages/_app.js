import 'styles/globals.css';

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  // eslint-disable-next-line react/jsx-filename-extension
  return <Component {...pageProps} />;
}

export default MyApp;
