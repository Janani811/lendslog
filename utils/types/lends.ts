export type LendsTypes = {
  ld_borrower_name: string;
  ld_borrower_phoneno: string;
  ld_borrower_address: string;
  ld_borrower_notes: string;
  ld_nominee_name: string;
  ld_nominee_phoneno: string;
  ld_nominee_address: string;
  ld_nominee_notes: string;
  ld_lend_amount: string;
  ld_interest_rate: string;
  ld_total_weeks_or_month: string;
};

export interface IinstallmentTimelines {
  it_id: number;
  it_lend_id: number; // lends id
  it_installment_date: string;
  it_installement_status: number;
  it_created_at: string;
  it_updated_at: string;
  it_is_deleted: number;
  it_term_amount: number;
  it_order: number;
}

export interface TodayLends {
  ld_id: number;
  ld_borrower_name: string;
  ld_borrower_phoneno: string;
  it_term_amount: number;
  total_pending_amount: string;
  pending_installments: PendingInstallments[];
  onCheck?: any;
}

export interface PendingInstallments {
  it_id: number;
  it_installment_date: string;
  it_installement_status: number;
  it_term_amount: number;
}
export interface INotifications {
  nt_user_id: number;
  nt_id?: number;
  nt_status?: number;
  nt_created_at?: string;
  nt_updated_at?: string;
  nt_is_deleted?: number;
  nt_text?: string;
  nt_pending_count?: number;
  type: string;
}
