import CallToAction from '../views/CallToAction';
import Features from '../views/Features';
import HeroSection from '../views/HeroSection';
import Pricing from '../views/Pricing';

export default function Index() {
    return (
        <>
            <HeroSection />
            <Features />
            <Pricing />
            <CallToAction />
        </>
    );
}
