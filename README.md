# Comprehensive Healthcare System: A Mobile Application for Empowered Patient Management

This document provides a detailed academic exposition of a mobile application meticulously designed to empower individuals—patients and their designated representatives—with unprecedented control and insight into their healthcare journey. The application's architecture is fundamentally built upon robust and scalable Application Programming Interfaces (APIs), ensuring a seamless, efficient, and secure interaction experience. Its core purpose is to deliver integrated digital solutions for the precise, real-time management of personal health data, the streamlined navigation of healthcare processes, and the continuous enhancement of individual well-being. Paramount attention is given to implementing stringent security protocols, adhering to international regulatory compliance standards (e.g., HIPAA, GDPR, ISO/IEC 27001), and cultivating an intuitively navigable and highly responsive user interface. The system proactively integrates cutting-edge technological advancements, including distributed ledger technologies for data integrity and advanced cryptographic techniques, to ensure optimal operational effectiveness, demonstrable efficiency, and unassailable data provenance, all directly benefiting the user.

The system's foundational design adheres to a meticulously structured modular framework, comprising a series of interconnected and interdependent core functional units. Each unit is rigorously conceptualized, developed, and validated to execute specific operational mandates autonomously, while simultaneously maintaining seamless interoperability, secure data exchange capabilities, and synchronized state management with all other constituent modules. This architectural approach inherently confers exceptional functional flexibility, inherent scalability, and a high degree of system resilience, enabling adaptation to evolving healthcare needs and technological landscapes, ultimately serving the user's evolving health management requirements.

## Core Functional Units

### HSYS-U01- Authentication and Security Management

This foundational functional unit is meticulously designed to establish, maintain, and continuously monitor a resilient and cryptographically secure framework for user identity governance and the overarching integrity of the mobile application environment. For the patient or their representative, this translates into an unwavering assurance that their personal and sensitive medical information is protected with the highest standards of digital security. Its comprehensive scope encompasses the entire lifecycle of user accounts, commencing from initial, verified registration and extending through to the secure, auditable termination of user sessions. The unit integrates advanced, industry-standard mechanisms for secure password recovery and implements robust multi-factor authentication (MFA) protocols, including biometric and time-based one-time password (TOTP) methods. A paramount principle guiding its design and implementation is the unwavering adherence to international security standards (e.g., NIST 800-63B, OWASP Top 10) and comprehensive data protection regulations, thereby safeguarding the confidentiality, integrity, and availability of all sensitive user and medical information, fostering user trust and peace of mind.

#### HSYS-U01-1 Account Creation

This sub-unit orchestrates the secure and streamlined onboarding of new users—patients or their representatives—into the mobile healthcare ecosystem. It employs rigorous data validation algorithms, including real-time data integrity checks and uniqueness constraints, to ensure the precision and non-duplication of all submitted user information. Account activation is meticulously managed through secure, multi-channel verification protocols (e.g., email confirmation, SMS verification), which uphold stringent data protection and privacy standards. This process is critical for establishing verifiable user identities and precluding the proliferation of fraudulent or duplicate entries within the system, thereby maintaining data quality and security, and ensuring that only authorized individuals can access their health data.

#### HSYS-U01-2 Login Process

Functioning as the primary access conduit to the mobile application, this sub-unit executes a stringent and multi-layered verification of user identities. For the patient, this means a secure and reliable entry point to their health information. It leverages advanced cryptographic protocols for the secure handling of user credentials, including password hashing and secure token exchange. Authenticated user sessions are established through the issuance and validation of JSON Web Tokens (JWTs), ensuring stateless session management and enhanced security. The implementation of dynamic Role-Based Access Control (RBAC) ensures the assignment of granular permissions, thereby guaranteeing precise and secure access to designated application resources commensurate with the user's authorized role and current context, protecting sensitive health records.

#### HSYS-U01-3 Logout Process

This sub-unit is indispensable for the secure and orderly disengagement of user sessions within the mobile application. For the patient, this guarantees that their session is fully terminated, preventing unauthorized access to their health data if their device is compromised or left unattended. Its core function is to ensure the complete and irreversible invalidation of all temporary session-related data, including session tokens and cached credentials. The unit provides flexible logout options, including comprehensive session termination across all devices and device-specific disengagement, and seamlessly redirects the user to the login interface. This mechanism significantly reinforces application security by preventing unauthorized post-session access and mitigating session hijacking risks.

#### HSYS-U01-4 Password Recovery

This sub-unit furnishes a secure, auditable, and user-centric mechanism enabling users—patients or their representatives—to regain access to their accounts in scenarios involving forgotten or compromised passwords. This provides a critical safety net, ensuring that users can always access their vital health information even if they forget their credentials. It employs secure, time-limited verification codes (One-Time Passwords - OTPs) or cryptographically protected reset links, which are delivered via secure, out-of-band communication channels. Integrated within this process are stringent password policy enforcement mechanisms, designed to compel the creation of robust new passwords that adhere to contemporary international security best practices, including complexity requirements and historical password checks.

#### HSYS-U01-5 Two-Factor Authentication (2FA)

This sub-unit substantially augments the security posture of user accounts by introducing an additional, independent layer of verification beyond conventional password authentication. For the patient, this means significantly enhanced protection against unauthorized access, even if their password is stolen. It supports a diverse array of authentication channels, including knowledge-based factors, possession-based factors (e.g., SMS, authenticator apps), and inherence-based factors (e.g., biometrics). Mandatory 2FA enforcement is judiciously applied to accounts possessing elevated privileges or accessing sensitive data, thereby significantly mitigating the risk of unauthorized access and enhancing the overall reliability of identity verification.

#### HSYS-U01-6 Session and Device Management

This sub-unit empowers users—patients or their representatives—with granular control and comprehensive oversight over their active sessions and all connected devices within the mobile application environment. This transparency allows users to monitor who is accessing their health data and from where, providing peace of mind and the ability to immediately revoke suspicious access. It provides a detailed exposition of geographical locations, IP addresses, and device types associated with their accounts, enabling the immediate termination of suspicious sessions or the disassociation of unrecognized devices. This functionality profoundly strengthens security oversight, provides users with transparency regarding their account activity, and proactively mitigates potential risks stemming from unauthorized access attempts.

### HSYS-U02- Family and Personal Account Management

This functional unit provides a sophisticated and secure infrastructure for the systematic management of familial and individual profiles within the mobile application ecosystem. For patients and their representatives, this means the ability to manage the health information of their entire family—from children to elderly dependents—within a single, secure platform. It is meticulously engineered to enable users to establish, maintain, and securely link multiple personal profiles, thereby constructing a digital representation of their familial and personal networks. A central tenet of this unit's design is the implementation of granular access control mechanisms and the efficient orchestration of emergency response protocols, all while rigorously adhering to prevailing legal and technical standards pertinent to the construction and maintenance of digital family trees. This unit is crucial for facilitating comprehensive, family-centric healthcare management and ensuring data privacy across related individuals.

#### HSYS-U02-1 Family Link System

