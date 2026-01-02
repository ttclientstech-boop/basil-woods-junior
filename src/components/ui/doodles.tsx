import React from "react";
import { cn } from "@/lib/utils";

interface DoodleProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    fillColor?: string;
    strokeColor?: string;
}

// --- NATURE ELEMENTS ---

export const DoodleSun = ({ className, fillColor = "none", strokeColor = "currentColor", ...props }: DoodleProps) => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("w-24 h-24", className)} {...props}>
        <circle cx="50" cy="50" r="20" stroke={strokeColor} strokeWidth="3" fill={fillColor} strokeLinecap="round" />
        <path d="M50 20V10M50 90V80M20 50H10M90 50H80M29 29L22 22M78 78L71 71M29 71L22 78M78 22L71 29" stroke={strokeColor} strokeWidth="3" strokeLinecap="round" />
    </svg>
);

export const DoodleCloud = ({ className, fillColor = "none", strokeColor = "currentColor", ...props }: DoodleProps) => (
    <svg viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("w-24 h-16", className)} {...props}>
        <path d="M10 50C4.477 50 0 45.523 0 40C0 34.477 4.477 30 10 30C10.957 16.623 22.146 6 36 6C46.864 6 56.164 12.535 60.107 21.986C62.463 19.497 65.719 18 69 18C76.732 18 83 24.268 83 32C83 32.556 82.966 33.101 82.9 33.636C87.011 34.981 90 38.86 90 43.5C90 49.299 85.299 54 79.5 54H10" stroke={strokeColor} strokeWidth="3" fill={fillColor} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const DoodleLeaf = ({ className, fillColor = "none", strokeColor = "currentColor", ...props }: DoodleProps) => (
    <svg viewBox="0 0 50 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("w-12 h-20", className)} {...props}>
        <path d="M25 75C25 75 45 55 45 35C45 15 25 5 25 5C25 5 5 15 5 35C5 55 25 75 25 75Z" stroke={strokeColor} strokeWidth="2.5" fill={fillColor} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M25 5V75M25 25L40 15M25 45L40 35M25 60L35 55M25 25L10 15M25 45L10 35M25 60L15 55" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const DoodleFlower = ({ className, fillColor = "none", strokeColor = "currentColor", ...props }: DoodleProps) => (
    <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("w-16 h-16", className)} {...props}>
        <path d="M30 30L30 55" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
        <path d="M30 30C35 20 45 20 50 30C45 40 35 40 30 30Z" stroke={strokeColor} strokeWidth="2" fill={fillColor} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M30 30C40 35 40 45 30 50C20 45 20 35 30 30Z" stroke={strokeColor} strokeWidth="2" fill={fillColor} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M30 30C25 40 15 40 10 30C15 20 25 20 30 30Z" stroke={strokeColor} strokeWidth="2" fill={fillColor} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M30 30C20 25 20 15 30 10C40 15 40 25 30 30Z" stroke={strokeColor} strokeWidth="2" fill={fillColor} strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="30" cy="30" r="4" fill={strokeColor} />
    </svg>
);

export const DoodleBird = ({ className, strokeColor = "currentColor", ...props }: DoodleProps) => (
    <svg viewBox="0 0 50 30" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("w-12 h-8", className)} {...props}>
        <path d="M3 15C10 25 20 25 25 15C30 25 40 25 47 15" stroke={strokeColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

// Re-exporting StarDoodle
export const StarDoodle = ({ className, fillColor = "none", strokeColor = "currentColor", ...props }: DoodleProps) => (
    <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("w-12 h-12", className)} {...props}>
        <path d="M25 5 L 31 18 H 45 L 34 26 L 38 40 L 25 32 L 12 40 L 16 26 L 5 18 H 19 Z" stroke={strokeColor} strokeWidth="2.5" fill={fillColor} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

// --- EDUCATIONAL ICONS ---

export const DoodlePencil = ({ className, ...props }: DoodleProps) => (
    <svg viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("w-32 h-16", className)} {...props}>
        {/* Squiggly Line */}
        <path d="M140 40 C 145 30, 155 30, 160 40 S 170 50, 175 40 S 185 30, 190 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />

        {/* Pencil Body Rotated */}
        <g transform="translate(10, 60) rotate(-30)">
            {/* Eraser */}
            <rect x="0" y="0" width="20" height="40" rx="5" fill="#EF4444" stroke="currentColor" strokeWidth="2" />
            {/* Metal Ferrule */}
            <rect x="20" y="0" width="10" height="40" fill="#E5E7EB" stroke="currentColor" strokeWidth="2" />
            {/* Main Yellow Body */}
            <rect x="30" y="0" width="80" height="40" fill="#FBBF24" stroke="currentColor" strokeWidth="2" />
            {/* Shine/Reflection on Body */}
            <path d="M40 10 H 100" stroke="white" strokeWidth="3" opacity="0.5" strokeLinecap="round" />
            {/* Wood Collar */}
            <path d="M110 0 L 140 20 L 110 40 Z" fill="#FDE68A" stroke="currentColor" strokeWidth="2" />
            {/* Lead Tip */}
            <path d="M140 20 L 130 14 L 130 26 Z" fill="#1F2937" />
        </g>
    </svg>
);

