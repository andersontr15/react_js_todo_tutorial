export interface ITodo {
  id: number;
  isEditing: boolean;
  isCompleted: boolean;
  name: string;
  created_at?: Date | null;
  updated_at?: Date | null
}