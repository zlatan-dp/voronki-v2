export enum StepType {
  Question = 'question',
  Info = 'info',
  Checkout = 'checkout',
}

export enum ProblemType {
  CloseToEyes = 'closeToEyes',
  ArmsLock = 'armsLock',
  InTheDark = 'inTheDark',
  CrookedBack = 'crookedBack',
}

export type StepDataType = {
  step: number;
  type: StepType;
  question?: string;
  answer: string;
}