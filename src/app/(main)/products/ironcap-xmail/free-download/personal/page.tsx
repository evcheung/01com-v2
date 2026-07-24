import { redirect } from "next/navigation";
import { IRONCAP_X_FREE_DOWNLOAD_URL } from "@/components/products/ironcapDownloadLinks";

export default function IroncapXMailPersonalDownloadPage() {
  redirect(IRONCAP_X_FREE_DOWNLOAD_URL);
}
