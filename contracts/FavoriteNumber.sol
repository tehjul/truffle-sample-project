// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract FavoriteNumber {

  uint favoriteNumber;

  function setFavoriteNumber(uint _favoriteNumber) external {
    favoriteNumber = _favoriteNumber;
  }

  function getFavoriteNumber() external view returns (uint) {
    return favoriteNumber;
  }
  
}
