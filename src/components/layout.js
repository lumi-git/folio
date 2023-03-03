
import Nav from './nav';
import Footer from './footer';
export default function Layout({ children }) {
    return (
    <div  data-theme="retro">

        <Nav></Nav>

        <div>{children}</div>
    
        <Footer></Footer>
    </div>
    );
}