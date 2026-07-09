import { Button } from "@/components/ui/button";

const Trademark = () => <sup className="text-[0.55em]">&trade;</sup>;

export default function ResourcesIntellectualProperties() {
  return (
    <section className="bg-[#f5f6f8] py-16">
      <div className="max-w-[1512px] mx-auto px-6 sm:px-8 lg:px-10 xl:px-[95px]">
        <div className="flex items-center gap-4 sm:gap-6 mb-12">
          <h2 className="text-quantum-blue text-[24px] sm:text-[26px] font-medium leading-[30px] whitespace-nowrap">
            Intellectual Properties
          </h2>
          <div className="flex-1 h-px bg-lite-gray/60" />
        </div>

        <div className="max-w-[1230px] space-y-6">
          <p className="text-steel-gray text-[15px] leading-[24px]">
            This page summarizes intellectual property references currently
            presented across 01 Quantum website materials for IronCAP
            <Trademark /> technologies and related offerings.
          </p>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[20px] border border-lite-gray/60 bg-white p-8">
              <h3 className="text-quantum-green text-[20px] font-medium leading-[28px] mb-4">
                Patent References
              </h3>
              <ul className="space-y-3 text-steel-gray text-[15px] leading-[24px] list-disc pl-5">
                <li>
                  01 Quantum describes IronCAP<Trademark /> technologies as
                  patented and patent-pending across multiple pages on this
                  site.
                </li>
                <li>
                  The IronCAP<Trademark /> Engine materials reference U.S.
                  Patent No. 11,271,715 for IronCAP cryptography deployments.
                </li>
              </ul>
            </div>

            <div className="rounded-[20px] border border-lite-gray/60 bg-white p-8">
              <h3 className="text-quantum-green text-[20px] font-medium leading-[28px] mb-4">
                Trademark References
              </h3>
              <ul className="space-y-3 text-steel-gray text-[15px] leading-[24px] list-disc pl-5">
                <li>IronCAP<Trademark /> </li>
                <li>IronCAP<Trademark /> Engine</li>
                <li>IronCAP<Trademark /> X</li>
                <li>IronCAP<Trademark /> XMail</li>
                <li>IronCAP<Trademark /> InTouch</li>
                <li>IronCAP<Trademark /> OnCall</li>
              </ul>
            </div>
          </div>

          <p className="text-steel-gray text-[15px] leading-[24px]">
            Other product names, company names, brands, and trademarks
            referenced on this website remain the property of their respective
            owners.
          </p>

          <div className="pt-2">
            <Button
              text="CONTACT · · ·"
              url="/contact"
              border="border-quantum-green/60"
              textColor="text-quantum-green"
              hoverBg="hover:bg-quantum-green/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
