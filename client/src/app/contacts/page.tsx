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
                                <img className="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt="" />
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
                    </div>
                </div>
            </div>
        </>
    );
}
  