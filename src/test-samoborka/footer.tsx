import FooterImg from "@/assets/ui/footer.svg";
import Container from "@/components/ui/container";
import ScrollTopButton from "@/components/ui/scroll-top-button";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-650 text-white overflow-hidden">
      <div className="mt-20 px-2">
        <FooterImg />
      </div>
      <div className="container mx-auto grid grid-cols-1 grid-rows-[1fr_1px_1fr] lg:grid-cols-[1fr_1px_1fr] lg:grid-rows-1 rtl-grid lg: ltr:grid mb-16 mt-28 gap-4 lg:gap-30 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 row-start-3 lg:row-start-1 lg:col-start-1 gap-6 lg:gap-2">
          <div>
            <h4 className="text-2xl lg:text-3xl mb-2 lg:mb-4">
              Samoborka d.d.
            </h4>
            <div className="text-xl lg:text-2xl text-gray-100">
              Zagrebačka 32/a
            </div>
            <div className="text-xl lg:text-2xl text-gray-100">
              10430 Samobor
            </div>
            <div className="text-xl lg:text-2xl text-gray-100">
              Hrvatska (Croatia)
            </div>
          </div>
          <div>
            <h4 className="text-2xl lg:text-3xl mb-2 lg:mb-4">Kontakt</h4>
            <div className="text-xl lg:text-2xl text-gray-100">
              samoborka@samoborka.hr
            </div>
            <div className="text-xl lg:text-2xl text-gray-100">
              +385 (1) 3322 888
            </div>
          </div>
        </div>
        <div className="border-l-1 border-b-1 border-gray-200 w-full lg:w-[1px] h-[1px] lg:h-full"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 row-start-1 lg:row-start-1 lg:col-start-3 gap-6 lg:gap-2">
          <div>
            <Link
              className="text-2xl md:text-3xl block mb-2"
              href={"/products"}
            >
              Proizvodi
            </Link>

            <Link
              className="text-2xl md:text-3xl block mb-2"
              href={"/documents"}
            >
              Dokumenti & cjenici
            </Link>
            <Link className="text-2xl md:text-3xl block mb-2" href={"/about"}>
              O nama
            </Link>
          </div>
          <div>
            <Link className="text-2xl md:text-3xl block mb-2" href={"/news"}>
              Novosti
            </Link>
            <Link className="text-2xl md:text-3xl block mb-2" href={"/contact"}>
              Kontakt
            </Link>
            <Link className="text-2xl md:text-3xl block mb-2" href={"/faq"}>
              FAQ
            </Link>
          </div>
        </div>
      </div>
      <Container className="mb-16 text-center">
        <ScrollTopButton />
      </Container>

      <div className="border-t-1 border-gray-50">
        <Container className="mb-8 mt-6 grid grid-cols-1 md:grid-cols-2 px-4 gap-4">
          <div className="flex gap-4 justify-around md:justify-start">
            <div>Samoborka {currentYear}</div>
            <div>Sva prava pridržana</div>
          </div>
          <div className="flex gap-4 justify-around md:justify-end">
            <Link href={"/legal/privacy-policy"}>Legal</Link>
            <Link href={"/legal/investors"}>Investitori</Link>
            <Link href={"/legal/provedba-eu-projekta"}>EU projekt</Link>
            <Link href={"/legal/provedba-eu-projekta-modefon"}>
              EU projekt modefon
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
