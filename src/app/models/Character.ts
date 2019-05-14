export interface Abilities {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
    strenth_modifier: number;
    dexterity_modifier: number;
    constitution_modifier: number;
    intelligence_modifier: number;
    wisdom_modifier: number;
    charisma_modifier: number;
}

export enum CharacterAlignment {
    'lawful good',
    'neutral good',
    'chaotic good',
    'lawful neutral',
    'neutral',
    'chaotic neutral',
    'lawful evil',
    'neutral evil',
    'chaotic evil'
}

export enum CharacterClass {
    'barbarian',
    'bard',
    'cleric',
    'druid',
    'fighter',
    'monk',
    'paladin',
    'ranger',
    'rogue',
    'sorcerer',
    'warlock',
    'wizard'
}

export enum CharacterRace {
    'dragonborn',
    'dwarf',
    'elf',
    'gnome',
    'half elf',
    'half orc',
    'halfing',
    'human',
    'tiefling'
}

export interface Character {
    identifier: string;
    created_at: Date;
    modified_at: Date;
    name: string;
    user_id: string;
    class: string;
    background: string;
    race: string;
    alignment: string;
    level: number;
    experience: number;
    abilities: Abilities;
    session_ids: string[];
}
