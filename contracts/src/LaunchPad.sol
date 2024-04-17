// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {LaunchPool} from "./LaunchPool.sol";

contract LaunchPad {
    function createLaunchPool(
        string memory name, 
        string memory symbol, 
        address[] memory whitelists,
        uint256[] memory amounts,
        address[] memory _assets,
        uint8[] memory _ratios
    ) external {
        LaunchPool pool = new LaunchPool(msg.sender, name, symbol, whitelists, amounts, _assets, _ratios);
    }
}