import AppLogo from '@/assets/app-logo.png';
import Bookcover from '@/assets/bookcover.jpg';
import QuestionForm from '@/components/question-form';
import styles from './home.module.scss';

const Home = () => {
  return (
    <div className={styles.home}>
      <a
        href="https://www.amazon.com/Happiness-Hypothesis-Finding-Modern-Ancient/dp/0465028020"
        className={styles.link}
      >
        <img className={styles.bookcover} src={Bookcover} />
      </a>
      <img className={styles.logo} src={AppLogo} />
      <QuestionForm />
    </div>
  );
};

export default Home;