This sub-unit is exclusively dedicated to the precise documentation and meticulous management of familial relationships within the digital family tree construct. For the patient or representative, this simplifies the process of connecting family members' health profiles, ensuring that all relevant health data is accessible in one place for coordinated care. Its operational paradigm emphasizes both empirical accuracy and legal validity in establishing these connections. It employs stringent request-and-decision-making protocols for the establishment of new links, encompassing spousal connections and the automated integration of newborns into the existing familial structure. Advanced graph traversal algorithms, specifically Breadth-First Search (BFS), are systematically deployed to validate the integrity of established relationships and to proactively detect and prevent fraudulent entries. A comprehensive and immutable audit log is diligently maintained for all operational transactions, thereby ensuring unparalleled transparency and accountability within the system.

#### HSYS-U02-3: Permission and Access Control

This sub-unit delivers a highly flexible and exquisitely precise framework for governing access levels and data manipulation privileges within both primary user accounts and their associated familial branches. For the patient or representative, this means complete control over who can view or modify the health data of each family member, ensuring privacy and appropriate access. It facilitates the unambiguous designation of a singular primary account holder and enables the granular delegation of partial permissions (e.g., read-only access, read/write capabilities, or full administrative oversight) to other explicitly authorized individuals. All modifications to these permissions are meticulously recorded in a tamper-proof audit log, and all delegation processes are rigorously secured through the mandatory application of multi-factor authentication, thereby reinforcing the paramount principles of data security and integrity in a multi-user context.

#### HSYS-U02-4: Accounts Management and Supervision

This sub-unit empowers designated guardians—patients or their representatives—with the comprehensive capability to monitor and actively manage the accounts of minors and elderly dependents who are formally linked to a primary account. This provides peace of mind for guardians, allowing them to oversee the health and well-being of vulnerable family members, receive timely alerts, and access critical information. It provides real-time alerts and generates periodic, comprehensive reports detailing account activity, as well as the health and social status of the supervised individuals. This functionality ensures a prompt and informed response to critical situations and offers a holistic, longitudinal overview of the well-being of all individuals under care within the system, adhering to ethical guidelines for proxy access to health information.

### HSYS-U03- Appointments and Medical Reservations Management

This functional unit meticulously orchestrates the entire spectrum of medical appointment scheduling and management processes within the mobile application ecosystem. For the patient, this translates into simplified, efficient, and transparent management of all medical appointments, reducing administrative burden and ensuring timely access to care. Its capabilities encompass sophisticated search functionalities for identifying suitable healthcare providers, facilitating seamless and secure appointment booking inclusive of preliminary data submission, and providing robust mechanisms for real-time appointment tracking, automated reminders, and dynamic task management. The overarching objective of this unit is to optimize patient access to essential healthcare services while simultaneously streamlining and enhancing the efficiency of administrative workflows for medical facilities, thereby contributing to improved patient outcomes and operational efficacy.

#### HSYS-U03-1 Smart Search for Medical Providers

This sub-unit empowers users—patients or their representatives—with highly efficient and empirically precise access to a curated compendium of qualified medical professionals and accredited healthcare facilities. This means patients can quickly find the right specialist or clinic based on their specific needs, location, and preferences, saving time and effort. It is engineered to support diverse search initiation paradigms, including direct queries and context-driven searches derived from user profiles. The system integrates advanced filtering capabilities, allowing for granular refinement based on criteria such as geographical proximity, specialized medical disciplines, operational hours, and specific service offerings. The primary aim is to minimize search latency to sub-second response times and to present accurate, contextually relevant provider information to the end-user, thereby enhancing decision-making efficiency.

#### HSYS-U03-2 Provider Profile Display

This sub-unit enables users—patients or their representatives—to conduct an exhaustive review of essential information pertaining to individual healthcare providers, encompassing independent practitioners, institutional medical entities, and specialized diagnostic centers. This allows patients to make informed decisions about their care by reviewing a provider's qualifications, patient ratings, and location before booking an appointment. The displayed profile comprehensively includes critical data points such as contact particulars, areas of clinical specialization, operational schedules, interactive geographical location mapping, and aggregated patient satisfaction ratings. This holistic presentation of information is designed to facilitate informed decision-making and enable direct, in-app appointment scheduling, thereby improving user convenience and trust.

#### HSYS-U03-3 Advanced Booking with Initial Data Submission

This sub-unit facilitates the precise and secure pre-booking of medical appointments, rigorously adhering to pre-configured time slot availability constraints and maximum patient capacity limitations. For the patient, this means a streamlined booking process where essential information can be submitted in advance, reducing wait times and improving the efficiency of their visit. It supports the secure attachment of preliminary patient data, which is instrumental in aiding accurate diagnosis and streamlining subsequent medical procedures. Furthermore, it integrates flexible payment processing options and enables the initiation of requests for supplementary services, such as at-home sample collection, thereby enhancing the convenience and comprehensiveness of the booking process and optimizing resource allocation.

#### HSYS-U03-4 Reservation Tracking, Automated Alerts, and Follow-up Scheduling

This sub-unit provides real-time, transparent oversight regarding the status of all medical reservations. For the patient, this ensures they are always informed about their upcoming appointments, receive timely reminders, and can easily manage their schedule, reducing the likelihood of missed appointments. It incorporates intelligent alert mechanisms designed to proactively notify users of impending appointments and empowers them with self-service functionalities for the autonomous cancellation or rescheduling of appointments. Additionally, it supports the systematic creation of structured treatment follow-up schedules and meticulously maintains an organized, longitudinal historical record of all past medical visits, contributing to comprehensive patient care continuity and improved adherence to treatment plans.

#### HSYS-U03-5 Task Basket

This sub-unit furnishes both end-users—patients and their representatives—and medical professionals with a centralized, intuitive interface for managing a dynamic “Task Basket” specifically tailored for medical follow-up activities. For the patient, this means a clear, organized list of all recommended tests, procedures, and follow-ups, ensuring no critical step in their care plan is overlooked. It aggregates all prescribed examinations, diagnostic procedures, and laboratory analyses into a singular, cohesive list, irrespective of whether they were initiated by the attending physician or the patient. The unit provides robust functionalities for tracking task completion, issuing timely alerts, and automatically linking completed tasks and their results to the patient’s comprehensive medical record, thereby ensuring holistic care coordination and reducing administrative burden.

### HSYS-U05- Medical History Management

This functional unit is meticulously engineered to serve as the central, longitudinal repository for all medical events and health-related data pertaining to an individual, commencing from birth and extending throughout their lifespan. For the patient, this provides a complete and accessible record of their health journey, empowering them with information for informed decision-making and continuity of care across different providers. Its comprehensive functionalities encompass the sophisticated management of chronic diseases, the implementation of granular access control mechanisms for authorized medical professionals to patient records, and the provision of robust offline access capabilities. This unit is unequivocally critical for establishing and maintaining a complete, accurate, and readily accessible patient health record, forming the bedrock of informed clinical decision-making and continuity of care, while adhering to stringent data governance principles.

#### HSYS-U05-1 Comprehensive Medical Record

This sub-unit is dedicated to the meticulous and systematic documentation of all patient encounters, including clinical visits, diagnostic procedures, and therapeutic interventions. For the patient, this means their entire medical history—from diagnoses to treatments and imaging results—is securely stored and easily retrievable, eliminating the need for physical paperwork and ensuring that no vital information is lost. It ensures the creation of a complete, accurate, and chronologically ordered record of medical events. Furthermore, it provides secure and scalable storage solutions for diverse medical data modalities, including high-resolution medical imaging (e.g., X-rays, MRIs, CT scans) and associated textual reports, facilitating their immediate accessibility for holistic patient care, retrospective analysis, and compliance with regulatory archiving standards (e.g., HL7, DICOM).

