import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import Form from "@/components/contact/Form";




export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        priority sizes="100vw"
        alt="background-image"
        className=" -z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 spacey-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-5xl text-accent font-semibold text-center text-4xl capitalize">
            Contact</h1>
          <p className="text-center font-light text-sm xs:text-base py-2 ">Embark on a journey of connection! By filling out the form below, you’ll send a message through the mystical ether, allowing your thoughts to reach me. Let’s weave our stories together and create something truly enchanting!</p>
        </div>
        <Form/>
      </article>
    </>
  );

}

