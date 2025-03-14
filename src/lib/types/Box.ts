import type { Spring } from "svelte/motion";

export interface Box {
    position: [number, number, number];
    scale: Spring<number>;
    audio?:  any;
  }