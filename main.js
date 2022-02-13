// animation
const MAX_ANIM_TIME = 3;

window.addEventListener("load", (event) => {
  playSound();

  pirateAnim();
  dinoAnim();
  pearlAnim();
  caveTitleAnim();
  treasureLeftAnim();
  treasureRightAnim();
  treasureFarLeftAnim();
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
  const mainAudio = new Audio('./public/audio/bensound-funnysong[3].mp3');
  document.body.addEventListener('click', function () {
    mainAudio.play();
  });
};
