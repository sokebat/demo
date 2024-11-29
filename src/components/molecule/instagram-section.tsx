import Image from "next/image";
import Link from "next/link";

const InstagramSection = () => {
  const images = [
    "https://images.unsplash.com/photo-1603217192766-e9db2d08a0fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHdvbWVuJTIwY2xvdGhlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=480&h=480&q=100",
    "https://images.unsplash.com/photo-1603217039640-afce9bb7d785?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&h=480&q=100",
    "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvbWVuJTIwY2xvdGhlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=480&h=480&q=100",
    "https://images.unsplash.com/photo-1599265866618-44bf5b03def6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHdvbWVuJTIwY2xvdGhlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=480&h=480&q=100",
    "https://images.unsplash.com/photo-1615125990475-b318176a49cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHdvbWVuJTIwY2xvdGhlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=480&h=480&q=100",
    "https://images.unsplash.com/photo-1560253034-1a9c043ffb28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHdvbWVuJTIwY2xvdGhlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=480&h=480&q=100",
  ];

  return (
    <section className=" pt-32 xl:pt-40 2xl:pt-60 mx-auto max-w-7xl 2xl:px-0">
      <div>
        <h2 className="text-3xl md:text-4xl text-center">
          <span className="font-bold">Instagram</span>
          <br />
          <Link href="https://www.instagram.com/hyperce_io" target="_blank">
            @hyperce_io
          </Link>
        </h2>
        <div className="flex overflow-hidden mt-6 gap-4">
          {images.map((src, index) => (
            <figure
              key={index}
              className="w-60 h-96 overflow-hidden flex-shrink-0"
            >
              <Image
                src={src}
                alt={`Instagram Image ${index + 1}`}
                width={240}
                height={384}
                className="w-full h-full object-cover"
                quality={100}
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
