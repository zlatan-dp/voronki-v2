// Frame animation

const tvWrap = document.querySelector(".frame-tv-trigger");
const moveHereFrame = document.querySelector(".move-here-frame");
const tv1 = document.querySelector(".tv-1");
const tv2 = document.querySelector(".tv-2");

function toggleHiddenAnimation(...elements) {
  elements.forEach((element) => {
    element.classList.toggle("hidden");
  });
}

function isMobile() {
  return window.innerWidth < 760;
}

function handleFrameHover() {
  toggleHiddenAnimation(moveHereFrame, tv1, tv2);
}

function handleFrameClick() {
  toggleHiddenAnimation(tv1, tv2);
}

function addFrameListeners() {
  if (!isMobile()) {
    tvWrap.addEventListener("mouseenter", handleFrameHover);
    tvWrap.addEventListener("mouseleave", handleFrameHover);
    moveHereFrame.addEventListener("mouseenter", handleFrameHover);
    moveHereFrame.addEventListener("mouseleave", handleFrameHover);
  } else {
    tvWrap.addEventListener("click", handleFrameClick);
    moveHereFrame.addEventListener("click", handleFrameClick);
  }
}

function removeFrameListeners() {
  tvWrap.removeEventListener("mouseenter", handleFrameHover);
  tvWrap.removeEventListener("mouseleave", handleFrameHover);
  moveHereFrame.removeEventListener("mouseenter", handleFrameHover);
  moveHereFrame.removeEventListener("mouseleave", handleFrameHover);

  tvWrap.removeEventListener("click", handleFrameClick);
  moveHereFrame.removeEventListener("click", handleFrameClick);
}

// Night animation

const moveHereNight = document.querySelector(".move-here-night");
const nightLightImg = document.querySelector(".night-light-img-second");
const nightLightTrigger = document.querySelector(".night-light-trigger");

function handleNightHover() {
  toggleHiddenAnimation(moveHereNight, nightLightImg);
}

function handleNightClick() {
  toggleHiddenAnimation(nightLightImg);
}

function addNightListeners() {
  if (!isMobile()) {
    nightLightTrigger.addEventListener("mouseenter", handleNightHover);
    nightLightTrigger.addEventListener("mouseleave", handleNightHover);
    moveHereNight.addEventListener("mouseenter", handleNightHover);
    moveHereNight.addEventListener("mouseleave", handleNightHover);
  } else {
    nightLightTrigger.addEventListener("click", handleNightClick);
    moveHereNight.addEventListener("click", handleNightClick);
  }
}

function removeNightListeners() {
  nightLightTrigger.removeEventListener("mouseenter", handleNightHover);
  nightLightTrigger.removeEventListener("mouseleave", handleNightHover);
  moveHereNight.removeEventListener("mouseenter", handleNightHover);
  moveHereNight.removeEventListener("mouseleave", handleNightHover);

  nightLightTrigger.removeEventListener("click", handleNightClick);
  moveHereNight.removeEventListener("click", handleNightClick);
}

// Video animation

const moveHereProtective = document.querySelector(".move-here-protective");
const protectiveTrigger = document.querySelector(".protective-trigger");
const protectiveVideoWrap = document.querySelector(".protective-video");
const protectiveVideo = document.querySelector(".protective-video video");

const moveHereStand = document.querySelector(".move-here-stand");
const standTrigger = document.querySelector(".stand-trigger");
const standVideoWrap = document.querySelector(".stand-video");
const standVideo = document.querySelector(".stand-video video");

function playVideo(video) {
  if (video.readyState >= 2 && video.paused) {
    video.play();
  }
}

function stopVideoHover(moveHere, trigger, video) {
  if (!moveHere.matches(":hover") && !trigger.matches(":hover")) {
    video.pause();
    video.currentTime = 0;
  }
}

function stopVideoClick(video) {
  video.pause();
  video.currentTime = 0;
}

function toggleHiddenVideo(moveHere, wrap) {
  moveHere.classList.toggle("hidden");
  wrap.classList.toggle("hidden");
}