#### HSYS-U05-2 Chronic Diseases and Long-term Conditions Management

This sub-unit streamlines the definition, implementation, and continuous monitoring of personalized treatment plans specifically tailored for individuals managing chronic diseases and long-term health conditions. For patients with chronic conditions, this offers a structured approach to managing their health, with automated reminders and tracking tools that support adherence to treatment plans and proactive monitoring of their progress. It integrates advanced functionalities such as automated medication reminders, adherence tracking, and follow-up alerts, all meticulously designed to enhance patient compliance with prescribed therapeutic regimens and to facilitate continuous, proactive oversight of their evolving clinical progress, thereby improving long-term health outcomes.

#### HSYS-U05-3 Medical Access Control for Physicians

This sub-unit rigorously governs the access permissions granted to medical professionals within the system. For the patient, this ensures that their sensitive medical data is only accessed by authorized healthcare providers when necessary, maintaining privacy and control over their information. It implements a sophisticated system of scoped read/write privileges, which are dynamically assigned based on the physician's designated role, specialty, and the specific context of care. It further incorporates advanced condition-based access restrictions, ensuring that highly sensitive patient data is only accessible under predefined, auditable, and authorized circumstances, thereby upholding the highest standards of data confidentiality and patient privacy in accordance with regulatory frameworks.

#### HSYS-U05-4 Offline Access Support

This sub-unit enhances the mobile application's resilience and usability by enabling the local caching of critical medical record data directly on the user's device. For the patient, this means uninterrupted access to their essential health information, even in areas without internet connectivity, ensuring critical data is always at hand during emergencies or when traveling. This functionality ensures uninterrupted access to essential patient information even in environments characterized by intermittent or absent internet connectivity. It features an intelligent automatic synchronization mechanism that seamlessly updates all offline modifications and newly acquired data with the central system upon network re-establishment, thereby maintaining data consistency and integrity across all platforms and ensuring data freshness.

### HSYS-U06- Smart Nutrition Management

This functional unit provides advanced capabilities for personalized nutritional planning and comprehensive food product analysis within the mobile application environment. For the patient, this offers a powerful tool to make informed dietary choices, manage specific health conditions through nutrition, and track their progress towards health goals. It supports both visual (e.g., image recognition) and textual search functionalities for food items, offers intelligent, context-aware seasonal dietary suggestions, and integrates robust support for the systematic input and analytical processing of healthy growth data. The overarching objective of this unit is to empower users with sophisticated tools for making informed dietary choices and for continuous, proactive health monitoring, thereby promoting holistic well-being and preventive care.

#### HSYS-U06-1 Custom Nutrition Plans

This sub-unit is dedicated to the algorithmic generation of highly customized dietary plans, meticulously tailored to an individual's specific health status, physiological requirements, and dietary preferences. For the patient, this means receiving personalized meal plans that align with their unique health needs and preferences, making healthy eating easier and more effective. It incorporates an adaptive feedback mechanism that dynamically adjusts the nutritional plan based on the user's progress, biometric data, and evolving health metrics, thereby ensuring optimized and responsive dietary guidance that aligns with evidence-based nutritional science.

#### HSYS-U06-2 Food Products Search and Scanning

This sub-unit offers dual-modality capabilities for the identification and detailed analysis of food products. For the patient, this provides a quick and easy way to understand the nutritional content of foods by simply scanning a barcode or searching, helping them make healthier choices on the go. It provides a text-based search function for querying extensive product databases and integrates a scanning feature for rapid identification via barcodes or QR codes present on product packaging. This functionality enables users to instantaneously access comprehensive nutritional information, ingredient lists, allergen warnings, and origin data, facilitating informed consumption decisions and promoting food safety.

#### HSYS-U06-3 Food Preparation and Ingredients Guidelines

This sub-unit provides a comprehensive repository of guidelines pertaining to food preparation techniques, encompassing a diverse and culturally rich collection of local and global recipes. For the patient, this offers practical guidance on preparing healthy meals, along with accurate nutritional breakdowns, supporting their dietary goals and culinary exploration. It also includes a robust computational feature for accurately calculating the nutritional values of individual ingredients and complete prepared dishes, thereby assisting users in precise dietary tracking, meticulous meal planning, and adherence to specific dietary restrictions or goals.

#### HSYS-U06-4 Seasonal and Local Food Suggestions

This sub-unit leverages contextual data, including geographical location and temporal factors, to generate intelligent food suggestions that align with seasonal availability and regional culinary traditions. For the patient, this means receiving fresh, relevant, and culturally appropriate food recommendations that support sustainable eating habits and local economies. It matches recommendations to the prevailing season and climate, and offers culturally relevant local dish recommendations, thereby promoting sustainable, health-conscious, and culturally appropriate eating habits while supporting local economies.

#### HSYS-U06-5 Growth Data and Health Analysis

This sub-unit supports the systematic and longitudinal logging of anthropometric data, specifically periodic measurements of height and weight, to enable continuous monitoring of growth patterns across different developmental stages. For parents or guardians, this provides a clear visual representation of a child's growth, allowing for early identification of any concerns and proactive health management. It also provides advanced analytical tools for comparing recorded data against established growth standards and percentile charts, offering valuable insights into developmental trends, nutritional adequacy, and overall health status, particularly for pediatric and adolescent populations.

#### HSYS-U06-6 Offline Access Support

This sub-unit enhances the mobile application's operational resilience and user accessibility by enabling the local caching of critical nutrition plans and associated data directly on the user's device. For the patient, this ensures continuous access to their dietary plans and food information, even without an internet connection, supporting consistent adherence to their nutritional goals. This functionality ensures uninterrupted access to essential dietary information even in environments characterized by intermittent or absent internet connectivity. It features an intelligent automatic synchronization function that seamlessly updates all offline modifications and newly acquired data with the central system upon network re-establishment, thereby maintaining data consistency and integrity across all platforms.

### HSYS-U07- Medications and Prescriptions Management and Cosmetic and Personal Care Management

This functional unit provides a dual-faceted, integrated management system for both pharmaceutical products and personal care/cosmetic items within the mobile application. For the patient, this means a unified platform to manage all their health-related products, from prescription medications to daily skincare, ensuring safety, adherence, and informed choices. For pharmaceutical management, it facilitates the comprehensive display and administration of prescribed medications (whether directly integrated from physician orders or manually entered by the user), offers intelligent dosage scheduling with integrated, proactive alerts, and supports extensive search functionalities for identifying drug alternatives and assessing their availability. The unit incorporates a robust drug library, accessible via image recognition (e.g., scanning product packaging), commercial or scientific nomenclature (including the mapping of commercial names to their underlying scientific formulations), or by manufacturer/agency. It also provides detailed pharmacological information, assesses suitability based on the user's individualized health profile, enables seamless addition to the user's longitudinal medical record, and identifies proximate retail locations through multi-faceted filtering criteria. For cosmetic products, the unit supports intelligent search capabilities, performs rigorous ingredient analysis, verifies compatibility with the user's medical history and dermatological profile, and validates legal compliance and market availability.

#### HSYS-U07-1 Prescription-based Medication Management

