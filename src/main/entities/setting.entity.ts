import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'c_setting' })
export class Setting {
  @PrimaryColumn()
  id: number;

  @Column({ comment: '类型' })
  type: string;

  @Column({ comment: '名称' })
  name: string;

  @Column({ nullable: true, comment: '文本值' })
  textValue: string;

  @Column({ nullable: true, comment: '状态值' })
  statusValue: boolean;

  @Column({ type: 'text', nullable: true, comment: '序列值' })
  serialValue: string;

  @CreateDateColumn({
    type: 'datetime',
    name: 'create_at',
    comment: '创建日期',
  })
  createAt: Date;

  @UpdateDateColumn({
    type: 'datetime',
    name: 'update_at',
    comment: '更新日期',
  })
  updateAt: Date;

  @DeleteDateColumn({
    type: 'datetime',
    name: 'delete_at',
    comment: '删除日期',
    select: false,
  })
  deleteAt: Date;
}
