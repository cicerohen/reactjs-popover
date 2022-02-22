export const SignInForm = () => {
  return (
    <form className="p-4 w-96">
      <div className="mb-4">
        <h2 className="text-lg">Sign in</h2>
        <p className="text-sm text-gray-700">to access your account</p>
      </div>
      <div className="mb-4">
        <label className="text-sm">Email</label>
        <input
          placeholder="your@email.com"
          className="mt-1 block w-full px-2 py-3 bg-white border border-gray-300 rounded-md text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
        />
      </div>
      <div className="mb-4">
        <label className="text-sm">Password</label>
        <input
          type="password"
          placeholder="type your password"
          className="mt-1 block w-full px-2 py-3 bg-white border border-gray-300 rounded-md text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
        />
      </div>
      <button className="border border-indigo-300 text-indigo-700 hover:bg-indigo-50 text-sm text-white uppercase rounded-md inline-flex items-center justify-center py-2 px-4">
        Sign in
      </button>
    </form>
  );
};
