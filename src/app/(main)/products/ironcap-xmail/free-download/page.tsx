export default function IroncapXMailFreeDownloadPage() {
  return (
    <section className="min-h-[60vh] bg-white">
      <div className="mx-auto max-w-[1512px] px-6 py-16 md:px-[95px]">
        <div className="mx-auto max-w-[860px] text-center">
          <h2 className="text-[28px] font-medium leading-[36px] text-quantum-blue sm:text-[32px] sm:leading-[42px]">
            Try it Free
          </h2>
          <p className="mt-5 text-[15px] leading-[26px] text-steel-gray sm:text-[16px]">
            Simply go to{" "}
            <a
              href="https://www.ironcap.ca/ironcap-x/personal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-quantum-blue transition-colors hover:text-quantum-green hover:underline"
            >
              www.ironcap.ca/ironcap-x/personal
            </a>{" "}
            and get the FREE personal version today! A Business version with a
            central user management tool for the IT department to manage their
            users and passwords are also available. Now your email/files are
            truly end-to-end encrypted with no third-party trust.
          </p>
        </div>
      </div>
    </section>
  );
}
