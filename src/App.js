
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../node_modules/bootstrap/dist/js/bootstrap'
import Modal from './components/Modal';
import Nav from './components/Nav';
import InstructionForm from './components/InstructionForm';
import Footer from './components/Footer';
import Table from './components/Table';
function App() {
  return (
    <>
    <Modal/>
    <Nav/>
    <div class="container mt-4">
      <InstructionForm/>
      <Table/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
