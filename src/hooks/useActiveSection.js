import { useEffect, useState } from "react";

// Returns the id of the section currently under the header,
// used to highlight the active nav link.
export function useActiveSection(ids, offset = 120) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const onScroll = () => {
      let current = ids[0];
      for (const id of ids) {
        const section = document.getElementById(id);
        if (section && window.scrollY >= section.offsetTop - offset) {
          current = id;
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids, offset]);

  return active;
}
