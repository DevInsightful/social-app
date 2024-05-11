import Image from "next/image";
export default function Home() {
  return (
    <div className="flex bg-slate-400 justify-center items-center">
      <div>
        <h1 className="text-[6rem] font-bold">
          Creative
          <br />
          Thoughts
          <br />
          Agency.
        </h1>
        <p className="text-[1.25rem]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.
        </p>
        <div className="flex gap-5">
          <button className="bg-[#417bfd] text-[#e9e9ed] font-semibold px-5 py-4 rounded-lg">
            Learn More
          </button>
          <button className="bg-[#e9e9ed] text-black font-semibold px-5 py-4 rounded-lg">
            Contact
          </button>
        </div>
        <Image
          src="/brands.png"
          width={500}
          height={500}
          alt="Failed to load brands"
        />
      </div>
      <div>
        <Image src="/hero.gif" width={500} height={500} alt="Hero Image" />
      </div>
    </div>
  );
}
