export type UIListener = (event: UIEvent) => any;

export const hasClickedAway = (
  element: HTMLElement | Element | Document,
  { target }: MouseEvent,
): boolean => {
  return !element.contains(target ? (target as Node) : null);
};

export const updateListeners = (
  listener: UIListener,
  shouldListen: boolean,
): void => {
  if (shouldListen) {
    document.addEventListener('click', listener);
    document.addEventListener('keydown', listener);
  } else {
    document.removeEventListener('click', listener);
    document.removeEventListener('keydown', listener);
  }
};
