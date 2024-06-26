export const guardianProverABI = [
	{
		type: 'function',
		name: 'acceptOwnership',
		inputs: [],
		outputs: [],
		stateMutability: 'nonpayable'
	},
	{
		type: 'function',
		name: 'addressManager',
		inputs: [],
		outputs: [
			{
				name: '',
				type: 'address',
				internalType: 'address'
			}
		],
		stateMutability: 'view'
	},
	{
		type: 'function',
		name: 'approve',
		inputs: [
			{
				name: '_meta',
				type: 'tuple',
				internalType: 'struct TaikoData.BlockMetadata',
				components: [
					{
						name: 'l1Hash',
						type: 'bytes32',
						internalType: 'bytes32'
					},
					{
						name: 'difficulty',
						type: 'bytes32',
						internalType: 'bytes32'
					},
					{
						name: 'blobHash',
						type: 'bytes32',
						internalType: 'bytes32'
					},
					{
						name: 'extraData',
						type: 'bytes32',
						internalType: 'bytes32'
					},
					{
						name: 'depositsHash',
						type: 'bytes32',
						internalType: 'bytes32'
					},
					{
						name: 'coinbase',
						type: 'address',
						internalType: 'address'
					},
					{
						name: 'id',
						type: 'uint64',
						internalType: 'uint64'
					},
					{
						name: 'gasLimit',
						type: 'uint32',
						internalType: 'uint32'
					},
					{
						name: 'timestamp',
						type: 'uint64',
						internalType: 'uint64'
					},
					{
						name: 'l1Height',
						type: 'uint64',
						internalType: 'uint64'
					},
					{
						name: 'minTier',
						type: 'uint16',
						internalType: 'uint16'
					},
					{
						name: 'blobUsed',
						type: 'bool',
						internalType: 'bool'
					},
					{
						name: 'parentMetaHash',
						type: 'bytes32',
						internalType: 'bytes32'
					},
					{
						name: 'sender',
						type: 'address',
						internalType: 'address'
					}
				]
			},
			{
				name: '_tran',
				type: 'tuple',
				internalType: 'struct TaikoData.Transition',
				components: [
					{
						name: 'parentHash',
						type: 'bytes32',
						internalType: 'bytes32'
					},
					{
						name: 'blockHash',
						type: 'bytes32',
						internalType: 'bytes32'
					},
					{
						name: 'stateRoot',
						type: 'bytes32',
						internalType: 'bytes32'
					},
					{
						name: 'graffiti',
						type: 'bytes32',
						internalType: 'bytes32'
					}
				]
			},
			{
				name: '_proof',
				type: 'tuple',
				internalType: 'struct TaikoData.TierProof',
				components: [
					{
						name: 'tier',
						type: 'uint16',
						internalType: 'uint16'
					},
					{
						name: 'data',
						type: 'bytes',
						internalType: 'bytes'
					}
				]
			}
		],
		outputs: [
			{
				name: 'approved_',
				type: 'bool',
				internalType: 'bool'
			}
		],
		stateMutability: 'nonpayable'
	},
	{
		type: 'function',
		name: 'guardianIds',
		inputs: [
			{
				name: 'guardian',
				type: 'address',
				internalType: 'address'
			}
		],
		outputs: [
			{
				name: 'id',
				type: 'uint256',
				internalType: 'uint256'
			}
		],
		stateMutability: 'view'
	},
	{
		type: 'function',
		name: 'guardians',
		inputs: [
			{
				name: '',
				type: 'uint256',
				internalType: 'uint256'
			}
		],
		outputs: [
			{
				name: '',
				type: 'address',
				internalType: 'address'
			}
		],
		stateMutability: 'view'
	},
	{
		type: 'function',
		name: 'init',
		inputs: [
			{
				name: '_owner',
				type: 'address',
				internalType: 'address'
			},
			{
				name: '_addressManager',
				type: 'address',
				internalType: 'address'
			}
		],
		outputs: [],
		stateMutability: 'nonpayable'
	},
	{
		type: 'function',
		name: 'isApproved',
		inputs: [
			{
				name: '_hash',
				type: 'bytes32',
				internalType: 'bytes32'
			}
		],
		outputs: [
			{
				name: '',
				type: 'bool',
				internalType: 'bool'
			}
		],
		stateMutability: 'view'
	},
	{
		type: 'function',
		name: 'lastUnpausedAt',
		inputs: [],
		outputs: [
			{
				name: '',
				type: 'uint64',
				internalType: 'uint64'
			}
		],
		stateMutability: 'view'
	},
	{
		type: 'function',
		name: 'minGuardians',
		inputs: [],
		outputs: [
			{
				name: '',
				type: 'uint32',
				internalType: 'uint32'
			}
		],
		stateMutability: 'view'
	},
	{
		type: 'function',
		name: 'numGuardians',
		inputs: [],
		outputs: [
			{
				name: '',
				type: 'uint256',
				internalType: 'uint256'
			}
		],
		stateMutability: 'view'
	},
	{
		type: 'function',
		name: 'owner',
		inputs: [],
		outputs: [
			{
				name: '',
				type: 'address',
				internalType: 'address'
			}
		],
		stateMutability: 'view'
	},
	{
		type: 'function',
		name: 'pause',
		inputs: [],
		outputs: [],
		stateMutability: 'nonpayable'
	},
	{
		type: 'function',
		name: 'paused',
		inputs: [],
		outputs: [
			{
				name: '',
				type: 'bool',
				internalType: 'bool'
			}
		],
		stateMutability: 'view'
	},
	{
		type: 'function',
		name: 'pendingOwner',
		inputs: [],
		outputs: [
			{
				name: '',
				type: 'address',
				internalType: 'address'
			}
		],
		stateMutability: 'view'
	},
	{
		type: 'function',
		name: 'proxiableUUID',
		inputs: [],
		outputs: [
			{
				name: '',
				type: 'bytes32',
				internalType: 'bytes32'
			}
		],
		stateMutability: 'view'
	},
	{
		type: 'function',
		name: 'renounceOwnership',
		inputs: [],
		outputs: [],
		stateMutability: 'nonpayable'
	},
	{
		type: 'function',
		name: 'resolve',
		inputs: [
			{
				name: '_chainId',
				type: 'uint64',
				internalType: 'uint64'
			},
			{
				name: '_name',
				type: 'bytes32',
				internalType: 'bytes32'
			},
			{
				name: '_allowZeroAddress',
				type: 'bool',
				internalType: 'bool'
			}
		],
		outputs: [
			{
				name: '',
				type: 'address',
				internalType: 'address payable'
			}
		],
		stateMutability: 'view'
	},
	{
		type: 'function',
		name: 'resolve',
		inputs: [
			{
				name: '_name',
				type: 'bytes32',
				internalType: 'bytes32'
			},
			{
				name: '_allowZeroAddress',
				type: 'bool',
				internalType: 'bool'
			}
		],
		outputs: [
			{
				name: '',
				type: 'address',
				internalType: 'address payable'
			}
		],
		stateMutability: 'view'
	},
	{
		type: 'function',
		name: 'setGuardians',
		inputs: [
			{
				name: '_newGuardians',
				type: 'address[]',
				internalType: 'address[]'
			},
			{
				name: '_minGuardians',
				type: 'uint8',
				internalType: 'uint8'
			}
		],
		outputs: [],
		stateMutability: 'nonpayable'
	},
	{
		type: 'function',
		name: 'transferOwnership',
		inputs: [
			{
				name: 'newOwner',
				type: 'address',
				internalType: 'address'
			}
		],
		outputs: [],
		stateMutability: 'nonpayable'
	},
	{
		type: 'function',
		name: 'unpause',
		inputs: [],
		outputs: [],
		stateMutability: 'nonpayable'
	},
	{
		type: 'function',
		name: 'upgradeTo',
		inputs: [
			{
				name: 'newImplementation',
				type: 'address',
				internalType: 'address'
			}
		],
		outputs: [],
		stateMutability: 'nonpayable'
	},
	{
		type: 'function',
		name: 'upgradeToAndCall',
		inputs: [
			{
				name: 'newImplementation',
				type: 'address',
				internalType: 'address'
			},
			{
				name: 'data',
				type: 'bytes',
				internalType: 'bytes'
			}
		],
		outputs: [],
		stateMutability: 'payable'
	},
	{
		type: 'function',
		name: 'version',
		inputs: [],
		outputs: [
			{
				name: '',
				type: 'uint32',
				internalType: 'uint32'
			}
		],
		stateMutability: 'view'
	},
	{
		type: 'event',
		name: 'AdminChanged',
		inputs: [
			{
				name: 'previousAdmin',
				type: 'address',
				indexed: false,
				internalType: 'address'
			},
			{
				name: 'newAdmin',
				type: 'address',
				indexed: false,
				internalType: 'address'
			}
		],
		anonymous: false
	},
	{
		type: 'event',
		name: 'Approved',
		inputs: [
			{
				name: 'operationId',
				type: 'uint256',
				indexed: true,
				internalType: 'uint256'
			},
			{
				name: 'approvalBits',
				type: 'uint256',
				indexed: false,
				internalType: 'uint256'
			},
			{
				name: 'minGuardiansReached',
				type: 'bool',
				indexed: false,
				internalType: 'bool'
			}
		],
		anonymous: false
	},
	{
		type: 'event',
		name: 'BeaconUpgraded',
		inputs: [
			{
				name: 'beacon',
				type: 'address',
				indexed: true,
				internalType: 'address'
			}
		],
		anonymous: false
	},
	{
		type: 'event',
		name: 'GuardianApproval',
		inputs: [
			{
				name: 'addr',
				type: 'address',
				indexed: true,
				internalType: 'address'
			},
			{
				name: 'blockId',
				type: 'uint256',
				indexed: true,
				internalType: 'uint256'
			},
			{
				name: 'blockHash',
				type: 'bytes32',
				indexed: true,
				internalType: 'bytes32'
			},
			{
				name: 'approved',
				type: 'bool',
				indexed: false,
				internalType: 'bool'
			},
			{
				name: 'proofData',
				type: 'bytes',
				indexed: false,
				internalType: 'bytes'
			}
		],
		anonymous: false
	},
	{
		type: 'event',
		name: 'GuardiansUpdated',
		inputs: [
			{
				name: 'version',
				type: 'uint32',
				indexed: false,
				internalType: 'uint32'
			},
			{
				name: 'guardians',
				type: 'address[]',
				indexed: false,
				internalType: 'address[]'
			}
		],
		anonymous: false
	},
	{
		type: 'event',
		name: 'Initialized',
		inputs: [
			{
				name: 'version',
				type: 'uint8',
				indexed: false,
				internalType: 'uint8'
			}
		],
		anonymous: false
	},
	{
		type: 'event',
		name: 'OwnershipTransferStarted',
		inputs: [
			{
				name: 'previousOwner',
				type: 'address',
				indexed: true,
				internalType: 'address'
			},
			{
				name: 'newOwner',
				type: 'address',
				indexed: true,
				internalType: 'address'
			}
		],
		anonymous: false
	},
	{
		type: 'event',
		name: 'OwnershipTransferred',
		inputs: [
			{
				name: 'previousOwner',
				type: 'address',
				indexed: true,
				internalType: 'address'
			},
			{
				name: 'newOwner',
				type: 'address',
				indexed: true,
				internalType: 'address'
			}
		],
		anonymous: false
	},
	{
		type: 'event',
		name: 'Paused',
		inputs: [
			{
				name: 'account',
				type: 'address',
				indexed: false,
				internalType: 'address'
			}
		],
		anonymous: false
	},
	{
		type: 'event',
		name: 'Unpaused',
		inputs: [
			{
				name: 'account',
				type: 'address',
				indexed: false,
				internalType: 'address'
			}
		],
		anonymous: false
	},
	{
		type: 'event',
		name: 'Upgraded',
		inputs: [
			{
				name: 'implementation',
				type: 'address',
				indexed: true,
				internalType: 'address'
			}
		],
		anonymous: false
	},
	{
		type: 'error',
		name: 'INVALID_GUARDIAN',
		inputs: []
	},
	{
		type: 'error',
		name: 'INVALID_GUARDIAN_SET',
		inputs: []
	},
	{
		type: 'error',
		name: 'INVALID_MIN_GUARDIANS',
		inputs: []
	},
	{
		type: 'error',
		name: 'INVALID_PAUSE_STATUS',
		inputs: []
	},
	{
		type: 'error',
		name: 'INVALID_PROOF',
		inputs: []
	},
	{
		type: 'error',
		name: 'REENTRANT_CALL',
		inputs: []
	},
	{
		type: 'error',
		name: 'RESOLVER_DENIED',
		inputs: []
	},
	{
		type: 'error',
		name: 'RESOLVER_INVALID_MANAGER',
		inputs: []
	},
	{
		type: 'error',
		name: 'RESOLVER_UNEXPECTED_CHAINID',
		inputs: []
	},
	{
		type: 'error',
		name: 'RESOLVER_ZERO_ADDR',
		inputs: [
			{
				name: 'chainId',
				type: 'uint64',
				internalType: 'uint64'
			},
			{
				name: 'name',
				type: 'bytes32',
				internalType: 'bytes32'
			}
		]
	},
	{
		type: 'error',
		name: 'ZERO_ADDR_MANAGER',
		inputs: []
	}
];
