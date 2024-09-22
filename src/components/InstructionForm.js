
function InstructionForm() {
    return (
        
        <form action="" class="form-inline">
        <div class="row">
        <div class="col">
          
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">@</span>
            <input type="text" class="form-control" placeholder="Address" aria-label="Username" aria-describedby="basic-addon1"/>
          </div>

        </div>
        <div class="col">
          <select class="form-select" aria-label="Default select example">
            <option value="1">LD</option>
            <option value="2">ST</option>
          </select>
        </div>
        <div class="col">
          <button type="button" class="btn btn-outline-primary"><i class="bi bi-play"></i></button>

        </div>
      </div>
      </form>
      
    );
  }
  
  export default InstructionForm;