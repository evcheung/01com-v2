"use client";

import { FormEvent, useState } from "react";
import onCallIconAnim from "@/assets/animations/icon-IC-onCall.json";
import LottiePlayer from "@/components/LottiePlayer";

const DESCRIPTION_PLACEHOLDER =
  "(Please briefly describe your question or problem)";
const MAX_DESCRIPTION_LENGTH = 500;

function OnCallName({ className = "" }: { className?: string }) {
  return (
    <span className={className}>
      IronCAP
      <sup className="ml-0.5 align-super text-[0.48em] font-semibold">TM</sup>{" "}
      OnCall
    </span>
  );
}

export default function PreSalesChatForm() {
  const [description, setDescription] = useState(DESCRIPTION_PLACEHOLDER);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    const form = event.currentTarget;
    const formData = new FormData(form);
    const firstName = String(formData.get("fname") || "");
    const lastName = String(formData.get("lname") || "");
    const currentDescription = String(formData.get("description") || "");
    const techId = String(formData.get("tech_id") || "");

    if (firstName.length === 0) {
      event.preventDefault();
      alert("First Name is a required field");
      return;
    }

    if (lastName.length === 0) {
      event.preventDefault();
      alert("Last Name is a required field");
      return;
    }

    if (
      currentDescription.length === 0 ||
      currentDescription === DESCRIPTION_PLACEHOLDER
    ) {
      event.preventDefault();
      alert("Description is required field.");
      return;
    }

    if (techId !== "" && techId === "0") {
      event.preventDefault();
      alert("Invalid Agent ID");
    }
  }

  return (
    <main className="flex min-h-screen justify-center overflow-x-hidden bg-black text-white">
      <section className="flex min-h-screen w-full max-w-[520px] flex-col border-x border-white/10 bg-black shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
        <header className="border-b border-white/10 bg-black px-5 py-4">
          <div className="flex items-end gap-4">
            <div className="h-14 w-12 shrink-0">
              <LottiePlayer src={onCallIconAnim} className="h-full w-full" />
            </div>
            <a
              href="https://www.01com.com/imoncall"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-w-0 flex-col items-start gap-1 pb-0.5 transition-colors hover:text-quantum-green"
            >
              <OnCallName className="text-[21px] font-semibold leading-none text-quantum-blue sm:text-[24px]" />
              <span className="text-[14px] font-semibold uppercase tracking-[0.14em] text-quantum-green">
                Live Chat
              </span>
            </a>
          </div>
        </header>

        <form
          name="queform"
          method="post"
          action="https://imoncall.01com.com/pre-sales/"
          onSubmit={handleSubmit}
          className="flex w-full flex-1 flex-col px-5 py-5"
        >
          <input type="hidden" name="init_msg" id="init_msg" value="" />
          <input type="hidden" name="todo" id="todo" value="create_queue" />
          <input type="hidden" name="tech_id" value="" />

          <div className="mb-5 rounded-[8px] border border-white/10 bg-white/[0.04] p-4">
            <p className="text-[14px] leading-[22px] text-lite-gray">
              You have reached our Live Chat support team. Please enter your
              name and question. If you are being put on-hold for more than 5
              minutes due to our unusual high chat volume, please cancel and
              click &quot;Submit call-back&quot;. We will get back to you shortly.
            </p>
          </div>

          <div className="grid gap-4">
            <label className="grid gap-1.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-quantum-green">
              First name:
              <input
                type="text"
                name="fname"
                tabIndex={1}
                maxLength={32}
                autoFocus
                className="h-11 rounded-[4px] border border-white/15 bg-white px-3 text-[15px] font-normal normal-case tracking-normal text-steel-gray outline-none transition-colors focus:border-quantum-green focus:ring-2 focus:ring-quantum-green/20"
              />
            </label>

            <label className="grid gap-1.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-quantum-green">
              Last name:
              <input
                type="text"
                name="lname"
                tabIndex={2}
                maxLength={32}
                className="h-11 rounded-[4px] border border-white/15 bg-white px-3 text-[15px] font-normal normal-case tracking-normal text-steel-gray outline-none transition-colors focus:border-quantum-green focus:ring-2 focus:ring-quantum-green/20"
              />
            </label>

            <label className="grid gap-1.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-quantum-green">
              Category:
              <select
                name="category_idx"
                tabIndex={3}
                defaultValue="2889"
                className="h-11 rounded-[4px] border border-white/15 bg-white px-3 text-[15px] font-normal normal-case tracking-normal text-steel-gray outline-none transition-colors focus:border-quantum-green focus:ring-2 focus:ring-quantum-green/20"
              >
                <option value="2889" title="General Help">
                  General Help
                </option>
              </select>
            </label>

            <label className="sr-only" htmlFor="live-chat-description">
              Description
            </label>
            <textarea
              id="live-chat-description"
              name="description"
              tabIndex={5}
              value={description}
              onFocus={(event) => {
                if (event.currentTarget.value === DESCRIPTION_PLACEHOLDER) {
                  event.currentTarget.select();
                }
              }}
              onChange={(event) => {
                const nextValue = event.currentTarget.value;

                if (nextValue.length > MAX_DESCRIPTION_LENGTH) {
                  alert(
                    "The description you input has reached the 500 chars maximum allowed.",
                  );
                  setDescription(nextValue.slice(0, MAX_DESCRIPTION_LENGTH));
                  return;
                }

                setDescription(nextValue);
              }}
              className="min-h-[118px] resize-y rounded-[4px] border border-white/15 bg-white px-3 py-3 text-[15px] leading-[22px] text-steel-gray outline-none transition-colors focus:border-quantum-green focus:ring-2 focus:ring-quantum-green/20"
            />
          </div>

          <div className="mt-5 flex flex-wrap justify-end gap-3">
            <button
              type="submit"
              className="inline-flex min-h-11 items-center justify-center rounded-bl-lg rounded-tr-lg border border-quantum-green bg-quantum-green px-5 text-[12px] font-semibold uppercase tracking-[0.14em] text-black transition-colors hover:bg-quantum-green/85"
            >
              Submit request
            </button>
          </div>
        </form>

        <footer className="border-t border-white/10 bg-black px-5 py-4">
          <div className="flex flex-wrap items-center justify-between gap-3 text-[12px] leading-[18px] text-lite-gray">
            <div>
              <p>Copyright 2000-2026</p>
              <p>01 Quantum.</p>
            </div>
          </div>
        </footer>
      </section>
    </main>
  );
}
