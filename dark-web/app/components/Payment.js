"use client";
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useRouter } from 'next/navigation';

const Payment = () => {
    const router = useRouter();

    const handleAdClick = (e) => {
        e.preventDefault();
        router.push('/Hacked'); 
    };

    return (
        <>
            <Header />
            <main className="payment-main">
                <div style={{
                    padding: '1rem 1.5rem',
                    borderRadius: '0.5rem',
                    border: '2px solid #6c59e2',
                    background: '#0f2027',
                    color: '#fff',
                    maxWidth: '400px',
                    textAlign: 'center'
                }}>
                    Payment Methods:<br /><br/>
                    We do not deal in traceable transactions.<br/><br/>
                    The systems we oppose thrive on control, surveillance, and compliance—so we embrace currencies that deny them their grip.<br/>

                    We accept only decentralized, unregulated forms of payment. Cryptocurrencies. Monero. Bitcoin (when properly handled). Zcash. No banks. No oversight. No ties to the failing institutions that would cage us.<br/><br/>
                    Why? Because privacy is not a privilege—it is a weapon. A shield. A means of escaping their watchful eye. Every transaction leaves a footprint, unless you know how to walk unseen.<br/><br/> Here, anonymity is not an option. It is the standard.<br/><br/>
                    In Shadow Protocol, your presence fades the moment the transaction completes. No ledgers, no identities, only encrypted exchanges beyond the reach of their systems.


                </div>
                <div className="service-oval" style={{ marginTop: '1.5rem' }}>
                    <span style={{ color: '#fff' }}>Cash-by-mail</span><br />
                    <span style={{ color: '#fff' }}>Send cash to:</span><br />
                    <span style={{ color: '#6c59e2' }}>123 Shadow Lane, Suite 404, Nowhere City, XX 00000</span>
                </div>
                <div className="service-oval">
                    <span style={{ color: '#fff' }}>
                        Cryptocurrency<br />
                        Pay with Monero (XMR) or Bitcoin (BTC):<br />
                    </span>
                    <a
                        href="https://fake-crypto-transfer.example.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#6c59e2', textDecoration: 'underline' }}
                    >
                        Go to Crypto Transfer Portal
                    </a>
                </div>
                <div className="service-oval">
                    <span style={{ color: '#fff' }}>
                        E-Wallet<br />
                        Use our secure e-wallet system:<br />
                    </span>
                    <a
                        href="https://fake-ewallet.example.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#6c59e2', textDecoration: 'underline' }}
                    >
                        Access E-Wallet Payment
                    </a>
                </div>
                <div className="fake-ad fake-ad-left">
                    🔥 Special Offer! 🔥<br />
                    Get 10% off your first anonymous transaction.<br />
                    <a
                        href="/hacked"
                        style={{ color: '#6c59e2', textDecoration: 'underline', cursor: 'pointer' }}
                        onClick={handleAdClick}
                    >
                        Claim Discount
                    </a>
                </div>
                <div className="fake-ad fake-ad-right">
                    💡 Pro Tip!<br />
                    Use Monero for maximum privacy.<br />
                    <a
                        href="/hacked"
                        style={{ color: '#6c59e2', textDecoration: 'underline', cursor: 'pointer' }}
                        onClick={handleAdClick}
                    >
                        Learn More
                    </a>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Payment;
