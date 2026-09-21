import React from 'react'
import Hero from '../../components/hero/Hero'
import Result from '../../components/result/Result'
import Export from '../../components/export/Export'
import Engine from '../../components/engine/Engine'
import Stage from '../../components/stage/Stage'
import Careers from '../../components/careers/Careers'
import HomeContact from '../../components/homeContact/HomeContact'
import NewsSection from '../../components/newsSection/NewsSection'

const Home = () => {
    return (
        <>
            <Hero />
            <Result />
            <Export />
            <Engine />
            <Stage />
            <Careers />
            <HomeContact />
            <NewsSection />
        </>
    )
}

export default Home