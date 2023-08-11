import {
	Entity, 
	Column, 
	PrimaryGeneratedColumn,
	Index, 
	CreateDateColumn,
	UpdateDateColumn
} from "typeorm";

@Entity("expense")
export class Expense {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Index("payer_id_idx")
  @Column({ nullable: false })
  payerId: string;

  @Index("amount_idx")
  @Column({ nullable: false })
  amount : string;

  @CreateDateColumn({ type: "timestamptz", default: () => "CURRENT_TIMESTAMP()" })
  public created_at: Date;

}
