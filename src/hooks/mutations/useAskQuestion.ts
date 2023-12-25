import questionService from '@/services/question';
import { useMutation } from 'react-query';

const useAskQuestion = () => {
  const mutate = useMutation({
    mutationFn: questionService.ask,
  });

  return mutate;
};

export default useAskQuestion;
