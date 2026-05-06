import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string; 

  @Column()
  color_hex: string;

}