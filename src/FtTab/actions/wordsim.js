import React from 'react'


class WordSim extends React.Component {

  
  render() {
    return (
        <center>
        <h4>Please Word!</h4>
        <input ref="query" onChange={ (e) => { this.wordSeach(); } } type="text" maxLength="30" />
        <hr></hr>
        
        </center>
      
   )
  }
}



export default WordSim