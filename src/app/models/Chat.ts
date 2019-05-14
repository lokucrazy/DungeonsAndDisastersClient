export interface Chat {
    identifier: string;
    created_at: Date;
    modified_at: Date;
    session_id: string;
    log: string[];
    note: string;
}
