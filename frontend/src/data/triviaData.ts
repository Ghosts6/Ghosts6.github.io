
export interface TriviaQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

export const triviaQuestions: TriviaQuestion[] = [
  {
    question: "What does API stand for?",
    options: ["Application Programming Interface", "Automated Programming Interface", "Application Protocol Interface", "Algorithmic Programming Interface"],
    correctAnswer: "Application Programming Interface",
  },
  {
    question: "Which of the following is a statically typed language?",
    options: ["Python", "JavaScript", "TypeScript", "Ruby"],
    correctAnswer: "TypeScript",
  },
  {
    question: "What is the time complexity of a binary search algorithm?",
    options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
    correctAnswer: "O(log n)",
  },
  {
    question: "Which company developed the React library?",
    options: ["Google", "Microsoft", "Facebook", "Twitter"],
    correctAnswer: "Facebook",
  },
  {
    question: "What does 'git clone' do?",
    options: ["Creates a new branch", "Deletes a repository", "Copies a remote repository to your local machine", "Merges two branches"],
    correctAnswer: "Copies a remote repository to your local machine",
  },
  {
    question: "Which of these is NOT a relational database?",
    options: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
    correctAnswer: "MongoDB",
  },
  {
    question: "What is the purpose of a CSS preprocessor like Sass?",
    options: ["To make CSS run faster", "To add features like variables, nesting, and mixins to CSS", "To automatically write CSS for you", "To compress CSS files"],
    correctAnswer: "To add features like variables, nesting, and mixins to CSS",
  },
  {
    question: "In object-oriented programming, what is polymorphism?",
    options: ["The ability of an object to take on many forms", "The process of hiding implementation details", "The ability to create a new class from an existing class", "The process of bundling data and methods together"],
    correctAnswer: "The ability of an object to take on many forms",
  },
  {
    question: "What is the default port for HTTPS?",
    options: ["80", "8080", "443", "22"],
    correctAnswer: "443",
  },
  {
    question: "Which hook is used to perform side effects in a React functional component?",
    options: ["useState", "useEffect", "useContext", "useReducer"],
    correctAnswer: "useEffect",
  },
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language"],
    correctAnswer: "Hyper Text Markup Language",
  },
  {
    question: "Which of the following is a version control system?",
    options: ["Docker", "Git", "Jenkins", "npm"],
    correctAnswer: "Git",
  },
  {
    question: "What is the CSS property used to change the text color of an element?",
    options: ["font-color", "text-color", "color", "font-style"],
    correctAnswer: "color",
  },
  {
    question: "Which of the following is a popular Python web framework?",
    options: ["Flask", "React", "Angular", "Vue"],
    correctAnswer: "Flask",
  },
  {
    question: "What is the purpose of the `alt` attribute in an `<img>` tag?",
    options: ["To provide alternative text for an image if it cannot be displayed", "To set the alignment of the image", "To add a title to the image", "To link the image to another page"],
    correctAnswer: "To provide alternative text for an image if it cannot be displayed",
  },
  {
    question: "What is a 'closure' in JavaScript?",
    options: ["A function that has access to its own scope, the scope of the outer function, and the global scope", "A way to close a web browser window", "A type of variable that cannot be changed", "A built-in method for arrays"],
    correctAnswer: "A function that has access to its own scope, the scope of the outer function, and the global scope",
  },
  {
    question: "Which HTTP status code means 'Not Found'?",
    options: ["200", "404", "500", "301"],
    correctAnswer: "404",
  },
  {
    question: "What is the main purpose of a constructor in a class?",
    options: ["To destroy an object", "To initialize an object's state", "To create a copy of an object", "To perform a calculation"],
    correctAnswer: "To initialize an object's state",
  },
  {
    question: "Which of the following is NOT a JavaScript data type?",
    options: ["String", "Number", "Boolean", "Character"],
    correctAnswer: "Character",
  },
  {
    question: "What is the role of a package manager like npm or yarn?",
    options: ["To manage project dependencies", "To compile code", "To run tests", "To deploy an application"],
    correctAnswer: "To manage project dependencies",
  },
  {
    question: "In CSS, what does the 'box-sizing: border-box;' property do?",
    options: ["It includes padding and border in the element's total width and height", "It adds a border around the element", "It controls the size of the box shadow", "It makes the element a flexible box"],
    correctAnswer: "It includes padding and border in the element's total width and height",
  },
  {
    question: "What is the difference between `==` and `===` in JavaScript?",
    options: ["`===` compares both value and type, while `==` only compares value", "`==` is used for assignment, while `===` is for comparison", "They are interchangeable", "`===` is the deprecated version of `==`"],
    correctAnswer: "`===` compares both value and type, while `==` only compares value",
  },
  {
    question: "What does the `async` keyword do in JavaScript?",
    options: ["It makes a function return a promise", "It pauses the execution of a function", "It runs a function synchronously", "It declares a variable that cannot be reassigned"],
    correctAnswer: "It makes a function return a promise",
  },
  {
    question: "What is the purpose of a `key` prop in a list of React elements?",
    options: ["To help React identify which items have changed, are added, or are removed", "To add a unique CSS class to each element", "To set the background color of an element", "To use as a unique identifier in the database"],
    correctAnswer: "To help React identify which items have changed, are added, or are removed",
  },
  {
    question: "What is 'destructuring' in JavaScript?",
    options: ["A way to unpack values from arrays, or properties from objects, into distinct variables", "A method to destroy an object", "A process to combine multiple files into one", "A way to format a string"],
    correctAnswer: "A way to unpack values from arrays, or properties from objects, into distinct variables",
  },
  {
    question: "Which of these is a state management library for React?",
    options: ["Redux", "jQuery", "Lodash", "Moment.js"],
    correctAnswer: "Redux",
  },
  {
    question: "What is the `public` directory used for in a Create React App project?",
    options: ["To store static assets like `index.html`, images, and fonts", "To store React components", "To store the application's business logic", "To store test files"],
    correctAnswer: "To store static assets like `index.html`, images, and fonts",
  },
  {
    question: "What is JSX?",
    options: ["A syntax extension for JavaScript that looks like HTML", "A templating engine for Python", "A database query language", "A CSS preprocessor"],
    correctAnswer: "A syntax extension for JavaScript that looks like HTML",
  },
  {
    question: "What is the purpose of the `finally` block in a `try...catch...finally` statement?",
    options: ["It always executes, regardless of whether an error was thrown or not", "It only executes if an error is caught", "It is an alternative to the `catch` block", "It is used to re-throw an error"],
    correctAnswer: "It always executes, regardless of whether an error was thrown or not",
  },
  {
    question: "Which array method in JavaScript is used to create a new array with all elements that pass a test?",
    options: ["filter()", "map()", "reduce()", "forEach()"],
    correctAnswer: "filter()",
  }
];
