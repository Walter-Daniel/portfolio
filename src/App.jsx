import { Layout } from 'antd';
import { Education } from './section/Education';
import { Portfolio } from './section/Portfolio';
import { About } from './section/About';
import { FooterComponent } from './ui/footer/FooterComponent';
import { Navbar } from './ui/navbar/Navbar';
import { HeaderSection } from './section/Header';
import { Skills } from './section/Skills';

const { Header, Footer, Content } = Layout;

function App() {

  return (
    <Layout>
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
    </Layout>
  )
}

export default App
