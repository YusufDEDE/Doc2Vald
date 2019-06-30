import React from 'react'
import { post } from 'axios';

class FileUpload extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      file:null,
      paragraph:[]
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
  }


  onFormSubmit(e){
    e.preventDefault() // Stop form submit
    this.fileUpload(this.state.file)
    .then((response)=>{
        this.setState({paragraph:response.data}) 
      //console.log(response.data);
    })
  }

  onChange(e) {
    this.setState({file:e.target.files[0]})
  }
  fileUpload(file){
    const url = 'http://localhost:5000/upload';
    const formData = new FormData();
    formData.append('file',file)
    const config = {
        headers : {
            'content-type': 'multipart/form-data'
        }
    }
    return post(url,formData,config)
  }

  render() {
    return (
        <div>   
      <form onSubmit={this.onFormSubmit}>
        <center><h4>Text File validation</h4>
        <div className="alert alert-danger"><input type="file" onChange={this.onChange} /></div>
        <button type="submit">Upload</button><hr></hr>
        </center>  
      </form>
      <div className="alert alert-info"><h5>File Results : {this.state.paragraph}</h5></div>
      </div>
      
   )
  }
}



export default FileUpload