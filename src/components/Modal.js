import { useState } from "react";



function Modal({setFormConfig}) {
  const [mainMemorySize, setMainMemorySize] = useState(0);
  const [wordSize, setWordSize] = useState(0);
  const [blockSize, setBlockSize] = useState(0);
  const [cacheType, setCacheType] = useState(0);
  const [replacementPolicy, setReplacementPolicy] = useState(0);
  const calculateAddressBits=(e)=>{
    e.preventDefault();
    setFormConfig({mainMemorySize:mainMemorySize,wordSize:wordSize,blockSize:blockSize,cacheType:cacheType,replacementPolicy:replacementPolicy}) 
  }

  return (
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Simulator configutation</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <form onSubmit={calculateAddressBits} >
            <div className="modal-body">
              
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Main memory size</label>
                  <input type="number" className="form-control" id="mainMemorySize" onChange={(e) => setMainMemorySize(e.target.value)}/>
                </div>
                <label htmlFor="">Word size</label>
                <select className="form-select" aria-label="Default select example" id="wordSizeSelector" onChange={(e) => setWordSize(e.target.value)}>
                  <option selected>Select a word size</option>
                  <option value="4">Words of 4 bytes</option>
                  <option value="8">Words of 8 bytes</option>
                </select>
    
                <label htmlFor="">Block size</label>
                <select className="form-select" aria-label="Default select example" id="blockSizeSelector" onChange={(e) => setBlockSize(e.target.value)}>
                  <option selected>Select a block size</option>
                  <option value="32">Blocks of 32 bytes</option>
                  <option value="64">Blocks of 64 bytes</option>
                  <option value="128">Blocks of 128 bytes</option>
                </select>
    
                <label htmlFor="">Cache type</label>
                
                <div clas="form-floating">
                  <select className="form-select" aria-label="Default select example" id="cacheTypeSelector" onChange={(e) => setCacheType(e.target.value)}>
                    <option selected>Choose the Cache type</option>
                    <option value="1">Direct</option>
                    <option value="2">2 way associative</option>
                    <option value="4">4 way associative</option>
                    <option value="8">Full associative</option>
                  </select>
                </div>
               
    
                <label htmlFor="replacementPolicySelector">Replacement policy</label>
    
                <select className="form-select" aria-label="Default select example" id="replacementPolicySelector" onChange={(e) => setReplacementPolicy(e.target.value)}>
                  <option selected>Choose replacement policy</option>
                  <option value="1">LRU</option>
                  <option value="2">FIFO</option>
                </select>
                 
              
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Start simulation</button>
            </div>
            </form>
          </div>
        </div>
      </div>
  );
}

export default Modal;