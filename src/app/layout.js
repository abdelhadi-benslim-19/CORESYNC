import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'CoreSync',
  description: 'Your comprehensive fitness tracker',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
