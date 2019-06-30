import React from 'react'

class TwoFileUpload extends React.Component {

  
  render() {
    return (
        
        <div className="alert alert-success" role="alert">   
        <form action="http://127.0.0.1:5000/twoupload" method="POST" encType="multipart/form-data">
         <center>
             <h5>Source Text File</h5>
             <div className="alert alert-danger"><input type="file" name="file_one" /></div><hr></hr>
             <h5>Target Text File</h5>
            <div className="alert alert-danger"><input type="file" name="file_two" /></div><hr></hr>
            <div className="alert alert-danger"><input type="submit"/></div>
         </center>
      </form>
      
      </div>
   )
  }
}



export default TwoFileUpload