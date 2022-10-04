import { HomeContainer, Product } from "../styles/pages/home";
import Image from "next/future/image";

import shirt1 from '../assets/shirt/shirt-01.png'
import shirt2 from '../assets/shirt/shirt-02.png'
import shirt3 from '../assets/shirt/shirt-03.png'
import shirt4 from '../assets/shirt/shirt-04.png'
import shirt5 from '../assets/shirt/shirt-05.png'

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={shirt1} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product>
        <Image src={shirt2} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product>
        <Image src={shirt3} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
