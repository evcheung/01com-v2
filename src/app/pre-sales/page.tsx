import type { Metadata } from "next";
import PreSalesChatForm from "@/components/live-chat/PreSalesChatForm";

export const metadata: Metadata = {
  title: "IronCAP TM OnCall",
};

export default function PreSalesPage() {
  return <PreSalesChatForm />;
}
