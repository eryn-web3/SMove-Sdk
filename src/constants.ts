import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  GOHEAL = 3901,
  MAINNET = 56,
  BSCTESTNET = 97,
  FANTOMNET = 250,
  FANTOMTESTNET = 4002,
  HARMONYNET = 1666600000,
  HARMONYTESTNET = 1666700000,
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS = {
  3901: '0x72512a20AF2aBE5De5c588bfa701CEa6774EaBAa',
  56: '0xb5004479d377abD37e8DBF87f5BD8A61241e8393',
  97: '0xb5004479d377abD37e8DBF87f5BD8A61241e8393',
  250: '0xEF45d134b73241eDa7703fa787148D9C9F4950b0',
  4002: '0xEF45d134b73241eDa7703fa787148D9C9F4950b0',
  1666600000: '0x7D02c116b98d0965ba7B642ace0183ad8b8D2196',
  1666700000: '0x7D02c116b98d0965ba7B642ace0183ad8b8D2196',
}

export const INIT_CODE_HASH = {
  3901: '0x817c6d8426d3cb096e1670735f622f3931019f55bc4dfaef6f32fdda8e652098',
  56: '0x0882358098fbc989307ba113994715720d47a5c7d05288d9ac2505438bdaf967',
  97: '0x0882358098fbc989307ba113994715720d47a5c7d05288d9ac2505438bdaf967',
  250: '0xe242e798f6cee26a9cb0bbf24653bf066e5356ffeac160907fe2cc108e238617',
  4002: '0xe242e798f6cee26a9cb0bbf24653bf066e5356ffeac160907fe2cc108e238617',
  1666600000: '0x162f79e638367cd45a118c778971dfd8d96c625d2798d3b71994b035cfe9b6dc',
  1666700000: '0x162f79e638367cd45a118c778971dfd8d96c625d2798d3b71994b035cfe9b6dc',
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
