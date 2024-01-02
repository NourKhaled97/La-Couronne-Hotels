import React from 'react';
import { useTranslation } from 'react-i18next';

const Booking: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className='booking-container w-100 hotels-card'>
      <div className='card hotel-card shadow booking-card shadow'>
        <div className='card-body'>
          <form>
            <div className='mb-2 d-md-flex'>
              <input
                type='text'
                className='form-input mb-md-0 mb-2'
                id='name'
                placeholder={`${t('contactus-page.Name')}`}
              />
              <input
                type='email'
                className='form-input'
                id='emil'
                placeholder={`${t('contactus-page.E-mail')}`}
              />
            </div>
            <div className='mb-2'>
              <input
                type='text'
                className='form-input'
                id='company'
                placeholder={`${t('booking-page.Company Name')}`}
              />
            </div>
            <div className='mb-2 d-md-flex'>
              <select
                className='form-select mb-md-0 mb-2'
                aria-label='Default select example'
              >
                <option value='La Couronne'>La Couronne</option>
                <option value='City Blanche'>City Blanche</option>
                <option value='La Couronne Suits'>La Couronne Suits</option>
              </select>
              <input
                type='number'
                className='form-input'
                id='numberClient'
                placeholder={`${t('booking-page.Adults')}`}
                min={0}
              />
            </div>
            <div className='mb-4 mt-4 d-md-flex'>
              <div className='w-md-50 w-100'>
                <label className='form-label contact-text'>
                  {t('booking-page.Check In')}
                </label>
                <input type='date' className='form-input' id='checkIn' />
              </div>
              <div className='w-md-50 w-100'>
                <label className='form-label contact-text'>
                  {t('booking-page.Check Out')}
                </label>
                <input type='date' className='form-input' id='checkOut' />
              </div>
            </div>
            <button type='submit' className='btn btn-primary form-button'>
              {t('Send message')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
