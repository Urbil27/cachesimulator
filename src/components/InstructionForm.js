function emulate(){
  //TODO
}
function InstructionForm() {
    return (
        
        <form action="" className="form-inline">
        <div className="row">
        <div className="col">
          
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">@</span>
            <input type="text" className="form-control" placeholder="Address" aria-label="Username" aria-describedby="basic-addon1"/>
          </div>

        </div>
        <div className="col">
          <select className="form-select" aria-label="Default select example">
            <option value="1">LD</option>
            <option value="2">ST</option>
          </select>
        </div>
        <div className="col">
          <button type="button" className="btn btn-outline-primary"><i className="bi bi-play" onclick={emulate}></i></button>

        </div>
      </div>
      </form>
      
    );
  }
  
  export default InstructionForm;