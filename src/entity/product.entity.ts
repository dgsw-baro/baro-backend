import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Rental } from "./rental.entity";
import Timestamp from "./timestamp";
import StockStatus from "../enum/stock-status.enum";

@Entity()
export class Product extends Timestamp {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  title!: string;

  @Column()
  description!: string;

  @Column({ length: 510 })
  thumbnail!: string;

  @Column("enum", {
    name: "stock_status",
    enum: StockStatus,
    default: StockStatus.LEFT,
  })
  stockStatus!: StockStatus;

  @OneToMany(() => Rental, (rental) => rental.product)
  rentals!: Rental[];
}
