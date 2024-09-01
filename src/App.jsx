import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import blurbg from './assets/bg.svg';
import './App.css';
import {
	BroadIndustry,
	acquision,
	arrow,
	bg,
	bigLogo,
	darkBorder,
	experiencedLeadership,
	house,
	investment,
	lightBorder,
	logo,
	revenueStream,
	strategicTech,
	targetBusiness,
	whiteDynamics,
	martech,
	msp,
	b2b,
	trust,
	datadriven,
	Agility,
	dataCentricity,
	Efficiency,
	Integrity,
} from './assets/icons';

import bgVid from './assets/bgVid.mp4';

import Footer from './components/Footer';
import { useEffect } from 'react';
function App() {
	const [count, setCount] = useState(0);
	const services = [
		{
			name: (
				<>
					MARTECH/<br />DIGITAL MARKETING
				</>
			),
		},
		{
			name: (
				<>
					MSP & IT  <br /> SERVICES
				</>
			),
		},
		{
			name: (
				<>
					B2B <br /> SAAS
				</>
			),
		},
	];
	const whyUs = [
		{
			desc: 'Led by industry veterans with a proven track record in acquisitions, technology integration, and business scaling.',
			title: 'Experienced <br />Leadership',
			icon: experiencedLeadership,
		},

		{
			desc: 'Commitment to transparency and ethical business practices.',
			title: 'Trustworthy <br />Stewardship',
			icon: trust,
		},
		{
			desc: 'Systematic approach to acquisitions and growth.',
			title: 'Model <br />Scaling',
			icon: strategicTech,
		},
		{
			desc: 'Integration of cutting-edge technologies and exclusive IP from government agencies.',
			title: 'Data Driven <br /> Selection Process',
			icon: datadriven,
		},
	];
	const strategie = [
		{
			desc: 'Acquisition Using a proprietary Al-powered process we identify companies that meet specific financial criteria and are missing key operational and innovation elements that will enable exponential growth.',
			id: 1,
			title: 'Acquisition & <br />Integration:',
		},
		{
			id: 3,
			mobId: 2,
			desc: 'Optimization We delve deep into the acquired businesses to identify and address opportunities in marketing, operations, and technology. We implement emerging technologies such as automation, Al, data analytics, and customer engagement to drive performance.',
			title: 'Technology & IP <br />Enhancement:',
		},
		{
			id: 2,
			mobId: 3,
			desc: 'Aggregate We leverage synergies with portfolio companies to create a consolidated enterprise that enhances the value of the asset in preparation for exit. We focus on a holistic integration including tech, operations and culture.',
			title: 'Strategic Tech <br />Integration',
		},
		{
			id: 4,
			desc: "Our strategy continues beyond growth. We structure and nurture these businesses with a clear exit strategy in mind.",
			title: 'Plan & Position <br />for Exit:',
		},
	];
	const oportunity = [
		{
			icon: Integrity,
			desc: 'We uphold moral and ethical principles, building trust and credibility, and creating value for all stakeholders in a responsible and sustainable manner. It is central to our culture and is the foundation of our organization.',
			title: 'Integrity',
		},
		{
			icon: Efficiency,
			desc: 'We optimize resources, processes, and performance to achieve strategic objectives, maximize value creation, and maintain a competitive edge in the marketplace. ',
			title: 'Efficiency',
		},
		{
			icon: Agility,
			desc: 'We embrace change, foster collaboration, and continuously adapt to thrive in dynamic business environments.',
			title: 'Agility',
		},
		{
			icon: dataCentricity,
			desc: 'We treat data as a strategic asset and leverage it to drive insights, inform decisions, and optimize processes across all aspects of the business.',
			title: 'Data-Centricity',
		},
	];
	const Highlights = [
		{
			icon: investment,
			desc: 'Businesses with at least $300k in EBITDA and a maximum price of $20 million. market is ripe for revitalization.',
			title: 'Investment Criteria:',
		},
		{
			icon: revenueStream,
			desc: 'Anticipated revenue from the sale of enhanced businesses, ongoing operations, technology integration services, strategic partnerships, financial investments, and ancillary services.',
			title: 'Revenue Streams:',
		},
	];
	const playAllVideos = () => {
		const videos = document.querySelectorAll('video');
		for (let i = 0; i < videos.length; i++) {
			const video = videos[i];
			video.muted = true; // Force mute the video
			video.addEventListener('ended', () => {
				video.currentTime = 0; // Reset the video to the beginning
				video.play(); // Pause the video when it ends
			});

			video.play();
		}
	};

	useEffect(() => {
		playAllVideos();
	}, []);
	return (
		<div className='overflow-x-hidden'>
			<nav className='z-30 relative items-center h-[50px] lg:h-[80px] inset-0 flex justify-end lg:px-[70px] px-[30px] bg-[#070B32]'>
				<div>
					<a
						href='mailto:deals@scaleupventures.co'
						className='text-[17.39px]  uppercase text-white font-[500] leading-[26px] '>
						Contact Us
					</a>
				</div>
			</nav>
			<section className='relative'>
				<div className='absolute  bottom-0 w-full h-full '>
					<video
						src={bgVid}
						className='w-full  object-right h-full pt-[80vh] md:pt-[50vh]  lg:pt-[80vh] bottom-0 object-cover'
						loop
						autoPlay
						playsInline
						muted></video>
				</div>
				<div
					style={{
						background:
							'linear-gradient(0deg, #2C3372 0%, rgba(25, 30, 76, 0.00) 100%)',
					}}
					className='h-[120%] w-full absolute top-0 left-0'></div>
				<div className='absolute  z-20  h-[1000px] inset-0 '>
					<div className='bg-[#251D42] absolute blur-[40px] lg:blur-[122px] w-[140vw] -ml-[20vw] -mt-[40vh] h-[140vh] lg:h-[180vh]'></div>
					<div className='w-[650px] aspect-square ml-[10%] mt-[10%] blur-[182px] absolute bg-[#192193] rounded-full'>
						{' '}
					</div>
				</div>
				<div className='relative z-30 pb-[10vh] lg:pb-[60vh] space-y-[100px] lg:space-y-[233px]  text-white pt-[100px] lg:pt-[200px] padding '>
					<div className='space-y-[40px]'>
						<div>{logo}</div>
						<p className='text-[27px] lg:text-[90px] max-w-[692px] tracking-[-1.26px] lg:leading-[90px] font-[100]'>
							Potential Realized
						</p>
						<p className='font-[400] text-[14px] lg:text-[18px] max-w-[909px]  leading-[26px] lg:leading-[40px] tracking-[0.36px]'>
						ScaleUp Ventures specializes in transforming businesses by integrating strategic technologies, innovative IP, and operational efficiencies. Our approach generates economies of scale, increased cash flow, and enterprise value.
						</p>
						<button
							onClick={() =>
								window.open('mailto:deals@scaleupventures.co', '_blank')
							}
							className='py-[20px] lg:py-[24px] w-[281px] border-t-2 border-b-2 flex justify-between items-center'>
							<p className='text-[14px] lg:text-[17.39px] leading-[26px] tracking-[2.435px] font-[700]'>
								CONTACT US
							</p>
							{arrow}
						</button>
					</div>
					<div className='space-y-[70px]'>
						<div className='space-y-[40px]'>
							<p className='text-center font-[700] text-[30px] lg:text-[35px] tracking-[-1.05px] leading-[46px] mx-auto max-w-[560px]'>
								Sectors We Target{' '}
							</p>
							<p className='text-[18px] font-[400] text-white tracking-[0.36px] leading-[40px] text-center mx-auto max-w-[794px]'>
							ScaleUp Ventures targets cash-flowing companies in 3 key verticals that are primed for growth as we enter a new era of digital transformation and disruption.
							</p>
						</div>
						<div className='lg:flex space-y-[30px] lg:space-y-0 w-full justify-around'>
								<div
									className='flex items-end space-x-10  lg:space-x-0 lg:space-y-[26px] lg:flex-col lg:items-center'>
									<div className=''>{martech}</div>
									<p className=' lg:text-center  lg:mt-0 mt-10'> MARCHTECH/<br/> DIGITAL MARKETING</p>
								</div>
								<div
									className='flex items-end space-x-10  lg:space-x-0 lg:space-y-[26px] lg:flex-col lg:items-center'>
									<div className=''>{msp}</div>
									<p className=' lg:text-center  lg:mt-0 mt-10'> MSP & IT /<br/> SERVICES</p>
								</div>
								<div
									className='flex items-end space-x-10  lg:space-x-0 lg:space-y-[26px] lg:flex-col lg:items-center'>
									<div className=''>{b2b}</div>
									<p className=' lg:text-center  lg:mt-0 mt-10'> B2B /<br/> SAAS</p>
								</div>
						</div>
					</div>
				</div>
			</section>
			<section className='px-[30px] relative bg-[#2E3573]  lg:px-[100px]  py-[30px] lg:py-[60px] text-[#D5D5D5]'>
				<div className='space-y-[30px] lg:text-start text-center lg:-translate-y-[40vh]  lg:py-[90px] py-[60px] px-[20px] lg:px-[90px]  bg-[#251D42]  lg:space-y-[55px]'>
					<p className='text-[27px] lg:text-[35px] font-[700] lg:leading-[46px] tracking-[-1.05px] text-center'>
						Why Partner with ScaleUp Ventures?
					</p>
					<div className='grid  lg:grid-cols-2 gap-x-[200px] gap-y-[30px] lg:gap-y-[70px]'>
						{whyUs.map((el, index) => (
							<div
								key={index}
								className='flex lg:space-x-[35px]'>
								<div className='lg:block hidden'>{darkBorder}</div>
								<div className='space-y-[25px]'>
									<div className='lg:mx-0 mx-auto w-fit'>{el.icon}</div>
									<p
										dangerouslySetInnerHTML={{ __html: el.title }}
										className='font-bold text-[17.39px] leading-[26px] '></p>
									<p className='font-[500] text-[15] leading-[26px] '>
										{el.desc}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className='space-y-[30px]  lg:-translate-y-[40vh]  lg:py-[90px] py-[60px] px-[20px] lg:px-[90px]  bg-[#1D2AF5]  lg:space-y-[55px]'>
					<p className='text-[27px] lg:text-[35px] font-[700] lg:leading-[46px] tracking-[-1.05px]'>
						Strategy & Approach:{' '}
					</p>
					<div className='w-[164px] border-2 border-[#1D2AF5]'></div>
					<div className='flex flex-col lg:flex-row gap-x-[10px] gap-y-[30px] lg:gap-y-[70px]'>
					{strategie.map((el, index) => (
							<div
								key={index}
								className={`flex space-x-[15px] lg:space-x-[25px] ${
									index === 0 ? 'lg:-ml-[20px]' : 'lg:ml-[20px]'
								}`}>
								<p className='text-[47.39px] lg:block hidden lg:w-fit w-[100px] font-bold'>
									{el.id}
								</p>
								<p className='text-[47.39px] lg:hidden  lg:w-fit w-[100px] font-bold'>
									{el.mobId ? el.mobId : el.id}
								</p>
								<div>{lightBorder}</div>
								<div className={`space-y-[25px] max-w-[539px] `}>
									<p
										dangerouslySetInnerHTML={{ __html: el.title }}
										className='font-bold text-[17.39px] leading-[26px] '></p>
									<p className='font-[500] text-[15] leading-[26px] '>
										{el.desc}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className='space-y-[30px] py-[50px] lg:py-[77px] text-white text-center  lg:-translate-y-[40vh] lg:space-y-[55px]'>
					<div className='w-fit mx-auto'>{bigLogo}</div>
				</div>
				<div className='space-y-[30px]  text-white text-center  lg:-translate-y-[40vh] lg:space-y-[55px]'>
					<p className='text-[27px] lg:text-[35px] font-[700] lg:leading-[46px] tracking-[-1.05px]'>
					Our Values{' '}
					</p>

					<div className='grid  lg:grid-cols-1 gap-x-[90px] gap-y-[30px] lg:gap-y-[70px] justify-items-center'>

						{oportunity.map((el, index) => (
		<div
		className={`space-y-[25px] max-w-[800px]`}
		
		key={index}
	  >
		
		<div className='flex items-center'>
			
		  <div className='w-fit mr-5'>{el.icon}</div>
		  <div>
			<p
			  dangerouslySetInnerHTML={{ __html: el.title }}
			  className='font-[500] text-[15px] leading-[26px] text-start'
			></p>
			<p className='font-[500] text-[15px] leading-[26px] text-start'>
			  {el.desc}
			</p>
		  </div>
		</div>
		<hr className="border-t-1 border-gray-200" />
	  </div>
						))}
					</div>

					
				</div>
			
			</section>

			<Footer></Footer>
		</div>
	);
}

export default App;
