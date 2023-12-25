import styles from './question-box.module.scss';

interface Props {
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
}

const QuestionBox = ({ onChange, value }: Props) => {
  return (
    <textarea
      className={styles.textarea}
      rows={3}
      placeholder="Ask your question here..."
      onChange={onChange}
      value={value}
    />
  );
};

export default QuestionBox;
