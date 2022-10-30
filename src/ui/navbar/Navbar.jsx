import { MenuUnfoldOutlined } from '@ant-design/icons';
import { Anchor, Button, Drawer } from 'antd';
import { useState } from 'react';
const { Link } = Anchor;
import logo from '../../helpers/cardImg';     


export const Navbar = () => {

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className="container-fluid">
      <div className="header">
      <a href="#header">
        <div className="logo">
          <img src={logo.logo} alt="logo Walter Daniel Carrizo" />
        </div>
      </a>
        <div className="mobileHidden">
          <Anchor targetOffset="65">
            <Link href="#about" title="Acerca de mí" />
            <Link href="#skills" title="Habilidades" />
            <Link href="#education" title="Estudios" />
            <Link href="#portfolio" title="Portfolio" />   
            <Link href="#contact" title="Contacto" />   
          </Anchor>
        </div>
        <div className="mobileVisible">
          <Button type="primary" className='btn-second' onClick={showDrawer}>
            <MenuUnfoldOutlined />
          </Button>
          <Drawer
            placement="right"
            title="Menú"
            onClose={onClose}
            visible={visible}
          >
            <Anchor targetOffset="65">
              <Link href="#about" title="Acerca de mí" />
              <Link href="#skills" title="Habilidades" />
              <Link href="#education" title="Estudios" />
              <Link href="#portfolio" title="Portfolio" />
              <Link href="#contact" title="Contacto" />   
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  )
}
