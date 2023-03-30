// import { CaretDownOutlined } from '@ant-design/icons';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import React, { useState } from 'react';

import { Dropdown, ButtonGroup, DropdownButton, SplitButton } from 'react-bootstrap';


export const DropdownCard = ({ frontend, backend }) => {
  return (
    <div>
        <DropdownButton
            size="sm"
            title="Drop small"
            variant='outline-warning'
          >{
            ( backend === null ) ? <Dropdown.Item href={frontend} target="_blank">Frontend</Dropdown.Item>
            :
            <>
            <Dropdown.Item href={frontend} target="_blank">Frontend</Dropdown.Item>
            <Dropdown.Item href={backend} target="_blank">Backend</Dropdown.Item>
            </>
          }
            

          </DropdownButton>
   
      </div>
  )
}
