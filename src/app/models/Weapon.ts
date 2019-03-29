export interface Weapon {
    name: string;
    equipment_category: string;
    weapon_range: string;
    cost: {
        quantity:number, 
        unit: string
      };
    damage: {
      dice_count: number,
      dice_value: number,
      damage_type: {
        name: string
      }
    }
  }