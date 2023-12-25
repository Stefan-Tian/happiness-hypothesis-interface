import { useEffect, useState } from 'react';
import Button from '../button';
import styles from './answer.module.scss';

interface Props {
  answer: string;
  onAskAnother: () => void;
}

const DELAY = 30;

const Answer = ({ answer, onAskAnother }: Props) => {
  const [typedAnswer, setTypedAnswer] = useState('');
  const [isTypingCompleted, setIsTypingCompleted] = useState(false);

  useEffect(() => {
    setTypedAnswer('');

    const interval = setInterval(() => {
      setTypedAnswer((currentTyped) => {
        if (currentTyped.length < answer.length) {
          return currentTyped + answer[currentTyped.length];
        } else {
          clearInterval(interval);
          setIsTypingCompleted(true);
          return currentTyped;
        }
      });
    }, DELAY);

    return () => {
      clearInterval(interval);
    };
  }, [answer]);

  return (
    <div className={styles.container}>
      <p className={styles.answer}>
        <span className={styles.bold}>Answer:</span> {typedAnswer}
      </p>
      {isTypingCompleted && (
        <Button onClick={onAskAnother}>Ask another question</Button>
      )}
    </div>
  );
};

export default Answer;
