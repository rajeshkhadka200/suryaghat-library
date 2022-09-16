import React from "react";
import source from "../../Styles/StoreCSS/Source.module.css";
import AudioSpectrum from "react-audio-spectrum";
import { serverBaseURI } from "../../Utilities/file.config";
const AudioPlayer = ({ src }) => {
  return (
    <>
      <div className={source.audioPlayer}>
        <p className={source.headingsrc}>Play the audio</p>
        <AudioSpectrum
          id={source.audio_canvas}
          height={100}
          width={200}
          audioId={"audio-element"}
          capColor={"red"}
          capHeight={5}
          meterWidth={1}
          meterCount={200}
          meterColor={[
            { stop: 0, color: "#C04848" },
            { stop: 0.5, color: "#49a09d" },
            { stop: 1, color: "red" },
          ]}
          gap={5}
        />
        <audio
          controlsList="nodownload"
          id="audio-element"
          src={`${serverBaseURI}/hariBaba/api/uploads/files/${src}`}
          controls
        ></audio>
      </div>
    </>
  );
};
const VideoPlayer = ({ src, id }) => {
  return (
    <>
      <div id={`${source}.${id}`} className={source.videoWrapper}>
        <div class={source.videoDiv}>
          <p className={source.headingsrc}>Watch The Video</p>
          <video controls controlsList="nodownload">
            <source src={`${src}`} type="video/ogg" />
          </video>
        </div>
      </div>
    </>
  );
};

//const AboutVideo = ({ srcAbout }) => {
//  return (
//    <>
//      <video controls controlsList="nodownload">
//        <source src={`/AdminSRC/${srcAbout}`} type="video/ogg" />
//      </video>
//    </>
//  );
//};

export { AudioPlayer, VideoPlayer };
