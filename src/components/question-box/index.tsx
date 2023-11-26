import styles from './question-box.module.scss';

const QuestionBox = () => {
  return (
    <textarea
      className={styles.textarea}
      rows={3}
      placeholder="What is happiness?"
    />
  );
};

export default QuestionBox;
