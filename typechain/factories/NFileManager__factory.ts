/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NFileManager, NFileManagerInterface } from "../NFileManager";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_contract",
        type: "address",
      },
    ],
    name: "Deployed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_contract",
        type: "address",
      },
    ],
    name: "NFileTMinted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_tokenURI",
        type: "string",
      },
    ],
    name: "deployContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getNFTContracts",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061002d61002261003260201b60201c565b61003a60201b60201c565b6100fe565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b613db28061010d6000396000f3fe60806040523480156200001157600080fd5b50600436106200005e5760003560e01c806333b0b8fb1462000063578063715018a614620000855780638da5cb5b1462000091578063e0bdf58314620000b3578063f2fde38b14620000d3575b600080fd5b6200006d620000f3565b6040516200007c91906200096f565b60405180910390f35b6200008f620001c0565b005b6200009b62000251565b604051620000aa919062000925565b60405180910390f35b620000d16004803603810190620000cb91906200072f565b6200027a565b005b620000f16004803603810190620000eb919062000703565b6200049c565b005b6060600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020018280548015620001b657602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116200016b575b5050505050905090565b620001ca620005a0565b73ffffffffffffffffffffffffffffffffffffffff16620001ea62000251565b73ffffffffffffffffffffffffffffffffffffffff161462000243576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200023a9062000a12565b60405180910390fd5b6200024f6000620005a8565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000825111620002c1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002b890620009ce565b60405180910390fd5b600081511162000308576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002ff9062000a34565b60405180910390fd5b600082826040516200031a906200066c565b6200032792919062000993565b604051809103906000f08015801562000344573d6000803e3d6000fd5b5090508073ffffffffffffffffffffffffffffffffffffffff1663f2fde38b336040518263ffffffff1660e01b815260040162000382919062000925565b600060405180830381600087803b1580156200039d57600080fd5b505af1158015620003b2573d6000803e3d6000fd5b505050506000819050600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f09e48df7857bd0c1e0d31bb8a85d42cf1874817895f171c917f6ee2cea73ec2033826040516200048e92919062000942565b60405180910390a150505050565b620004a6620005a0565b73ffffffffffffffffffffffffffffffffffffffff16620004c662000251565b73ffffffffffffffffffffffffffffffffffffffff16146200051f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620005169062000a12565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141562000592576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200058990620009f0565b60405180910390fd5b6200059d81620005a8565b50565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b61309f8062000cde83390190565b6000620006916200068b8462000a7f565b62000a56565b905082815260208101848484011115620006aa57600080fd5b620006b784828562000b3e565b509392505050565b600081359050620006d08162000cc3565b92915050565b600082601f830112620006e857600080fd5b8135620006fa8482602086016200067a565b91505092915050565b6000602082840312156200071657600080fd5b60006200072684828501620006bf565b91505092915050565b600080604083850312156200074357600080fd5b600083013567ffffffffffffffff8111156200075e57600080fd5b6200076c85828601620006d6565b925050602083013567ffffffffffffffff8111156200078a57600080fd5b6200079885828601620006d6565b9150509250929050565b6000620007b08383620007bc565b60208301905092915050565b620007c78162000b0a565b82525050565b620007d88162000b0a565b82525050565b6000620007eb8262000ac5565b620007f7818562000ae8565b9350620008048362000ab5565b8060005b838110156200083b5781516200081f8882620007a2565b97506200082c8362000adb565b92505060018101905062000808565b5085935050505092915050565b6000620008558262000ad0565b62000861818562000af9565b93506200087381856020860162000b4d565b6200087e8162000be8565b840191505092915050565b60006200089860148362000af9565b9150620008a58262000bf9565b602082019050919050565b6000620008bf60268362000af9565b9150620008cc8262000c22565b604082019050919050565b6000620008e660208362000af9565b9150620008f38262000c71565b602082019050919050565b60006200090d60198362000af9565b91506200091a8262000c9a565b602082019050919050565b60006020820190506200093c6000830184620007cd565b92915050565b6000604082019050620009596000830185620007cd565b620009686020830184620007cd565b9392505050565b600060208201905081810360008301526200098b8184620007de565b905092915050565b60006040820190508181036000830152620009af818562000848565b90508181036020830152620009c5818462000848565b90509392505050565b60006020820190508181036000830152620009e98162000889565b9050919050565b6000602082019050818103600083015262000a0b81620008b0565b9050919050565b6000602082019050818103600083015262000a2d81620008d7565b9050919050565b6000602082019050818103600083015262000a4f81620008fe565b9050919050565b600062000a6262000a75565b905062000a70828262000b83565b919050565b6000604051905090565b600067ffffffffffffffff82111562000a9d5762000a9c62000bb9565b5b62000aa88262000be8565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600062000b178262000b1e565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b82818337600083830152505050565b60005b8381101562000b6d57808201518184015260208101905062000b50565b8381111562000b7d576000848401525b50505050565b62000b8e8262000be8565b810181811067ffffffffffffffff8211171562000bb05762000baf62000bb9565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4e616d652063616e6e6f7420626520656d707479000000000000000000000000600082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f546f6b656e205552492063616e6e6f7420626520656d70747900000000000000600082015250565b62000cce8162000b0a565b811462000cda57600080fd5b5056fe60806040523480156200001157600080fd5b506040516200309f3803806200309f8339818101604052810190620000379190620002d3565b816040518060400160405280600481526020017f4e464c5400000000000000000000000000000000000000000000000000000000815250816000908051906020019062000086929190620001b1565b5080600190805190602001906200009f929190620001b1565b505050620000c2620000b6620000e360201b60201c565b620000eb60201b60201c565b8060099080519060200190620000da929190620001b1565b505050620004b6565b600033905090565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b828054620001bf90620003db565b90600052602060002090601f016020900481019282620001e357600085556200022f565b82601f10620001fe57805160ff19168380011785556200022f565b828001600101855582156200022f579182015b828111156200022e57825182559160200191906001019062000211565b5b5090506200023e919062000242565b5090565b5b808211156200025d57600081600090555060010162000243565b5090565b60006200027862000272846200036f565b62000346565b9050828152602081018484840111156200029157600080fd5b6200029e848285620003a5565b509392505050565b600082601f830112620002b857600080fd5b8151620002ca84826020860162000261565b91505092915050565b60008060408385031215620002e757600080fd5b600083015167ffffffffffffffff8111156200030257600080fd5b6200031085828601620002a6565b925050602083015167ffffffffffffffff8111156200032e57600080fd5b6200033c85828601620002a6565b9150509250929050565b60006200035262000365565b905062000360828262000411565b919050565b6000604051905090565b600067ffffffffffffffff8211156200038d576200038c62000476565b5b6200039882620004a5565b9050602081019050919050565b60005b83811015620003c5578082015181840152602081019050620003a8565b83811115620003d5576000848401525b50505050565b60006002820490506001821680620003f457607f821691505b602082108114156200040b576200040a62000447565b5b50919050565b6200041c82620004a5565b810181811067ffffffffffffffff821117156200043e576200043d62000476565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b612bd980620004c66000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c806370a08231116100a2578063a22cb46511610071578063a22cb465146102b8578063b88d4fde146102d4578063c87b56dd146102f0578063e985e9c514610320578063f2fde38b146103505761010b565b806370a0823114610242578063715018a6146102725780638da5cb5b1461027c57806395d89b411461029a5761010b565b806323b872dd116100de57806323b872dd146101aa57806342842e0e146101c65780636352211e146101e25780636a627842146102125761010b565b806301ffc9a71461011057806306fdde0314610140578063081812fc1461015e578063095ea7b31461018e575b600080fd5b61012a60048036038101906101259190611d2d565b61036c565b6040516101379190612147565b60405180910390f35b61014861044e565b6040516101559190612162565b60405180910390f35b61017860048036038101906101739190611d7f565b6104e0565b60405161018591906120a9565b60405180910390f35b6101a860048036038101906101a39190611cf1565b610565565b005b6101c460048036038101906101bf9190611beb565b61067d565b005b6101e060048036038101906101db9190611beb565b6106dd565b005b6101fc60048036038101906101f79190611d7f565b6106fd565b60405161020991906120a9565b60405180910390f35b61022c60048036038101906102279190611b86565b6107af565b60405161023991906123a4565b60405180910390f35b61025c60048036038101906102579190611b86565b610928565b60405161026991906123a4565b60405180910390f35b61027a6109e0565b005b610284610a68565b60405161029191906120a9565b60405180910390f35b6102a2610a92565b6040516102af9190612162565b60405180910390f35b6102d260048036038101906102cd9190611cb5565b610b24565b005b6102ee60048036038101906102e99190611c3a565b610b3a565b005b61030a60048036038101906103059190611d7f565b610b9c565b6040516103179190612162565b60405180910390f35b61033a60048036038101906103359190611baf565b610ce5565b6040516103479190612147565b60405180910390f35b61036a60048036038101906103659190611b86565b610d79565b005b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061043757507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610447575061044682610e71565b5b9050919050565b60606000805461045d9061259f565b80601f01602080910402602001604051908101604052809291908181526020018280546104899061259f565b80156104d65780601f106104ab576101008083540402835291602001916104d6565b820191906000526020600020905b8154815290600101906020018083116104b957829003601f168201915b5050505050905090565b60006104eb82610edb565b61052a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052190612304565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610570826106fd565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156105e1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d890612344565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610600610f47565b73ffffffffffffffffffffffffffffffffffffffff16148061062f575061062e81610629610f47565b610ce5565b5b61066e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161066590612264565b60405180910390fd5b6106788383610f4f565b505050565b61068e610688610f47565b82611008565b6106cd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106c490612384565b60405180910390fd5b6106d88383836110e6565b505050565b6106f883838360405180602001604052806000815250610b3a565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156107a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161079d906122a4565b60405180910390fd5b80915050919050565b60006107b9610f47565b73ffffffffffffffffffffffffffffffffffffffff166107d7610a68565b73ffffffffffffffffffffffffffffffffffffffff161461082d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082490612324565b60405180910390fd5b6000610839600861134d565b9050610845838261135b565b6108d981600980546108569061259f565b80601f01602080910402602001604051908101604052809291908181526020018280546108829061259f565b80156108cf5780601f106108a4576101008083540402835291602001916108cf565b820191906000526020600020905b8154815290600101906020018083116108b257829003601f168201915b5050505050611535565b6108e360086115a9565b7f25b428dfde728ccfaddad7e29e4ac23c24ed7fd1a6e3e3f91894a9a073f5dfff8382600160405161091793929190612110565b60405180910390a180915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610999576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161099090612284565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6109e8610f47565b73ffffffffffffffffffffffffffffffffffffffff16610a06610a68565b73ffffffffffffffffffffffffffffffffffffffff1614610a5c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a5390612324565b60405180910390fd5b610a6660006115bf565b565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060018054610aa19061259f565b80601f0160208091040260200160405190810160405280929190818152602001828054610acd9061259f565b8015610b1a5780601f10610aef57610100808354040283529160200191610b1a565b820191906000526020600020905b815481529060010190602001808311610afd57829003601f168201915b5050505050905090565b610b36610b2f610f47565b8383611685565b5050565b610b4b610b45610f47565b83611008565b610b8a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b8190612384565b60405180910390fd5b610b96848484846117f2565b50505050565b6060813373ffffffffffffffffffffffffffffffffffffffff16610bbf826106fd565b73ffffffffffffffffffffffffffffffffffffffff161480610c1357503373ffffffffffffffffffffffffffffffffffffffff16610bfb610a68565b73ffffffffffffffffffffffffffffffffffffffff16145b610c52576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c4990612364565b60405180910390fd5b60098054610c5f9061259f565b80601f0160208091040260200160405190810160405280929190818152602001828054610c8b9061259f565b8015610cd85780601f10610cad57610100808354040283529160200191610cd8565b820191906000526020600020905b815481529060010190602001808311610cbb57829003601f168201915b5050505050915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610d81610f47565b73ffffffffffffffffffffffffffffffffffffffff16610d9f610a68565b73ffffffffffffffffffffffffffffffffffffffff1614610df5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dec90612324565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610e65576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e5c906121a4565b60405180910390fd5b610e6e816115bf565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610fc2836106fd565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600061101382610edb565b611052576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161104990612244565b60405180910390fd5b600061105d836106fd565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061109f575061109e8185610ce5565b5b806110dd57508373ffffffffffffffffffffffffffffffffffffffff166110c5846104e0565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16611106826106fd565b73ffffffffffffffffffffffffffffffffffffffff161461115c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611153906121c4565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156111cc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111c390612204565b60405180910390fd5b6111d783838361184e565b6111e2600082610f4f565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461123291906124a3565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611289919061244d565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611348838383611853565b505050565b600081600001549050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156113cb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113c2906122e4565b60405180910390fd5b6113d481610edb565b15611414576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161140b906121e4565b60405180910390fd5b6114206000838361184e565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611470919061244d565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a461153160008383611853565b5050565b61153e82610edb565b61157d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611574906122c4565b60405180910390fd5b806006600084815260200190815260200160002090805190602001906115a4929190611a12565b505050565b6001816000016000828254019250508190555050565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156116f4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116eb90612224565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516117e59190612147565b60405180910390a3505050565b6117fd8484846110e6565b61180984848484611858565b611848576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161183f90612184565b60405180910390fd5b50505050565b505050565b505050565b60006118798473ffffffffffffffffffffffffffffffffffffffff166119ef565b156119e2578373ffffffffffffffffffffffffffffffffffffffff1663150b7a026118a2610f47565b8786866040518563ffffffff1660e01b81526004016118c494939291906120c4565b602060405180830381600087803b1580156118de57600080fd5b505af192505050801561190f57506040513d601f19601f8201168201806040525081019061190c9190611d56565b60015b611992573d806000811461193f576040519150601f19603f3d011682016040523d82523d6000602084013e611944565b606091505b5060008151141561198a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161198190612184565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150506119e7565b600190505b949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b828054611a1e9061259f565b90600052602060002090601f016020900481019282611a405760008555611a87565b82601f10611a5957805160ff1916838001178555611a87565b82800160010185558215611a87579182015b82811115611a86578251825591602001919060010190611a6b565b5b509050611a949190611a98565b5090565b5b80821115611ab1576000816000905550600101611a99565b5090565b6000611ac8611ac3846123e4565b6123bf565b905082815260208101848484011115611ae057600080fd5b611aeb84828561255d565b509392505050565b600081359050611b0281612b47565b92915050565b600081359050611b1781612b5e565b92915050565b600081359050611b2c81612b75565b92915050565b600081519050611b4181612b75565b92915050565b600082601f830112611b5857600080fd5b8135611b68848260208601611ab5565b91505092915050565b600081359050611b8081612b8c565b92915050565b600060208284031215611b9857600080fd5b6000611ba684828501611af3565b91505092915050565b60008060408385031215611bc257600080fd5b6000611bd085828601611af3565b9250506020611be185828601611af3565b9150509250929050565b600080600060608486031215611c0057600080fd5b6000611c0e86828701611af3565b9350506020611c1f86828701611af3565b9250506040611c3086828701611b71565b9150509250925092565b60008060008060808587031215611c5057600080fd5b6000611c5e87828801611af3565b9450506020611c6f87828801611af3565b9350506040611c8087828801611b71565b925050606085013567ffffffffffffffff811115611c9d57600080fd5b611ca987828801611b47565b91505092959194509250565b60008060408385031215611cc857600080fd5b6000611cd685828601611af3565b9250506020611ce785828601611b08565b9150509250929050565b60008060408385031215611d0457600080fd5b6000611d1285828601611af3565b9250506020611d2385828601611b71565b9150509250929050565b600060208284031215611d3f57600080fd5b6000611d4d84828501611b1d565b91505092915050565b600060208284031215611d6857600080fd5b6000611d7684828501611b32565b91505092915050565b600060208284031215611d9157600080fd5b6000611d9f84828501611b71565b91505092915050565b611db1816124d7565b82525050565b611dc0816124e9565b82525050565b6000611dd182612415565b611ddb818561242b565b9350611deb81856020860161256c565b611df48161268f565b840191505092915050565b611e088161254b565b82525050565b6000611e1982612420565b611e23818561243c565b9350611e3381856020860161256c565b611e3c8161268f565b840191505092915050565b6000611e5460328361243c565b9150611e5f826126a0565b604082019050919050565b6000611e7760268361243c565b9150611e82826126ef565b604082019050919050565b6000611e9a60258361243c565b9150611ea58261273e565b604082019050919050565b6000611ebd601c8361243c565b9150611ec88261278d565b602082019050919050565b6000611ee060248361243c565b9150611eeb826127b6565b604082019050919050565b6000611f0360198361243c565b9150611f0e82612805565b602082019050919050565b6000611f26602c8361243c565b9150611f318261282e565b604082019050919050565b6000611f4960388361243c565b9150611f548261287d565b604082019050919050565b6000611f6c602a8361243c565b9150611f77826128cc565b604082019050919050565b6000611f8f60298361243c565b9150611f9a8261291b565b604082019050919050565b6000611fb2602e8361243c565b9150611fbd8261296a565b604082019050919050565b6000611fd560208361243c565b9150611fe0826129b9565b602082019050919050565b6000611ff8602c8361243c565b9150612003826129e2565b604082019050919050565b600061201b60208361243c565b915061202682612a31565b602082019050919050565b600061203e60218361243c565b915061204982612a5a565b604082019050919050565b600061206160358361243c565b915061206c82612aa9565b604082019050919050565b600061208460318361243c565b915061208f82612af8565b604082019050919050565b6120a381612541565b82525050565b60006020820190506120be6000830184611da8565b92915050565b60006080820190506120d96000830187611da8565b6120e66020830186611da8565b6120f3604083018561209a565b81810360608301526121058184611dc6565b905095945050505050565b60006060820190506121256000830186611da8565b612132602083018561209a565b61213f6040830184611dff565b949350505050565b600060208201905061215c6000830184611db7565b92915050565b6000602082019050818103600083015261217c8184611e0e565b905092915050565b6000602082019050818103600083015261219d81611e47565b9050919050565b600060208201905081810360008301526121bd81611e6a565b9050919050565b600060208201905081810360008301526121dd81611e8d565b9050919050565b600060208201905081810360008301526121fd81611eb0565b9050919050565b6000602082019050818103600083015261221d81611ed3565b9050919050565b6000602082019050818103600083015261223d81611ef6565b9050919050565b6000602082019050818103600083015261225d81611f19565b9050919050565b6000602082019050818103600083015261227d81611f3c565b9050919050565b6000602082019050818103600083015261229d81611f5f565b9050919050565b600060208201905081810360008301526122bd81611f82565b9050919050565b600060208201905081810360008301526122dd81611fa5565b9050919050565b600060208201905081810360008301526122fd81611fc8565b9050919050565b6000602082019050818103600083015261231d81611feb565b9050919050565b6000602082019050818103600083015261233d8161200e565b9050919050565b6000602082019050818103600083015261235d81612031565b9050919050565b6000602082019050818103600083015261237d81612054565b9050919050565b6000602082019050818103600083015261239d81612077565b9050919050565b60006020820190506123b9600083018461209a565b92915050565b60006123c96123da565b90506123d582826125d1565b919050565b6000604051905090565b600067ffffffffffffffff8211156123ff576123fe612660565b5b6124088261268f565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600061245882612541565b915061246383612541565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561249857612497612602565b5b828201905092915050565b60006124ae82612541565b91506124b983612541565b9250828210156124cc576124cb612602565b5b828203905092915050565b60006124e282612521565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600061255682612541565b9050919050565b82818337600083830152505050565b60005b8381101561258a57808201518184015260208101905061256f565b83811115612599576000848401525b50505050565b600060028204905060018216806125b757607f821691505b602082108114156125cb576125ca612631565b5b50919050565b6125da8261268f565b810181811067ffffffffffffffff821117156125f9576125f8612660565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f53656e646572206973206e6f7420746865206f776e6572206f6620746869732060008201527f746f6b656e206f722074686520636f6e74726163740000000000000000000000602082015250565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b612b50816124d7565b8114612b5b57600080fd5b50565b612b67816124e9565b8114612b7257600080fd5b50565b612b7e816124f5565b8114612b8957600080fd5b50565b612b9581612541565b8114612ba057600080fd5b5056fea2646970667358221220c824d19ce376eb5c038b434f0acfcc3247a89d4e8f0cc3309a13e7b65262ab1a64736f6c63430008040033a26469706673582212205ba3017b95c574ea6d862925fdff2410a48f3283c104436cc98a572bddf55b7f64736f6c63430008040033";

export class NFileManager__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NFileManager> {
    return super.deploy(overrides || {}) as Promise<NFileManager>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): NFileManager {
    return super.attach(address) as NFileManager;
  }
  connect(signer: Signer): NFileManager__factory {
    return super.connect(signer) as NFileManager__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NFileManagerInterface {
    return new utils.Interface(_abi) as NFileManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NFileManager {
    return new Contract(address, _abi, signerOrProvider) as NFileManager;
  }
}
