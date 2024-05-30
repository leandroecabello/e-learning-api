import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from '../entities/course.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
  ) {}

  findAll(): Promise<Course[]> {
    return this.courseRepository.find({ relations: ['lessons'] });
  }

  findOne(id: number): Promise<Course> {
    return this.courseRepository.findOne({
      where: { id },
      relations: ['lessons'],
    });
  }

  /**
   * TODO: Added additional services...
   */
}
