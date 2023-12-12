
import Container from "../Ui/Container"
// import gmail from '../Assets/images/gmail.svg';
import linkedin from '../Assets/images/linkedin.svg';
import logo from '../Assets/images/logo.svg';


export default function Footer() {
    const openLinkedInProfile = () => {
        const linkedinProfileUrl = 'https://www.linkedin.com/in/your-linkedin-profile';
        window.open(linkedinProfileUrl, '_blank');
      };
    return (
        <Container className="border-t-2 borderColor">
            <div className="flex items-center justify-between py-8">
                <div> <img src={logo} alt='devitglobe logo' className='logo'  loading="lazy" /></div>
                <div className="flex gap-4">
                    {/* <button onClick={() => window.location = 'mailto:yourmail@domain.com'}  ><img src={gmail}  loading="lazy" aria-label="Phone Number" alt="gmail" className="h-6 w-6 md:h-8 md:w-8" /></button> */}
                    {/* <button onClick={openLinkedInProfile} ><img src={linkedin} aria-label="Phone Number"  loading="lazy" alt="linkedin" className="h-6 w-6 md:h-8 md:w-8 " /></button> */}
                </div>
                <div>
                    &copy; Copyright 2023
                </div>
            </div>
        </Container>
    )
}