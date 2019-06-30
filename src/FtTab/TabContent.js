import React, { Component } from 'react';
import TabList from '../w2vTab/TabList';
import FileUpload from '../FtTab/actions/fileupload';
import TwoFileUpload from '../FtTab/actions/twofileupload';
import WordSim from '../FtTab/actions/wordsim';
import ParagraphSim from '../FtTab/actions/paragraphsim';
import '../App.css';

export default class TabContent extends Component {
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
                        <WordSim />
                    </div>
                    <div label="Two paragraph comparison" className="tab-content">
                        <ParagraphSim />
                    </div>
                </TabList>
                <br></br><br></br><hr></hr>
            </div>
        );
    }
}