export const DoodleBook = ({ className, fillColor = "none", strokeColor = "currentColor", ...props }: DoodleProps) => (
    <svg viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("w-20 h-16", className)} {...props}>
        <path d="M40 50V10C40 10 30 5 10 10V50C30 45 40 50 40 50Z" stroke={strokeColor} strokeWidth="2.5" fill={fillColor} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M40 50V10C40 10 50 5 70 10V50C50 45 40 50 40 50Z" stroke={strokeColor} strokeWidth="2.5" fill={fillColor} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 15C25 12 35 14 35 14" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M65 15C55 12 45 14 45 14" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

export const DoodleBulb = ({ className, fillColor = "none", strokeColor = "currentColor", ...props }: DoodleProps) => (
    <svg viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("w-16 h-20", className)} {...props}>
        <path d="M20 50C15 45 10 40 10 30C10 19 19 10 30 10C41 10 50 19 50 30C50 40 45 45 40 50" stroke={strokeColor} strokeWidth="2.5" fill={fillColor} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 62H38M22 68H38" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" />
        <path d="M25 75C25 75 28 80 30 80C32 80 35 75 35 75" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" />
        <path d="M20 50H40V60H20V50Z" stroke={strokeColor} strokeWidth="2.5" fill={fillColor} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const DoodleRocket = ({ className, ...props }: DoodleProps) => (
    <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("w-40 h-24", className)} {...props}>
        {/* Dashed Flight Path */}
        <path d="M20 80 Q 40 100, 60 70 T 100 60 T 140 80" stroke="#C084FC" strokeWidth="2" strokeDasharray="6 4" fill="none" />

        {/* Planet */}
        <g transform="translate(40, 30) scale(0.6)">
            <circle cx="30" cy="30" r="20" stroke="#A855F7" strokeWidth="3" fill="none" />
            <ellipse cx="30" cy="30" rx="35" ry="8" stroke="#A855F7" strokeWidth="3" transform="rotate(-20 30 30)" fill="none" />
        </g>

        {/* Rocket Ship */}
        <g transform="translate(140, 40) rotate(-45)">
            <path d="M30 5 C 30 5, 10 30, 10 60 H 50 C 50 30, 30 5, 30 5 Z" stroke="#9333EA" strokeWidth="3" fill="#E9D5FF" />
            <path d="M10 60 L 0 75 L 15 70" stroke="#9333EA" strokeWidth="3" fill="#E9D5FF" />
            <path d="M50 60 L 60 75 L 45 70" stroke="#9333EA" strokeWidth="3" fill="#E9D5FF" />
            <circle cx="30" cy="35" r="8" stroke="#9333EA" strokeWidth="2" fill="white" />
            <path d="M25 70 Q 30 85 35 70" stroke="#9333EA" strokeWidth="2" fill="none" />
            {/* Flame */}
            <path d="M25 75 Q 30 90 35 75" fill="#FCA5A5" opacity="0.8" />
        </g>
    </svg>
);

// --- VEDIC & CULTURAL MOTIFS ---

export const DoodlePeacockFeather = ({ className, fillColor = "none", strokeColor = "currentColor", ...props }: DoodleProps) => (
    <svg viewBox="0 0 50 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("w-12 h-24", className)} {...props}>
        <path d="M25 95C25 95 45 60 45 35C45 15 35 5 25 5C15 5 5 15 5 35C5 60 25 95 25 95Z" stroke={strokeColor} strokeWidth="2" fill={fillColor} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M25 20C20 20 15 25 15 35C15 45 20 50 25 50C30 50 35 45 35 35C35 25 30 20 25 20Z" stroke={strokeColor} strokeWidth="2" fill="currentColor" opacity="0.2" />
        <circle cx="25" cy="35" r="5" fill={strokeColor} />
        <line x1="25" y1="5" x2="25" y2="95" stroke={strokeColor} strokeWidth="1" />
    </svg>
);

export const DoodleLotus = ({ className, fillColor = "none", strokeColor = "currentColor", ...props }: DoodleProps) => (
    <svg viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("w-20 h-16", className)} {...props}>
        <path d="M40 55C40 55 10 45 10 25C10 10 25 10 40 25C55 10 70 10 70 25C70 45 40 55 40 55Z" stroke={strokeColor} strokeWidth="2.5" fill={fillColor} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M40 55C40 55 30 35 40 15C50 35 40 55 40 55Z" stroke={strokeColor} strokeWidth="2.5" fill={fillColor} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 55H65" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
);


// --- ABSTRACT SHAPES & DIVIDERS ---

