import React from 'react'
import Box from '../../Global_components/Box_components'
import Hero from '../../Global_components/Hero_components'
import LangList from '../../Global_components/LangList'
import Title from '../../Global_components/Title_components'

// ---------------Images-------------------
import Hospital from "../../../images/hospital.jpg";
import Loading from "../../../images/Loading.png";


const Medical = () => {
  return (
    <>
      <LangList />
      <Hero type={"Medical"} span={"CARE"}/>
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