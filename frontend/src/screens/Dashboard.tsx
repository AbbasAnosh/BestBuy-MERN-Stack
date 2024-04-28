import OverviewIcon from "../../public/icons/overview.svg";
import ShoppingBagIcon from "../../public/icons/shopping-bag.svg";
import GraphIcon from "../../public/icons/graph.svg";
import CalendarIcon from "../../public/icons/calendar.svg";
import WalletIcon from "../../public/icons/wallet.svg";
import FileIcon from "../../public/icons/file.svg";
import ChatIcon from "../../public/icons/chat.svg";
import GroupChatIcon from "../../public/icons/group-chat.svg";
import SettingsIcon from "../../public/icons/settings.svg";
import LogoutIcon from "../../public/icons/logout.svg";
import LayersIcon from "../../public/icons/layers.svg";
import InvisibleIcon from "../../public/icons/invisible.svg";
import RejectedIcon from "../../public/icons/rejected.svg";
import MailIcon from "../../public/icons/mail.svg";
import FigmaIcon from "../../public/icons/figma.svg";
import SketchIcon from "../../public/icons/sketch.svg";
import AIIcon from "../../public/icons/ai.svg";
import DraftIcon from "../../public/icons/draft.svg";

const sidebar = [
  { name: "Overview", icon: OverviewIcon },
  { name: "Products", icon: ShoppingBagIcon },
  { name: "Analytics", icon: GraphIcon },
  { name: "Schedule", icon: CalendarIcon },
  { name: "Payout", icon: WalletIcon },
  { name: "Statements", icon: FileIcon },

  { name: "Help", icon: ChatIcon },
  { name: "Community", icon: GroupChatIcon },
  { name: "Settings", icon: SettingsIcon },
  { name: "Logout", icon: LogoutIcon },
];

const status = [
  { name: "Published", icon: LayersIcon },
  { name: "Draft", icon: DraftIcon },
  { name: "Hidden", icon: InvisibleIcon },
  { name: "Rejected", icon: RejectedIcon },
  { name: "Under Review", icon: MailIcon },
];

const products = [
  {
    name: "Organic Landing page",
    category: "Web Design",
    imageUrl: "/img/organic-landing-page.png",
    price: 20,
    downloaded: 793,
    rating: 4.9,
    platformIcons: [FigmaIcon, SketchIcon],
    createdAt: "12/01/22",
  },
  {
    name: "Traffic Landing page",
    category: "Web Design",
    imageUrl: "/img/traffic-landing-page.png",
    price: 24,
    downloaded: 34,
    rating: 4.4,
    platformIcons: [FigmaIcon, AIIcon],
    createdAt: "10/01/22",
  },
  {
    name: "POS Dashboard",
    category: "Web Design",
    imageUrl: "/img/pos-dashboard.png",
    price: 16,
    downloaded: 896,
    rating: 4.6,
    platformIcons: [FigmaIcon, SketchIcon],
    createdAt: "01/01/22",
  },
  {
    name: "Gallery page",
    category: "Web Design",
    imageUrl: "/img/gallery-page.png",
    price: 38,
    downloaded: 194,
    rating: 4.6,
    platformIcons: [FigmaIcon, SketchIcon],
    createdAt: "04/01/22",
  },
  {
    name: "WFH Landing page",
    category: "Web Design",
    imageUrl: "/img/wfh-landing-page.png",
    price: 22,
    downloaded: 404,
    rating: 4.3,
    platformIcons: [FigmaIcon, SketchIcon],
    createdAt: "12/12/21",
  },
];

