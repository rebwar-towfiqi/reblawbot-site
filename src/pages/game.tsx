// src/pages/game.tsx

import { useEffect } from "react";

export default function GameRedirect() {
  useEffect(() => {
    window.location.href = "/game/index.html";
  }, []);

  return <p>در حال بارگذاری بازی...</p>;
}
