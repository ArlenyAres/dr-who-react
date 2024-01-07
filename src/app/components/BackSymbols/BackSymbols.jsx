import React from 'react'
import Image from 'next/image';
import '../BackSymbols/BackSymbols.css'

const imgSymbolYellow = '/assets/img/symbols/resistencia.png'
const imgSymbolViolet = '/assets/img/symbols/persistencia.png'

export default function () {
    return (
        <div >
            <div className='symbol__violet'>
                <Image src={imgSymbolViolet} alt='SymbolYellow' className='SymbolViolet'width={'400'} height={'400'}></Image>
            </div>
            <div className='symbol_yellow'>
                <Image src={imgSymbolYellow} alt='SymbolYellow' className='SymbolYellow'width={'650'} height={'650'} ></Image>
            </div>
        </div>
    
    )
}
