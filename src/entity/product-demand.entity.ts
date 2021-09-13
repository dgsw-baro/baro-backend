import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import Timestamp from "./timestamp";
import { User } from "./user.entity";

@Entity()
export class ProductDemand extends Timestamp {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  title!: string;

  @Column()
  description!: string;

  @Column({ length: 510 })
  thumbnail!: string;

  @ManyToOne(() => User, (user) => user.demandedProducts, {
    onDelete: "SET NULL",
    nullable: true,
  })
  @JoinColumn({ name: "demanded_user_id" })
  demandedUser!: User | null;
}
