import Image from 'next/image';
import SocialNetStyles from './SocialNetStyles.css'
import facebookIcon from '../../../../public/assets/img/icons/facebook.svg';
import xIcon from '../../../../public/assets/img/icons/simple-icons_x.svg'
import intagramIcon from '../../../../public/assets/img//icons/mdi_instagram.svg'
import tiktokIcon from '../../../../public/assets/img//icons/ic_baseline-tiktok.svg'



export default function SocialNetWorks() {
    return (
    <div className='social__media'>
        <a href=''>
            <Image src={facebookIcon} alt='Facebook' width={24} height={24} />
        </a>
        <a href=''>
            <Image src={xIcon} alt='xIcon' width={24} height={24} />
        </a>
        <a href=''>
            <Image src={intagramIcon} alt='Instagram' width={24} height={24} />
        </a>
        <a href=''>
            <Image src={tiktokIcon} alt='Tiktok”'width={24} height={24}/>
        </a>
    </div>
    )
}