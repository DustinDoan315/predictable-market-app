/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  Polymarket,
  PolymarketInterface,
} from "../../contracts/Polymarket";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_polyToken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientAllowance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientBalance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC20InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC20InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSpender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "market",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "createdBy",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "creatorImageHash",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalYesAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalNoAmount",
        type: "uint256",
      },
    ],
    name: "MarketCreated",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_marketId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "addNoBet",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_marketId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "addYesBet",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_market",
        type: "string",
      },
      {
        internalType: "string",
        name: "_creatorImageHash",
        type: "string",
      },
      {
        internalType: "string",
        name: "_description",
        type: "string",
      },
      {
        internalType: "string",
        name: "_resolverUrl",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_endTimestamp",
        type: "uint256",
      },
    ],
    name: "createMarket",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_marketId",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "eventOutcome",
        type: "bool",
      },
    ],
    name: "distributeWinningAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_marketId",
        type: "uint256",
      },
    ],
    name: "getGraphData",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "user",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
        ],
        internalType: "struct Polymarket.AmountAdded[]",
        name: "",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "address",
            name: "user",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
        ],
        internalType: "struct Polymarket.AmountAdded[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "markets",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "market",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endTimestamp",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "createdBy",
        type: "address",
      },
      {
        internalType: "string",
        name: "creatorImageHash",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "totalAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalYesAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalNoAmount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "eventCompleted",
        type: "bool",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "string",
        name: "resolverUrl",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
    name: "polyToken",
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
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalMarkets",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "winningAddresses",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "winningAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052600060075534801561001557600080fd5b5060405161204738038061204783398101604081905261003491610143565b336040518060400160405280600b81526020016a253ab634b0902a37b5b2b760a91b8152506040518060400160405280600381526020016212931560ea1b81525081600390816100849190610212565b5060046100918282610212565b5050506001600160a01b0381166100c257604051631e4fbdf760e01b81526000600482015260240160405180910390fd5b6100cb816100f1565b50600680546001600160a01b0319166001600160a01b03929092169190911790556102d0565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60006020828403121561015557600080fd5b81516001600160a01b038116811461016c57600080fd5b9392505050565b634e487b7160e01b600052604160045260246000fd5b600181811c9082168061019d57607f821691505b6020821081036101bd57634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561020d57806000526020600020601f840160051c810160208510156101ea5750805b601f840160051c820191505b8181101561020a57600081556001016101f6565b50505b505050565b81516001600160401b0381111561022b5761022b610173565b61023f816102398454610189565b846101c3565b6020601f821160018114610273576000831561025b5750848201515b600019600385901b1c1916600184901b17845561020a565b600084815260208120601f198516915b828110156102a35787850151825560209485019460019092019101610283565b50848210156102c15786840151600019600387901b60f8161c191681555b50505050600190811b01905550565b611d68806102df6000396000f3fe6080604052600436106101355760003560e01c80638162486b116100ab578063b78d6c1d1161006f578063b78d6c1d14610384578063bf01fe00146103a4578063da6b4db8146103b7578063dd62ed3e146103e4578063eb3f75e21461042a578063f2fde38b1461043d57600080fd5b80638162486b146102e35780638da5cb5b146102f957806395d89b4114610317578063a9059cbb1461032c578063b1283e771461034c57600080fd5b8063313ce567116100fd578063313ce567146102025780633f4a5d0a1461021e5780636faa22a51461024057806370a0823114610278578063715018a6146102ae578063724ba40b146102c357600080fd5b806306fdde031461013a578063095ea7b31461016557806314dd57621461019557806318160ddd146101c357806323b872dd146101e2575b600080fd5b34801561014657600080fd5b5061014f61045d565b60405161015c91906116ba565b60405180910390f35b34801561017157600080fd5b506101856101803660046116f0565b6104ef565b604051901515815260200161015c565b3480156101a157600080fd5b506101b56101b036600461171a565b610509565b60405161015c929190611791565b3480156101cf57600080fd5b506002545b60405190815260200161015c565b3480156101ee57600080fd5b506101856101fd3660046117bf565b61062d565b34801561020e57600080fd5b506040516012815260200161015c565b34801561022a57600080fd5b5061023e6102393660046118a1565b610651565b005b34801561024c57600080fd5b50600654610260906001600160a01b031681565b6040516001600160a01b03909116815260200161015c565b34801561028457600080fd5b506101d4610293366004611969565b6001600160a01b031660009081526020819052604090205490565b3480156102ba57600080fd5b5061023e610745565b3480156102cf57600080fd5b5061023e6102de366004611992565b610759565b3480156102ef57600080fd5b506101d460075481565b34801561030557600080fd5b506005546001600160a01b0316610260565b34801561032357600080fd5b5061014f610b56565b34801561033857600080fd5b506101856103473660046116f0565b610b65565b34801561035857600080fd5b5061036c61036736600461171a565b610b73565b60405161015c9c9b9a999897969594939291906119c2565b34801561039057600080fd5b5061026061039f36600461171a565b610e03565b61023e6103b2366004611a6b565b610e2d565b3480156103c357600080fd5b506101d46103d2366004611969565b60096020526000908152604090205481565b3480156103f057600080fd5b506101d46103ff366004611a8d565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b61023e610438366004611a6b565b611035565b34801561044957600080fd5b5061023e610458366004611969565b611238565b60606003805461046c90611ac0565b80601f016020809104026020016040519081016040528092919081815260200182805461049890611ac0565b80156104e55780601f106104ba576101008083540402835291602001916104e5565b820191906000526020600020905b8154815290600101906020018083116104c857829003601f168201915b5050505050905090565b6000336104fd818585611276565b60019150505b92915050565b6060806000600860008581526020019081526020016000209050806006018160070181805480602002602001604051908101604052809291908181526020016000905b828210156105a1576000848152602090819020604080516060810182526003860290920180546001600160a01b031683526001808201548486015260029091015491830191909152908352909201910161054c565b50505050915080805480602002602001604051908101604052809291908181526020016000905b8282101561061d576000848152602090819020604080516060810182526003860290920180546001600160a01b03168352600180820154848601526002909101549183019190915290835290920191016105c8565b5050505090509250925050915091565b60003361063b858285611288565b610646858585611306565b506001949350505050565b610659611365565b600780546000818152600860205260408120828155429390929161067c83611b10565b90915550506001810161068f8882611b77565b50600281018290556004810180546001600160a01b03191633179055600581016106b98782611b77565b5060006008820181905560098201819055600a820155600c81016106dd8682611b77565b50600d81016106ec8582611b77565b50600381018390556007546040517fe51b4ce9e60c0c010fcdef22c23537f954e056004aed674362555a9d11d0373891610734918a90869033908c9060009081908190611c36565b60405180910390a150505050505050565b61074d611365565b6107576000611392565b565b610761611365565b600082815260086020526040902081156108fa5760005b60068201548110156108f457600082600901548360060183815481106107a0576107a0611c9a565b90600052602060002090600302016001015484600a01546107c19190611cb0565b6107cb9190611cc7565b90508260060182815481106107e2576107e2611c9a565b906000526020600020906003020160010154816107ff9190611ce9565b6009600085600601858154811061081857610818611c9a565b600091825260208083206003909202909101546001600160a01b0316835282019290925260400181208054909190610851908490611ce9565b9250508190555061088f83600601838154811061087057610870611c9a565b60009182526020909120600390910201546001600160a01b03166113e4565b6108eb57600a8360060183815481106108aa576108aa611c9a565b600091825260208083206003909202909101548354600181018555938352912090910180546001600160a01b0319166001600160a01b039092169190911790555b50600101610778565b50610a5c565b60005b6007820154811015610a5a57600082600a015483600701838154811061092557610925611c9a565b90600052602060002090600302016001015484600901546109469190611cb0565b6109509190611cc7565b905082600701828154811061096757610967611c9a565b906000526020600020906003020160010154816109849190611ce9565b6009600085600701858154811061099d5761099d611c9a565b600091825260208083206003909202909101546001600160a01b03168352820192909252604001812080549091906109d6908490611ce9565b925050819055506109f583600701838154811061087057610870611c9a565b610a5157600a836007018381548110610a1057610a10611c9a565b600091825260208083206003909202909101548354600181018555938352912090910180546001600160a01b0319166001600160a01b039092169190911790555b506001016108fd565b505b60005b600a54811015610b37576000600a8281548110610a7e57610a7e611c9a565b6000918252602080832091909101546006546001600160a01b03918216808552600990935260409384902054935163a9059cbb60e01b8152600481018490526024810194909452919350169063a9059cbb906044016020604051808303816000875af1158015610af2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b169190611cfc565b506001600160a01b0316600090815260096020526040812055600101610a5f565b50610b44600a6000611642565b600b01805460ff191660011790555050565b60606004805461046c90611ac0565b6000336104fd818585611306565b60086020526000908152604090208054600182018054919291610b9590611ac0565b80601f0160208091040260200160405190810160405280929190818152602001828054610bc190611ac0565b8015610c0e5780601f10610be357610100808354040283529160200191610c0e565b820191906000526020600020905b815481529060010190602001808311610bf157829003601f168201915b505050600284015460038501546004860154600587018054969793969295506001600160a01b03909116935090610c4490611ac0565b80601f0160208091040260200160405190810160405280929190818152602001828054610c7090611ac0565b8015610cbd5780601f10610c9257610100808354040283529160200191610cbd565b820191906000526020600020905b815481529060010190602001808311610ca057829003601f168201915b50505060088401546009850154600a860154600b870154600c880180549798949793965091945060ff169291610cf290611ac0565b80601f0160208091040260200160405190810160405280929190818152602001828054610d1e90611ac0565b8015610d6b5780601f10610d4057610100808354040283529160200191610d6b565b820191906000526020600020905b815481529060010190602001808311610d4e57829003601f168201915b50505050509080600d018054610d8090611ac0565b80601f0160208091040260200160405190810160405280929190818152602001828054610dac90611ac0565b8015610df95780601f10610dce57610100808354040283529160200191610df9565b820191906000526020600020905b815481529060010190602001808311610ddc57829003601f168201915b505050505090508c565b600a8181548110610e1357600080fd5b6000918252602090912001546001600160a01b0316905081565b600654604051636eb1769f60e11b815233600482015230602482015282916001600160a01b03169063dd62ed3e90604401602060405180830381865afa158015610e7b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e9f9190611d19565b811115610ef35760405162461bcd60e51b815260206004820152601e60248201527f4e6f7420616c6c6f77656420746f207370656e642074686973206d756368000060448201526064015b60405180910390fd5b6000838152600860205260409081902060065491516323b872dd60e01b81523360048201523060248201526044810185905290916001600160a01b0316906323b872dd906064016020604051808303816000875af1158015610f59573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f7d9190611cfc565b5060006040518060600160405280336001600160a01b031681526020018581526020014281525090508382600a016000828254610fba9190611ce9565b9250508190555083826008016000828254610fd59190611ce9565b90915550506007919091018054600180820183556000928352602092839020845160039093020180546001600160a01b0319166001600160a01b039093169290921782559183015191810191909155604090910151600290910155505050565b600654604051636eb1769f60e11b815233600482015230602482015282916001600160a01b03169063dd62ed3e90604401602060405180830381865afa158015611083573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110a79190611d19565b8111156110f65760405162461bcd60e51b815260206004820152601e60248201527f4e6f7420616c6c6f77656420746f207370656e642074686973206d75636800006044820152606401610eea565b6000838152600860205260409081902060065491516323b872dd60e01b81523360048201523060248201526044810185905290916001600160a01b0316906323b872dd906064016020604051808303816000875af115801561115c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111809190611cfc565b5060006040518060600160405280336001600160a01b03168152602001858152602001428152509050838260090160008282546111bd9190611ce9565b92505081905550838260080160008282546111d89190611ce9565b90915550506006919091018054600180820183556000928352602092839020845160039093020180546001600160a01b0319166001600160a01b039093169290921782559183015191810191909155604090910151600290910155505050565b611240611365565b6001600160a01b03811661126a57604051631e4fbdf760e01b815260006004820152602401610eea565b61127381611392565b50565b6112838383836001611443565b505050565b6001600160a01b03838116600090815260016020908152604080832093861683529290522054600019811461130057818110156112f157604051637dc7a0d960e11b81526001600160a01b03841660048201526024810182905260448101839052606401610eea565b61130084848484036000611443565b50505050565b6001600160a01b03831661133057604051634b637e8f60e11b815260006004820152602401610eea565b6001600160a01b03821661135a5760405163ec442f0560e01b815260006004820152602401610eea565b611283838383611518565b6005546001600160a01b031633146107575760405163118cdaa760e01b8152336004820152602401610eea565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6000805b600a5481101561143a57826001600160a01b0316600a828154811061140f5761140f611c9a565b6000918252602090912001546001600160a01b0316036114325750600192915050565b6001016113e8565b50600092915050565b6001600160a01b03841661146d5760405163e602df0560e01b815260006004820152602401610eea565b6001600160a01b03831661149757604051634a1406b160e11b815260006004820152602401610eea565b6001600160a01b038085166000908152600160209081526040808320938716835292905220829055801561130057826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161150a91815260200190565b60405180910390a350505050565b6001600160a01b0383166115435780600260008282546115389190611ce9565b909155506115b59050565b6001600160a01b038316600090815260208190526040902054818110156115965760405163391434e360e21b81526001600160a01b03851660048201526024810182905260448101839052606401610eea565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b0382166115d1576002805482900390556115f0565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161163591815260200190565b60405180910390a3505050565b508054600082559060005260206000209081019061127391905b80821115611670576000815560010161165c565b5090565b6000815180845260005b8181101561169a5760208185018101518683018201520161167e565b506000602082860101526020601f19601f83011685010191505092915050565b6020815260006116cd6020830184611674565b9392505050565b80356001600160a01b03811681146116eb57600080fd5b919050565b6000806040838503121561170357600080fd5b61170c836116d4565b946020939093013593505050565b60006020828403121561172c57600080fd5b5035919050565b600081518084526020840193506020830160005b8281101561178757815180516001600160a01b03168752602080820151818901526040918201519188019190915260609096019590910190600101611747565b5093949350505050565b6040815260006117a46040830185611733565b82810360208401526117b68185611733565b95945050505050565b6000806000606084860312156117d457600080fd5b6117dd846116d4565b92506117eb602085016116d4565b929592945050506040919091013590565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261182357600080fd5b813567ffffffffffffffff81111561183d5761183d6117fc565b604051601f8201601f19908116603f0116810167ffffffffffffffff8111828210171561186c5761186c6117fc565b60405281815283820160200185101561188457600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080600060a086880312156118b957600080fd5b853567ffffffffffffffff8111156118d057600080fd5b6118dc88828901611812565b955050602086013567ffffffffffffffff8111156118f957600080fd5b61190588828901611812565b945050604086013567ffffffffffffffff81111561192257600080fd5b61192e88828901611812565b935050606086013567ffffffffffffffff81111561194b57600080fd5b61195788828901611812565b95989497509295608001359392505050565b60006020828403121561197b57600080fd5b6116cd826116d4565b801515811461127357600080fd5b600080604083850312156119a557600080fd5b8235915060208301356119b781611984565b809150509250929050565b8c8152610180602082015260006119dd61018083018e611674565b604083018d9052606083018c90526001600160a01b038b16608084015282810360a0840152611a0c818b611674565b90508860c08401528760e084015286610100840152611a3061012084018715159052565b828103610140840152611a438186611674565b9050828103610160840152611a588185611674565b9f9e505050505050505050505050505050565b60008060408385031215611a7e57600080fd5b50508035926020909101359150565b60008060408385031215611aa057600080fd5b611aa9836116d4565b9150611ab7602084016116d4565b90509250929050565b600181811c90821680611ad457607f821691505b602082108103611af457634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b600060018201611b2257611b22611afa565b5060010190565b601f82111561128357806000526020600020601f840160051c81016020851015611b505750805b601f840160051c820191505b81811015611b705760008155600101611b5c565b5050505050565b815167ffffffffffffffff811115611b9157611b916117fc565b611ba581611b9f8454611ac0565b84611b29565b6020601f821160018114611bd95760008315611bc15750848201515b600019600385901b1c1916600184901b178455611b70565b600084815260208120601f198516915b82811015611c095787850151825560209485019460019092019101611be9565b5084821015611c275786840151600019600387901b60f8161c191681555b50505050600190811b01905550565b88815261010060208201526000611c5161010083018a611674565b604083018990526001600160a01b03881660608401528281036080840152611c798188611674565b60a0840196909652505060c081019290925260e09091015295945050505050565b634e487b7160e01b600052603260045260246000fd5b808202811582820484141761050357610503611afa565b600082611ce457634e487b7160e01b600052601260045260246000fd5b500490565b8082018082111561050357610503611afa565b600060208284031215611d0e57600080fd5b81516116cd81611984565b600060208284031215611d2b57600080fd5b505191905056fea26469706673582212203e6266b15fc9730db731345e02e0a99b09aa796b4497558960a948a8185298c064736f6c634300081b0033";

type PolymarketConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PolymarketConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Polymarket__factory extends ContractFactory {
  constructor(...args: PolymarketConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _polyToken: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_polyToken, overrides || {});
  }
  override deploy(
    _polyToken: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_polyToken, overrides || {}) as Promise<
      Polymarket & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Polymarket__factory {
    return super.connect(runner) as Polymarket__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PolymarketInterface {
    return new Interface(_abi) as PolymarketInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Polymarket {
    return new Contract(address, _abi, runner) as unknown as Polymarket;
  }
}
