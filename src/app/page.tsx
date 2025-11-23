import LeftMenu from "@/components/LeftMenu";
import RightMenu from "@/components/RightMenu";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="flex gap-6">
    <div className="hidden xl:block w-[20%]"><LeftMenu/></div>
    <div className="w-full lg:w-[70%] xl:w-[50%]"></div>
    <div className="hidden lg:block w-[30%]"><RightMenu/></div>
    </div>
    </>
  );
}
