import React from 'react';
import router from 'umi/router';
import style from './BasicLayoutHead.css';
import { Button } from 'antd';
import HeadNav from '@/components/headNav';

const pageList = [], pageKey = {
  1:"通用",
  2:"布局",
  3:"导航",
  4:"数据录入",
  5:"数据展示",
  6:"反馈",
  7:"其他"
}, page = '/page';

for(let i = 1; i < 5; i++){
  let obj = {};
  obj = {
    name: pageKey[i],
    path: page + i
  };
  pageList.push(obj);
}

pageList.push({
  name: pageKey[5],
  path: page+'5',
  child:[
    {name:'page5',path:page+'5'},
    {name:'page6',path:page+'6'}
  ]
});

const BasicLayout: React.FC = props => {
  return (
    <div>
      <HeadNav pageList={pageList}/>
      <div className={style.loginOut}><Button onClick={handleLogout}>退出</Button></div>
    </div>
  );
};

function handleLogout() {
  router.push({
    pathname: "/login"
  })
}

export default BasicLayout;
