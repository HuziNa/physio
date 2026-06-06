
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DoctorPatientFlow } from './components/DoctorPatientFlow';
import { ClinicalInsights } from './components/ClinicalInsights';
import { SpinalSpecializations } from './components/SpinalSpecializations';
import { PatientApp } from './components/PatientApp';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <DoctorPatientFlow />
        <ClinicalInsights />
        <SpinalSpecializations />
        <PatientApp />
      </main>
      <Footer />
    </>
  );
}

export default App;
