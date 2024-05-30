import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';

import { Course } from 'src/course/entities/course.entity';
import { Question } from 'src/question/entities/question.entity';

@Entity()
export class Lesson {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  threshold: number;

  @ManyToOne(() => Course, (course) => course.lessons)
  course: Course;

  @OneToMany(() => Question, (question) => question.lesson)
  questions: Question[];
}
