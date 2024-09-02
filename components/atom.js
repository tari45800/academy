import { atom } from 'recoil';
import { winterSchoolForm } from '@/components/formobjects/winterSchoolForm';
import { SATForm } from '@/components/formobjects/SATForm';
import { ssnForm } from '@/components/formobjects/ssnForm';
import { ssnRegularForm } from '@/components/formobjects/ssnRegularForm';
import { consultingForm } from '@/components/formobjects/consultingForm';
import { infosessionForm } from '@/components/formobjects/infosessionForm';

// export const menuToggle = atom({
//   key: 'menuToggle',
//   default: true,
// });

export const someDefaultAtom = atom({
  key: 'someDefaultAtom',
  default: undefined,
});

export const popup = atom({
  key: 'popup',
  default: false,
});

export const authenticationState = atom({
  key: 'Authentication',
  default: false,
});

export const winterSchoolAtom = atom({
  key: 'winterSchoolForm',
  default: winterSchoolForm,
});

export const SATAtom = atom({
  key: 'SATForm',
  default: SATForm,
});

export const ssnAtom = atom({
  key: 'ssnForm',
  default: ssnForm,
});

export const ssnRegularAtom = atom({
  key: 'ssnRegularForm',
  default: ssnRegularForm,
});

export const consultingAtom = atom({
  key: 'consultingForm',
  default: consultingForm,
});

export const infosessionAtom = atom({
  key: 'infosessionForm',
  default: infosessionForm,
});
