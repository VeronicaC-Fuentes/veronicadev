// app/page.js
import HomeSection from './components/HomeSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import ResumeSection from './components/ResumeSection'
import PortfolioSection from './components/PortfolioSection'
import ContactSection from './components/ContactSection'

export default function Page() {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <ServicesSection />
    </>
  )
}
