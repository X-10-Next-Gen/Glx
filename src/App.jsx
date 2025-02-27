import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
 import { Button } from 'react-bootstrap';
import Header from './Header/Header';
import Footer from './footer/Footer';
import PatientEducation from './Patient Education/PatientEducation';
import ProfessionalEducation from './Professional Education/ProfessionalEducation';
import DentalReserch from './Dental Reserch/DentalReserch';
import Home from './Home/Home';
import { Routes ,Route } from 'react-router-dom';
import Contact from './Contact/Contact';
import AboutUS from './About Us/AboutUS';
import Product from './Products/Product';
import OneProduct from './Products/components/OneProduct';
function App() {
  const [count, setCount] = useState(0)
  const width = '50px'
  const height= '50px'
  const companyName ='  Belleville Dental'
  // companyNumber = ' 08000000000'
  const cardData = [
    {
      imgSrc: "https://www.colgate.ng/content/dam/cp-sites/oral-care/oral-care-center/en-ng/product-detail-pages/toothpaste/colgate-maxfresh-spicy-fresh-130g.png?size=thumbnail",
      title: "Colgate MaxFresh Spicy Fresh Toothpaste",
      about: [
        "Contains cooling crystals for intense freshness",
        "Helps fight cavities",
        "Whitens teeth with regular use"
      ]
    },
    {
      imgSrc: "https://www.colgate.ng/content/dam/cp-sites/oral-care/oral-care-center/en-ng/product-detail-pages/toothpaste/maximum-cavity-protection-icy-mint.png?size=thumbnail",
      title: "Colgate Maximum Cavity Protection Icy Mint Toothpaste",
      about: [
        "Strengthens enamel with fluoride",
        "Prevents cavities and decay",
        "Freshens breath with icy mint flavor"
      ]
    },
    {
      imgSrc: "https://www.colgate.ng/content/dam/cp-sites/oral-care/oral-care-center/en-ng/product-detail-pages/toothpaste/colgate-herbal-140g.png?size=thumbnail",
      title: "Colgate Herbal Toothpaste",
      about: [
        "Contains natural herbal extracts for gentle cleaning",
        "Helps fight cavities and gum problems",
        "Provides long-lasting freshness"
      ]
    },
    {
      imgSrc: "https://www.colgate.ng/content/dam/cp-sites/oral-care/oral-care-center/en-ng/product-detail-pages/toothbrush/colgate-ctbm-double-action.png?size=thumbnail",
      title: "Colgate Double Action Toothbrush",
      about: [
        "Dual cleaning bristles for thorough cleaning",
        "Ergonomic handle for comfortable grip",
        "Removes plaque effectively"
      ]
    },
    {
      imgSrc: "https://www.colgate.ng/content/dam/cp-sites/oral-care/oral-care-center/en-ng/product-detail-pages/toothbrush/colgate-ctbm-zig-zag.png?size=thumbnail",
      title: "Colgate Zig-Zag Toothbrush",
      about: [
        "Multi-angle bristles for deep cleaning",
        "Soft bristles for gentle gum care",
        "Removes plaque effectively"
      ]
    },
    {
      imgSrc: "https://www.colgate.ng/content/dam/cp-sites/oral-care/oral-care-center/en-ng/product-detail-pages/toothbrush/colgate-anticavity-toothbrush.png?size=thumbnail",
      title: "Colgate Anti-Cavity Toothbrush",
      about: [
        "Designed for effective plaque removal",
        "Helps protect against cavities",
        "Soft bristles for comfortable brushing"
      ]
    },
    {
      imgSrc: "https://www.colgate.ng/content/dam/cp-sites/oral-care/oral-care-center/en-za/product-detail-pages/mouthwash/colgate-plax-multiprotection-soft-mint-za.png?size=thumbnail",
      title: "Colgate Plax Multi-Protection Mouthwash",
      about: [
        "Kills 99.9% of germs",
        "Provides long-lasting fresh breath",
        "Reduces plaque and helps prevent gingivitis"
      ]
    },
    {
      imgSrc: "https://www.colgate.com/content/dam/cloud/cp-sites/oral-care/oral-care-center-relaunch/en-us/products/mouthwash/colgate-kids-unicorn-mouthwash.png.rendition.678.833.png",
      title: "Colgate Kids Unicorn Mouthwash",
      about: [
        "Alcohol-free formula safe for kids",
        "Helps prevent cavities",
        "Fun unicorn-themed design for kids' enjoyment"
      ]
    },
    {
      imgSrc: "https://www.colgate.ng/content/dam/cp-sites/oral-care/oral-care-center/en-ng/product-detail-pages/mouthwash/colgate-plax-peppermint.png?size=thumbnail",
      title: "Colgate Plax Peppermint Mouthwash",
      about: [
        "Kills 99.9% of bacteria",
        "Provides up to 12-hour fresh breath",
        "Alcohol-free formula for gentle care"
      ]
    }
  ];
  
  
  return (
    <>
    
    
    <Header  width={width} companyName={companyName} />
    <Routes>
      <Route path="/" element={<Home companyName={companyName} width={width} />} />
      <Route path="/contact" element={ <Contact companyName={companyName} /> } />
      <Route path="/AboutUs" element={<AboutUS />}/>
      <Route path="/PatientEducation" element={<PatientEducation/>} />
      <Route path="/ProfessionalEducation" element={ <ProfessionalEducation />} />
      <Route path="/DentalReserch" element={ <DentalReserch />} />
      <Route path="/Product" element={ <Product height={height} cardData={cardData}  />}/>
      <Route path="/Product/:id" element={ <OneProduct cardData={cardData}  />}/>

    </Routes>
    <Footer width={width}   companyName={companyName}/>
    
    </>
  )
}

export default App;
