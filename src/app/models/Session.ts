export interface Session {
    identifier: string;
    session_state: boolean;
    created_on: Date;
    last_modified_on: Date;
    dm_id: string;
    non_combat_log: string[];
    combat_log: string[];
    date_ended: Date;
    history_id: string;
    chat_id: string;
    map_id: string;
    combat_id: string;
    npc_ids: string[];
    player_ids: string[];
    character_ids: string[];
}
