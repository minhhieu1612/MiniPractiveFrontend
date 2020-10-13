gsap.fromTo(".item-1", {
  backgroundColor: "blue",
  x: 100,
  y: 100,
  opacity: 0,
  ease: "power2.inOut",
  repeat: -1,
}, {
  backgroundColor: "green",
  x: 330,
  y: 330,
  opacity: 1,
});
