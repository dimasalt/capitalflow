
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip";

const ContactsPageName = () => {
    return (
        <>
            <h1 className="text-4xl font-semibold mt-7 mb-2 ms-12">
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

            {/* <!-- page divider --> */}
            <div className="border-b border-gray-300 w-11/12 ms-12 mt-5 shadow"></div>
        </>
    );
}

export default ContactsPageName;