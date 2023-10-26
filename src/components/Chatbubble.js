import { useState } from "react";
import axios from "axios";
//take input company logo image ,base color and company name, and what you want to display in message bubble
import { X, MessageSquare, ArrowRight } from "lucide-react";
function ChatBubble() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState();
  const [openModal, setOpenModal] = useState(false);
  if (!openModal)
    return (
      <div
        className='shadow focus:outline-none fixed bottom-2 right-2 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-black  text-white md:bottom-5"'
        onClick={() => setOpenModal(true)}
      >
        <MessageSquare className="h-5 w-5 bg-black" />
      </div>
    );
  const handleSubmit = async () => {
    try {
      setLoading(true);
      // const response = await fetch("https://search.veez.io/", {
      //   method: "POST",
      //   headers: {
      //     "Access-Control-Allow-Headers": "Content-Type",
      //     "Access-Control-Allow-Origin": "*",
      //     "Content-Type": "application/json",
      //     "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH",
      //   },
      //   body: JSON.stringify({
      //     text: text,
      //   }),
      // });
      const response = await axios.post("http://localhost:3000/api/search", {
        headers: {
          "Cache-Control": "no-cache",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        text: text,
      });
      console.log(response, "response");
      const result = response.data.response.text;
      console.log(result);
      setResult(result);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div
        onClick={() => setOpenModal(false)}
        className="h-screen overlay top-0 fixed w-full bg-black opacity-20"
      ></div>
      <div className="  z-50  md:w-[650px] p-6 fixed bg-white text-black  border-gray-200   left-1/2 right-1/2 transform -translate-x-1/2   dark:border-gray-700  w-full sm:w-[375px] rounded-xl  sm:right-6  top-16  py-6 px-5">
        <div className="flex justify-between items-center pb-4">
          <div className="flex gap-5 items-center text-2xl py-3">
            <h1 className="font-bold">Logo</h1>
            <h1 className="font-bold">Company AI</h1>
          </div>
          <div className="flex justify-between gap-5">
            <button
              className="cursor-pointer"
              onClick={() => setOpenModal(false)}
            >
              <X className="h-4 w-4 cursor-pointer hover:bg-slate-100  rounded-md" />
            </button>
          </div>
        </div>
        <div className=" relative  mb-2 ">
          <input
            onChange={(e) => setText(e.target.value)}
            placeholder="Ask me a question about veez..."
            className="w-full bg-white rounded h-10 py-4   border-slate-300 focus:border-slate-700 px-2 border"
          />
          <button
            onClick={() => handleSubmit()}
            className=" px-2 py-1 absolute top-1/2 bottom-1/2 h-full transform -translate-y-1/2 right-0 rounded bg-blue-500 text-white"
          >
            {loading ? (
              <div className="animate-pulse px-1">...</div>
            ) : (
              <div>
                Ask <ArrowRight className="h-4 w-4 inline" />
              </div>
            )}
          </button>
        </div>
        {result && (
          <div className="my-4 rounded-xl border bg-white p-4 shadow-md transition hover:bg-gray-100">
            {result}
          </div>
        )}
        {loading && (
          <div className="my-4 rounded-xl border bg-white p-4 shadow-md transition hover:bg-gray-100">
            <h1 className=" text-center animate-pulse font-bold text-2xl">
              ...
            </h1>
          </div>
        )}
        <p className=" text-[10px] tracking-wider  font-normal text- text-left">
          Powered by{" "}
          <a
            href="https://search.veez.io/"
            className="hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            search.veez.io
          </a>
        </p>
      </div>
    </div>
  );
}
export default ChatBubble;
