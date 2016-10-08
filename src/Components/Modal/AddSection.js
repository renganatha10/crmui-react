import React,{Component} from 'react';
import './modal.css';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

export default class AddSection extends Component {

    constructor(props) {
        super(props);
        this.state =  {
            name : '',
            propertyType :'Choose Property',
            id : '',
            position:'',
        }
    }

    logChange(val){
          this.setState({propertyType : val.value, id : val.value});
    }

    onPositionChange(val){
        this.setState({position : val.value});
    }

    onChangeText(){
        this.setState({name: this.refs.fieldName.value})
    }

    onSubmit(){
        this.props.addSection({...this.state})
        this.props.onClose();
    }

    render() {
        const options = this.props.dropDown.map(item =>
            ({value : item.id, label : item.fieldName}));

        const positions = [
            { value: 'ABOVE', label: 'ABOVE' },
            { value: 'BELOW', label: 'BELOW' }]
        return (
            <div>
                <div className="modalHeader" >
                    <span>Add Section</span>
                </div>
                <div style={{marginTop : 10}} className="container-fluid" >
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Section Name</label>
                        <input ref="fieldName" onChange={this.onChangeText.bind(this)}
                                    type="text" className="form-control"
                                    id="exampleInputPassword1" placeholder="Section Name" />
                    </div>

                    <div className="col-md-12" >
                        <Select className="col-md-6"
                            name="form-field-name"
                            options={positions}
                            value={this.state.position}
                            onChange={this.onPositionChange.bind(this)}
                        />
                        <Select  className="col-md-6"
                            name="form-field-name"
                            options={options}
                            value={this.state.propertyType}
                            onChange={this.logChange.bind(this)}
                        />
                    </div>

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
