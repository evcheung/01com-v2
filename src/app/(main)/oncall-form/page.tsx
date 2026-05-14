import Image from "next/image";
import { Titles } from "@/components/Titles";
import { Button } from "@/components/ui/button";

const Trademark = () => <sup className="text-[0.55em]">™</sup>;
export default function OnCallForm() {
  return (
    <>
      <Titles
        text={
          <>
            IronCAP
            <Trademark /> OnCall Form
          </>
        }
      />
      <section className="bg-white flex items-center p-15 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        <div className="w-xs p-10 flex justify-center items-center">
          <p className="text-gray-600 text-lg">
            Enter the Session Code provided to you and click Go.
          </p>
        </div>
        <div className="relative w-full h-[500px]">
          <Image
            src="/oncall_assets/bracket.svg"
            alt="Description of image"
            width={500}
            height={500}
            className="w-full h-full object-contain hidden md:block"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center gap-4 w-full max-w-xs px-8">
              <h3 className="text-quantum-green font-semibold text-lg">
                Connect to Agent
              </h3>
              <input
                type="text"
                placeholder="Session Code"
                className="text-gray-600 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-quantum-green"
              />
              <input
                type="text"
                placeholder="Password"
                className="text-gray-600 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-quantum-green"
              />
              <Button
                url=""
                text="Go"
                textColor="text-quantum-green"
                border="border-quantum-green"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white flex flex-col  p-15 text-[20px] leading-[30px]">
        <h3 className="text-quantum-green">
          IronCAP <Trademark /> OnCall
        </h3>
        <p className="text-steel-gray text-[20px] leading-[30px]">
          With your permission, a temporary session will set up for the agent to
          remotely control your computer. You may terminate the session any
          time. Once terminated, everything regarding this support session will
          be erased leaving no trace to ensure security and privacy.
        </p>
        <p className="text-steel-gray text-[20px] leading-[30px]">
          During this remote support session, you may also have real-time chats
          with the agent. Chat logs can be saved for future references. (Chat
          session will be displayed once you have typed in your session code and
          authorized the connection.
        </p>
      </section>
      <section className="bg-white py-16 flex justify-center">
        <Button
          text=" LEARN MORE ABOUT 01 QUANTUM PRODUCTS"
          url="/products/ironcap-engine"
          border="border-quantum-green/60"
          textColor="text-quantum-green"
          hoverBg="hover:bg-quantum-green/10"
        />
      </section>
    </>
  );
}
