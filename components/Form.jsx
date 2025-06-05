import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  const notify = () => {
    return toast(
      <>
        <div>Prompt Submitted Successfully !!!</div>
      </>,
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        style: {
          whiteSpace: "pre-line",
          borderRadius: "20px",
        },
        onBlur: () => {
          toast.dismiss();
        },
      }
    );
  };

  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 mb-20 w-full max-w-3xl  flex flex-col gap-8 bg-white/10 p-8 rounded-2xl shadow-xl border border-white/60 backdrop-blur-md transition-all duration-300"
      >
        {/* Prompt Field */}
        <label className="flex flex-col gap-2">
          <span className="text-lg font-semibold text-white tracking-wide">
            Your AI Prompt
          </span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Write your post here..."
            required
            className="min-h-[120px] p-4 rounded-xl text-sm text-white bg-white/5 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-200"
          />
        </label>

        {/* Tag Field */}
        <label className="flex flex-col gap-2">
          <span className="text-lg font-semibold text-white tracking-wide">
            Field of Prompt{" "}
            <span className="text-sm font-normal text-gray-400">
              (#product, #webdevelopment, #idea, etc.)
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type="text"
            placeholder="#Tag"
            required
            className="p-3 rounded-xl text-sm text-white bg-white/5 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-200"
          />
        </label>

        {/* Footer Buttons */}
        <div className="flex justify-end items-center gap-4 mt-6">
          <Link
            href="/"
            className="text-gray-400 text-sm hover:underline hover:text-white transition-colors"
          >
            Cancel
          </Link>

          <button
            type="submit"
            disabled={submitting}
            onClick={notify}
            className="relative flex items-center justify-center px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-gray-500 hover:from-cyan-400 hover:to-cyan-800 text-white text-sm font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ToastContainer />
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
