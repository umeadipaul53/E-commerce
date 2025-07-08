import React from "react";

const OrderReview = () => {
  return (
    <div>
      <section className="bg-white py-8 antialiased">
        <form action="#" className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-xl font-semibold text-gray-900">
              Order summary
            </h2>

            <div className="mt-6 space-y-4 border-b border-t border-gray-200 py-8">
              <h4 className="text-lg font-semibold text-gray-900">
                Billing & Delivery information
              </h4>

              <dl>
                <dt className="text-base font-medium text-gray-900">
                  Individual
                </dt>
                <dd className="mt-1 text-base font-normal text-gray-500">
                  Bonnie Green - +1 234 567 890, San Francisco, California,
                  United States, 3454, Scott Street
                </dd>
              </dl>
            </div>

            <div className="mt-6 sm:mt-8">
              <div className="relative overflow-x-auto border-b border-gray-200">
                <table className="w-full text-left font-medium text-gray-900 md:table-fixed">
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="whitespace-nowrap py-4 md:w-[384px]">
                        <div className="flex items-center gap-4">
                          <a
                            href="#"
                            className="flex items-center aspect-square w-10 h-10 shrink-0"
                          >
                            <img
                              className="h-auto w-full max-h-full"
                              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
                              alt="imac image"
                            />
                            <img
                              className="hidden h-auto w-full max-h-full"
                              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
                              alt="imac image"
                            />
                          </a>
                          <a href="#" className="hover:underline">
                            Apple iMac 27”
                          </a>
                        </div>
                      </td>
                      <td className="p-4 text-base font-normal text-gray-900">
                        x1
                      </td>
                      <td className="p-4 text-right text-base font-bold text-gray-900">
                        $1,499
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap py-4 md:w-[384px]">
                        <div className="flex items-center gap-4">
                          <a
                            href="#"
                            className="flex items-center aspect-square w-10 h-10 shrink-0"
                          >
                            <img
                              className="h-auto w-full max-h-full "
                              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
                              alt="imac image"
                            />
                            <img
                              className="hidden h-auto w-full max-h-full"
                              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
                              alt="imac image"
                            />
                          </a>
                          <a href="#" className="hover:underline">
                            Apple iMac 27”
                          </a>
                        </div>
                      </td>
                      <td className="p-4 text-base font-normal text-gray-900">
                        x1
                      </td>
                      <td className="p-4 text-right text-base font-bold text-gray-900">
                        $1,499
                      </td>
                    </tr>

                    {/* Repeat the above block for each item in the order */}

                    <tr>
                      <td className="whitespace-nowrap py-4 md:w-[384px]">
                        <div className="flex items-center gap-4">
                          <a
                            href="#"
                            className="flex items-center aspect-square w-10 h-10 shrink-0"
                          >
                            <img
                              className="h-auto w-full max-h-full"
                              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-light.svg"
                              alt="iphone image"
                            />
                            <img
                              className="hidden h-auto w-full max-h-full"
                              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-dark.svg"
                              alt="iphone image"
                            />
                          </a>
                          <a href="#" className="hover:underline">
                            Apple iPhone 14
                          </a>
                        </div>
                      </td>
                      <td className="p-4 text-base font-normal text-gray-900">
                        x2
                      </td>
                      <td className="p-4 text-right text-base font-bold text-gray-900">
                        $1,998
                      </td>
                    </tr>

                    {/* Continue with the rest of the items similarly */}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 space-y-6">
                <h4 className="text-xl font-semibold text-gray-900">
                  Order summary
                </h4>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-gray-500">Original price</dt>
                      <dd className="text-base font-medium text-gray-900">
                        $6,592.00
                      </dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-gray-500">Savings</dt>
                      <dd className="text-base font-medium text-green-500">
                        -$299.00
                      </dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-gray-500">Store Pickup</dt>
                      <dd className="text-base font-medium text-gray-900">
                        $99
                      </dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-gray-500">Tax</dt>
                      <dd className="text-base font-medium text-gray-900">
                        $799
                      </dd>
                    </dl>
                  </div>

                  <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
                    <dt className="text-lg font-bold text-gray-900">Total</dt>
                    <dd className="text-lg font-bold text-gray-900">
                      $7,191.00
                    </dd>
                  </dl>
                </div>

                <div className="flex items-start sm:items-center">
                  <input
                    id="terms-checkbox-2"
                    type="checkbox"
                    value=""
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 "
                  />
                  <label
                    htmlFor="terms-checkbox-2"
                    className="ms-2 text-sm font-medium text-gray-900"
                  >
                    I agree with the{" "}
                    <a
                      href="#"
                      title=""
                      className="text-primary-700 underline hover:no-underline"
                    >
                      Terms and Conditions
                    </a>{" "}
                    of use of the Flowbite marketplace
                  </label>
                </div>

                <div className="gap-4 sm:flex sm:items-center">
                  <button
                    type="button"
                    className="w-full rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 "
                  >
                    Return to Shopping
                  </button>

                  <button
                    type="submit"
                    className="mt-4 flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 "
                  >
                    Send the order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default OrderReview;
