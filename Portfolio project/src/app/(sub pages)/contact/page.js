import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";



export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="background-image"
        className=" -z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"
      />

      <article className="relative w-full flex flex-col items-center justify-center spacey-8">
        <div className="flex flex-col items-center justify-center spacey-6 w-3/4">
          <h1 className="text-5xl text-accent font-semibold">Contact</h1>
          <p className="text-lg">Get in touch</p>
        </div>
      </article>
    </>
  );

}

{/*Stopped at - 2:17:52
  contact page*/}
