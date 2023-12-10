import styles from "./Texts.module.scss";
import AllinformationJs from "../informations";
import Buttons from "../Buttons/Buttons";
import { useEffect, useRef, useState } from "react";

export default function Texts({
  textsInfo,
  toggleButtonTickets,
  toggleButtonSuggestions,
  toggleButtonCustomer,
  visibleTickets,
  visibleSuggestions,
  visibleCustomer,
}) {
  const [elementFirst, setElementFirst] = useState(false);
  const [elementSecond, setElementSecond] = useState("");
  const [elementThird, setElementThird] = useState("");
  const [elementFourth, setElementFourth] = useState("");
  const [elementFiveth, setElementFiveth] = useState("");
  const [elementSixth, setElementSixth] = useState("");
  const refs = {
    intervalId2Ref: useRef(null),
    intervalId3Ref: useRef(null),
    intervalId4Ref: useRef(null),
    intervalId5Ref: useRef(null),
    intervalId6Ref: useRef(null),
  };

  useEffect(() => {
    if (textsInfo) {
      let index1 = 0;
      let index2 = 0;
      let index3 = 0;
      let index4 = 0;
      let index5 = 0;
      let index6 = 0;

      const intervalId1 = setInterval(() => {
        if (index1 <= AllinformationJs.Texts.ElementFirst.length) {
          setElementFirst(
            AllinformationJs.Texts.ElementFirst.substring(0, index1)
          );
          index1 += 1;
        } else {
          clearInterval(intervalId1);
          refs.intervalId2Ref.current = setInterval(() => {
            if (index2 <= AllinformationJs.Texts.ElementSecond.length) {
              setElementSecond(
                AllinformationJs.Texts.ElementSecond.substring(0, index2)
              );
              index2 += 1;
            } else {
              clearInterval(refs.intervalId2Ref.current);
              refs.intervalId3Ref.current = setInterval(() => {
                if (index3 <= AllinformationJs.Texts.ElementThird.length) {
                  setElementThird(
                    AllinformationJs.Texts.ElementThird.substring(0, index3)
                  );
                  index3 += 1;
                } else {
                  clearInterval(refs.intervalId3Ref.current);
                  refs.intervalId4Ref.current = setInterval(() => {
                    if (index4 <= AllinformationJs.Texts.ElementFourth.length) {
                      setElementFourth(
                        AllinformationJs.Texts.ElementFourth.substring(
                          0,
                          index4
                        )
                      );
                      index4 += 1;
                    } else {
                      clearInterval(refs.intervalId4Ref.current);
                      refs.intervalId5Ref.current = setInterval(() => {
                        if (
                          index5 <= AllinformationJs.Texts.ElementFiveth.length
                        ) {
                          setElementFiveth(
                            AllinformationJs.Texts.ElementFiveth.substring(
                              0,
                              index5
                            )
                          );
                          index5 += 1;
                        } else {
                          clearInterval(refs.intervalId5Ref.current);
                          refs.intervalId6Ref.current = setInterval(() => {
                            if (
                              index6 <=
                              AllinformationJs.Texts.ElementSixth.length
                            ) {
                              setElementSixth(
                                AllinformationJs.Texts.ElementSixth.substring(
                                  0,
                                  index6
                                )
                              );
                              index6 += 1;
                            } else {
                              clearInterval(refs.intervalId6Ref.current);
                            }
                          }, 40);
                        }
                      }, 40);
                    }
                  }, 40);
                }
              }, 40);
            }
          }, 40);
        }
      }, 40);

      return () => {
        clearInterval(intervalId1);
        clearInterval(refs.intervalId2Ref.current);
        clearInterval(refs.intervalId3Ref.current);
        clearInterval(refs.intervalId4Ref.current);
        clearInterval(refs.intervalId5Ref.current);
        clearInterval(refs.intervalId6Ref.current);
      };
    }
  }, [textsInfo]);

  return (
    <section className={styles.container}>
      {textsInfo && (
        <>
          <div className={styles.textsWrapper}>
            {elementFirst && (
              <div className={styles.hiddenElement}>
                <p>{AllinformationJs.HeaderTexts.CustomerElement}</p>
                <p>{elementFirst}</p>
              </div>
            )}
            {elementSecond && (
              <div className={styles.hiddenElement}>
                <p>{AllinformationJs.HeaderTexts.OperatorElement}</p>
                <p>{elementSecond}</p>
              </div>
            )}
            {elementThird && (
              <div className={styles.hiddenElement}>
                <p>{AllinformationJs.HeaderTexts.CustomerElement}</p>
                <p>{elementThird}</p>
              </div>
            )}
            {elementFourth && (
              <div className={styles.hiddenElement}>
                <p>{AllinformationJs.HeaderTexts.OperatorElement}</p>
                <p>{elementFourth}</p>
              </div>
            )}
            {elementFiveth && (
              <div className={styles.hiddenElement}>
                <p>{AllinformationJs.HeaderTexts.CustomerElement}</p>
                <p>{elementFiveth}</p>
              </div>
            )}
            {elementSixth && (
              <div className={styles.hiddenElement}>
                <p>{AllinformationJs.HeaderTexts.OperatorElement}</p>
                <p>{elementSixth}</p>
              </div>
            )}
          </div>
          <div className={styles.buttonsElement}>
            {elementSixth && (
              <Buttons
                toggleButtonTickets={toggleButtonTickets}
                toggleButtonSuggestions={toggleButtonSuggestions}
                toggleButtonCustomer={toggleButtonCustomer}
                visibleTickets={visibleTickets}
                visibleSuggestions={visibleSuggestions}
                visibleCustomer={visibleCustomer}
              />
            )}
          </div>
        </>
      )}
    </section>
  );
}
