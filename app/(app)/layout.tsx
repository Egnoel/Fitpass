import { AppHeader } from '@/components/app/layout/AppHeader'
import { OnboardingGuard } from '@/components/app/onboarding/OnboardingGuard'
import { SanityLive } from '@/sanity/lib/live'
import { ClerkProvider } from '@clerk/nextjs'
import React from 'react'

const AppLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <ClerkProvider>
            <OnboardingGuard>
                <AppHeader />
                {children}
            </OnboardingGuard>
            <SanityLive />
        </ClerkProvider>
    )
}

export default AppLayout