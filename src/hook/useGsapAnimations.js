import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function useGsapAnimations(boxRef){
  useEffect(()=>{
    let ctx = gsap.context(()=>{
      // about section animation
      gsap.to('.about .tit-wrap', {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: '.about',
          start: 'top center 40px',
          end: 'bottom'
        }
      });
      gsap.to('.about .cont-wrap', {
        opacity: 1,
        delay: .75,
        scrollTrigger: {
          trigger: '.about',
          start: 'top center 40px',
          end: 'bottom',
        }
      });

      // product section animation
      gsap.to('.pd-wrap', {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: '.pd-wrap',
          start: 'top center 40px',
          end: 'bottom'
        }
      });
      // fixContent section animation
      gsap.to('.pr-have', {
        scrollTrigger: {
          trigger: '.pr-have .fix-cont',
          start: 'top top',
          end: '+=1000',
          pin: true,
          pinSpacing: false
        }
      });
      // crosse text animation
      gsap.to('.pr-txt .txt01', {
        x: '-15%',
        scrollTrigger: {
          trigger: '.pr-txt',
          start: 'top 100%',
          end: 'bottom top',
          scrub: 1
        }
      });
      gsap.to('.pr-txt .txt02', {
        x: '100%',
        scrollTrigger: {
          trigger: '.pr-txt',
          start: 'top 100%%',
          end: 'bottom top',
          scrub: 1
        }
      });
    }, boxRef);
    
    return ()=> ctx.revert();
  }, [boxRef]);
}