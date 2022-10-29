import { Spin } from 'antd';
import { useEffect, useState } from 'react';
import App from '../App';

export const Loading = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 18000);
    }, []);

  return (
    
        
           <div className="example">
                <h2>Cargando...</h2>
                <Spin size="large"/>
            </div>
               
                       
                            
          
        
    
  )
}
