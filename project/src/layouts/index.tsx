import React from 'react';
import BasicLayoutHead from './BasicLayoutHead';
import BasicLayoutFoot from './BasicLayoutFoot';

const BasicLayout: React.FC = props => {
  const { pathname } = props.location;
  let mytemlate = '';

  switch (pathname) {
   case '/login': mytemlate = <div> {props.children} </div>; 
    break;
   default : mytemlate = <div>
      <BasicLayoutHead/>
      {props.children}
      {/* <BasicLayoutFoot/> */}
    </div>
    break;
  }

  return (
    <div>
     { mytemlate }
    </div>
  );
};

export default BasicLayout;
