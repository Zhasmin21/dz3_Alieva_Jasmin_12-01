import {Header} from "../../components/header/Header";
import {Footer} from "../../components/footer/Footer";
import {Services} from "../../components/services/Services";


function AboutPage () {
    const services = ['ux/ui', 'front-end', 'back-end', 'flutter', 'sql', 'python']
    return(
        <>
            <h2>About Page</h2>
            <Header/>
            <Services services={services}/>
            <Footer/>
        </>

    )
}
export default AboutPage;