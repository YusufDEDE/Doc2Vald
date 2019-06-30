import React from 'react'


class ParagraphSim extends React.Component {

  
  render() {
    return (
        <div>
        <div className="alert alert-danger" role="alert">
        Max 250 Character!
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Source Paragraph</label>
                <input type="text" ref="Source" className="form-control"  aria-describedby="emailHelp" placeholder="Enter Source Paragraph" maxLength="250"/>
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputPassword1">Target Paragraph</label>
                <input type="text" ref="Target" className="form-control" placeholder=" Enter Target Paragraph" maxLength="250"/>
        </div>
        <div className="alert alert-success" role="alert">
        <center>Similarity Result : </center>
        </div>
        </div>
      
   )
  }
}



export default ParagraphSim


