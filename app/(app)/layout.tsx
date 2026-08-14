import { AppHeader } from '@/components/app/layout/AppHeader'
import { AppShell } from '@/components/app/layout/AppShell'
import { OnboardingGuard } from '@/components/app/onboarding/OnboardingGuard'
import { ChatStoreProvider } from '@/lib/store/chat-store-provider'
import { SanityLive } from '@/sanity/lib/live'
import { ClerkProvider } from '@clerk/nextjs'
import React from 'react'

const AppLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <ClerkProvider>
            <ChatStoreProvider>
                <OnboardingGuard>
                    <AppShell>
                        <AppHeader />
                        {children}
                    </AppShell>
                </OnboardingGuard>
                <SanityLive />
            </ChatStoreProvider>
        </ClerkProvider>
    )
}

export default AppLayout