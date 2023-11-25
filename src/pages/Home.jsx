import Topbar from '../components/Topbar';
import Header from '../components/Header';
import TourSlider from '../components/TourSlider';
import TourSearch from '../components/TourSearch';
import TourPackage from '../components/TourPackage';
import About from '../components/About';
import Packages from '../components/Packages';
import WhyBookWithUs from '../components/WhyBookWithUs';
import Newsletter from '../components/Newsletter';
import DestinationsBlogs from '../components/DestinationsBlogs';
import Giveaway from '../components/GiveAway';
import Footer from '../components/Footer';
import AnimatedComponent from '../components/AnimatedComponent'
import CategoriesSection from '../components/CategoriesSection';
// Import other components as needed

const HomePage = () => {
  return (
    <div>
      <AnimatedComponent>
      <Topbar/>
      </AnimatedComponent>
      <AnimatedComponent>
      <Header/>
      </AnimatedComponent>
      <AnimatedComponent>
      <TourSlider/>
      </AnimatedComponent>
      <AnimatedComponent>
      <TourSearch/>
      </AnimatedComponent>
      <AnimatedComponent>
      <About/>
      </AnimatedComponent>
      <AnimatedComponent>
      <TourPackage/>
      </AnimatedComponent>
      <AnimatedComponent>
      <Packages/>
      </AnimatedComponent>
      <AnimatedComponent>
      <WhyBookWithUs/>
      </AnimatedComponent>
      <AnimatedComponent>
      <CategoriesSection/>
      </AnimatedComponent>
      <AnimatedComponent>
      <Newsletter/>
      </AnimatedComponent>
      <AnimatedComponent>
      <DestinationsBlogs/>
      </AnimatedComponent>
      <AnimatedComponent>
      <Giveaway/>
      </AnimatedComponent>
      <AnimatedComponent>
      <Footer/>
      </AnimatedComponent>
      

     
      {/* Rest of the HomePage content */}
    </div>
  );
};

export default HomePage;
