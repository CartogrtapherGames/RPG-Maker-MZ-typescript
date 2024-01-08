
interface DataAnimation {
  id: number;
  displayType: number;
  effectName: string;
  flashTimings: RPG.FlashTiming[];
  name: string;
  offsetX: number;
  offsetY: number;
  rotation: RPG.Rotation;
  scale: number;
  soundTimings: RPG.SoundTiming[];
  speed: number;
}

interface DataAnimationMV {
  id: number;
  animation1Hue: number;
  animation1Name: string;
  animation2Hue: number;
  animation2Name: number;
  frames: [number[]]; // TODO : implement animation MV?
}