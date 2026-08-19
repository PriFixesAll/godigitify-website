'use client';

/**
 * DropdownFlash — "Mastery Area" dropdown with scrim-pulse transition.
 *
 * Exact timing sequence:
 *   t = 0ms    Menu appears instantly (opacity 1, no enter animation)
 *   t ≈ 40ms   Scrim starts fading IN  → 0.17 over 230ms  ease-out  (cubic-bezier(0, 0, 0.2, 1))
 *   t = 270ms  Scrim at peak (0.17) — hold for 130ms
 *   t = 400ms  Hold ends:
 *                • Menu unmounts / hides abruptly (hard cut — no exit animation)
 *                • Scrim starts fading OUT → 0 over 270ms ease-in-out (cubic-bezier(0.4, 0, 0.2, 1))
 *   t = 670ms  Scrim reaches opacity 0 — sequence complete
 *
 * Scrim: z-index 40, background #000, pointer-events: none.
 * Dropdown: z-index 50, white card, 8px radius, shadow (0 4px 20px rgba(0,0,0,0.08)).
 */

import React, { useState, useRef, useCallback, useEffect } from 'react';

export interface DropdownFlashProps {
  /** Label shown as the dropdown trigger text. Defaults to "Mastery Area". */
  label?: string;
  /** Callback fired when "Brand" menu item is clicked. */
  onBrandSelect?: () => void;
  /** Callback fired when "Product" menu item is clicked. */
  onProductSelect?: () => void;
  /** Additional CSS class names for the trigger container. */
  className?: string;
}

export function DropdownFlash({
  label = 'Mastery Area',
  onBrandSelect,
  onProductSelect,
  className = '',
}: DropdownFlashProps) {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const scrimRef = useRef<HTMLDivElement>(null);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  }, []);

  useEffect(() => {
    return () => clearTimers();
  }, [clearTimers]);

  const triggerPulse = useCallback(() => {
    clearTimers();

    // 1. Menu appears instantly (t=0ms)
    setIsMenuVisible(true);

    // Initial scrim reset before transition starts
    if (scrimRef.current) {
      scrimRef.current.style.transition = 'none';
      scrimRef.current.style.opacity = '0';
      // Force reflow
      void scrimRef.current.offsetWidth;
    }

    // 2. Scrim fade-in begins ~40ms after menu appears (230ms ease-out)
    const t1 = setTimeout(() => {
      if (!scrimRef.current) return;
      scrimRef.current.style.transition = 'opacity 230ms cubic-bezier(0, 0, 0.2, 1)';
      scrimRef.current.style.opacity = '0.17';
    }, 40);

    // 3. Peak hold ends at t = 40 + 230 + 130 = 400ms
    // Menu hard-cuts, scrim fades out (270ms ease-in-out)
    const t2 = setTimeout(() => {
      // Abrupt menu removal (no fade)
      setIsMenuVisible(false);

      if (!scrimRef.current) return;
      scrimRef.current.style.transition = 'opacity 270ms cubic-bezier(0.4, 0, 0.2, 1)';
      scrimRef.current.style.opacity = '0';
    }, 400);

    // 4. Cleanup transition style after scrim fade-out completes (~670ms)
    const t3 = setTimeout(() => {
      if (!scrimRef.current) return;
      scrimRef.current.style.transition = 'none';
    }, 670);

    timersRef.current = [t1, t2, t3];
  }, [clearTimers]);

  return (
    <>
      {/* Backdrop Scrim */}
      <div
        ref={scrimRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: '#000000',
          opacity: 0,
          zIndex: 40,
          pointerEvents: 'none',
        }}
      />

      {/* Trigger & Menu Wrapper */}
      <div className={`relative inline-block ${className}`}>
        {/* Trigger Button */}
        <button
          type="button"
          onClick={triggerPulse}
          onMouseEnter={triggerPulse}
          className="cursor-pointer text-sm font-semibold text-[#0F172A] hover:text-[#7C3AED] transition-colors select-none focus:outline-none flex items-center gap-1.5"
        >
          <span>{label}</span>
          <svg
            aria-hidden="true"
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            className="opacity-50 transition-transform duration-200"
          >
            <path
              d="M1 1l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Dropdown Menu (Hard Cut Conditional Render) */}
        {isMenuVisible && (
          <div
            style={{
              position: 'absolute',
              top: 'calc(100% + 8px)',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: '#FFFFFF',
              borderRadius: '8px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              zIndex: 50,
              minWidth: '160px',
              overflow: 'hidden',
            }}
          >
            <button
              type="button"
              onClick={() => {
                onBrandSelect?.();
              }}
              style={{
                display: 'block',
                width: '100%',
                padding: '14px 16px',
                textAlign: 'left',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: 500,
                color: '#0F172A',
              }}
              className="hover:bg-[#F8F8F8] transition-colors"
            >
              Brand
            </button>

            <div style={{ height: '1px', backgroundColor: '#EEEEEE', margin: 0 }} />

            <button
              type="button"
              onClick={() => {
                onProductSelect?.();
              }}
              style={{
                display: 'block',
                width: '100%',
                padding: '14px 16px',
                textAlign: 'left',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: 500,
                color: '#0F172A',
              }}
              className="hover:bg-[#F8F8F8] transition-colors"
            >
              Product
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default DropdownFlash;
