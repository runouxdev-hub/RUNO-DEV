
import React from 'react';

const Welcome: React.FC = () => {
  return (
    <div className="text-center mt-12 p-6 border-2 border-dashed border-slate-300 rounded-lg bg-slate-50">
      <h2 className="text-2xl font-semibold text-slate-700 mb-3">Welcome to LearnFlow!</h2>
      <p className="text-slate-600 max-w-2xl mx-auto mb-4">
        Enter a topic above to generate a concise, educational blog post complete with a video and a quiz to test your knowledge.
      </p>
      <p className="text-slate-500 text-sm">
        Example topics: <span className="font-semibold">Artificial Intelligence, The Roman Empire, The Science of Sleep, Quantum Computing</span>
      </p>
    </div>
  );
};

export default Welcome;
