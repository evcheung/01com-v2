import { Titles } from "@/components/Titles";
import { Button } from "@/components/ui/button";
export default function Login() {
  return (
    <>
      {/* ─── Page Title ─── */}
      <section className="bg-black flex items-center px-6 md:px-24 min-h-[196px]">
        <Titles text="Access Your Computer" />
      </section>
      <section className="w-full px-6 md:px-[95px] pt-16 pb-10 bg-white">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Login form */}
          <form className="bg-white/5 p-6 rounded-lg" action="#" method="post">
            <h3 className="text-gray-700 mb-4 text-lg">
              Login to your I'm InTouch account and pick a computer to connect
            </h3>
            <label className="block text-sm text-gray-700 mb-1">
              Login ID (email):
            </label>
            <input
              type="email"
              name="email"
              className="w-full mb-4 px-3 py-2 rounded bg-gray-100 text-gray-900"
            />

            <label className="block text-sm text-gray-700 mb-1">
              Password:
            </label>
            <input
              type="password"
              name="password"
              className="w-full mb-4 px-3 py-2 rounded bg-gray-100 text-gray-900"
            />

            <Button text="Login" textColor="text-gray-500" border="border-gray-500" type="submit" url={""} />
          </form>

          {/* Right: Quick find form */}
          <form className="bg-white/5 p-6 rounded-lg" action="#" method="get">
            <h3 className="text-gray-700 mb-4 text-lg">
              Quickly find my computer by the Computer name
            </h3>

            <label className="block text-sm text-gray-700 mb-1">
              Computer Name:
            </label>
            <input
              type="text"
              name="computerName"
              className="w-full mb-4 px-3 py-2 rounded bg-gray-100 text-gray-900"
            />

            <Button text="Go" textColor="text-gray-500" border="border-gray-500" type="submit" url={""} />
          </form>
        </div>
      </section>
      <section className="w-full mx-auto px-6 md:px-[95px] py-16 bg-white">
        <div className="w-full flex flex-col items-center gap-4">
          <p className="text-gray-700 text-lg">Not an I'm InTouch user yet?</p>
          <div className="flex gap-4">
            <Button text="Buy Now" textColor="text-gray-500" border="border-gray-500" type="button" url={""} />
            <Button text="Try it Free" textColor="text-gray-500" border="border-gray-500" type="button" url={""} />
          </div>
        </div>
      </section>
    </>
  );
}
