"use client";

import { useEffect, useState } from "react";
import { Download } from "lucide-react";

export default function InstallButton() {
  const [promptEvent, setPromptEvent] = useState<any>(null);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setPromptEvent(e);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const installApp = async () => {
    if (promptEvent) {
      promptEvent.prompt();
      await promptEvent.userChoice;
    } else {
      alert(
        "To install this app, use your browser menu and choose 'Add to Home Screen'",
      );
    }
  };

  return (
    <button
      onClick={installApp}
      title="Install app"
      aria-label="Install app"
      className="p-2 rounded-xl border hover:bg-gray-400"
    >
      <Download className="w-5 h-5" color={"#fff"} />
    </button>
  );
}
