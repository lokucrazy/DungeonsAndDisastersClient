export interface User {
    identifier: string;
    username: string;
    password: string;
    birthdate: Date;
    notes: string[];
    created_at: Date;
    modified_at: Date;
    characters: string[];
    sessions: string[];
}
