import React from 'react'
import TopInfo from '../../GlobalComponents/TopInfo'
import Hero from '../../GlobalComponents/HeroComponent'
import Title from '../../GlobalComponents/TitleComponent'
import Box from '../../GlobalComponents/BoxComponent'

// ---------------Images-------------------
import Hospital from "../../../images/hospital.jpg";
import Loading from "../../../images/Loading.png";


const Medical = () => {
  return (
    <>
      <TopInfo />
      <Hero type={"Medical CARE"} span={"-医療-"}/>
      <Title type={"Hospital & Clinic"}/>
        <div className='flex flex-wrap justify-center items-center'>
          <Box to={"/medical/none"} type={"Search"} src={Hospital} alt={"Hospital"} />
          <Box to={"/medical/none"} type={"Loading"} src={Loading} alt={"Loading"} />
          <Box to={"/medical/none"} type={"Loading"} src={Loading} alt={"Loading"} />
        </div>
      <Title type={"Incsuarances"}/>
        <div className='flex flex-wrap justify-center items-center'>
          <Box to={"/medical/none"} type={"Loading"} src={Loading} alt={"Loading"} />
          <Box to={"/medical/none"} type={"Loading"} src={Loading} alt={"Loading"} />
          <Box to={"/medical/none"} type={"Loading"} src={Loading} alt={"Loading"} />
        </div>
      <Title type={"Medicine"}/>
        <div className='flex flex-wrap justify-center items-center'>
          <Box to={"/medical/none"} type={"Loading"} src={Loading} alt={"Loading"} />
          <Box to={"/medical/none"} type={"Loading"} src={Loading} alt={"Loading"} />
          <Box to={"/medical/none"} type={"Loading"} src={Loading} alt={"Loading"} />
        </div>
    </>
  )
}

export default Medical