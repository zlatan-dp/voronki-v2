"use client"

import {useRouter} from "next/navigation";
import {StepType} from "@/app/actions/actions.types";
import {getCurrentTime} from "@/app/actions/steps.action";
import Image from "next/image";
import './styles.landing.css'
import pagePicOne from "@/app/static/img/landing/kidsTV_with_blob.png";
import pagePicTwo from "@/app/static/img/landing/present_with_blob.png";
import pagePicThree from "@/app/static/img/landing/night light blob.png";
import pagePicFour from "@/app/static/img/landing/screen_with_ball.png";
import pagePicFive from "@/app/static/img/landing/tv_corner_with_frame.png";
import mediaExpertImage from "@/app/static/img/landing/Media-Expert_Logo.webp";
import {nextStep} from "@/app/actions/steps-client.action";


export default function StepFivePage() {

  const router = useRouter();

  const goToNextStep = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!(e.target instanceof HTMLElement)) return;

    const target = e.target.closest('button')?.dataset.target || '';

    await nextStep({
      step: 2,
      type: StepType.Info,
      question: "Landing",
      answer: target,
      time: await getCurrentTime(),
    })



    if (target === 'mediaexpert') {
      // await deleteSessionId()
      window.location.href = 'https://www.mediaexpert.pl/telewizory-i-rtv/telewizory/telewizor-kivi-kids-tv-32-led-android-tv?%2Fsearch%3Fquery[menu_item]=&query[querystring]=kidstv'
    }
    else router.push("/checkout/delivery");

  }

  const scrollToBottom = (event: React.MouseEvent) => {
    event.preventDefault()
    // if (!(e.target instanceof HTMLElement)) return
    const target = document.getElementById('go-to-checkout-button')
    if (!target) return
    target.scrollIntoView({behavior: "smooth"})
  }

  return (
      <div className="landing-page">
        <section>
          <Image
              className={'img1'}
              src={pagePicOne}
              alt="KIVI KidsTV"
              priority={true}
          />
          <h1>Telewizor KIVI KidsTV dba o zdrowie dziecka</h1>
          <div className="text">
            <p>KIVI KidsTV – pierwszy telewizor, specjalnie zaprojektowany
              z myślą o potrzebach dzieci.</p>
            <p>Podczas oglądania treści na KIVI KidsTV dziecko znajduje się
              znacznie dalej od ekranu niż przy używaniu tabletu czy telefonu.
              Wbudowana lampka nocna AlumiGlow oraz technologia ochrony przed
              niebieskim światłem LowBlue Light zmniejszają obciążenie oczu</p>
          </div>
          <button className={'button'} onClick={scrollToBottom}>Chcę zamówić <br/>KIVI KidsTV</button>
          {/*<Link href={'#go-to-checkout-button'}>więcej o KIVI KidsTV</Link>*/}
        </section>

        <section>
          <Image
              className={'img1'}
              src={pagePicTwo}
              alt="KIVI KidsTV Surprise"
              priority={true}
          />
          <h1 className="accent">KIVI KidsTV</h1>
          <h2>Więcej niż tylko telewizor</h2>
          <div className="text">
            <p>Nowoczesny telewizor z chronionym ekranem, wbudowaną lampką
              nocną i unikalną ramką-konstruktorem.</p>
          </div>
        </section>

        <section>
          <Image
              className={'img1'}
              src={pagePicThree}
              alt="KIVI KidsTV Night light blob"
              priority={true}
          />
          <h1>Wbudowana lampka nocna AlumiGlow</h1>
          <div className="text">
            <p>Lampka nocna wbudowana w KIVI KidsTV zapewnia miękkie
              oświetlenie wnętrza Ambient Light. Wraz z technologią
              Low Blue Light dba o zdrowie oczu dziecka. Lampka jest
              sterowana pilotem telewizora i nie wymaga osobnego
              zasilania ani podłączenia</p>
          </div>
        </section>

        <section>
          <Image
              className={'img1'}
              src={pagePicFour}
              alt="KIVI KidsTV with ball"
              priority={true}
          />
          <h1>Szkło ochronne i mocowanie do powierzchni</h1>
          <div className="text">
            <p>Specjalne hartowane szkło chroni ekran KIVI KidsTV
              przed uszkodzeniem, nawet przez ciężkie przedmioty.
              A w połączeniu z zestawem naklejek mocujących* Twój
              KidsTV będzie solidnie przytwierdzony do powierzchni
              i wytrzyma wszelkie dziecięce psoty. <br/>
              <span>* Naklejki są dołączone do zestawu</span></p>
          </div>
        </section>

        <section>
          <Image
              className={'img1'}
              src={pagePicFive}
              alt="KIVI KidsTV brick style"
              priority={true}
          />
          <h1>Ramka w stylu Brick-style Design</h1>
          <div className="text">
            <p>Aktualizuj design swojego KIVI KidsTV codziennie!
              Ramka jest kompatybilna ze wszystkimi popularnymi
              konstruktorami typu Brick. To doskonały sposób na
              rozwijanie kreatywności dziecka i umożliwienie mu
              wyrażania swojej wyobraźni</p>
          </div>
        </section>

        <section>
          <Image
              className={'img1'}
              src={pagePicOne}
              alt="KIVI KidsTV brick style"
              priority={true}
          />
          <h1 className="accent">KIVI KidsTV</h1>
          <h2>Specyfikacje techniczne</h2>
          <div className="lists">
            <div className="list-block">
              <h4>Ekran</h4>
              <ul>
                <li>32 cale, FullHD</li>
                <li>16,7 miliona kolorów</li>
                <li>Nowoczesne technologie poprawy obrazu i ochrony oczu</li>
              </ul>
            </div>
            <div className="list-block">
              <h4>Hardware</h4>
              <ul>
                <li>WiFi 2,4 / 5Hz, Bluetooth 5.1</li>
                <li>HDMI x3, USB x2</li>
                <li>Pilot z funkcją sterowania głosowego</li>
              </ul>
            </div>
            <div className="list-block">
              <h4>Software</h4>
              <ul>
                <li>AndroidTV 11</li>
                <li>Google Assistant & Google Home</li>
                <li>Kontrola rodzicielska</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <button
              className={'button landing-button'}
              onClick={goToNextStep}
              data-target={'KIVI'}
          >
            Zamów KidsTV na tej stronie
          </button>

          <div className={'mediaexpert-label'}>
            Lub zamów u naszego partnera:
          </div>

          <button
              className={'button  landing-button'}
              id={'go-to-checkout-button'}
              onClick={goToNextStep}
              data-target={'mediaexpert'}
          >
            <Image
                className={'img1'}
                src={mediaExpertImage}
                alt="mediaexpert"
                priority={true}
            />
          </button>
        </section>
      </div>
  )
}