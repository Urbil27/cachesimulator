
function Modal() {
  return (
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Simulator configutation</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form action="">
                <label for="">Word size</label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Select a word size</option>
                  <option value="1">Words of 4 bytes</option>
                  <option value="2">Words of 8 bytes</option>
                </select>
    
                <label for="">Block size</label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Select a block size</option>
                  <option value="1">Blocks of 32 bytes</option>
                  <option value="2">Blocks of 64 bytes</option>
                  <option value="2">Blocks of 128 bytes</option>
                </select>
    
                <label for="">Cache type</label>
                
                <div clas="form-floating">
                  <select class="form-select" aria-label="Default select example" id="replacementPolicySelector">
                    <option selected>Choose the Cache type</option>
                    <option value="1">Direct</option>
                    <option value="2">2 way associative</option>
                    <option value="2">4 way associative</option>
                    <option value="2">Full associative</option>
                  </select>
                </div>
               
    
                <label for="replacementPolicySelector">Replacement policy</label>
    
                <select class="form-select" aria-label="Default select example">
                  <option selected>Choose replacement policy</option>
                  <option value="1">LRU</option>
                  <option value="2">FIFO</option>
                </select>
                 
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Start simulation</button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Modal;