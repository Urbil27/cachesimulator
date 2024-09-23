//Inicializamos las variables
var tagBits = 0;
var setBits = 0;
var wordBits = 0;
var byteBits = 0;
function AddressBitCounter() {
    return (
        <>

        <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">Address interpreter</th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th scope="col">Tag</th>
            <th scope="col">Set</th>
            <th scope="col">Word</th>
            <th scope="col">Byte</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" id="tag">{tagBits}</th>
            <td id="set">{setBits}</td>
            <td id="word">{wordBits}</td>
            <td id="">{byteBits}</td>
          </tr>
         </tbody>
         
      </table>
      
      </>
      
    );
  }
  
  export default AddressBitCounter;