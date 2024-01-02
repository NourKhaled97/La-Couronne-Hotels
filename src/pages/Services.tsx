import React from 'react';
import { Col, Row } from 'react-bootstrap';
import LazyImage from '../components/LazyImage';
import View from '../images/view.png';
import View2 from '../images/view 2.png';
import ToiletPaper from '../images/toilet paper.png';
import Bidet from '../images/bidet.png';
import BathOrShower from '../images/bath or shower.png';
import FreeToiletries from '../images/Free toiletries.png';
import DryCleaning from '../images/Dry cleaning.png';
import CurrencyExchange from '../images/Currency exchange.png';
import Security from '../images/24h security.png';
import { useTranslation } from 'react-i18next';

const Services: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      {/* titles, section 1 */}
      <div className='section-3 section-3-image'>
        <h1 className='services-title'>
          <strong>{t('Services')}</strong>
        </h1>
        <Row className='experience-list'>
          <Col className='col-md-3 col-sm-6 col-12 col-li'>
            <a
              href='#bathroom'
              className='service-li experience-li services-li'
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#bathroom')?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'center',
                });
              }}
            >
              <i className='fa-solid fa-bath fa-3x service-icon'></i>
              <p className='experience-name '>{t('services-page.bathroom')}</p>
            </a>
          </Col>
          <Col className='col-md-3 col-sm-6 col-12 col-li'>
            <a
              href='#services'
              className='experience-li service-li services-li'
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#services')?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'center',
                });
              }}
            >
              <i className='fa-solid fa-list-check fa-3x service-icon'></i>
              <p className='experience-name'> {t('Services')}</p>
            </a>
          </Col>
          <Col className='col-md-3 col-sm-6 col-12 col-li'>
            <a
              href='#safetySecurity'
              className=' service-li experience-li services-li'
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#safetySecurity')?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'center',
                });
              }}
            >
              <i className='fa-solid fa-lock fa-3x service-icon'></i>
              <p className='experience-name'>
                {t('services-page.Safety & security')}
              </p>
            </a>
          </Col>
          <Col className='col-md-3 col-sm-6 col-12 col-li'>
            <a
              href='#view'
              className=' service-li experience-li services-li'
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#view')?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'center',
                });
              }}
            >
              <LazyImage src={View} width='60' height='60' alt={'View'} />
              <p className='experience-name'>{t('services-page.View')}</p>
            </a>
          </Col>
        </Row>
      </div>

      {/* show the services */}
      <div className='container-2'>
        <div id='bathroom' className='w-100'>
          <div className='container-title'>
            <i className='fa-solid fa-bath fa-3x footer-icon'></i>
            <h1 className='title'>
              <strong>{t('services-page.bathroom')}</strong>
            </h1>
          </div>
          <Row className='services-list'>
            <Col className='col-md-3 col-sm-6 col-12 col-li'>
              <div className='bathroom-li experience-li services-li'>
                <LazyImage
                  src={ToiletPaper}
                  width='60'
                  height='60'
                  alt={'ToiletPaper'}
                />
                <p className='experience-name bathroom-name '>
                  {t('services-page.toilet paper')}
                </p>
              </div>
            </Col>
            <Col className='col-md-3 col-sm-6 col-12 col-li'>
              <div className='bathroom-li experience-li services-li'>
                <LazyImage src={Bidet} width='60' height='60' alt={'Bidet'} />
                <p className='experience-name bathroom-name '>
                  {t('services-page.bidet')}
                </p>
              </div>
            </Col>
            <Col className='col-md-3 col-sm-6 col-12 col-li'>
              <div className='bathroom-li experience-li services-li'>
                <LazyImage
                  src={BathOrShower}
                  width='60'
                  height='60'
                  alt={'BathOrShower'}
                />
                <p className='experience-name bathroom-name '>
                  {t('services-page.Bath or shower')}
                </p>
              </div>
            </Col>
            <Col className='col-md-3 col-sm-6 col-12 col-li'>
              <div className='bathroom-li experience-li services-li'>
                <LazyImage
                  src={FreeToiletries}
                  width='60'
                  height='60'
                  alt={'FreeToiletries'}
                />
                <p className='experience-name bathroom-name '>
                  {t('services-page.Free toiletries')}
                </p>
              </div>
            </Col>
          </Row>
        </div>

        <div id='services' className='w-100'>
          <div className='container-title'>
            <i className='fa-solid fa-list-check fa-3x footer-icon'></i>
            <h1 className='title-services'>
              <strong> {t('Services')}</strong>
            </h1>
          </div>
          <Row className='services-list'>
            <Col className='col-md-3 col-sm-6 col-12 col-li'>
              <div className='servi-li experience-li services-li'>
                <LazyImage
                  src={DryCleaning}
                  width='60'
                  height='60'
                  alt={'DryCleaning'}
                />
                <p className='experience-name servi-name'>
                  {t('services-page.Dry cleaning')}
                </p>
              </div>
            </Col>
            <Col className='col-md-3 col-sm-6 col-12 col-li'>
              <div className='servi-li experience-li services-li'>
                <LazyImage
                  src={CurrencyExchange}
                  width='60'
                  height='60'
                  alt={'CurrencyExchange'}
                />
                <p className='experience-name servi-name'>
                  {t('services-page.Currency exchange')}
                </p>
              </div>
            </Col>
            <Col className='col-md-3 col-sm-6 col-12 col-li'>
              <div className='servi-li experience-li services-li'>
                <i className='fa-solid fa-broom fa-3x servi-name'></i>
                <p className='experience-name servi-name'>
                  {t('services-page.Daily house keeping')}
                </p>
              </div>
            </Col>
            <Col
              className='col-md-3 col-sm-6 col-12 d-none d-md-block'
              style={{
                cursor: 'auto',
              }}
            ></Col>
          </Row>
        </div>

        <div id='safetySecurity' className='w-100'>
          <div className='container-title'>
            <i className='fa-solid fa-lock fa-3x footer-icon'></i>
            <h1 className='title'>
              <strong>{t('services-page.Safety & security')}</strong>
            </h1>
          </div>
          <Row className='services-list'>
            <Col className='col-md-3 col-sm-6 col-12 col-li'>
              <div className='safety-li experience-li services-li'>
                <LazyImage
                  src={Security}
                  width='60'
                  height='60'
                  alt={'Security'}
                />
                <p className='experience-name safety-name'>
                  {t('services-page.24h security')}
                </p>
              </div>
            </Col>
          </Row>
        </div>

        <div id='view' className='w-100'>
          <div className='container-title'>
            <LazyImage src={View2} width='50' height='50' alt={'Bathroom'} />
            <h1 className='title'>
              <strong>{t('services-page.View')}</strong>
            </h1>
          </div>
          <Row className='services-list'>
            <Col className='col-md-3 col-sm-6 col-12 col-li'>
              <div className='view-li experience-li services-li'>
                <i className='fa-regular fa-eye fa-3x view-name'></i>
                <p className='experience-name view-name'>
                  {t('services-page.beautiful view')}
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Services;
