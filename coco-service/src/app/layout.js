import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'COCO Service - 专业IT咨询与系统架构优化',
  description: '提供专业IT咨询，优化系统架构，提升企业技术效率的服务平台',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}