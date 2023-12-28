import BreadcrumbBorder from "@/components/ui/custom/breadcomb-border";

export default function Home() {
  return (
    <>
      <BreadcrumbBorder
        props={[
          { text: "Home", href: "123" },
          { text: "Depth1", href: "123" },
          { text: "Current", href: "123" },
        ]}
      />
    </>
  );
}
