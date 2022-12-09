import React from 'react'
import TopInfo from '../../GlobalComponents/TopInfo'
import Hero from '../../GlobalComponents/HeroComponent'
import Title from '../../GlobalComponents/TitleComponent'
import Box from '../../GlobalComponents/BoxComponent'

// ---------------Images-------------------
import Loading from "../../../images/Loading.png";

const Emergency = () => {
  return (
    <>
      <TopInfo />
      <Hero type={"Emergency"} span={"-緊急-"}/>
      <Title type={"Loading"}/>
        <div className='flex flex-wrap justify-center items-center'>
          <Box to={"/Emergenvy/none"} type={"Loading"} src={Loading} alt={"Loading"} />
          <Box to={"/Emergenvy/none"} type={"Loading"} src={Loading} alt={"Loading"} />
          <Box to={"/Emergenvy/none"} type={"Loading"} src={Loading} alt={"Loading"} />
        </div>
      <Title type={"Loading"}/>
        <div className='flex flex-wrap justify-center items-center'>
          <Box to={"/Emergenvy/none"} type={"Loading"} src={Loading} alt={"Loading"} />
          <Box to={"/Emergenvy/none"} type={"Loading"} src={Loading} alt={"Loading"} />
          <Box to={"/Emergenvy/none"} type={"Loading"} src={Loading} alt={"Loading"} />
        </div>
      <Title type={"Loading"}/>
        <div className='flex flex-wrap justify-center items-center'>
          <Box to={"/Emergenvy/none"} type={"Loading"} src={Loading} alt={"Loading"} />
          <Box to={"/Emergenvy/none"} type={"Loading"} src={Loading} alt={"Loading"} />
          <Box to={"/Emergenvy/none"} type={"Loading"} src={Loading} alt={"Loading"} />
        </div>
    </>
  )
}
export default Emergency