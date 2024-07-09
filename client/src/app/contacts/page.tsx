
"use client";

import ContactsPageName from "@/features/contacts/pagename";
import ContactSideMenu from "@/features/contacts/submenu";
import { Contact } from "@/features/contacts/types/Contact";
import { useState } from "react";

export default function Contacts() {

    const [contacts, setContacts] = useState<Contact>({
      id: "",
      name: "",
      address: "",
      phone: "",
      email: "",
      note: "",
      type: 3

    });

    return (
        <>
            <div className="container mx-auto">

                <div className=" grid grid-cols-12 justify-items-start">

                    {/* <!-- left side menu --> */}
                    <div className="col-span-12 md:col-span-2 w-full border-r-2 border-gray-600">                   
                      <ContactSideMenu />
                    </div>

                    {/* <!-- Right side page --> */}
                    <div className="col-span-12 md:col-span-10 w-full">

                        {/* <!-- page name --> */}
                        <ContactsPageName />
                      

                        {/* <!-- forms --> */}
                        <div className="bg-white rounded mx-9 px-5 pb-5 pt-10 w-12/12">
                          <form>
                            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-5">
                              <div className="text-gray-600 col-span-1">
                                <p className="font-medium text-lg">Personal Details</p>
                                <p>Please fill out all the fields.</p>
                              </div>

                              <div className="lg:col-span-4">
                                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-6">
                                  <div className="md:col-span-2">
                                    <label htmlFor="fullName">Full Name</label>
                                    <input type="text" name="fullName" id="fullName" />
                                  </div>

                                  <div className="md:col-span-4">
                                    <label htmlFor="address">Address / Street, City, Postal Code</label>
                                    <input type="text" name="address" id="address" placeholder="" />
                                  </div>
  

                                  <div className="md:col-span-2">
                                    <label htmlFor="email">Email Address</label>
                                    <input type="text" name="email" id="email" placeholder="email@domain.com" />
                                  </div>

                                  <div className="md:col-span-2">
                                    <label htmlFor="city">Phone</label>
                                    <input type="text" name="city" id="city" placeholder="" />
                                  </div>

                                  <div className="md:col-span-2">
                                    <label htmlFor="contactType">Contact Type</label>
                                    <div className="h-10 bg-gray-50 flex border border-gray-200 items-center">
                                      <select name="contactType" id="contactType" className="w-full" defaultValue={3}>
                                        <option value={3}></option>
                                        <option value={1}>Vendor</option>
                                        <option value={2}>Customer</option>                                   
                                        <option value={3}>Contact</option>
                                      </select>
                                      {/* <input type="text" name="country" id="country" placeholder="Country" />
                                      <button tabIndex={-1} className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                                        <i className="bi bi-x text-xl px-1"></i>
                                      </button>
                                      <button tabIndex={-1} className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                                        <i className="bi bi-caret-up-fill text-sm px-2"></i>
                                      </button> */}
                                    </div>
                                  </div>

                                  {/* <div className="md:col-span-2">
                                    <label htmlFor="state">State / province</label>
                                    <div className="h-10 bg-gray-50 flex border border-gray-200 items-center mt-1">
                                      <input type="text" name="state" id="state" placeholder="State" />
                                      <button tabIndex={-1} className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                                        <i className="bi bi-x text-xl px-1"></i>
                                      </button>
                                      <button tabIndex={-1} className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                                        <i className="bi bi-caret-up-fill text-sm px-2"></i>
                                      </button>
                                    </div>
                                  </div>


                                  <div className="md:col-span-5">
                                    <div className="inline-flex items-center">
                                      <input type="checkbox" name="billing_same" id="billing_same" className="form-checkbox border border-gray-800" />
                                      <label htmlFor="billing_same" className="ml-2">My billing address is different than above.</label>
                                    </div>
                                  </div> */}

                                  {/* <!-- for future reference -->
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
                                  </div> */}


                                  <div className="md:col-span-6">
                                    <label htmlFor="contact_note">Notes</label>
                                    <textarea rows={6} id="contact_note"></textarea>
                                  </div>                                

                                  <div className="md:col-span-6 text-right">
                                    <div className="inline-flex items-end">
                                      <button className="btn cancel-btn mr-1">
                                        <i className="bi bi-x-circle text-base me-1"></i>
                                        Cancel
                                      </button>
                                    </div>
                                    <div className="inline-flex items-end">
                                      <button className="btn submit-btn">
                                        <i className="bi bi-check2-circle text-base me-1"></i>
                                        Submit
                                      </button>
                                    </div>
                                  </div>

                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                        {/* <!-- end of forms --> */}

                    </div>
                </div>
            </div>
        </>
    );
}



