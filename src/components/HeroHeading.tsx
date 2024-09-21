import React from 'react'
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
const HeroHeading = () => {
  return (
    <div>
      <div className="flex items-baseline"><span className="pt-4 text-4xl text-center font-transparent">❄️☃️</span>
      <Heading className="font-black">SS Snow Blowing – Your Winter Woes, Gone in a Flurry!</Heading></div>
      
      <Paragraph className="max-w-xl mt-4">
        {" "}
        <Highlight>10+ Years of Experience</Highlight> in Keeping Driveways Snow-Free
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        From single to triple driveways, we keep your paths clear after{" "}
        <Highlight>every storm.</Highlight>
      </Paragraph>
    </div>
  )
}

export default HeroHeading