This sub-unit streamlines the integration of prescribed medications into the user's comprehensive health profile by supporting the automated import of prescriptions from external electronic health record (EHR) systems or other authorized health data sources. For the patient, this simplifies medication tracking, ensuring all prescribed drugs are accurately recorded and easily accessible, reducing the risk of errors. It also provides a flexible and secure mechanism for manual medication entry, accommodating over-the-counter drugs, dietary supplements, or other non-prescribed substances, thereby ensuring the completeness and accuracy of the user's medication history.

#### HSYS-U07-2 Medication Reminders and Scheduling

This sub-unit is meticulously engineered to enhance medication adherence through the precise scheduling of daily, weekly, or as-needed dosages. For the patient, this provides crucial support in remembering to take medications on time, improving treatment effectiveness and overall health outcomes. It incorporates a sophisticated alert system that delivers persistent and repeated notifications, designed to minimize the incidence of missed doses and to promote consistent compliance with prescribed therapeutic regimens, thereby optimizing treatment outcomes.

#### HSYS-U07-3 Medication Search and Alternatives + Cosmetic Products

This sub-unit offers extensive and multi-modal search capabilities for both pharmaceutical and cosmetic products. For the patient, this means they can quickly find information on their medications, explore alternatives, and understand potential interactions, as well as research cosmetic products for suitability and safety. It supports text-based queries for database retrieval and image-based scanning for rapid product identification. For medications, it provides information on viable alternatives, comparative pricing, and potential drug interactions, facilitating informed choices. For cosmetic products, it provides a robust categorization system, enabling efficient navigation and selection based on product type, intended use, and ingredient profiles.

#### HSYS-U08-4 Cosmetic Products Compatibility Analysis

This sub-unit performs an in-depth, scientific analysis of cosmetic product ingredients. For the patient, this offers personalized insights into whether a cosmetic product is safe and suitable for their unique skin type, allergies, and medical history, preventing adverse reactions. It cross-references these ingredients with the user's comprehensive medical records, known allergies, and sensitivities to identify potential contraindications or adverse reactions. Furthermore, it assesses the product's suitability for the user's specific skin and hair types, providing personalized compatibility insights and recommendations.

#### HSYS-U07-5 Legality and Availability Verification

This sub-unit ensures consumer safety and product authenticity by conducting rigorous compliance checks against established health standards, regulatory guidelines, and verifying all necessary legal authorizations for products. For the patient, this provides assurance that the products they are considering are legitimate and safe, and helps them locate authorized retailers, protecting them from counterfeit or unapproved items. It also provides an integrated locator for authorized retail outlets and pharmacies, guiding users to legitimate and readily available products, thereby mitigating the risk of counterfeit or unapproved items.

### HSYS-U08- Integrated Logistic Services Management

This functional unit is meticulously designed to orchestrate the comprehensive logistics operations within the mobile application, specifically pertaining to the efficient management of ordering and delivery processes for pharmaceutical products, essential medical supplies, nutritional items, and cosmetic goods. For the patient, this translates into unparalleled convenience, allowing them to receive necessary health products directly at their doorstep, saving time and effort. Its operational scope encompasses the entire logistical chain, from the initiation of an order request to the confirmed receipt by the end-user, thereby ensuring a highly efficient, reliable, and transparent fulfillment of diverse user requirements. This unit leverages advanced supply chain management principles to optimize delivery routes and minimize lead times, contributing to enhanced patient satisfaction and operational cost-effectiveness.

#### HSYS-U08-1 Product Ordering and Delivery

This sub-unit facilitates seamless product acquisition by establishing direct, secure integrations with authorized pharmacies, medical supply distributors, and certified food/cosmetic vendors for streamlined ordering and fulfillment. For the patient, this means easy access to their medications, medical supplies, and health-related products without needing to visit multiple stores, especially beneficial for those with mobility challenges or busy schedules. It extends its capabilities to include the efficient delivery of essential medical supplies and food items, catering to diverse user needs. Furthermore, it provides robust functionalities for the precise scheduling and real-time tracking of deliveries, thereby ensuring timely and highly efficient service provision to the end-user, with a focus on last-mile delivery optimization.

#### HSYS-U08-2 Shipment Tracking and Confirmation

This sub-unit offers real-time, granular transparency regarding the status of all product shipments. For the patient, this provides peace of mind by allowing them to track their deliveries every step of the way, knowing exactly when their essential health products will arrive. It provides users with immediate, up-to-the-minute information on their orders through continuous tracking updates, leveraging GPS and other location-based services. Automated, immediate notifications are dispatched for any changes in shipment status, including dispatch, transit, and estimated arrival times. A comprehensive delivery confirmation feature is integrated, often utilizing digital signatures or photo verification, to formally verify the successful receipt of products by the user, thereby enhancing accountability and user satisfaction throughout the delivery process and minimizing disputes.

### HSYS-U09- Emergency Management and Health Alerts

This functional unit provides critical functionalities for immediate emergency response and proactive health alerting within the mobile application. For the patient, this offers a vital safety net, enabling rapid access to emergency services and critical health information during urgent situations, potentially saving lives. It incorporates sophisticated mechanisms for instant emergency reporting, precise geographical location sharing, seamless integration with proximate healthcare facilities, and leverages advanced artificial intelligence (AI) for predictive health risk assessment. The unit is meticulously designed to significantly enhance user safety and facilitate rapid, informed intervention during acute health crises, thereby contributing to improved patient outcomes and public health resilience.

#### HSYS-U09-1 Instant Emergency Reporting

This sub-unit enables direct and rapid communication with emergency services (e.g., paramedics, police, fire department), thereby facilitating swift and coordinated response during critical situations. For the patient, this means immediate connection to help during a medical emergency, with their location automatically shared, and the ability to alert family members, providing crucial support when every second counts. It supports real-time geographical location sharing, utilizing GPS and other location-based technologies, ensuring that emergency responders can accurately pinpoint the user's precise whereabouts, even in dynamic or unfamiliar environments. Additionally, it includes a dedicated feature for family emergency call support, allowing users to promptly notify their pre-designated emergency contacts during urgent medical events, ensuring a broader support network and coordinated family response.

#### HSYS-U09-2 Nearby Hospitals Integration

This sub-unit intelligently identifies and displays the nearest medical centers and hospitals, providing users with immediate access to critical healthcare facilities during emergencies. For the patient, this ensures they can quickly find the closest appropriate medical facility and, with consent, have their vital medical records transferred ahead of their arrival, streamlining emergency care. It supports the automated, secure transfer of relevant medical records to the selected facility, ensuring that healthcare providers have immediate access to vital patient information upon arrival, thereby expediting diagnosis and treatment. Furthermore, it includes real-time ambulance tracking capabilities, allowing users to monitor the progress of emergency medical services en route, enhancing transparency and reducing anxiety during critical transport.

#### HSYS-U09-3 AI-based Health Risk Prediction

This sub-unit leverages advanced artificial intelligence algorithms, including machine learning and predictive analytics, to conduct real-time analysis of vital physiological data (e.g., heart rate, blood pressure, activity levels), enabling the proactive prediction of potential health risks. For the patient, this means receiving early warnings about potential health issues, allowing them to take proactive steps or seek medical advice before a condition becomes severe, promoting preventive health. It generates early warning alerts for users and, with consent, for their healthcare providers, facilitating timely intervention and the proactive management of emerging health conditions. Moreover, it offers intelligent decision support functionalities, assisting both end-users in self-management and healthcare professionals in making informed and timely medical decisions based on predictive analytics and evidence-based guidelines.

