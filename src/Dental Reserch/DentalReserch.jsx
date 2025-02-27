import React from 'react';
import styles from './DentalReserch.module.css';

const DentalReserch = () => {
    return (
        <>
            <section className={styles.pageSection}>
                <h2 className={styles.pageHeading}>The Importance of Dental Research in Modern Healthcare</h2>
                <p className={styles.pageParagraph}>Dental research plays a crucial role in advancing oral healthcare by improving treatment methods, developing new materials, and enhancing preventive care. It helps scientists and professionals better understand oral diseases, their causes, and effective ways to treat them.</p>
            </section>
            
            <section className={styles.pageSection}>
                <h2 className={styles.pageHeading}>Key Areas of Dental Research</h2>
                
                <h3 className={styles.pageSubheading}>Oral Disease Prevention and Treatment</h3>
                <ul className={styles.pageList}>
                    <li className={styles.pageListItem}>Research on <strong className={styles.importantTerm}>cavities (dental caries)</strong> and <strong className={styles.importantTerm}>gum disease (periodontitis)</strong> helps in creating more effective preventive strategies such as fluoride treatments and better oral hygiene products.</li>
                    <li className={styles.pageListItem}>The study of <strong className={styles.importantTerm}>oral microbiomes</strong> provides insights into how bacteria in the mouth influence overall health.</li>
                </ul>
                
                <h3 className={styles.pageSubheading}>Dental Materials and Technology</h3>
                <ul className={styles.pageList}>
                    <li className={styles.pageListItem}>The development of <strong className={styles.importantTerm}>biocompatible dental implants</strong> and <strong className={styles.importantTerm}>stronger, longer-lasting filling materials</strong> has improved restorative dentistry.</li>
                    <li className={styles.pageListItem}>Advances in <strong className={styles.importantTerm}>3D printing and digital dentistry</strong> have revolutionized the way dental prosthetics and braces are made.</li>
                </ul>
                
                <h3 className={styles.pageSubheading}>Regenerative Dentistry</h3>
                <ul className={styles.pageList}>
                    <li className={styles.pageListItem}>Stem cell research in dentistry explores ways to regenerate damaged tissues, including enamel, dentin, and even entire teeth.</li>
                    <li className={styles.pageListItem}><strong className={styles.importantTerm}>Tissue engineering</strong> is being used to develop bioengineered teeth and enhance healing after dental surgeries.</li>
                </ul>
                
                <h3 className={styles.pageSubheading}>Oral-Systemic Health Connection</h3>
                <ul className={styles.pageList}>
                    <li className={styles.pageListItem}>Studies have linked <strong className={styles.importantTerm}>gum disease</strong> to serious health conditions such as <strong className={styles.importantTerm}>heart disease, diabetes, and Alzheimer's disease</strong>.</li>
                    <li className={styles.pageListItem}>Research focuses on how maintaining oral health can prevent systemic diseases.</li>
                </ul>
                
                <h3 className={styles.pageSubheading}>Pain Management and Anesthesia</h3>
                <ul className={styles.pageList}>
                    <li className={styles.pageListItem}>New pain management techniques, including <strong className={styles.importantTerm}>laser therapy</strong> and <strong className={styles.importantTerm}>non-opioid analgesics</strong>, are being studied to reduce discomfort during and after dental procedures.</li>
                    <li className={styles.pageListItem}>Minimally invasive techniques aim to reduce the need for anesthesia.</li>
                </ul>
            </section>
            
            <section className={styles.pageSection}>
                <h2 className={styles.pageHeading}>Future of Dental Research</h2>
                <p className={styles.pageParagraph}>With advancements in <strong className={styles.importantTerm}>artificial intelligence (AI), nanotechnology, and biomaterials</strong>, the future of dental care looks promising. Personalized treatments based on genetic research and AI-assisted diagnostics will further improve patient outcomes.</p>
            </section>
            
            <section className={`${styles.pageSection} ${styles.conclusionWrapper}`}>
                <h2 className={styles.conclusionHeading}>Conclusion</h2>
                <p className={styles.conclusionText}>Dental research continues to shape the future of oral health, ensuring better treatments, improved materials, and stronger links between dental and overall health. Continued investment in dental research will lead to more innovative solutions, improving the quality of life for people worldwide.</p>
            </section>
        </>
    );
}

export default DentalReserch;
