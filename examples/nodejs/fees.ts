import mempool from '../../src/index';

const init = async () => {
  const { fees } = mempool();

  const feesRecommended = await fees.getFeesRecommended();
  console.log(feesRecommended);

  const feesMempoolBlocks = await fees.getFeesMempoolBlocks();
  console.log(feesMempoolBlocks);
};
init();
