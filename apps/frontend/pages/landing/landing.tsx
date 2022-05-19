import CallToAction from '../../views/landing/CallToAction';
import Features from '../../views/landing/Features';
import HeroSection from '../../views/landing/HeroSection';
import Pricing from '../../views/landing/Pricing';

export default function Landing() {
    return (
        <>
            <HeroSection />
            <Features />
            <Pricing />
            <CallToAction />
        </>
    );
}
