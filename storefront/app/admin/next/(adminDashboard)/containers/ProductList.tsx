import React from "react";
import { IoMdAdd } from "react-icons/io";
import Link from "next/link";
import { MdPendingActions, MdVerified } from "react-icons/md";
import twmesh from "../../../../../utils/twmesh";
import { MdDelete } from "react-icons/md";
import { BiSolidEditAlt } from "react-icons/bi";

type Props = {};

const productList = [
  {
    product: [{ name: "Brown Hat", image: "", price: "$20" }],
  },
];

const image =
  "https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80";

const tableData = {
  tableHeader: ["Product", "Price", "Created", "Status", "InStock", "Action"],
  tableBody: [
    {
      name: "Brown Hat",
      image: image,
      price: "20",
      created: "jan 7 2019",
      instock: 25,
      status: true,
    },
    {
      name: "Brown Hat",
      image: image,
      price: "20",
      created: "jan 7 2019",
      instock: 25,
      status: false,
    },
    {
      name: "Brown Hat",
      image: image,
      price: "20",
      created: "jan 7 2019",
      instock: 25,
      status: true,
    },
    {
      name: "Brown Hat",
      image: image,
      price: "20",
      created: "jan 7 2019",
      instock: 25,
      status: false,
    },
    {
      name: "Brown Hat",
      image: image,
      price: "20",
      created: "jan 7 2019",
      instock: 25,
      status: true,
    },
    {
      name: "Brown Hat",
      image: image,
      price: "20",
      created: "jan 7 2019",
      instock: 25,
      status: true,
    },
  ],
};

const ProductList = (props: Props) => {
  return (
    <div className="mx-auto py-10 lg:py-14">
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="inline-block min-w-full p-1.5 align-middle">
            <div className="overflow-hidden rounded-sm border border-gray-200 bg-gray-100 shadow-sm dark:border-gray-700 dark:bg-gray-950">
              <div className="grid gap-3 border-b border-gray-200 px-6 py-4 md:flex md:items-center md:justify-between dark:border-gray-700">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Product List
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    All Product lists here.
                  </p>
                </div>

                <div>
                  <div className="inline-flex gap-x-2">
                    <Link
                      className="inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      href="add_product"
                    >
                      <IoMdAdd fontSize={22} className="" />
                      Add New
                    </Link>
                  </div>
                </div>
              </div>

              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-slate-800">
                  <tr>
                    {tableData.tableHeader.map((table_header, idx) => (
                      <th
                        key={idx}
                        scope="col"
                        className="px-6 py-3 text-start"
                      >
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                            {table_header}
                          </span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {tableData.tableBody.map((table_body, idx) => (
                    <tr key={idx}>
                      <td className="h-px w-72 whitespace-nowrap align-top">
                        <Link className="block p-6" href="#">
                          <div className="flex items-center gap-x-4">
                            <img
                              className="h-[2.375rem] w-[2.375rem] flex-shrink-0 rounded-lg"
                              src={table_body.image}
                              alt="Image Description"
                            />
                            <div>
                              <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                                {table_body.name}
                              </span>
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td className="h-px w-px whitespace-nowrap">
                        <div className="px-6 py-3">
                          <span className="block text-sm font-medium text-gray-800 dark:text-gray-200">
                            <code className="text-base">$</code>
                            {table_body.price}
                          </span>
                        </div>
                      </td>
                      <td className="h-px w-px whitespace-nowrap">
                        <div className="px-6 py-3">
                          <div className="flex items-center gap-x-3">
                            <span className="text-xs text-gray-500">
                              {table_body.created}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="h-px w-px whitespace-nowrap">
                        <div className="px-6 py-3">
                          {table_body.status ? (
                            <span className="inline-flex items-center gap-x-1 rounded-full bg-teal-500/10 px-1.5 py-1 text-xs font-medium text-teal-600">
                              <MdVerified />
                              Active
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-x-1 rounded-full bg-red-500/10 px-1.5 py-1 text-xs font-medium text-red-600">
                              <MdPendingActions />
                              Pending
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="h-px w-px whitespace-nowrap">
                        <div className="px-6 py-3">
                          <span className="text-sm text-gray-500">
                            {table_body.instock}
                          </span>
                        </div>
                      </td>
                      <td className="h-px w-px whitespace-nowrap">
                        <div className="flex gap-x-2 whitespace-nowrap px-6 py-1.5">
                          <button>
                            <BiSolidEditAlt
                              fontSize={18}
                              className="text-blue-500"
                            />
                          </button>
                          <div />
                          <button>
                            <MdDelete fontSize={18} className="text-red-500" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="grid gap-3 border-t border-gray-200 px-6 py-4 md:flex md:items-center md:justify-between dark:border-gray-700">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <span className="font-semibold text-gray-800 dark:text-gray-200">
                      {tableData.tableBody.length || 0}
                    </span>{" "}
                    results
                  </p>
                </div>

                <div>
                  <div className="inline-flex gap-x-2">
                    <button
                      type="button"
                      className="inline-flex items-center gap-x-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                      <svg
                        className="h-4 w-4 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m15 18-6-6 6-6" />
                      </svg>
                      Prev
                    </button>

                    <button
                      type="button"
                      className="inline-flex items-center gap-x-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                      Next
                      <svg
                        className="h-4 w-4 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
