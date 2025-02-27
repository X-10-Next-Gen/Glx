import React from 'react';
import styles from './ProfessionalEducation.module.css';

const ProfessionalEducation = () => {
  return (
    <>
      <section className={styles.educationGridContainer}>
        <div className={styles.educationImageContainer}>
          <img src="https://img.freepik.com/premium-photo/african-american-dentist-holding-tools-isolated-blue-background-pointing-front-with-happy-expression_1368-238859.jpg?ga=GA1.1.1393104245.1739823569&semt=ais_hybrid" alt="Dental Professional Education" />
        </div>
        <div className={styles.educationSection}>
          <h2 className={styles.educationTitle}>Introduction to Dental Professional Education</h2>
          <p>Becoming a dental professional requires rigorous education, hands-on training, and a commitment to lifelong learning. This guide covers essential educational pathways, key competencies, and ongoing professional development for dentists, hygienists, and assistants.</p>
        </div>
      </section>

      <section className={styles.educationGridContainer}>
        <div className={styles.educationSection}>
          <h2 className={styles.educationTitle}>Educational Pathways</h2>
          <h3 className={styles.educationSubtitle}>Dental School</h3>
          <ul className={styles.educationList}>
            <li>Complete a Bachelor's degree with prerequisites in biology, chemistry, and physics.</li>
            <li>Enroll in an accredited Doctor of Dental Surgery (DDS) or Doctor of Dental Medicine (DMD) program (typically four years).</li>
          </ul>

          <h3 className={styles.educationSubtitle}>Specialty Training</h3>
          <ul className={styles.educationList}>
            <li>Postgraduate programs available in orthodontics, periodontics, endodontics, prosthodontics, and oral surgery.</li>
            <li>Residencies range from 2-6 years depending on specialization.</li>
          </ul>

          <h3 className={styles.educationSubtitle}>Dental Hygiene and Assisting</h3>
          <ul className={styles.educationList}>
            <li>Dental hygienists complete an Associate’s or Bachelor's degree and obtain licensure.</li>
            <li>Dental assistants may complete a certificate program or receive on-the-job training.</li>
          </ul>
        </div>
        <div className={styles.educationImageContainer}>
          <img src="https://img.freepik.com/premium-photo/patient-looks-her-teeth-through-mirror-dental-visit_404612-1107.jpg?ga=GA1.1.1393104245.1739823569" alt="Dental Educational Pathways" />
        </div>
      </section>

      <section className={styles.educationGridContainer}>
        <div className={styles.educationImageContainer}>
          <img src="https://img.freepik.com/free-photo/professional-dentist-tools-dental-office_1204-235.jpg?ga=GA1.1.1393104245.1739823569&semt=ais_hybrid" alt="Dental Professionals Key Competencies" />
        </div>
        <div className={styles.educationSection}>
          <h2 className={styles.educationTitle}>Key Competencies for Dental Professionals</h2>
          <ul className={styles.educationList}>
            <li><strong>Clinical Skills:</strong> Diagnosis, treatment planning, and patient care.</li>
            <li><strong>Communication:</strong> Educating patients and working with healthcare teams.</li>
            <li><strong>Ethics & Professionalism:</strong> Adhering to legal and ethical guidelines.</li>
            <li><strong>Technology Proficiency:</strong> Utilizing digital imaging, CAD/CAM, and electronic health records.</li>
          </ul>
        </div>
      </section>

      <section className={styles.educationGridContainer}>
        <div className={styles.educationSection}>
          <h2 className={styles.educationTitle}>Licensure and Continuing Education</h2>
          <h3 className={styles.educationSubtitle}>Licensure</h3>
          <ul className={styles.educationList}>
            <li>Must pass National Board Dental Examination (NBDE) or Integrated National Board Dental Examination (INBDE).</li>
            <li>Clinical exams administered by regional or state boards.</li>
          </ul>

          <h3 className={styles.educationSubtitle}>Continuing Education (CE)</h3>
          <ul className={styles.educationList}>
            <li>Ongoing CE credits required for license renewal.</li>
            <li>Topics include new treatments, infection control, and practice management.</li>
          </ul>
        </div>
        <div className={styles.educationImageContainer}>
          <img src="https://img.freepik.com/free-photo/various-books-with-spectacles-table_1252-713.jpg?ga=GA1.1.1393104245.1739823569" alt="Licensure and Continuing Education" />
        </div>
      </section>

      <section className={styles.educationGridContainer}>
        <div className={styles.educationImageContainer}>
          <img src='https://img.freepik.com/premium-photo/happy-work-here-young-cheerful-afro-american-woman-holding-laptop-smiling-while-standing_386185-94.jpg?ga=GA1.1.1393104245.1739823569' alt="Professional Development and Specialization" />
        </div>
        <div className={styles.educationSection}>
          <h2 className={styles.educationTitle}>Professional Development and Specialization</h2>
          <ul className={styles.educationList}>
            <li><strong>Certifications:</strong> Advanced courses in cosmetic dentistry, implantology, and laser dentistry.</li>
            <li><strong>Memberships:</strong> Join organizations like ADA, ADEA, and specialty boards.</li>
            <li><strong>Research & Innovation:</strong> Participate in clinical trials and advancements in dental science.</li>
          </ul>
        </div>
      </section>

      <section className={`${styles.educationConclusionSection} ${styles.centeredText}`}>
        <h2>Conclusion</h2>
        <p>Dental professionals play a crucial role in healthcare, requiring continuous education and skill development. Staying updated with best practices ensures high-quality patient care and career growth in the evolving field of dentistry.</p>
      </section>
    </>
  );
}

export default ProfessionalEducation;
