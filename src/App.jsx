import React, { useState } from "react";
import styles from "./App.module.scss";
import Texts from "./Texts/Texts";
import AudioPlayer from "./Voice/Voice";

export default function App() {
  const [audioFile, setAudioFile] = useState(null);
  const [showAudioSource, setShowAudioSource] = useState(false);
  const [loading, setLoading] = useState(false);
  const [textsInfo, setTextsInfo] = useState(false);
  const [visibleTickets, setVisibleTickets] = useState(false);
  const [visibleSuggestions, setVisibleSuggestions] = useState(false);
  const [visibleCustomer, setVisibleCustomer] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setAudioFile(file);
  };

  const handleFileChangeWithDelay = (event) => {
    setLoading(true);
    handleFileChange(event);
    setTimeout(() => {
      setLoading(false);
      setShowAudioSource(true);
      handleTextsInfoDelay();
    }, 1500);
  };

  const handleTextsInfoDelay = () => {
    setTimeout(() => {
      setTextsInfo(true);
    }, 2000);
  };

  const toggleButtonTickets = () => {
    setVisibleTickets(!visibleTickets);
    setVisibleSuggestions(false);
    setVisibleCustomer(false);
  };
  const toggleButtonSuggestions = () => {
    setVisibleSuggestions(!visibleSuggestions);
    setVisibleTickets(false);
    setVisibleCustomer(false);
  };
  const toggleButtonCustomer = () => {
    setVisibleCustomer(!visibleCustomer);
    setVisibleSuggestions(false);
    setVisibleTickets(false);
  };

  return (
    <section className={styles.container}>
      <AudioPlayer
        loading={loading}
        audioFile={audioFile}
        handleFileChangeWithDelay={handleFileChangeWithDelay}
        showAudioSource={showAudioSource}
      />
      <Texts
        textsInfo={textsInfo}
        toggleButtonTickets={toggleButtonTickets}
        toggleButtonSuggestions={toggleButtonSuggestions}
        toggleButtonCustomer={toggleButtonCustomer}
        visibleTickets={visibleTickets}
        visibleSuggestions={visibleSuggestions}
        visibleCustomer={visibleCustomer}
      />
    </section>
  );
}
