import Image from "next/image";
import { Titles } from "@/components/Titles";
import { Bottom } from "@/components/resources/Bottom"
import { DocumentsCards } from "@/components/Documents";
import LiveChatLink from "@/components/LiveChatLink";

export default function Support() {
  return (
    <>
      <Titles text="Support" />
      <div className="bg-white pb-20">
        <div className="max-w-[1512px] mx-auto px-6 sm:px-8 lg:px-10 xl:px-[95px]">
          {/* parragraph */}
          <section className="flex items-center justify-center py-12 md:py-24 text-[18px] sm:text-[20px] leading-[28px] sm:leading-[30px]">
            <p className="text-steel-gray">
              Contact our knowledgeable staff anytime for immediate assistance.
              Whether you need technical support while operating one of our
              programs or have questions regarding pricing or features of our
              product offering, we are available at your convenience. For
              pre-sales support, our product specialists will recommend the
              appropriate solutions based on your industry or personal needs.
              Call us to find out how to transform your business or your product
              offerings to be Quantum-Safe.
            </p>
          </section>
          {/* icons */}
          <section className="py-12 md:py-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
              {/* Phone */}
              <div className="flex items-center gap-4 p-4 min-w-0 xl:border-r border-gray-300">
                <Image
                  src="/support_assets/phone_icon.svg"
                  alt="Phone"
                  width={40}
                  height={40}
                />
                <a
                  href="tel:18006682185"
                  className="text-steel-gray text-[16px] hover:text-quantum-blue transition-colors min-w-0"
                >
                  1 800 668-2185.
                </a>
              </div>
              {/* Email */}
              <div className="flex items-center gap-4 p-4 min-w-0 xl:border-r border-gray-300">
                <Image
                  src="/support_assets/email_icon.svg"
                  alt="Email"
                  width={40}
                  height={40}
                />
                <a
                  href="mailto:info@ironcap.ca"
                  className="text-steel-gray text-[16px] hover:text-quantum-blue transition-colors break-words min-w-0"
                >
                  info@ironcap.ca
                </a>
              </div>
              {/* Live Chat Pre-Sales */}
              <div className="flex items-center gap-4 p-4 min-w-0 xl:border-r border-gray-300">
                <Image
                  src="/support_assets/chat_icon.svg"
                  alt="Chat"
                  width={40}
                  height={40}
                />
                <LiveChatLink
                  href="https://imoncall.01com.com/pre-sales/"
                  windowName="live-chat-pre-sales"
                  className="text-steel-gray text-[16px] hover:text-quantum-blue transition-colors min-w-0"
                >
                  Live Chat Pre-Sales
                </LiveChatLink>
              </div>
              {/* Live Chat After-Sales */}
              <div className="flex items-center gap-4 p-4 min-w-0">
                <Image
                  src="/support_assets/chat_icon.svg"
                  alt="Chat"
                  width={40}
                  height={40}
                />
                <LiveChatLink
                  href="https://imoncall.01com.com/ironcapchat/"
                  windowName="live-chat-after-sales"
                  className="text-steel-gray text-[16px] hover:text-quantum-blue transition-colors min-w-0"
                >
                  Live Chat After-Sales
                </LiveChatLink>
              </div>
            </div>
          </section>
        </div>
        <div className="mt-16 bg-gradient-to-r from-gray-200 via-white to-gray-200 py-8">
          <div className="max-w-[1512px] mx-auto px-6 sm:px-8 lg:px-10 xl:px-[95px]">
            <h2 className="text-[32px] leading-[40px] text-black text-quantum-blue font-medium mb-8">
              Documentation
            </h2>
            <DocumentsCards />
          </div>
        </div>
        <section className="bg-white py-16 flex justify-center">
          <Bottom/>
        </section>
      </div>
    </>
  );
}