### HSYS-U10- Health Notifications and Awareness

This functional unit is dedicated to the systematic dissemination of critical health information, encompassing comprehensive preventive and awareness content, real-time alerts for epidemics and significant health incidents, and a robust, searchable knowledge base for symptoms and diseases. For the patient, this unit serves as a reliable source of accurate, timely, and actionable health knowledge, empowering them to make informed decisions about their well-being and stay updated on public health concerns. Its overarching objective is to empower users with timely, accurate, and actionable health-related knowledge, fostering proactive health management and public health awareness, thereby contributing to improved community health outcomes and informed decision-making.

#### HSYS-U10-1 Preventive and Awareness Messages

This sub-unit delivers targeted health campaigns, including contextually relevant seasonal awareness initiatives that provide timely information pertinent to specific periods (e.g., flu season, allergy season). For the patient, this means receiving personalized health tips and information relevant to their current environment and health status, helping them stay healthy and prevent illness. It also offers daily health tips designed to promote general well-being and focuses on comprehensive chronic disease awareness, educating users about long-term health conditions, their management strategies, and preventive measures. These messages are crafted using evidence-based communication strategies to maximize impact and user engagement.

#### HSYS-U10-2 Pandemic and Incident Alerts

This sub-unit provides immediate, geographically relevant local and global alerts concerning pandemics, disease outbreaks, and significant health-related incidents, ensuring users are promptly informed about public health threats. For the patient, this provides crucial, real-time updates on public health emergencies, allowing them to take necessary precautions and stay safe. It also issues critical health and weather emergency alerts, preparing users for various critical situations and enabling the adoption of proactive safety measures. The alerts are designed to be concise, actionable, and sourced from authoritative public health organizations.

#### HSYS-U10-3 Searchable Knowledge Base

This sub-unit features an extensive and meticulously curated health knowledge library, serving as a vast repository of evidence-based medical information. For the patient, this offers a trustworthy resource to research symptoms, understand diseases, and access reliable prevention and treatment guidelines, empowering them with knowledge about their health. It enables highly efficient symptom and disease search functionalities, allowing users to quickly access relevant information and understand potential health concerns. Furthermore, it provides scientifically grounded prevention and treatment guidelines, empowering users with actionable health advice and promoting informed self-management and adherence to medical recommendations, all presented in an accessible and understandable format.

### HSYS-U11- Health Reports and Medical IDs Management

This functional unit provides robust capabilities for the systematic generation and secure documentation of official medical reports, alongside the comprehensive management of digital medical identities for users within the mobile application. For the patient, this means having all their official medical documents and a portable digital medical ID readily available, simplifying interactions with healthcare providers, travel, and other official requirements. It is designed to ensure the integrity, authenticity, and accessibility of critical health records and identification credentials, adhering to stringent data security and privacy standards, and facilitating seamless information exchange with authorized entities.

#### HSYS-U11-1 Generate Official Medical Reports

This sub-unit facilitates the automated generation of various official medical reports, encompassing detailed test and diagnostic reports (e.g., laboratory results, imaging interpretations), comprehensive surgical and treatment reports (e.g., procedure summaries, post-operative care instructions), and verifiable immunization records. For the patient, this eliminates the hassle of collecting physical reports, providing immediate access to their diagnostic results and treatment summaries in a secure, digital format. These reports are meticulously structured to support holistic patient care, facilitate accurate record-keeping for healthcare providers, and comply with relevant regulatory and legal archiving standards (e.g., HL7, DICOM, FHIR), ensuring data interoperability and legal validity.

#### HSYS-U11-2 Medical and Immunity ID Management

This sub-unit supports the secure issuance of digital medical IDs, providing users with a portable, cryptographically protected, and easily verifiable form of identification specifically tailored for healthcare purposes. For the patient, this offers a convenient and secure way to present their essential medical information, including allergies and immunity status, during emergencies or routine medical visits, potentially saving lives. It also enables the dynamic updating of immunity status, ensuring that critical health information, such as vaccination records, antibody presence, and allergen profiles, is current and readily accessible to authorized medical personnel during emergencies or routine care, thereby enhancing patient safety and treatment efficacy.

#### HSYS-U11-3 Document Printing and Certification

This sub-unit provides functionalities for the secure printing and official certification of various health-related documents. For the patient, this ensures they can easily obtain certified copies of their vaccination records or health status documents for official purposes, such as travel or school enrollment, without bureaucratic delays. This includes, but is not limited to, official vaccination certificates and formal documentation of health status (e.g., fitness-to-travel certificates, medical clearances). These certified documents ensure that users possess verifiable records for medical, travel, employment, or other compliance requirements, upholding the integrity and legal validity of their health information through digital signatures and verifiable timestamps.

### HSYS-U12- Vaccination and Immunization Management

This functional unit provides a comprehensive and meticulously structured system for the precise planning, diligent tracking, and robust documentation of vaccination doses. For the patient or their representative, this simplifies the complex process of managing vaccinations for themselves and their family, ensuring adherence to immunization schedules and providing verifiable records for all necessary purposes. It further facilitates the issuance of official, verifiable reports and certificates upon the successful completion of immunization schedules, thereby ensuring the creation and maintenance of accurate and legally recognized records of an individual's vaccination status. This unit is pivotal for public health initiatives and individual health management, contributing to disease prevention and control efforts on a broader scale.

#### HSYS-U12-1 Vaccination Scheduling

This sub-unit meticulously manages the precise scheduling of routine immunizations, ensuring strict adherence to established public health guidelines, national immunization programs, and recommended vaccination protocols. For the patient, this means automated reminders and clear scheduling for vaccinations, helping them stay up-to-date with recommended immunizations and protect their health. It also provides robust tracking capabilities for both completed and pending doses, offering a clear, real-time, and up-to-date overview of an individual's immunization status, facilitating proactive health management and compliance with public health recommendations.

#### HSYS-U12-2 Vaccination Completion Reports

This sub-unit is responsible for the automated generation and secure issuance of verifiable digital vaccination certificates, providing a cryptographically protected and easily accessible record of an individual's immunization history. For the patient, this provides a convenient and secure digital certificate of their vaccination status, easily shareable for travel, school, or employment requirements, eliminating the need for physical documents. It also produces official medical proofs of vaccination, which are legally recognized and can be utilized for various purposes requiring documented immunization status, such as international travel, school enrollment, or employment requirements, thereby upholding the integrity and legal validity of vaccination records and supporting global health security.

### HSYS-U13- Settings and Preferences Management

This functional unit empowers users—patients and their representatives—with comprehensive and granular control over the mobile application's configuration and personalization. For the patient, this means the application adapts to their individual needs and preferences, providing a truly personalized and comfortable user experience. It facilitates the meticulous customization of linguistic interfaces, visual aesthetics, notification behaviors, privacy parameters, and data sharing preferences with designated family members and authorized healthcare providers. This unit is designed to significantly enhance user autonomy, optimize the application experience to individual needs, and ensure compliance with personal data governance choices, thereby fostering a user-centric design paradigm.

