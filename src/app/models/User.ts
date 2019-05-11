export interface User {
    identifier: string;
    created_at: Date;
    modified_at: Date;
    username: string;
    password: string;
    birthdate: Date;
    notes: string[];
    character_ids: string[];
    session_ids: string[];
    dm_session_ids: string[];
    npc_ids: string[];
}
