import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ContactUs: React.FC = () => {
  const { t } = useTranslation();

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const mailto = 'la_couronne_hotel@hotmail.com';

  const validate = () => {
    return name.length & message.length;
  };

  return (
    <div className='contact-container w-100 hotels-card'>
      <div className='card hotel-card shadow contact-card shadow'>
        <div className='card-body'>
          <h1 className='card-title card-contact-title'>
            <strong>
              <i>{t('contactus-page.Contact Us')}</i>
            </strong>
          </h1>
          <div className='p-1 mb-4'>
            <span className='card-text contact-title'>
              {t('contactus-page.Phone')}:
            </span>
            <br />
            <span className='card-text contact-text'>+236 70 20 58 82</span>
            <br />
            <span className='card-text contact-title'>
              {t('contactus-page.e-mail')}:
            </span>
            <br />
            <span className='card-text contact-text'>{mailto}</span>
          </div>
          <div className='mt-4'>
            <form className='needs-validation'>
              <div className='form-check mb-3 mt-4'>
                <input
                  type='text'
                  className='form-input'
                  id='name'
                  value={name}
                  placeholder={`${t('contactus-page.Subject')}`}
                  required
                  onChange={(v) => setName(v.target.value)}
                />
              </div>
              <div className='form-check mb-3'>
                <textarea
                  className='form-input'
                  id='message'
                  value={message}
                  aria-label='With textarea'
                  placeholder={`${t('contactus-page.Message')}`}
                  required
                  onChange={(v) => setMessage(v.target.value)}
                ></textarea>
              </div>
              <Button type='submit' className='btn btn-primary form-button'>
                {validate() ? (
                  <Link
                    to={`mailto:la_couronne_hotel@hotmail.com?subject=${name}&body=${message}`}
                    className='submit-link'
                  >
                    {t('Send message')}
                  </Link>
                ) : (
                  <p>{t('Send message')}</p>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
