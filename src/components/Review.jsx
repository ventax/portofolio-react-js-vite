/**
 * @copyright 2025 xeynacode
 * @license Apache-2.0
 */

/**
 * Node Modules
 */

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

/**
 * Register gsap plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);


// COMPONENTS
import ReviewCard from "./ReviewCard";

const reviews = [
    {
      content: 'Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.',
      name: 'Ken Hiragi',
      imgSrc: '/images/ucup1.jpeg',
      company: 'Yusup Jawier'
    },
    {
      content: 'Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.',
      name: 'Rusdi',
      imgSrc: '/images/people-2.jpg',
      company: 'Budiono Sitegar'
    },
    {
      content: 'Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.',
      name: 'Reval',
      imgSrc: '/images/people-3.jpg',
      company: 'ValzCode'
    },
    {
      content: 'Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.',
      name: 'Tantra',
      imgSrc: '/images/people-4.jpg',
      company: 'Desvoria'
    },
    {
      content: 'Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.',
      name: 'Tegar',
      imgSrc: '/images/people-5.jpg',
      company: 'Troject'
    },
    {
      content: 'Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.',
      name: 'Lukman',
      imgSrc: '/images/people-6.jpg',
      company: 'Calwyn'
    }
  ];

const Review = () => {

useGSAP(() => {
    gsap.to('.scrub-slide', {
        x: '-1000',
        scrollTrigger: {
            trigger: '.scrub-slide',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    });
});

  return (
    <section 
    id="reviews" 
    className="section overflow-hidden"
    >
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">
          What our customers say
        </h2>

        <div className="scrub-slide flex items-stretch gap-3 w-fit">
          {reviews.map(({ content, name, imgSrc, company },
            key) =>(
              <ReviewCard
              key={key}
              name={name}
              imgSrc={imgSrc}
              company={company}
              content={content}
              />
            )
          )}
        </div>
      </div>
    </section>
  )
}

export default Review