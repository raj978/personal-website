// `components/ui/scroll-arrow.tsx`
'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// const bounce = {
//   initial: { y: 0 },
//   animate: {
//     y: [0, -30, -15, 0],
//     transition: {
//       duration: 2,
//       repeat: Infinity,
//       repeatType: 'loop',
//     },
//   },
// };

const ScrollDownIndicator = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
    const checkScrollBottom = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    };

    window.addEventListener('scroll', checkScrollBottom);

    return () => window.removeEventListener('scroll', checkScrollBottom);
    }, []);

    if (!isVisible) return null;

    return (
        <motion.div
            style={{
                position: 'fixed',
                width: '30px',
                height: '30px',
                backgroundColor: '#28a745',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                cursor: 'pointer',
            }}
            onClick={() => window.scrollBy({top: window.innerHeight / 0.65, behavior: 'smooth'})}
            animate={{
                y: [-40, 0, -40],
                transition: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: "linear",
                },
            }}
        >
            ↓
        </motion.div>
    );
};

export default ScrollDownIndicator;
