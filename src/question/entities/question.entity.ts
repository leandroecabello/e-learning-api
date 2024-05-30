import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

import { Lesson } from 'src/lesson/entities/lesson.entity';

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @Column()
  type: string; // 'boolean', 'single', 'multiple', 'multiple-all-correct'

  @Column('simple-array')
  options: string[];

  @Column('simple-array')
  correctAnswers: string[];

  @Column()
  score: number;

  @ManyToOne(() => Lesson, (lesson) => lesson.questions)
  lesson: Lesson;
}
