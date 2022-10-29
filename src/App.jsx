import { Layout } from 'antd';
import { Education } from './section/Education';
import { Portfolio } from './section/Portfolio';
import { About } from './section/About';
import { FooterComponent } from './ui/footer/FooterComponent';
import { Navbar } from './ui/navbar/Navbar';
import { HeaderSection } from './section/Header';
import { Skills } from './section/Skills';
import { useEffect, useState } from 'react';
import { Loading } from './components/Loading';

const { Header, Footer, Content } = Layout;

function App() {

  const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 4000);
    }, []);

  return (
    <Layout>
      
      {
        loading ? 
                ( <Loading />)
                :
                (
                  <div>
                    <Header>
                      <Navbar />
                    </Header>
                    <Content>
                      <HeaderSection />
                      <About />
                      <Skills />
                      <Education />
                      <Portfolio />
                    </Content>
                    <Footer>
                      <FooterComponent />
                    </Footer>
                  </div>
                )
      }
      
      
    </Layout>
  )
}

export default App