function mouseEnterVideo(moveHere, videoWrap, video) {
  toggleHiddenVideo(moveHere, videoWrap);
  playVideo(video);
}

function mouseLeaveVideo(moveHere, trigger, video, videoWrap) {
  stopVideoHover(moveHere, trigger, video);
  toggleHiddenVideo(moveHere, videoWrap);
}

function mouseClickVideo(video, moveHere, videoWrap) {
  if (video.paused) {
    toggleHiddenVideo(moveHere, videoWrap);
    playVideo(video);
  } else {
    stopVideoClick(video);
    toggleHiddenVideo(moveHere, videoWrap);
  }
  return;
}

// Protective video

function handleProtectiveEnter() {
  mouseEnterVideo(moveHereProtective, protectiveVideoWrap, protectiveVideo);
}

function handleProtectiveLeave() {
  mouseLeaveVideo(
    moveHereProtective,
    protectiveTrigger,
    protectiveVideo,
    protectiveVideoWrap
  );
}

function handleProtectiveClick() {
  mouseClickVideo(protectiveVideo, moveHereProtective, protectiveVideoWrap);
}

function addProtectiveListeners() {
  if (!isMobile()) {
    moveHereProtective.addEventListener("mouseenter", handleProtectiveEnter);
    moveHereProtective.addEventListener("mouseleave", handleProtectiveLeave);
    protectiveTrigger.addEventListener("mouseenter", handleProtectiveEnter);
    protectiveTrigger.addEventListener("mouseleave", handleProtectiveLeave);
  } else {
    moveHereProtective.addEventListener("click", handleProtectiveClick);
    protectiveTrigger.addEventListener("click", handleProtectiveClick);
  }
}

function removeProtectiveListeners() {
  moveHereProtective.removeEventListener("mouseenter", handleProtectiveEnter);
  moveHereProtective.removeEventListener("mouseleave", handleProtectiveLeave);
  protectiveTrigger.removeEventListener("mouseenter", handleProtectiveEnter);
  protectiveTrigger.removeEventListener("mouseleave", handleProtectiveLeave);

  moveHereProtective.removeEventListener("click", handleProtectiveClick);
  protectiveTrigger.removeEventListener("click", handleProtectiveClick);
}

// Stand video

function handleStandEnter() {
  mouseEnterVideo(moveHereStand, standVideoWrap, standVideo);
}

function handleStandLeave() {
  mouseLeaveVideo(moveHereStand, standTrigger, standVideo, standVideoWrap);
}

function handleStandClick() {
  mouseClickVideo(standVideo, moveHereStand, standVideoWrap);
}

function addStandListeners() {
  if (!isMobile()) {
    moveHereStand.addEventListener("mouseenter", handleStandEnter);
    moveHereStand.addEventListener("mouseleave", handleStandLeave);
    standTrigger.addEventListener("mouseenter", handleStandEnter);
    standTrigger.addEventListener("mouseleave", handleStandLeave);
  } else {
    moveHereStand.addEventListener("click", handleStandClick);
    standTrigger.addEventListener("click", handleStandClick);
  }
}

function removeStandListeners() {
  moveHereStand.removeEventListener("mouseenter", handleStandEnter);
  moveHereStand.removeEventListener("mouseleave", handleStandLeave);
  standTrigger.removeEventListener("mouseenter", handleStandEnter);
  standTrigger.removeEventListener("mouseleave", handleStandLeave);

  moveHereStand.removeEventListener("click", handleStandClick);
  standTrigger.removeEventListener("click", handleStandClick);
}

// Update PROTECTIVE video source

const sourcesProtective = {
  mobile: "/kidtvb2b/img/protective/protective_mob.mp4",
  desctop: "/kidtvb2b/img/protective/protective.mp4",
};

function updateProtectiveVideoSrc() {
  const newSrc = isMobile()
    ? sourcesProtective.mobile
    : sourcesProtective.desctop;
  const absoluteNewSrc = new URL(newSrc, window.location.href).href;

  if (protectiveVideo.src !== absoluteNewSrc) {
    protectiveVideo.src = newSrc;
    protectiveVideo.load();
  }
}

