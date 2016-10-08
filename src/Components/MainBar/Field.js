import React,{Component} from 'react';
import './Field.css';
class Field extends Component {

    render() {
        return (
          <div className="field" >
              <span>{this.props.name}</span>
              <span>
                  <span className="glyphicon glyphicon-move" >

                  </span>
                  <span className="glyphicon glyphicon-remove" >

                  </span>
              </span>
          </div>
        );
    }
}
export default Field
