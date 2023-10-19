import { useState } from "react";
import { X, MoreHorizontal, MessageSquare } from "lucide-react";
function ChatBubble() {
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
  return (
    <div className="max-w-sm p-6 bg-black border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700  w-full sm:w-[375px] rounded-xl absolute sm:right-6 md:bottom-20 bottom-0  py-6 px-5">
      <div className="flex justify-between items-center pb-4">
        <image
          src="../../public/xxxhdpi.png"
          alt="logo"
          width={24}
          height={24}
        />
        <div className="flex justify-between gap-5">
          <MoreHorizontal className="h-4 w-4 cursor-pointer" />
          <button
            className="cursor-pointer"
            onClick={() => setOpenModal(false)}
          >
            <X className="h-4 w-4 cursor-pointer" />
          </button>
        </div>
      </div>
      <div className="  pb-28">
        <h1 className="text-2xl font-medium">Chat with Veez Assistant</h1>
        <h1 className="pt-8">How can i help you?</h1>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full ">
        Send Message
      </button>{" "}
    </div>
  );
}
export default ChatBubble;
