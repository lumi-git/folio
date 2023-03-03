
import Nav from './Nav';
import Footer from './Footer';
export default function Layout({ children }) {
    return (
    <div  data-theme="retro">

        <Nav></Nav>

        <div>{children}</div>
    
        <Footer></Footer>
    </div>
    );
}