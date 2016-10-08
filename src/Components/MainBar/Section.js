/* eslint-disable */
import React,{Component} from 'react';
import Field from './Field';
import FieldModal from './../Modal/Field';
import Modal from 'react-modal';
import EmptySection from './EmptySection';

class Section extends Component {

    constructor(props) {
        super(props);
        this.target = 0;
        this.currentElement = 0;
        this.state = {visible : false} ;
    }

    closeModal(){
        this.setState({visible : false});
    }

    openModal(){
        this.setState({visible : true});
    }

    onDragOver(e){
        e.preventDefault();
        this.currentElement = Number(e.currentTarget.dataset.id)
    }

    dragStart(e){
        e.dataTransfer.setData('id', Number(e.currentTarget.dataset.id));
    }

    onDrop(e){
        var id = Number(e.dataTransfer.getData('id'));
        this.props.reorder(id, this.currentElement);
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
        const totalFields = this.props.fields.length;
        const fieldContainersTemp = Math.floor(totalFields / 4);

        const fieldContainer = (totalFields % 4 === 0) ? fieldContainersTemp : fieldContainersTemp + 1;
        return (
            <div data-id={this.props.index}
                draggable="true"
                onDragStart={this.dragStart.bind(this)}
                onDrop={this.onDrop.bind(this)}
                onDragOver={this.onDragOver.bind(this)}
             className="col-md-12 activeContent profileView ">
                <Modal style={style}  isOpen={this.state.visible}>
                    <FieldModal addField={this.props.addField.bind(this)}
                    sectionName={this.props.name}
                    id={this.props.id}  onClose={this.closeModal.bind(this)}/>
                </Modal>
                <div className="sectionHeader">
                    <div>
                        <span className="sectionHeading">
                            {this.props.name}
                        </span>
                        <span className="sectionSubHeading">
                            Edit Section
                        </span>
                        <span className="sectionSubHeading">
                            Delete Section
                        </span>
                        <span className="sectionSubHeading">
                            Move Section
                        </span>
                    </div>
                    <div>
                        <button  className="leftButton" >
                            CREATE FIELD GROUPS
                        </button>
                        <button onClick={this.openModal.bind(this)} className="leftButton" >
                            ADD FIELDS
                        </button>
                    </div>
                </div>
                <div className="wholeField" >

                {
                    (fieldContainer === 0) ? <EmptySection /> :
                    Array(fieldContainer).fill(1).map((item, index) => {
                        const SubFileds = this.props.fields.filter(subItem => {
                            if(subItem.id >= (index * 4) && subItem.id <=(index * 4)+3){
                                return subItem;
                            }
                        } )
                        return <div key={`section${index}`}  className="fieldContainer" >
                        {SubFileds.map((finalitem, index2) =>
                            <Field  name={finalitem.name} key={`field${finalitem.id}`} />)}</div>
                    })
                }

                </div>
            </div>
        );
    }
}



export default Section
