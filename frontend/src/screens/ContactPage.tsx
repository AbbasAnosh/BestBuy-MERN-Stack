import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../components/shopComponent/ComponentName";

type MessageEvent = {
  target: {
    value: string;
  };
};

const ContactPage = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);

  const [clientName, setclientName] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState("");

  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errMessages, setErrMessages] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setclientName(e.target.value);
    setErrClientName("");
  };
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handleMessages = (e: MessageEvent) => {
    setMessages(e.target.value);
    setErrMessages("");
  };

  const EmailValidation = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  };

  const handlePost = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!clientName) {
      setErrClientName("Enter your Name");
    }
    if (!email) {
      setErrEmail("Enter your Email");
    } else {
      if (!EmailValidation(email)) {
        setErrEmail("Enter a Valid Email");
      }
    }
    if (!messages) {
      setErrMessages("Enter your Messages");
    }
    if (clientName && email && EmailValidation(email) && messages) {
      setSuccessMsg(
        `Thank you, ${clientName}. Your message has been received successfully.`
      );
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 pb-5">
      <Breadcrumbs title="Contact" prevLocation={prevLocation} />
      {successMsg ? (
        <p className="pb-20 w-96 font-medium text-green-500">{successMsg}</p>
      ) : (
        <div className="relative bg-white rounded-3xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] overflow-hidden">
          <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-blue-400"></div>
          <div className="absolute -bottom-6 -left-0 w-24 h-20 rounded-tr-[40px] bg-teal-200"></div>
          <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-blue-400"></div>
          <div className="absolute -bottom-6 -right-0 w-24 h-20 rounded-tl-[40px] bg-blue-300"></div>
          <div className="grid md:grid-cols-2">
            <div className="text-center p-6 xl:p-10 flex flex-col items-center justify-center">
              <img src="/contact.svg" className="mt-4 shrink-0 w-full" />
            </div>
            <form className="p-6 xl:p-10">
              <div className="max-w-sm mx-auto space-y-4">
                <input
                  type="text"
                  onChange={handleName}
                  value={clientName}
                  placeholder="Name"
                  className="w-full bg-gray-100 rounded-full py-3 px-6 text-sm outline-none"
                />
                {errClientName && (
                  <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1">
                    <span className="text-sm italic font-bold">!</span>
                    {errClientName}
                  </p>
                )}
                <input
                  type="email"
                  onChange={handleEmail}
                  value={email}
                  placeholder="Email"
                  className="w-full bg-gray-100 rounded-full py-3 px-6 text-sm outline-none"
                />
                {errEmail && (
                  <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1">
                    <span className="text-sm italic font-bold">!</span>
                    {errEmail}
                  </p>
                )}

                <textarea
                  placeholder="Message"
                  rows={6}
                  onChange={handleMessages}
                  value={messages}
                  className="w-full bg-gray-100 rounded-3xl px-6 text-sm pt-3 outline-none"
                ></textarea>
                {errMessages && (
                  <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1">
                    <span className="text-sm italic font-bold">!</span>
                    {errMessages}
                  </p>
                )}
                <button
                  type="button"
                  onClick={handlePost}
                  className="text-white w-full relative bg-[#064F48] hover:bg-[#E56A40] font-semibold rounded-full text-sm px-6 py-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    fill="#fff"
                    className="mr-2 inline"
                    viewBox="0 0 548.244 548.244"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                      clip-rule="evenodd"
                      data-original="#000000"
                    />
                  </svg>
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPage;
