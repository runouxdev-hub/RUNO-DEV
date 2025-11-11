
import React from 'react';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <div className="my-8 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg flex items-center" role="alert">
     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <div>
        <p className="font-bold">An error occurred</p>
        <p>{message}</p>
    </div>
  </div>
);

export default ErrorMessage;
