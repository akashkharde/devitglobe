import Title from "../Common/Title";
import Container from "../Ui/Container";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import pro1 from '../Assets/images/pro11.avif'
import pro2 from '../Assets/images/pro2.png'
import pro3 from '../Assets/images/pro3.png'
import pro4 from '../Assets/images/pro4.png'
import Button from "../Ui/Button";
import th_pro1 from '../Assets/images/th_pro1.jpg';
import th_pro2 from '../Assets/images/th_pro2.jpg';
import th_pro3 from '../Assets/images/th_pro3.jpg';
import th_pro4 from '../Assets/images/th_pro4.jpg';
import { useState } from "react";


export default function HomeWork() {
 
  const [note , setNote] = useState(false)
  const images = [
    {
      original: pro3,
      thumbnail:th_pro3,
      name: 'Pixibytez',
      type: "Website",
      status: 'Completed',
      Address: "https://www.pixiebytez.com/",
      msg :false
    },
    {
      original:pro4,
      thumbnail:th_pro4,
      name: 'Weather App',
      type: "Web App",
      status: 'Completed',
      Address: "https://weartherapp.vercel.app/",
      msg :false
    },

    {
      original:pro2,
      thumbnail:th_pro2,
      name: 'Pinnac Enginnering Solutions',
      type: "Website",
      status: 'Under Construction',
      Address: "https://calm-kashata-1ac3ba.netlify.app/",
      msg :false
    },
    {
      original: pro1,
      thumbnail: th_pro1,
      name: 'BestBet Builder',
      type: "Web App",
      status: 'Under Construction',
      Address: "https://bestbetsbuilder.bettorlogic.com/",
      msg :true
    },

  ];

  const handlePrjectAddress = (address , msg) => {
    if (address && msg === false) {
        window.open(address, '_blank');
      }else{
        setNote(true)
        setTimeout(() => {
          setNote(false)
        },6000)
      }
}


  const renderItem = (item) => {
    return (
      <div className="image-gallery-item">
        <img src={item.original} alt={item.name} className="projectImg" />
        <div className="projectInfo">
            <div className="projectInfodiv">
              <div className="h-8 md:h-10">{item.name}</div>
              <div className="h-8 md:h-10">{item.type}</div>
              <div className="h-8 md:h-10">{item.status}</div>
              <div className="h-8 md:h-10 lg:h-20">
                <Button onClick={() => handlePrjectAddress(item.Address , item.msg)}  size="small">
                  View Project
                </Button>
              </div>
              <div className="h-10">
              {note && item.msg && (
                    <div className="text-[#ff0000] whitespace-normal leading-normal">Due to client privacy and policy, project details are not publicly displayed. We appreciate your understanding.</div>
                  )}
              </div>
            </div>
        </div>
      </div>
    );
  };
  return (
    <Container >
      <div className="">
        <div className="mt-20">
          <Title name={'Projects'} />
        </div>
        <div className="mt-2 lg:mx-12 md:mx-1 mb-14" >
          <ImageGallery
            items={images}
            showBullets={false}
            showIndex={false}
            showThumbnails={true}
            lazyLoad={false}
            showPlayButton={false}
            showNav={true}
            onClick={images._id}
            showFullscreenButton={false}
            originalHeight ={200}
            thumbnailPosition={"top"}
            renderItem={renderItem}
          />
        </div>
      </div>
    </Container>
  )
}