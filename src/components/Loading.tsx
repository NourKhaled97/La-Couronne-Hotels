import { useTranslation } from 'react-i18next';

const Loading: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className='loading-container'>
      <div className='spinner-border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </div>
      <h5>{t('loading.text1')}</h5>
      <h5>{t('loading.text2')}</h5>
      <h5>{t('loading.text3')}</h5>
    </div>
  );
};

export default Loading;
