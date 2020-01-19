import React from 'react';
import router from 'umi/router';
import { Menu } from 'antd';
const { SubMenu } = Menu;

class App extends React.Component {
  constructor (props:any) {
    super(props)
  }

  state = {
    current: '/page1',
  };

  handleClick = (e:Object) => {
    this.setState({
      current: e.key
    });

    router.push({
      pathname:e.key
    })
  };

  setMenuItem = (e:Object) => {
    if (Array.isArray(e.child) && e.child.length) {
      return <SubMenu key={e.path} title={
              <span className="submenu-title-wrapper">{e.name} </span>}>
        { e.child.map(it => <Menu.Item key={it.path}>{it.name}</Menu.Item>) }
      </SubMenu>;
    }
    return <Menu.Item key={e.path}>{e.name}</Menu.Item>
  }

  menuIsArray = (e = []) => {
    return Array.isArray(e.child) && e.child.length;
  }

  setMenu = (e:Object) => {
    let { pageList } = this.props;
    return <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
      { pageList.map((it,idx) => this.setMenuItem(it)) }
    </Menu>
  }

  render() {
    return this.setMenu();
  }
}

export default App;
