"use client";
import React, { useRef, useState, useEffect } from "react";

export function BackgroundAudio() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.3;
      if (isPlaying) {
        audio.play().catch((error) => {
          // Handle or log errors, e.g., due to autoplay restrictions
          console.error("Error playing audio:", error);
        });
      }
    }
  }, [isPlaying]);

  const handleTogglePlay = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play().catch((error) => {
          // Handle or log errors, e.g., due to autoplay restrictions
          console.error("Error playing audio:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="bg-red-500 w-20 h-20">
      <audio
        ref={audioRef}
        src="/assets/audio/day.mp3"
      />
      <button onClick={handleTogglePlay}>{isPlaying ? "Pause" : "Play"}</button>
    </div>
  );
}
