import "./Swap.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { Combobox } from "@headlessui/react";
import "@rainbow-me/rainbowkit/styles.css";
import {
    ConnectButton,
    connectorsForWallets,
    RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import {
    configureChains,
    createConfig,
    useAccount,
    usePrepareSendTransaction,
    useSendTransaction,
    WagmiConfig,
} from "wagmi";
import { mainnet } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import Button from "../site/Button.tsx";
import {
    injectedWallet,
    metaMaskWallet,
    okxWallet,
    rainbowWallet,
    walletConnectWallet,
    trustWallet,
    coinbaseWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { parseEther, parseUnits } from "viem";
import PaalTokenLogo from "../../assets/site/paal-token.jpeg";

export default function Swap() {
    const [availableTokens, setAvailableTokens] = useState<any[]>([]);
    const [selectedTokenSymbol, setSelectedTokenSymbol] = useState("ETH");
    const [equivalentPAALAmount, setEquivalentPAALAmount] = useState(0);
    const [paalTokenInfo, setPaalTokenInfo] = useState<any>({});

    useEffect(() => {
        const whitelistedTokens = ["ETH", "USDT", "USDC"];

        const API_URL = "https://www.okx.com/api/v5/dex/aggregator";
        fetch(API_URL + "/all-tokens" + "?chainId=1")
            .then((res) => res.json())
            .then((data) => {
                if (!data) return;
                // setAvailableTokens(data.data.slice(0, 100)); // testing

                const allowedTokens = data.data.filter((token: any) => {
                    return whitelistedTokens.includes(token.tokenSymbol);
                });

                setAvailableTokens(allowedTokens);
                // setAvailableTokens(data.data);

                const paalTokenInfo = data.data.find((token: any) => {
                    return token.tokenSymbol === "PAAL";
                });
                setPaalTokenInfo(paalTokenInfo);
            });
    }, []);

    const selectedToken = availableTokens.find(
        (token) => token?.tokenSymbol === selectedTokenSymbol
    );
    const [tokenAmount, setTokenAmount] = useState("1");

    return (
        <Web3Providers>
            <section className="site-content-container swap-container">
                <h3>Swap $PAAL</h3>

                <div className="swap-card">
                    <div className="heading">
                        <span className="label">From</span>
                        <img
                            src={selectedToken?.tokenLogoUrl}
                            alt=""
                            className="swap-coin-icon"
                        />
                        <span className="coin-name">
                            {selectedToken?.tokenName}
                        </span>
                    </div>

                    <div
                        className="select-row"
                        style={{ marginBottom: "3rem" }}
                    >
                        <div>
                            <TokenSelect
                                availableTokens={availableTokens}
                                selectedToken={selectedTokenSymbol}
                                setSelectedToken={setSelectedTokenSymbol}
                                selectedTokenImage={selectedToken?.tokenLogoUrl}
                            />
                        </div>

                        <div className="stats">
                            <input
                                type="number"
                                placeholder="1"
                                value={tokenAmount}
                                onChange={(e) => setTokenAmount(e.target.value)}
                            />
                            {/*<span>$1,869.81</span>*/}
                        </div>
                    </div>

                    <div className="select-row" style={{}}>
                        <div className="token-search">
                            <img
                                src={
                                    paalTokenInfo?.tokenLogoUrl || PaalTokenLogo
                                }
                                alt=""
                                className="coin-icon"
                            />
                            <span className="input">PAAL</span>
                        </div>

                        <div className="stats">
                            <input
                                disabled
                                type="number"
                                value={equivalentPAALAmount}
                            />
                        </div>
                    </div>
                </div>

                <div className="connect-button-container">
                    <TokenSwapButton
                        selectedToken={selectedToken}
                        amount={String(Number(tokenAmount) || 1)}
                        setEquivalentAmount={setEquivalentPAALAmount}
                    />

                    <ConnectButton />
                </div>
            </section>
        </Web3Providers>
    );
}

type TokenSwapButtonProps = {
    selectedToken: any;
    amount: string;
    setEquivalentAmount: (value: any) => void;
};

function TokenSwapButton(props: TokenSwapButtonProps) {
    const account = useAccount();

    const [swapTxData, setSwapTxData] = useState<any>(null);
    const { config: swapTxConfig } = usePrepareSendTransaction({
        value: parseEther(swapTxData?.value || "0"),
        gas: swapTxData?.gasPrice,
        gasPrice: swapTxData?.gasPrice,
        to: swapTxData?.to,
        data: swapTxData?.data,
    });
    const { isSuccess: isSwapSuccess, sendTransaction: swapSendTransaction } =
        useSendTransaction(swapTxConfig);

    useEffect(() => {
        getSwapData();
    }, [props.amount, props.selectedToken]);

    useEffect(() => {
        if (swapTxData?.minReceiveAmount) {
            props.setEquivalentAmount(swapTxData.minReceiveAmount);
        }
    }, [swapTxData?.minReceiveAmount]);

    async function getSwapData() {
        if (!account.address || !props.selectedToken) return;

        const API_URL = "https://www.okx.com/api/v5/dex/aggregator";
        const response = await fetch(
            API_URL +
                "/swap?" +
                new URLSearchParams({
                    chainId: "1",
                    amount: props.amount,
                    fromTokenAddress: props.selectedToken.tokenContractAddress,
                    // props.selectedToken.tokenSymbol === "ETH"
                    //     ? "0x0000000000000000000000000000000000000000"
                    //     : props.selectedToken.tokenContractAddress,
                    toTokenAddress:
                        "0x14feE680690900BA0ccCfC76AD70Fd1b95D10e16",
                    userWalletAddress: account.address,
                    slippage: String(0.1),
                }).toString()
        );
        const data = await response.json();

        if (data) {
            setSwapTxData(data.data[0]?.tx);
        }
    }

    async function getAllowanceData() {
        const API_URL = "https://www.okx.com/api/v5/dex/aggregator";
        const response = await fetch(
            API_URL +
                "/get-allowance?" +
                new URLSearchParams({
                    chainId: "1",
                    tokenContractAddress:
                        props.selectedToken.tokenContractAddress,
                    userWalletAddress: account.address as string,
                }).toString()
        );
        const data = await response.json();

        if (data) {
            return Number(data.data[0].allowanceAmount);
        }
        return 0;
    }

    const [approveTxData, setApproveTxData] = useState<any>(null);
    const { config: approveTxConfig } = usePrepareSendTransaction({
        gasPrice: approveTxData?.gasPrice,
        to: approveTxData?.dexContractAddress,
        data: approveTxData?.data,
    });
    const {
        isSuccess: isApproveSuccess,
        sendTransaction: approveSendTransaction,
    } = useSendTransaction(approveTxConfig);

    async function approveTransaction() {
        const API_URL = "https://www.okx.com/api/v5/dex/aggregator";
        const response = await fetch(
            API_URL +
                "/approve-transaction?" +
                new URLSearchParams({
                    chainId: "1",
                    tokenContractAddress:
                        props.selectedToken.tokenContractAddress,
                    approveAmount: parseUnits(
                        props.amount,
                        props.selectedToken.decimals
                    ).toString(),
                }).toString()
        );
        const data = await response.json();

        if (data) {
            setApproveTxData(data.data[0]);
        }
    }

    useEffect(() => {
        if (approveTxData?.data) {
            approveSendTransaction?.();
        }
    }, [approveTxData?.data]);

    useEffect(() => {
        if (isApproveSuccess) {
            alert("Success!");
        }
    }, [isApproveSuccess]);

    async function handleSendTransaction() {
        if (!account.address) {
            alert("Connect Wallet!");
            return;
        }

        try {
            let allowance = await getAllowanceData();

            let tries = 0;
            while (allowance < Number(props.amount) && tries < 3) {
                tries++;
                await approveTransaction();
                allowance = await getAllowanceData();
            }

            swapSendTransaction?.();
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        if (isSwapSuccess) {
            alert("Success!");
        }
    }, [isSwapSuccess]);

    return <Button label="Swap" onClick={handleSendTransaction} />;
}

type TokenSelectProps = {
    availableTokens: any[];
    selectedToken: any;
    setSelectedToken: any;
    selectedTokenImage: any;
};

function TokenSelect(props: TokenSelectProps) {
    const [query, setQuery] = useState("");

    const lowercaseQuery = query.toLowerCase();
    const filteredTokens =
        query === ""
            ? props.availableTokens
            : props.availableTokens.filter((token) => {
                  return (
                      token.tokenSymbol
                          .toLowerCase()
                          .includes(lowercaseQuery) ||
                      token.tokenName.toLowerCase().includes(lowercaseQuery)
                  );
              });

    return (
        <Combobox value={props.selectedToken} onChange={props.setSelectedToken}>
            <div style={{ position: "relative" }}>
                <div className="token-search">
                    <img
                        src={props.selectedTokenImage}
                        alt=""
                        className="coin-icon"
                    />
                    <Combobox.Input
                        className="input"
                        onChange={(event) => setQuery(event.target.value)}
                    />
                    <Combobox.Button className="dropdown-button">
                        <FontAwesomeIcon
                            icon={faChevronDown}
                            className="dropdown-icon"
                        />
                    </Combobox.Button>
                </div>
                <Combobox.Options className="options" style={{ zIndex: 10 }}>
                    {filteredTokens.map((token, index) => (
                        <Combobox.Option
                            key={token.tokenSymbol + index}
                            value={token.tokenSymbol}
                            className="option"
                        >
                            <img src={token.tokenLogoUrl} alt="" />
                            <span>{token.tokenName}</span>
                            <span
                                style={{
                                    opacity: 0.8,
                                }}
                            >
                                ({token.tokenSymbol})
                            </span>
                        </Combobox.Option>
                    ))}
                </Combobox.Options>
            </div>
        </Combobox>
    );
}

const { chains, publicClient } = configureChains([mainnet], [publicProvider()]);

// const { connectors } = getDefaultWallets({
//     appName: "PaalAI",
//     projectId: "87ed53fd94d5f1a0ebc6ba332bf33daa",
//     chains,
// });

const projectId = "87ed53fd94d5f1a0ebc6ba332bf33daa";

const connectors = connectorsForWallets([
    {
        groupName: "Recommended",
        wallets: [
            injectedWallet({ chains }),
            okxWallet({ projectId, chains }),
            metaMaskWallet({ projectId, chains }),
            rainbowWallet({ projectId, chains }),
            walletConnectWallet({ projectId, chains }),
            trustWallet({ projectId, chains }),
            coinbaseWallet({ appName: "PaalAI", chains }),
        ],
    },
]);

const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
});

function Web3Providers(props: { children: React.ReactNode }) {
    return (
        <WagmiConfig config={wagmiConfig}>
            <RainbowKitProvider chains={chains}>
                {props.children}
            </RainbowKitProvider>
        </WagmiConfig>
    );
}
