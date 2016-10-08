import React,{Component} from 'react';
import SearchBar from './SearchBar';
import ProfileView from './ProfileView';
import './mainbar.css';

class MainBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      height : window.innerHeight,
      width : 0
    };
    this.getWindowDimensions = this.getWindowDimensions.bind(this)
  }

  componentDidMount() {
    this.setState({width : this.refs.divVal.offsetWidth})
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

      const variableHeightStyle={ height : this.state.height,
              overflow: 'scroll',
              paddingLeft:0,
              paddingRight:0,
              position :'relative' }
      const absoluteHeight={   top : window.innerHeight - 50, width : this.state.width  }
        return (
            <div ref="divVal" style={variableHeightStyle} className="col-md-9  mainDiv">
                <SearchBar />
                <ProfileView />
                <div style={absoluteHeight} className="mainbarabsolute" >
                  <button className="cancelbutton" > Cancel </button>
                  <button className="savebutton" > Save </button>
                </div>
            </div>
        );
    }
}

export default MainBar
