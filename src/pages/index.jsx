import Content from "@/components/content";
import Menu from "@/components/menu";
import Preview from "@/components/preview";

export default function Home() {
  return (
    <div className="w-full h-[100vh]">
      <div className="w-full h-full flex flex-col">
        <Menu />
        <Content />
      </div>
    </div>
  );
}
