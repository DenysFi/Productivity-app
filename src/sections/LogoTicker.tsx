import Image from "next/image"
import LogoAcme from "@/assets/logo-acme.png"
import LogoApex from "@/assets/logo-apex.png"
import LogoCelestial from "@/assets/logo-celestial.png"
import LogoEcho from "@/assets/logo-echo.png"
import LogoPulse from "@/assets/logo-pulse.png"
import LogoQuantum from "@/assets/logo-quantum.png"

export const LogoTicker = () => {
  return (
    <section className="bg-white py-8 md:py-12">
      <div className="__container">
        <div className="logos">
          <div className="logos-slide">
            <Image
              className="logo-ticker-image"
              src={LogoAcme}
              alt="LogoAcme"
            />
            <Image
              className="logo-ticker-image"
              src={LogoApex}
              alt="LogoApex"
            />
            <Image
              className="logo-ticker-image"
              src={LogoCelestial}
              alt="LogoCelestial"
            />
            <Image
              className="logo-ticker-image"
              src={LogoEcho}
              alt="LogoEcho"
            />
            <Image
              className="logo-ticker-image"
              src={LogoPulse}
              alt="LogoPulse"
            />
            <Image
              className="logo-ticker-image"
              src={LogoQuantum}
              alt="LogoQuantum"
            />
          </div>
          <div className="logos-slide">
            <Image
              className="logo-ticker-image"
              src={LogoAcme}
              alt="LogoAcme"
            />
            <Image
              className="logo-ticker-image"
              src={LogoApex}
              alt="LogoApex"
            />
            <Image
              className="logo-ticker-image"
              src={LogoCelestial}
              alt="LogoCelestial"
            />
            <Image
              className="logo-ticker-image"
              src={LogoEcho}
              alt="LogoEcho"
            />
            <Image
              className="logo-ticker-image"
              src={LogoPulse}
              alt="LogoPulse"
            />
            <Image
              className="logo-ticker-image"
              src={LogoQuantum}
              alt="LogoQuantum"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
