import SocialNetworks from '../SocialNetWorks/SocialNetWorks'
import Image from 'next/image'
import logoCadena from '../../../../public/assets/img/logos/logo-cadena.png'
import FooterStyle from './FooterStyle.css'



export default function Footer() {
    return(
        <footer className='footer__container'>
            <Image src={logoCadena} alt='cadena de dr. Who' width={35} height={34} className='footer__logo'/>
            <SocialNetworks className='footer__logo__Media'/>
        </footer>
    )
}