import { MenuUnfoldOutlined } from '@ant-design/icons';
import { Anchor, Button, Drawer } from 'antd';
import { useState } from 'react';
const { Link } = Anchor;
import logo from '../../helpers/cardImg';     


export const Navbar = () => {

  const [open, setOpen] = useState(false);
  const [targetOffset, setTargetOffset] = useState();

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
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
          <Anchor
            // targetOffset={targetOffset}
            items={[
              {
                key: 'part-1',
                href: '#about',
                title: 'Acerca de mí',
              },
              {
                key: 'part-2',
                href: '#skills',
                title: 'Habilidades',
              },
              {
                key: 'part-3',
                href: '#education',
                title: 'Estudios',
              },
              {
                key: 'part-4',
                href: '#portfolio',
                title: 'Portfolio',
              },
              {
                key: 'part-5',
                href: '#contact',
                title: 'Contacto',
              },
            ]}
          />
        </div>
        <div className="mobileVisible">
          <Button type="primary" className='btn-second' onClick={showDrawer}>
            <MenuUnfoldOutlined />
          </Button>
          <Drawer
            placement="right"
            title="Menú"
            onClose={onClose}
            open={open}
          >
            <Anchor
            // targetOffset={targetOffset}
            items={[
              {
                key: 'part-1',
                href: '#about',
                title: 'Acerca de mí',
              },
              {
                key: 'part-2',
                href: '#skills',
                title: 'Habilidades',
              },
              {
                key: 'part-3',
                href: '#education',
                title: 'Estudios',
              },
              {
                key: 'part-4',
                href: '#portfolio',
                title: 'Portfolio',
              },
              {
                key: 'part-5',
                href: '#contact',
                title: 'Contacto',
              },
            ]}
          />
          </Drawer>
        </div>
      </div>
    </div>
  )
}
