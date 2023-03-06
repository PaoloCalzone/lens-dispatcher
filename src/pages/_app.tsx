import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet, polygon } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
const { provider, webSocketProvider } = configureChains(
  [polygon, mainnet],
  [publicProvider()]
);
import { LensConfig, staging } from "@lens-protocol/react";
import { localStorage } from "@lens-protocol/react/web";
import { bindings as wagmiBindings } from "@lens-protocol/wagmi";
import { LensProvider } from "@lens-protocol/react";

const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
});

const lensConfig: LensConfig = {
  bindings: wagmiBindings(),
  environment: staging,
  storage: localStorage(),
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={client}>
      <LensProvider config={lensConfig}>
        <Component {...pageProps} />
      </LensProvider>
    </WagmiConfig>
  );
}
