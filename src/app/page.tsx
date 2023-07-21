import { SectionContainer } from '@/components/SectionContainer'

import logo from '@/assets/logo.svg'
import hero1 from '@/assets/hero.png'
import hero2 from '@/assets/hero-2.png'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex w-screen flex-col">
      <SectionContainer>
        <div>
          <h1>Lorem ipsum dolor sit amet, consectetur</h1>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor
          </h2>

          <button>Sign up now</button>

          <div>
            <div>
              <span>Cryptos</span>
            </div>
            <div>
              <span>NFTs</span>
            </div>
            <div>
              <span>Games</span>
            </div>
          </div>
        </div>
        <div>
          <Image src={hero1} alt="" />
          <Image src={hero2} alt="" />
        </div>
      </SectionContainer>
      <SectionContainer>
        <div>
          {Array.from({ length: 4 }).map((_, index) => {
            return (
              <div key={index}>
                <strong>For your company</strong>
                <h3>Crypto Solutions</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam,{' '}
                </p>
              </div>
            )
          })}
        </div>
        <div>
          <div>
            <strong>Lorem ipsum </strong>
            <h3>Lorem ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor
            </p>
          </div>

          <button>Sign up now</button>
        </div>
      </SectionContainer>
      <SectionContainer>
        <div>
          <div>
            <strong>Lorem ipsum </strong>
            <h3>Lorem ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor
            </p>
          </div>
        </div>
        <div>
          <form>
            {/* <label>
              Email
              <input placeholder="Email" />
            </label> */}
            <button>Sign up now</button>
          </form>
        </div>
      </SectionContainer>
      <SectionContainer>
        <span>Copyright © 2022 - All rights reserved</span>
        <Image src={logo} alt="" />
      </SectionContainer>
    </main>
  )
}
