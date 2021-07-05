import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_zEy8p0j09MP5PrOKrcSFZ");

export const sendEmail = (name, phone) => {
    const templateParams = {
        subject: 'ЗАЦІКАВЛЕНА ОСОБА В НАВЧАННІ!!!',
        name,
        phone,
    };

    emailjs.send('service_n0g00nn', 'template_q1nnvyj', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
}