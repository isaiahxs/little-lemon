import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import './WorkInProgress.css';

export default function WorkInProgress() {
    return (
        <>
            <Nav />
            <div className='wip-container'>
                This page will show a work in progress message.
            </div>
            <Footer />
        </>
    )
}