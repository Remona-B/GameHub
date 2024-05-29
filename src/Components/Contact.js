import React, { useEffect } from 'react';
import './Contact.css';

const Contact = () => {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "//js.hsforms.net/forms/embed/v2.js";
        script.type = 'text/javascript';
        script.charset = 'utf-8';
        script.async = true;

        const initializeForm = () => {
            if (window.hbspt) {
                window.hbspt.forms.create({
                    region: "na1",
                    portalId: "46308215",
                    formId: "d7ea58d2-d018-4132-a55b-841e40effe25",
                    target: '#hubspotForm'
                });
            }
        };

        script.onload = initializeForm;

        document.body.appendChild(script);

        // Clean up on unmount
        return () => {
            const formContainer = document.getElementById('hubspotForm');
            if (formContainer) {
                formContainer.innerHTML = '';
            }
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="message-us-box">
            <header className="message-us-header">
                <h2>Message Us</h2>
            </header>
            <section className="message-us-content">
                <div id="hubspotForm"></div>
            </section>
        </div>
    );
};

export default Contact;
