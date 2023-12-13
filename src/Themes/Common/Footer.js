
import Container from "../Ui/Container"
// import gmail from '../Assets/images/gmail.svg';
import linkedin from '../Assets/images/linkedin.svg';
import logo from '../Assets/images/logo.svg';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";


export default function Footer() {
    const phoneNumber = '8888198469';

    const handleCallButtonClick = () => {
        window.location.href = `tel:${phoneNumber}`;
    };
    return (
        <Container className="border-t-2 borderColor">
            <div className="py-4">
                <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-10 lg:gap30 mx-4 flex items-center">
                    <div className="col rounded-md flex flex-col items-center justify-center">
                        <div><img src={logo} alt="devitglobe logo " className="h-14 w-auto my-4" /></div>
                        <div className="tracking-wider text-justify">Facing a challenge that doesn't quite fit the mold? No worries—I'm here as your dedicated problem solver. Don't hesitate to reach out with any unique issues or specific requirements, and together, we'll find a tailored solution that suits your needs.</div>
                    </div>
                    <div className="col rounded-md flex justify-center items-center">
                        <div className="flex flex-col">
                            <div className="flex items-center gap-4">
                                <div className="" ><FaLocationDot className="h-14 w-14 bg-[#141212] p-2 rounded-full my-2 " /></div>
                                <div>Karmachari Nagar, Ahmedabad, Gujarat 380052</div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className=" cursor-pointer footerIcon" onClick={handleCallButtonClick}><FaPhoneAlt className="h-14 w-14 bg-[#141212] p-2 rounded-full my-2" /></div>
                                <div className="cursor-pointer tracking-wider" onClick={handleCallButtonClick} >+91 7719832542</div>
                            </div>
                            <div className="flex items-center gap-4 " >
                                <div className="cursor-pointer footerIcon" onClick={() => window.location = 'mailto:itsolutions@devitglobe.com'} ><CiMail className="h-14 w-14 bg-[#141212] p-2 rounded-full my-2 cursor-pointer " /></div>
                                <div className="cursor-pointer tracking-wider   " onClick={() => window.location = 'mailto:itsolutions@devitglobe.com'} >itsolutions@devitglobe.com</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-4  tracking-wider">
                    &#169;Development and Innovation in Information Technology Globe 2023.
                </div>
            </div>
        </Container>
    )
}