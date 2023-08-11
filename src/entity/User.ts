import { Entity, Column, PrimaryGeneratedColumn, Index } from "typeorm";

@Entity("user")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Index("first_name_idx")
  @Column({ nullable: false })
  firstName: string;

  @Index("last_name_idx")
  @Column({ nullable: false })
  lastName: string;
}
