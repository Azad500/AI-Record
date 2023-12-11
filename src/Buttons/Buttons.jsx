import React, { useState } from "react";
import styles from "./Buttons.module.scss";
import AllinformationJs from "../informations";
import ButtonsInfo from "./ButtonsInfo";
import Loading from "../Voice/Loading";

export default function Buttons({
  toggleButtonTickets,
  toggleButtonSuggestions,
  toggleButtonCustomer,
  visibleTickets,
  visibleSuggestions,
  visibleCustomer,
}) {
  const [delayedInfoVisible, setDelayedInfoVisible] = useState(false);
  const [loadingButton, setLoadingButton] = useState(false);

  const handleToggleButtonClick = (toggleFunction) => {
    setLoadingButton(true);
    toggleFunction();
    setDelayedInfoVisible(false);
    setTimeout(() => {
      setLoadingButton(false);
      setDelayedInfoVisible(true);
    }, 1000);
  };

  return (
    <section className={styles.container}>
      <div className={styles.buttonsWrapper}>
        <button onClick={() => handleToggleButtonClick(toggleButtonTickets)}>
          {AllinformationJs.Buttons.AutomaticCRMTickets}
        </button>
        <button
          onClick={() => handleToggleButtonClick(toggleButtonSuggestions)}
        >
          {AllinformationJs.Buttons.ImprovementSuggestions}
        </button>
        <button onClick={() => handleToggleButtonClick(toggleButtonCustomer)}>
          {AllinformationJs.Buttons.TheCustomersPortrait}
        </button>
      </div>
      {loadingButton && <Loading />}
      <ButtonsInfo
        visibleTickets={visibleTickets}
        visibleSuggestions={visibleSuggestions}
        visibleCustomer={visibleCustomer}
        delayedInfoVisible={delayedInfoVisible}
      />
    </section>
  );
}
``;
