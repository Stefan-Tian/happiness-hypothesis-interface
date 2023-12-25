interface Props {
  answer: string;
}

const Answer = ({ answer }: Props) => {
  return (
    <div className="answer">
      <p>{answer}</p>
    </div>
  );
};

export default Answer;
