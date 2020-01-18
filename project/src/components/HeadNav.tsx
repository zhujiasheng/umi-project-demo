import React from 'react';
import router from 'umi/router';
import { Menu } from 'antd';
const { SubMenu } = Menu;

class App extends React.Component {
  constructor (props) {
    super(props)
  }

  state = {
    current: '/page1',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });

    router.push({
      pathname:e.key
    })
  };

  setSubMenu = e => {
    const { child } = e;
    console.log(e,'ee')
    return <SubMenu
      title={
        <span className="submenu-title-wrapper">
          {e.title}
        </span>
      }
      key={e.path}
      >
        <Menu.ItemGroup title="Item 1">
         {child.map(it => <Menu.Item key={it.path}>{it.name}</Menu.Item>)}
        </Menu.ItemGroup>
    </SubMenu>
  } 

  setMenuItem = e => {
    console.log(e,'e')
    // if (Array.isArray(e.child) && e.child.length) {
    //   return this.setSubMenu(e);
    // }
    return <Menu.Item key={e.path}>{e.name}</Menu.Item>
  }

  menuIsArray = (e = []) => {
    return Array.isArray(e.child) && e.child.length;
  }

  setMenu = e => {
    let { pageList } = this.props;
    console.log(pageList,'pageList');
    
    return <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
      {
        pageList.map((it,idx) => this.setMenuItem(it))
      }
       <SubMenu
          title={
            <span className="submenu-title-wrapper">
              page
            </span>
          }
        >
         <Menu.Item key="/page8">page8</Menu.Item>
         <Menu.Item key="/page9">page9</Menu.Item>
        </SubMenu>
    </Menu>
  }

  render() {
    return this.setMenu();
  }
}

export default App;
