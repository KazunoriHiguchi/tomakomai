import React from 'react'
import Top_info from '../../Global_components/Top_info'
import Hero from '../../Global_components/Hero_components'
import Title from '../../Global_components/Title_components'
import Box from '../../Global_components/Box_components'

// ---------------Images-------------------
import Loading from "../../../images/Loading.png";

const DailyLife = () => {
  return (
    <>
      <Top_info />
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