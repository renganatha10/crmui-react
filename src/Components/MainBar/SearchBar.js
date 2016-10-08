import React,{Component} from 'react';

class SearchBar extends Component {
    render() {
        return (
            <div className="col-md-12 searchBox">
                <div className="relativeDiv" >
                    <input type='text' className="form-control-modified"  />
                    <span className="searchIcon" >
                        <span className="glyphicon glyphicon-search"></span>
                    </span>
                    <span className="leftTextIcon">
                        <span>Regency Admin</span>
                        <span className="caret"></span>
                    </span>
                </div>
            </div>
        );
    }
}

export default SearchBar