#### HSYS-U13-1 Basic System Settings

This sub-unit provides fundamental configuration options for the mobile application, ensuring adaptability and user comfort. For the patient, this allows them to customize the app's language, appearance, and notification sounds, making it more accessible and enjoyable to use. It includes robust multi-language support to cater to diverse user demographics, allowing seamless switching between linguistic interfaces. Furthermore, it offers extensive customization of visual themes and overall appearance, enabling users to personalize the application's aesthetic. Additionally, it provides granular control over notification and alert tones, allowing users to define distinct auditory cues for various system events, thereby enhancing usability, accessibility, and user satisfaction.

#### HSYS-U13-2 Personal Preferences Customization

This sub-unit enables users—patients or their representatives—to fine-tune their application experience by managing specific personal preferences, thereby tailoring the system's behavior to their individual requirements. For the patient, this means the app can provide highly relevant health and food suggestions based on their unique needs and goals, and they retain full control over how their personal health data is shared. This encompasses the ability to define and manage detailed nutritional preferences, allowing the system to generate customized dietary recommendations. It also facilitates the personalization of health and food suggestions based on individual dietary needs, health goals, and lifestyle choices. Crucially, it provides meticulous control over data sharing preferences, empowering users to regulate the dissemination of their personal health information to authorized entities, ensuring privacy, data sovereignty, and adherence to user consent models.

#### HSYS-U13-3 Help and Support Center

This sub-unit serves as a centralized and comprehensive resource for user assistance and problem resolution within the mobile application. For the patient, this provides immediate access to answers for common questions, a way to report issues, and clear information about their rights and the app's policies, ensuring they feel supported and informed. It features an extensive section for frequently asked questions (FAQs), addressing common inquiries and providing immediate solutions. A robust ticketing and complaints system is integrated for formal issue reporting and systematic tracking of resolution progress. A detailed user manual offers in-depth guidance on all application functionalities. Furthermore, it transparently outlines the application's privacy policy and terms of service, ensuring user understanding and compliance with legal frameworks and ethical guidelines.

#### HSYS-U13-4 Security and Privacy Settings

This sub-unit provides advanced and robust controls for enhancing user security and data privacy within the mobile application. For the patient, this offers powerful tools to protect their sensitive health information, including secure password management, biometric authentication, and the ability to monitor and control access from all their devices, ensuring their data remains confidential and secure. It includes sophisticated functionalities for secure password management and biometric authentication (e.g., fingerprint, facial recognition), offering multi-layered access control. Users are empowered to monitor connected devices, providing oversight of active sessions and enabling the revocation of unauthorized access. The unit implements comprehensive encryption and data protection mechanisms, including data at rest and in transit encryption, to safeguard sensitive personal and health information against unauthorized access or breaches, thereby ensuring data confidentiality, integrity, and availability.

### HSYS-U14- Financial Management and Payment Processing

This functional unit is meticulously designed to manage all financial transactions and related information within the mobile application, specifically pertaining to healthcare services. For the patient, this means complete transparency and control over their healthcare expenses, simplifying billing, payments, and insurance claims, and reducing financial stress. It encompasses the efficient processing of payments, comprehensive tracking of invoices and open accounts with healthcare providers (e.g., hospitals, clinics), and the timely delivery of various financial notifications to the user. This unit aims to provide unparalleled transparency and granular control over healthcare-related expenditures, thereby empowering users with a clear understanding of their financial obligations and facilitating informed financial decision-making in healthcare.

#### HSYS-U14-1 Payments and Billing Management

This sub-unit provides a clear and concise overview of all outstanding payments, enabling users—patients or their representatives—to easily track their financial obligations and due dates. For the patient, this simplifies the process of managing medical bills, allowing for secure and convenient online payments through various methods, and providing a clear overview of their financial responsibilities. It facilitates secure and convenient online payment processing, offering diverse methods for settling medical bills, including credit/debit cards, digital wallets, and direct bank transfers, all compliant with PCI DSS standards. Furthermore, it empowers users to manage their preferred payment methods, ensuring a streamlined, flexible, and user-friendly financial experience within the application, optimizing payment workflows and reducing administrative overhead.

#### HSYS-U14-2 Hospital and Clinic Accounts Tracking

This sub-unit offers detailed insights into medical billing information, providing a granular breakdown of services rendered, associated costs, and insurance coverage details. For the patient, this means a transparent view of all their medical expenses from different providers, making it easier to understand bills, reconcile payments, and manage insurance claims effectively. It effectively manages open accounts with hospitals and clinics, ensuring that users are continuously aware of their current financial standing with various healthcare providers. Upon discharge from a facility or completion of services, it provides a comprehensive final billing summary, promoting utmost transparency and clarity in all financial transactions and facilitating accurate reconciliation of medical expenses.

#### HSYS-U14-3 Financial Alerts and Notifications

This sub-unit is responsible for sending timely and relevant financial alerts and notifications to users—patients or their representatives. For the patient, this provides proactive warnings about upcoming payments, new costs, or potential additional fees, helping them budget for healthcare expenses and avoid unexpected financial burdens. This includes proactive notifications for upcoming payment due dates, informing users of new cost calculations as they arise from additional services or procedures, and issuing warnings for potential additional fees, such as those incurred from extended hospital stays or unforeseen complications. These alerts are meticulously designed to help users stay fully informed about their financial obligations and to proactively avoid unexpected charges, thereby enhancing financial predictability, control, and reducing financial stress associated with healthcare costs.

## Conclusion and Future Directions

This document has provided a comprehensive, academically rigorous exposition of a mobile healthcare management system, meticulously detailing its core functional units and their profound benefits for the patient and their representatives. The architectural design, emphasizing modularity and API-driven integration, positions this system as a robust and scalable solution for contemporary healthcare challenges, directly empowering users in their health management. Future research and development endeavors will focus on the integration of advanced machine learning models for personalized predictive analytics that directly inform patient decisions, the exploration of blockchain technology for enhanced data security and interoperability that further protects patient data, and the expansion of the system's capabilities to encompass telemedicine functionalities and remote patient monitoring, bringing care closer to the patient. Continuous adherence to evolving regulatory frameworks and the proactive incorporation of user feedback will remain paramount to ensure the system's sustained relevance, efficacy, and ethical deployment within the global healthcare landscape, always with the patient's well-being at its core.




### Impact
# Asceama Database Diagram

![Database Diagram](screenshots/Diagram_000.drawio.svg)
## Features Overview
![Database Diagram](screenshots/logo.svg)
### 1. Authentication

Users can securely log in and sign up to access their medical records.


<div style="display: flex; justify-content: space-between; margin-bottom: 25px">
<img src="screenshots\Auth\Screenshot.yoursafty_000.png" alt = "yoursafty_00" style="width:22%">
<img src="screenshots\Auth\Screenshot.yoursafty_00.png" alt = "yoursafty_00" style="width:22%">
<img src="screenshots\Auth\Screenshot.yoursafty_0001.png" alt = "yoursafty_00" style="width:22%">
<img src="screenshots\Auth\Screenshot.yoursafty_001.png" alt = "yoursafty_00" style="width:22%">
</div>

