// app/services/ppc/page.jsx
import PpcElegantClient from "../components/PpcElegentClient"; // ✅ same folder, so "./" not "../components"

export const metadata = {
  title: "PPC Marketing Agency | Ads Services & Performance Marketing", // ✅ string, not { default: ... }
  description:
    "Boost sales with expert PPC management services. From Google Ads to performance marketing, our agency drives results. Start your campaigns today!",
  alternates: {
    canonical: "/services/ppc",
  },
};

export default function PayPerClickAdvertising() {
  return <PpcElegantClient />; // ✅ return the JSX
}
