import React from 'react';
import BasicLayoutHead from './BasicLayoutHead';
import BasicLayoutFoot from './BasicLayoutFoot';

class BasicLayout extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render () {
    const { pathname } = this.props.location;
    let mytemlate = '';
  
    switch (pathname) {
     case '/login': mytemlate = <div> {this.props.children} </div>; 
      break;
     default : mytemlate = <div>
        <BasicLayoutHead/>
        {this.props.children}
        {/* <BasicLayoutFoot/> */}
      </div>
      break;
    }

  return <div>{mytemlate}</div>
  }
}

export default BasicLayout;