<div style="display: flex; justify-content: space-between; margin-bottom: 25px">
<img src="screenshots\Auth\Screenshot.yoursafty_01.png" alt = "yoursafty_02" style="width:18%">
<img src="screenshots\Auth\Screenshot.yoursafty_02.png" alt = "yoursafty_07" style="width:18%">
<img src="screenshots\Auth\Screenshot.yoursafty_03.png" alt = "yoursafty_01" style="width : 18%">
<img src="screenshots\Auth\Screenshot.yoursafty_04.png" alt = "yoursafty_01" style="width : 18%">
<img src="screenshots\Auth\Screenshot.yoursafty_05.png" alt = "yoursafty_01" style="width : 18%">
</div>

<div style="display: flex; justify-content: space-between; margin-bottom: 25px">
<img src="screenshots\Auth\Screenshot.yoursafty_005.png" alt = "yoursafty_03" style="width:16%">
<img src="screenshots\Auth\Screenshot.yoursafty_006.png" alt = "yoursafty_05" style="width:16%">
<img src="screenshots\Auth\Screenshot.yoursafty_015.png" alt = "yoursafty_05" style="width:16%">
<img src="screenshots\Auth\Screenshot.yoursafty_016.png" alt = "yoursafty_05" style="width:16%">
<img src="screenshots\Auth\Screenshot.yoursafty_08.jpg" alt = "yoursafty_03" style="width:16%">
<img src="screenshots\Auth\Screenshot.yoursafty_007.png" alt = "yoursafty_07" style="width:16%">
</div>

<div style="display: flex; justify-content: space-between; margin-bottom: 25px">

<img src="screenshots\Auth\Screenshot.yoursafty_009.png" alt = "yoursafty_07" style="width:16%">
<img src="screenshots\Auth\Screenshot.yoursafty_008.png" alt = "yoursafty_07" style="width:16%">
<img src="screenshots\Auth\Screenshot.yoursafty_10.jpg" alt = "yoursafty_03" style="width:16%">
<img src="screenshots\Auth\Screenshot.yoursafty_010.png" alt = "yoursafty_05" style="width:16%">
<img src="screenshots\Auth\Screenshot.yoursafty_011.png" alt = "yoursafty_05" style="width:16%">
<img src="screenshots\Auth\Screenshot.yoursafty_012.png" alt = "yoursafty_05" style="width:16%">
</div>


### 2. Home Page

The home page serves as the central hub with access to various features through a sidebar.

![Home Page](screenshots/MainPage/Screenshot.png)

- **Health Awareness Articles**:
- **General Health Status**
- **Deit**
- **Sidebar Navigation**:
    Quickly navigate to different sections such as health articles and payment wallets.

<img src="screenshots\MainPage\Screenshot.yoursafty_0101.png" alt = "yoursafty_03" style="width:16%">

- **Payment Wallets**
<div style="display: flex; justify-content: space-between; margin-bottom: 25px">
<img src="screenshots\PaymentWallets\Screenshot.yoursafty_301.png" alt = "yoursafty_03" style="width:31%">
<img src="screenshots\PaymentWallets\Screenshot.yoursafty_302.png" alt = "yoursafty_03" style="width:31%">
<img src="screenshots\PaymentWallets\Screenshot.yoursafty_303.png" alt = "yoursafty_03" style="width:31%">

</div>
<div style="display: flex; justify-content: space-between; margin-bottom: 25px">
<img src="screenshots\PaymentWallets\Screenshot.yoursafty_304.png" alt = "yoursafty_03" style="width:31%">
<img src="screenshots\PaymentWallets\Screenshot.yoursafty_305.png" alt = "yoursafty_03" style="width:31%">
<img src="screenshots\PaymentWallets\Screenshot.yoursafty_306.png" alt = "yoursafty_03" style="width:31%">
</div>

### 3. Health Baskets


<div style="display: flex; justify-content: space-between; margin-bottom: 25px">
<img src="screenshots\Records\Screenshot.yoursafty_400.png" alt = "yoursafty_405" style="width:23%">
<img src="screenshots\Records\Screenshot.yoursafty_401.png" alt = "yoursafty_405" style="width:23%">
<img src="screenshots\Records\Screenshot.yoursafty_402.png" alt = "yoursafty_401" style="width:23%">
<img src="screenshots\Records\Screenshot.yoursafty_403.png" alt = "yoursafty_405" style="width:23%">
</div>

<div style="display: flex; justify-content: space-between; margin-bottom: 25px">
<img src="screenshots\Records\Screenshot.yoursafty_408.png" alt = "yoursafty_405" style="width:45%">
<img src="screenshots\Records\Screenshot.yoursafty_409.png" alt = "yoursafty_405" style="width:45%">
</div>


<div style="display: flex; justify-content: space-between; margin-bottom: 25px">
<img src="screenshots\Records\Screenshot.yoursafty_404.png" alt = "yoursafty_405" style="width:18%">
<img src="screenshots\Records\Screenshot.yoursafty_405.png" alt = "yoursafty_405" style="width:18%">
<img src="screenshots\Records\Screenshot.yoursafty_406.png" alt = "yoursafty_405" style="width:18%">
<img src="screenshots\Records\Screenshot.yoursafty_409.jpg" alt = "yoursafty_402" style="width:18%">
<img src="screenshots\Records\Screenshot.yoursafty_413.jpg" alt = "yoursafty_405" style="width:18%">
</div>


<div style="display: flex; justify-content: space-between; margin-bottom: 25px">
<img src="screenshots\Records\Screenshot.yoursafty_410.jpg" alt = "yoursafty_405" style="width:19%">
<img src="screenshots\Records\Screenshot.yoursafty_411.jpg" alt = "yoursafty_405" style="width:19%">
<img src="screenshots\Records\Screenshot.yoursafty_412.jpg" alt = "yoursafty_405" style="width:19%">
<img src="screenshots\Records\Screenshot.yoursafty_418.jpg" alt = "yoursafty_405" style="width:19%">
<img src="screenshots\Records\Screenshot.yoursafty_419.jpg" alt = "yoursafty_405" style="width:19%">
</div>

<div style="display: flex; justify-content: space-between; margin-bottom: 25px">
<img src="screenshots\Records\Screenshot.yoursafty_407.png" alt = "yoursafty_405" style="width:45%">
<img src="screenshots\Records\Screenshot.yoursafty_410.png" alt = "yoursafty_405" style="width:45%">
</div>

<div style="display: flex; justify-content: space-between; margin-bottom: 25px">
<img src="screenshots\Records\Screenshot.yoursafty_411.png" alt = "yoursafty_405" style="width:30%">
<img src="screenshots\Records\Screenshot.yoursafty_404.jpg" alt = "yoursafty_405" style="width:30%">
<img src="screenshots\Records\Screenshot.yoursafty_408.jpg" alt = "yoursafty_405" style="width:30%">
</div>

<div style="display: flex; justify-content: space-between; margin-bottom: 25px">
<img src="screenshots\Records\Screenshot.yoursafty_407.jpg" alt = "yoursafty_405" style="width:30%">
<img src="screenshots\Records\Screenshot.yoursafty_420.jpg" alt = "yoursafty_405" style="width:30%">
<img src="screenshots\Records\Screenshot.yoursafty_421.jpg" alt = "yoursafty_405" style="width:30%">
</div>

<!-- ![Health Baskets](baskets.fake) -->

