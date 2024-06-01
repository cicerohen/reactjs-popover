import { useState, useCallback } from 'react';

import { Popover } from './components/Popover';
import { SignInForm } from './components/SignInForm';

export const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState();
  const ref = useCallback((node) => {
    if (node) {
      setAnchorEl(node);
    }
  }, []);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-col grow flex-1 items-center p-10">
        <div className="text-center">
          <h1 className="flex uppercase text-2xl font-semibold mb-5">
            <a
              href="https://github.com/cicerohen/playground-reactjs-popover"
              title="View it on Github"
            >
              Playground ReactJS Popover
            </a>
          </h1>
          <h2 className="text-lg mb-2">
            <a href="#">A simplified version of MUI Popover</a>
          </h2>
          <p className="text-sm text-gray-600">
            Built with ReactJS and{' '}
            <a href="https://tailwindcss.com/">Tailwind CSS</a>
          </p>
        </div>

        <button
          title="Click here to sign in"
          ref={ref}
          onClick={onOpen}
          className="bg-red-600 hover:bg-red-700 text-lg text-white uppercase rounded-md inline-flex items-center justify-center py-4 px-8 mt-6"
        >
          Sign In
        </button>

        <p className="text-sm mt-4 text-gray-600">
          <a href="https://github.com/cicerohen/playground-reactjs-popover">
            View it on Github
          </a>
        </p>

        <Popover anchorEl={anchorEl} isOpen={isOpen} onClose={onClose}>
          <SignInForm />
        </Popover>
      </main>
    </div>
  );
};
