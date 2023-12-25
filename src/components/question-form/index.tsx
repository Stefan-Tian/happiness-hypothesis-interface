import useAskQuestion from '@/hooks/mutations/useAskQuestion';
import { useState } from 'react';
import Button from '../button';
import QuestionBox from '../question-box';
import styles from './question-form.module.scss';

const QuestionForm = () => {
  const { mutate: askQuestion } = useAskQuestion();
  const [question, setQuestion] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    askQuestion({ question });
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuestion(event.target.value);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <QuestionBox onChange={handleChange} value={question} />
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
