'use client'
import { useEffect, useRef, useState } from 'react'

type ScrollRoleTextProps = {
    items?: string[];
    interval?: number;
    itemHeight?: number;
    className?: string;
    pauseOnHover?: boolean;
};

export default function ScrollRoleText({
    items = [],
    interval = 2000,
    itemHeight = 30,
    className = '',
    pauseOnHover = false,
}: ScrollRoleTextProps) {
    const listRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const [index, setIndex] = useState(0)
    const isPausedRef = useRef(false)
    const totalItems = items.length

    const duplicatedItems = [...items, ...items]

    useEffect(() => {
        const scroll = () => {
        if (!isPausedRef.current) {
            setIndex((prev) => prev + 1)
        }
        }

        const timer = setInterval(scroll, interval)
        return () => clearInterval(timer)
    }, [interval])

    useEffect(() => {
    const list = listRef.current
    if (!list) return

    list.style.transition = index === 0 ? 'none' : 'transform 0.5s ease-in-out';
    list.style.transform = `translateY(-${index * itemHeight}px)`;

    if (index === totalItems) {
        const handleTransitionEnd = () => {
            if (!listRef.current) return
            listRef.current.style.transition = 'none'
            listRef.current.style.transform = 'translateY(0px)'
            setIndex(0)
            listRef.current.removeEventListener('transitionend', handleTransitionEnd)
        }

        list.addEventListener('transitionend', handleTransitionEnd)
        }
    }, [index, itemHeight, totalItems])

    useEffect(() => {
        if (!pauseOnHover || !containerRef.current) return

        const handleMouseEnter = () => { isPausedRef.current = true }
        const handleMouseLeave = () => { isPausedRef.current = false }

        const container = containerRef.current
        container.addEventListener('mouseenter', handleMouseEnter)
        container.addEventListener('mouseleave', handleMouseLeave)

        return () => {
        container.removeEventListener('mouseenter', handleMouseEnter)
        container.removeEventListener('mouseleave', handleMouseLeave)
        }
    }, [pauseOnHover])

    return (
        <div
            ref={containerRef}
            className={`relative overflow-hidden ${className}`}
            style={{ height: `${itemHeight}px` }}
        >
            <div ref={listRef}>
                {duplicatedItems.map((item, i) => (
                <div
                    key={i}
                    className="flex items-center justify-center md:justify-end text-end w-full"
                    style={{ height: itemHeight }}
                >
                    {item}
                </div>
                ))}
            </div>
        </div>
    )
}
