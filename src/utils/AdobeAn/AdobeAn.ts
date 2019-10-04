import createjs from "createjs-module";

interface Library {
  properties: {
    id: string,
    width: number,
    height: number,
    fps: number,
    color: string,
    opacity: number,
    manifest: any[],
    preloads: any[]
  };

  [key: string]: any
}

interface Composition {
  getImages: () => HTMLImageElement[]
  getStage: () => any
  getSpriteSheet: () => {
    [key: string]: {
      prototype: createjs.SpriteSheet
    }
  }
  getLibrary: () => Library
}

interface IAdobeAn {
  getComposition: (compositionId: string) => Composition;
  compositions: {
    [compositionId: string]: Composition
  }
}

const { AdobeAn }: { AdobeAn: IAdobeAn } = (window as any);

if (AdobeAn === undefined) {
  throw new Error("AdobeAn dependency not found");
}

export default AdobeAn;
