
export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface BlogPostType {
  title: string;
  introduction: string;
  mainLesson: string;
  video: {
    title: string;
    url: string;
  };
  quiz: QuizQuestion[];
}
