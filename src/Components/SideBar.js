import React,{Component} from 'react';
import './sideBar.css';

class SideBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      height : window.innerHeight
    };
    this.getWindowDimensions = this.getWindowDimensions.bind(this)
  }

  componentDidMount() {
    window.addEventListener('resize', this.getWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.getWindowDimensions);
  }

  getWindowDimensions(){
    this.setState({
      height: window.innerHeight
    });
  }

  render() {
    const variableHeightStyle={ height : this.state.height, overflow: 'scroll' }
    return (
        <div  style={variableHeightStyle}  className="col-md-3 border sideBar">
            <div className="sideBarHeader" >
               <span className="glyphicon glyphicon-align-justify" aria-hidden="true"></span>
               <span >Regency University CRM</span>
            </div>
            <div>
              <ul className="sideBarContent" >
                <li><span className="active" >View</span> <span className="caret"></span>
                  <ul>
                    <li><span>Profile</span> </li>
                    <li><span>Sign Up Form</span></li>
                  </ul>
                </li>
                <li><span>Properties</span></li>
                <li><span>Default Properties</span></li>
              </ul>
            </div>
        </div>
    );
  }
}

export default SideBar;