// Update STAND video source

const sourcesStand = {
  mobile: "/kidtvb2b/img/stand/stand_mob.mp4",
  desctop: "/kidtvb2b/img/stand/stand.mp4",
};

function updateStandVideoSrc() {
  const newSrc = isMobile() ? sourcesStand.mobile : sourcesStand.desctop;
  const absoluteNewSrc = new URL(newSrc, window.location.href).href;

  if (standVideo.src !== absoluteNewSrc) {
    standVideo.src = newSrc;
    standVideo.load();
  }
}

// Faq animation

const questionWraps = document.querySelectorAll(".faq-question-wrap");

function faqAnimation(wrap) {
  const answer = wrap.nextElementSibling;
  const icon = wrap.querySelector(".question-icon");

  answer.classList.toggle("active");
  icon.classList.toggle("rotated");
}

function handleFaqClick(event) {
  faqAnimation(event.currentTarget);
}

function addFaqListener() {
  questionWraps.forEach((wrap) => {
    wrap.addEventListener("click", handleFaqClick);
  });
}

function removeFaqListener() {
  questionWraps.forEach((wrap) => {
    wrap.removeEventListener("click", handleFaqClick);
  });
}

function updateFaqListeners() {
  if (isMobile()) {
    addFaqListener();
  } else {
    removeFaqListener();
  }
}

// Benefits animation

const showMoreWraps = document.querySelectorAll(".show-more-wrap");

function benefitsShow(wrap) {
  const benefitsText = wrap.previousElementSibling;
  const icon = wrap.querySelector(".benefits-icon");
  const text = wrap.querySelector(".show-more-text");

  benefitsText.classList.toggle("expanded");
  icon.classList.toggle("rotated");

  text.textContent = benefitsText.classList.contains("expanded")
    ? "Show Less"
    : "Show More";
}

function handleShowMoreClick(event) {
  benefitsShow(event.currentTarget);
}

function addBenefitsListener() {
  showMoreWraps.forEach((wrap) => {
    wrap.addEventListener("click", handleShowMoreClick);
  });
}

function removeBenefitsListener() {
  showMoreWraps.forEach((wrap) => {
    wrap.removeEventListener("click", handleShowMoreClick);
  });
}

function updateBenefitsListener() {
  if (isMobile()) {
    addBenefitsListener();
  } else {
    removeBenefitsListener();
  }
}

// Спостерігач за виходом відео за межі екрану

let observer = null;

function handleVideoOutOfView(entries) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      if (entry.target === protectiveVideoWrap && !protectiveVideo.paused) {
        handleProtectiveClick();
      } else if (entry.target === standVideoWrap && !standVideo.paused) {
        handleStandClick();
      }
    }
  });
}

// Функція для ініціалізації observer тільки на мобільних пристроях

function initVideoObserver() {
  if (isMobile()) {
    if (!observer) {
      observer = new IntersectionObserver(handleVideoOutOfView, {
        threshold: 0.5,
      });
      observer.observe(protectiveVideoWrap);
      observer.observe(standVideoWrap);
    }
  } else {
    if (observer) {
      observer.disconnect();
      observer = null;
    }
  }
}

// Update Listeners

function updateListeners() {
  // console.log('resize');

  removeFrameListeners();
  addFrameListeners();
  removeNightListeners();
  addNightListeners();
  removeProtectiveListeners();
  addProtectiveListeners();
  removeStandListeners();
  addStandListeners();
  updateProtectiveVideoSrc();
  updateStandVideoSrc();
  updateFaqListeners();
  updateBenefitsListener();
  initVideoObserver();
}

let resizeTimeout;
let lastWidth = window.innerWidth < 760 ? "mobile" : "desktop";
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    const currentWidth = window.innerWidth < 760 ? "mobile" : "desktop";
    if (lastWidth !== currentWidth) {
      lastWidth = currentWidth;
      updateListeners();
    }
  }, 200);
});

updateListeners();
