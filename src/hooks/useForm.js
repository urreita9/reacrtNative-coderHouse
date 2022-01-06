import {useState} from 'react';

export const useForm = (initialState = {}) => {
  const [state, setState] = useState(initialState);

  const reset = () => {
    setState(initialState);
  };

  const onChange = (value, field) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  return {...state, form: state, onChange, reset};
};
