import React from 'react';
import { Metadata } from "next";
import { Category } from "@/types/category";
import allCategory from "@/data/category/data.json";
import Link from 'next/link';
import { Blog } from '@/types/blog';

export const metadata: Metadata = {
  title: "CUET PG 2025 Exam Pattern",
  description: "Prepare for CUET UG 2025 with a subject-wise study plan, expert tips, and effective strategies. Learn time management techniques, best books, and practice methods to ace the exam with confidence!",
};

const CUET_PG_2025_Exam_Pattern: React.FC = () => {
  const category = "cuet-pg";
  const currentCategory: Category | undefined = allCategory.find((item: Category) => item.key === category);

  return (
    <div className='blog-wrapper'>
      <div className='blog-body'>
        <h1 className="blog-title">CUET PG 2025 Exam Pattern: A Complete Guide for Aspiring Students</h1>
        <p>As students gear up for their future academic endeavors, the <strong>CUET PG</strong> (Common University Entrance Test for Postgraduate) stands out as a crucial gateway for many. A solid understanding of the <strong>CUET PG</strong> 2025 exam pattern can significantly enhance your preparation strategy. This blog post aims to provide a comprehensive overview of the <strong>CUET PG</strong> exam pattern, helping you navigate the intricate details to perform your best.</p>

        <h2 className="sub-headings">Understanding the CUET PG Exam Structure</h2>
        <p>The <strong>CUET PG</strong> exam structure is designed to assess the knowledge and skills of postgraduate aspirants across various disciplines. Generally, the exam comprises different sections, including a domain-specific subject and General Knowledge. Each section aims to evaluate candidates' proficiency pertinent to their chosen field, ensuring a fair assessment. Understanding this structure helps candidates allocate their preparation time effectively to each segment.</p>

        <h2 className="sub-headings">Exam Duration and Format of CUET PG</h2>
        <p>The <strong>CUET PG</strong> exam typically lasts for about 2 hours. It consists of Multiple Choice Questions (MCQs) that assess candidates' critical thinking and comprehension skills. Each correct answer earns candidates a certain number of marks, while incorrect responses may have negative marking. This format ensures that aspirants are not only knowledgeable but also precise in their answers, promoting a deeper understanding of their subjects.</p>

        <h2 className="sub-headings">Total Questions and Marking Scheme</h2>
        <p>The total number of questions in the <strong>CUET PG</strong> exam can vary by subject, usually ranging from 100 to 150 questions depending on the program. Each question carries equal marks, and the specific marking scheme often emphasizes accuracy. For example, candidates may receive 4 marks for every correct answer while incurring a penalty of 1 mark for each wrong answer. This encourages students to be cautious and well-prepared.</p>

        <h2 className="sub-headings">Syllabus Overview for CUET PG 2025</h2>
        <p>The syllabus for the <strong>CUET PG</strong> exam is vast and varies by subject. However, it generally includes topics that are aligned with the undergraduate curriculum. Aspiring candidates are encouraged to review the detailed syllabus provided by the respective universities. Understanding the syllabus allows students to create a focused study plan, honing in on relevant topics while identifying any key areas where additional study may be required.</p>

        <h2 className="sub-headings">Preparation Tips for CUET PG Aspirants</h2>
        <p>Preparation is key to success in the <strong>CUET PG</strong> exam. Students should consider utilizing a mix of study materials, including recommended textbooks, online resources, and practice tests. Consistent revision and taking mock exams can significantly enhance confidence and performance. Forming study groups for discussions can also be beneficial, allowing candidates to share insights and clarify doubts, fostering a supportive learning environment.</p>

        <p>In conclusion, understanding the <strong>CUET PG</strong> 2025 exam pattern is essential for any student aiming to excel in this competitive environment. By familiarizing yourself with the structure, format, and expectations of the exam, you ensure a strategic approach to your preparation. Remember, diligent preparation combined with a clear grasp of the exam pattern can pave the way to your desired postgraduate program.</p>
      </div>

      <div className='blog-sidebar'>
        <h2>Related Blogs</h2>
        <div className="category-cards-holder">
          {
            currentCategory && currentCategory.blogs.map((b: Blog, i: number) => (
              <div key={i} className="category-card">
                <div>
                  <h3>{b.title}</h3>
                </div>
                <Link href={b.url}>
                  <button className="read-more-btn">Read More</button>
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default CUET_PG_2025_Exam_Pattern;