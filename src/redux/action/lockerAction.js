import { AMBIL_TITIP_ITEM, BUKA_TUTUP_LOCKER, TAMBAH_LOCKER } from "./actionTypes";

const bukaTutupLocker = (index) => {
  return {
    type: BUKA_TUTUP_LOCKER,
    payload: index
  };
};

const ambilTitipItem = (index) => {
  return {
    type: AMBIL_TITIP_ITEM,
    payload: index
  };
};

const tambahLocker = () => {
  return {
    type: TAMBAH_LOCKER,
  };
};

export { bukaTutupLocker, ambilTitipItem, tambahLocker };