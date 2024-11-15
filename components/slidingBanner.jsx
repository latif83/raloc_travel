"use client"
import { useState, useEffect } from 'react';

const SlidingBanner = () => {
    // State to keep track of the current slide index
    const [currentSlide, setCurrentSlide] = useState(0);

    // Content for each slide
    const slides = [
        {
            heading: 'Embark on Your Next Adventure',
            subheading: 'Find the perfect destinations to tour, work, and build unforgettable memories.',
            buttonLabel: 'Explore Opportunities',
            video: '/travel1.mp4',
        },
        {
            heading: 'Start Your Academic Journey Abroad',
            subheading: 'Discover prestigious schools and programs to help you achieve your educational goals.',
            buttonLabel: 'Find Study Programs',
            video: '/travel2.mp4',
        },
    ];

    // Effect to change the slide every 10 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 10000); // 10 seconds in milliseconds

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="bg-[#00b1eb] h-[501px] w-full relative">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`slide h-full transition-all ease-in-out delay-150 duration-1000 ${index === currentSlide ? 'active' : ''}`}
                    style={{
                        display: index === currentSlide ? 'block' : 'none',
                    }}>
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        controls={false}
                        className="w-full h-full object-cover object-center"
                    >
                        <source src={slide.video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    <div className="absolute bg-[#0d4785]/20 backdrop-blur-[1.5px] px-12 left-0 top-0 w-full h-full">
                        <div className="h-full flex flex-col justify-center items-center text-white">
                            <h3 className="text-5xl font-bold font-cursive">
                                {slide.heading}
                            </h3>
                            <p className="text-lg mt-5">
                                {slide.subheading}
                            </p>
                            <button
                                type="button"
                                className="bg-[#0d4785] p-3 rounded-md text-white mt-12"
                            >
                                {slide.buttonLabel}
                            </button>
                        </div>
                    </div></div>
            ))}
        </div>


    );
};

export default SlidingBanner;
