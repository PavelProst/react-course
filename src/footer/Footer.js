import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <footer className='section footer-classic context-dark bg-im'
                    style={{
                        background: '#2d3245',
                        color: '#fff',
                    }}>
                <p>Copy Right</p>
            </footer>
        )
    }
}

export default Footer;