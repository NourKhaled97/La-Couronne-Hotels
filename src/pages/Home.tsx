import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Row } from 'react-bootstrap';
import LazyImage from '../components/LazyImage';
import CityBlancheLogo from '../images/logo city blanche.png';
import LaCouronneLogo from '../images/logo la couronne.png';
import LaCouronneRestaurant from '../images/la couronne restaurant1.jpg';
import BlanchePool from '../images/ctiy blanche pool1.jpg';
import Gym from '../images/gym.jpg';
import LaundryRecepetion from '../images/la couronne recepetion1.jpg';
import Restaurent from '../images/la couronne suites restauant1.jpg';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const { t } = useTranslation();

  const [backImage, setBackImage] = useState(BlanchePool);

  const onExperienceClick = (clickedClassName: string) => {
    // change the backgroundImage
    setBackImage(
      clickedClassName === 'fitness'
        ? Gym
        : clickedClassName === 'swimming'
        ? BlanchePool
        : clickedClassName === 'restaurant'
        ? Restaurent
        : LaundryRecepetion
    );

    // highlight the clicked button
    const addExperiences = document.querySelectorAll('.experience-li');
    addExperiences.forEach((experience) => {
      experience.classList.remove('clicked-experience-li');
    });
    const currentExperience = document.querySelector(`.${clickedClassName}`);
    currentExperience?.classList.add('clicked-experience-li');
  };

  return (
    <div>
      {/* titles, section 1 */}
      <div className='section-1 '>
        <div className='col-lg-6 col-md-8'>
          <h1 className='home-title'>
            <strong>{t('home-page.section1-title')}</strong>
          </h1>
          <p className='home-subtitle'>{t('home-page.section1-subtitle')}</p>
          <Link className='read-more-button' to={'/about'}>
            {t('read more')}
          </Link>
        </div>
      </div>

      {/* hotels, section 2 */}
      <div className='section-2'>
        <h3 className='section-2-title'>{t('home-page.section2-title')}</h3>
        <Row className='section-2-row'>
          <Col className='col-sm-4 col-12 hotel-col'>
            <h5 className='hotel-col-title'>La Couronne Suits</h5>
            <LazyImage
              src={LaCouronneLogo}
              width='150'
              height='130'
              alt={'LaCouronneLogo'}
            />
          </Col>
          <Col className='col-sm-4 col-12 hotel-col hotel-city'>
            <h5 className='hotel-col-title'>La Couronne Suits</h5>
            <LazyImage
              src={CityBlancheLogo}
              width='150'
              height='130'
              alt={'CityBlancheLogo'}
            />
          </Col>
          <Col className='col-sm-4 col-12 hotel-col'>
            <h5 className='hotel-col-title'>La Couronne Suits</h5>
            <LazyImage
              src={LaCouronneLogo}
              width='150'
              height='130'
              alt={'LaCouronneLogo'}
            />
          </Col>
        </Row>
      </div>

      {/* slides, section 3 */}
      <div
        className='section-3'
        style={{
          backgroundImage: `linear-gradient(
          rgba(78, 136, 81, 0.5),
          rgba(78, 136, 81, 0.5)
        ),
        url('${backImage}')`,
        }}
      >
        <h1 className='w-80'>{t('home-page.section3-title')}</h1>
        <Row className='experience-list'>
          <Col
            className='col-md-3 col-sm-6 col-12 col-li'
            onClick={() => onExperienceClick('fitness')}
          >
            <div className='experience-li fitness'>
              <i className='fa-solid fa-dumbbell fa-3x service-icon'></i>
              <p className='experience-name'>
                {t('home-page.section3-Fitness centre')}
              </p>
            </div>
          </Col>
          <Col
            className='col-md-3 col-sm-6 col-12 col-li'
            onClick={() => onExperienceClick('swimming')}
          >
            <div className='clicked-experience-li experience-li swimming'>
              <i className='fa-solid fa-water-ladder fa-3x service-icon'></i>
              <p className='experience-name'>
                {t('home-page.section3-Indoor swimming pool')}
              </p>
            </div>
          </Col>
          <Col
            className='col-md-3 col-sm-6 col-12 col-li'
            onClick={() => onExperienceClick('restaurant')}
          >
            <div className=' experience-li restaurant'>
              <i className='fa-solid fa-utensils fa-3x service-icon'></i>
              <p className='experience-name'>
                {t('home-page.section3-Restaurant')}
              </p>
            </div>
          </Col>
          <Col
            className='col-md-3 col-sm-6 col-12 col-li'
            onClick={() => onExperienceClick('laundry')}
          >
            <div className='experience-li laundry'>
              <i className='fa-solid fa-book fa-3x service-icon'></i>
              <p className='experience-name'>
                {t('home-page.section3-Laundry')}
              </p>
            </div>
          </Col>
        </Row>
      </div>

      {/* reviews, section 4 */}
      <div className='section-4'>
        <Row className='section-4-titles'>
          <Col className='col-md-6 col-12'>
            <h1 className=' section-4-title'>
              {t('home-page.section4-title')}
            </h1>
          </Col>
          <Col className='col-md-6 col-12'>
            <h4 className='section-4-subtitle'>
              {t('home-page.section4-subtitle')}
            </h4>
          </Col>
        </Row>
        <div className='reviews'>
          <LazyImage
            src={LaCouronneRestaurant}
            width='200'
            height='250'
            alt={'LaCouronneRestaurant'}
          />
          <div className='reviews-titles'>
            <h2 className='review-text'>
              {t('home-page.section4-reviews-title')}
            </h2>
            <h3 className='review-name'>Nermin</h3>
          </div>
        </div>
      </div>

      {/* services, section 5 */}
      <Row className='services-row'>
        <Col className='col-sm-3 col-12'>
          <h4 className='services-read-title'>
            {t('home-page.sectio5-title')}
          </h4>
          <hr className='services-separator' />
          <Link className='read-more-button' to={'/services'}>
            {t('read more')}
          </Link>
        </Col>
        <Col className='col-sm-9 col-12 home-services-list'>
          <div className='home-service-li'>
            <i className='fa-solid fa-wifi fa-3x service-icon'></i>
            <p className='service-name'>{t('home-page.sectio5-free wifi')}</p>
          </div>
          <div className='home-service-li'>
            <i className='fa-solid fa-van-shuttle fa-3x service-icon'></i>
            <p className='service-name'>
              {t('home-page.sectio5-Airport shuttle')}
            </p>
          </div>
          <div className='home-service-li'>
            <i className='fa-solid fa-square-parking fa-3x service-icon'></i>
            <p className='service-name'>
              {t('home-page.sectio5-Free parking')}
            </p>
          </div>
          <div className='home-service-li'>
            <i className='fa-solid fa-snowflake fa-3x service-icon'></i>
            <p className='service-name'>
              {t('home-page.sectio5-Air conditioning')}
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
