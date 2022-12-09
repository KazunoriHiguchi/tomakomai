import React from 'react'
import TopInfo from '../../GlobalComponents/TopInfo'
import Hero from '../../GlobalComponents/HeroComponent'
import Title from '../../GlobalComponents/TitleComponent'
import Box from '../../GlobalComponents/BoxComponent'

// ---------------Images-------------------
import Loading from "../../../images/Loading.png";

const Transportation = () => {
  return (
    <>
      <TopInfo />
      <Hero type={"Transportation"} span={"-交通-"}/>
      <Title type={"Loading"}/>
        <div className='flex flex-wrap justify-center items-center'>
          <Box to={"/Transportation/none"} type={"Loading"} src={Loading} alt={"Loading"} />
          <Box to={"/Transportation/none"} type={"Loading"} src={Loading} alt={"Loading"} />
          <Box to={"/Transportation/none"} type={"Loading"} src={Loading} alt={"Loading"} />
        </div>
      <Title type={"Loading"}/>
        <div className='flex flex-wrap justify-center items-center'>
          <Box to={"/Transportation/none"} type={"Loading"} src={Loading} alt={"Loading"} />
          <Box to={"/Transportation/none"} type={"Loading"} src={Loading} alt={"Loading"} />
          <Box to={"/Transportation/none"} type={"Loading"} src={Loading} alt={"Loading"} />
        </div>
      <Title type={"Loading"}/>
        <div className='flex flex-wrap justify-center items-center'>
          <Box to={"/Transportation/none"} type={"Loading"} src={Loading} alt={"Loading"} />
          <Box to={"/Transportation/none"} type={"Loading"} src={Loading} alt={"Loading"} />
          <Box to={"/Transportation/none"} type={"Loading"} src={Loading} alt={"Loading"} />
        </div>
    </>
  )
}
export default Transportation