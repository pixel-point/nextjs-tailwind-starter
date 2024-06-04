import React, { useState } from 'react';

import Button from 'components/shared/button';

import ErrorIcon from './images/error.inline.svg';
import LoadingIcon from './images/loading.inline.svg';
import SuccessIcon from './images/success.inline.svg';

const getButtonProps = (buttonState) => {
  let size;
  let theme;
  let className;

  switch (buttonState) {
    case 'loading':
    case 'success':
    case 'error':
      size = 'icon';
      className = 'cursor-default pointer-events-none';
      break;
    default:
      size = 'small';
  }

  switch (buttonState) {
    case 'success':
      theme = 'green';
      break;
    case 'error':
      theme = 'pink';
      break;
    default:
      theme = 'primary-blue-filled';
  }

  return { size, theme, className };
};

const Form = () => {
  const [inputValue, setInputValue] = useState('');
  const [buttonState, setButtonState] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValue) {
      setError('This field is required');
      setButtonState('error');
      return;
    }

    setError('');
    setButtonState('loading');
    // Simulate an API call
    setTimeout(() => {
      setButtonState('success');
    }, 2000);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setButtonState('');
    setError('');
  };

  const renderButtonContent = () => {
    if (buttonState === 'loading') return <LoadingIcon className="size-[28px] animate-spin" />;
    if (buttonState === 'success') return <SuccessIcon className="size-[28px]" />;
    if (buttonState === 'error') return <ErrorIcon className="size-[28px]" />;
    return 'Free trial';
  };

  return (
    <div className="flex flex-col relative">
      <form
        className="w-full flex items-center max-w-[464px] h-[56px] bg-gradient-to-br from-[#18264A] to-[#0F1631] py-1.5 pl-6 pr-1.5 rounded-[30px] border border-[#2C427F]"
        onSubmit={handleSubmit}
      >
        <input
          value={inputValue}
          placeholder="Your business email..."
          className="bg-transparent placeholder:text-[#C8D6F2] outline-none flex-1"
          onChange={handleChange}
        />
        <Button {...getButtonProps(buttonState)}>{renderButtonContent()}</Button>
      </form>
      {error && (
        <p className="absolute -bottom-8 pl-6 text-base font-medium leading-5 text-[#f04242]">
          Email is a required field
        </p>
      )}
    </div>
  );
};

export default Form;
