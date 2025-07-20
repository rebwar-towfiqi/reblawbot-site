// نوع رای‌ها برای رأی‌گیری
export type VoteOption = 'innocent' | 'guilty' | 'abstain';

// نوع نقش‌های کاربران
export type RoleType = 'plaintiff' | 'defendant';

// نوع پرونده حقوقی
export interface Case {
  id: number;
  title: string;
  summary: string;
  full_text: string;
}

// نوع استدلال ثبت‌شده توسط کاربر
export interface Verdict {
  id?: number;
  case_id: number;
  telegram_id: string;
  name: string;
  role: RoleType;
  vote: VoteOption;
  argument: string;
  submitted_at?: string;
}

// نوع جلسه برای حالت دو‌نفره
export interface GameSession {
  id?: number;
  case_id: number;
  telegram_id: string;
  name: string;
  role: RoleType;
  started_at?: string;
}
