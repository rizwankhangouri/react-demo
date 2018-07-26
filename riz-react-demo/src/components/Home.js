import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
class HomePage extends React.Component {
    constructor(props) {
        super(props);
      }
    componentDidMount() {     
    }
    
    render() {
        // const { user, users } = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
              <p>
                  This is Default page.
                </p>
                <p>
                    <Link to="/login">Login</Link>
                </p>
                <p>
                    <Link to="/register">Register</Link>
                </p>
            </div>
        );
    }
}

function mapStateToProps(state) {   
    return {
        
    };
}

export default connect(mapStateToProps)(HomePage);

