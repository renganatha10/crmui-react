import React,{Component} from 'react';
import Section from './Section';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import AddSection from './../Modal/AddSection';
import { addField , addSection, reorderSection } from './../../redux/action';

class ProfileView extends Component {

    constructor(props) {
        super(props);
        this.state = {visible : false} ;
    }

    closeModal(){
        this.setState({visible : false});
    }

    openModal(){
        this.setState({visible : true});
    }

    addField(val){
        this.props.dispatch(addField(val));
    }

    addSection(val){
        this.props.dispatch(addSection(val));
    }
    redorder(target, currentTarget){
        this.props.dispatch(reorderSection({from :target , to : currentTarget}));
    }

    render() {
        const style = {
          overlay : {
            position          : 'fixed',
            top               : 0,
            left              : 0,
            right             : 0,
            bottom            : 0,
            backgroundColor   : 'rgba(1, 1, 1, 0.8)'
          },
          content : {
            position                   : 'absolute',
            top                        : '100px',
            left                       : '350px',
            right                      : '350px',
            bottom            : '100px',
            border                     : '1px solid #ccc',
            background                 : '#fff',
            overflow                   : 'scroll',
            WebkitOverflowScrolling    : 'touch',
            borderRadius               : '4px',
            outline                    : 'none',
            padding                    : '20px',
          }
        }
        const resetProfilePadding={ paddingLeft : 0, paddingRight : 0 }
        return (
            <div className="col-md-12">
                <Modal style={style}  isOpen={this.state.visible}>
                    <AddSection dropDown={this.props.section}
                    addSection={this.addSection.bind(this)}
                    onClose={this.closeModal.bind(this)}/>
                </Modal>
                <div style={resetProfilePadding} className="col-md-12 profileView">
                    <div className="mainBarHeader" >
                        <span className="profileHeading" >Profile View</span>
                        <button onClick={this.openModal.bind(this)}
                        type="button" className="profileHeaderBtn" >Add New Section</button>
                    </div>
                    <div className="col-md-12 ">
                        {this.props.section.map((item, index) => <Section id={item.id}
                            index={index}
                            reorder={this.redorder.bind(this)}
                        name={item.fieldName}  addField={this.addField.bind(this)}
                        fields={item.fields}  key={`section${index}`} /> )}
                    </div>
                </div>
            </div>
        );
    }
}

function mapToState(state){
    console.log(state)
    return{
        section : state.reducer
    }
}

function mapDispatchToState(dispatch){
    return{
        dispatch
    }
}

export default connect(mapToState,mapDispatchToState)(ProfileView)
