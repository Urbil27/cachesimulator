
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../node_modules/bootstrap/dist/js/bootstrap'
import Modal from './components/Modal';
import Nav from './components/Nav';
import InstructionForm from './components/InstructionForm';
import Footer from './components/Footer';
import Table from './components/Table';
import AddressBitCounter from './components/AddressBitCounter';
import { useState } from 'react';
function App() {
  const [formConfig,setFormConfig] = useState({mainMemorySize:0,wordSize:0,blockSize:0,cacheType:0,replacementPolicy:0})
  return (
    <>
    <Modal setFormConfig={setFormConfig}/>
    <Nav/>
    <div className="container mt-4">
      <AddressBitCounter formConfig={formConfig}/>
      <InstructionForm/>
      <Table formConfig={formConfig}/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
