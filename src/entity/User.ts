import { Entity, Column, PrimaryGeneratedColumn, Index } from "typeorm";

@Entity("user")
export class User {
  @Index("name1-idx")
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Index("first_name_idx")
  @Column({ nullable: false })
  first_name: string;

  @Index("last_name_idx")
  @Column({ nullable: false })
  last_name: string;
}
