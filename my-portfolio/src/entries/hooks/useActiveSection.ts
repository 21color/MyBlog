import { useEffect, useRef, useState } from 'react';

export function useActiveSection() {
  const myCircleRefs = useRef<HTMLDivElement[]>([]);
  const sectionRefs = useRef<HTMLDivElement[]>([]);
  const bigRestRoomRef = useRef<HTMLDivElement>(null);
  const [showBigRestRoom, setShowBigRestRoom] = useState(false);
  const windowHight = window.innerHeight / 1.5;

  const [showMyCircle, setShowMyCircle] = useState([
    {
      show: false,
      idx: 0,
    },
    {
      show: false,
      idx: 1,
    },
    {
      show: false,
      idx: 2,
    },
  ]);

  const [showSection, setShowSection] = useState([
    {
      show: false,
      idx: 0,
    },
    {
      show: false,
      idx: 1,
    },
    {
      show: false,
      idx: 2,
    },
    {
      show: false,
      idx: 3,
    },
  ]);

  const activeSection = () => {
    if (
      bigRestRoomRef.current &&
      bigRestRoomRef.current.getBoundingClientRect().top < windowHight
    ) {
      setShowBigRestRoom(true);
    }

    myCircleRefs.current.forEach((circle, idx) => {
      if (circle.getBoundingClientRect().top < windowHight) {
        console.log(idx);
        setShowMyCircle((prev) =>
          prev.map((circle, index) => {
            if (index === idx) {
              return { ...circle, show: true };
            }
            return circle;
          }),
        );
      } else {
        setShowMyCircle((prev) =>
          prev.map((circle, index) => {
            if (index === idx) {
              return { ...circle, show: false };
            }
            return circle;
          }),
        );
      }
    });

    sectionRefs.current.forEach((section, idx) => {
      if (section.getBoundingClientRect().top < windowHight) {
        setShowSection((prev) =>
          prev.map((section, index) => {
            if (index === idx) {
              return { ...section, show: true };
            }
            return section;
          }),
        );
      } else {
        setShowSection((prev) =>
          prev.map((section, index) => {
            if (index === idx) {
              return { ...section, show: false };
            }
            return section;
          }),
        );
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', activeSection);
    return () => {
      window.removeEventListener('scroll', activeSection);
    };
  }, []);

  return {
    myCircleRefs,
    sectionRefs,
    bigRestRoomRef,
    showBigRestRoom,
    showMyCircle,
    showSection,
  };
}
