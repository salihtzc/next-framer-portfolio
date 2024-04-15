import React from 'react';
import emailjs from "emailjs-com";

export default function Page() {

    // const sendEmail = (e) => {
    //     e.preventDefault(); // Formun normal gönderim işlemini engelle
    //
    //     emailjs.sendForm('service_7136ez8', 'template_d7z4ohn', e.target, 'y9zTtiqnoGrhLGsF8')
    //         .then((result) => {
    //             console.log(result.text);
    //             alert('Message successfully sent!');
    //             e.target.reset(); // Formu sıfırla
    //         }, (error) => {
    //             console.log(error.text);
    //             alert('Failed to send the message, please try again.');
    //         });
    // };

    return(
        <div className="body-contactpage">
            <div className="contact">
                <div className="map-contact">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d80287.60254064504!2d4.3771617323303005!3d51.03485013150687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3e59450852049%3A0x40099ab2f4d5800!2sMechelen!5e0!3m2!1snl!2sbe!4v1684923481646!5m2!1snl!2sbe"
                        style={{ border: 0 }} // Stil bilgileri nesne olarak belirtildi
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
                <div className="form">
                    <h1>Contact Me</h1>
                    <form /* onSubmit={sendEmail} */ >
                        <input type="text" id="name" name="user_name" placeholder="Name" />
                        <input type="email" id="email" name="user_email" placeholder="Email" />
                        <textarea id="message" name="user_message" placeholder="Message"></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
