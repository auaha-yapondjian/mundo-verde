import React from "react";

const TextObserver: React.FC = () => {
  const waitForElementVar = (
    target: any,
    callback: any,
    all: boolean = false,
    callbackFalse?: any,
    props = { interval: 500, limitTries: 50 }
  ) => {
    var { interval, limitTries } = props;
    var tries = 0;

    var checkExist = setInterval(function () {
      if (!all && document.querySelector(target)) {
        clearInterval(checkExist);
        callback && callback();
      } else if (all && document.querySelectorAll(target)?.length) {
        clearInterval(checkExist);
        callback && callback();
      } else {
        tries++;
        if (tries > limitTries) {
          clearInterval(checkExist);
          callbackFalse && callbackFalse();
          console.log(
            `waitForElementVar :: element "${target}" not found [this is not an error]`
          );
        }
      }
    }, interval);
  };

  const ShowTexts = () => {
    const title = document.querySelector(
      ".vtex-rich-text-0-x-paragraph--category-footer-texts-title"
    );

    if (title) {
      const border = document.querySelector<HTMLElement>(
        ".vtex-rich-text-0-x-paragraph--category-footer-texts-border"
      );

      border.style.display = "flex";
    }
  };

  waitForElementVar(
    ".vtex-rich-text-0-x-paragraph--category-footer-texts-title",
    () => {
      ShowTexts();
    }
  );

  return null;
};

export default TextObserver;
