import React from "react";
import {
  FeatureRight,
  FeatureLeft,
  FeatureBackground,
  FeatureContainer,
} from "./Feature";
import { TileBackGround, TileContent, TileWrapper, Tile } from "./Tile";
import PhoneMockup from "./PhoneMockup";
import Background1 from "../public/Background1.png";
import Background2 from "../public/Background2.png";
import Background3 from "../public/Background3.png";

interface Props {
  reference: React.MutableRefObject<HTMLInputElement>;
}
const Features: React.FC<Props> = ({ reference }) => {
  return (
    <div ref={reference}>
      <TileWrapper numOfPages={3}>
        <TileBackGround>
          <FeatureBackground />
        </TileBackGround>
        <TileContent>
          <Tile
            page={0}
            renderContent={({ progress }) => (
              <FeatureContainer>
                <FeatureLeft progress={progress}>
                  <div className="font-sans">Focus on</div>
                  <div className="text-4xl md:text-5xl font-semibold tracking-tight font-sans">
                    Real-life Interaction
                  </div>
                </FeatureLeft>
                <FeatureRight progress={progress}>
                  <PhoneMockup background={Background1} />
                </FeatureRight>
              </FeatureContainer>
            )}
          ></Tile>
          <Tile
            page={1}
            renderContent={({ progress }) => (
              <FeatureContainer>
                <FeatureLeft progress={progress}>
                  <div className="font-sans">
                    Enjoy your favorite activity with
                  </div>
                  <div className="text-4xl md:text-5xl font-semibold tracking-tight font-sans">
                    Discounted Price, together
                  </div>
                </FeatureLeft>
                <FeatureRight progress={progress}>
                  <PhoneMockup background={Background2} />
                </FeatureRight>
              </FeatureContainer>
            )}
          ></Tile>
          <Tile
            page={2}
            renderContent={({ progress }) => (
              <FeatureContainer>
                <FeatureLeft progress={progress}>
                  <div className="font-sans">Avoid</div>
                  <div className="text-4xl md:text-5xl font-semibold tracking-tight font-sans">
                    Gold-diggers/Ghosters
                  </div>
                </FeatureLeft>
                <FeatureRight progress={progress}>
                  <PhoneMockup background={Background3} />
                </FeatureRight>
              </FeatureContainer>
            )}
          ></Tile>
        </TileContent>
      </TileWrapper>
    </div>
  );
};

export default Features;
