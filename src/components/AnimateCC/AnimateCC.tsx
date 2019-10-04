import React from "react";

import getCompositionId from "../../utils/getCompositionId";
import AnimateCCError from "../../utils/AnimateCCError";
import AdobeAn from "../../utils/AdobeAn";
import CreateJs from "../../utils/CreateJs";

type AnimateCCProps = {
  animationName: string;
  composition?: string
};

type AnimateCCState = {};

export default class AnimateCC extends React.Component<AnimateCCProps, AnimateCCState> {
  componentDidMount() {
    try {
      this.initAdobeAn();
    } catch (error) {
      // todo
    }
  }

  initAdobeAn = () => {
    const {
      animationName,
      composition: compositionProp,
    } = this.props;

    const composition = getCompositionId(animationName, compositionProp);

    if (composition === undefined) {
      throw new AnimateCCError(animationName);
    }

    const comp = AdobeAn.getComposition(composition);

    const loader = new CreateJs.LoadQueue(false);
    loader.addEventListener("fileload", evt => { this.handleFileLoad(evt, comp); });
    loader.addEventListener("complete", evt => { this.handleComplete(evt, comp); });

    const lib = comp.getLibrary();
    loader.loadManifest(lib.properties.manifest);

    if (lib.properties.manifest.filter(({ type }) => type === "image").length === 0) {
      this.handleComplete(null, comp);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleFileLoad = (_evt: any, _comp: any) => {};

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleComplete = (_evt: any, _comp: any) => {};

  render() {
    return (
      <div>Hello world!</div>
    );
  }
}
