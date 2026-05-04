import Image from "next/image";
import { Titles } from "@/components/Titles";
import { Button } from "@/components/ui/button";
import { DocumentsCards } from "@/components/Documents";
import { Heading } from "@/app/(main)/customers/page";
export default function Support() {
  return (
    <>
      <Titles text="Support" />
      <div className="bg-white pb-20">
        <div className="max-w-[1512px] mx-auto px-6 md:px-[95px]">
          {/* parragraph */}
          <section className="flex items-center justify-center py-12 md:py-24 text-[20px] leading-[30px]">
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
            <div className="grid grid-cols-1 md:grid-cols-4">
              {/* Phone */}
              <div className="flex items-center gap-4 p-4 md:border-r border-gray-300">
                <Image
                  src="/support_assets/phone_icon.svg"
                  alt="Phone"
                  width={40}
                  height={40}
                />
                <span className="text-steel-gray text-[16px]">
                  1 800 668-2185.
                </span>
              </div>
              {/* Email */}
              <div className="flex items-center gap-4 p-4 md:border-r border-gray-300">
                <Image
                  src="/support_assets/email_icon.svg"
                  alt="Email"
                  width={40}
                  height={40}
                />
                <span className="text-steel-gray text-[16px]">
                  info@ironcap.ca
                </span>
              </div>
              {/* Live Chat Pre-Sales */}
              <div className="flex items-center gap-4 p-4 md:border-r border-gray-300">
                <Image
                  src="/support_assets/chat_icon.svg"
                  alt="Chat"
                  width={40}
                  height={40}
                />
                <span className="text-steel-gray text-[16px]">
                  Live Chat Pre-Sales
                </span>
              </div>
              {/* Live Chat After-Sales */}
              <div className="flex items-center gap-4 p-4">
                <Image
                  src="/support_assets/chat_icon.svg"
                  alt="Chat"
                  width={40}
                  height={40}
                />
                <span className="text-steel-gray text-[16px]">
                  Live Chat After-Sales
                </span>
              </div>
            </div>
          </section>
        </div>
        <div className="mt-16 bg-gradient-to-r from-gray-200 via-white to-gray-200 py-8 px-12">
          <div className="max-w-[1512px] mx-auto px-6 md:px-[95px]">
            <h2 className="text-[32px] leading-[40px] text-black text-quantum-blue font-medium mb-8">
              Documentation
            </h2>
            <DocumentsCards />
          </div>
        </div>
        <section className="bg-white py-16 flex justify-center">
          <Button
            text=" LEARN MORE ABOUT 01 QUANTUM PRODUCTS"
            url="/products"
            border="border-quantum-green/60"
            textColor="text-quantum-green"
            hoverBg="hover:bg-quantum-green/10"
          />
        </section>
      </div>
    </>
  );
}
