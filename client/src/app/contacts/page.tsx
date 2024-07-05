import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip";

export default function Contacts() {
    return (
        <>
            <div className="container mx-auto">

                <div className=" grid grid-cols-12 justify-items-start">

                    <div className="col-span-12 md:col-span-2 w-full border-r-2 border-gray-600">

                        {/* <!-- Left side menu --> */}
                        <aside className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
                            <a href="#" className="mx-auto">
                                {/* <img className="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt="" /> */}
                            </a>

                            <div className="flex flex-col items-center mt-6 -mx-2">
                                <img className="object-cover w-24 h-24 mx-2 rounded-full" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="avatar" />
                                <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">Dmitri Saltanovich</h4>
                                <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">dimasalt@gmail.com</p>
                            </div>

                            <div className="flex flex-col justify-between flex-1 mt-10">
                                <nav>
                                    <a className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200" href="#">
                                        <i className="bi bi-person text-xl"></i>
                                        <span className="mx-4 font-medium">Contacts</span>
                                    </a>

                                    <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                        <i className="bi bi-person-fill-add text-xl"></i>
                                        <span className="mx-4 font-medium">Add Contact</span>
                                    </a>
                                </nav>
                            </div>
                        </aside>

                    </div>

                    {/* <!-- Right side page --> */}
                    <div className="col-span-12 md:col-span-10 w-full">

                        <h1 className=" text-4xl font-semibold mt-7 mb-2 text-gray-600 ms-12">
                            Contacts
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <i className="bi bi-plus-square-dotted text-2xl text-green-500 ms-2"></i>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Add New Contact</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </h1>
                        <div className="border-b border-gray-300 w-11/12 ms-12 mt-5 shadow"></div>

                        {/* <!-- forms --> */}                                                             
                        <div className="bg-white rounded mx-9 px-5 pb-5 pt-10 w-10/12">
                          <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-4">
                            <div className="text-gray-600">
                              <p className="font-medium text-lg">Personal Details</p>
                              <p>Please fill out all the fields.</p>
                            </div>

                            <div className="lg:col-span-3">
                              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                <div className="md:col-span-5">
                                  <label htmlFor="full_name">Full Name</label>
                                  <input type="text" name="full_name" id="full_name" className="h-10 border mt-1 px-4 w-full bg-gray-50"  />
                                </div>

                                <div className="md:col-span-5">
                                  <label htmlFor="email">Email Address</label>
                                  <input type="text" name="email" id="email" className="h-10 border mt-1 px-4 w-full bg-gray-50"  placeholder="email@domain.com" />
                                </div>

                                <div className="md:col-span-3">
                                  <label htmlFor="address">Address / Street</label>
                                  <input type="text" name="address" id="address" className="h-10 border mt-1 px-4 w-full bg-gray-50"  placeholder="" />
                                </div>

                                <div className="md:col-span-2">
                                  <label htmlFor="city">City</label>
                                  <input type="text" name="city" id="city" className="h-10 border mt-1 px-4 w-full bg-gray-50"  placeholder="" />
                                </div>

                                <div className="md:col-span-2">
                                  <label htmlFor="country">Country / region</label>
                                  <div className="h-10 bg-gray-50 flex border border-gray-200 items-center mt-1">
                                    <input name="country" id="country" placeholder="Country" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"  />
                                    <button tabIndex={-1} className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                                      <i className="bi bi-x text-xl px-1"></i>                                     
                                    </button>
                                    <button tabIndex={-1} className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">                                      
                                      <i className="bi bi-caret-up-fill text-sm px-2"></i>
                                    </button>
                                  </div>
                                </div>

                                <div className="md:col-span-2">
                                  <label htmlFor="state">State / province</label>
                                  <div className="h-10 bg-gray-50 flex border border-gray-200 items-center mt-1">
                                    <input name="state" id="state" placeholder="State" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"  />
                                    <button tabIndex={-1} className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                                      <i className="bi bi-x text-xl px-1"></i>   
                                    </button>
                                    <button tabIndex={-1} className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                                      <i className="bi bi-caret-up-fill text-sm px-2"></i>
                                    </button>
                                  </div>
                                </div>

                                <div className="md:col-span-1">
                                  <label htmlFor="zipcode">Zipcode</label>
                                  <input type="text" name="zipcode" id="zipcode" className="transition-all flex items-center h-10 border mt-1 px-4 w-full bg-gray-50" placeholder=""  />
                                </div>

                                <div className="md:col-span-5">
                                  <div className="inline-flex items-center">
                                    <input type="checkbox" name="billing_same" id="billing_same" className="form-checkbox" />
                                    <label htmlFor="billing_same" className="ml-2">My billing address is different than above.</label>
                                  </div>
                                </div>

                                <div className="md:col-span-2">
                                  <label htmlFor="soda">How many soda pops?</label>
                                  <div className="h-10 w-28 bg-gray-50 flex border border-gray-200 items-center mt-1">
                                    <button tabIndex={-1} className="cursor-pointer outline-none focus:outline-none border-r border-gray-200 transition-all text-gray-500 hover:text-blue-600">
                                      <i className="bi bi-chevron-down text-sm px-2"></i>
                                    </button>
                                    <input name="soda" id="soda" placeholder="0" className="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent" defaultValue="0" />
                                    <button tabIndex={-1} className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-500 hover:text-blue-600">
                                      <i className="bi bi-chevron-up text-sm px-2"></i>
                                    </button>
                                  </div>
                                </div>

                                <div className="md:col-span-5 text-right">
                                  <div className="inline-flex items-end">
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4">Submit</button>
                                  </div>
                                </div>

                              </div>
                            </div>
                          </div>
                        </div>                       
                        {/* <!-- end of forms --> */}

                    </div>
                </div>
            </div>
        </>
    );
}



