import { Abilities } from './Character';

export interface Enemy {
    identifier: string;
    created_at: Date;
    modified_at: Date;
    name: string;
    health: number;
    is_alive: boolean;
    initial_location: string;
    abilities: Abilities;
    session_id: string;
    combat_id: string;
}
