import styles from "./ButtonsInfo.module.scss";
import AllinformationJs from "../informations";

export default function ButtonsInfo({
  visibleTickets,
  visibleSuggestions,
  visibleCustomer,
}) {
  return (
    <div className={styles.textsElement}>
      {visibleTickets && (
        <div className={styles.automaticCRMTicketsElement}>
          <p>
            {
              AllinformationJs.ButtonsTexts.AutomaticCRMTicketsTexts
                .HeaderOfTicket
            }
          </p>
          <p>
            {AllinformationJs.ButtonsTexts.AutomaticCRMTicketsTexts.TicketID}
          </p>
          <p>
            {AllinformationJs.ButtonsTexts.AutomaticCRMTicketsTexts.TicketDate}
          </p>
          <p>
            {AllinformationJs.ButtonsTexts.AutomaticCRMTicketsTexts.Customer}
          </p>
          <p>
            {AllinformationJs.ButtonsTexts.AutomaticCRMTicketsTexts.Emotion}
          </p>
          <p>
            {
              AllinformationJs.ButtonsTexts.AutomaticCRMTicketsTexts
                .CurrentSituation
            }
          </p>
          <p>
            {AllinformationJs.ButtonsTexts.AutomaticCRMTicketsTexts.Forwarding}
          </p>
        </div>
      )}
      {visibleSuggestions && (
        <div className={styles.improvementSuggestionsElement}>
          <p>
            {AllinformationJs.ButtonsTexts.ImprovementSuggestions.FirstText}
          </p>
          <br />
          <p>
            {AllinformationJs.ButtonsTexts.ImprovementSuggestions.SecondText}
          </p>
          <br />
          <p>
            {AllinformationJs.ButtonsTexts.ImprovementSuggestions.ThirdText}
          </p>
          <br />
          <p>
            {AllinformationJs.ButtonsTexts.ImprovementSuggestions.FourthText}
          </p>
          <br />
          <p>
            {AllinformationJs.ButtonsTexts.ImprovementSuggestions.FivethText}
          </p>
        </div>
      )}
      {visibleCustomer && (
        <div className={styles.theCustomersPortraitElement}>
          <p>{AllinformationJs.ButtonsTexts.TheCustomersPortrait.FirstText}</p>
          <br />
          <p>{AllinformationJs.ButtonsTexts.TheCustomersPortrait.SecondText}</p>
        </div>
      )}
    </div>
  );
}
