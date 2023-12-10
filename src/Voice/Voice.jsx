import React from "react";
import AllinformationJs from "../informations";
import styles from "./Voice.module.scss";
import Loading from "./Loading";

const AudioPlayer = ({
  audioFile,
  handleFileChangeWithDelay,
  loading,
  showAudioSource,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.inputElement}>
        {!audioFile && (
          <div className={styles.hideElement}>
            <img src={AllinformationJs.CloudImage} alt="cloud image" />
            <p>{AllinformationJs.DragAndDrop}</p>
            <p>{AllinformationJs.VoiceFormat}</p>
          </div>
        )}
        {audioFile && (
          <p className={styles.choosedButton}>
            {AllinformationJs.ChoosedButton}
          </p>
        )}
        <label className={styles.customFileUpload}>
          {AllinformationJs.ChooseButton}
          <input
            type="file"
            accept="audio/mp3, audio/wav"
            onChange={handleFileChangeWithDelay}
            style={{ display: "none" }}
          />
        </label>
      </div>
      {loading && <Loading />}
      {audioFile && showAudioSource && (
        <div className={styles.audioElement}>
          <audio controls>
            <source src={URL.createObjectURL(audioFile)} type="audio/mp3" />
          </audio>
        </div>
      )}
    </div>
  );
};

export default AudioPlayer;
