import React, { useState, useEffect } from "react";
import contractImg from "../../img/contract.jpg";
import "./pageContract.css";

import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Grid, GridItem, SimpleGrid, Button  } from '@chakra-ui/react'

function SectionCreate() {
  const [code, setCode] = useState("xxx");

  const [name, setName] = useState("TestToken");
  const [abbreviation, setAbbreviation] = useState("TTKN");
  const [supply, setSupply] = useState(1000);
  const [price, setPrice] = useState("xxx");
  const [royalties, setRoyalties] = useState("xxx");
  const [tokenuri, setTokenuri] = useState("xxx");
  const [contracturi, setContracturi] = useState("xxx");

  // Change code
  useEffect(() => {
    const newCode = `
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract ${name} is ERC721, ReentrancyGuard, Ownable {
  using Counters for Counters.Counter;

  constructor(string memory customBaseURI_) ERC721("${name}", "${abbreviation}") {
    customBaseURI = customBaseURI_;
  }

  /** MINTING **/

  uint256 public constant MAX_SUPPLY = ${supply};

  Counters.Counter private supplyCounter;

      `;
    setCode(newCode);
  }, [name, abbreviation, supply, price, royalties, tokenuri, contracturi]);


  // Функция для компиляции кода
  // https://github.com/ethereum/solc-js
  const compileSMC = async () => {
   
  }

  return (
    <div className="section-top" style={{color:"white"}}>
      <SimpleGrid  columns={2}>
        <div style={{display:"flex", flexDirection:"column", flex: "1 1 0%"}}>
          <div className="test-token">
            <div className="test-token__content">
              <div className="test-token__start">
                <div className="test-token__img">
                  <img src={contractImg} width="300px" height="300px" alt="" />
                </div>
              </div>
              <div className="test-token__end">
                <div className="text-token-end__title">
                  <div className="Name create-contract-box">
                    <p className="title">Name</p>
                    <input
                      className="Name-active"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="Abbreviation create-contract-box">
                    <p className="title">Abbreviation</p>
                    <input
                      className="Abbreviation-active"
                      type="text"
                      value={abbreviation}
                      onChange={(e) => setAbbreviation(e.target.value)}
                    />
                  </div>
                  <div className="Supply create-contract-box">
                    <p className="title">Supply</p>
                    <input className="change-supplpy" type="checkbox" />
                    <input
                      className="Supply-active"
                      type="text"
                      value={supply}
                      onChange={(e) => setSupply(e.target.value)}
                    />
                  </div>
                  <div className="Price create-contract-box">
                    <p className="title">Price</p>
                    <input className="change-supplpy" type="checkbox" />
                    <input
                      className="Price-active"
                      type="text"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>
                  <div className="Royalties create-contract-box">
                    <p className="title">Royalties</p>
                    <input
                      className="Royalties-active"
                      type="text"
                      value={royalties}
                      onChange={(e) => setRoyalties(e.target.value)}
                    />
                  </div>
                  <div className="token-url create-contract-box">
                    <p className="title">Token URI</p>
                    <textarea
                      className="token-url__active"
                      type="text"
                      value={tokenuri}
                      onChange={(e) => setTokenuri(e.target.value)}
                    />
                  </div>
                  <div className="contact-url create-contract-box">
                    <p className="title">Contract URI</p>
                    <input
                      className="contact-token__active"
                      type="text"
                      value={contracturi}
                      onChange={(e) => setContracturi(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p></p>
        </div>

        <div style={{display:"block", maxWidth:"50vw"}}>
          <SyntaxHighlighter language="solidity" style={darcula} >
            {code}
          </SyntaxHighlighter>
          <Button onClick={compileSMC}>Compile</Button>
        </div>
      </SimpleGrid >
    </div>
  );
}

export default SectionCreate;
