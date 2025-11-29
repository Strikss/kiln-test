import { Footer } from '@/components/modules/footer';
import { Header } from '@/components/modules/header';
import { ReactQueryProvider } from '@/libs/react-query-provider';
import { MoreSection } from '@/pages/root/modules/MoreSection';
import { NftDetailSection } from '@/pages/root/modules/NftDetailSection';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <ReactQueryProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="py-20 px-24">
          <NftDetailSection />
          <MoreSection />
        </main>
        <Footer />
        <ToastContainer />
      </div>
    </ReactQueryProvider>
  );
}

export default App;
