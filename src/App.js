
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
function App() {
  return (
    <>
    <Modal/>
    <Nav/>
    <div className="container mt-4">
      <AddressBitCounter/>
      <InstructionForm/>
      <Table/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
