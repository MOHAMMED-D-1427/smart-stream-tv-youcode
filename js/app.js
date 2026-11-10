import { getChannels } from "../services/api.js";
import { searchChannels } from "./search.js";
import { showChannels } from "./ui.js";

const channels = JSON.parse(localStorage.getItem("channels"));



getChannels()

showChannels(channels)

searchChannels()