import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-5 flex-1    items-center">
      <div className="sm:col-span-3 px-4 sm:px-8 md:px-14 w-full mx-auto ">
        <Image
          width={350}
          height={300}
          src={
            "https://res.cloudinary.com/dsdevazn9/image/upload/v1753437015/vecteezy_flat-isometric-concept-illustration-web-application_6202175_km4vf8.jpg"
          }
          alt="decorative image for landing page"
          className="object-cover sm:hidden "
        />
        <p className="text-5xl my-2 font-semibold text-primary ">
          ace<span className="text-zinc-800">repairs</span>
        </p>
        <h1 className="text-5xl text-primary font-bold tracking-tight mb-4 ">
          {" "}
          Fast, Reliable Tech Fixes
        </h1>
        <p className="tracking-tight text-gray-600 ">
          Get expert repair services for laptops, mobile phones, and computers.
          Whether it’s a cracked screen, slow system, or hardware issue — we
          bring your devices back to life with precision and care.
        </p>

        <div className="mt-3 text-sm font-normal">
          <p className="">Opens daily: 9AM-5PM</p>
          <address className="not-italic text-gray-700">
            <p> Kathmandu-16, Macchapokhari</p>
            <p>Buddha Mall, 2nd Floor</p>
            <p>010-334466</p>
          </address>
        </div>
      </div>
      <div className="hidden sm:block sm:col-span-2">
        <Image
          width={500}
          height={500}
          src={
            "https://res.cloudinary.com/dsdevazn9/image/upload/v1753437015/vecteezy_flat-isometric-concept-illustration-web-application_6202175_km4vf8.jpg"
          }
          alt="decorative image for landing page"
          className="object-cover"
        />
      </div>
    </div>
  );
}
