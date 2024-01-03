import Link from 'next/link';
import LogoImage from '../../../../public/assets/img/logos/logo.png'
import Image from 'next/image';
import './Logo.css'


export default function Logo() {
    return (
        <div className='logo__img'>
            <Link href="/">
            <Image src={LogoImage} alt="DoctorWhoHome" width={150} height={150}/>
            </Link>
        </div>
    )
}
