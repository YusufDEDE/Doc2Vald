import React from 'react'
import { post } from 'axios';

class TwoFileUpload extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      file1:null,
      file2:[],
      paragraph:[],
      result:[],
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
  }


  onFormSubmit(e){
    e.preventDefault() // Stop form submit
    this.fileUpload(this.state.file1)
    .then((response)=>{
        this.setState({paragraph:response.data}) 
      //console.log(response.data);
    })
  }

  onChange(e) {
    this.setState({file1:e.target.files[0]})
  }
 
  
  fileUpload(file1){
    const url = 'http://localhost:5000/twoupload';
    const formData = new FormData();
    formData.append("file_one",file1)
    formData.append("file_two",file1)
    const config = {
        headers : {
            'content-type': 'multipart/form-data'
        }
    }
    return post(url,formData,config)
  }
  

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