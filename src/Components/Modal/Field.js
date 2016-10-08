import React,{Component} from 'react';
import './modal.css';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

export default class Field extends Component {

    constructor(props) {
        super(props);
        this.state =  {
            name : '',
            propertyType :'Choose Property'
        }
    }

    logChange(val){
          this.setState({propertyType : val.value})
    }

    onChangeText(){
        this.setState({name: this.refs.fieldName.value})
    }

    onSubmit(){
        this.props.addField({...this.state, sectionId : this.props.id})
        this.props.onClose();
    }

    render() {
        var options = [
            { value: 'Hostel', label: 'Hostel' },
            { value: 'Medical Residency', label: 'Medical Residency' },
            { value: 'Board Certification', label: 'Board Certification' },
            { value: 'IP Location', label: 'IP Location' },
            { value: 'Browser Agent', label: 'Browser Agent' },
            { value: 'Contact Address', label: 'Contact Address' }
        ];

        return (
            <div>
                <div className="modalHeader" >
                    <span>Add Fields</span>
                    <span>{ ` (${this.props.sectionName})` }</span>
                </div>
                <div style={{marginTop : 10}} className="container-fluid" >
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Field Name</label>
                        <input onChange={this.onChangeText.bind(this)}
                            value={this.state.fieldName}
                            ref="fieldName"
                            type="text" className="form-control"
                                    id="exampleInputPassword1" placeholder="Password" />
                    </div>


                <Select
                    name="form-field-name"
                    value={this.state.propertyType}
                    options={options}
                    onChange={this.logChange.bind(this)}
                />

                <div style={{marginTop : 30}} className="col-md-12" >
                 <div className="row" >
                     <div className="col-md-6" >
                         <button onClick={this.props.onClose.bind(this)}
                               className="cancelbuttonModal" > Cancel </button>
                     </div>
                     <div className="col-md-6" >
                        <button  onClick={this.onSubmit.bind(this)}
                           className="savebuttonModal" > Save </button>
                     </div>
                 </div>
                 </div>
                </div>
            </div>
        );
    }
}
