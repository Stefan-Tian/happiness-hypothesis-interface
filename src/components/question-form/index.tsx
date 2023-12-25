import { getRandom } from '@/helpers/random';
import useAskQuestion from '@/hooks/mutations/useAskQuestion';
import { useEffect, useState } from 'react';
import Answer from '../answer';
import Button from '../button';
import QuestionBox from '../question-box';
import { questions } from './constants';
import styles from './question-form.module.scss';

const QuestionForm = () => {
  const { mutate: askQuestion, data, isLoading } = useAskQuestion();
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const cannotAsk = !question || isLoading;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    askQuestion({ question });
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuestion(event.target.value);
  };

  const handleAskAnother = () => {
    setAnswer('');
    setQuestion('');
  };

  const handleAskRandomQuestion = () => {
    const randomQuestion = getRandom(questions);
    setQuestion(randomQuestion);

    askQuestion({ question: randomQuestion });
  };

  useEffect(() => {
    if (data) {
      setAnswer(data.answer);
    }
  }, [data]);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <QuestionBox onChange={handleChange} value={question} />
      {answer ? (
        <Answer answer={answer} onAskAnother={handleAskAnother} />
      ) : (
        <div className={styles.buttonGroup}>
          <Button
            variant="primary"
            className={styles.askButton}
            type="submit"
            disabled={cannotAsk}
          >
            {isLoading ? 'Asking...' : 'Ask Question'}
          </Button>
          <Button
            variant="secondary"
            className={styles.luckyButton}
            disabled={isLoading}
            onClick={handleAskRandomQuestion}
          >
            I'm feeling lucky
          </Button>
        </div>
      )}
    </form>
  );
};

export default QuestionForm;
