import React from 'react'


class FileUpload extends React.Component {

  
  render() {
    return (
        <div>   
      <form onSubmit={this.onFormSubmit}>
        <center><h4>Text File validation</h4>
        <div className="alert alert-danger"><input type="file" /></div>
        <button type="submit">Upload</button><hr></hr>
        </center>  
      </form>
      <div className="alert alert-info"><h5>File Results : </h5></div>
      </div>
      
   )
  }
}



export default FileUpload