export const DoodleBlob = ({ className, fillColor = "#FFEDD5", ...props }: DoodleProps) => (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("w-full h-full", className)} {...props}>
        <path d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.2,-19.2,95.8,-5.2C93.5,8.9,82,22.1,70.9,33.5C59.8,45,49.1,54.6,37.3,62.8C25.5,71,12.8,77.7,-0.4,78.4C-13.6,79.1,-27.2,73.8,-40,66.1C-52.8,58.4,-64.8,48.4,-73.4,36.2C-82,24,-87.3,9.7,-84.9,-3.3C-82.5,-16.4,-72.5,-28.1,-62.4,-38.3C-52.3,-48.5,-42.1,-57.2,-30.9,-66.2C-19.7,-75.2,-7.5,-84.5,6.1,-85.4C19.7,-86.3,39.4,-78.8,44.7,-76.4Z" transform="translate(100 100)" fill={fillColor} />
    </svg>
);

export const DoodleWave = ({ className, strokeColor = "currentColor", ...props }: DoodleProps) => (
    <svg viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("w-full h-4", className)} preserveAspectRatio="none" {...props}>
        <path d="M0 10 Q 12.5 0, 25 10 T 50 10 T 75 10 T 100 10" stroke={strokeColor} strokeWidth="2" vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const DoodleSparkle = ({ className, strokeColor = "currentColor", ...props }: DoodleProps) => (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("w-8 h-8", className)} {...props}>
        <path d="M20 0L24 16L40 20L24 24L20 40L16 24L0 20L16 16L20 0Z" stroke={strokeColor} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const DoodleArrow = ({ className, strokeColor = "currentColor", ...props }: DoodleProps) => (
    <svg viewBox="0 0 50 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("w-16 h-8", className)} {...props}>
        <path d="M5 10H45M45 10L35 3M45 10L35 17" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const DoodleReadingBoy = ({ className, ...props }: DoodleProps) => (
    <svg viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("w-64 h-64", className)} {...props}>
        {/* Head */}
        <circle cx="100" cy="65" r="35" fill="#FCA5A5" stroke="#1F2937" strokeWidth="3" />

        {/* Hair - Darker/Filled */}
        <path d="M65 65 C 65 30, 80 20, 100 20 C 120 20, 135 30, 135 65 C 135 65, 135 55, 125 45 C 115 55, 105 55, 100 55 C 95 55, 85 55, 75 45 C 65 55, 65 65, 65 65" fill="#4B5563" stroke="#1F2937" strokeWidth="3" strokeLinejoin="round" />

        {/* Eyes (Focused Down) */}
        <path d="M85 70 Q 90 75, 95 70" stroke="#1F2937" strokeWidth="2.5" fill="none" />
        <path d="M105 70 Q 110 75, 115 70" stroke="#1F2937" strokeWidth="2.5" fill="none" />

        {/* Nose & Mouth */}
        <path d="M100 75 V 80" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" />
        <path d="M95 88 Q 100 92, 105 88" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" fill="none" />

        {/* Body/Shirt - Dark Blue */}
        <path d="M70 95 L 60 140 H 140 L 130 95 C 130 95, 120 100, 100 100 C 80 100, 70 95, 70 95" fill="#1E40AF" stroke="#1F2937" strokeWidth="3" strokeLinejoin="round" />

        {/* Sleeves */}
        <path d="M60 140 L 58 155 L 75 155 L 75 140" fill="#1E3A8A" stroke="#1F2937" strokeWidth="2" />
        <path d="M140 140 L 142 155 L 125 155 L 125 140" fill="#1E3A8A" stroke="#1F2937" strokeWidth="2" />

        {/* Hands */}
        <circle cx="66" cy="165" r="12" fill="#FCA5A5" stroke="#1F2937" strokeWidth="2" />
        <circle cx="134" cy="165" r="12" fill="#FCA5A5" stroke="#1F2937" strokeWidth="2" />

        {/* Book - Yellow/Orange */}
        <path d="M40 180 H 160 V 200 H 40 Z" fill="#F59E0B" stroke="#1F2937" strokeWidth="3" />
        <path d="M50 165 L 40 180 H 160 L 150 165 H 50 Z" fill="#FCD34D" stroke="#1F2937" strokeWidth="2" />

        {/* Pages/Text Lines */}
        <line x1="60" y1="170" x2="90" y2="170" stroke="#1F2937" strokeWidth="1.5" />
        <line x1="60" y1="175" x2="90" y2="175" stroke="#1F2937" strokeWidth="1.5" />
        <line x1="110" y1="170" x2="140" y2="170" stroke="#1F2937" strokeWidth="1.5" />
        <line x1="110" y1="175" x2="140" y2="175" stroke="#1F2937" strokeWidth="1.5" />

        {/* Pencil in Hand */}
        <path d="M134 165 L 130 145 L 135 140" stroke="#FBBF24" strokeWidth="4" strokeLinecap="round" />
    </svg>
);
