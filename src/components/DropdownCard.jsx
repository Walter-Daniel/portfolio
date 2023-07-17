import { Dropdown,  DropdownButton } from 'react-bootstrap';


export const DropdownCard = ({ frontend, backend }) => {
  return (
    <div>
        <DropdownButton
            size="sm"
            title="Repositorio"
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
