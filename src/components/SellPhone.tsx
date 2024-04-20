import Image from "next/image";
import { Input } from "./ui/input";

const SellPhone: React.FC = () => {
  return (
    <div className="py-8 border-y border-t-black w-full">
      <div className="w-full mx-auto max-w-6xl border-2 rounded-lg px-6 pt-12 pb-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center gap-[2rem] w-full sm:w-[50%]">
            <h3 className="text-4xl font-semibold">
              Sell Your Moble Phone For Instant Cash
            </h3>

            <Input
              className="shadow-md h-[3rem] px-4"
              placeholder="Search Your Mobile To Sell"
            />

            <div className="flex items-center justify-center w-full">
              <div className="mx-auto w-full bg-black border-[0.8px] border-black rounded-full" />
              <p className="w-[26rem] text-center text-sm">Or Choose A Brand</p>
              <div className="mx-auto w-full bg-black border-[0.8px] border-black rounded-full" />
            </div>

            <div className="flex flex-wrap sm:flex-nowrap items-center justify-start gap-3 w-full">
              <Image src="/apple.svg" alt="apple" width={100} height={100} />
              <Image src="/samsung2.svg" alt="apple" width={100} height={100} />
              <Image src="/oneplus2.svg" alt="apple" width={100} height={100} />
              <Image src="/vivo2.svg" alt="apple" width={100} height={100} />
              <button className="underline cursor-pointer">More Brand</button>
            </div>
          </div>

          <div className="relative h-[198px] w-full sm:w-[50%] mb-auto">
            <Image
              className="object-cover"
              src="/sell_mobile_phone.svg"
              alt="sell mobile phone"
              fill
            />
          </div>
        </div>

        <div className="flex justify-center items-center gap-5 sm:gap-12 mt-8 sm:mt-12">
          <p>Maximum Value</p>
          <p>Self & Hassle-Free</p>
          <p>Free Doorstep Pickup</p>
        </div>
      </div>
    </div>
  );
};

export default SellPhone;
