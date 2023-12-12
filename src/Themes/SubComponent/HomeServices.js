import React from 'react'
import Container from '../Ui/Container'
import Title from '../Common/Title'
import rocket from '../Assets/images/rocket.svg';


function HomeServices() {

  return (
    <Container >
      <div className='mt-20 relative z-1'>
        <div className='h-10'>   <Title name={"Services"} /></div>
        <div>
        <div>
            <div className="my-8 grid lg:grid-cols-3 md:grid-cols-1 gap-6" >
                <div className="p-4 servicesbg service___  lg:col-span-1 md:col-span-1 rounded-md" >
                        <div className='main_heading_ text-3xl font-bold  mb-2'>Website</div>
                        <div className='text-white text-2xl  px-3'>Individual Price</div>
                        <div className='mb-3 px-2'> We specialize in crafting dynamic, responsive, and user-friendly websites tailored to meet your unique needs.</div>
                        <div className='flex items-center mb-2 '><span><img   loading="lazy" className='me-3' src={rocket} alt='rocket' /></span> <span>Interactive, Unique, modern, customized  design</span></div>
                        <div className='flex items-center mb-2 '><span><img   loading="lazy" className='me-3' src={rocket} alt='rocket' /></span> <span>Mobile,Tablet Responsiveness</span></div>
                        <div className='flex items-center mb-2 '><span><img   loading="lazy" className='me-3' src={rocket} alt='rocket' /></span> <span> Next js for Enhanced User Experiences</span></div>
                        <div className='flex items-center mb-2 '><span><img   loading="lazy" className='me-3' src={rocket} alt='rocket' /></span> <span>Animations & interactions </span></div>
                        <div className='flex items-center mb-2 '><span><img   loading="lazy" className='me-3' src={rocket} alt='rocket' /></span> <span> Search Engine Optimization (SEO) Excellence</span></div>
                        <div className='flex items-center mb-2 '><span><img   loading="lazy" className='me-3' src={rocket} alt='rocket' /></span> <span>Reliable and Secure</span></div>
                        <div className='flex items-center mb-2 '><span><img   loading="lazy" className='me-3' src={rocket} alt='rocket' /></span> <span> Catch-up meetings & close communication </span></div>
                        <div className='flex items-center mb-2 '><span><img   loading="lazy" className='me-3' src={rocket} alt='rocket' /></span> <span> Continuous Support and Maintenance </span></div>
                </div>
                <div className=" servicesbg service___  p-4 lg:col-span-2 md:col-span-1  rounded-md" >
                        <div className='main_heading_ text-3xl font-bold mb-2' >Web App</div>
                        <div className='text-white text-2xl  px-3'>Individual Price</div>
                        <div className='mb-3 px-3'> It&apos;s essential to emphasize features that enhance functionality, user experience, and overall performance. </div>
                        <div className='flex items-center mb-2 px-3'><span><img   loading="lazy" className='me-3' src={rocket} alt='rocket' /></span> <span>Unique, modern, customized design</span></div>
                        <div className='flex items-center mb-2 px-3'><span><img   loading="lazy" className='me-3' src={rocket} alt='rocket' /></span> <span>Responsive and Adaptive Design</span></div>
                        <div className='flex items-center mb-2 px-3'><span><img   loading="lazy" className='me-3' src={rocket} alt='rocket' /></span> <span> Optimized performance </span></div>
                        <div className='flex items-center mb-2 px-3'><span><img   loading="lazy" className='me-3' src={rocket} alt='rocket' /></span> <span>Real-Time Updates and Notifications </span></div>
                        <div className='flex items-center mb-2 px-3'><span><img   loading="lazy" className='me-3' src={rocket} alt='rocket' /></span> <span> Scalability with Node js</span></div>
                        <div className='flex items-center mb-2 px-3'><span><img   loading="lazy" className='me-3' src={rocket} alt='rocket' /></span> <span>Adaptive, scalable backend solutions </span></div>
                        <div className='flex items-center mb-2 px-3'><span><img   loading="lazy" className='me-3' src={rocket} alt='rocket' /></span> <span> Cross-Platform Compatibility </span></div>
                        <div className='flex items-center mb-2 px-3'><span><img   loading="lazy" className='me-3' src={rocket} alt='rocket' /></span> <span>Continuous Support and Maintenance  </span></div>
                        <div className='flex items-center mb-2 px-3'><span><img   loading="lazy" className='me-3' src={rocket} alt='rocket' /></span> <span> Search Engine Optimization (SEO) Excellence</span></div>
                        <div className='flex items-center mb-2 px-3'><span><img   loading="lazy" className='me-3' src={rocket} alt='rocket' /></span> <span> Continuous Support and Maintenance </span></div>
                </div>
            </div>
            <div className="my-8 grid lg:grid-cols-6 md:grid-cols-1 items-center flex justify-center" >
                <div className=" servicesbg service___  p-4 lg:col-start-2  lg:col-span-4 md:col-span-1  rounded-md " >
                        <div className='main_heading_ text-3xl font-bold  mb-2'>SEO</div>
                        <div className='text-white text-2xl  px-3'>Free</div>    
                        <div className='mb-3 px-3'>it&apos;s important to convey how your expertise can improve a client&apos;s online visibility, increase organic traffic, and enhance overall website performance. </div>
                        <div className='flex items-center mb-2 px-3'><span><img   loading="lazy" className='mx-3' src={rocket} alt='rocket' /></span> <span>Strategic Keyword Research</span></div>
                        <div className='flex items-center mb-2 px-3'><span><img   loading="lazy" className='mx-3' src={rocket} alt='rocket' /></span> <span>On-Page Optimization</span></div>
                        <div className='flex items-center mb-2 px-3'><span><img   loading="lazy" className='mx-3' src={rocket} alt='rocket' /></span> <span> Optimized performance </span></div>
                        <div className='flex items-center mb-2 px-3'><span><img   loading="lazy" className='mx-3' src={rocket} alt='rocket' /></span> <span> Technical SEO Audits</span></div>
                        <div className='flex items-center mb-2 px-3'><span><img   loading="lazy" className='mx-3' src={rocket} alt='rocket' /></span> <span> Quality Content Creation</span></div>
                        <div className='flex items-center mb-2 px-3'><span><img   loading="lazy" className='mx-3' src={rocket} alt='rocket' /></span> <span>Link Building Strategies</span></div>
                        <div className='flex items-center mb-2 px-3'><span><img   loading="lazy" className='mx-3' src={rocket} alt='rocket' /></span> <span> Conversion Rate Optimization (CRO)</span></div>
                </div>
            </div>
        </div>
        </div>
      </div>
    </Container>
  )
}

export default HomeServices;