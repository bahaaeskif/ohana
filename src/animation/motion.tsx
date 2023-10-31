export const fade = (isActive: boolean) => {
  return {
    initial: { opacity: 1 },
    animate: {
      opacity: isActive ? 0.2 : 1,
    },
    transition: { duration: 1.2 },
  };
};

export const parallex = (isActive: boolean) => {
  return {
    initial: { scale: 1 },
    animate: {
      scale: isActive ? 1.3 : 1,
    },
    transition: { duration: 10, ease: "linear" },
  };
};

export const slideIn = (isActive: boolean) => {
  return {
    initial: { left: "40%" },
    animate: {
      left: isActive ? "50%" : "40%",
      x: isActive ? "-50%" : 0,
    },
    transition: { duration: 0.9, ease: "linear" },
  };
};

export const slideUp = (isActive: boolean) => {
  return {
    initial: { bottom: "0%", opacity: 0 },
    animate: {
      bottom: isActive ? "25%" : "0%",
      opacity: isActive ? 1 : 0,
    },
    transition: { duration: 0.9, ease: "linear" },
  };
};
