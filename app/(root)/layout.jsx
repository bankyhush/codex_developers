import FooterSection from "@/components/footer";
import HeaderSection from "@/components/header";

export default function FrontPageLayout({ children }) {
  return (
    <>
      <HeaderSection />
      {children}

      <FooterSection />
    </>
  );
}
