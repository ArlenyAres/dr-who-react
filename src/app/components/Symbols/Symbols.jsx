import React from 'react'
import Image from 'next/image';
import './SymbolsStyle.css'

const imgSymbolBlue = '/assets/img/symbols/persistencia-2.png'
const imgSymbolYellow = '/assets/img/symbols/resistencia.png'
const imgSymbolWhite = '/assets/img/symbols/vencer.png'

export default function Symbols() {
    return (
      <div className= 'image_Container'>
        <Image src={imgSymbolBlue} alt='SymbolBlue' className='SymbolBlue' width={'225'} height={'225'}></Image>
        <Image src={imgSymbolWhite} alt='SymbolWhite' className='SymbolWhite' width={'255'} height={'255'}></Image>
        <Image src={imgSymbolYellow} alt='SymbolYellow' className='SymbolYellow'width={'400'} height={'400'} ></Image>
      </div>
    );
  }
