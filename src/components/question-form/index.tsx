import Button from '../button';
import QuestionBox from '../question-box';
import styles from './question-form.module.scss';

const QuestionForm = () => {
  return (
    <form className={styles.form}>
      <QuestionBox />
      <div className={styles.buttonGroup}>
        <Button variant="primary" className={styles.askButton} type="submit">
          Ask Question
        </Button>
        <Button variant="secondary" className={styles.luckyButton}>
          I'm feeling lucky
        </Button>
      </div>
    </form>
  );
};

export default QuestionForm;
