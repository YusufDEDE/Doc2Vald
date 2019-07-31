import React, { Component } from 'react';
import TabList from '../w2vTab/TabList';
import Contacts from '../components/contacts';
import FileUpload from '../w2vTab/fileUpload';
import TwoFileUpload from '../w2vTab/twofileUpload';


import '../App.css';


const API = 'http://51.15.126.100:5010/?word=';


export default class TabContent extends Component {
    
        
      


    componentWillMount(){
        // Called the first time the component is loaded right before the component is added to the page
        this.search();
        this.paragraph();
        
     
    }
      
    updateSearch(){
        this.paragraph(this.refs.Source.value,this.refs.Target.value);
    }
    wordSeach(){
        this.search(this.refs.query.value);
    }
    

    
        
    render() {
        return (
            <div className="container up">
                <TabList>
                    <div label="Text file validation" className="tab-content">
                        <div className="alert alert-success" role="alert">
                            <FileUpload/>      
                        </div>
                    
                    </div>
                    <div label="Two text file comprasion" className="tab-content">
                        <TwoFileUpload />
                    </div>
                    <div label="Word similarity test" className="tab-content">
                        <center>
                        <h4>Please Word!</h4>
                        <input ref="query" onChange={ (e) => { this.wordSeach(); } } type="text" maxLength="30" />
                        <hr></hr>
                        <Contacts contacts={this.state.contacts}/> 
                        </center>
                    </div>
                    <div label="Two paragraph comparison" className="tab-content">
                            <div className="alert alert-danger" role="alert">
                                Max 250 Character!
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Source Paragraph</label>
                                <input type="text" ref="Source"  onChange={ (e) => { this.updateSearch(); } } className="form-control"  aria-describedby="emailHelp" placeholder="Enter Source Paragraph" maxLength="250"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Target Paragraph</label>
                                <input type="text" ref="Target" onChange={ (e) => { this.updateSearch(); } } className="form-control" placeholder=" Enter Target Paragraph" maxLength="250"/>
                            </div>
                            <div className="alert alert-success" role="alert">
                            <center>Similarity Result : {this.state.paragraph}</center>
                            </div>
                            <h1></h1>
                    </div>
                </TabList>
                <br></br><br></br><hr></hr>
            </div>
        );
    }
    state = {
        contacts: [],
        paragraph:[],
        
    };

    

    search(query = "word") {

        fetch(API+query)
            .then(res => res.json())
            .then((data) => {
                this.setState({ contacts:data })
            })
            .catch(console.log)
    }
    paragraph(Source ="win", Target="dows"){
        fetch("http://51.15.126.100:5010/pr?source_text="+Source+"&target_text="+Target)
            .then(res => res.json())
            .then((data)=>{
              this.setState({paragraph:data})  
            })
            .catch(console.log)
    }
    

}