
import React, { useState, useCallback } from 'react';
import { generateBlogPost } from './services/geminiService';
import type { BlogPostType } from './types';
import TopicInput from './components/TopicInput';
import BlogPost from './components/BlogPost';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import Header from './components/Header';
import Welcome from './components/Welcome';

const App: React.FC = () => {
  const [topic, setTopic] = useState<string>('');
  const [blogPost, setBlogPost] = useState<BlogPostType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGeneratePost = useCallback(async () => {
    if (!topic.trim()) {
      setError('Please enter a topic.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setBlogPost(null);

    try {
      const post = await generateBlogPost(topic);
      setBlogPost(post);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'An unknown error occurred. Please try again.'
      );
    } finally {
      setIsLoading(false);
    }
  }, [topic]);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans">
      <Header />
      <main className="container mx-auto p-4 md:p-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10 transition-all duration-300">
          <TopicInput
            topic={topic}
            setTopic={setTopic}
            onGenerate={handleGeneratePost}
            isLoading={isLoading}
          />

          {isLoading && <LoadingSpinner />}
          {error && <ErrorMessage message={error} />}
          
          {blogPost ? (
            <BlogPost post={blogPost} />
          ) : (
            !isLoading && !error && <Welcome />
          )}
        </div>
        <footer className="text-center mt-8 text-slate-500 text-sm">
            <p>Powered by Gemini API. Built with React & Tailwind CSS.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