const Dashboard = () => {
  return (
    <div className="w-full min-h-screen font-sans text-gray-900 bg-gray-50 flex">
      <aside className="py-6 px-10 w-64 border-r border-gray-200">
        <img src="/img/logo.png" alt="" className="w-28" />
        <ul className="flex flex-col gap-y-6 pt-20">
          {sidebar.map((item, index) => (
            <>
              <li key={index}>
                <a
                  href="#"
                  className="flex gap-x-4 items-center py-2 text-gray-500 hover:text-indigo-600 group"
                >
                  <span className="absolute w-1.5 h-8 bg-indigo-600 rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out" />
                  <img
                    src={item.icon}
                    className="w-6 h-6 fill-current"
                    alt={item.name}
                    style={{ transition: "fill 0.3s", fill: "indigo" }}
                  />
                  <span>{item.name}</span>
                </a>
              </li>
              {index === 5 && <li className="py-4"></li>}{" "}
            </>
          ))}
        </ul>
      </aside>

      <main className="flex-1 pb-8">
        <div className="flex items-center justify-between py-7 px-10">
          <div>
            <h1 className="text-2xl font-semibold leading-relaxed text-gray-800">
              Products
            </h1>
            <p className="text-sm font-medium text-gray-500">
              Let's grow to your business! Create your product and upload here
            </p>
          </div>
          <button className="inline-flex gap-x-2 items-center py-2.5 px-6 text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1">
            <img
              src="../../public/icons/plus.svg"
              className="w-6 h-6 fill-current"
              alt=""
            />
            <span className="text-sm font-semibold tracking-wide">
              Create Item
            </span>
          </button>
        </div>

        <ul className="flex gap-x-24 items-center px-4 border-y border-gray-200">
          {status.map((item, index) => (
            <li key={index}>
              <button
                className="flex gap-x-2 items-center py-5 px-6 text-gray-500 hover:text-indigo-600 relative group"
                key={item.name}
              >
                <img src={item.icon} className="w-6 h-6 fill-current" alt="" />
                <span className="font-medium"> {item.name} </span>
                <span className="absolute w-full h-0.5 left-3 bg-indigo-600 rounded bottom-0 scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out" />
              </button>
            </li>
          ))}
        </ul>

        <table className="w-full border-b border-gray-200">
          <thead>
            <tr className="text-sm font-medium text-gray-700 border-b border-gray-200">
              <td className="pl-10">
                <div className="flex items-center gap-x-4">
                  <input
                    type="checkbox"
                    className="w-6 h-6 text-indigo-600 rounded-md border-gray-300"
                    // indeterminate="indeterminate"
                  />
                  <span>Product Name</span>
                </div>
              </td>
              <td className="py-4 px-4 text-center">Pricing</td>
              <td className="py-4 px-4 text-center">Downloaded</td>
              <td className="py-4 px-4 text-center">Rating</td>
              <td className="py-4 px-4 text-center">Platforms</td>
              <td className="py-4 pr-10 pl-4 text-center">
                <img
                  src="../../public/icons/filter.svg"
                  className="w-6 h-6 fill-current"
                  alt=""
                />
              </td>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr
                className="hover:bg-gray-100 transition-colors group"
                key={index}
              >
                <td className="flex gap-x-4 items-center py-4 pl-10">
                  <input
                    type="checkbox"
                    className="w-6 h-6 text-indigo-600 rounded-md border-gray-300"
                  />
                  <img
                    src={product.imageUrl}
                    alt=""
                    className="w-40 aspect-[3/2] rounded-lg object-cover object-top border border-gray-200"
                  />
                  <div>
                    <a href="#" className="text-lg font-semibold text-gray-700">
                      {product.name}
                    </a>
                    <div className="font-medium text-gray-400">
                      {product.category}
                    </div>
                  </div>
                </td>
                <td className="font-medium text-center">${product.price}</td>
                <td className="font-medium text-center">
                  {product.downloaded}
                </td>
                <td className="text-center">
                  <span className="font-medium">{product.rating}</span>
                  <span className="text-gray-400">/5</span>
                </td>
                <td>
                  <div className="flex gap-x-2 justify-center items-center">
                    {product.platformIcons.map((icon, iconIndex) => (
                      <a
                        href="#"
                        className="p-2 bg-gray-200 rounded-md hover:bg-gray-300"
                        key={iconIndex}
                      >
                        <img
                          src={icon}
                          className="w-6 h-6 fill-current"
                          alt=""
                        />
                      </a>
                    ))}
                  </div>
                </td>
                <td>
                  <span className="inline-block w-20 group-hover:hidden">
                    {product.createdAt}
                  </span>
                  <div className="hidden group-hover:flex group-hover:w-20 group-hover:items-center group-hover:text-gray-500 group-hover:gap-x-2">
                    <button className="p-2 hover:rounded-md hover:bg-gray-200">
                      <img
                        src="../../public/icons/pencil.svg"
                        className="w-6 h-6 fill-current"
                        alt=""
                      />
                    </button>
                    <button className="p-2 hover:rounded-md hover:bg-gray-200">
                      <img
                        src="../../public/icons/trash.svg"
                        className="w-6 h-6 fill-current"
                        alt=""
                      />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex gap-x-2 justify-center pt-8">
          <button className="flex justify-center items-center w-8 h-8">
            <img
              src="../../public/icons/chevron-left.svg"
              className="w-6 h-6 to-gray-800 stroke-current hover:text-indigo-600"
              alt=""
            />
          </button>
          {Array.from({ length: 6 }, (_, i) => (
            <button
              key={i}
              className={`flex items-center justify-center w-8 h-8 font-medium rounded-full ${
                i === 0
                  ? "bg-gray-800 text-white"
                  : "text-gray-400 hover:text-indigo-600"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button className="flex justify-center items-center w-8 h-8">
            <img
              src="../../public/icons/chevron-right.svg"
              className="w-6 h-6 to-gray-800 stroke-current hover:text-indigo-600"
              alt=""
            />
          </button>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
