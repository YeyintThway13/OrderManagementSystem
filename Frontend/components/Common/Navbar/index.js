import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  ChartBarSquareIcon,
  Cog6ToothIcon,
  FolderIcon,
  GlobeAltIcon,
  ServerIcon,
  SignalIcon,
  XMarkIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";
import {
  Bars3Icon,
  ChevronRightIcon,
  ChevronUpDownIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/20/solid";
import { useRouter } from "next/router";

const navigation = [
  { name: "Products", href: "/", icon: FolderIcon },
  { name: "Orders", href: "/orders", icon: ServerIcon },
  { name: "Inventory", href: "/inventory", icon: SignalIcon },
  { name: "Users", href: "/users", icon: GlobeAltIcon },
  { name: "Cart", href: "/cart", icon: ShoppingCartIcon },
];
// const teams = [
//   { id: 1, name: "Profile", href: "#", initial: "P", current: false },
//   { id: 2, name: "Settings", href: "#", initial: "S", current: false },
//   { id: 3, name: "Security", href: "#", initial: "S", current: false },
// ];

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto  px-6  bg-[#0f1623] h-[100vh] ">
      <nav className="flex flex-1 flex-col mt-10">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={classNames(
                      item.href === router.pathname
                        ? "bg-gray-800 text-white"
                        : "text-gray-400 hover:text-white hover:bg-gray-800",
                      "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                    )}
                  >
                    <item.icon
                      className="h-6 w-6 shrink-0"
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </li>
          {/* <li>
            <div className="text-xs font-semibold leading-6 text-gray-400">
              Account Settings
            </div>
            <ul role="list" className="-mx-2 mt-2 space-y-1">
              {teams.map((team) => (
                <li key={team.name}>
                  <a
                    href={team.href}
                    className={classNames(
                      team.current
                        ? "bg-gray-800 text-white"
                        : "text-gray-400 hover:text-white hover:bg-gray-800",
                      "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                    )}
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                      {team.initial}
                    </span>
                    <span className="truncate">{team.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </li> */}
          <li className="-mx-6 mt-auto">
            <ul>
              <li>
                <p
                  className={classNames(
                    "text-gray-400 hover:text-white hover:bg-gray-800",
                    "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold ml-4 cursor-pointer"
                  )}
                >
                  <ChevronDoubleRightIcon
                    className="h-6 w-6 shrink-0"
                    aria-hidden="true"
                  />
                  Logout
                </p>
              </li>
            </ul>
            <a
              href="#"
              className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800"
            >
              <img
                className="h-8 w-8 rounded-full bg-gray-800"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <span className="sr-only">Your profile</span>
              <span aria-hidden="true">Admin</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
