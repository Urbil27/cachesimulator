
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../node_modules/bootstrap/dist/js/bootstrap'
import Modal from './components/Modal';
import Nav from './components/Nav';
import InstructionForm from './components/InstructionForm';
import Table from './components/Table';
import AddressBitCounter from './components/AddressBitCounter';
import { useState } from 'react';
function App() {
  const [formConfig,setFormConfig] = useState({mainMemorySize:0,wordSize:0,blockSize:0,cacheType:0,replacementPolicy:0});
  const [instruction,emulateInstruction]= useState({address:0,instruction:0});
  const [instructionList, setInstructionList] = useState([]);
  const addInstruction = (newInstruction)=>{
    setInstructionList([...instructionList,newInstruction])
  }
  return (
    <>
    <Modal setFormConfig={setFormConfig}/>
    <Nav/>
    <div className="container mt-4">
      <AddressBitCounter formConfig={formConfig}/>
      <InstructionForm addInstruction={addInstruction}/>
      <Table formConfig={formConfig} instructionList={instructionList}/>
    </div>
    </>
  );
}

export default App;
