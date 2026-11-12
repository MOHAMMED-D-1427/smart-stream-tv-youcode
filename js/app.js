import { getChannels } from "../services/api.js";
import { filterChannels } from "./filter.js";
import { searchChannels } from "./search.js";
import { showChannelInfo, showChannels } from "./ui.js";

const channels = JSON.parse(localStorage.getItem("channels"));



getChannels();

showChannels(channels);

searchChannels();

filterChannels();

showChannelInfo(channels);