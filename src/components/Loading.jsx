import { Spin } from 'antd';

export const Loading = () => {

  return (
    <div className="example">
        <h2>Cargando...</h2>
        <Spin size="large"/>
    </div>   
  )
}
