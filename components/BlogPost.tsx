
import React from 'react';
import type { BlogPostType } from '../types';

interface BlogPostProps {
  post: BlogPostType;
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <article className="prose prose-slate max-w-none mt-8 animate-fade-in">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 pb-2 border-b-2 border-blue-500">{post.title}</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-slate-700">Introduction</h2>
        <p className="text-slate-600 leading-relaxed">{post.introduction}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-slate-700">Main Lesson</h2>
        <p className="text-slate-600 leading-relaxed">{post.mainLesson}</p>
      </section>

      <section className="mb-6 bg-slate-50 p-4 rounded-lg">
        <h2 className="text-xl font-semibold text-slate-700 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Watch This Video
        </h2>
        <a 
          href={post.video.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
        >
          {post.video.title}
        </a>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold text-slate-700 mb-4 pb-2 border-b border-slate-300">Test Your Knowledge</h2>
        <div className="space-y-6">
          {post.quiz.map((q, index) => (
            <div key={index} className="p-4 bg-white border border-slate-200 rounded-lg shadow-sm">
              <p className="font-semibold text-slate-800 mb-3">{index + 1}. {q.question}</p>
              <ul className="space-y-2 list-none pl-0">
                {q.options.map((option, i) => (
                  <li key={i} className={`p-2 rounded-md transition-colors ${option === q.correctAnswer ? 'bg-green-100 text-green-800 font-semibold' : 'bg-slate-100 text-slate-700'}`}>
                     {option === q.correctAnswer && '✅ '}
                     {String.fromCharCode(97 + i)}) {option}
                  </li>
                ))}
              </ul>
              <div className="mt-3 text-sm font-medium text-green-700 p-2 bg-green-50 rounded-md">
                Correct Answer: {q.correctAnswer}
              </div>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
};

export default BlogPost;
