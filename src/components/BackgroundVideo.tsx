import React, { useEffect, useRef, useState } from 'react';

export const BackgroundVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const isSeekingRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Strict scroll-driven mode: video is always paused, advances purely with page scroll
    video.pause();

    const handleScroll = () => {
      if (!video) return;
      const scrollY = window.scrollY || document.documentElement.scrollTop || 0;
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const scrollRatio = Math.min(1, Math.max(0, scrollY / maxScroll));

      // Video total duration is ~12s
      const duration = video.duration && !isNaN(video.duration) ? video.duration : 12;
      const targetTime = Math.min(duration - 0.05, scrollRatio * duration);

      if (!isSeekingRef.current && Math.abs(video.currentTime - targetTime) > 0.03) {
        try {
          isSeekingRef.current = true;
          if ('fastSeek' in video && typeof (video as HTMLVideoElement & { fastSeek?: (t: number) => void }).fastSeek === 'function') {
            (video as HTMLVideoElement & { fastSeek: (t: number) => void }).fastSeek(targetTime);
          } else {
            video.currentTime = targetTime;
          }
          setTimeout(() => {
            isSeekingRef.current = false;
          }, 25);
        } catch {
          isSeekingRef.current = false;
        }
      }
    };

    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    // Ensure initial frame at the very top is 0s (pure Pixar clouds, no landscape)
    video.currentTime = 0;
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden select-none bg-[#BFE3F5]"
      style={{ zIndex: 0 }}
    >
      <video
        ref={videoRef}
        src="/background-video.mp4?v=20260902_cartoon_core"
        poster="/bg-sky.jpg?v=20260902_cartoon_core"
        muted
        playsInline
        preload="auto"
        onLoadedData={() => {
          setVideoLoaded(true);
          if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
          }
        }}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          opacity: videoLoaded ? 1 : 0.98,
        }}
      />

      {/* Instant pure cloud fallback poster */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-500 pointer-events-none"
        style={{
          backgroundImage: 'url("/bg-sky.jpg?v=20260902_cartoon_core")',
          opacity: videoLoaded ? 0 : 1,
        }}
      />

      {/* Subtle legibility overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/[0.02] to-black/[0.06] pointer-events-none" />
    </div>
  );
};
