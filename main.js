// animation
const MAX_ANIM_TIME = 3;
// this is here because javascript file gets downloaded AFTER the css, so our delay in the css styling in the javascript file is LATER than expected
const JS_ANIM_DELAY = 4;


window.addEventListener("load", (event) => {
  playSound();

  pirateAnim();
  dinoAnim();
  pearlAnim();
  caveTitleAnim();
  treasureLeftAnim();
  treasureRightAnim();
  treasureFarLeftAnim();

  // mermaid bubbles
  bubblesAnims({
    bottom: "5vw",
    left: "25vw",
    delay: 10 - JS_ANIM_DELAY,
    zIndex: -3,
    maxDuration: 4,
    minBubbles: 15
  });

  // octopus bubbles
  bubblesAnims({
    bottom: "17vw",
    left: "80vw",
    delay: 12 - JS_ANIM_DELAY,
    zIndex: -3,
    maxDuration: 4,
  });

  bubblesAnims({
    bottom: "17vw",
    left: "85vw",
    delay: 13 - JS_ANIM_DELAY,
    zIndex: -3,
    maxDuration: 4,
  });

  // shrimp bubbles
  bubblesAnims({
    bottom: "15vw",
    left: "78vw",
    delay: 13 - JS_ANIM_DELAY,
    zIndex: 0,
    maxDuration: 2,
    minBubbles: 3,
    maxBubbles: 5,
  });
  bubblesAnims({
    bottom: "15vw",
    left: "80vw",
    delay: 13 - JS_ANIM_DELAY,
    zIndex: 0,
    maxDuration: 2,
    minBubbles: 3,
    maxBubbles: 5,
  });
  bubblesAnims({
    bottom: "15vw",
    left: "92vw",
    delay: 13 - JS_ANIM_DELAY,
    zIndex: 0,
    maxDuration: 2,
    minBubbles: 3,
    maxBubbles: 5,
  });
});

const pirateAnim = () => {
  const pirate = document.getElementById("pirate");
  let randPirateDelay = Math.floor(Math.random() * MAX_ANIM_TIME) + 2;
  setInterval(() => {
    pirate.classList.add("rocking");

    setTimeout(() => {
      pirate.classList.remove("rocking");
    }, 1000);
  }, randPirateDelay * 1000);

  pirate.addEventListener("mouseenter", () => {
    if (!pirate.classList.contains("rocking")) {
      pirate.classList.add("rocking");
      setTimeout(() => {
        pirate.classList.remove("rocking");
      }, 500);
    }
  });
};

const dinoAnim = () => {
  const dino = document.getElementById("dino");
  let randdinoDelay = Math.floor(Math.random() * MAX_ANIM_TIME) + 2;
  setInterval(() => {
    dino.classList.add("rocking");

    setTimeout(() => {
      dino.classList.remove("rocking");
    }, 1000);
  }, randdinoDelay * 1000);

  dino.addEventListener("mouseenter", () => {
    if (!dino.classList.contains("rocking")) {
      dino.classList.add("rocking");
      setTimeout(() => {
        dino.classList.remove("rocking");
      }, 500);
    }
  });
};

const pearlAnim = () => {
  const pearl = document.getElementById("pearl");
  let randpearlDelay = Math.floor(Math.random() * MAX_ANIM_TIME) + 2;
  setInterval(() => {
    pearl.classList.add("rocking");

    setTimeout(() => {
      pearl.classList.remove("rocking");
    }, 1000);
  }, randpearlDelay * 1000);

  pearl.addEventListener("mouseenter", () => {
    if (!pearl.classList.contains("rocking")) {
      pearl.classList.add("rocking");
      setTimeout(() => {
        pearl.classList.remove("rocking");
      }, 500);
    }
  });
};

const caveTitleAnim = () => {
  const caveTitle = document.getElementById("cave-title");
  let randcaveTitleDelay = Math.floor(Math.random() * MAX_ANIM_TIME) + 2;
  setInterval(() => {
    caveTitle.classList.add("rotating");

    setTimeout(() => {
      caveTitle.classList.remove("rotating");
    }, 1000);
  }, randcaveTitleDelay * 1000);

  caveTitle.addEventListener("mouseenter", () => {
    if (!caveTitle.classList.contains("rotating")) {
      caveTitle.classList.add("rotating");
      setTimeout(() => {
        caveTitle.classList.remove("rotating");
      }, 500);
    }
  });
};

