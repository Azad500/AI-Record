import styles from "./Buttons.module.scss";
import AllinformationJs from "../informations";
import ButtonsInfo from "./ButtonsInfo";

export default function Buttons({
  toggleButtonTickets,
  toggleButtonSuggestions,
  toggleButtonCustomer,
  visibleTickets,
  visibleSuggestions,
  visibleCustomer,
}) {
  return (
    <section className={styles.container}>
      <div className={styles.buttonsWrapper}>
        <button onClick={toggleButtonTickets}>
          {AllinformationJs.Buttons.AutomaticCRMTickets}
        </button>
        <button onClick={toggleButtonSuggestions}>
          {AllinformationJs.Buttons.ImprovementSuggestions}
        </button>
        <button onClick={toggleButtonCustomer}>
          {AllinformationJs.Buttons.TheCustomersPortrait}
        </button>
      </div>
      <ButtonsInfo
        visibleTickets={visibleTickets}
        visibleSuggestions={visibleSuggestions}
        visibleCustomer={visibleCustomer}
      />
    </section>
  );
}
