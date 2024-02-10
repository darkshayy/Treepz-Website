import React from 'react'
import Image from 'next/image'

const TechCommLogos = () => {
  return (
    <div className="w-full sm:w-[864px] px-4 flex-wrap mx-auto gap-4 flex justify-between items-center my-[70px] sm:my-[176px]">
        <Image src="/techs/techcrunch.png" alt="tech crunch" width={66} height={32} />
        <Image src="/techs/techeconomy.png" alt="tech Economy" width={237} height={32} />
        <Image src="/techs/TechCabal.png" alt="tech cabal" width={40.1} height={40} />
        <Image src="/techs/treepz-build.png" alt="treepz build" width={107.1} height={40} />
        <Image src="/techs/Techpoint.png" alt="treepz point" width={133.1} height={40} />
        <Image src="/techs/disrupt-icon.png" alt="Disrupt" width={80.5} height={40} />
    </div>
  )
}

export default TechCommLogos