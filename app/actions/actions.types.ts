
export enum StepType {
  Question = 'question',
  Info = 'info',
  Checkout = 'checkout',
  Proxy = 'proxy',
}

export enum ProblemType {
  CloseToEyes = 'closeToEyes',
  ArmsLock = 'armsLock',
  InTheDark = 'inTheDark',
  CrookedBack = 'crookedBack',
}

export type StepDataType = {
  step: number;
  type: StepType | string;
  question?: string;
  answer: string | CheckoutDataType | CheckoutProductType | CampaignDataType;
  time: string;
}

export type CheckoutDataType = {
  name: string,
  email: string,
  phone: string,
  address: string,
  agree: boolean,
}

export type CheckoutProductType = {
  id: number,
  price: string,
  title: string,
  model?: string,
  subTitle?: string,
  subTitleModel?: string,
}

export type CampaignDataType = {
  utm_content: string;
  banner: string;
  campaign: string;
}