const treasureLeftAnim = () => {
  const treasureLeft = document.getElementById(
    "treasure-chest-behind-red-coral-left"
  );
  let randtreasureLeftDelay = Math.floor(Math.random() * MAX_ANIM_TIME) + 2;
  setInterval(() => {
    treasureLeft.classList.add("rotating-treasure-left");

    setTimeout(() => {
      treasureLeft.classList.remove("rotating-treasure-left");
    }, 1000);
  }, randtreasureLeftDelay * 1000);

  treasureLeft.addEventListener("mouseenter", () => {
    if (!treasureLeft.classList.contains("rotating-treasure-left")) {
      treasureLeft.classList.add("rotating-treasure-left");
      setTimeout(() => {
        treasureLeft.classList.remove("rotating-treasure-left");
      }, 500);
    }
  });
};

const treasureRightAnim = () => {
  const treasureRight = document.getElementById(
    "treasure-chest-behind-red-coral-right"
  );
  let randtreasureRightDelay = Math.floor(Math.random() * MAX_ANIM_TIME) + 2;
  setInterval(() => {
    treasureRight.classList.add("rotating-treasure-right");

    setTimeout(() => {
      treasureRight.classList.remove("rotating-treasure-right");
    }, 1000);
  }, randtreasureRightDelay * 1000);

  treasureRight.addEventListener("mouseenter", () => {
    if (!treasureRight.classList.contains("rotating-treasure-right")) {
      treasureRight.classList.add("rotating-treasure-right");
      setTimeout(() => {
        treasureRight.classList.remove("rotating-treasure-right");
      }, 500);
    }
  });
};

const treasureFarLeftAnim = () => {
  const treasureFarLeft = document.getElementById("treasure-chest-1");
  let randtreasureFarLeftDelay = Math.floor(Math.random() * MAX_ANIM_TIME) + 2;
  setInterval(() => {
    treasureFarLeft.classList.add("rotating-treasure-far-left");

    setTimeout(() => {
      treasureFarLeft.classList.remove("rotating-treasure-far-left");
    }, 1000);
  }, randtreasureFarLeftDelay * 1000);

  treasureFarLeft.addEventListener("mouseenter", () => {
    if (!treasureFarLeft.classList.contains("rotating-treasure-far-left")) {
      treasureFarLeft.classList.add("rotating-treasure-far-left");
      setTimeout(() => {
        treasureFarLeft.classList.remove("rotating-treasure-far-left");
      }, 500);
    }
  });
};

const playSound = () => {
  const mainAudio = new Audio("./public/audio/bensound-funnysong[3].mp3");
  document.body.addEventListener("click", function () {
    mainAudio.play();
  });
};

const bubblesAnims = ({
  bottom,
  left,
  delay,
  zIndex,
  maxDuration = 10,
  minBubbles = 8,
  maxBubbles = 15,
}) => {
  // get the main element
  const mainElement = document.querySelector("main");

  // create the bubbles-wrapper div
  const bubblesWrapper = document.createElement("div");
  bubblesWrapper.className = "bubbles-wrapper";
  bubblesWrapper.style.left = left;
  bubblesWrapper.style.bottom = bottom;
  bubblesWrapper.style.zIndex = zIndex;

  // number of bubbles
  const numOfBubbles = getRandomInclusive(minBubbles, maxBubbles);

  for (let i = 0; i < numOfBubbles; i++) {
    // create the individual bubble wrapper
    const bbw = document.createElement("div");
    bbw.className = getBubbleWrapperClass();
    bbw.style.left = `${getRandomInclusive(-40, 40)}px`;
    bbw.style.bottom = `${getRandomInclusive(-40, 40)}px`;
    bbw.style.animationDuration = `${getRandomInclusive(2, maxDuration)}s`;
    bbw.style.animationDelay = `${getRandomInclusive(delay + 0, delay + 4)}s`;

    const bb = document.createElement("div");
    bb.className = "bubble";

    const bbImg = document.createElement("img");
    bbImg.src = "./public/images/bubbles/bubble.png";
    bbImg.className = "giggle-img";

    bb.appendChild(bbImg);
    bbw.appendChild(bb);
    bubblesWrapper.appendChild(bbw);
  }

  // append the bubbles-wrapper to the main element
  mainElement.appendChild(bubblesWrapper);
};

const getBubbleWrapperClass = () => {
  const rand = getRandomInclusive(0, 100);
  let bubbleWrapperClass = "bubble-wrapper ";

  if (rand < 50) return (bubbleWrapperClass += "--xs");
  if (rand < 80) return (bubbleWrapperClass += "--sm");
  if (rand < 95) return (bubbleWrapperClass += "--md");
  if (rand <= 100) return (bubbleWrapperClass += "--lg");
};

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
const getRandomInclusive = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};
