import { Column, Entity, PrimaryColumn, CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'a_auth' })
export class Auth {
  @PrimaryColumn()
  id: number;

  @Column({ comment: '登录令牌TOKEN' })
  accessToken: string;

  @Column({ comment: '令牌过期时间' })
  expire: Date;

  @Column({ comment: '账号' })
  account: string;

  @Column({ comment: '密码' })
  password: string;

  @Column({ comment: '是否当前用户', default: true })
  isPresent: boolean;

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
