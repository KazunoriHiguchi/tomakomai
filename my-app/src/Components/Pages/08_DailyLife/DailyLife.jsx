import React from 'react'
import TopInfo from '../../GlobalComponents/TopInfo'
import Hero from '../../GlobalComponents/HeroComponent'
import Title from '../../GlobalComponents/TitleComponent'
import Box from '../../GlobalComponents/BoxComponent'

// ---------------Images-------------------
import Loading from "../../../images/Loading.png";

const DailyLife = () => {
  return (
    <>
      <TopInfo />
      <Hero type={"DailyLife"} span={"-日常生活-"}/>
      <Title type={"Loading"}/>
        <div className='flex flex-wrap justify-center items-center'>
          <Box to={"/DailyLife/none"} type={"Loading"} src={Loading} alt={"Loading"} />
          <Box to={"/DailyLife/none"} type={"Loading"} src={Loading} alt={"Loading"} />
          <Box to={"/DailyLife/none"} type={"Loading"} src={Loading} alt={"Loading"} />
        </div>
      <Title type={"Loading"}/>
        <div className='flex flex-wrap justify-center items-center'>
          <Box to={"/DailyLife/none"} type={"Loading"} src={Loading} alt={"Loading"} />
          <Box to={"/DailyLife/none"} type={"Loading"} src={Loading} alt={"Loading"} />
          <Box to={"/DailyLife/none"} type={"Loading"} src={Loading} alt={"Loading"} />
        </div>
      <Title type={"Loading"}/>
        <div className='flex flex-wrap justify-center items-center'>
          <Box to={"/DailyLife/none"} type={"Loading"} src={Loading} alt={"Loading"} />
          <Box to={"/DailyLife/none"} type={"Loading"} src={Loading} alt={"Loading"} />
          <Box to={"/DailyLife/none"} type={"Loading"} src={Loading} alt={"Loading"} />
        </div>
    </>
  )
}
export default DailyLife