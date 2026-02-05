import { ethers } from "ethers";

export const getProvider = () => new ethers.BrowserProvider(window.ethereum);
