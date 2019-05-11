export interface History {
    identifer: string;
    created_at: Date;
    modified_at: Date;
    non_combat_log: string[];
    combat_log: string[];
    date_ended: string;
    history_id: string;
}
