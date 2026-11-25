"use client"

import { MotionConfig } from "framer-motion"
import type React from "react"

// Respeita a preferência do sistema por menos movimento em todas as animações
export default function MotionProvider({ children }: { children: React.ReactNode }) {
    return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
