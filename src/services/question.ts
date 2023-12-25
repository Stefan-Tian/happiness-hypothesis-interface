import axiosInstance from './base';

interface AskPayload {
  question: string;
}

interface AskResponse {
  question: string;
  answer: string;
  id: number;
}

export const ask = async (payload: AskPayload): Promise<AskResponse> => {
  const response = await axiosInstance.post('/ask', payload);
  console.warn(response.data);

  return response.data;
};

const questionService = {
  ask,
};

export default questionService;
