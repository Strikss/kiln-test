import { Footer } from '@/components/modules/footer';
import { Header } from '@/components/modules/header';
import { Providers } from '@/libs';

import { MoreSection } from '@/pages/root/modules/MoreSection';
import { NftDetailSection } from '@/pages/root/modules/NftDetailSection';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Providers>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="py-20 px-24">
          <NftDetailSection />
          <MoreSection />
        </main>
        <Footer />
        <ToastContainer />
      </div>
    </Providers>
  );
}

export default App;
