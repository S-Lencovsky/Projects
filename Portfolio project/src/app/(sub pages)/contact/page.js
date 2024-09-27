import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import Form from "@/components/contact/Form";




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
          <h1 className="text-5xl text-accent font-semibold text-center text-4xl capitalize">
            Contact</h1>
          <p className="text-center font-light">Embark on a journey of connection! By filling out the form below, you’ll send a message through the mystical ether, allowing your thoughts to reach me. Let’s weave our stories together and create something truly enchanting!</p>
        </div>
        <Form/>
      </article>
    </>
  );

}

