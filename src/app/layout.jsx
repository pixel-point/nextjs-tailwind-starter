import Footer from 'components/shared/footer';
import Header from 'components/shared/header';

import 'styles/global.css';

// eslint-disable-next-line react/prop-types
const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <Header />
      <main>{children}</main>
      <Footer />
    </body>
  </html>
);

export default RootLayout;
