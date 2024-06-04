import { useState, useEffect } from 'react';
import axios from 'axios';
import nodemailer  from 'nodemailer';

interface IpInfoData {
    ip: string;
    city: string;
    country: string;
    // Add more properties here if needed
}

const IpInfo = () => {
    const [ipInfo, setIpInfo] = useState<IpInfoData | null>(null);

    useEffect(() => {
        axios.get('https://ipinfo.io/json')
            .then(response => {
                setIpInfo(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const sendEmail = () => {
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'your-email@gmail.com',
                pass: 'your-password'
            }
        });

        const mailOptions = {
            from: 'your-email@gmail.com',
            to: 'recipient-email@gmail.com',
            subject: 'Test Email',
            text: 'This is a test email sent from Nodemailer in React'
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    };

    return (
        <div>
            <h2>Your IP address: {ipInfo ? ipInfo?.ip : 'Loading...'}</h2>
            <h2>Your city: {ipInfo ? ipInfo?.city : 'Loading...'}</h2>
            <h2>Your country: {ipInfo ? ipInfo?.country : 'Loading...'}</h2>
            <button onClick={sendEmail}>Send Email</button>
            {/* Add more information here if needed */}
        </div>
    );
};

export default IpInfo;
