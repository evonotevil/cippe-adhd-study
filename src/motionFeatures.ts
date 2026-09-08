// Split point for Framer Motion's DOM animation features (~75 kB minified).
// `LazyMotion` fetches this after first paint, so the initial bundle carries
// only the tiny `m` component surface. Until it resolves, `m` elements render
// at their `animate` values without animating.
export { domAnimation as default } from 'framer-motion';
