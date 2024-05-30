import { Controller, Get, Param } from '@nestjs/common';
import { CourseService } from '../services/course.service';
import { Course } from '../entities/course.entity';

@Controller('courses')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get()
  findAll(): Promise<Course[]> {
    return this.courseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Course> {
    return this.courseService.findOne(+id);
  }

  /**
   * TODO: Added additional endpoints...
   */
}
