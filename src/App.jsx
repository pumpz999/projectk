import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RainbowKitProvider } from '@rainbow-me/rainbowkit'

import { config } from './config/wagmi'
import { WalletConnect } from './components/WalletConnect'
import { TradingInterface } from './components/TradingInterface'

const queryClient = new QueryClient()

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <div className="min-h-screen bg-dark-300 text-white">
            <header className="container mx-auto p-4 flex justify-between items-center">
              <h1 className="text-2xl font-bold">Meme Token Trader</h1>
              <WalletConnect />
            </header>
            <main className="container mx-auto p-4">
              <TradingInterface />
            </main>
          </div>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default App
