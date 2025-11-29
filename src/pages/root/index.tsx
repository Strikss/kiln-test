import { Footer } from '@/components/modules/footer';
import { Header } from '@/components/modules/header';
import { NftDetailSection } from '@/pages/root/modules/NftDetailSection';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="py-20 px-24">
        <NftDetailSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
