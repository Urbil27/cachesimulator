
function saveSettings(){

}
function Modal() {
  return (
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Simulator configutation</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form action="">
                <label htmlFor="">Word size</label>
                <select className="form-select" aria-label="Default select example">
                  <option selected>Select a word size</option>
                  <option value="1">Words of 4 bytes</option>
                  <option value="2">Words of 8 bytes</option>
                </select>
    
                <label htmlFor="">Block size</label>
                <select className="form-select" aria-label="Default select example">
                  <option selected>Select a block size</option>
                  <option value="1">Blocks of 32 bytes</option>
                  <option value="2">Blocks of 64 bytes</option>
                  <option value="2">Blocks of 128 bytes</option>
                </select>
    
                <label htmlFor="">Cache type</label>
                
                <div clas="form-floating">
                  <select className="form-select" aria-label="Default select example" id="replacementPolicySelector">
                    <option selected>Choose the Cache type</option>
                    <option value="1">Direct</option>
                    <option value="2">2 way associative</option>
                    <option value="2">4 way associative</option>
                    <option value="2">Full associative</option>
                  </select>
                </div>
               
    
                <label htmlFor="replacementPolicySelector">Replacement policy</label>
    
                <select className="form-select" aria-label="Default select example">
                  <option selected>Choose replacement policy</option>
                  <option value="1">LRU</option>
                  <option value="2">FIFO</option>
                </select>
                 
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={saveSettings}>Start simulation</button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Modal;