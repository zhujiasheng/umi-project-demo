import React from 'react';
import Link from 'umi/link';
import router from 'umi/router';
import style from './BasicLayoutHead.css';
import { Button } from 'antd';

let pageList = ['page1','page2','page3','page4','page5']
const BasicLayout: React.FC = props => {
  return (
    <div>
      {
        pageList.map((it,idx) => <span className={style.spacePlr10}>
          <Link to={'/'+it} key={idx}>{it}</Link>
        </span>)
      }
      <Button onClick={handleLogout}>退出</Button>
    </div>
  );
};

function handleLogout() {
  router.push({
    pathname: "/login"
  })
}

export default BasicLayout;
