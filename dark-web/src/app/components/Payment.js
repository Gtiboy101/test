"use client";
import React from 'react';
import Header from './Header';

const Payment = () => (
	<>
		<Header />
		<main>
			<div style={{
				padding: '1rem 1.5rem',
				borderRadius: '0.5rem',
				border: '2px solid #6c59e2',
				background: '#0f2027',
				color: '#fff',
				maxWidth: '400px',
				marginTop: '1rem',
				textAlign: 'left'
			}}>
				Payment Methods:<br />
				We accept the following payment methods:<br /><br />
				• Cryptocurrencies – Monero (XMR) is widely used due to its privacy features, while Bitcoin (BTC) is also common but requires additional steps for anonymity.<br />
				• E-wallets – Some digital wallets offer partial anonymity by shielding personal details from merchants.<br />
				• Cash-by-mail – In rare cases, some vendors accept physical cash sent through the mail for purchases.<br />
				<br />
				For more details or to arrange a custom payment, please contact our support team.
			</div>
			<div className="service-oval" style={{ marginTop: '1.5rem' }}>
				Cash-by-mail<br />
				Send cash to:<br />
				<span style={{ color: '#6c59e2' }}>123 Shadow Lane, Suite 404, Nowhere City, XX 00000</span>
			</div>
			<div className="service-oval">
				Cryptocurrency<br />
				Pay with Monero (XMR) or Bitcoin (BTC):<br />
				<a href="https://fake-crypto-transfer.example.com" target="_blank" rel="noopener noreferrer" style={{ color: '#6c59e2', textDecoration: 'underline' }}>
					Go to Crypto Transfer Portal
				</a>
			</div>
			<div className="service-oval">
				E-Wallet<br />
				Use our secure e-wallet system:<br />
				<a href="https://fake-ewallet.example.com" target="_blank" rel="noopener noreferrer" style={{ color: '#6c59e2', textDecoration: 'underline' }}>
					Access E-Wallet Payment
				</a>
			</div>
			<div className="fake-ad fake-ad-left">
				🔥 Special Offer! 🔥<br />
				Get 10% off your first anonymous transaction.<br />
				<a href="https://fake-ad-link.example.com" target="_blank" rel="noopener noreferrer" style={{ color: '#6c59e2', textDecoration: 'underline' }}>
					Claim Discount
				</a>
			</div>
			<div className="fake-ad fake-ad-right">
				💡 Pro Tip!<br />
				Use Monero for maximum privacy.<br />
				<a href="https://fake-tip-link.example.com" target="_blank" rel="noopener noreferrer" style={{ color: '#6c59e2', textDecoration: 'underline' }}>
					Learn More
				</a>
			</div>
		</main>
	</>
);

export default Payment;
