import { ContainerScroll } from "./Ui/container-scroll-animation";
import Image from "./Image";
import Img from '../assets/—Pngtree—3d render of blue background_5780748.jpg';

export default function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden bg-black">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-gradient-to-r from-gray-100 via-gray-300 to-gray-500 bg-clip-text text-transparent">
                Scroll Animations
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={Img}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
