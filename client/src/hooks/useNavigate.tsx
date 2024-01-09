import { NAVIGATION_EVENT } from "../constans.d";

export const Navigate = (href: string) => {
    window.history.pushState({}, '', href);
    const navigationEvent = new Event(NAVIGATION_EVENT);
    window.dispatchEvent(navigationEvent);
}
