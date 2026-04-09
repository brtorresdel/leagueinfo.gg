import { useState, useEffect, useRef } from "react";

export function useObserver (options) {
    const [intersec, setIntersec] = useState(false);

    const elementRef = useRef(null);

    useEffect(() => {

        const observer = new IntersectionObserver(([entry]) => {
            if(entry.isIntersecting) {
                setIntersec(true);
                observer.unobserve(elementRef.current);
            }
        })

        if (elementRef.current) observer.observe(elementRef.current);

        return () => observer.disconnect();

    }, [options]);

    return [elementRef, intersec];
}