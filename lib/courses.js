import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const coursesDirectory = path.join(process.cwd(), 'courses/');

export function getCourses() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  console.log(fileNames);

  // get rid of index in /courses
}
