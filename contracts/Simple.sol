//SPDX-License-Identifier: Unlicense
pragma solidity ^0.7.0;

contract Simple {
  function test() public view returns(bytes32) {
    return blockhash(block.number-1);
  }
}
