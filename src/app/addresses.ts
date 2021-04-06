import { AxiosInstance } from 'axios';
import { Address, AddressTxsUtxo, Tx, AddressInstance } from '../interfaces';

export const useAddresses = (api: AxiosInstance): AddressInstance => {
  const getAddress = async (address: string) => {
    const { data } = await api.get<Address>(`/address/${address}`);
    return data;
  };

  const getAddressTxs = async (address: string) => {
    const { data } = await api.get<Tx[]>(`/address/${address}/txs`);
    return data;
  };

  const getAddressTxsChain = async (address: string): Promise<Tx[]> => {
    const { data } = await api.get<Tx[]>(`/address/${address}/txs/chain`);
    return data;
  };

  const getAddressTxsMempool = async (address: string) => {
    return api
      .get<Tx[]>(`/address/${address}/txs/mempool`)
      .then(({ data }) => data);
  };

  const getAddressTxsUtxo = async (address: string) => {
    return api
      .get<AddressTxsUtxo[]>(`/address/${address}/utxo`)
      .then(({ data }) => data);
  };

  return {
    getAddress,
    getAddressTxs,
    getAddressTxsChain,
    getAddressTxsMempool,
    getAddressTxsUtxo,
  };
};
