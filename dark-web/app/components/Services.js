"use client";
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const services = [
	{
		title: 'Encrypted Code Hosting',
		desc: 'Users could store and share scripts securely, with self-destructing repositories.',
	},
	{
		title: 'Stealth Development Environments',
		desc: 'A hidden sandbox for coding, testing exploits, and running security audits.',
	},
	{
		title: 'Zero-Day Research Hub',
		desc: 'A private forum for discussing vulnerabilities and ethical hacking techniques.',
	},
	{
		title: 'AI-Powered Threat Detection',
		desc: 'Machine learning models analyzing code for security flaws.',
	},
	{
		title: 'Underground Coding Challenges',
		desc: 'Exclusive hacking competitions with encrypted leaderboards.',
	},
];

const Services = () => {
		const [openIndex, setOpenIndex] = useState(null);

		const toggleDesc = (idx) => {
			setOpenIndex(openIndex === idx ? null : idx);
		};

		return (
			<>
				<Header />
				<div className="">
					<main>
						<h1 className="services-header-title">Our Services</h1>
						<ul className="services-list">
							{services.map((service, idx) => (
								<li key={service.title}>
									<div className="service-oval">
										<div
											className="service-title"
											style={{ cursor: 'pointer' }}
											onClick={() => toggleDesc(idx)}
										>
											{service.title}
										</div>
										<div
											className={`service-desc${
												openIndex === idx ? ' active' : ''
											}`}
										>
											{service.desc}
										</div>
									</div>
								</li>
							))}
						</ul>
					</main>
                    <Footer />
				</div>
			</>
		);
	};

export default Services;