#### 04. Booking System
<div style="display: flex; justify-content: space-between; margin-bottom: 25px">
<img src="screenshots\BookingSystem\Screenshot.yoursafty_200.png" alt = "yoursafty_03" style="width:31%">
<img src="screenshots\BookingSystem\Screenshot.yoursafty_201.png" alt = "yoursafty_03" style="width:31%">
<img src="screenshots\BookingSystem\Screenshot.yoursafty_203.png" alt = "yoursafty_03" style="width:31%">
</div>

<div style="display: flex; justify-content: space-between; margin-bottom: 25px">
<img src="screenshots\BookingSystem\Screenshot.yoursafty_208.png" alt = "yoursafty_03" style="width:31%">
<img src="screenshots\BookingSystem\Screenshot.yoursafty_204.png" alt = "yoursafty_03" style="width:31%">
<img src="screenshots\BookingSystem\Screenshot.yoursafty_205.png" alt = "yoursafty_03" style="width:31%">
</div>


<div style="display: flex; justify-content: space-between; margin-bottom: 25px">
<img src="screenshots\BookingSystem\Screenshot.yoursafty_206.png" alt = "yoursafty_03" style="width:31%">
<img src="screenshots\BookingSystem\Screenshot.yoursafty_207.png" alt = "yoursafty_03" style="width:31%">
<img src="screenshots\MedAlerm\Screenshot.yoursafty_108.png" alt = "yoursafty_03" style="width:31%">
</div>

#### 05. Task Management
#### 06. Alerts

Receive notifications for medication reminders and clinic appointments.

<div style="display: flex; justify-content: space-between; margin-bottom: 25px">
<img src="screenshots\MedAlerm\Screenshot.yoursafty_100.png" alt = "yoursafty_03" style="width:16%">
<img src="screenshots\MedAlerm\Screenshot.yoursafty_101.png" alt = "yoursafty_03" style="width:16%">
<img src="screenshots\MedAlerm\Screenshot.yoursafty_104.png" alt = "yoursafty_03" style="width:16%">
<img src="screenshots\MedAlerm\Screenshot.yoursafty_105.png" alt = "yoursafty_03" style="width:16%">
<img src="screenshots\MedAlerm\Screenshot.yoursafty_106.png" alt = "yoursafty_03" style="width:16%">
</div>

<div style="display: flex; justify-content: space-between; margin-bottom: 25px">
<img src="screenshots\MedAlerm\Screenshot.yoursafty_107.png" alt = "yoursafty_03" style="width:16%">
<img src="screenshots\MedAlerm\Screenshot.yoursafty_108.png" alt = "yoursafty_03" style="width:16%">
<img src="screenshots\MedAlerm\Screenshot.yoursafty_109.png" alt = "yoursafty_03" style="width:16%">
<img src="screenshots\MedAlerm\Screenshot.yoursafty_110.png" alt = "yoursafty_03" style="width:16%">
<img src="screenshots\MedAlerm\Screenshot.yoursafty_111.png" alt = "yoursafty_03" style="width:16%">
<img src="screenshots\MedAlerm\Screenshot.yoursafty_112.png" alt = "yoursafty_03" style="width:16%">
</div>




#### 07.Medical Search Engine

##### 10.1.Search With Trade Name
<div style="display: flex; justify-content: space-between; margin-bottom: 25px">
<img src="screenshots\Searcher\Screenshot_1.png" alt = "yoursafty_03" style="width:22%">
<img src="screenshots\Searcher\Screenshot_2.png" alt = "yoursafty_03" style="width:22%">
<img src="screenshots\Searcher\Screenshot_4.png" alt = "yoursafty_03" style="width:22%">
<img src="screenshots\Searcher\Screenshot_3.png" alt = "yoursafty_03" style="width:22%">
</div>

<div style="display: flex; justify-content: space-between; margin-bottom: 25px">
<img src="screenshots\Searcher\Screenshot_5.png" alt = "yoursafty_03" style="width:22%">
<img src="screenshots\Searcher\Screenshot_6.png" alt = "yoursafty_03" style="width:22%">
<img src="screenshots\Searcher\Screenshot_7.png" alt = "yoursafty_03" style="width:22%">
<img src="screenshots\Searcher\Screenshot_8.png" alt = "yoursafty_03" style="width:22%">
</div>

###### 08.1.Search With Scientific Name
<div style="display: flex; justify-content: space-between; margin-bottom: 25px">
<img src="screenshots\Searcher\Screenshot_11.png" alt = "yoursafty_03" style="width:15%">
<img src="screenshots\Searcher\Screenshot_10.png" alt = "yoursafty_03" style="width:15%">
<img src="screenshots\Searcher\Screenshot_12.png" alt = "yoursafty_03" style="width:15%">
<img src="screenshots\Searcher\Screenshot_13.png" alt = "yoursafty_03" style="width:15%">
<img src="screenshots\Searcher\Screenshot_14.png" alt = "yoursafty_03" style="width:15%">
<img src="screenshots\Searcher\Screenshot_15.png" alt = "yoursafty_03" style="width:15%">
</div>


##### 10.1.Search About Companys
<div style="display: flex; justify-content: space-between; margin-bottom: 25px">
<img src="screenshots\Searcher\Screenshot_30.png" alt = "yoursafty_03" style="width:18%">
<img src="screenshots\Searcher\Screenshot_31.png" alt = "yoursafty_03" style="width:18%">
<img src="screenshots\Searcher\Screenshot_32.png" alt = "yoursafty_03" style="width:18%">
<img src="screenshots\Searcher\Screenshot_33.png" alt = "yoursafty_03" style="width:18%">
<img src="screenshots\Searcher\Screenshot_34.png" alt = "yoursafty_03" style="width:18%">
</div>

##### 10.1.Search About Proxy
<div style="display: flex; justify-content: space-between; margin-bottom: 25px">
<img src="screenshots\Searcher\Screenshot_20.png" alt = "yoursafty_03" style="width:16%">
<img src="screenshots\Searcher\Screenshot_25.png" alt = "yoursafty_03" style="width:16%">
<img src="screenshots\Searcher\Screenshot_26.png" alt = "yoursafty_03" style="width:16%">
<img src="screenshots\Searcher\Screenshot_21.png" alt = "yoursafty_03" style="width:16%">
<img src="screenshots\Searcher\Screenshot_27.png" alt = "yoursafty_03" style="width:16%">
<img src="screenshots\Searcher\Screenshot_23.png" alt = "yoursafty_03" style="width:16%">
</div>



## Conclusion

This project provides a comprehensive solution for managing medical records, ensuring easy access to vital health information, and streamlining medical processes.


<!-- ## Project Development Update -->


>**Note:** This program is currently under construction and development. The completion of the patient-specific program is scheduled for the end of 2024. The planning, creation, and development have been undertaken by Software Engineer Emran Nasser.


<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300&display=swap');
        body {
            font-family: 'Cairo', sans-serif;
            color: #5a5a5a; /* Faded color */
            margin: 20px;}
    </style>
    <title>Project Development Update</title>
</head>
<body>
    <h2>Project Development Update</h2>
    <p><strong>Note:</strong> This program is currently under construction and development. The completion of the patient-specific program is scheduled for the end of 2024. The planning, creation, and development have been undertaken by Software Engineer Imran Al-Shami.</p>
</body>
</html> -->
