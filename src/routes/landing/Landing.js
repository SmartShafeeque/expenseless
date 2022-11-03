import AppFeatures from "./AppFeatures";
import Cta from "./Cta";
import Features from "./Features";
import Hero from "./Hero";
import PricingPreview from "./PricingPreview";
import StatisticsPreview from "./StatisticsPreview";
import TestimonialsPreview from "./TestimonialsPreview";
import './landing.css';

const Landing = (props) => {

    return (
        <main className="landing-main">
            <Hero openSignup={props.openSignup} />
            <Features />
            <Cta />
            <AppFeatures />
            <StatisticsPreview />
            <TestimonialsPreview />
            <PricingPreview />
        </main>
    )
}

export default Landing;