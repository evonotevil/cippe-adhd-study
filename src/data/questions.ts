import type { Question } from '../types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    question: "Which statement is correct when considering the right to privacy under Article 8 of the European\nConvention on Human Rights (ECHR)?",
    options: ["A. The right to privacy is an absolute right", "B. The right to privacy has to be balanced against other rights under the ECHR", "C. The right to freedom of expression under Article 10 of the ECHR will always override the right to privacy", "D. The right to privacy protects the right to hold opinions and to receive and impart ideas without interference"],
    correctAnswer: "B",
    explanation: "正确答案 B。ECHR 第 8 条规定的隐私权是一项限制性权利（qualified right），并非绝对权利，须依第\n8(2)条与其他权利（如第 10 条言论自由）进行平衡。A 错在“绝对权利”的表述——只有极少数权利（如\n禁止酷刑）才是绝对的；C 错在言论自由并不“always override”隐私权，两者需个案平衡，不存在单向优\n先；D 描述的其实是第 10 条言论自由的内容，而非第 8 条隐私权。知识点：欧洲人权公约中权利的“绝对\n权利”与“限制性权利”区分、比例原则与利益平衡。",
    topic: "判例法",
    verified: "accurate"
  },
  {
    id: 2,
    question: "What is one major goal that the OECD Guidelines, Convention 108 and the Data Protection Directive\n(Directive 95/46/EC) all had in common but largely failed to achieve in Europe?",
    options: ["A. The establishment of a list of legitimate data processing criteria", "B. The creation of legally binding data protection principles", "C. The synchronization of approaches to data protection", "D. The restriction of cross-border data flow"],
    correctAnswer: "C",
    explanation: "正确答案 C。OECD 隐私指南（1980）、欧洲理事会 108 号公约（1981）与 95/46/EC 指令都致力于协调\n各国数据保护做法、便利数据跨境流动，但因均为软法或指令（需各国转化），最终未能实现欧洲范围\n内做法的“同步化/一致化”，这正是 GDPR 以直接适用的“条例”形式出台的原因之一。A、B、D 分别只是\n部分文件的具体内容，并非三者共同且失败的目标。知识点：数据保护立法史（OECD 指南、108 公约、\n95/46 指令）及 GDPR 的立法动因。",
    topic: "历史沿革/95-46-EC",
    verified: "accurate"
  },
  {
    id: 3,
    question: "A key component of the OECD Guidelines is the “Individual Participation Principle”. What parts of the\nGeneral Data Protection Regulation (GDPR) provide the closest equivalent to that principle?",
    options: ["A. The lawful processing criteria stipulated by Articles 6 to 9", "B. The information requirements set out in Articles 13 and 14", "C. The breach notification requirements specified in Articles 33 and 34", "D. The rights granted to data subjects under Articles 12 to 22"],
    correctAnswer: "D",
    explanation: "正确答案 D。OECD 指南中的“个人参与原则”（Individual Participation Principle）赋予个人知悉、查阅、\n更正与其相关数据的权利，这与 GDPR 第三章（第 12-22 条）规定的数据主体权利体系最为对应。A 是合\n法处理依据（第 6-9 条），B 是信息告知义务（第 13-14 条，属于透明度原则的一部分），C 是数据泄露\n通知义务，均不是“参与原则”的对应条款。知识点：OECD 八项原则与 GDPR 原则/权利的对应关系。",
    topic: "Convention 108/108+",
    verified: "accurate"
  },
  {
    id: 4,
    question: "Which EU institution is vested with the competence to propose new data protection legislation on its own\ninitiative?",
    options: ["A. The European Council", "B. The European Parliament", "C. The European Commission", "D. The Council of the European Union"],
    correctAnswer: "C",
    explanation: "正确答案 C。根据欧盟条约框架，欧盟委员会（European Commission）在普通立法程序中享有专属立法\n提案权，负责提出新法案（包括数据保护立法）。欧洲议会和欧盟理事会负责审议、修改和通过立法，\n但通常不能主动提案；欧洲理事会（European Council）则是设定政治方向的机构，不参与具体立法提\n案。知识点：欧盟机构架构及普通立法程序（Ordinary Legislative Procedure）中各机构角色。",
    topic: "监管机构",
    verified: "accurate"
  },
  {
    id: 5,
    question: "What is an important difference between the European Court of Human Rights (ECHR) and the Court of\nJustice of the European Union (CJEU) in relation to their roles and functions?",
    options: ["A. ECHR can rule on issues concerning privacy as a fundamental right, while the CJEU cannot.", "B. CJEU can force national governments to implement and honor EU law, while the ECHR cannot.", "C. CJEU can hear appeals on human rights decisions made by national courts, while the ECHR cannot.", "D. ECHR can enforce human rights laws against governments that fail to implement them, while the CJEU cannot."],
    correctAnswer: "B",
    explanation: "正确答案 B。CJEU 的判决对成员国具有直接约束力，欧盟法优先原则和成员国违约诉讼程序（TFEU 第\n258-260 条）使 CJEU 能够强制成员国执行欧盟法；而欧洲人权法院（ECtHR，此处以 ECHR 代称）的判\n决执行依赖部长委员会监督，缺乏同等的强制执行机制。A 错——CJEU 同样可以通过《欧盟基本权利宪\n章》第 7、8 条处理隐私问题；C、D 则颠倒或混淆了两个法院的职权范围。知识点：CJEU 与 ECtHR 在\n职权、判决效力及执行机制上的区别。",
    topic: "判例法",
    verified: "accurate"
  },
  {
    id: 6,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nAnna and Frank both work at Granchester University. Anna is a lawyer responsible for data protection,\n\nwhile Frank is a lecturer in the engineering department. The University maintains a number of types of\nrecords:\n\nStudent records, including names, student numbers, home addresses, pre-university information,\n\nuniversity attendance and performance records, details of special educational needs and financial\ninformation.\nStaff records, including autobiographical materials (such as curricula, professional contact files, student\nevaluations and other relevant teaching files).\nAlumni records, including birthplaces, years of birth, dates of matriculation and conferrals of degrees.\nThese records are available to former students after registering through Granchester’s Alumni portal.\nDepartment for Education records, showing how certain demographic groups (such as first-generation\nstudents) could be expected, on average, to progress. These records do not contain names or\nidentification numbers.\nUnder their security policy, the University encrypts all of its personal data records in transit and at rest.\n\nIn order to improve his teaching, Frank wants to investigate how his engineering students perform in\nrelational to Department for Education expectations. He has attended one of Anna’s data protection\ntraining courses and knows that he should use no more personal data than necessary to accomplish his\ngoal. He creates a program that will only export some student data: previous schools attended, grades\noriginally obtained, grades currently obtained and first time university attended. He wants to keep the\nrecords at the individual student level. Mindful of Anna’s training, Frank runs the student numbers through\nan algorithm to transform them into different reference numbers. He uses the same algorithm on each\noccasion so that he can update each record over time.\n\nOne of Anna’s tasks is to complete the record of processing activities, as required by the GDPR. After\nreceiving her email reminder, as required by the GDPR. After receiving her email reminder, Frank informs\nAnna about his performance database.\n\nAnn explains to Frank that, as well as minimizing personal data, the University has to check that this new\nuse of existing data is permissible. She also suspects that, under the GDPR, a risk analysis may have to\nbe carried out before the data processing can take place. Anna arranges to discuss this further with Frank\nafter she has done some additional research.\n\nFrank wants to be able to work on his analysis in his spare time, so he transfers it to his home laptop\n(which is not encrypted). Unfortunately, when Frank takes the laptop into the University he loses it on the\n\ntrain. Frank has to see Anna that day to discuss compatible processing. He knows that he needs to report\nsecurity incidents, so he decides to tell Anna about his lost laptop at the same time.\n\nWhich of the University’s records does Anna NOT have to include in her record of processing activities?",
    options: ["A. Student records", "B. Staff and alumni records", "C. Frank’s performance database", "D. Department for Education records"],
    correctAnswer: "D",
    explanation: "正确答案 D。教育部统计记录不含姓名或身份编号，且用于展示群体层面的平均趋势，属于无法识别到\n具体个人的匿名化数据，不构成 GDPR 意义上的“个人数据”，因此无需列入处理活动记录（第 30 条）。\n学生记录、教职工/校友记录显然是个人数据；Frank 的成绩数据库虽经过“算法转换学号”，但因使用同一\n算法且可在同一学生层面持续更新，属于假名化（pseudonymization）而非匿名化，假名化数据仍是个人\n数据，须纳入记录。知识点：匿名化与假名化的区别、第 30 条处理活动记录的适用范围。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 7,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nAnna and Frank both work at Granchester University. Anna is a lawyer responsible for data protection,\nwhile Frank is a lecturer in the engineering department. The University maintains a number of types of\nrecords:\n Student records, including names, student numbers, home addresses, pre-university information,\n university attendance and performance records, details of special educational needs and financial\n information.\n Staff records, including autobiographical materials (such as curricula, professional contact files, student\n\nevaluations and other relevant teaching files).\n\nAlumni records, including birthplaces, years of birth, dates of matriculation and conferrals of degrees.\nThese records are available to former students after registering through Granchester’s Alumni portal.\n\nDepartment for Education records, showing how certain demographic groups (such as first-generation\n\nstudents) could be expected, on average, to progress. These records do not contain names or\nidentification numbers.\nUnder their security policy, the University encrypts all of its personal data records in transit and at rest.\n\nIn order to improve his teaching, Frank wants to investigate how his engineering students perform in\nrelational to Department for Education expectations. He has attended one of Anna’s data protection\ntraining courses and knows that he should use no more personal data than necessary to accomplish his\ngoal. He creates a program that will only export some student data: previous schools attended, grades\noriginally obtained, grades currently obtained and first time university attended. He wants to keep the\nrecords at the individual student level. Mindful of Anna’s training, Frank runs the student numbers through\nan algorithm to transform them into different reference numbers. He uses the same algorithm on each\noccasion so that he can update each record over time.\n\nOne of Anna’s tasks is to complete the record of processing activities, as required by the GDPR. After\nreceiving her email reminder, as required by the GDPR. After receiving her email reminder, Frank informs\nAnna about his performance database.\n\nAnn explains to Frank that, as well as minimizing personal data, the University has to check that this new\nuse of existing data is permissible. She also suspects that, under the GDPR, a risk analysis may have to\n\nbe carried out before the data processing can take place. Anna arranges to discuss this further with Frank\nafter she has done some additional research.\n\nFrank wants to be able to work on his analysis in his spare time, so he transfers it to his home laptop\n(which is not encrypted). Unfortunately, when Frank takes the laptop into the University he loses it on the\ntrain. Frank has to see Anna that day to discuss compatible processing. He knows that he needs to report\nsecurity incidents, so he decides to tell Anna about his lost laptop at the same time.\n\nBefore Anna determines whether Frank’s performance database is permissible, what additional\ninformation does she need?",
    options: ["A. More information about Frank’s data protection training.", "B. More information about the extent of the information loss.", "C. More information about the algorithm Frank used to mask student numbers.", "D. More information about what students have been told and how the research will be used."],
    correctAnswer: "D",
    explanation: "正确答案 D。根据 GDPR 第 5(1)(b)条“目的限制原则”及第 6(4)条的兼容性测试，判断新用途是否与原始\n收集目的相兼容，需要了解数据主体当初被告知的收集目的，以及新研究将如何使用这些数据，才能进\n行兼容性评估。A（培训情况）、B（丢失范围）、C（算法技术细节）均与“该新处理是否被允许”这一\n合法性判断无直接关系。知识点：目的限制原则与兼容性处理测试（compatible use test）。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 8,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nAnna and Frank both work at Granchester University. Anna is a lawyer responsible for data protection,\nwhile Frank is a lecturer in the engineering department. The University maintains a number of types of\nrecords:\n Student records, including names, student numbers, home addresses, pre-university information,\n university attendance and performance records, details of special educational needs and financial\n information.\n Staff records, including autobiographical materials (such as curricula, professional contact files, student\n evaluations and other relevant teaching files).\n Alumni records, including birthplaces, years of birth, dates of matriculation and conferrals of degrees.\n These records are available to former students after registering through Granchester’s Alumni portal.\n Department for Education records, showing how certain demographic groups (such as first-generation\n students) could be expected, on average, to progress. These records do not contain names or\n\nidentification numbers.\n\nUnder their security policy, the University encrypts all of its personal data records in transit and at rest.\n\nIn order to improve his teaching, Frank wants to investigate how his engineering students perform in\n\nrelational to Department for Education expectations. He has attended one of Anna’s data protection\n\ntraining courses and knows that he should use no more personal data than necessary to accomplish his\ngoal. He creates a program that will only export some student data: previous schools attended, grades\n\noriginally obtained, grades currently obtained and first time university attended. He wants to keep the\nrecords at the individual student level. Mindful of Anna’s training, Frank runs the student numbers through\nan algorithm to transform them into different reference numbers. He uses the same algorithm on each\noccasion so that he can update each record over time.\n\nOne of Anna’s tasks is to complete the record of processing activities, as required by the GDPR. After\nreceiving her email reminder, as required by the GDPR. After receiving her email reminder, Frank informs\nAnna about his performance database.\n\nAnn explains to Frank that, as well as minimizing personal data, the University has to check that this new\nuse of existing data is permissible. She also suspects that, under the GDPR, a risk analysis may have to\nbe carried out before the data processing can take place. Anna arranges to discuss this further with Frank\nafter she has done some additional research.\n\nFrank wants to be able to work on his analysis in his spare time, so he transfers it to his home laptop\n(which is not encrypted). Unfortunately, when Frank takes the laptop into the University he loses it on the\ntrain. Frank has to see Anna that day to discuss compatible processing. He knows that he needs to report\nsecurity incidents, so he decides to tell Anna about his lost laptop at the same time.\n\nAnna will find that a risk analysis is NOT necessary in this situation as long as?",
    options: ["A. The data subjects are no longer current students of Frank’s", "B. The processing will not negatively affect the rights of the data subjects", "C. The algorithms that Frank uses for the processing are technologically sound", "D. The data subjects gave their unambiguous consent for the original processing"],
    correctAnswer: "B",
    explanation: "答案 B 为最佳选项，但更准确的法定门槛是“处理是否很可能造成高风险”，而不是笼统地看是否会产生任何不利影\n响。低风险或一般风险不触发 DPIA；高风险判断应结合第 35 条及监管机构清单。",
    topic: "GDPR",
    verified: "qualified"
  },
  {
    id: 9,
    question: "Which institution has the power to adopt findings that confirm the adequacy of the data protection level in a\nnon-EU country?",
    options: ["A. The European Parliament", "B. The European Commission", "C. The Article 29 Working Party", "D. The European Council"],
    correctAnswer: "B",
    explanation: "正确答案 B。根据 GDPR 第 45 条，认定第三国数据保护水平是否“充分”（adequacy decision）的权限属于\n欧盟委员会（在征询 EDPB 意见并经审查程序后作出）。欧洲议会、原第 29 条工作组（现为 EDPB，仅\n提供意见）及欧洲理事会均无权直接作出充分性认定。知识点：充分性认定机制（Adequacy Decision，第\n45 条）。",
    topic: "监管机构",
    verified: "accurate"
  },
  {
    id: 10,
    question: "What is true of both the General Data Protection Regulation (GDPR) and the Council of Europe\nConvention 108?",
    options: ["A. Both govern international transfers of personal data", "B. Both govern the manual processing of personal data", "C. Both only apply to European Union countries", "D. Both require notification of processing activities to a supervisory authority"],
    correctAnswer: "A",
    explanation: "正确答案 A。GDPR（第五章跨境数据传输规则）与 108 号公约（尤其经现代化后的 108+号公约）都建立\n了关于个人数据跨境传输的规则框架。B 错——108 号公约最初仅适用于自动化处理，而 GDPR 同时涵盖\n自动化处理和构成档案系统的人工处理，二者范围并不完全一致；C 错——108 号公约向非欧盟国家开放\n签署，并不限于欧盟国家；D 错——两者均未一律要求处理活动须向监管机构“通知”（GDPR 已取消一般\n性通知义务，改为处理活动记录制度）。知识点：GDPR 与 108 号公约的适用范围比较。",
    topic: "Convention 108/108+",
    verified: "accurate"
  },
  {
    id: 11,
    question: "Which aspect of the GDPR will likely have the most impact on the consistent implementation of data\nprotection laws throughout the European Union?",
    options: ["A. That it essentially functions as a one-stop shop mechanism", "B. That it takes the form of a Regulation as opposed to a Directive", "C. That it makes notification of large-scale data breaches mandatory", "D. That it makes appointment of a data protection officer mandatory"],
    correctAnswer: "B",
    explanation: "正确答案 B。GDPR 采取“条例”（Regulation）而非“指令”（Directive）的形式，原则上无需成员国转化即可直接适\n用，最直接地减少了原 95/46/EC 指令在各国转化时产生的文本与实施差异。A 所述一站式机制主要改善跨境案件的\n监管协作与执法一致性，也很重要，但题目问的是数据保护法律在全欧盟的一致实施，B 更切题。",
    topic: "历史沿革/95-46-EC",
    verified: "corrected"
  },
  {
    id: 12,
    question: "How is the retention of communications traffic data for law enforcement purposes addressed by European\ndata protection law?",
    options: ["A. The ePrivacy Directive allows individual EU member states to engage in such data retention.", "B. The ePrivacy Directive harmonizes EU member states’ rules concerning such data retention.", "C. The Data Retention Directive’s annulment makes such data retention now permissible.", "D. The GDPR allows the retention of such data for the prevention, investigation, detection or prosecution of criminal offences only."],
    correctAnswer: "A",
    explanation: "正确答案 A。ePrivacy Directive 2002/58/EC 第 15(1) 条允许成员国为国家安全、预防和侦查犯罪等目的，在必要、适\n当且成比例的范围内立法限制通信保密和删除义务，包括在有限期间留存流量或位置数据。该条提供的是成员国采\n取留存措施的授权及边界，并未建立统一的数据留存制度；CJEU 还对一般、无差别留存施加了严格限制。B、C、D\n均不准确。",
    topic: "ePrivacy指令",
    verified: "corrected"
  },
  {
    id: 13,
    question: "What type of data lies beyond the scope of the General Data Protection Regulation?",
    options: ["A. Pseudonymized", "B. Anonymized", "C. Encrypted", "D. Masked"],
    correctAnswer: "B",
    explanation: "正确答案 B。只有真正的匿名化数据——即不能通过任何合理可能的方式重新识别到特定个人——才不\n属于 GDPR 调整范围（详见前言第 26 条）。假名化、加密和掩码处理的数据由于理论上可借助密钥或额\n外信息重新识别，仍被视为“个人数据”，继续受 GDPR 约束。知识点：匿名化 vs 假名化/加密/掩码处\n理，及前言第 26 条关于个人数据可识别性判断标准。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 14,
    question: "Under what circumstances would the GDPR apply to personal data that exists in physical form, such as\ninformation contained in notebooks or hard copy files?",
    options: ["A. Only where the personal data is produced as a physical output of specific automated processing activities, such as printing, labelling, or stamping.", "B. Only where the personal data is to be subjected to specific computerized processing, such as image scanning or optical character recognition.", "C. Only where the personal data is treated by automated means in some way, such as computerized distribution or filing.", "D. Only where the personal data is handled in a sufficiently structured manner so as to form part of a filing system."],
    correctAnswer: "D",
    explanation: "正确答案 D。依据 GDPR 第 2(1)条及第 4(6)条“档案系统”（filing system）定义，纸质等非自动化处理的\n个人数据只有在按照特定标准结构化组织、构成或拟构成档案系统的一部分时，才落入 GDPR 的适用范\n围；单纯以自动化设备产出物理输出（A）、拟进行计算机化处理（B）或曾经过自动化处理（C）均不\n是判断标准。知识点：GDPR 对非自动化处理（人工档案）适用范围的界定。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 15,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nYou have just been hired by a toy manufacturer based in Hong Kong. The company sells a broad range of\ndolls, action figures and plush toys that can be found internationally in a wide variety of retail stores.\nAlthough the manufacturer has no offices outside Hong Kong and in fact does not employ any staff outside\nHong Kong, it has entered into a number of local distribution contracts. The toys produced by the company\ncan be found in all popular toy stores throughout Europe, the United States and Asia. A large portion of the\ncompany’s revenue is due to international sales.\n\nThe company now wishes to launch a new range of connected toys, ones that can talk and interact with\nchildren. The CEO of the company is touting these toys as the next big thing, due to the increased\npossibilities offered: The figures can answer children’s questions on various subjects, such as\nmathematical calculations or the weather. Each figure is equipped with a microphone and speaker and can\nconnect to any smartphone or tablet via Bluetooth. Any mobile device within a 10-meter radius can\nconnect to the toys via Bluetooth as well. The figures can also be associated with other figures (from the\nsame manufacturer) and interact with each other for an enhanced play experience.\n\nWhen a child asks the toy a question, the request is sent to the cloud for analysis, and the answer is\ngenerated on cloud servers and sent back to the figure. The answer is given through the figure’s integrated\nspeakers, making it appear as though that the toy is actually responding to the child’s question. The\npackaging of the toy does not provide technical details on how this works, nor does it mention that this\nfeature requires an internet connection. The necessary data processing for this has been outsourced to a\ndata center located in South Africa. However, your company has not yet revised its consumer-facing\nprivacy policy to indicate this.\n\nIn parallel, the company is planning to introduce a new range of game systems through which consumers\ncan play the characters they acquire in the course of playing the game. The system will come bundled with\na portal that includes a Near-Field Communications (NFC) reader. This device will read an RFID tag in the\naction figure, making the figure come to life onscreen. Each character has its own stock features and\nabilities, but it is also possible to earn additional ones by accomplishing game goals. The only information\nstored in the tag relates to the figures’ abilities. It is easy to switch characters during the game, and it is\npossible to bring the figure to locations outside of the home and have the character’s abilities remain\nintact.\n\nWhy is this company obligated to comply with the GDPR?",
    options: ["A. The company has offices in the EU.", "B. The company employs staff in the EU.", "C. The company’s data center is located in a country outside the EU.", "D. The company’s products are marketed directly to EU customers."],
    correctAnswer: "D",
    explanation: "正确答案 D。根据 GDPR 第 3(2)(a)条域外适用规则，即便控制者/处理者未在欧盟设立机构，只要其向欧\n盟数据主体提供商品或服务（包括通过分销渠道将产品营销至欧盟市场），即需遵守 GDPR。该玩具公\n司在香港，无欧盟机构、员工（排除 A、B），数据中心在南非本身也不是触发 GDPR 的理由（排除 C，\n位置只涉及跨境传输问题），而其产品直接面向欧盟市场销售才是触发域外效力的关键。知识点：第 3\n条域外适用性——设立地标准 vs 目标指向标准（targeting criterion）。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 16,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nYou have just been hired by a toy manufacturer based in Hong Kong. The company sells a broad range of\ndolls, action figures and plush toys that can be found internationally in a wide variety of retail stores.\nAlthough the manufacturer has no offices outside Hong Kong and in fact does not employ any staff outside\nHong Kong, it has entered into a number of local distribution contracts. The toys produced by the company\ncan be found in all popular toy stores throughout Europe, the United States and Asia. A large portion of the\ncompany’s revenue is due to international sales.\n\nThe company now wishes to launch a new range of connected toys, ones that can talk and interact with\nchildren. The CEO of the company is touting these toys as the next big thing, due to the increased\npossibilities offered: The figures can answer children’s questions on various subjects, such as\nmathematical calculations or the weather. Each figure is equipped with a microphone and speaker and can\nconnect to any smartphone or tablet via Bluetooth. Any mobile device within a 10-meter radius can\nconnect to the toys via Bluetooth as well. The figures can also be associated with other figures (from the\nsame manufacturer) and interact with each other for an enhanced play experience.\n\nWhen a child asks the toy a question, the request is sent to the cloud for analysis, and the answer is\ngenerated on cloud servers and sent back to the figure. The answer is given through the figure’s integrated\nspeakers, making it appear as though that the toy is actually responding to the child’s question. The\npackaging of the toy does not provide technical details on how this works, nor does it mention that this\nfeature requires an internet connection. The necessary data processing for this has been outsourced to a\ndata center located in South Africa. However, your company has not yet revised its consumer-facing\nprivacy policy to indicate this.\n\nIn parallel, the company is planning to introduce a new range of game systems through which consumers\ncan play the characters they acquire in the course of playing the game. The system will come bundled with\na portal that includes a Near-Field Communications (NFC) reader. This device will read an RFID tag in the\naction figure, making the figure come to life onscreen. Each character has its own stock features and\n\nabilities, but it is also possible to earn additional ones by accomplishing game goals. The only information\nstored in the tag relates to the figures’ abilities. It is easy to switch characters during the game, and it is\npossible to bring the figure to locations outside of the home and have the character’s abilities remain\nintact.\n\nWhat presents the BIGGEST potential privacy issue with the company’s practices?",
    options: ["A. The NFC portal can read any data stored in the action figures", "B. The information about the data processing involved has not been specified", "C. The cloud service provider is in a country that has not been deemed adequate", "D. The RFID tag in the action figures has the potential for misuse because of the toy’s evolving capabilities"],
    correctAnswer: "B",
    explanation: "正确答案 B。该联网玩具将儿童问题上传云端处理、依赖境外数据中心，但产品包装及隐私政策均未说\n明这些处理细节及依赖网络连接的事实，违反第 13/14 条透明度原则和以清晰易懂方式告知处理信息的要\n求，这是对儿童这类弱势数据主体而言最大的隐私风险点。相比之下，NFC 读取标签内容有限（A）、数\n据中心所在国是否获充分性认定（C）、RFID 标签滥用可能性（D）都是相对次要或未被证实的风险。知\n识点：透明度原则（第 12-14 条）及对儿童数据的特别关注（前言第 38 条）。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 17,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nYou have just been hired by a toy manufacturer based in Hong Kong. The company sells a broad range of\ndolls, action figures and plush toys that can be found internationally in a wide variety of retail stores.\nAlthough the manufacturer has no offices outside Hong Kong and in fact does not employ any staff outside\nHong Kong, it has entered into a number of local distribution contracts. The toys produced by the company\n\ncan be found in all popular toy stores throughout Europe, the United States and Asia. A large portion of the\n\ncompany’s revenue is due to international sales.\n\nThe company now wishes to launch a new range of connected toys, ones that can talk and interact with\n\nchildren. The CEO of the company is touting these toys as the next big thing, due to the increased\n\npossibilities offered: The figures can answer children’s questions on various subjects, such as\nmathematical calculations or the weather. Each figure is equipped with a microphone and speaker and can\n\nconnect to any smartphone or tablet via Bluetooth. Any mobile device within a 10-meter radius can\nconnect to the toys via Bluetooth as well. The figures can also be associated with other figures (from the\nsame manufacturer) and interact with each other for an enhanced play experience.\n\nWhen a child asks the toy a question, the request is sent to the cloud for analysis, and the answer is\ngenerated on cloud servers and sent back to the figure. The answer is given through the figure’s integrated\nspeakers, making it appear as though that the toy is actually responding to the child’s question. The\npackaging of the toy does not provide technical details on how this works, nor does it mention that this\nfeature requires an internet connection. The necessary data processing for this has been outsourced to a\ndata center located in South Africa. However, your company has not yet revised its consumer-facing\nprivacy policy to indicate this.\n\nIn parallel, the company is planning to introduce a new range of game systems through which consumers\ncan play the characters they acquire in the course of playing the game. The system will come bundled with\na portal that includes a Near-Field Communications (NFC) reader. This device will read an RFID tag in the\naction figure, making the figure come to life onscreen. Each character has its own stock features and\nabilities, but it is also possible to earn additional ones by accomplishing game goals. The only information\nstored in the tag relates to the figures’ abilities. It is easy to switch characters during the game, and it is\n\npossible to bring the figure to locations outside of the home and have the character’s abilities remain\nintact.\n\nTo ensure GDPR compliance, what should be the company’s position on the issue of consent?",
    options: ["A. The child, as the user of the action figure, can provide consent himself, as long as no information is shared for marketing purposes.", "B. Written authorization attesting to the responsible use of children’s data would need to be obtained from the supervisory authority.", "C. Consent for data collection is implied through the parent’s purchase of the action figure for the child.", "D. Parental consent for a child’s use of the action figures would have to be obtained before any data could be collected."],
    correctAnswer: "D",
    explanation: "答案 D 仅在公司以“同意”作为向儿童直接提供信息社会服务的处理依据、且儿童低于相关成员国数字同意年龄时成\n立。GDPR 第 8 条并不意味着所有儿童数据在任何合法依据下都必须先取得家长同意，“before any data could be\ncollected”的表述过于绝对。",
    topic: "GDPR",
    verified: "qualified"
  },
  {
    id: 18,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nYou have just been hired by a toy manufacturer based in Hong Kong. The company sells a broad range of\ndolls, action figures and plush toys that can be found internationally in a wide variety of retail stores.\nAlthough the manufacturer has no offices outside Hong Kong and in fact does not employ any staff outside\nHong Kong, it has entered into a number of local distribution contracts. The toys produced by the company\ncan be found in all popular toy stores throughout Europe, the United States and Asia. A large portion of the\ncompany’s revenue is due to international sales.\n\nThe company now wishes to launch a new range of connected toys, ones that can talk and interact with\nchildren. The CEO of the company is touting these toys as the next big thing, due to the increased\npossibilities offered: The figures can answer children’s questions on various subjects, such as\nmathematical calculations or the weather. Each figure is equipped with a microphone and speaker and can\nconnect to any smartphone or tablet via Bluetooth. Any mobile device within a 10-meter radius can\nconnect to the toys via Bluetooth as well. The figures can also be associated with other figures (from the\n\nsame manufacturer) and interact with each other for an enhanced play experience.\n\nWhen a child asks the toy a question, the request is sent to the cloud for analysis, and the answer is\n\ngenerated on cloud servers and sent back to the figure. The answer is given through the figure’s integrated\nspeakers, making it appear as though that the toy is actually responding to the child’s question. The\n\npackaging of the toy does not provide technical details on how this works, nor does it mention that this\n\nfeature requires an internet connection. The necessary data processing for this has been outsourced to a\ndata center located in South Africa. However, your company has not yet revised its consumer-facing\nprivacy policy to indicate this.\n\nIn parallel, the company is planning to introduce a new range of game systems through which consumers\ncan play the characters they acquire in the course of playing the game. The system will come bundled with\na portal that includes a Near-Field Communications (NFC) reader. This device will read an RFID tag in the\naction figure, making the figure come to life onscreen. Each character has its own stock features and\nabilities, but it is also possible to earn additional ones by accomplishing game goals. The only information\nstored in the tag relates to the figures’ abilities. It is easy to switch characters during the game, and it is\npossible to bring the figure to locations outside of the home and have the character’s abilities remain\nintact.\n\nIn light of the requirements of Article 32 of the GDPR (related to the Security of Processing), which practice\nshould the company institute?",
    options: ["A. Encrypt the data in transit over the wireless Bluetooth connection.", "B. Include dual-factor authentication before each use by a child in order to ensure a minimum amount of security.", "C. Include three-factor authentication before each use by a child in order to ensure the best level of security possible.", "D. Insert contractual clauses into the contract between the toy manufacturer and the cloud service provider, since South Africa is outside the European Union."],
    correctAnswer: "A",
    explanation: "正确答案 A。第 32 条安全处理要求中明确将加密列为适当技术措施的示例（第 32(1)(a)条）。鉴于玩具\n通过蓝牙与移动设备通信，且任意 10 米内设备均可连接，存在被截获的风险，对传输中的数据加密是最\n直接对应的安全措施。双因素/三因素认证（B、C）对儿童玩具场景并不现实也非第 32 条例举措施，标\n准合同条款（D）解决的是第五章跨境传输合法性问题，与第 32 条安全要求无关。知识点：第 32 条处理\n安全的技术与组织措施示例。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 19,
    question: "Which of the following would most likely NOT be covered by the definition of “personal data” under the\nGDPR?",
    options: ["A. The payment card number of a Dutch citizen", "B. The U.S. social security number of an American citizen living in France", "C. The unlinked aggregated data used for statistical purposes by an Italian company", "D. The identification number of a German candidate for a professional examination in Germany"],
    correctAnswer: "C",
    explanation: "正确答案 C。经过匿名化处理、用于统计目的且无法关联回具体个人的“非关联聚合数据”不构成 GDPR\n项下的个人数据（参见前言第 26 条判断标准）。A、B、D 虽然分别涉及非欧盟公民或专业考试编号，但\n只要能够识别或关联到特定自然人，无论国籍或数据主体地理位置如何，都属于个人数据——GDPR 对\n“个人数据”的定义并不以数据主体的国籍为前提条件。知识点：个人数据定义的属地/属人范围与匿名化\n数据的排除。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 20,
    question: "Which of the following would MOST likely trigger the extraterritorial effect of the GDPR, as specified by\nArticle 3?",
    options: ["A. The behavior of suspected terrorists being monitored by EU law enforcement bodies.", "B. Personal data of EU citizens being processed by a controller or processor based outside the EU.", "C. The behavior of EU citizens outside the EU being monitored by non-EU law enforcement bodies.", "D. Personal data of EU residents being processed by a non-EU business that targets EU customers."],
    correctAnswer: "D",
    explanation: "正确答案 D。第 3(2)条域外效力包含两类触发情形：(a)向欧盟数据主体提供商品或服务，(b)监测欧盟境\n内数据主体的行为。非欧盟企业主动以营销等方式定向欧盟客户即落入(a)项。B 表述过于宽泛——单纯\n“数据在欧盟境外被处理”并不必然触发第 3(2)条，还需存在“指向欧盟”的定向行为；A、C 涉及执法机构\n的监控活动，通常由《执法指令》（Law Enforcement Directive）而非 GDPR 调整。知识点：第 3 条域外\n适用性的两种触发路径（目标指向标准与行为监测标准）。",
    topic: "LED执法指令",
    verified: "accurate"
  },
  {
    id: 21,
    question: "How does the GDPR now define “processing”?",
    options: ["A. Any act involving the collecting and recording of personal data.", "B. Any operation or set of operations performed on personal data or on sets of personal data.", "C. Any use or disclosure of personal data compatible with the purpose for which the data was collected.", "D. Any operation or set of operations performed by automated means on personal data or on sets of personal data."],
    correctAnswer: "B",
    explanation: "正确答案 B。GDPR 第 4(2)条将“处理”定义为对个人数据或个人数据集所进行的任何操作或一系列操作\n（无论是否自动化），涵盖收集、记录、组织、存储、使用、披露、删除等各环节。A（仅收集记录）范\n围过窄；C 混淆了“兼容处理”概念；D 遗漏了对“非自动化但构成档案系统”处理方式的涵盖（旧指令\n95/46/EC 才强调自动化处理，GDPR 的定义更广）。知识点：第 4(2)条“处理”的定义。",
    topic: "历史沿革/95-46-EC",
    verified: "accurate"
  },
  {
    id: 22,
    question: "What is the consequence if a processor makes an independent decision regarding the purposes and\nmeans of processing it carries out on behalf of a controller?",
    options: ["A. The controller will be liable to pay an administrative fine", "B. The processor will be liable to pay compensation to affected data subjects", "C. The processor will be considered to be a controller in respect of the processing concerned", "D. The controller will be required to demonstrate that the unauthorized processing negatively affected one or more of the parties involved"],
    correctAnswer: "C",
    explanation: "正确答案 C。根据第 28 条及问责制原则，处理者一旦超出控制者指示、自行决定处理的目的和方式，就\n在该部分处理活动中被视为（事实上的）控制者，须独立承担控制者的合规义务和责任。A、B、D 均描\n述 了 可 能 的 后 果 ， 但 并 非 GDPR 明 确 规 定 的 直 接 法 律 定 性 结 果 。 知 识 点 ： 处 理 者 转 变 为 控 制 者\n（“controller in disguise”）的认定标准，第 28 条委托处理协议。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 23,
    question: "According to the GDPR, how is pseudonymous personal data defined?",
    options: ["A. Data that can no longer be attributed to a specific data subject without the use of additional information kept separately.", "B. Data that can no longer be attributed to a specific data subject, with no possibility of re-identifying the data.", "C. Data that has been rendered anonymous in such a manner that the data subject is no longer identifiable.", "D. Data that has been encrypted or is subject to other technical safeguards."],
    correctAnswer: "A",
    explanation: "正确答案 A。第 4(5)条对“假名化”的定义是：个人数据在不借助另外保存的补充信息的情况下，不能再归\n属于特定数据主体，且该补充信息须单独保存并采取技术组织措施确保不能被重新关联。B、C 描述的其\n实是“匿名化”（不可再识别、无法复原），D 仅是加密等技术保护措施的泛泛描述，并非假名化的法定定\n义。知识点：假名化与匿名化的法律定义区别（第 4(5)条、前言第 26、29 条）。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 24,
    question: "Under which of the following conditions does the General Data Protection Regulation NOT apply to the\nprocessing of personal data?",
    options: ["A. When the personal data is processed only in non-electronic form", "B. When the personal data is collected and then pseudonymised by the controller", "C. When the personal data is held by the controller but not processed for further purposes", "D. When the personal data is processed by an individual only for their household activities"],
    correctAnswer: "D",
    explanation: "正确答案 D。第 2(2)(c)条明确将“自然人纯粹为个人或家庭事务从事的处理活动”排除在 GDPR 适用范围\n之外（家庭例外，household exemption）。A（非电子形式处理）只要构成档案系统仍受 GDPR 约束；B\n（假名化后的数据）依然是个人数据；C（收集后未进一步处理）本身也已构成“处理”的一环（收集本身\n即为处理行为），并不能因此豁免。知识点：第 2 条 GDPR 适用范围的例外情形——家庭活动豁免。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 25,
    question: "According to the E-Commerce Directive 2000/31/EC, where is the place of “establishment” for a company\nproviding services via an Internet website confirmed by the GDPR?",
    options: ["A. Where the technology supporting the website is located", "B. Where the website is accessed", "C. Where the decisions about processing are made", "D. Where the customer’s Internet service provider is located"],
    correctAnswer: "C",
    explanation: "答案 C 是四项中最接近的选项，但“设立地”取决于通过稳定安排开展真实、有效活动的地点，不能机械地等同于某\n一次数据处理决策的作出地。服务器位置、网站访问地或客户 ISP 所在地通常都不是决定性因素。",
    topic: "GDPR",
    verified: "qualified"
  },
  {
    id: 26,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nLouis, a long-time customer of Bedrock Insurance, was involved in a minor car accident a few months ago.\nAlthough no one was hurt, Louis has been plagued by texts and calls from a company called Accidentable\noffering to help him recover compensation for personal injury. Louis has heard about insurance companies\nselling customers’ data to third parties, and he’s convinced that Accidentable must have gotten his\n\ninformation from Bedrock Insurance.\n\nLouis has also been receiving an increased amount of marketing information from Bedrock, trying to sell\nhim their full range of their insurance policies.\n\nPerturbed by this, Louis has started looking at price comparison sites on the internet and has been\nshocked to find that other insurers offer much cheaper rates than Bedrock, even though he has been a\nloyal customer for many years. When his Bedrock policy comes up for renewal, he decides to switch to\nZantrum Insurance.\n\nIn order to activate his new insurance policy, Louis needs to supply Zantrum with information about his No\nClaims bonus, his vehicle and his driving history. After researching his rights under the GDPR, he writes to\nask Bedrock to transfer his information directly to Zantrum. He also takes this opportunity to ask Bedrock\nto stop using his personal data for marketing purposes.\n\nBedrock supplies Louis with a PDF and XML (Extensible Markup Language) versions of his No Claims\nCertificate, but tells Louis it cannot transfer his data directly to Zantrum as this is not technically feasible.\nBedrock also explains that Louis’s contract included a provision whereby Louis agreed that his data could\nbe used for marketing purposes; according to Bedrock, it is too late for Louis to change his mind about\nthis. It angers Louis when he recalls the wording of the contract, which was filled with legal jargon and very\nconfusing.\n\nIn the meantime, Louis is still receiving unwanted calls from Accidentable Insurance. He writes to\nAccidentable to ask for the name of the organization that supplied his details to them. He warns\nAccidentable that he plans to complain to the data protection authority, because he thinks their company\nhas been using his data unlawfully. His letter states that he does not want his data being used by them in\nany way.\n\nAccidentable’s response letter confirms Louis’s suspicions. Accidentable is Bedrock Insurance’s wholly\n\nowned subsidiary, and they received information about Louis’s accident from Bedrock shortly after Louis\n\nsubmitted his accident claim. Accidentable assures Louis that there has been no breach of the GDPR, as\nLouis’s contract included, a provision in which he agreed to share his information with Bedrock’s affiliates\n\nfor business purposes.\n\nLouis is disgusted by the way in which he has been treated by Bedrock, and writes to them insisting that all\n\nhis information be erased from their computer system. 6\nWhich statement accurately summarizes Bedrock’s obligation in regard to Louis’s data portability request?",
    options: ["A. Bedrock does not have a duty to transfer Louis’s data to Zantrum if doing so is legitimately not technically feasible.", "B. Bedrock does not have to transfer Louis’s data to Zantrum because the right to data portability does not apply where personal data are processed in order to carry out tasks in the public interest.", "C. Bedrock has failed to comply with the duty to transfer Louis’s data to Zantrum because the duty applies wherever personal data are processed by automated means and necessary for the performance of a contract with the customer.", "D. Bedrock has failed to comply with the duty to transfer Louis’s data to Zantrum because it has an obligation to develop commonly used, machine-readable and interoperable formats so that all customer data can be ported to other insurers on request."],
    correctAnswer: "A",
    explanation: "正确答案 A。数据可携权（第 20 条）仅要求控制者以结构化、常用、机器可读格式提供数据，并在“技术\n上可行”的情况下实现控制者之间的直接传输；若直接传输在技术上确实不可行，Bedrock 没有强制实现\n直接传输的义务（已提供 PDF/XML 格式部分履行了可携权）。B 错——可携权的例外是处理基于公共利\n益任务或官方权力，而非本案的合同/同意基础；C 表述过于绝对，混淆了“提供数据”与“直接传输给另一\n控制者”两个层次的义务；D 并无要求控制者须为全行业开发统一互操作格式的强制性法律义务。知识\n点：第 20 条数据可携权的范围及“技术可行性”限制。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 27,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nLouis, a long-time customer of Bedrock Insurance, was involved in a minor car accident a few months ago.\nAlthough no one was hurt, Louis has been plagued by texts and calls from a company called Accidentable\n\noffering to help him recover compensation for personal injury. Louis has heard about insurance companies\nselling customers’ data to third parties, and he’s convinced that Accidentable must have gotten his\ninformation from Bedrock Insurance.\n\nLouis has also been receiving an increased amount of marketing information from Bedrock, trying to sell\nhim their full range of their insurance policies.\n\nPerturbed by this, Louis has started looking at price comparison sites on the internet and has been\n\nshocked to find that other insurers offer much cheaper rates than Bedrock, even though he has been a\nloyal customer for many years. When his Bedrock policy comes up for renewal, he decides to switch to\nZantrum Insurance.\n\nIn order to activate his new insurance policy, Louis needs to supply Zantrum with information about his No\nClaims bonus, his vehicle and his driving history. After researching his rights under the GDPR, he writes to\nask Bedrock to transfer his information directly to Zantrum. He also takes this opportunity to ask Bedrock\nto stop using his personal data for marketing purposes.\n\nBedrock supplies Louis with a PDF and XML (Extensible Markup Language) versions of his No Claims\nCertificate, but tells Louis it cannot transfer his data directly to Zantrum as this is not technically feasible.\nBedrock also explains that Louis’s contract included a provision whereby Louis agreed that his data could\nbe used for marketing purposes; according to Bedrock, it is too late for Louis to change his mind about\nthis. It angers Louis when he recalls the wording of the contract, which was filled with legal jargon and very\nconfusing.\n\nIn the meantime, Louis is still receiving unwanted calls from Accidentable Insurance. He writes to\nAccidentable to ask for the name of the organization that supplied his details to them. He warns\nAccidentable that he plans to complain to the data protection authority, because he thinks their company\nhas been using his data unlawfully. His letter states that he does not want his data being used by them in\nany way.\n\nAccidentable’s response letter confirms Louis’s suspicions. Accidentable is Bedrock Insurance’s wholly\nowned subsidiary, and they received information about Louis’s accident from Bedrock shortly after Louis\n\nsubmitted his accident claim. Accidentable assures Louis that there has been no breach of the GDPR, as\nLouis’s contract included, a provision in which he agreed to share his information with Bedrock’s affiliates\nfor business purposes.\n\nLouis is disgusted by the way in which he has been treated by Bedrock, and writes to them insisting that all\nhis information be erased from their computer system.\n\nAfter Louis has exercised his right to restrict the use of his data, under what conditions would Accidentable\nhave grounds for refusing to comply?",
    options: ["A. If Accidentable is entitled to use of the data as an affiliate of Bedrock.", "B. If Accidentable also uses the data to conduct public health research.", "C. If the data becomes necessary to defend Accidentable’s legal rights.", "D. If the accuracy of the data is not an aspect that Louis is disputing."],
    correctAnswer: "C",
    explanation: "正确答案 C。第 18 条限制处理权及第 17 条被遗忘权的例外情形之一是：处理是为了行使或抗辩法律权利\n主张（establishment, exercise or defence of legal claims）所必需。因此若数据对 Accidentable 抗辩自身法律\n权利属必要，可以拒绝停止使用该数据。A（关联公司身份）本身不构成拒绝理由，作为 Bedrock 子公司\n仍须独立遵守 GDPR；B（公共卫生研究）与本案无关；D 与限制处理权的触发条件（数据准确性存疑）\n是另一独立情形，与“能否拒绝”无关。知识点：第 17-18 条被遗忘权/限制处理权的法定例外——法律主\n张的确立、行使或抗辩。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 28,
    question: "Under the GDPR, who would be LEAST likely to be allowed to engage in the collection, use, and\ndisclosure of a data subject’s sensitive medical information without the data subject’s knowledge or\nconsent?",
    options: ["A. A member of the judiciary involved in adjudicating a legal dispute involving the data subject and concerning the health of the data subject.", "B. A public authority responsible for public health, where the sharing of such information is considered necessary for the protection of the general populace.", "C. A health professional involved in the medical care for the data subject, where the data subject’s life hinges on the timely dissemination of such information.", "D. A journalist writing an article relating to the medical condition in question, who believes that the publication of such information is in the public interest."],
    correctAnswer: "D",
    explanation: "正确答案 D。第 9(2)条列举了处理特殊类别数据（如健康数据）无需同意即可处理的法定情形：司法程序\n中确立、行使或抗辩法律权利（A）、公共卫生领域重大公共利益（B）、维护数据主体或他人生命攸关\n利益的医疗紧急情况（C）等均在列。而记者基于“公共利益”自行发表他人医疗状况报道，须依赖单独的\n新闻自由/表达自由例外条款（第 85 条，由各成员国国内法具体落实且通常仍须满足严格比例原则），并\n非当然可未经同意披露，因此 D 是最不可能被允许、限制最严的情形。知识点：第 9 条特殊类别数据处\n理的法定例外情形，第 85 条新闻自由与数据保护的平衡。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 29,
    question: "With the issue of consent, the GDPR allows member states some choice regarding what?",
    options: ["A. The mechanisms through which consent may be communicated", "B. The circumstances in which silence or inactivity may constitute consent", "C. The age at which children must be required to obtain parental consent", "D. The timeframe in which data subjects are allowed to withdraw their consent"],
    correctAnswer: "C",
    explanation: "正确答案 C。GDPR 在多处保留“开放条款”（opening clause）允许成员国自行立法补充，其中关于儿童同\n意年龄（第 8 条，13-16 岁区间由各成员国自行确定）是典型例子。同意的沟通方式、默示同意的可能性\n（GDPR 明确排除沉默/不作为构成同意）以及撤回同意的时限，均由 GDPR 统一规定，不留给成员国自\n由裁量空间。知识点：GDPR 中的成员国“开放条款”（Opening Clauses），儿童同意年龄的弹性规定（第\n8 条）。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 30,
    question: "Which sentence BEST summarizes the concepts of “fairness,” “lawfulness” and “transparency”, as\n\nexpressly required by Article 5 of the GDPR?",
    options: ["A. Fairness and transparency refer to the communication of key information before collecting data; lawfulness refers to compliance with government regulations.", "B. Fairness refers to limiting the amount of data collected from individuals; lawfulness refers to the approval of company guidelines by the state; transparency solely relates to communication of key information before collecting data.", "C. Fairness refers to the security of personal data; lawfulness and transparency refers to the analysis of ordinances to ensure they are uniformly enforced.", "D. Fairness refers to the collection of data from diverse subjects; lawfulness refers to the need for legal rules to be uniform; transparency refers to giving individuals access to their data."],
    correctAnswer: "A",
    explanation: "正确答案 A。第 5(1)(a)条“合法、公正、透明”原则中，“公正”和“透明”共同要求控制者在收集数据前以清\n晰易懂的方式向数据主体传达关键处理信息（呼应第 12-14 条透明度义务），“合法”则指处理须具备第 6\n条规定的合法依据并符合适用法律法规。B、C、D 均对三个概念作出了错误或过窄的解读（如将公正等\n同于“限制收集量”，将合法等同于“国家批准公司准则”等）。知识点：第 5(1)(a)条合法、公正、透明原则\n的内涵区分。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 31,
    question: "Article 5(1)(b) of the GDPR states that personal data must be “collected for specified, explicit and\nlegitimate purposes and not further processed in a way incompatible with those purposes.” Based on\nArticle 5(1)(b), what is the impact of a member state’s interpretation of the word “incompatible”?",
    options: ["A. It dictates the level of security a processor must follow when using and storing personal data for two different purposes.", "B. It guides the courts on the severity of the consequences for those who are convicted of the intentional misuse of personal data.", "C. It sets the standard for the level of detail a controller must record when documenting the purpose for collecting personal data.", "D. It indicates the degree of flexibility a controller has in using personal data in ways that may vary from its original intended purpose."],
    correctAnswer: "D",
    explanation: "正确答案 D。“不兼容”（incompatible）的判断标准直接决定了控制者能在多大程度上将已收集数据用于\n原始目的之外的用途（即目的限制原则下“兼容处理”的弹性空间），第 6(4)条列出了判断兼容性需考量的\n因素（如原始与新目的的关联性、收集情境、数据性质、可能后果、是否有保障措施等）。A、B、C 分\n别涉及安全标准、量刑、记录细节要求，均非“不兼容”概念本身所规范的内容。知识点：第 5(1)(b)目的\n限制原则与第 6(4)条兼容性处理测试。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 32,
    question: "Tanya is the Data Protection Officer for Curtains Inc., a GDPR data controller. She has recommended that\nthe company encrypt all personal data at rest. Which GDPR principle is she following?",
    options: ["A. Accuracy", "B. Storage Limitation", "C. Integrity and confidentiality", "D. Lawfulness, fairness and transparency"],
    correctAnswer: "C",
    explanation: "正确答案 C。对静态存储数据加密属于保护数据机密性和完整性、防止未经授权访问或篡改的技术措\n施，直接对应第 5(1)(f)条“完整性与保密性”原则（同时也呼应第 32 条安全处理要求）。准确性原则针对\n数据正确与否，存储限制原则针对保留期限，合法公正透明原则针对处理依据与告知义务，均与加密静\n态数据的目的不符。知识点：第 5(1)(f)条完整性与保密性原则（安全原则）。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 33,
    question: "A well-known video production company, based in Spain but specializing in documentaries filmed\nworldwide, has just finished recording several hours of footage featuring senior citizens in the streets of\nMadrid. Under what condition would the company NOT be required to obtain the consent of everyone\nwhose image they use for their documentary?",
    options: ["A. If obtaining consent is deemed to involve disproportionate effort.", "B. If obtaining consent is deemed voluntary by local legislation.", "C. If the company limits the footage to data subjects solely of legal age.", "D. If the company’s status as a documentary provider allows it to claim legitimate interest."],
    correctAnswer: "D",
    explanation: "正确答案 D。在街头拍摄纪录片这类新闻/文艺创作活动中，制作公司可依据第 6(1)(f)条“合法利益”作为\n处理依据（尤其结合第 85 条对新闻/艺术/文学表达的特别平衡条款），从而在特定情况下无需逐一取得\n路人同意。A（获得同意成本过高）本身不是 GDPR 列明的独立合法依据；B（当地法律认定同意为自\n愿）表述含混，不构成豁免理由；C（仅限拍摄成年人）与是否需要同意无直接因果关系。知识点：第\n6(1)(f)条合法利益作为处理依据，第 85 条表达自由与数据保护的平衡。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 34,
    question: "A Spanish electricity customer calls her local supplier with questions about the company’s upcoming\nmerger. Specifically, the customer wants to know the recipients to whom her personal data will be\ndisclosed once the merger is final. According to Article 13 of the GDPR, what must the company do before\nproviding the customer with the requested information?",
    options: ["A. Verify that the request is applicable to the data collected before the GDPR entered into force.", "B. Verify that the purpose of the request from the customer is in line with the GDPR.", "C. Verify that the personal data has not already been sent to the customer.", "D. Verify that the identity of the customer can be proven by other means."],
    correctAnswer: "D",
    explanation: "答案 D 只能在控制者对请求人身份存在合理怀疑时适用。GDPR 第 12(6) 条允许此时要求额外信息核实身份，但并\n不要求控制者在每一次信息请求前都进行额外身份验证。",
    topic: "GDPR",
    verified: "qualified"
  },
  {
    id: 35,
    question: "Under the GDPR, where personal data is not obtained directly from the data subject, a controller is exempt\nfrom directly providing information about processing to the data subject if?",
    options: ["A. The data subject already has information regarding how his data will be used", "B. The provision of such information to the data subject would be too problematic", "C. Third-party data would be disclosed by providing such information to the data subject", "D. The processing of the data subject’s data is protected by appropriate technical measures"],
    correctAnswer: "A",
    explanation: "正确答案 A。第 14(5)(a)条规定，若数据主体已经掌握相关处理信息，控制者无需就非直接从数据主体处\n获取的数据重复履行第 14 条告知义务。B（告知过于麻烦）、C（涉及第三方信息）、D（已采取技术保\n护措施）均不是第 14(5)条列明的豁免情形（第 14(5)条实际的其他例外包括：告知不可能或需付出不成比\n例的努力、法律明确规定获取或披露、数据须保密等，但“麻烦”或“已加密”本身不构成独立豁免理由）。\n知识点：第 14(5)条间接获取数据时告知义务的例外情形。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 36,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nDue to rapidly expanding workforce, Company A has decided to outsource its payroll function to Company\nB. Company B is an established payroll service provider with a sizable client base and a solid reputation in\nthe industry.\n\nCompany B’s payroll solution for Company A relies on the collection of time and attendance data obtained\nvia a biometric entry system installed in each of Company A’s factories. Company B won’t hold any\nbiometric data itself, but the related data will be uploaded to Company B’s UK servers and used to provide\nthe payroll service. Company B’s live systems will contain the following information for each of Company\nA’s employees:\n Name\n Address\n Date of Birth\n Payroll number\n\nNational Insurance number\nSick pay entitlement\n\nMaternity/paternity pay entitlement\n\nHoliday entitlement\nPension and benefits contributions\n\nTrade union contributions\n\nJenny is the compliance officer at Company A. She first considers whether Company A needs to carry out\na data protection impact assessment in relation to the new time and attendance system, but isn’t sure\nwhether or not this is required.\n\nJenny does know, however, that under the GDPR there must be a formal written agreement requiring\nCompany B to use the time and attendance data only for the purpose of providing the payroll service, and\nto apply appropriate technical and organizational security measures for safeguarding the data. Jenny\nsuggests that Company B obtain advice from its data protection officer. The company doesn’t have a DPO\nbut agrees, in the interest of finalizing the contract, to sign up for the provisions in full. Company A enters\ninto the contract.\n\nWeeks later, while still under contract with Company A, Company B embarks upon a separate project\nmeant to enhance the functionality of its payroll service, and engages Company C to help. Company C\nagrees to extract all personal data from Company B’s live systems in order to create a new database for\nCompany B. This database will be stored in a test environment hosted on Company C’s U.S. server. The\ntwo companies agree not to include any data processing provisions in their services agreement, as data is\nonly being used for IT testing purposes.\n\nUnfortunately, Company C’s U.S. server is only protected by an outdated IT security system, and suffers a\ncyber security incident soon after Company C begins work on the project. As a result, data relating to\nCompany A’s employees is visible to anyone visiting Company C’s website. Company A is unaware of this\nuntil Jenny receives a letter from the supervisory authority in connection with the investigation that ensues.\nAs soon as Jenny is made aware of the breach, she notifies all affected employees.\n\nUnder the GDPR, which of Company B’s actions would NOT be likely to trigger a potential enforcement\naction?",
    options: ["A. Their omission of data protection provisions in their contract with Company C.", "B. Their failure to provide sufficient security safeguards to Company A’s data.", "C. Their engagement of Company C to improve their payroll service.", "D. Their decision to operate without a data protection officer."],
    correctAnswer: "C",
    explanation: "正确答案 C。企业将业务外包给第三方（Company C）以提升服务功能本身是正常商业行为，并不违反\nGDPR；真正触发执法风险的是随之而来的合规缺失：未签订数据处理协议（A，违反第 28 条书面协议要\n求）、未提供充分安全保障导致数据泄露（B，违反第 28/32 条）、未设立 DPO（D，若符合第 37 条强制\n设 DPO 情形则构成违规）。知识点：第 28 条委托处理协议的强制要素，合规行为与违规诱因的区分。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 37,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nDue to rapidly expanding workforce, Company A has decided to outsource its payroll function to Company\nB. Company B is an established payroll service provider with a sizable client base and a solid reputation in\nthe industry.\n\nCompany B’s payroll solution for Company A relies on the collection of time and attendance data obtained\nvia a biometric entry system installed in each of Company A’s factories. Company B won’t hold any\nbiometric data itself, but the related data will be uploaded to Company B’s UK servers and used to provide\nthe payroll service. Company B’s live systems will contain the following information for each of Company\nA’s employees:\n Name\n Address\n Date of Birth\n Payroll number\n\nNational Insurance number\nSick pay entitlement\n\nMaternity/paternity pay entitlement\n\nHoliday entitlement\nPension and benefits contributions\n\nTrade union contributions\n\nJenny is the compliance officer at Company A. She first considers whether Company A needs to carry out\na data protection impact assessment in relation to the new time and attendance system, but isn’t sure\nwhether or not this is required.\n\nJenny does know, however, that under the GDPR there must be a formal written agreement requiring\nCompany B to use the time and attendance data only for the purpose of providing the payroll service, and\nto apply appropriate technical and organizational security measures for safeguarding the data. Jenny\nsuggests that Company B obtain advice from its data protection officer. The company doesn’t have a DPO\nbut agrees, in the interest of finalizing the contract, to sign up for the provisions in full. Company A enters\ninto the contract.\n\nWeeks later, while still under contract with Company A, Company B embarks upon a separate project\nmeant to enhance the functionality of its payroll service, and engages Company C to help. Company C\nagrees to extract all personal data from Company B’s live systems in order to create a new database for\nCompany B. This database will be stored in a test environment hosted on Company C’s U.S. server. The\ntwo companies agree not to include any data processing provisions in their services agreement, as data is\nonly being used for IT testing purposes.\n\nUnfortunately, Company C’s U.S. server is only protected by an outdated IT security system, and suffers a\ncyber security incident soon after Company C begins work on the project. As a result, data relating to\nCompany A’s employees is visible to anyone visiting Company C’s website. Company A is unaware of this\nuntil Jenny receives a letter from the supervisory authority in connection with the investigation that ensues.\n\nAs soon as Jenny is made aware of the breach, she notifies all affected employees.\n\nThe GDPR requires sufficient guarantees of a company’s ability to implement adequate technical and\norganizational measures. What would be the most realistic way that Company B could have fulfilled this\nrequirement?",
    options: ["A. Hiring companies whose measures are consistent with recommendations of accrediting bodies.", "B. Requesting advice and technical support from Company A’s IT team.", "C. Avoiding the use of another company’s data to improve their own services.", "D. Vetting companies’ measures with the appropriate supervisory authority."],
    correctAnswer: "A",
    explanation: "正确答案 A。为确保次级处理者（Company C）具备充分技术组织措施保障能力，Company B 切实可行的\n做法是选用其安全措施符合认证机构/行业公认标准（如 ISO27001 等认可框架）的合作方，这也呼应第\n28(1)条要求控制者/处理者只能委托“能够提供充分保证”的处理者。B（向委托方 IT 团队求助）、C（完\n全避免使用他人数据改进服务，不现实）、D（要求监管机构逐一审核厂商，监管机构并不提供此类逐案\n审查服务）均不现实或不准确。知识点：第 28 条委托处理者选任的尽职调查义务及“充分保证”标准。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 38,
    question: "In 2016’s Guidance, the United Kingdom’s Information Commissioner’s Office (ICO) reaffirmed the\nimportance of using a “layered notice” to provide data subjects with what?",
    options: ["A. A privacy notice containing brief information whilst offering access to further detail.", "B. A privacy notice explaining the consequences for opting out of the use of cookies on a website.", "C. An explanation of the security measures used when personal data is transferred to a third party.", "D. An efficient means of providing written consent in member states where they are required to do so."],
    correctAnswer: "A",
    explanation: "正确答案 A。英国 ICO 在其 2016 年指引中提倡使用“分层告知”（layered notice），即先以简明方式呈现\n关键信息，再提供链接/入口供数据主体查阅更详细的隐私政策内容，以平衡透明度与可读性。B、C、D\n均是对分层告知目的的错误延伸（分别限定于 cookie 退出说明、第三方传输安全说明、书面同意机\n制），并非该指引的核心含义。知识点：透明度原则的实践方法——分层告知（Layered Notice），呼应\n第 12 条“简洁、透明、易懂”的告知方式要求。",
    topic: "ePrivacy指令",
    verified: "accurate"
  },
  {
    id: 39,
    question: "When collecting personal data in a European Union (EU) member state, what must a company do if it\ncollects personal data from a source other than the data subjects themselves?",
    options: ["A. Inform the subjects about the collection", "B. Provide a public notice regarding the data 6", "C. Upgrade security to match that of the source", "D. Update the data within a reasonable timeframe"],
    correctAnswer: "A",
    explanation: "正确答案 A。根据第 14 条，若个人数据并非直接从数据主体处收集（即来自第三方来源），控制者仍须\n在合理期限内主动告知数据主体收集事实及相关处理信息，履行透明度义务。B（公开公告）、C（安全\n标准比照数据来源）、D（合理期限内更新数据）均非第 14 条规定的核心义务内容。知识点：第 14 条间\n接获取个人数据时的告知义务。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 40,
    question: "Under the GDPR, which essential pieces of information must be provided to data subjects before collecting\ntheir personal data?",
    options: ["A. The authority by which the controller is collecting the data and the third parties to whom the data will be sent.", "B. The name/s of relevant government agencies involved and the steps needed for revising the data.", "C. The identity and contact details of the controller and the reasons the data is being collected.", "D. The contact information of the controller and a description of the retention policy."],
    correctAnswer: "C",
    explanation: "正确答案 C。第 13 条要求控制者在收集数据前告知的核心信息包括：控制者的身份和联系方式，以及处\n理数据的目的和法律依据等。A、B、D 虽包含部分正确元素（如联系方式、留存政策），但均遗漏了“处\n理目的”这一第 13 条最核心、必须告知的要素，或加入了法律未要求的内容（如政府机构名称）。知识\n点：第 13 条应告知数据主体的必要信息清单。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 41,
    question: "Assuming that the “without undue delay” provision is followed, what is the time limit for complying with a\ndata access request?",
    options: ["A. Within 40 days of receipt", "B. Within 40 days of receipt, which may be extended by up to 40 additional days", "C. Within one month of receipt, which may be extended by up to an additional month", "D. Within one month of receipt, which may be extended by an additional two months"],
    correctAnswer: "D",
    explanation: "正确答案 D。第 12(3)条规定，控制者应在收到访问请求后一个月内响应，如请求复杂或数量众多，可再\n延长最多两个月，但须在初始一个月内告知数据主体延期原因。A、B（40 天表述）并非法条用语；C 遗\n漏了“最多可延长两个月”而非一个月的关键细节。知识点：第 12(3)条响应数据主体请求的期限及延期规\n则。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 42,
    question: "A U.S.-based online shop uses sophisticated software to track the browsing behavior of its European\ncustomers and predict future purchases. It also shares this information with third parties. Under the GDPR,\nwhat is the online shop’s PRIMARY obligation while engaging in this kind of profiling?",
    options: ["A. It must solicit informed consent through a notice on its website", "B. It must seek authorization from the European supervisory authorities", "C. It must be able to demonstrate a prior business relationship with the customers", "D. It must prove that it uses sufficient security safeguards to protect customer data"],
    correctAnswer: "A",
    explanation: "答案 A 为最接近选项，但原解析把“画像必然以同意为合法依据”说得过于绝对。GDPR 下画像可视情形依赖不同合\n法依据；不过，使用 cookie 或类似技术访问终端设备通常还受 ePrivacy 规则约束并需要同意。无论依据为何，透明\n告知本身都不能替代合法依据。",
    topic: "ePrivacy指令",
    verified: "qualified"
  },
  {
    id: 43,
    question: "Which of the following would NOT be relevant when determining if a processing activity would be\nconsidered profiling?",
    options: ["A. If the processing is to be performed by a third-party vendor", "B. If the processing involves data that is considered personal data", "C. If the processing of the data is done through automated means", "D. If the processing is used to predict the behavior of data subjects"],
    correctAnswer: "A",
    explanation: "正确答案 A。第 4(4)条对“画像”的定义关键要素是：对个人数据的自动化处理，用于评估个人某些特定方\n面（如预测行为、偏好等）。处理是否由第三方供应商完成，与该处理活动本身是否构成“画像”无关，只\n影响谁是控制者/处理者的问题。B、C、D 均是判断是否构成画像的实质要素。知识点：第 4(4)条“画像”\n的构成要件。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 44,
    question: "Under Article 21 of the GDPR, a controller must stop profiling when requested by a data subject, unless it\ncan demonstrate compelling legitimate grounds that override the interests of the individual. In the\nGuidelines on Automated individual decision-making and Profiling, the WP 29 says the controller needs to\ndo all of the following to demonstrate that it has such legitimate grounds EXCEPT?",
    options: ["A. Carry out an exercise that weighs the interests of the controller and the basis for the data subject’s objection.", "B. Consider the impact of the profiling on the data subject’s interest, rights and freedoms.", "C. Demonstrate that the profiling is for the purposes of direct marketing.", "D. Consider the importance of the profiling to their particular objective."],
    correctAnswer: "C",
    explanation: "正确答案 C。WP29《自动化决策与画像指南》中列出控制者须证明存在“令人信服的合法理由”时应考虑\n的因素包括：权衡双方利益（A）、评估画像对数据主体权利自由的影响（B）、评估画像对控制者目标\n的重要性（D）等，但并未将“证明画像用于直接营销目的”列为证明合法理由的要素——事实上，若画像\n用于直接营销，数据主体享有绝对反对权（第 21(2)条），控制者根本无法以“令人信服的理由”对抗，无\n需也无法援引该项证明。知识点：第 21 条反对权，画像用于直接营销时的绝对反对权 vs. 一般反对权下\n的利益衡量。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 45,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nTripBliss Inc. is a travel service company which has lost substantial revenue over the last few years. Their\nnew manager, Oliver, suspects that this is partly due to the company’s outdated website. After doing some\nresearch, he meets with a sales representative from the up-and-coming IT company Techiva, hoping that\nthey can design a new, cutting-edge website for TripBliss Inc.’s foundering business.\n\nDuring negotiations, a Techiva representative describes a plan for gathering more customer information\nthrough detailed questionnaires, which could be used to tailor their preferences to specific travel\ndestinations. TripBliss Inc. can choose any number of data categories – age, income, ethnicity – that\nwould help them best accomplish their goals. Oliver loves this idea, but would also like to have some way\nof gauging how successful this approach is, especially since the questionnaires will require customers to\nprovide explicit consent to having their data collected. The Techiva representative suggests that they also\nrun a program to analyze the new website’s traffic, in order to get a better understanding of how customers\nare using it. He explains his plan to place a number of cookies on customer devices. The cookies will allow\nthe company to collect IP addresses and other information, such as the sites from which the customers\ncame, how much time they spend on the TripBliss Inc. website, and which pages on the site they visit. All\nof this information will be compiled in log files, which Techiva will analyze by means of a special program.\nTripBliss Inc. would receive aggregate statistics to help them evaluate the website’s effectiveness. Oliver\nenthusiastically engages Techiva for these services.\n\nTechiva assigns the analytics portion of the project to longtime account manager Leon Santos. As is\n\nstandard practice, Leon is given administrator rights to TripBliss Inc.’s website, and can authorize access\nto the log files gathered from it. Unfortunately for TripBliss Inc., however, Leon is taking on this new project\n\nat a time when his dissatisfaction with Techiva is at a high point. In order to take revenge for what he feels\n\nhas been unfair treatment at the hands of the company, Leon asks his friend Fred, a hobby hacker, for\nhelp. Together they come up with the following plan: Fred will hack into Techiva’s system and copy their\n\nlog files onto a USB stick. Despite his initial intention to send the USB to the press and to the data6\nprotection authority in order to denounce Techiva, Leon experiences a crisis of conscience and ends up\nreconsidering his plan. He decides instead to securely wipe all the data from the USB stick and inform his\nmanager that the company’s system of access control must be reconsidered.\n\nIf TripBliss Inc. decides not to report the incident to the supervisory authority, what would be their BEST\ndefense?",
    options: ["A. The resulting obligation to notify data subjects would involve disproportionate effort.", "B. The incident resulted from the actions of a third-party that were beyond their control.", "C. The destruction of the stolen data makes any risk to the affected data subjects unlikely.", "D. The sensitivity of the categories of data involved in the incident was not substantial enough."],
    correctAnswer: "C",
    explanation: "答案 C 仅在公司能够可靠证明数据已被安全删除、无其他副本且残余风险低到“不太可能造成风险”时成立。第 33 条\n监管机构通知门槛是“可能造成风险”，第 34 条通知个人的门槛则是“可能造成高风险”，二者不可混同。",
    topic: "ePrivacy指令",
    verified: "qualified"
  },
  {
    id: 46,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nTripBliss Inc. is a travel service company which has lost substantial revenue over the last few years. Their\nnew manager, Oliver, suspects that this is partly due to the company’s outdated website. After doing some\nresearch, he meets with a sales representative from the up-and-coming IT company Techiva, hoping that\n\nthey can design a new, cutting-edge website for TripBliss Inc.’s foundering business.\n\nDuring negotiations, a Techiva representative describes a plan for gathering more customer information\nthrough detailed questionnaires, which could be used to tailor their preferences to specific travel\ndestinations. TripBliss Inc. can choose any number of data categories – age, income, ethnicity – that\nwould help them best accomplish their goals. Oliver loves this idea, but would also like to have some way\nof gauging how successful this approach is, especially since the questionnaires will require customers to\nprovide explicit consent to having their data collected. The Techiva representative suggests that they also\nrun a program to analyze the new website’s traffic, in order to get a better understanding of how customers\nare using it. He explains his plan to place a number of cookies on customer devices. The cookies will allow\nthe company to collect IP addresses and other information, such as the sites from which the customers\ncame, how much time they spend on the TripBliss Inc. website, and which pages on the site they visit. All\nof this information will be compiled in log files, which Techiva will analyze by means of a special program.\nTripBliss Inc. would receive aggregate statistics to help them evaluate the website’s effectiveness. Oliver\nenthusiastically engages Techiva for these services.\n\nTechiva assigns the analytics portion of the project to longtime account manager Leon Santos. As is\nstandard practice, Leon is given administrator rights to TripBliss Inc.’s website, and can authorize access\nto the log files gathered from it. Unfortunately for TripBliss Inc., however, Leon is taking on this new project\nat a time when his dissatisfaction with Techiva is at a high point. In order to take revenge for what he feels\nhas been unfair treatment at the hands of the company, Leon asks his friend Fred, a hobby hacker, for\nhelp. Together they come up with the following plan: Fred will hack into Techiva’s system and copy their\nlog files onto a USB stick. Despite his initial intention to send the USB to the press and to the data\nprotection authority in order to denounce Techiva, Leon experiences a crisis of conscience and ends up\nreconsidering his plan. He decides instead to securely wipe all the data from the USB stick and inform his\nmanager that the company’s system of access control must be reconsidered.\n\nWith regard to TripBliss Inc.’s use of website cookies, which of the following statements is correct?",
    options: ["A. Because not all of the cookies are strictly necessary to enable the use of a service requested from TripBliss Inc., consent requirements apply to their use of cookies.", "B. Because of the categories of data involved, explicit consent for the use of cookies must be obtained separately from customers.", "C. Because Techiva will receive only aggregate statistics of data collected from the cookies, no additional consent is necessary.", "D. Because the use of cookies involves the potential for location tracking, explicit consent must be obtained from customers."],
    correctAnswer: "A",
    explanation: "正确答案 A。并非所有 cookie 都属于严格必要（strictly necessary）以提供用户请求的服务（例如用于分\n析、画像的 cookie），根据 ePrivacy 指令，此类非必要 cookie 的放置须取得用户同意。B（“须单独获得\n明确同意”表述过于绝对，具体取决于 cookie 类别，并非因数据类别本身单独触发“明确同意”）、C\n（Techiva 仅获得汇总统计并不能豁免同意义务，同意义务在于 cookie 放置本身而非后续数据形式）、D\n（并非因为“可能定位追踪”才需同意，而是因为 cookie 本身非严格必要）均不准确。知识点：ePrivacy 指\n令下 cookie 同意规则，“严格必要”例外。",
    topic: "ePrivacy指令",
    verified: "accurate"
  },
  {
    id: 47,
    question: "Company X has entrusted the processing of their payroll data to Provider Y. Provider Y stores this\nencrypted data on its server. The IT department of Provider Y finds out that someone managed to hack\ninto the system and take a copy of the data from its server. In this scenario, whom does Provider Y have\nthe obligation to notify?",
    options: ["A. The public", "B. Company X", "C. Law enforcement", "D. The supervisory authority"],
    correctAnswer: "B",
    explanation: "正确答案 B。处理者（Provider Y）在知悉个人数据泄露后，依据第 33(2)条应“不得无故拖延”地通知控制\n者（Company X），再由控制者（若符合条件）负责向监管机构和/或数据主体通知，处理者本身通常无\n直接向监管机构或公众通知的义务。知识点：第 33 条数据泄露通知的责任链条——处理者通知控制者，\n控制者通知监管机构/数据主体。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 48,
    question: "When hiring a data processor, which action would a data controller NOT be able to depend upon to avoid\nliability in the event of a security breach?",
    options: ["A. Documenting due diligence steps taken in the pre-contractual stage.", "B. Conducting a risk assessment to analyze possible outsourcing threats.", "C. Requiring that the processor directly notifies the appropriate supervisory authority.", "D. Maintaining evidence that the processor was the best possible market choice available."],
    correctAnswer: "C",
    explanation: "正确答案 C。要求处理者“直接”通知监管机构并不符合 GDPR 的责任分配机制——通知监管机构本质上\n是控制者的义务（处理者仅需按第 33(2)条通知控制者），控制者不能通过“转嫁通知职责给处理者”来免\n除自身的问责制义务。A（尽职调查记录）、B（风险评估）、D（保留处理者系市场最优选择的证据）\n都是控制者展示问责制、降低自身责任的合理措施。知识点：问责制原则下控制者的尽职调查义务与第\n33 条通知责任的不可转嫁性。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 49,
    question: "WP29’s “Guidelines on Personal data breach notification under Regulation 2016/679’’ provides examples\nof ways to communicate data breaches transparently. Which of the following was listed as a method that\nwould NOT be effective for communicating a breach to data subjects?",
    options: ["A. A postal notification", "B. A direct electronic message", "C. A notice on a corporate blog", "D. A prominent advertisement in print media"],
    correctAnswer: "C",
    explanation: "正确答案 C。WP29《个人数据泄露通知指南》强调，通知数据主体须采用能够确保绝大多数受影响个体\n实际收到或知悉信息的专用沟通渠道（如直接邮件、短信、直接电子消息或醒目的印刷广告），而在企\n业博客上发布公告这种被动、需用户主动访问才能获知的方式，通常被认为不足以有效触达受影响个\n人，不构成合规的通知方式（除非作为补充措施）。知识点：第 34 条数据泄露通知数据主体的“有效沟\n通”标准。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 50,
    question: "Which of the following would require designating a data protection officer?",
    options: ["A. Processing is carried out by an organization employing 250 persons or more.", "B. Processing is carried out for the purpose of providing for-profit goods or services to individuals in the EU.", "C. The core activities of the controller or processor consist of processing operations of financial information or information relating to children.", "D. The core activities of the controller or processor consist of processing operations that require systematic monitoring of data subjects on a large scale."],
    correctAnswer: "D",
    explanation: "正确答案 D。第 37(1)(b)、(c)条规定强制设立 DPO 的情形包括：核心业务涉及对数据主体进行大规模、\n有规律和系统性监控，或核心业务涉及大规模处理特殊类别数据/犯罪记录数据。是否强制设 DPO 并不取\n决于员工人数（A，GDPR 未设此类门槛，虽然一般安全和记录义务在 250 人以下企业有部分豁免）、是\n否营利性提供商品服务（B）本身；C 的表述遗漏了“大规模”这一关键限定词，处理财务信息或儿童信息\n本身也不属于第 37 条列举的强制触发类型（更准确的是“大规模处理特殊类别数据”）。知识点：第 37 条\n强制指定 DPO 的三种法定情形。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 51,
    question: "Which of the following describes a mandatory requirement for a group of undertakings that wants to\nappoint a single data protection officer?",
    options: ["A. The group of undertakings must obtain approval from a supervisory authority.", "B. The group of undertakings must be comprised of organizations of similar sizes and functions.", "C. The data protection officer must be located in the country where the data controller has its main establishment.", "D. The data protection officer must be easily accessible from each establishment where the undertakings are located."],
    correctAnswer: "D",
    explanation: "正确答案 D。第 37(2)条允许集团企业共同指定一名 DPO，前提是该 DPO 须能够从集团内每一设立机构\n便捷地联系到（easily accessible），以确保履职实效。A（须监管机构批准）、B（企业须规模相近）、C\n（DPO 须常驻主要机构所在国）均非法定强制要求。知识点：第 37(2)条集团共同指定 DPO 的“易联系\n性”要求。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 52,
    question: "What obligation does a data controller or processor have after appointing a data protection officer?",
    options: ["A. To ensure that the data protection officer receives sufficient instructions regarding the exercise of his or her defined tasks.", "B. To provide resources necessary to carry out the defined tasks of the data protection officer and to maintain his or her expert knowledge.", "C. To ensure that the data protection officer acts as the sole point of contact for individuals’ questions about their personal data.", "D. To submit for approval to the data protection officer a code of conduct to govern organizational practices and demonstrate compliance with data protection principles."],
    correctAnswer: "B",
    explanation: "正确答案 B。第 38(2)条要求控制者/处理者向 DPO 提供履行职责所必需的资源，并支持其维持专业知识\n（如培训）。A 表述恰恰相反——第 38(3)条明确规定 DPO 在履行职责时不得就其任务的行使接受指示，\n以保障独立性；C（DPO 并非必然是数据主体咨询的唯一联系人，虽常担任联系点，但并非强制“唯\n一”）；D（DPO 并无审批行为守则的权限，行为守则的批准由监管机构负责）。知识点：第 38 条 DPO\n的独立地位及企业对 DPO 的支持义务。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 53,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nLiem, an online retailer known for its environmentally friendly shoes, has recently expanded its presence in\n\nEurope. Anxious to achieve market dominance, Liem teamed up with another eco friendly company, 6\nEcoMick, which sells accessories like belts and bags. Together the companies drew up a series of\nmarketing campaigns designed to highlight the environmental and economic benefits of their products.\nAfter months of planning, Liem and EcoMick entered into a data sharing agreement to use the same\nmarketing database, MarketIQ, to send the campaigns to their respective contacts.\n\nLiem and EcoMick also entered into a data processing agreement with MarketIQ, the terms of which\nincluded processing personal data only upon Liem and EcoMick’s instructions, and making available to\nthem all information necessary to demonstrate compliance with GDPR obligations.\n\nLiem and EcoMick then procured the services of a company called JaphSoft, a marketing optimization firm\nthat uses machine learning to help companies run successful campaigns. Clients provide JaphSoft with\nthe personal data of individuals they would like to be targeted in each campaign. To ensure protection of\nits clients’ data, JaphSoft implements the technical and organizational measures it deems appropriate.\nJaphSoft works to continually improve its machine learning models by analyzing the data it receives from\nits clients to determine the most successful components of a successful campaign. JaphSoft then uses\nsuch models in providing services to its client-base. Since the models improve only over a period of time\nas more information is collected, JaphSoft does not have a deletion process for the data it receives from\nclients. However, to ensure compliance with data privacy rules, JaphSoft pseudonymizes the personal\ndata by removing identifying information from the contact information. JaphSoft’s engineers, however,\nmaintain all contact information in the same database as the identifying information.\n\nUnder its agreement with Liem and EcoMick, JaphSoft received access to MarketIQ, which included\ncontact information as well as prior purchase history for such contacts, to create campaigns that would\nresult in the most views of the two companies’ websites. A prior Liem customer, Ms. Iman, received a\nmarketing campaign from JaphSoft regarding Liem’s as well as EcoMick’s latest products. While Ms. Iman\nrecalls checking a box to receive information in the future regarding Liem’s products, she has never\nshopped EcoMick, nor provided her personal data to that company.\n\nFor what reason would JaphSoft be considered a controller under the GDPR?",
    options: ["A. It determines how long to retain the personal data collected.", "B. It has been provided access to personal data in the MarketIQ database.", "C. It uses personal data to improve its products and services for its client-base through machine learning.", "D. It makes decisions regarding the technical and organizational measures necessary to protect the personal data."],
    correctAnswer: "C",
    explanation: "正确答案 C。JaphSoft 通过分析客户提供的数据来持续优化自身机器学习模型、并将改进后的模型用于服\n务其整个客户群体，这已超出单纯按客户指示行事的处理者角色，转变为为自身商业目的（产品改进）\n独立决定处理目的和方式，因此在此范围内被认定为控制者。A（留存期限的决定权，本案未提及\nJaphSoft 对此有决定权）、B（仅仅获得数据访问权限本身不足以认定为控制者）、D（采取安全措施是\n处理者应尽的义务，并非控制者身份的判断标准）均不是认定为控制者的关键依据。知识点：控制者与\n处理者的实质判断标准——是否为自身目的独立决定处理方式（“controller in disguise”）。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 54,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nLiem, an online retailer known for its environmentally friendly shoes, has recently expanded its presence in\nEurope. Anxious to achieve market dominance, Liem teamed up with another eco friendly company,\nEcoMick, which sells accessories like belts and bags. Together the companies drew up a series of\nmarketing campaigns designed to highlight the environmental and economic benefits of their products.\nAfter months of planning, Liem and EcoMick entered into a data sharing agreement to use the same\nmarketing database, MarketIQ, to send the campaigns to their respective contacts.\n\nLiem and EcoMick also entered into a data processing agreement with MarketIQ, the terms of which\nincluded processing personal data only upon Liem and EcoMick’s instructions, and making available to\n\nthem all information necessary to demonstrate compliance with GDPR obligations.\n\nLiem and EcoMick then procured the services of a company called JaphSoft, a marketing optimization firm\n\nthat uses machine learning to help companies run successful campaigns. Clients provide JaphSoft with\n\nthe personal data of individuals they would like to be targeted in each campaign. To ensure protection of\n\nits clients’ data, JaphSoft implements the technical and organizational measures it deems appropriate.\nJaphSoft works to continually improve its machine learning models by analyzing the data it receives from\nits clients to determine the most successful components of a successful campaign. JaphSoft then uses\nsuch models in providing services to its client-base. Since the models improve only over a period of time\nas more information is collected, JaphSoft does not have a deletion process for the data it receives from\nclients. However, to ensure compliance with data privacy rules, JaphSoft pseudonymizes the personal\ndata by removing identifying information from the contact information. JaphSoft’s engineers, however,\nmaintain all contact information in the same database as the identifying information.\n\nUnder its agreement with Liem and EcoMick, JaphSoft received access to MarketIQ, which included\ncontact information as well as prior purchase history for such contacts, to create campaigns that would\nresult in the most views of the two companies’ websites. A prior Liem customer, Ms. Iman, received a\nmarketing campaign from JaphSoft regarding Liem’s as well as EcoMick’s latest products. While Ms. Iman\nrecalls checking a box to receive information in the future regarding Liem’s products, she has never\nshopped EcoMick, nor provided her personal data to that company.\n\nWhy would the consent provided by Ms. Iman NOT be considered valid in regard to JaphSoft?",
    options: ["A. She was not told which controller would be processing her personal data.", "B. She only viewed the visual representations of the privacy notice Liem provided.", "C. She did not read the privacy notice stating that her personal data would be shared.", "D. She has never made any purchases from JaphSoft and has no relationship with the company."],
    correctAnswer: "A",
    explanation: "正确答案 A。Ms. Iman 当初勾选同意框时，仅被告知 Liem 将使用其数据，并不知晓 EcoMick 或 JaphSoft\n也会成为其数据的（共同）控制者/使用方，同意必须具体（specific）并明确告知数据将提供给哪些控制\n者，因此该同意对 JaphSoft 的处理而言是无效的。B、C、D 均非导致同意无效的法律原因（是否阅读隐\n私声明、是否与 JaphSoft 有购买关系均不构成同意有效性的判断标准）。知识点：有效同意的“具体性”要\n求（第 4(11)、7 条），须明确告知涉及哪些控制者。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 55,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nLiem, an online retailer known for its environmentally friendly shoes, has recently expanded its presence in\nEurope. Anxious to achieve market dominance, Liem teamed up with another eco friendly company,\nEcoMick, which sells accessories like belts and bags. Together the companies drew up a series of\nmarketing campaigns designed to highlight the environmental and economic benefits of their products.\nAfter months of planning, Liem and EcoMick entered into a data sharing agreement to use the same\nmarketing database, MarketIQ, to send the campaigns to their respective contacts.\n\nLiem and EcoMick also entered into a data processing agreement with MarketIQ, the terms of which\nincluded processing personal data only upon Liem and EcoMick’s instructions, and making available to\nthem all information necessary to demonstrate compliance with GDPR obligations.\n\nLiem and EcoMick then procured the services of a company called JaphSoft, a marketing optimization firm\nthat uses machine learning to help companies run successful campaigns. Clients provide JaphSoft with\nthe personal data of individuals they would like to be targeted in each campaign. To ensure protection of\nits clients’ data, JaphSoft implements the technical and organizational measures it deems appropriate.\nJaphSoft works to continually improve its machine learning models by analyzing the data it receives from\nits clients to determine the most successful components of a successful campaign. JaphSoft then uses\nsuch models in providing services to its client-base. Since the models improve only over a period of time\nas more information is collected, JaphSoft does not have a deletion process for the data it receives from\nclients. However, to ensure compliance with data privacy rules, JaphSoft pseudonymizes the personal\ndata by removing identifying information from the contact information. JaphSoft’s engineers, however,\nmaintain all contact information in the same database as the identifying information.\n\nUnder its agreement with Liem and EcoMick, JaphSoft received access to MarketIQ, which included\n\ncontact information as well as prior purchase history for such contacts, to create campaigns that would\nresult in the most views of the two companies’ websites. A prior Liem customer, Ms. Iman, received a\n\nmarketing campaign from JaphSoft regarding Liem’s as well as EcoMick’s latest products. While Ms. Iman\n\nrecalls checking a box to receive information in the future regarding Liem’s products, she has never\nshopped EcoMick, nor provided her personal data to that company.\n\nJaphSoft’s use of pseudonymization is NOT in compliance with the CDPR because?",
    options: ["A. JaphSoft failed to first anonymize the personal data.", "B. JaphSoft pseudonymized all the data instead of deleting what it no longer needed.", "C. JaphSoft was in possession of information that could be used to identify data subjects.", "D. JaphSoft failed to keep personally identifiable information in a separate database."],
    correctAnswer: "D",
    explanation: "正确答案 D。GDPR 第 4(5) 条要求：用于重新归属数据主体的补充信息应当单独保存，并采取技术和组织措施防止\n未经授权的重新关联。题干明确说明联系信息与识别信息仍保存在同一数据库中，故不符合“单独保存”的要求。控\n制者持有可重新识别的补充信息本身并不违法，而是假名化区别于匿名化的特征，因此 C 不是违规原因。",
    topic: "GDPR",
    verified: "corrected"
  },
  {
    id: 56,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nLiem, an online retailer known for its environmentally friendly shoes, has recently expanded its presence in\nEurope. Anxious to achieve market dominance, Liem teamed up with another eco friendly company,\nEcoMick, which sells accessories like belts and bags. Together the companies drew up a series of\nmarketing campaigns designed to highlight the environmental and economic benefits of their products.\nAfter months of planning, Liem and EcoMick entered into a data sharing agreement to use the same\nmarketing database, MarketIQ, to send the campaigns to their respective contacts.\n\nLiem and EcoMick also entered into a data processing agreement with MarketIQ, the terms of which\nincluded processing personal data only upon Liem and EcoMick’s instructions, and making available to\n\nthem all information necessary to demonstrate compliance with GDPR obligations.\n\nLiem and EcoMick then procured the services of a company called JaphSoft, a marketing optimization firm\nthat uses machine learning to help companies run successful campaigns. Clients provide JaphSoft with\nthe personal data of individuals they would like to be targeted in each campaign. To ensure protection of\nits clients’ data, JaphSoft implements the technical and organizational measures it deems appropriate.\nJaphSoft works to continually improve its machine learning models by analyzing the data it receives from\nits clients to determine the most successful components of a successful campaign. JaphSoft then uses\nsuch models in providing services to its client-base. Since the models improve only over a period of time\nas more information is collected, JaphSoft does not have a deletion process for the data it receives from\nclients. However, to ensure compliance with data privacy rules, JaphSoft pseudonymizes the personal\ndata by removing identifying information from the contact information. JaphSoft’s engineers, however,\nmaintain all contact information in the same database as the identifying information.\n\nUnder its agreement with Liem and EcoMick, JaphSoft received access to MarketIQ, which included\ncontact information as well as prior purchase history for such contacts, to create campaigns that would\nresult in the most views of the two companies’ websites. A prior Liem customer, Ms. Iman, received a\nmarketing campaign from JaphSoft regarding Liem’s as well as EcoMick’s latest products. While Ms. Iman\nrecalls checking a box to receive information in the future regarding Liem’s products, she has never\nshopped EcoMick, nor provided her personal data to that company.\n\nWhich of the following BEST describes the relationship between Liem, EcoMick and JaphSoft?",
    options: ["A. Liem is a controller and EcoMick is a processor because Liem provides specific instructions regarding how the marketing campaigns should be rolled out.", "B. EcoMick and JaphSoft are is a controller and Liem is a processor because EcoMick is sharing its marketing data with Liem for contacts in Europe.", "C. JaphSoft is the sole processor because it processes personal data on behalf of its clients.", "D. Liem and EcoMick are joint controllers because they carry out joint marketing activities."],
    correctAnswer: "D",
    explanation: "正确答案 D。Liem 与 EcoMick 共同策划营销活动、共享同一营销数据库并共同决定处理目的和方式（联\n合开展营销活动），依据第 26 条构成共同控制者（joint controllers），双方须以协议明确各自在 GDPR\n项下的责任分工。A、B 错误地将其中一方定性为处理者而非共同控制者；C 错误地将 JaphSoft 认定为唯\n一处理者，而实际上 JaphSoft 因改进自身模型的独立处理行为已构成（部分）控制者。知识点：第 26 条\n共同控制者的认定及责任分配协议要求。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 57,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nLiem, an online retailer known for its environmentally friendly shoes, has recently expanded its presence in\nEurope. Anxious to achieve market dominance, Liem teamed up with another eco friendly company,\nEcoMick, which sells accessories like belts and bags. Together the companies drew up a series of\nmarketing campaigns designed to highlight the environmental and economic benefits of their products.\nAfter months of planning, Liem and EcoMick entered into a data sharing agreement to use the same\nmarketing database, MarketIQ, to send the campaigns to their respective contacts.\n\nLiem and EcoMick also entered into a data processing agreement with MarketIQ, the terms of which\nincluded processing personal data only upon Liem and EcoMick’s instructions, and making available to\nthem all information necessary to demonstrate compliance with GDPR obligations.\n\nLiem and EcoMick then procured the services of a company called JaphSoft, a marketing optimization firm\nthat uses machine learning to help companies run successful campaigns. Clients provide JaphSoft with\nthe personal data of individuals they would like to be targeted in each campaign. To ensure protection of\nits clients’ data, JaphSoft implements the technical and organizational measures it deems appropriate.\nJaphSoft works to continually improve its machine learning models by analyzing the data it receives from\nits clients to determine the most successful components of a successful campaign. JaphSoft then uses\nsuch models in providing services to its client-base. Since the models improve only over a period of time\nas more information is collected, JaphSoft does not have a deletion process for the data it receives from\nclients. However, to ensure compliance with data privacy rules, JaphSoft pseudonymizes the personal\ndata by removing identifying information from the contact information. JaphSoft’s engineers, however,\nmaintain all contact information in the same database as the identifying information.\n\nUnder its agreement with Liem and EcoMick, JaphSoft received access to MarketIQ, which included\ncontact information as well as prior purchase history for such contacts, to create campaigns that would\nresult in the most views of the two companies’ websites. A prior Liem customer, Ms. Iman, received a\nmarketing campaign from JaphSoft regarding Liem’s as well as EcoMick’s latest products. While Ms. Iman\nrecalls checking a box to receive information in the future regarding Liem’s products, she has never\nshopped EcoMick, nor provided her personal data to that company.\n\nUnder the GDPR, Liem and EcoMick’s contract with MarketIQ must include all of the following provisions\nEXCEPT?",
    options: ["A. Processing the personal data upon documented instructions regarding data transfers outside of the EEA.", "B. Notification regarding third party requests for access to Liem and EcoMick’s personal data.", "C. Assistance to Liem and EcoMick in their compliance with data protection impact assessments.", "D. Returning or deleting personal data after the end of the provision of the services."],
    correctAnswer: "B",
    explanation: "正确答案 B。第 28(3)条列明处理者合同必须包含的强制条款：按指示处理数据（包括跨境传输指示，\nA）、协助控制者履行 DPIA 等义务（C）、服务结束后返还或删除数据（D）等，但并未要求处理者合同\n中包含“就第三方请求访问数据向控制者通知”这一具体条款（该义务更多体现在处理者须协助控制者应对\n数据主体请求及配合监管调查，但不是以“第三方请求访问”这一表述作为第 28 条强制列明的条款）。知\n识点：第 28(3)条处理者合同的强制性条款清单。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 58,
    question: "When is data sharing agreement MOST likely to be needed?",
    options: ["A. When anonymized data is being shared.", "B. When personal data is being shared between commercial organizations acting as joint data controllers.", "C. When personal data is being proactively shared by a controller to support a police investigation.", "D. When personal data is being shared with a public authority with powers to require the personal data to be disclosed."],
    correctAnswer: "B",
    explanation: "正确答案 B。当多个商业机构作为共同控制者共享个人数据以协同实现共同目的时，最需要通过数据共\n享协议明确权责分配、合法依据及数据主体权利保障机制（呼应第 26 条）。A（匿名数据不涉及个人数\n据保护义务）、C、D（应执法或公权力机构法定要求进行的数据披露，属于法定义务而非协议安排的范\n畴）通常不需要（或不适用）数据共享协议。知识点：数据共享协议（Data Sharing Agreement）的适用\n场景，第 26 条共同控制者。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 59,
    question: "An employee of company ABCD has just noticed a memory stick containing records of client data,\nincluding their names, addresses and full contact details has disappeared. The data on the stick is\nunencrypted and in clear text. It is uncertain what has happened to the stick at this stage, but it likely was\nlost during the travel of an employee. What should the company do?",
    options: ["A. Notify as soon as possible the data protection supervisory authority that a data breach may have taken place.", "B. Launch an investigation and if nothing is found within one month, notify the data protection supervisory authority.", "C. Invoke the “disproportionate effort” exception under Article 33 to postpone notifying data subjects until more information can be gathered.", "D. Immediately notify all the customers of the company that their information has been accessed by an unauthorized person."],
    correctAnswer: "A",
    explanation: "答案 A 在该未加密 U 盘情形下通常成立，但公司仍应立即调查并记录事实、风险和决定；通知监管机构的 72 小时\n从控制者达到“合理确定已发生泄露”的知悉时点起算。通知数据主体仅在达到高风险门槛时触发。",
    topic: "GDPR",
    verified: "qualified"
  },
  {
    id: 60,
    question: "Which of the following does NOT have to be included in the records most processors must maintain in\nrelation to their data processing activities?",
    options: ["A. Name and contact details of each controller on behalf of which the processor is acting.", "B. Categories of processing carried out on behalf of each controller for which the processor is acting.", "C. Details of transfers of personal data to a third country carried out on behalf of each controller for which the processor is acting.", "D. Details of any data protection impact assessment conducted in relation to any processing activities carried out by the processor on behalf of each controller for which the processor is acting."],
    correctAnswer: "D",
    explanation: "正确答案 D。第 30(2)条规定处理者须维护的处理活动记录内容包括：控制者名称联系方式（A）、代表\n其处理的类别（B）、跨境传输详情（C）、以及安全措施描述等，但并不要求处理者的记录中包含\nDPIA 的详细信息——DPIA 属于控制者依第 35 条承担的义务及记录内容，而非处理者第 30(2)条记录清\n单的组成部分。知识点：第 30(2)条处理者处理活动记录的强制内容，与控制者记录内容（第 30(1)条）的\n区别。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 61,
    question: "An unforeseen power outage results in company Z’s lack of access to customer data for six hours.\nAccording to article 32 of the GDPR, this is considered a breach. Based on the WP 29’s February, 2018\nguidance, company Z should do which of the following?",
    options: ["A. Notify affected individuals that their data was unavailable for a period of time.", "B. Document the loss of availability to demonstrate accountability", "C. Notify the supervisory authority about the loss of availability", "D. Conduct a thorough audit of all security systems"],
    correctAnswer: "B",
    explanation: "正确答案 B。第 32(1)(b)条将“可用性”（availability）列为安全处理三要素之一，短暂断电导致的数据不可\n用同样构成“个人数据泄露”（第 4(12)条泄露定义涵盖机密性、完整性、可用性受损）。但根据 WP29 指\n南，此类事件是否需要通知取决于对数据主体权利自由造成风险的可能性和严重程度；若风险很低（如\n短暂断电、数据未丢失且很快恢复），企业至少应将该事件记录在案以证明问责制（第 33(5)条要求记录\n所有泄露，无论是否通知），而不一定要通知监管机构（C）或数据主体（A），也非要求进行全面安全\n审计（D，非 WP29 该情形下的具体建议）。知识点：可用性泄露的认定及第 33(5)条泄露记录义务。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 62,
    question: "In addition to the European Commission, who can adopt standard contractual clauses, assuming that all\n\nrequired conditions are met?",
    options: ["A. Approved data controllers.", "B. The Council of the European Union.", "C. National data protection authorities.", "D. The European Data Protection Supervisor."],
    correctAnswer: "C",
    explanation: "正确答案 C。第 46(2)(c)、(d)条规定，标准合同条款可由欧盟委员会制定（即“标准合同条款 SCCs”），\n此外成员国监管机构也可在获得一致性机制审查（第 64 条）通过后，制定并经欧盟委员会批准的标准数\n据保护条款。控制者本身（A）、欧盟理事会（B）、EDPS（D，仅负责监督欧盟机构）均无权制定此类\n标准条款。知识点：第 46 条跨境传输保障机制——标准合同条款的两种制定主体。",
    topic: "监管机构",
    verified: "accurate"
  },
  {
    id: 63,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nZandelay Fashion (‘Zandelay’) is a successful international online clothing retailer that employs\napproximately 650 people at its headquarters based in Dublin, Ireland. Martin is their recently appointed\ndata protection officer, who oversees the company’s compliance with the General Data Protection\nRegulation (GDPR) and other privacy legislation.\n\nThe company offers both male and female clothing lines across all age demographics, including children.\nIn doing so, the company processes large amounts of information about such customers, including\npreferences and sensitive financial information such as credit card and bank account numbers.\n\nIn an aggressive bid to build revenue growth, Jerry, the CEO, tells Martin that the company is launching a\nnew mobile app and loyalty scheme that puts significant emphasis on profiling the company’s customers\nby analyzing their purchases. Martin tells the CEO that: (a) the potential risks of such activities means that\nZandelay needs to carry out a data protection impact assessment to assess this new venture and its\nprivacy implications; and (b) where the results of this assessment indicate a high risk in the absence of\nappropriate protection measures, Zandelay may have to undertake a prior consultation with the Irish Data\nProtection Commissioner before implementing the app and loyalty scheme.\n\nJerry tells Martin that he is not happy about the prospect of having to directly engage with a supervisory\nauthority and having to disclose details of Zandelay’s business plan and associated processing activities.\n\nWhat would MOST effectively assist Zandelay in conducting their data protection impact assessment?",
    options: ["A. Information about DPIAs found in Articles 38 through 40 of the GDPR.", "B. Data breach documentation that data controllers are required to maintain.", "C. Existing DPIA guides published by local supervisory authorities.", "D. Records of processing activities that data controllers are required to maintain."],
    correctAnswer: "C",
    explanation: "正确答案 C。虽然 GDPR 第 35 条本身对 DPIA 提出原则性要求，但对企业实操最有帮助的是各国监管机\n构已发布的具体 DPIA 操作指南/清单（如 ICO、CNIL 的 DPIA 模板），可提供更具体可操作的方法论。\nA 中的“第 38-40 条”实际上是关于 DPO 和行为守则/认证的条款，并非 DPIA 专门条款（DPIA 规定在第 35\n条），属于错误指向；B（数据泄露文档）、D（处理活动记录）与开展 DPIA 本身的方法论关系不大。\n知识点：第 35 条 DPIA 的实施及监管机构指南的实用价值。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 64,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nZandelay Fashion (‘Zandelay’) is a successful international online clothing retailer that employs\n\napproximately 650 people at its headquarters based in Dublin, Ireland. Martin is their recently appointed\n\ndata protection officer, who oversees the company’s compliance with the General Data Protection\n\nRegulation (GDPR) and other privacy legislation. 6\nThe company offers both male and female clothing lines across all age demographics, including children.\nIn doing so, the company processes large amounts of information about such customers, including\npreferences and sensitive financial information such as credit card and bank account numbers.\n\nIn an aggressive bid to build revenue growth, Jerry, the CEO, tells Martin that the company is launching a\nnew mobile app and loyalty scheme that puts significant emphasis on profiling the company’s customers\nby analyzing their purchases. Martin tells the CEO that: (a) the potential risks of such activities means that\nZandelay needs to carry out a data protection impact assessment to assess this new venture and its\nprivacy implications; and (b) where the results of this assessment indicate a high risk in the absence of\nappropriate protection measures. Zandelay may have to undertake a prior consultation with the Irish Data\nProtection Commissioner before implementing the app and loyalty scheme.\n\nJerry tells Martin that he is not happy about the prospect of having to directly engage with a supervisory\nauthority and having to disclose details of Zandelay’s business plan and associated processing activities.\n\nWhat must Zandelay provide to the supervisory authority during the prior consultation?",
    options: ["A. An evaluation of the complexity of the intended processing.", "B. An explanation of the purposes and means of the intended processing.", "C. Records showing that customers have explicitly consented to the intended profiling activities.", "D. Certificates that prove Martin’s professional qualities and expert knowledge of data protection law."],
    correctAnswer: "B",
    explanation: "正确答案 B。依据第 36(3)条，控制者在事先咨询监管机构时须提供的信息包括：各方的责任划分、处理\n目的和方式、保护数据主体权利自由的措施和保障、DPO 联系方式及 DPIA 本身等，核心是说明拟处理\n的目的和方式。A（评估处理复杂度）、C（客户明确同意的记录）、D（DPO 资质证书）均不是第 36(3)\n条列明的必须提交内容。知识点：第 36 条事先咨询监管机构的程序要求。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 65,
    question: "A company is located in a country NOT considered by the European Union (EU) to have an adequate level\nof data protection. Which of the following is an obligation of the company if it imports personal data from\nanother organization in the European Economic Area (EEA) under standard contractual clauses?",
    options: ["A. Submit the contract to its own government authority.", "B. Ensure that notice is given to and consent is obtained from data subjects.", "C. Supply any information requested by a data protection authority (DPA) within 30 days.", "D. Ensure that local laws do not impede the company from meeting its contractual obligations."],
    correctAnswer: "D",
    explanation: "正确答案 D。标准合同条款（SCCs）作为跨境传输保障机制的核心要求之一，是数据进口方须确保其所\n在国的法律法规不会阻碍其履行合同项下的数据保护义务（这也是 Schrems II 判决后强调的传输影响评估\n要点）。A（须提交合同给本国政府）、B（须另行取得数据主体同意，本身并非 SCC 项下强制要求）、\nC（30 天内提供信息给 DPA，无此具体法定期限）均不准确。知识点：标准合同条款下数据进口方的义\n务及 Schrems II 判决对传输安全评估的要求。",
    topic: "判例法",
    verified: "accurate"
  },
  {
    id: 66,
    question: "Which of the following countries will continue to enjoy adequacy status under the GDPR, pending any\nfuture European Commission decision to the contrary?",
    options: ["A. Greece", "B. Norway", "C. Australia", "D. Switzerland"],
    correctAnswer: "D",
    explanation: "正确答案 D。瑞士在原指令 95/46/EC 体系下已获欧盟充分性认定，且该认定在 GDPR 框架下继续有效，\n直至欧盟委员会作出新的决定。澳大利亚、希腊（作为欧盟成员国不涉及“充分性”概念，充分性针对第三\n国）均不属于已获充分性认定的第三国；挪威作为欧洲经济区（EEA）成员，直接适用 GDPR，无需通过\n“充分性认定”这一第三国转移机制。知识点：充分性认定国家清单及历史沿革（95/46/EC 体系下认定的\n延续效力）。",
    topic: "历史沿革/95-46-EC",
    verified: "accurate"
  },
  {
    id: 67,
    question: "A company is hesitating between Binding Corporate Rules and Standard Contractual Clauses as a global\ndata transfer solution. Which of the following statements would help the company make an effective\ndecision?",
    options: ["A. Binding Corporate Rules are especially recommended for small and medium companies.", "B. The data exporter does not need to be located in the EU for the standard Contractual Clauses.", "C. Binding Corporate Rules provide a global solution for all the entities of a company that are bound by the intra-group agreement.", "D. The company will need the prior authorization of all EU data protection authorities for concluding Standard Contractual Clauses."],
    correctAnswer: "C",
    explanation: "正确答案 C。约束性企业规则（BCRs）的最大优势在于，一旦获批，可作为覆盖集团内所有受协议约束\n实体之间跨境数据传输的“一揽子”解决方案，特别适合大型跨国企业集团内部数据流动。A 错——BCRs\n审批流程复杂、成本高，通常更适合大型跨国企业而非中小企业；B 错——标准合同条款目前的适用场景\n已扩展，但该表述与本题讨论的 BCRs/SCCs 选择要点关系不大且不准确；D 错——采用 SCCs 无需事先\n取得所有欧盟成员国监管机构的批准（这正是 SCCs 相较 BCRs 审批更简便的优势之一）。知识点：约束\n性企业规则（BCRs）与标准合同条款（SCCs）的比较。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 68,
    question: "Under the GDPR, which of the following is true in regard to adequacy decisions involving cross-border\ntransfers?",
    options: ["A. The European Commission can adopt an adequacy decision for individual companies.", "B. The European Commission can adopt, repeal or amend an existing adequacy decision.", "C. EU member states are vested with the power to accept or reject a European Commission adequacy decision.", "D. To be considered as adequate, third countries must implement the EU General Data Protection Regulation into their national legislation."],
    correctAnswer: "B",
    explanation: "正确答案 B。第 45(5)条明确欧盟委员会可对已作出的充分性认定进行监测、修改、暂停或撤销。A 错—\n—充分性认定针对的是国家/地区/行业整体（有时是特定行业部门），而非单个公司；C 错——成员国无\n权否决欧盟委员会的充分性认定决定（该决定对全体成员国具有约束力）；D 错——获得充分性认定并\n不要求第三国将 GDPR 原文纳入本国立法，而是要求其提供“实质相当”（essentially equivalent）的保护水\n平即可。知识点：第 45 条充分性认定的性质、认定标准及可撤销性。",
    topic: "监管机构",
    verified: "accurate"
  },
  {
    id: 69,
    question: "Under Article 58 of the GDPR, which of the following describes a power of supervisory authorities in\nEuropean Union (EU) member states?",
    options: ["A. The ability to enact new laws by executive order.", "B. The right to access data for investigative purposes.", "C. The discretion to carry out goals of elected officials within the member state.", "D. The authority to select penalties when a controller is found guilty in a court of law."],
    correctAnswer: "B",
    explanation: "正确答案 B。第 58(1)条列明监管机构的调查权，其中包括要求控制者/处理者提供其履行职责所需的一切\n信息、开展数据保护审计及访问处理者/控制者的场所和设备等（获取数据用于调查是调查权的核心体\n现）。A（无权以行政命令制定新法律）、C（并非执行选举官员意愿的机构，监管机构须独立行使职\n权）、D（法院量刑权与监管机构行政处罚权是两套体系，监管机构自身可直接开出行政罚款，无需等待\n法院判决）均不准确。知识点：第 58 条监管机构的调查权、更正权及授权权。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 70,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nJavier is a member of the fitness club EVERFIT. This company has branches in many EU member states,\n\nbut for the purposes of the GDPR maintains its primary establishment in France. Javier lives in Newry,\n\nNorthern Ireland (part of the U.K.), and commutes across the border to work in Dundalk, Ireland. Two6\nyears ago while on a business trip, Javier was photographed while working out at a branch of EVERFIT in\nFrankfurt, Germany. At the time, Javier gave his consent to being included in the photograph, since he\nwas told that it would be used for promotional purposes only. Since then, the photograph has been used in\nthe club’s U.K. brochures, and it features in the landing page of its U.K. website. However, the fitness club\nhas recently fallen into disrepute due to widespread mistreatment of members at various branches of the\nclub in several EU member states. As a result, Javier no longer feels comfortable with his photograph\nbeing publicly associated with the fitness club.\n\nAfter numerous failed attempts to book an appointment with the manager of the local branch to discuss\nthis matter, Javier sends a letter to EVETFIT requesting that his image be removed from the website and\nall promotional materials. Months pass and Javier, having received no acknowledgment of his request,\nbecomes very anxious about this matter. After repeatedly failing to contact EVETFIT through alternate\nchannels, he decides to take action against the company.\n\nJavier contacts the U.K. Information Commissioner’s Office (‘ICO’ – the U.K.’s supervisory authority) to\nlodge a complaint about this matter. The ICO, pursuant to Article 56 (3) of the GDPR, informs the CNIL\n(i.e. the supervisory authority of EVERFIT’s main establishment) about this matter. Despite the fact that\nEVERFIT has an establishment in the U.K., the CNIL decides to handle the case in accordance with Article\n60 of the GDPR. The CNIL liaises with the ICO, as relevant under the cooperation procedure. In light of\nissues amongst the supervisory authorities to reach a decision, the European Data Protection Board\nbecomes involved and, pursuant to the consistency mechanism, issues a binding decision.\n\nAdditionally, Javier sues EVERFIT for the damages caused as a result of its failure to honor his request to\nhave his photograph removed from the brochure and website.\n\nUnder the cooperation mechanism, what should the lead authority (the CNIL) do after it has formed its\nview on the matter?",
    options: ["A. Submit a draft decision to other supervisory authorities for their opinion.", "B. Request that the other supervisory authorities provide the lead authority with a draft decision for its consideration.", "C. Submit a draft decision directly to the Commission to ensure the effectiveness of the consistency mechanism.", "D. Request that members of the seconding supervisory authority and the host supervisory authority co- draft a decision."],
    correctAnswer: "A",
    explanation: "正确答案 A。第 60 条合作机制下，主导监管机构（lead supervisory authority）在形成决定草案后，须将该\n决定草案提交给其他相关监管机构（concerned supervisory authorities）征求意见，各方在四周内可表达\n“相关且合理的异议”（relevant and reasoned objection），如无法达成共识才启动 EDPB 的一致性机制。\nB、C、D 均颠倒或误述了合作机制的具体流程和主体角色。知识点：第 60 条一站式合作机制中主导监管\n机构与相关监管机构之间的协作程序。",
    topic: "监管机构",
    verified: "accurate"
  },
  {
    id: 71,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nJavier is a member of the fitness club EVERFIT. This company has branches in many EU member states,\nbut for the purposes of the GDPR maintains its primary establishment in France. Javier lives in Newry,\nNorthern Ireland (part of the U.K.), and commutes across the border to work in Dundalk, Ireland. Two\nyears ago while on a business trip, Javier was photographed while working out at a branch of EVERFIT in\nFrankfurt, Germany. At the time, Javier gave his consent to being included in the photograph, since he\nwas told that it would be used for promotional purposes only. Since then, the photograph has been used in\nthe club’s U.K. brochures, and it features in the landing page of its U.K. website. However, the fitness club\nhas recently fallen into disrepute due to widespread mistreatment of members at various branches of the\n\nclub in several EU member states. As a result, Javier no longer feels comfortable with his photograph\n\nbeing publicly associated with the fitness club.\n\nAfter numerous failed attempts to book an appointment with the manager of the local branch to discuss\n\nthis matter, Javier sends a letter to EVETFIT requesting that his image be removed from the website and\n\nall promotional materials. Months pass and Javier, having received no acknowledgment of his request,6\nbecomes very anxious about this matter. After repeatedly failing to contact EVETFIT through alternate\nchannels, he decides to take action against the company.\n\nJavier contacts the U.K. Information Commissioner’s Office (‘ICO’ – the U.K.’s supervisory authority) to\nlodge a complaint about this matter. The ICO, pursuant to Article 56 (3) of the GDPR, informs the CNIL\n(i.e. the supervisory authority of EVERFIT’s main establishment) about this matter. Despite the fact that\nEVERFIT has an establishment in the U.K., the CNIL decides to handle the case in accordance with Article\n60 of the GDPR. The CNIL liaises with the ICO, as relevant under the cooperation procedure. In light of\nissues amongst the supervisory authorities to reach a decision, the European Data Protection Board\nbecomes involved and, pursuant to the consistency mechanism, issues a binding decision.\n\nAdditionally, Javier sues EVERFIT for the damages caused as a result of its failure to honor his request to\nhave his photograph removed from the brochure and website.\n\nAssuming that multiple EVETFIT branches across several EU countries are acting as separate data\ncontrollers, and that each of those branches were responsible for mishandling Javier’s request, how may\n\nJavier proceed in order to seek compensation?",
    options: ["A. He will have to sue the EVETFIT’s head office in France, where EVETFIT has its main establishment.", "B. He will be able to sue any one of the relevant EVETFIT branches, as each one may be held liable for the entire damage.", "C. He will have to sue each EVETFIT branch so that each branch provides proportionate compensation commensurate with its contribution to the damage or distress suffered by Javier.", "D. He will be able to apply to the European Data Protection Board in order to determine which particular EVETFIT branch is liable for damages, based on the decision that was made by the board."],
    correctAnswer: "B",
    explanation: "正确答案 B。当多个独立设立的分支机构分别作为独立控制者、共同对同一损害负有责任时，依据第\n82(4)条及各国民事责任规则（连带责任原则），受害人可以选择起诉其中任何一个责任主体，要求其对\n全部损害承担赔偿责任（该责任方随后可向其他责任方追偿）。A（必须起诉法国总部）、C（每个分支\n机构仅按比例赔偿，与连带责任的立法目的不符，除非最终各责任方之间内部分摊，但对外部受害人而\n言无需逐一按比例起诉）、D（EDPB 无权直接裁定具体分支机构的赔偿责任分配，这属于民事诉讼范\n畴）均不准确。知识点：第 82 条数据主体获得赔偿的权利及共同责任人的连带赔偿责任。",
    topic: "监管机构",
    verified: "accurate"
  },
  {
    id: 72,
    question: "The GDPR specifies fines that may be levied against data controllers for certain infringements. Which of\nthe following infringements would be subject to the less severe administrative fine of up to 10 million euros\n(or in the case of an undertaking, up to 2% of the total worldwide annual turnover of the preceding financial\nyear)?",
    options: ["A. Failure to demonstrate that consent was given by the data subject to the processing of their personal data where it is used as the basis for processing.", "B. Failure to implement technical and organizational measures to ensure data protection is enshrined by design and default.", "C. Failure to process personal information in a manner compatible with its original purpose.", "D. Failure to provide the means for a data subject to rectify inaccuracies in personal data."],
    correctAnswer: "B",
    explanation: "正确答案 B。第 83(4)条规定的“较低档”行政罚款（最高 1000 万欧元或全球年营业额 2%，以较高者为\n准）适用于违反数据保护设计与默认（Privacy by Design and by Default，第 25 条）、处理者义务、认证\n机构义务等条款；而未能证明已获得同意（A，违反第 7 条同意条款）、未按兼容目的处理（C，违反第\n5、6 条处理原则）、未提供数据更正途径（D，违反数据主体权利第 16 条）均属于第 83(5)条规定的“较\n高档”罚款情形（最高 2000 万欧元或全球营业额 4%）。知识点：第 83 条两档行政罚款的具体适用范围\n区分。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 73,
    question: "What is the MAIN reason GDPR Article 4(22) establishes the concept of the “concerned supervisory\nauthority”?",
    options: ["A. To encourage the consistency of local data processing activity.", "B. To give corporations a choice about who their supervisory authority will be.", "C. To ensure the GDPR covers controllers that do not have an establishment in the EU but have a representative in a member state.", "D. To ensure that the interests of individuals residing outside the lead authority’s jurisdiction are represented."],
    correctAnswer: "D",
    explanation: "正确答案 D。“相关监管机构”（concerned supervisory authority，第 4(22)条）概念的设立，是为了在一站\n式机制下，确保处理活动影响到的、非主导监管机构辖区的数据主体权益也能得到代表和保护，即便案\n件由主导监管机构统一处理，其他相关成员国的监管机构仍可参与、提出意见、维护本国数据主体的利\n益。A、B、C 均未准确反映该概念设立的核心目的。知识点：第 4(22)条“相关监管机构”概念及其在一站\n式机制中的作用。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 74,
    question: "Which area of privacy is a lead supervisory authority’s (LSA) MAIN concern?",
    options: ["A. Data subject rights", "B. Data access disputes", "C. Cross-border processing", "D. Special categories of data"],
    correctAnswer: "C",
    explanation: "正确答案 C。主导监管机构（LSA）制度的核心适用场景是“跨境处理”（cross-border processing，即控制\n者在多个成员国设有机构或处理活动实质影响多个成员国数据主体的情形），旨在为企业提供单一联系\n窗口。数据主体权利、数据获取纠纷及特殊类别数据处理并非 LSA 机制专门针对的核心领域，这些议题\n在任何处理场景（无论是否跨境）中都可能出现。知识点：主导监管机构（LSA）机制及“跨境处理”的定\n义（第 4(23)条）。",
    topic: "监管机构",
    verified: "accurate"
  },
  {
    id: 75,
    question: "If a multi-national company wanted to conduct background checks on all current and potential employees,\nincluding those based in Europe, what key provision would the company have to follow?",
    options: ["A. Background checks on employees could be performed only under prior notice to all employees.", "B. Background checks are only authorized with prior notice and express consent from all employees including those based in Europe.", "C. Background checks on European employees will stem from data protection and employment law, which can vary between member states.", "D. Background checks may not be allowed on European employees, but the company can create lists based on its legitimate interests, identifying individuals who are ineligible for employment."],
    correctAnswer: "C",
    explanation: "正确答案 C。欧盟层面对员工背景调查并无统一专门立法，实际操作须同时遵循数据保护法（GDPR 及各\n国转化立法）与各成员国不同的劳动法/雇佣法规定，二者结合且因成员国而异，这正是跨国企业开展欧\n洲员工背景调查时面临的核心合规难点。A、B（须提前通知/需全体明确同意）过于绝对，并非 GDPR/劳\n动法的统一强制标准（合法依据可以是雇主合法利益等，未必需要同意）；D 的表述（可建立“不合格名\n单”）不准确且存在合规风险（可能违反数据保护原则）。知识点：员工背景调查须综合考量数据保护法\n与各国雇佣法的双重规制，以及处理雇员数据合法依据的复杂性。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 76,
    question: "Why is advisable to avoid consent as a legal basis for an employer to process employee data?",
    options: ["A. Employee data can only be processed if there is an approval from the data protection officer.", "B. Consent may not be valid if the employee feels compelled to provide it.", "C. An employer might have difficulty obtaining consent from every employee.", "D. Data protection laws do not apply to processing of employee data."],
    correctAnswer: "B",
    explanation: "正确答案 B。在雇佣关系中，员工与雇主之间存在明显的权力不对等，员工往往难以自由拒绝雇主的同\n意请求（担心影响工作），因此以“同意”作为处理雇员数据的合法依据存在“自愿性”缺陷，同意可能被认\n定无效（前言第 43 条强调不平等权力关系下同意的有效性存疑）。A、C、D 均非同意在雇佣场景下不被\n推荐使用的准确原因（数据保护法当然适用于雇员数据处理，雇主获取同意的“难度”也不是核心法律顾\n虑）。知识点：同意作为合法依据在权力不对等关系（如雇佣关系）中的有效性问题（前言第 43 条）。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 77,
    question: "What is true if an employee makes an access request to his employer for any personal data held about\nhim?",
    options: ["A. The employer can automatically decline the request if it contains personal data about a third person.", "B. The employer can decline the request if the information is only held electronically.", "C. The employer must supply all the information held about the employee.", "D. The employer must supply any information held about an employee unless an exemption applies."],
    correctAnswer: "D",
    explanation: "正确答案 D。雇主作为控制者，收到员工的访问请求后原则上须依第 15 条提供其持有的全部相关个人数\n据，但可依法适用特定豁免情形（如涉及第三方数据保护、商业秘密、法律特权等），因此答案是“除非\n适用豁免，否则须提供”，而非绝对地“必须提供全部信息”（C 过于绝对）或可仅因涉及第三人信息\n（A）或仅电子存储形式（B）就自动拒绝。知识点：第 15 条数据主体访问权及其法定豁免情形。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 78,
    question: "Read the following steps:\nDiscover which employees are accessing cloud services and from which devices and apps\nLock down the data in those apps and devices\nMonitor and analyze the apps and devices for compliance\nManage application life cycles\nMonitor data sharing\n\nAn organization should perform these steps to do which of the following?",
    options: ["A. Pursue a GDPR-compliant Privacy by Design process.", "B. Institute a GDPR-compliant employee monitoring process.", "C. Maintain a secure Bring Your Own Device (BYOD) program.", "D. Ensure cloud vendors are complying with internal data use policies."],
    correctAnswer: "C",
    explanation: "正确答案 C。题目所列步骤（发现云服务访问设备应用、锁定数据、监控合规、管理应用生命周期、监\n控数据共享）是企业管理“自带设备办公”（BYOD）项目、平衡员工设备灵活性与企业数据安全合规的典\n型流程，而非隐私设计流程（A，Privacy by Design 关注产品/系统设计阶段）、员工监控合规流程（B，\n侧重合法监控依据而非设备管理）或供应商内部合规审查（D）。知识点：BYOD 项目管理与移动设备安\n全（MDM/MAM）在 GDPR 环境下的应用。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 79,
    question: "If a company is planning to use closed-circuit television (CCTV) on its premises and is concerned with\nGDPR compliance, it should first do all of the following EXCEPT?",
    options: ["A. Notify the appropriate data protection authority.", "B. Perform a data protection impact assessment (DPIA).", "C. Create an information retention policy for those who operate the system.", "D. Ensure that safeguards are in place to prevent unauthorized access to the footage."],
    correctAnswer: "A",
    explanation: "正确答案 A。安装 CCTV 前，企业首先应做的是进行 DPIA 评估隐私风险（B）、制定录像留存政策\n（C）、确保未授权访问防护措施（D），但 GDPR 并未要求企业在部署 CCTV 前须事先向监管机构“通\n知/报备”——一般性的处理通知义务已被 GDPR 废除，仅在特定高风险且 DPIA 显示无法降低风险时才需\n依第 36 条进行“事先咨询”，而非泛泛的“通知”义务。知识点：CCTV 监控的 GDPR 合规要点及一般通知\n义务的废除（与 95/46 指令时代的区别）。",
    topic: "历史沿革/95-46-EC",
    verified: "accurate"
  },
  {
    id: 80,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nBuilding Block Inc. is a multinational company, headquartered in Chicago with offices throughout the\n\nUnited States, Asia, and Europe (including Germany, Italy, France and Portugal). Last year the company\n\nwas the victim of a phishing attack that resulted in a significant data breach. The executive board, in\ncoordination with the general manager, their Privacy Office and the Information Security team, resolved to\n\nadopt additional security measures. These included training awareness programs, a cybersecurity audit,\n\nand use of a new software tool called SecurityScan, which scans employees’ computers to see if they\n\nhave software that is no longer being supported by a vendor and therefore not getting security updates.\n\nHowever, this software also provides other features, including the monitoring of employees’ computers.\n\nSince these measures would potentially impact employees, Building Block’s Privacy Office decided to\nissue a general notice to all employees indicating that the company will implement a series of initiatives to\nenhance information security and prevent future data breaches.\n\nAfter the implementation of these measures, server performance decreased. The general manager\ninstructed the Security team on how to use SecurityScan to monitor employees’ computers activity and\ntheir location. During these activities, the Information Security team discovered that one employee from\nItaly was daily connecting to a video library of movies, and another one from Germany worked remotely\nwithout authorization. The Security team reported these incidents to the Privacy Office and the general\nmanager. In their report, the team concluded that the employee from Italy was the reason why the server\nperformance decreased.\n\nDue to the seriousness of these infringements, the company decided to apply disciplinary measures to\nboth employees, since the security and privacy policy of the company prohibited employees from installing\nsoftware on the company’s computers, and from working remotely without authorization.\n\nTo comply with the GDPR, what should Building Block have done as a first step before implementing the\nSecurityScan measure?",
    options: ["A. Assessed potential privacy risks by conducting a data protection impact assessment.", "B. Consulted with the relevant data protection authority about potential privacy violations.", "C. Distributed a more comprehensive notice to employees and received their express consent.", "D. Consulted with the Information Security team to weigh security measures against possible server impacts."],
    correctAnswer: "A",
    explanation: "正确答案 A。在部署可能对员工隐私产生重大影响的监控软件（SecurityScan 除安全补丁扫描外还具备员\n工监控功能）之前，公司首先应当进行数据保护影响评估（DPIA），以识别、评估并降低对员工权利自\n由的潜在风险，这是“设计阶段隐私保护”和问责制原则的核心要求。B（咨询监管机构，仅在 DPIA 显示\n高风险且无法缓解时才需要，非首要步骤）、C（发一般性通知即视为获得同意，笼统通知不满足透明度\n和同意具体性要求）、D（仅与 IT 团队讨论服务器影响，未触及隐私合规核心）均非首要应采取的合规\n步骤。知识点：第 35 条 DPIA 作为部署高风险监控技术前的前置合规步骤，员工监控中的“设计阶段隐私\n保护”（Privacy by Design）。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 81,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nBuilding Block Inc. is a multinational company, headquartered in Chicago with offices throughout the\nUnited States, Asia, and Europe (including Germany, Italy, France and Portugal). Last year the company\nwas the victim of a phishing attack that resulted in a significant data breach. The executive board, in\ncoordination with the general manager, their Privacy Office and the Information Security team, resolved to\n\nadopt additional security measures. These included training awareness programs, a cybersecurity audit,\nand use of a new software tool called SecurityScan, which scans employees’ computers to see if they\nhave software that is no longer being supported by a vendor and therefore not getting security updates.\nHowever, this software also provides other features, including the monitoring of employees’ computers.\n\nSince these measures would potentially impact employees, Building Block’s Privacy Office decided to\nissue a general notice to all employees indicating that the company will implement a series of initiatives to\nenhance information security and prevent future data breaches.\n\nAfter the implementation of these measures, server performance decreased. The general manager\ninstructed the Security team on how to use SecurityScan to monitor employees’ computers activity and\ntheir location. During these activities, the Information Security team discovered that one employee from\nItaly was daily connecting to a video library of movies, and another one from Germany worked remotely\nwithout authorization. The Security team reported these incidents to the Privacy Office and the general\n\nmanager. In their report, the team concluded that the employee from Italy was the reason why the server\n\nperformance decreased.\n\nDue to the seriousness of these infringements, the company decided to apply disciplinary measures to\n\nboth employees, since the security and privacy policy of the company prohibited employees from installing\nsoftware on the company’s computers, and from working remotely without authorization.\n\nWhat would be the MOST APPROPRIATE way for Building Block to handle the situation with the\nemployee from Italy?",
    options: ["A. Since the GDPR does not apply to this situation, the company would be entitled to apply any disciplinary measure authorized under Italian labor law.", "B. Since the employee was the cause of a serious risk for the server performance and their data, the company would be entitled to apply disciplinary measures to this employee, including fair dismissal.", "C. Since the employee was not informed that the security measures would be used for other purposes such as monitoring, the company could face difficulties in applying any disciplinary measures to this employee.", "D. Since this was a serious infringement, but the employee was not appropriately informed about the consequences the new security measures, the company would be entitled to apply some disciplinary measures, but not dismissal."],
    correctAnswer: "C",
    explanation: "正确答案 C。公司发布的通知只泛泛提及“提升信息安全”，并未明确告知 SecurityScan 还具备监控员工活\n动和位置的功能，违反了透明度原则（第 13、14 条），员工因此并未被充分告知该数据将用于监控这一\n新目的，公司在此情况下对该员工采取纪律处分将面临合法性挑战。A 错——GDPR 同样适用于该情形\n（跨国公司在意大利分支处理欧盟员工数据）；B（径行认定可解雇）、D（可处分但不可解雇）都跳过\n了处理合法性/透明度这一根本前提问题。知识点：员工监控中的透明度义务，第 5(1)(a)、13 条，非法收\n集证据对后续管理措施的影响。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 82,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nBuilding Block Inc. is a multinational company, headquartered in Chicago with offices throughout the\n\nUnited States, Asia, and Europe (including Germany, Italy, France and Portugal). Last year the company\nwas the victim of a phishing attack that resulted in a significant data breach. The executive board, in\ncoordination with the general manager, their Privacy Office and the Information Security team, resolved to\nadopt additional security measures. These included training awareness programs, a cybersecurity audit,\nand use of a new software tool called SecurityScan, which scans employees’ computers to see if they\nhave software that is no longer being supported by a vendor and therefore not getting security updates.\nHowever, this software also provides other features, including the monitoring of employees’ computers.\n\nSince these measures would potentially impact employees, Building Block’s Privacy Office decided to\nissue a general notice to all employees indicating that the company will implement a series of initiatives to\nenhance information security and prevent future data breaches.\n\nAfter the implementation of these measures, server performance decreased. The general manager\ninstructed the Security team on how to use SecurityScan to monitor employees’ computers activity and\ntheir location. During these activities, the Information Security team discovered that one employee from\nItaly was daily connecting to a video library of movies, and another one from Germany worked remotely\nwithout authorization. The Security team reported these incidents to the Privacy Office and the general\nmanager. In their report, the team concluded that the employee from Italy was the reason why the server\nperformance decreased.\n\nDue to the seriousness of these infringements, the company decided to apply disciplinary measures to\nboth employees, since the security and privacy policy of the company prohibited employees from installing\nsoftware on the company’s computers, and from working remotely without authorization.\n\nIn addition to notifying employees about the purpose of the monitoring, the potential uses of their data and\ntheir privacy rights, what information should Building Block have provided them before implementing the\nsecurity measures?",
    options: ["A. Information about what is specified in the employment contract.", "B. Information about who employees should contact with any queries.", "C. Information about how providing consent could affect them as employees.", "D. Information about how the measures are in the best interests of the company."],
    correctAnswer: "B",
    explanation: "正确答案 B。除说明监控目的、数据用途和员工权利外，充分透明的告知还应包括员工对相关问题可联\n系的具体对象（如 DPO 或隐私办公室联系方式），这是落实数据主体行使权利、寻求解答的实际保障\n（呼应第 13(1)(b)条关于 DPO 联系方式的告知要求）。A（劳动合同条款内容）、C（同意对雇员的影\n响，本场景合法依据并非同意）、D（测量对公司的利益，无关告知义务）均非该告知缺口的准确答案。\n知识点：第 13/14 条告知内容的完整性——包括联系方式等程序性信息。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 83,
    question: "Based on GDPR Article 35, which of the following situations would trigger the need to complete a DPIA?",
    options: ["A. A company wants to combine location data with other data in order to offer more personalized service for the customer.", "B. A company wants to use location data to infer information on a person’s clothes purchasing habits.", "C. A company wants to build a dating app that creates candidate profiles based on location data and data from third-party sources.", "D. A company wants to use location data to track delivery trucks in order to make the routes more efficient."],
    correctAnswer: "C",
    explanation: "正确答案 C。约会软件基于位置数据及第三方来源数据构建用户画像以匹配潜在对象，涉及大规模处\n理、结合多源数据进行系统性画像评估，且可能间接涉及敏感信息（如推断性取向等），属于 WP29\nDPIA 指南中列举的高风险处理情形（画像评估+创新技术+可能涉及特殊类别数据的推断），须开展\nDPIA。A、B、D 虽然也涉及位置数据处理，但并未同时叠加“大规模画像+多源数据融合+可能触及敏感\n信息”等多重高风险因素，风险程度较低，未必强制触发 DPIA。知识点：第 35(3)条及 WP29 DPIA 指南\n列举的高风险处理情形（大规模画像、创新技术使用等）。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 84,
    question: "In which of the following cases would an organization MOST LIKELY be required to follow both ePrivacy\nand data protection rules?",
    options: ["A. When creating an untargeted pop-up ad on a website.", "B. When calling a potential customer to notify her of an upcoming product sale.", "C. When emailing a customer to announce that his recent order should arrive earlier than expected.", "D. When paying a search engine company to give prominence to certain products and services within specific search results."],
    correctAnswer: "B",
    explanation: "正确答案 B。电话营销涉及 ePrivacy 指令关于电子通信直接营销的同意/退出规则（因涉及电话这一“电子\n通信”手段），同时该处理个人数据的行为也须符合 GDPR 的合法处理原则，因此二者规则同时适用。A\n（非定向弹窗广告一般不涉及针对个人的直接电子通信）、C（订单到货提醒邮件属于服务性通知而非营\n销，一般豁免于营销同意规则）、D（付费提升搜索排名主要涉及商业合同及竞争法，非典型的 ePrivacy\n规制对象）均不如 B 典型地同时触发两套规则。知识点：ePrivacy 指令与 GDPR 在电子直接营销场景下\n的双重适用。",
    topic: "ePrivacy指令",
    verified: "accurate"
  },
  {
    id: 85,
    question: "What permissions are required for a marketer to send an email marketing message to a consumer in the\nEU?",
    options: ["A. A prior opt-in consent for consumers unless they are already customers.", "B. A pre-checked box stating that the consumer agrees to receive email marketing.", "C. A notice that the consumer’s email address will be used for marketing purposes.", "D. No prior permission required, but an opt-out requirement on all emails sent to consumers."],
    correctAnswer: "A",
    explanation: "答案 A 应理解为：电子邮件直销原则上需要事先同意；“soft opt-in”仅适用于在销售或销售磋商中直接取得联系方\n式、营销自身类似产品或服务，并在收集时及每封邮件中均提供简便免费退出方式的情形。",
    topic: "GDPR",
    verified: "qualified"
  },
  {
    id: 86,
    question: "Under what circumstances might the “soft opt-in” rule apply in relation to direct marketing?",
    options: ["A. When an individual has not consented to the marketing. 6", "B. When an individual’s details are obtained from their inquiries about buying a product.", "C. Where an individual’s details have been obtained from a bought-in marketing list.", "D. Where an individual is given the ability to unsubscribe from marketing emails sent to him."],
    correctAnswer: "B",
    explanation: "答案 B 为最佳选项，但“曾经咨询或交易”本身不够。软退出还要求联系方式是在销售或销售磋商中直接取得、营销\n主体为同一企业、内容是类似产品或服务，并在收集时和每次通信时提供退出。",
    topic: "GDPR",
    verified: "qualified"
  },
  {
    id: 87,
    question: "What should a controller do after a data subject opts out of a direct marketing activity?",
    options: ["A. Without exception, securely delete all personal data relating to the data subject.", "B. Without undue delay, provide information to the data subject on the action that will be taken.", "C. Refrain from processing personal data relating to the data subject for the relevant type of communication.", "D. Take reasonable steps to inform third-party recipients that the data subject’s personal data should be deleted and no longer processed."],
    correctAnswer: "C",
    explanation: "正确答案 C。第 21(3)条规定，一旦数据主体反对将其数据用于直接营销，控制者必须立即停止将该数据\n用于该类营销目的的处理，这是绝对权利，控制者无需进行利益衡量即须遵从。A（无条件彻底删除所有\n数据）表述过于绝对，数据可能因其他合法依据/目的继续保留；B、D 虽是良好实践但并非第 21 条规定\n的核心法定义务表述。知识点：第 21(2)(3)条反对直接营销的绝对权利及控制者的对应义务。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 88,
    question: "How is the GDPR’s position on consent MOST likely to affect future app design and implementation?",
    options: ["A. App developers will expand the amount of data necessary to collect for an app’s functionality.", "B. Users will be given granular types of consent for particular types of processing.", "C. App developers’ responsibilities as data controllers will increase.", "D. Users will see fewer advertisements when using apps."],
    correctAnswer: "B",
    explanation: "正确答案 B。为满足 GDPR 对同意“具体性”“清晰积极行为”等要求，App 开发者未来须为不同类型的处理\n活动分别提供细分（granular）的同意选项，而非笼统的“一揽子”同意，让用户能够对各项具体处理逐一\n作出选择。A（扩大收集数据量，与数据最小化原则相悖）、C（虽然合规责任客观上会增加，但并非题\n目问的“对 App 设计与实施”的直接影响）、D（广告数量减少并非同意规则的直接必然结果）均不是最贴\n切的答案。知识点：同意的“具体性”要求对产品设计（granular consent UX）的影响。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 89,
    question: "A mobile device application that uses cookies will be subject to the consent requirement of which of the\nfollowing?",
    options: ["A. The ePrivacy Directive", "B. The E-Commerce Directive", "C. The Data Retention Directive", "D. The EU Cybersecurity Directive"],
    correctAnswer: "A",
    explanation: "正确答案 A。无论是网页还是移动应用，只要涉及在用户设备上存储或读取信息（cookie 或类似技术如\nSDK、本地存储），均受 ePrivacy 指令（“cookie 规则”）关于事先同意的规制，GDPR 则规范这些信息构\n成个人数据后的后续处理。电子商务指令（B）主要规范在线合同和服务提供的透明度，数据留存指令\n（C）已被宣告无效且规范执法数据留存，网络与信息安全指令（D）聚焦关键基础设施安全，均非规制\ncookie 同意的直接依据。知识点：ePrivacy 指令对 cookie 及类似追踪技术的同意规制，适用于网页与 App\n等各类终端设备。",
    topic: "ePrivacy指令",
    verified: "accurate"
  },
  {
    id: 90,
    question: "What term BEST describes the European model for data protection?",
    options: ["A. Sectoral", "B. Self-regulatory", "C. Market-based", "D. Comprehensive"],
    correctAnswer: "D",
    explanation: "正确答案 D。欧盟采用的是“综合性”（comprehensive/omnibus）数据保护立法模式，即以统一、全面的一\n般性法律（如 GDPR）适用于所有行业和数据类型，区别于美国式的“行业分散立法”（sectoral，A）模\n式、行业自律模式（self-regulatory，B）或市场化模式（C）。知识点：全球数据保护立法模式的比较—\n—欧盟综合型 vs. 美国分散型/自律型。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 91,
    question: "What was the aim of the European Data Protection Directive 95/46/EC?",
    options: ["A. To harmonize the implementation of the European Convention of Human Rights across all member states.", "B. To implement the OECD Guidelines on the Protection of Privacy and trans-border flows of Personal Data.", "C. To completely prevent the transfer of personal data out of the European Union.", "D. To further reconcile the protection of the fundamental rights of individuals with the free flow of data from one member state to another."],
    correctAnswer: "D",
    explanation: "正确答案 D。95/46/EC 指令在立法目的中明确寻求在保护个人基本权利（尤其隐私权）与促进欧盟内部\n个人数据自由流动之间取得平衡，这也是欧盟数据保护立法一贯的双重目标（既保护权利又促进单一市\n场内的数据流通）。A（协调欧洲人权公约的实施，指令本身并非专门针对 ECHR 的协调工具）、B（实\n施 OECD 指南，指令借鉴但并非以“实施 OECD 指南”为直接立法目的）、C（完全禁止数据出境，与实际\n内容相悖，指令恰恰是为促进内部数据流动）均不准确。知识点：95/46/EC 指令的双重立法目标——基\n本权利保护与数据自由流动的平衡。",
    topic: "历史沿革/95-46-EC",
    verified: "accurate"
  },
  {
    id: 92,
    question: "What is the key difference between the European Council and the Council of the European Union?",
    options: ["A. The Council of the European Union is helmed by a president.", "B. The Council of the European Union has a degree of legislative power.", "C. The European Council focuses primarily on issues involving human rights.", "D. The European Council is comprised of the heads of each EU member state."],
    correctAnswer: "D",
    explanation: "答案 D 最准确地区分两机构的组成，但 B“欧洲理事会不通过欧盟立法”也是真命题，因此题目存在一定多解性。欧\n洲理事会由国家元首或政府首脑组成并确定政治方向；欧盟理事会由各国部长组成并与欧洲议会共同立法。",
    topic: "监管机构",
    verified: "qualified"
  },
  {
    id: 93,
    question: "Which change was introduced by the 2009 amendments to the e-Privacy Directive 2002/58/EC?",
    options: ["A. A voluntary notification for personal data breaches applicable to all data controllers.", "B. A voluntary notification for personal data breaches applicable to electronic communication providers.", "C. A mandatory notification for personal data breaches applicable to all data controllers.", "D. A mandatory notification for personal data breaches applicable to electronic communication providers."],
    correctAnswer: "D",
    explanation: "正确答案 D。2009 年对 ePrivacy 指令（2002/58/EC，经 2009/136/EC 修订）的修订新增了强制性数据泄露\n通知义务，但该义务仅适用于电子通信服务提供商（如电信运营商、ISP），而非所有数据控制者——面\n向所有控制者的强制泄露通知义务是后来 GDPR（第 33、34 条）才引入的。知识点：2009 年 ePrivacy 指\n令修订引入的强制泄露通知义务及其适用主体的历史局限性（相较 GDPR 的扩展）。",
    topic: "ePrivacy指令",
    verified: "accurate"
  },
  {
    id: 94,
    question: "What is a reason the European Court of Justice declared the Data Retention Directive invalid in 2014?",
    options: ["A. The requirements affected individuals without exception.", "B. The requirements were financially burdensome to EU businesses.", "C. The requirements specified that data must be held within the EU.", "D. The requirements had limitations on how national authorities could use data."],
    correctAnswer: "A",
    explanation: "正确答案 A。欧洲法院在 Digital Rights Ireland 案（2014）中认定《数据留存指令》无差别地要求对几乎\n所有电子通信用户的流量和位置数据进行大规模留存，未区分个人是否涉嫌犯罪或存在其他相关联系，\n构成对隐私权和数据保护权的不成比例干预，因而宣告该指令无效。B（财务负担）、C（数据须留在欧\n盟境内）、D（对国家机关使用数据的限制）均非该判决认定无效的核心理由。知识点：Digital Rights\nIreland 案及数据留存指令被宣告无效的比例原则依据。",
    topic: "监管机构",
    verified: "accurate"
  },
  {
    id: 95,
    question: "Which type of personal data does the GDPR define as a “special category” of personal data?",
    options: ["A. Educational history.", "B. Trade-union membership.", "C. Closed Circuit Television (CCTV) footage.", "D. Financial information."],
    correctAnswer: "B",
    explanation: "正确答案 B。第 9(1)条明确列举的“特殊类别数据”包括：种族或民族出身、政治观点、宗教或哲学信仰、\n工会会员身份、基因数据、生物识别数据（用于唯一识别）、健康数据、性生活或性取向数据。教育经\n历（A）、CCTV 影像（C，除非能揭示特殊类别信息如健康状况）、财务信息（D）通常属于一般个人\n数据而非特殊类别数据。知识点：第 9 条特殊类别数据的法定列举范围。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 96,
    question: "After leaving the EU under the terms of Brexit, the United Kingdom will seek an adequacy determination.\nWhat is the reason for this?",
    options: ["A. The Insurance Commissioner determined that an adequacy determination is required by the Data Protection Act.", "B. Adequacy determinations automatically lapse when a Member State leaves the EU.", "C. The UK is now a third country because it’s no longer subject to the GDPR.", "D. The UK is less trustworthy now that its not part of the Union."],
    correctAnswer: "C",
    explanation: "答案 C 在历史语境下正确。英国自 2021 年起已是欧盟 GDPR 第五章意义上的第三国；欧盟委员会于 2021 年作出充\n分性决定，并于 2025 年 12 月 19 日续期，现有效期至 2031 年 12 月 27 日。",
    topic: "GDPR",
    verified: "qualified"
  },
  {
    id: 97,
    question: "To which of the following parties does the territorial scope of the GDPR NOT apply?",
    options: ["A. All member countries of the European Economic Area.", "B. All member countries party to the Treaty of Lisbon.", "C. All member countries party to the Paris Agreement.", "D. All member countries of the European Union."],
    correctAnswer: "C",
    explanation: "正确答案 C。GDPR 的属地适用范围（第 3 条）及一般性适用范围覆盖欧盟成员国及通过欧洲经济区协议\n延伸适用的 EEA 国家（冰岛、列支敦士登、挪威），与欧盟条约框架（如里斯本条约缔约国即为成员\n国）相关，但与《巴黎协定》（一项气候变化国际条约，成员国范围与气候治理相关，和数据保护法域\n无关）完全无关。知识点：GDPR 属地适用范围——欧盟成员国及 EEA 国家，排除与数据保护无关的国\n际协定缔约国范围。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 98,
    question: "What must a data controller do in order to make personal data pseudonymous?",
    options: ["A. Separately hold any information that would allow linking the data to the data subject.", "B. Encrypt the data in order to prevent any unauthorized access or modification.", "C. Remove all indirect data identifiers and dispose of them securely.", "D. Use the data only in aggregated form for research purposes."],
    correctAnswer: "A",
    explanation: "正确答案 A。第 4(5)条对假名化的核心要求是：用于重新识别数据主体的补充信息须单独保存，并采取技\n术和组织措施确保个人数据不会被归属到已识别或可识别的自然人。加密（B）只是可用于实现假名化目\n标的技术手段之一而非唯一/充分方式；移除间接标识符（C）更接近匿名化操作；仅用于研究的聚合数\n据（D）已超出假名化范畴，接近匿名化。知识点：第 4(5)条假名化的法定构成要件——补充信息的分离\n保存。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 99,
    question: "Which of the following entities would most likely be exempt from complying with the GDPR?",
    options: ["A. A South American company that regularly collects European customers’ personal data.", "B. A company that stores all customer data in Australia and is headquartered in a European Union (EU) member state.", "C. A Chinese company that has opened a satellite office in a European Union (EU) member state to service European customers.", "D. A North American company servicing customers in South Africa that uses a cloud storage system made by a European company."],
    correctAnswer: "D",
    explanation: "正确答案 D。北美公司服务的是南非（非欧盟）客户，即便使用了欧洲云服务商提供的存储系统，只要\n其处理活动本身既不针对欧盟数据主体提供商品服务，也不监测欧盟境内的行为，就不落入 GDPR 第 3\n条域外适用范围（云服务商所在地本身不足以触发 GDPR 对客户公司的适用）。A（南美公司定期收集欧\n洲客户数据，构成向欧盟提供服务，触发 GDPR）、B（欧盟成员国总部公司显然受 GDPR 约束，数据存\n储地不影响其作为欧盟设立机构须遵守 GDPR）、C（在欧盟设立卫星机构服务欧洲客户，同样落入\nGDPR 适用范围）均需遵守 GDPR。知识点：第 3 条域外适用性判断——设立地标准与目标指向标准，及\n“云服务商所在地”通常不构成触发因素。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 100,
    question: "Article 29 Working Party has emphasized that the GDPR forbids “forum shopping”, which occurs when\ncompanies do what?",
    options: ["A. Choose the data protection officer that is most sympathetic to their business concerns.", "B. Designate their main establishment in member state with the most flexible practices.", "C. File appeals of infringement judgments with more than one EU institution simultaneously.", "D. Select third-party processors on the basis of cost rather than quality of privacy protection."],
    correctAnswer: "B",
    explanation: "正确答案 B。“监管机构选购”（forum shopping）是指企业刻意将其“主要设立地”（main establishment，决\n定主导监管机构归属的关键因素）设在监管执法相对宽松、被认为对企业更“友好”的成员国，以规避严格\n监管，这被 WP29 明确批评为规避一站式机制精神的行为。A（挑选 DPO 人选，与 forum shopping 无\n关）、C（同时向多个欧盟机构提起上诉，与 forum shopping 概念不符）、D（基于成本选择处理者，属\n于采购决策而非监管机构选购）均非 forum shopping 的准确定义。知识点：一站式机制下“监管机构选购”\n（forum shopping）的定义及主要设立地认定的实质性要求（第 4(16)条，须为实际作出处理决策的地\n点）。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 101,
    question: "Under Article 9 of the GDPR, which of the following categories of data is NOT expressly prohibited from\ndata processing?",
    options: ["A. Personal data revealing ethnic origin.", "B. Personal data revealing genetic information.", "C. Personal data revealing financial information.", "D. Personal data revealing trade union membership."],
    correctAnswer: "C",
    explanation: "正确答案 C。第 9(1)条列举的特殊类别数据包括种族/民族出身、政治观点、宗教信仰、工会会员身份、\n基因/生物识别数据、健康数据、性生活/性取向数据，财务信息并不在该列举范围内，因此处理财务数据\n一般适用第 6 条普通合法依据即可，无需满足第 9(2)条更严格的例外条件。知识点：第 9 条特殊类别数据\n的封闭式列举范围（不含财务信息）。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 102,
    question: "When does the GDPR provide more latitude for a company to process data beyond its original collection\npurpose?",
    options: ["A. When the data has been pseudonymized.", "B. When the data is protected by technological safeguards.", "C. When the data serves legitimate interest of third parties.", "D. When the data subject has failed to use a provided opt-out mechanism."],
    correctAnswer: "A",
    explanation: "正确答案 A。假名化被 GDPR 明确列为有助于满足目的限制原则下“兼容性处理”测试的保障措施之一\n（第 6(4)(e)条将“是否采取假名化等适当保障措施”列为判断新处理是否与原目的兼容的考量因素），从\n而为控制者在原始收集目的之外使用数据提供更大灵活性。B（技术保护措施笼统表述，不如假名化具体\n对应法条）、C（服务第三方合法利益，与是否可超范围处理无必然联系）、D（未使用退出机制不代表\n默示同意新用途）均不准确。知识点：第 6(4)条兼容性处理测试中假名化作为保障措施的作用。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 103,
    question: "In which situation would a data controller most likely be able to justify the processing of the data of a child\nwithout parental consent?",
    options: ["A. When the data is to be processed for market research.", "B. When providing preventive or counselling services to the child.", "C. When providing the child with materials purely for educational use.", "D. When a legitimate business interest makes obtaining consent impractical."],
    correctAnswer: "B",
    explanation: "正确答案 B。为儿童提供预防性或咨询性服务（如青少年心理健康、性教育咨询热线等）时，出于保护\n儿童自身利益、避免因需要监护人知情而阻碍儿童获得必要帮助的考虑，通常被认为可以在无监护人同\n意的情况下提供，这也是许多成员国及 WP29 相关指引认可的例外情形。A（市场调研）、C（纯教育用\n途材料）、D（合法利益+同意不便）均不构成第 8 条同意规则的正当例外理由。知识点：儿童数据处理\n中监护人同意规则的例外情形（预防或咨询服务）。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 104,
    question: "According to the GDPR, when should the processing of photographs be considered processing of special\ncategories of personal data?",
    options: ["A. When processed with the intent to publish information regarding a natural person on publicly accessible media.", "B. When processed with the intent to proceed to scientific or historical research projects.", "C. When processed with the intent to uniquely identify or authenticate a natural person.", "D. When processed with the intent to comply with a law."],
    correctAnswer: "C",
    explanation: "正确答案 C。前言第 51 条明确指出，仅当照片经过特定技术手段处理、用于唯一识别或验证特定自然人\n身份（即构成“生物识别数据”）时，照片处理才落入第 9 条特殊类别数据的范畴；单纯为发布报道\n（A）、科研历史研究（B）或履行法律义务（D）而处理照片，若未涉及生物识别目的，则不自动构成\n特殊类别数据处理。知识点：前言第 51 条关于照片构成生物识别特殊类别数据的判断标准。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 105,
    question: "Which GDPR principle would a Spanish employer most likely depend upon to annually send the personal\n\ndata of its employees to the national tax authority?",
    options: ["A. The consent of the employees.", "B. The legal obligation of the employer.", "C. The legitimate interest of the public administration.", "D. The protection of the vital interest of the employees. 6"],
    correctAnswer: "B",
    explanation: "正确答案 B。雇主向国家税务机关报送员工薪酬等个人数据是履行税法等法定义务的强制性要求，其合\n法处理依据是第 6(1)(c)条“履行控制者所负法定义务”，而非需要员工同意（A，在雇佣关系及法定义务场\n景下同意并非合适依据）、公共行政的合法利益（C，此处更准确的依据是法定义务而非合法利益）或员\n工生命攸关利益（D，与个税申报无关）。知识点：第 6(1)(c)条“法定义务”作为处理合法依据的典型应用\n场景。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 106,
    question: "An online company’s privacy practices vary due to the fact that it offers a wide variety of services. How\ncould it best address the concern that explaining them all would make the policies incomprehensible?",
    options: ["A. Use a layered privacy notice on its website and in its email communications.", "B. Identify uses of data in a privacy notice mailed to the data subject.", "C. Provide only general information about its processing activities and offer a toll-free number for more information.", "D. Place a banner on its website stipulating that visitors agree to its privacy policy and terms of use by visiting the site."],
    correctAnswer: "A",
    explanation: "正确答案 A。当企业业务和处理活动种类繁多、难以用单一简明政策全部说清时，采用“分层隐私声明”\n（在网站和邮件中先提供简明概览，再提供入口链接到详细政策）是 ICO 推荐的最佳实践，可兼顾透明\n度与可读性。B（邮寄详细清单，操作成本高且可读性未必提升）、C（仅提供概括信息+客服电话，不\n满足透明度所需的具体信息告知要求）、D（“继续访问网站即视为同意”的横幅方式，不构成有效同意也\n不满足透明度要求）均不是理想做法。知识点：透明度原则的实践方法——分层隐私声明（Layered\nNotice）。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 107,
    question: "The GDPR requires controllers to supply data subjects with detailed information about the processing of\ntheir data. Where a controller obtains data directly from data subjects, which of the following items of\ninformation does NOT legally have to be supplied?",
    options: ["A. The recipients or categories of recipients.", "B. The categories of personal data concerned.", "C. The rights of access, erasure, restriction, and portability.", "D. The right to lodge a complaint with a supervisory authority."],
    correctAnswer: "B",
    explanation: "正确答案 B。第 13 条要求直接从数据主体处收集数据时应告知的信息包括：控制者身份联系方式、处理\n目的和依据、合法利益（如适用）、接收方或接收方类别（A）、留存期限、数据主体权利（含访问、删\n除、限制、可携权，C）、投诉权（D）等，但并未要求须告知“所涉及的个人数据类别”这一项——该项\n告知义务实际上出现在第 14 条（针对非直接从数据主体处获得数据的情形），因为直接从本人收集时其\n本身已知晓所提供的数据类别，无需另行告知。知识点：第 13 条（直接收集）与第 14 条（间接收集）告\n知义务清单的差异比较。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 108,
    question: "According to Article 14 of the GDPR, how long does a controller have to provide a data subject with\nnecessary privacy information, if that subject’s personal data has been obtained from other sources?",
    options: ["A. As soon as possible after obtaining the personal data.", "B. As soon as possible after the first communication with the data subject.", "C. Within a reasonable period after obtaining the personal data, but no later than one month.", "D. Within a reasonable period after obtaining the personal data, but no later than eight weeks."],
    correctAnswer: "C",
    explanation: "正确答案 C。第 14(3)(a)条规定，若数据并非直接从数据主体处获得，控制者须在获得数据后的合理期限\n内提供相关信息，但最迟不得超过一个月（若数据将用于与数据主体沟通，则最迟应在首次沟通时提\n供；若拟披露给其他接收方，则最迟应在首次披露时提供，取二者中较早者，但整体不超过一个月的上\n限）。A、B 表述过于宽泛缺少明确期限，D 的“八周”并非法定期限。知识点：第 14(3)条间接获取个人数\n据时告知义务的具体时限规定。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 109,
    question: "When would a data subject NOT be able to exercise the right to portability?",
    options: ["A. When the processing is necessary to perform a task in the exercise of authority vested in the controller.", "B. When the processing is carried out pursuant to a contract with the data subject.", "C. When the data was supplied to the controller by the data subject.", "D. When the processing is based on consent."],
    correctAnswer: "A",
    explanation: "正确答案 A。第 20(1)条规定数据可携权仅适用于处理基于同意或合同（B、D 情形），且处理须通过自\n动化方式进行，数据须是数据主体本人提供的（C 情形属于适用范围内）；而当处理是为履行控制者被赋\n予的公共职权任务或行使公权力所必需时（即基于第 6(1)(e)条的法定职权），数据可携权不适用。知识\n点：第 20 条数据可携权的适用条件及排除情形（公共职权处理）。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 110,
    question: "In which of the following situations would an individual most likely to be able to withdraw her consent for\nprocessing?",
    options: ["A. When she is leaving her bank and moving to another bank.", "B. When she has recently changed jobs and no longer works for the same company.", "C. When she disagrees with a diagnosis her doctor has recorded on her records.", "D. When she no longer wishes to be sent marketing materials from an organization."],
    correctAnswer: "D",
    explanation: "正确答案 D。撤回同意仅适用于以“同意”作为合法处理依据的场景，直接营销通常正是基于同意（或作为\n对合法利益处理的反对权行使）开展的，因此个人可随时要求停止接收营销材料，相当于撤回同意/行使\n反对权。A（更换银行涉及合同关系终止，非同意撤回问题）、B（离职涉及雇佣合同关系变化）、C\n（对诊断结果有异议属于数据准确性/更正权问题，第 16 条）均与撤回同意的场景不符。知识点：第 7(3)\n条同意撤回权的适用范围，直接营销场景下同意/反对权的行使。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 111,
    question: "As a result of the European Court of Justice’s ruling in the case of Google v. Spain, search engines\noutside the EEA are also likely to be subject to the Regulation’s right to be forgotten. This holds true if the\nactivities of an EU subsidiary and its U.S. parent are what?",
    options: ["A. Supervised by the same Data Protection Officer.", "B. Consistent with Privacy Shield requirements", "C. Bound by a standard contractual clause.", "D. Inextricably linked in their businesses."],
    correctAnswer: "D",
    explanation: "正确答案 D。欧洲法院在 Google 诉西班牙案（Google Spain，2014）中确立：只要非欧盟母公司的搜索引\n擎业务与其欧盟子公司（如广告销售业务）在经济上“密不可分”（inextricably linked），即可将该母公司\n的搜索处理活动视为在欧盟境内“设立机构背景下”进行的处理，从而使被遗忘权等 GDPR 规则得以适用\n于欧盟境外的母公司业务。A、B、C 均非该案确立的关键判断标准。知识点：Google Spain 案确立的“设\n立地”及“活动关联”标准，用于将境外母公司处理活动纳入欧盟数据保护法适用范围。",
    topic: "监管机构",
    verified: "accurate"
  },
  {
    id: 112,
    question: "A German data subject was the victim of an embarrassing prank 20 years ago. A newspaper website\npublished an article about the prank at the time, and the article is still available on the newspaper’s\nwebsite. Unfortunately, the prank is the top search result when a user searches on the victim’s name. The\ndata subject requests that SearchCo delist this result. SearchCo agrees, and instructs its technology team\nto avoid scanning or indexing the article. What else must SearchCo do?",
    options: ["A. Notify the newspaper that its article it is delisting the article.", "B. Fully erase the URL to the content, as opposed to delist which is mainly based on data subject’s name.", "C. Identify other controllers who are processing the same information and inform them of the delisting request.", "D. Prevent the article from being listed in search results no matter what search terms are entered into the search engine."],
    correctAnswer: "无（原四项均不准确）",
    explanation: "现行法下原四项均不准确。EDPB《搜索引擎被遗忘权指南 5/2019》明确指出，GDPR 第 17(2) 条的“通知其他控制\n者”义务通常不适用于搜索引擎，因此无需通知原始发布者或其他搜索引擎（排除 A、C）。去索引通常只要求链接\n不再出现在以数据主体姓名为主要检索条件的结果中，内容仍可通过其他检索条件访问（排除 D）；也不要求一般\n性地从索引或缓存中彻底删除 URL，只有少数例外情形才需完全删除（排除 B）。",
    topic: "监管机构",
    verified: "corrected"
  },
  {
    id: 113,
    question: "What are the obligations of a processor that engages a sub-processor?",
    options: ["A. The processor must give the controller prior written notice and perform a preliminary audit of the sub- processor.", "B. The processor must obtain the controller’s specific written authorization and provide annual reports on the sub-processor’s performance.", "C. The processor must receive a written agreement that the sub-processor will be fully liable to the controller for the performance of its obligations in relation to the personal data concerned.", "D. The processor must obtain the consent of the controller and ensure the sub-processor complies with data processing obligations that are equivalent to those that apply to the processor."],
    correctAnswer: "D",
    explanation: "正确答案 D。第 28(4)条规定，处理者委托次级处理者（sub-processor）时，须事先取得控制者的一般或\n特定书面授权，并通过合同确保次级处理者承担与主处理者相同水准的数据保护义务。A（须进行“初步\n审计”，非法定强制要求的具体表述）、B（要求“年度报告”，非法条明确规定的内容）、C（次级处理者\n须对控制者承担“完全责任”的书面协议，责任结构上主处理者仍对控制者负首要责任，次级处理者违约由\n处理者向控制者负责，而非次级处理者直接对控制者负全责）均不准确。知识点：第 28(4)条次级处理者\n的委托授权及等同保护义务要求。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 114,
    question: "What must be included in a written agreement between the controller and processor in relation to\nprocessing conducted on the controller’s behalf?",
    options: ["A. An obligation on the processor to report any personal data breach to the controller within 72 hours.", "B. An obligation on both parties to report any serious personal data breach to the supervisory authority.", "C. An obligation on both parties to agree to a termination of the agreement if the other party is responsible for a personal data breach.", "D. An obligation on the processor to assist the controller in complying with the controller’s obligations to notify the supervisory authority about personal data breaches."],
    correctAnswer: "D",
    explanation: "正确答案 D。第 28(3)(f)条要求处理者协议中包含处理者协助控制者履行其向监管机构通知数据泄露等义\n务的条款（因为通知监管机构本质上是控制者的义务，处理者需提供必要协助）。A（要求处理者 72 小\n时内报告控制者，72 小时是控制者向监管机构报告的期限，而非处理者向控制者报告的强制期限，处理\n者义务是“不得无故拖延”地通知，无固定 72 小时数字）、B（两方均须报告监管机构，实际上通常仅控\n制者负责对外报告）、C（因泄露而须终止协议，非法定强制条款）均不准确。知识点：第 28(3)条处理\n者协议须包含的协助控制者履行泄露通知义务的条款。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 115,
    question: "To provide evidence of GDPR compliance, a company performs an internal audit. As a result, it finds a\ndata base, password-protected, listing all the social network followers of the client.\nRegarding the domain of the controller-processor relationships, how is this situation considered?",
    options: ["A. Compliant with the security principle, because the data base is password-protected.", "B. Non-compliant, because the storage of the data exceeds the tasks contractually authorized by the controller.", "C. Not applicable, because the data base is password protected, and therefore is not at risk of identifying any data subject.", "D. Compliant with the storage limitation principle, so long as the internal auditor permanently deletes the data base."],
    correctAnswer: "B",
    explanation: "正确答案 B。处理者建立、存储超出委托合同授权范围（如控制者未授权存储全部社交媒体关注者名\n单）的数据库，即便采取了密码保护等安全措施，仍属于超越合同授权范围处理数据的违规行为（违反\n第 28(3)(a)条“仅按控制者指示处理”的核心要求）。A、C 仅关注安全措施本身而忽视了“超范围处理”这一\n核心违规点；D 的表述（内部审计员事后删除即视为合规存储限制）并不能追溯性地使此前的违规存储\n行为合法化。知识点：第 28 条处理者“仅按指示处理”原则及超范围处理的违规认定。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 116,
    question: "There are three domains of security covered by Article 32 of the GDPR that apply to both the controller\n\nand the processor. These include all of the following EXCEPT?",
    options: ["A. Consent management and withdrawal.", "B. Incident detection and response.", "C. Preventative security.", "D. Remedial security."],
    correctAnswer: "A",
    explanation: "正确答案 A。第 32 条安全处理要求围绕预防性安全措施（C，如加密、访问控制等）、事件检测与响应\n（B）、补救性安全措施（D，如灾难恢复、可用性保障）等技术组织安全域展开，而“同意管理与撤回”\n属于第 7 条同意规则范畴，并非第 32 条安全处理所涵盖的安全域。知识点：第 32 条安全处理要求所涵盖\n的技术组织安全维度及其与同意规则（第 7 条）的区分。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 117,
    question: "In the event of a data breach, which type of information are data controllers NOT required to provide to\neither the supervisory authorities or the data subjects?",
    options: ["A. The predicted consequences of the breach.", "B. The measures being taken to address the breach.", "C. The type of security safeguards used to protect the data.", "D. The contact details of the appropriate data protection officer."],
    correctAnswer: "C",
    explanation: "正确答案 C。第 33、34 条要求控制者向监管机构/数据主体说明的信息包括：泄露性质、可能后果\n（A）、已采取或将采取的补救措施（B）、DPO 联系方式（D）等，但并不要求详细披露“用于保护数据\n所采用的具体安全防护技术类型”——出于安全考虑，过度公开具体安全技术细节反而可能带来二次安全\n风险，因此法律未将此列为强制披露内容。知识点：第 33/34 条数据泄露通知内容清单及不要求披露具体\n安全技术细节的考量。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 118,
    question: "In which case would a controller who has undertaken a DPIA most likely need to consult with a\nsupervisory authority?",
    options: ["A. Where the DPIA identifies that personal data needs to be transferred to other countries outside of the EEA.", "B. Where the DPIA identifies high risks to individuals’ rights and freedoms that the controller can take steps to reduce.", "C. Where the DPIA identifies that the processing being proposed collects the sensitive data of EU citizens.", "D. Where the DPIA identifies risks that will require insurance for protecting its business interests."],
    correctAnswer: "无（B 仅在“无法充分降低风险”时才正确）",
    explanation: "现行法下原四项没有完全正确的答案。GDPR 第 36(1) 条要求：DPIA 显示在控制者未采取措施降低风险的情况下，\n拟议处理仍会造成高风险，或采取合理措施后仍存在无法充分降低的残余高风险，才须在处理前咨询监管机构。B\n若把“the controller can take steps to reduce”改为“the controller cannot sufficiently reduce”，才是准确表述。",
    topic: "GDPR",
    verified: "corrected"
  },
  {
    id: 119,
    question: "According to the GDPR, what is the main task of a Data Protection Officer (DPO)?",
    options: ["A. To create and maintain records of processing activities.", "B. To conduct Privacy Impact Assessments on behalf of the controller or processor.", "C. To monitor compliance with other local or European data protection provisions.", "D. To create procedures for notification of personal data breaches to competent supervisory authorities."],
    correctAnswer: "C",
    explanation: "正确答案 C。第 39(1)(b)条将“监督遵守 GDPR 及其他欧盟/成员国数据保护规定的情况”列为 DPO 的核心\n任务之一。制作处理活动记录（A）、开展 DPIA（B，DPO 应就 DPIA 提供建议并监督其执行，但 DPIA\n本身由控制者负责开展而非 DPO 代为执行）、制定数据泄露通知流程（D）均是 DPO 可能参与协助的具\n体工作，但并非第 39 条概括性描述的“主要任务”本身，监督合规才是 DPO 最核心、最具概括性的职责。\n知识点：第 39 条 DPO 的法定职责清单及“监督合规”这一核心任务。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 120,
    question: "In which of the following cases, cited as an example by a WP29 guidance, would conducting a single data\nprotection impact assessment to address multiple processing operations be allowed?",
    options: ["A. A medical organization that wants to begin genetic testing to support earlier research for which they have performed a DPIA.", "B. A data controller who plans to use a new technology product that has already undergone a DPIA by the product’s provider.", "C. A marketing team that wants to collect mailing addresses of customers for whom they already have email addresses.", "D. A railway operator who plans to evaluate the same video surveillance in all the train stations of his company."],
    correctAnswer: "D",
    explanation: "正确答案 D。WP29 DPIA 指南举例说明，当处理活动具有高度相似性（如同一铁路运营商在旗下所有车\n站采用相同类型、相同用途的视频监控系统）时，可以针对该类同质化、大规模重复的处理操作开展一\n份综合性 DPIA，而无需逐一评估。A（不同研究目的的新增基因检测项目）、B（依赖供应商已做的\nDPIA 而非自行评估自身具体处理情境的风险，供应商的产品 DPIA 不能替代控制者自身的处理情境评\n估）、C（收集新类别数据用于不同目的，非典型的“同质化重复处理”情形）均不符合 WP29 列举的“单\n一 DPIA 覆盖多重处理”适用情形。知识点：WP29 DPIA 指南关于对相似、重复处理操作可合并评估的例\n外规定。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 121,
    question: "Under Article 30 of the GDPR, controllers are required to keep records of all of the following EXCEPT?",
    options: ["A. Incidents of personal data breaches, whether disclosed or not.", "B. Data inventory or data mapping exercises that have been conducted.", "C. Categories of recipients to whom the personal data have been disclosed.", "D. Retention periods for erasure and deletion of categories of personal data."],
    correctAnswer: "A、B（题目存在多解）",
    explanation: "本题存在多解。GDPR 第 30(1) 条的法定记录内容包括处理目的、数据主体与数据类别、接收方类别、跨境传输、预\n计删除期限及安全措施概述等。数据泄露事件记录属于第 33(5) 条的独立义务，因此 A 不属于第 30 条法定内容；\n“已开展的数据盘点或数据映射活动”本身也不是第 30(1) 条要求必须写入记录的项目，因此 B 同样符合“EXCEPT”。\nC、D 则属于第 30 条要求。",
    topic: "GDPR",
    verified: "corrected"
  },
  {
    id: 122,
    question: "In which scenario is a Controller most likely required to undertake a Data Protection Impact Assessment?",
    options: ["A. When the controller is collecting email addresses from individuals via an online registration form for marketing purposes.", "B. When personal data is being collected and combined with other personal data to profile the creditworthiness of individuals.", "C. When the controller is required to have a Data Protection Officer.", "D. When personal data is being transferred outside of the EEA."],
    correctAnswer: "B",
    explanation: "正确答案 B。结合个人数据评估信用状况属于典型的“画像”评估个人经济状况、可靠性等方面特征的行\n为，且往往涉及大规模、系统性评估并可能对个人产生重大法律或类似重大影响（如信贷决策），属于\nWP29 DPIA 指南明确列举的高风险情形，须开展 DPIA。A（简单收集邮箱用于营销）、C（企业设有\nDPO 本身并非 DPIA 触发条件）、D（跨境传输本身若非结合其他高风险因素，不必然触发 DPIA）均非\n典型高风险情形。知识点：第 35(3)(a)条及 WP29 指南——大规模画像评估信用等重大决策场景须做\nDPIA。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 123,
    question: "Which of the following demonstrates compliance with the accountability principle found in Article 5,\nSection\n\n2 of the GDPR?",
    options: ["A. Anonymizing special categories of data.", "B. Conducting regular audits of the data protection program.", "C. Getting consent from the data subject for a cross border data transfer.", "D. Encrypting data in transit and at rest using strong encryption algorithms. 6"],
    correctAnswer: "B",
    explanation: "正确答案 B。第 5(2)条问责制原则要求控制者不仅要遵守数据保护原则，还须能够证明其合规，定期开展\n数据保护项目内部审计正是主动证明并持续验证合规状态的典型问责制实践。A（匿名化特殊类别数据，\n属于具体的数据最小化/安全技术措施而非问责制的直接体现）、C（获得跨境传输同意，属于合法依据/\n传输机制层面）、D（加密静态和传输中数据，属于第 32 条安全措施）均是具体合规动作，而非“证明并\n持续管理整体合规状态”这一问责制原则的典型例证。知识点：第 5(2)条问责制原则及其典型落地措施\n（内部审计）。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 124,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nDynaroux Fashion (‘Dynaroux’) is a successful international online clothing retailer that employs\napproximately 650 people at its headquarters based in Dublin, Ireland. Ronan is their recently appointed\ndata protection officer, who oversees the company’s compliance with the General Data Protection\nRegulation (GDPR) and other privacy legislation.\n\nThe company offers both male and female clothing lines across all age demographics, including children.\nIn doing so, the company processes large amounts of information about such customers, including\npreferences and sensitive financial information such as credit card and bank account numbers.\n\nIn an aggressive bid to build revenue growth, Jonas, the CEO, tells Ronan that the company is launching a\nnew mobile app and loyalty scheme that puts significant emphasis on profiling the company’s customers\nby analyzing their purchases. Ronan tells the CEO that: (a) the potential risks of such activities means that\nDynaroux needs to carry out a data protection impact assessment to assess this new venture and its\nprivacy implications; and (b) where the results of this assessment indicate a high risk in the absence of\nappropriate protection measures, Dynaroux may have to undertake a prior consultation with the Irish Data\nProtection Commissioner before implementing the app and loyalty scheme.\n\nJonas tells Ronan that he is not happy about the prospect of having to directly engage with a supervisory\nauthority and having to disclose details of Dynaroux’s business plan and associated processing activities.\n\nWhich of the following facts about Dynaroux would trigger a data protection impact assessment under the\nGDPR?",
    options: ["A. The company will be undertaking processing activities involving sensitive data categories such as financial and children’s data.", "B. The company employs approximately 650 people and will therefore be carrying out extensive processing activities.", "C. The company plans to undertake profiling of its customers through analysis of their purchasing patterns.", "D. The company intends to shift their business model to rely more heavily on online shopping."],
    correctAnswer: "C",
    explanation: "正确答案 C。基于购买行为分析对客户进行画像评估，属于第 35(3)(a)条列举的“系统性、广泛评估个人特\n征以致对个人产生重大影响”情形，是触发 DPIA 的直接原因。A（涉及金融和儿童敏感数据类别，虽是\n风险因素之一，但触发本题 DPIA 的关键情节是画像本身而非数据类别）、B（员工人数不是 DPIA 触发\n标准）、D（商业模式转型不构成 DPIA 触发条件）均不是最直接、最贴切的触发因素。知识点：第\n35(3)(a)条画像评估作为 DPIA 触发情形之一。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 125,
    question: "Which mechanism, new to the GDPR, now allows for the possibility of personal data transfers to third\ncountries under Article 42?",
    options: ["A. Approved certifications.", "B. Binding corporate rules.", "C. Law enforcement requests.", "D. Standard contractual clauses."],
    correctAnswer: "A",
    explanation: "正确答案 A。第 42 条引入的“认证机制”（approved certification，如获批的数据保护印章/标志）是 GDPR\n新增的跨境传输保障工具之一（第 46(2)(f)条），使已获得认证并作出具有约束力承诺的数据接收方可依\n此进行跨境传输。约束性企业规则（B）和标准合同条款（D）并非 GDPR 新创设的机制，二者在\n95/46/EC 指令体系下已存在（BCRs 为 WP29 实践发展而来，SCCs 为欧盟委员会决定所创设），执法请\n求（C）与跨境传输合法机制无关。知识点：第 42、46 条新增的“认证”作为跨境传输保障机制。",
    topic: "历史沿革/95-46-EC",
    verified: "accurate"
  },
  {
    id: 126,
    question: "Which sentence best describes proper compliance for an international organization using Binding\nCorporate Rules (BCRs) as a controller or processor?",
    options: ["A. Employees must sign an ad hoc contractual agreement each time personal data is exported.", "B. All employees are subject to the rules in their entirety, regardless of where the work is taking place.", "C. All employees must follow the privacy regulations of the jurisdictions where the current scope of their work is established.", "D. Employees who control personal data must complete a rigorous certification procedure, as they are exempt from legal enforcement."],
    correctAnswer: "B",
    explanation: "正确答案 B。约束性企业规则（BCRs）一经获批，即对企业集团内部所有相关实体及其员工具有统一约\n束力，无论其身处哪个司法管辖区，都须遵守同一套集团内部规则，这正是 BCRs 作为“全球统一方案”的\n核心特征。A（每次数据出境须单独签订临时合同，与 BCRs“一次审批、持续适用”的特性相悖）、C\n（须遵守其所在辖区隐私法规，混淆了 BCRs 作为集团内部统一标准与各地本地法律遵从的关系）、D\n（可豁免法律责任，明显错误，BCRs 并不豁免任何法定义务或责任）均不准确。知识点：约束性企业规\n则（BCRs）对企业集团内部的统一约束效力。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 127,
    question: "With respect to international transfers of personal data, the European Data Protection Board (EDPB)\nconfirmed that derogations may be relied upon under what condition?",
    options: ["A. If the data controller has received preapproval from a Data Protection Authority (DPA), after submitting the appropriate documents.", "B. When it has been determined that adequate protection can be performed.", "C. Only if the Data Protection Impact Assessment (DPIA) shows low risk.", "D. Only as a last resort and when interpreted restrictively."],
    correctAnswer: "D",
    explanation: "正确答案 D。欧洲法院 Schrems II 判决后，EDPB 在其关于第 49 条克减条款（derogations，如明确同意、\n合同必需等）的常见问题解答中强调：这些克减情形应作为跨境传输的“最后手段”（last resort），且须严\n格限缩解释，不能作为常规传输机制的替代。A（须 DPA 事先批准，非法定要求）、B（存在“充分保护”\n的判断，恰恰与克减条款适用于缺乏适当保障机制情形下的例外性质相悖）、C（DPIA 显示低风险，非\n第 49 条的判断标准）均不准确。知识点：第 49 条克减条款的“最后手段”属性及限缩解释原则（Schrems\nII 判决后 EDPB 指引）。",
    topic: "判例法",
    verified: "accurate"
  },
  {
    id: 128,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nT-Craze, a German-headquartered specialty t-shirt company, was successfully selling to large German\nmetropolitan cities. However, after a recent merger with another German-based company that was selling\nto a broader European market, T-Craze revamped its marketing efforts to sell to a wider audience. These\nefforts included a complete redesign of its logo to reflect the recent merger, and improvements to its\nwebsite meant to capture more information about visitors through the use of cookies.\n\nT-Craze also opened various office locations throughout Europe to help expand its business. While\nGermany continued to host T-Craze’s headquarters and main product-design office, its French affiliate\nbecame responsible for all marketing and sales activities. The French affiliate recently procured the\nservices of Right Target, a renowned marketing firm based in the Philippines, to run its latest marketing\ncampaign. After thorough research, Right Target determined that T-Craze is most successful with\ncustomers between the ages of 18 and 22. Thus, its first campaign targeted university students in several\nEuropean capitals, which yielded nearly 40% new customers for T-Craze in one quarter. Right Target also\nran subsequent campaigns for T-Craze, though with much less success.\n\nThe last two campaigns included a wider demographic group and resulted in countless unsubscribe\n\nrequests, including a large number in Spain. In fact, the Spanish data protection authority received a\n\ncomplaint from Sofia, a mid-career investment banker. Sofia was upset after receiving a marketing\ncommunication even after unsubscribing from such communications from the Right Target on behalf of T-\nCraze.\n\nWhich of the following is T-Craze’s lead supervisory authority?",
    options: ["A. Germany, because that is where T-Craze is headquartered.", "B. France, because that is where T-Craze conducts processing of personal information.", "C. Spain, because that is T-Craze’s primary market based on its marketing campaigns.", "D. T-Craze may choose its lead supervisory authority where any of its affiliates are based, because it has presence in several European countries."],
    correctAnswer: "B",
    explanation: "正确答案 B。主导监管机构的认定核心标准是控制者“主要设立地”，即实际作出关于处理目的和方式决策\n的地点（第 4(16)条）；本案中，T-Craze 的营销和销售决策实际由其法国分支负责，即实际处理决策发生\n地在法国，因此法国监管机构（CNIL）为主导监管机构，而非仅因总部所在地德国（A）、市场规模较\n大的西班牙（C）或可任意选择（D，主要设立地须依据实际决策地这一客观标准确定，而非企业自由选\n择）。知识点：第 4(16)条主导监管机构认定标准——实际处理决策地而非总部注册地。",
    topic: "ePrivacy指令",
    verified: "accurate"
  },
  {
    id: 129,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nT-Craze, a German-headquartered specialty t-shirt company, was successfully selling to large German\nmetropolitan cities. However, after a recent merger with another German-based company that was selling\nto a broader European market, T-Craze revamped its marketing efforts to sell to a wider audience. These\nefforts included a complete redesign of its logo to reflect the recent merger, and improvements to its\nwebsite meant to capture more information about visitors through the use of cookies.\n\nT-Craze also opened various office locations throughout Europe to help expand its business. While\nGermany continued to host T-Craze’s headquarters and main product-design office, its French affiliate\n\nbecame responsible for all marketing and sales activities. The French affiliate recently procured the\nservices of Right Target, a renowned marketing firm based in the Philippines, to run its latest marketing\ncampaign. After thorough research, Right Target determined that T-Craze is most successful with\ncustomers between the ages of 18 and 22. Thus, its first campaign targeted university students in several\nEuropean capitals, which yielded nearly 40% new customers for T-Craze in one quarter. Right Target also\nran subsequent campaigns for T-Craze, though with much less success.\n\nThe last two campaigns included a wider demographic group and resulted in countless unsubscribe\nrequests, including a large number in Spain. In fact, the Spanish data protection authority received a\ncomplaint from Sofia, a mid-career investment banker. Sofia was upset after receiving a marketing\ncommunication even after unsubscribing from such communications from the Right Target on behalf of T-\n\nCraze.\n\nWhy does the Spanish supervisory authority notify the French supervisory authority when it opens an\ninvestigation into T-Craze based on Sofia’s complaint?",
    options: ["A. T-Craze has a French affiliate.", "B. The French affiliate procured the services of Right Target.", "C. T-Craze conducts its marketing and sales activities in France.", "D. The Spanish supervisory authority is providing a courtesy notification not required under the GDPR."],
    correctAnswer: "B",
    explanation: "正确答案 B。西班牙监管机构收到投诉后通知法国监管机构，是因为根据第 56(3)条一站式合作机制，涉\n及跨境处理的投诉应转交由主导监管机构（本案为法国 CNIL，因其负责该处理活动的决策）处理，而\nRight Target 受法国分支委托开展了该营销活动，说明处理决策与法国存在关联，因此触发向法国通知的\n合作程序。A（仅因有法国分支的事实本身不足以说明理由）、C（营销活动实际是在法国分支决策下开\n展的，而非“T-Craze 在法国开展营销销售活动”这一泛泛表述）、D（并非“礼貌性通知”，而是法定的一\n站式合作程序要求）均不如 B 准确。知识点：第 56 条一站式合作机制下跨境投诉向主导监管机构转交的\n程序。",
    topic: "ePrivacy指令",
    verified: "accurate"
  },
  {
    id: 130,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nT-Craze, a German-headquartered specialty t-shirt company, was successfully selling to large German\n\nmetropolitan cities. However, after a recent merger with another German-based company that was selling\nto a broader European market, T-Craze revamped its marketing efforts to sell to a wider audience. These\nefforts included a complete redesign of its logo to reflect the recent merger, and improvements to its\nwebsite meant to capture more information about visitors through the use of cookies.\n\nT-Craze also opened various office locations throughout Europe to help expand its business. While\nGermany continued to host T-Craze’s headquarters and main product-design office, its French affiliate\nbecame responsible for all marketing and sales activities. The French affiliate recently procured the\nservices of Right Target, a renowned marketing firm based in the Philippines, to run its latest marketing\ncampaign. After thorough research, Right Target determined that T-Craze is most successful with\ncustomers between the ages of 18 and 22. Thus, its first campaign targeted university students in several\nEuropean capitals, which yielded nearly 40% new customers for T-Craze in one quarter. Right Target also\nran subsequent campaigns for T-Craze, though with much less success.\n\nThe last two campaigns included a wider demographic group and resulted in countless unsubscribe\nrequests, including a large number in Spain. In fact, the Spanish data protection authority received a\ncomplaint from Sofia, a mid-career investment banker. Sofia was upset after receiving a marketing\ncommunication even after unsubscribing from such communications from the Right Target on behalf of T-\nCraze.\n\nWhat is the best option for the lead regulator when responding to the Spanish supervisory authority’s\nnotice that it plans to take action regarding Sofia’s complaint?",
    options: ["A. Accept, because it did not receive any complaints.", "B. Accept, because GDPR permits non-lead authorities to take action for such complaints.", "C. Reject, because Right Target’s processing was conducted throughout Europe.", "D. Reject, because GDPR does not allow other supervisory authorities to take action if there is a lead authority."],
    correctAnswer: "B",
    explanation: "正确答案 B。GDPR 并未赋予主导监管机构对所有跨境投诉案件的绝对排他管辖权；对于具有纯粹本地影\n响、仅涉及本地设立机构且不实质影响其他成员国数据主体的投诉，非主导监管机构（此处为西班牙监\n管机构）依第 56(2)条仍可自行处理，主导监管机构应予接受（accept）而非拒绝，这体现了一站式机制\n“仅适用于跨境处理”的边界。A、C、D 均误解了一站式机制关于本地事项处理权限保留的规则。知识\n点：第 56(2)条“仅本地影响”例外——非主导监管机构对纯粹本地投诉的处理权限。",
    topic: "ePrivacy指令",
    verified: "accurate"
  },
  {
    id: 131,
    question: "Which of the following is one of the supervisory authority’s investigative powers?",
    options: ["A. To notify the controller or the processor of an alleged infringement of the GDPR.", "B. To require that controllers or processors adopt approved data protection certification mechanisms.", "C. To determine whether a controller or processor has the right to a judicial remedy concerning a compensation decision made against them.", "D. To require data controllers to provide them with written notification of all new processing activities."],
    correctAnswer: "A",
    explanation: "正确答案 A。第 58(1)条列明监管机构的调查权，包括：要求提供信息、开展数据保护审计、访问处理场\n所设备、以及就涉嫌违反 GDPR 的情况向控制者/处理者发出通知等。B（要求采纳认证机制）属于第\n58(3)条的“授权权力”而非调查权；C（裁定司法救济权，属于法院职权而非监管机构调查权）；D（要求\n就所有新处理活动提交书面通知，GDPR 已废除一般性通知义务）均不属于第 58(1)条调查权范畴。知识\n点：第 58 条监管机构三类职权——调查权、更正权、授权权的区分。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 132,
    question: "Many businesses print their employees’ photographs on building passes, so that employees can be\nidentified by security staff. This is notwithstanding the fact that facial images potentially qualify as biometric\ndata under the GDPR. Why would such practice be permitted?",
    options: ["A. Because use of biometric data to confirm the unique identification of data subjects benefits from an exemption.", "B. Because photographs qualify as biometric data only when they undergo a “specific technical processing”.", "C. Because employees are deemed to have given their explicit consent when they agree to be photographed by their employer.", "D. Because photographic ID is a physical security measure which is “necessary for reasons of substantial public interest”."],
    correctAnswer: "B",
    explanation: "正确答案 B。前言第 51 条及第 9 条明确，只有照片经过“特定技术处理”（specific technical processing，如\n面部识别算法提取生物特征模板）以实现对个人的唯一识别或验证，才构成生物识别特殊类别数据；企\n业门禁卡上普通打印的照片仅用于人工目视识别，未经过此类特定技术处理，因此不构成第 9 条意义上\n的生物识别数据，无需援引特殊类别数据处理的例外。A（笼统的“豁免”表述不准确）、C（默示同意的\n说法不成立，未必构成有效同意）、D（“重大公共利益”例外通常适用于更严格的场景，非普通门禁照片\n的准确依据）均不如 B 准确抓住问题核心。知识点：前言第 51 条“特定技术处理”作为区分普通照片与生\n物识别数据的关键标准。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 133,
    question: "A worker in a European Union (EU) member state has ceased his employment with a company. What\nshould the employer most likely do in regard to the worker’s personal data?",
    options: ["A. Destroy sensitive information and store the rest per applicable data protection rules.", "B. Store all of the data in case the departing worker makes a subject access request.", "C. Securely store the data that is required to be kept under local law.", "D. Provide the employee the reasons for retaining the data."],
    correctAnswer: "C",
    explanation: "正确答案 C。员工离职后，雇主应依据存储限制原则（第 5(1)(e)条），仅保留依据当地劳动法、税法等\n法律法规要求必须留存的数据（如社保记录、税务记录等），并依法定期限保存，而非无限期保留所有\n数据（B）、简单区分“敏感与否”笼统处理（A，并非法定的处理标准）或需向员工说明留存理由（D，\n非普遍强制的操作要求，尽管良好实践中告知留存政策是有益的）。知识点：第 5(1)(e)条存储限制原则\n在员工离职后数据处理中的应用。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 134,
    question: "Which of the following is NOT a role of works councils?",
    options: ["A. Determining the monetary fines to be levied against employers for data breach violations of employee data.", "B. Determining whether to approve or reject certain decisions of the employer that affect employees.", "C. Determining whether employees’ personal data can be processed or not.", "D. Determining what changes will affect employee working conditions."],
    correctAnswer: "A",
    explanation: "正确答案 A。雇员代表机构（works council）依据劳动法在涉及影响员工权益的决策（如引入新的员工监\n控系统、处理员工个人数据的政策，B、C、D 均是其常见职权范围）中享有知情、协商甚至否决权，但\n对违反数据保护法的行政罚款金额认定和裁量属于监管机构和/或法院的法定职权，并非工会/员工代表机\n构的角色。知识点：员工代表机构（Works Council）在数据保护相关事务中的协商/审批角色，及其与监\n管机构行政处罚权的区分。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 135,
    question: "Under the Data Protection Law Enforcement Directive of the EU, a government can carry out covert\ninvestigations involving personal data, as long it is set forth by law and constitutes a measure that is both\nnecessary and what?",
    options: ["A. Prudent.", "B. Important.", "C. Proportionate.", "D. DPA-approved."],
    correctAnswer: "C",
    explanation: "正确答案 C。欧盟执法指令（Law Enforcement Directive）及其他涉及国家安全/执法领域的欧盟法律框架\n普遍要求，任何限制隐私权的措施（包括秘密调查）须同时满足“必要性”和“比例性”（proportionate）两\n项条件，这也是欧盟基本权利宪章第 52(1)条对权利限制的一般要求。A（审慎）、B（重要）、D（须经\nDPA 批准）均非该法律框架下的标准用语和要求。知识点：欧盟基本权利限制的比例原则要求，执法指\n令下秘密调查的合法性条件。",
    topic: "LED执法指令",
    verified: "accurate"
  },
  {
    id: 136,
    question: "Which GDPR requirement will present the most significant challenges for organizations with Bring Your\n\nOwn Device (BYOD) programs?",
    options: ["A. Data subjects must be sufficiently informed of the purposes for which their personal data is processed.", "B. Processing of special categories of personal data on a large scale requires appointing a DPO.", "C. Personal data of data subjects must always be accurate and kept up to date.", "D. Data controllers must be in control of the data they hold at all times."],
    correctAnswer: "D",
    explanation: "正确答案 D。BYOD 环境下，个人数据分散存储在员工自有设备中，企业往往难以像管理企业统一设备\n那样，随时掌控数据的存储位置、访问权限及安全状况，这对“控制者须始终掌控其所持有数据”这一核心\n合规要求（呼应问责制及安全原则）构成最大挑战。A（透明度告知）、B（大规模处理特殊类别数据须\n设 DPO，与 BYOD 本身无直接必然关联）、C（准确性原则）相对而言不是 BYOD 场景下最突出的合规\n难点。知识点：BYOD 环境下数据控制力与安全管理的合规挑战。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 137,
    question: "A company in France suffers a robbery over the weekend owing to a faulty alarm system. When it is\ndetermined that the break-in involves the loss of a substantial amount of data, the company decides on a\nCCTV system to monitor for future incidents. Company technicians install cameras in the entrance of the\nbuilding, hallways and offices. Footage is recorded continuously, and is monitored by the home office in\nthe United States. What is the most realistic step the company could take to address their security\nconcerns and comply with the personal data processing principles set out in Article 5 of the GDPR?",
    options: ["A. Seek informed consent from company employees.", "B. Have cameras recording during work hours only.", "C. Retain captured footage for no more than 30 days.", "D. Restrict camera placement to building entrances only."],
    correctAnswer: "D",
    explanation: "正确答案 D。依据数据最小化原则（第 5(1)(c)条），CCTV 监控应限于实现安全目的所必需的范围；本案\n中安全隐患源于入室盗窃，将摄像头限制安装在建筑入口等关键出入位置即可满足安防需求，无需在办\n公室、走廊等非必要区域全面持续监控（这会造成过度监控，侵犯员工隐私）。A（笼统寻求员工同意，\n在雇佣关系权力不对等下并非合适的合法依据，也非该场景下的“现实”解决方案）、B（仅工作时间录\n像，与防范周末此类非工作时间入室盗窃的安全目的相悖）、C（留存不超过 30 天，属于留存期限问题\n而非本题聚焦的“数据最小化-摄像头布设范围”问题）均不如 D 贴切。知识点：第 5(1)(c)条数据最小化原\n则在 CCTV 监控范围设计中的应用。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 138,
    question: "Which of the following is an example of direct marketing that would be subject to European data protection\nlaws?",
    options: ["A. An updated privacy notice sent to an individual’s personal email address.", "B. A charity fundraising event notice sent to an individual at her business address.", "C. A service outage notification provided to an individual by recorded telephone message.", "D. A revision of contract terms conveyed to an individual by SMS from a marketing organization."],
    correctAnswer: "B",
    explanation: "正确答案 B。以个人身份（而非仅工作身份）向个人商业地址寄送慈善筹款活动通知，属于以说服个人\n参与/捐赠为目的的直接营销信息，落入欧盟数据保护及 ePrivacy 规则对直接营销的规制范围。A（隐私\n政策更新，属于合规告知而非营销）、C（服务中断通知，属于服务性/事务性通信，非营销）、D（合同\n条款变更通知，同样属于服务性通知）均不构成“直接营销”性质的信息。知识点：直接营销的认定标准—\n—以说服个人购买/参与为目的的商业性信息，区别于服务性/事务性通信。",
    topic: "ePrivacy指令",
    verified: "accurate"
  },
  {
    id: 139,
    question: "Article 9 of the GDPR lists exceptions to the general prohibition against processing biometric data. Which\nof the following is NOT one of these exceptions?",
    options: ["A. The processing is done by a non-profit organization and the results are disclosed outside the organization.", "B. The processing is necessary to protect the vital interests of the data subject when he or she is incapable of giving consent.", "C. The processing is necessary for the establishment, exercise or defense of legal claims when courts are acting in a judicial capacity.", "D. The processing is explicitly consented to by the data subject and he or she is allowed by Union or Member State law to lift the prohibition."],
    correctAnswer: "A",
    explanation: "正确答案 A。第 9(2)条列举的处理生物识别等特殊类别数据的例外情形包括：数据主体明确同意且法律允\n许（D）、保护数据主体重大利益（B）、司法程序中确立/行使/抗辩法律权利（C）、以及公共利益、就\n业社保、医疗卫生、科研统计等具体法定情形，但并未包括“非营利组织处理后向组织外部披露结果”这一\n情形——非营利组织身份本身不构成脱离第 9 条限制的独立例外依据。知识点：第 9(2)条特殊类别数据处\n理例外情形的封闭列举，非营利组织身份本身不构成豁免理由。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 140,
    question: "Which marketing-related activity is least likely to be covered by the provisions of Privacy and Electronic\nCommunications Regulations (Directive 2002/58/EC)?",
    options: ["A. Advertisements passively displayed on a website.", "B. The use of cookies to collect data about an individual.", "C. A text message to individuals from a company offering concert tickets for sale.", "D. An email from a retail outlet promoting a sale to one of their previous customer."],
    correctAnswer: "A",
    explanation: "正确答案 A。ePrivacy 指令（2002/58/EC，及后续修订）主要规制通过电子通信手段（如电话、短信、邮\n件、cookie 等）针对特定个人进行的直接营销和电子通信隐私事项；网站上被动展示、面向所有访客的一\n般性广告展示（并非针对特定个人发送的定向通信），通常不落入该指令关于直接营销同意规则的规制\n范围（可能受其他广告或 cookie 相关规则约束，但非典型的“直接营销通信”）。B（cookie 追踪，属于\nePrivacy 核心规制对象）、C（短信营销）、D（邮件营销，均属于典型的电子直接营销通信）均受该指\n令规制。知识点：ePrivacy 指令对直接营销电子通信的规制范围及被动展示广告与定向通信的区分。",
    topic: "ePrivacy指令",
    verified: "accurate"
  },
  {
    id: 141,
    question: "Which of the following is NOT recognized as being a common characteristic of cloud-computing services?",
    options: ["A. The service’s infrastructure is shared among the supplier’s customers and can be located in a number of countries.", "B. The supplier determines the location, security measures, and service standards applicable to the processing.", "C. The supplier allows customer data to be transferred around the infrastructure according to capacity.", "D. The supplier assumes the vendor’s business risk associated with data processed by the supplier."],
    correctAnswer: "D",
    explanation: "正确答案 D。云计算服务的典型特征包括：基础设施在多个客户间共享且可能跨多国分布（A）、由云服\n务商决定基础设施位置及部分安全标准（B）、数据可根据资源容量在基础设施间灵活迁移（C），但云\n服务商作为处理者（或在特定情形下的控制者）通常不会因此“承担”客户企业作为控制者对其处理活动所\n负的整体业务风险与法律责任——责任划分仍依双方合同及各自角色（控制者/处理者）确定，供应商并\n不天然“接手”客户的业务风险。知识点：云计算服务的一般特征及云服务商与客户之间的责任划分（并非\n风险转移）。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 142,
    question: "When may browser settings be relied upon for the lawful application of cookies?",
    options: ["A. When a user rejects cookies that are strictly necessary.", "B. When users are aware of the ability to adjust their settings.", "C. When users are provided with information about which cookies have been set.", "D. When it is impossible to bypass the choices made by users in their browser settings."],
    correctAnswer: "D",
    explanation: "正确答案 D。ICO 指引指出，若技术上用户在浏览器中所做的 cookie 选择设置能够被网站可靠地读取并\n严格遵从（即网站无法绕过用户设置擅自放置 cookie），浏览器设置理论上可作为合法获取同意的手段\n之一；但由于目前技术上难以保证网站始终准确识别并完全遵从各类浏览器设置，实践中很少能真正满\n足这一条件。A（拒绝严格必要 cookie，与合法性判断无关，严格必要 cookie 本就无需同意）、B（用户\n知晓可调整设置，仅是必要条件之一，不充分）、C（被告知已设置哪些 cookie，同样只是透明度层面的\n部分要求）均不完整。知识点：浏览器设置作为 cookie 同意机制的有效性条件——须确保用户选择不可\n被绕过。",
    topic: "ePrivacy指令",
    verified: "accurate"
  },
  {
    id: 143,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nThe fitness company Vigotron has recently developed a new app called M-Health, which it wants to market\n\non its website as a free download. Vigotron’s marketing manager asks his assistant Emily to create a\n\nwebpage that describes the app and specifies the terms of use. Emily, who is new at Vigotron, is excited\nabout this task. At her previous job she took a data protection class, and though the details are a little\n\nhazy, she recognizes that Vigotron is going to need to obtain user consent for use of the app in some\n\ncases. Emily sketches out the following draft, trying to cover as much as possible before sending it to\nVigotron’s legal department.\n\nRegistration Form\n\nVigotron’s new M-Health app makes it easy for you to monitor a variety of health-related activities,\nincluding diet, exercise, and sleep patterns. M-Health relies on your smartphone settings (along with other\nthird-party apps you may already have) to collect data about all of these important lifestyle elements, and\nprovide the information necessary for you to enrich your quality of life. (Please click here to read a full\ndescription of the services that M-Health provides.)\n\nVigotron values your privacy. The M-Health app allows you to decide which information is stored in it, and\nwhich apps can access your data. When your device is locked with a passcode, all of your health and\nfitness data is encrypted with your passcode. You can back up data stored in the Health app to Vigotron’s\n\ncloud provider, Stratculous. (Read more about Stratculous here.)\n\nVigotron will never trade, rent or sell personal information gathered from the M-Health app. Furthermore,\nwe will not provide a customer’s name, email address or any other information gathered from the app to\nany third-party without a customer’s consent, unless ordered by a court, directed by a subpoena, or to\nenforce the manufacturer’s legal rights or protect its business or property.\n\nWe are happy to offer the M-Health app free of charge. If you want to download and use it, we ask that you\nfirst complete this registration form. (Please note that use of the M-Health app is restricted to adults aged\n16 or older, unless parental consent has been given to minors intending to use it.)\n\nFirst name:\nSurname:\nYear of birth:\nEmail:\n\nPhysical Address (optional*):\nHealth status:\n\n*If you are interested in receiving newsletters about our products and services that we think may be of\ninterest to you, please include your physical address. If you decide later that you do not wish to receive\nthese newsletters, you can unsubscribe by sending an email to unsubscribe@vigotron.com or send a letter\nwith your request to the address listed at the bottom of this page.\n\nTerms and Conditions\n\n1. Jurisdiction. […]\n2. Applicable law. […]\n3. Limitation of liability. […]\n\nConsent\n\nBy completing this registration form, you attest that you are at least 16 years of age, and that you consent\nto the processing of your personal data by Vigotron for the purpose of using the M-Health app. Although\nyou are entitled to opt out of any advertising or marketing, you agree that Vigotron may contact you or\nprovide you with any required notices, agreements, or other information concerning the services by email\nor other electronic means. You also agree that the Company may send automated emails with alerts\nregarding any problems with the M-Health app that may affect your well being.\n\nEmily sends the draft to Sam for review. Which of the following is Sam most likely to point out as the\nbiggest problem with Emily’s consent provision?",
    options: ["A. It is not legal to include fields requiring information regarding health status without consent.", "B. Processing health data requires explicit consent, but the form does not ask for explicit consent.", "C. Direct marketing requires explicit consent, whereas the registration form only provides for a right to object", "D. The provision of the fitness app should be made conditional on the consent to the data processing for direct marketing."],
    correctAnswer: "B",
    explanation: "正确答案 B。健康数据属于第 9 条特殊类别数据，处理须取得“明确同意”（explicit consent），而 Emily\n起草的注册表格仅笼统地要求用户“同意处理个人数据以使用 App”，并未针对健康状况这一特殊类别数据\n单独征求符合更高标准的明确同意，这是最大的合规漏洞。A（健康状况字段本身收集并无不合法，只是\n需明确同意）、C（表述不准确，题目更核心问题在于健康数据同意标准而非营销同意机制本身的对\n错）、D（将服务提供与营销同意捆绑属另一违规问题，但非 Sam 最先指出的“最大”问题）均不如 B 贴\n切。知识点：第 9(2)(a)条特殊类别数据的“明确同意”标准，区别于一般处理的普通同意。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 144,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nThe fitness company Vigotron has recently developed a new app called M-Health, which it wants to market\non its website as a free download. Vigotron’s marketing manager asks his assistant Emily to create a\nwebpage that describes the app and specifies the terms of use. Emily, who is new at Vigotron, is excited\nabout this task. At her previous job she took a data protection class, and though the details are a little\nhazy, she recognizes that Vigotron is going to need to obtain user consent for use of the app in some\ncases. Emily sketches out the following draft, trying to cover as much as possible before sending it to\nVigotron’s legal department.\n\nRegistration Form\n\nVigotron’s new M-Health app makes it easy for you to monitor a variety of health-related activities,\nincluding diet, exercise, and sleep patterns. M-Health relies on your smartphone settings (along with other\nthird-party apps you may already have) to collect data about all of these important lifestyle elements, and\nprovide the information necessary for you to enrich your quality of life. (Please click here to read a full\ndescription of the services that M-Health provides.)\n\nVigotron values your privacy. The M-Health app allows you to decide which information is stored in it, and\nwhich apps can access your data. When your device is locked with a passcode, all of your health and\n\nfitness data is encrypted with your passcode. You can back up data stored in the Health app to Vigotron’s\ncloud provider, Stratculous. (Read more about Stratculous here.)\n\nVigotron will never trade, rent or sell personal information gathered from the M-Health app. Furthermore,\nwe will not provide a customer’s name, email address or any other information gathered from the app to\nany third-party without a customer’s consent, unless ordered by a court, directed by a subpoena, or to\nenforce the manufacturer’s legal rights or protect its business or property.\n\nWe are happy to offer the M-Health app free of charge. If you want to download and use it, we ask that you\n\nfirst complete this registration form. (Please note that use of the M-Health app is restricted to adults aged\n16 or older, unless parental consent has been given to minors intending to use it.)\n\nFirst name:\nSurname:\nYear of birth:\nEmail:\nPhysical Address (optional*):\nHealth status:\n\n*If you are interested in receiving newsletters about our products and services that we think may be of\ninterest to you, please include your physical address. If you decide later that you do not wish to receive\nthese newsletters, you can unsubscribe by sending an email to unsubscribe@vigotron.com or send a letter\nwith your request to the address listed at the bottom of this page.\n\nTerms and Conditions\n\n1. Jurisdiction. […]\n2. Applicable law. […]\n3. Limitation of liability. […]\n\nConsent\n\nBy completing this registration form, you attest that you are at least 16 years of age, and that you consent\n\nto the processing of your personal data by Vigotron for the purpose of using the M-Health app. Although\nyou are entitled to opt out of any advertising or marketing, you agree that Vigotron may contact you or\n\nprovide you with any required notices, agreements, or other information concerning the services by email\nor other electronic means. You also agree that the Company may send automated emails with alerts\nregarding any problems with the M-Health app that may affect your well being.\n\nIf a user of the M-Health app were to decide to withdraw his consent, Vigotron would first be required to do\nwhat?",
    options: ["A. Provide the user with logs of data collected through use of the app.", "B. Erase any data collected from the time the app was first used.", "C. Inform any third parties of the user’s withdrawal of consent.", "D. Cease processing any data collected through use of the app."],
    correctAnswer: "D",
    explanation: "正确答案 D。第 7(3)条规定，同意撤回后，控制者应立即停止基于该同意的处理活动，这是撤回同意后的\n首要、直接义务。删除既往收集的数据（B）、告知第三方（C）、提供数据日志（A）可能是后续需要\n考虑的事项，但并非撤回同意后“首先”必须履行的义务，停止处理才是第一步。知识点：第 7(3)条同意撤\n回后控制者的首要义务——立即停止处理。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 145,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nThe fitness company Vigotron has recently developed a new app called M-Health, which it wants to market\non its website as a free download. Vigotron’s marketing manager asks his assistant Emily to create a\nwebpage that describes the app and specifies the terms of use. Emily, who is new at Vigotron, is excited\nabout this task. At her previous job she took a data protection class, and though the details are a little\n\nhazy, she recognizes that Vigotron is going to need to obtain user consent for use of the app in some\ncases. Emily sketches out the following draft, trying to cover as much as possible before sending it to\nVigotron’s legal department.\n\nRegistration Form\n\nVigotron’s new M-Health app makes it easy for you to monitor a variety of health-related activities,\nincluding diet, exercise, and sleep patterns. M-Health relies on your smartphone settings (along with other\nthird-party apps you may already have) to collect data about all of these important lifestyle elements, and\nprovide the information necessary for you to enrich your quality of life. (Please click here to read a full\ndescription of the services that M-Health provides.)\n\nVigotron values your privacy. The M-Health app allows you to decide which information is stored in it, and\nwhich apps can access your data. When your device is locked with a passcode, all of your health and\nfitness data is encrypted with your passcode. You can back up data stored in the Health app to Vigotron’s\ncloud provider, Stratculous. (Read more about Stratculous here.)\n\nVigotron will never trade, rent or sell personal information gathered from the M-Health app. Furthermore,\nwe will not provide a customer’s name, email address or any other information gathered from the app to\nany third-party without a customer’s consent, unless ordered by a court, directed by a subpoena, or to\nenforce the manufacturer’s legal rights or protect its business or property.\n\nWe are happy to offer the M-Health app free of charge. If you want to download and use it, we ask that you\nfirst complete this registration form. (Please note that use of the M-Health app is restricted to adults aged\n16 or older, unless parental consent has been given to minors intending to use it.)\n\nFirst name:\nSurname:\nYear of birth:\n\nEmail:\n\nPhysical Address (optional*):\nHealth status:\n\n*If you are interested in receiving newsletters about our products and services that we think may be of\n\ninterest to you, please include your physical address. If you decide later that you do not wish to receive\n\nthese newsletters, you can unsubscribe by sending an email to unsubscribe@vigotron.com or send a letter\nwith your request to the address listed at the bottom of this page.\n\nTerms and Conditions\n\n1. Jurisdiction. […]\n2. Applicable law. […]\n3. Limitation of liability. […]\n\nConsent\n\nBy completing this registration form, you attest that you are at least 16 years of age, and that you consent\nto the processing of your personal data by Vigotron for the purpose of using the M-Health app. Although\nyou are entitled to opt out of any advertising or marketing, you agree that Vigotron may contact you or\nprovide you with any required notices, agreements, or other information concerning the services by email\nor other electronic means. You also agree that the Company may send automated emails with alerts\nregarding any problems with the M-Health app that may affect your well being.\n\nWhat is one potential problem Vigotron’s age policy might encounter under the GDPR?",
    options: ["A. Age restrictions are more stringent when health data is involved.", "B. Users are only required to be aged 13 or over to be considered adults.", "C. Organizations must make reasonable efforts to verify parental consent.", "D. Organizations that tie a service to marketing must seek consent for each purpose."],
    correctAnswer: "C",
    explanation: "正确答案 C。第 8 条规定，向儿童提供信息社会服务时，若儿童低于同意年龄门槛（各成员国 13-16 岁不\n等），控制者须“尽合理努力”核实监护人同意的真实性（并需考虑当时可用技术），Vigotron 的表格仅要\n求用户自行勾选确认年满 16 岁或已获监护人同意，并未采取任何核实监护人同意真实性的合理措施，这\n构成潜在合规漏洞。A（健康数据不改变儿童同意年龄门槛的一般规则）、B（GDPR 下儿童同意年龄门\n槛可低至 13 岁，但并非“13 岁即视为成年”这一表述准确）、D（“按各目的分别征求同意”是同意具体性\n的一般要求，但非本题聚焦的年龄政策问题）均不如 C 准确。知识点：第 8 条儿童同意年龄门槛及监护\n人同意的合理核实义务。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 146,
    question: "SCENARIO\n\nPlease use the following to answer the next question\n\nLouis, a long-time customer of Bedrock Insurance, was involved in a minor car accident a few months ago.\nAlthough no one was hurt, Louis has been plagued by texts and calls from a company called Accidentable\noffering to help him recover compensation for personal injury. Louis has heard about insurance companies\nselling customers’ data to third parties, and he’s convinced that Accidentable must have gotten his\n\ninformation from Bedrock Insurance.\n\nLouis has also been receiving an increased amount of marketing information from Bedrock, trying to sell\nhim their full range of their insurance policies.\n\nPerturbed by this, Louis has started looking at price comparison sites on the internet and has been\nshocked to find that other insurers offer much cheaper rates than Bedrock, even though he has been a\nloyal customer for many years. When his Bedrock policy comes up for renewal, he decides to switch to\nZantrum Insurance.\n\nIn order to activate his new insurance policy, Louis needs to supply Zantrum with information about his No\nClaims bonus, his vehicle and his driving history. After researching his rights under the GDPR, he writes to\nask Bedrock to transfer his information directly to Zantrum. He also takes this opportunity to ask Bedrock\nto stop using his personal data for marketing purposes.\n\nBedrock supplies Louis with a PDF and XML (Extensible Markup Language) versions of his No Claims\nCertificate, but tells Louis it cannot transfer his data directly to Zantrum as this is not technically feasible.\n\nBedrock also explains that Louis’s contract included a provision whereby Louis agreed that his data could\n\nbe used for marketing purposes; according to Bedrock, it is too late for Louis to change his mind about\nthis. It angers Louis when he recalls the wording of the contract, which was filled with legal jargon and very\nconfusing.\n\nIn the meantime, Louis is still receiving unwanted calls from Accidentable Insurance. He writes to\n\nAccidentable to ask for the name of the organization that supplied his details to them. He warns 6\nAccidentable that he plans to complain to the data protection authority, because he thinks their company\nhas been using his data unlawfully. His letter states that he does not want his data being used by them in\nany way.\n\nAccidentable’s response letter confirms Louis’s suspicions. Accidentable is Bedrock Insurance’s wholly\nowned subsidiary, and they received information about Louis’s accident from Bedrock shortly after Louis\nsubmitted his accident claim. Accidentable assures Louis that there has been no breach of the GDPR, as\nLouis’s contract included, a provision in which he agreed to share his information with Bedrock’s affiliates\nfor business purposes.\n\nLouis is disgusted by the way in which he has been treated by Bedrock, and writes to them insisting that all\nhis information be erased from their computer system.\n\nBased on the GDPR’s position on the use of personal data for direct marketing purposes, which of the\nfollowing is true about Louis’s rights as a data subject?",
    options: ["A. Louis does not have the right to object to the use of his data because he previously consented to it.", "B. Louis has the right to object at any time to the use of his data and Bedrock must honor his request to cease use.", "C. Louis has the right to object to the use of his data, unless his data is required by Bedrock for the purpose of exercising a legal claim.", "D. Louis does not have the right to object to the use of his data if Bedrock can demonstrate compelling legitimate grounds for the processing."],
    correctAnswer: "B",
    explanation: "正确答案 B。第 21(2)(3)条规定，数据主体对直接营销目的的处理享有绝对反对权，任何时候均可行使，\n控制者收到反对后须立即停止基于该目的的处理，不存在“合同已同意即不可反对”（A）或“控制者可主\n张令人信服的合法理由继续处理”（D，令人信服理由的抗辩仅适用于第 21(1)条基于合法利益/公共利益的\n一般反对权，不适用于直接营销这一绝对反对权）的例外；C（除非用于法律主张）属于对被遗忘权/限\n制处理权例外的混淆，并非直接营销反对权的例外情形。知识点：第 21(2)(3)条直接营销绝对反对权，区\n别于第 21(1)条一般反对权下的利益衡量机制。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 147,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nBrady is a computer programmer based in New Zealand who has been running his own business for two\nyears. Brady’s business provides a low-cost suite of services to customers throughout the European\nEconomic Area (EEA). The services are targeted towards new and aspiring small business owners.\nBrady’s company, called Brady Box, provides web page design services, a Social Networking Service\n(SNS) and consulting services that help people manage their own online stores.\n\nUnfortunately, Brady has been receiving some complaints. A customer named Anna recently uploaded her\nplans for a new product onto Brady Box’s chat area, which is open to public viewing. Although she realized\nher mistake two weeks later and removed the document, Anna is holding Brady Box responsible for not\nnoticing the error through regular monitoring of the website. Brady believes he should not be held liable.\n\nAnother customer, Felipe, was alarmed to discover that his personal information was transferred to a third-\nparty contractor called Hermes Designs and worries that sensitive information regarding his business\nplans may be misused. Brady does not believe he violated European privacy rules. He provides a privacy\nnotice to all of his customers explicitly stating that personal data may be transferred to specific third parties\nin fulfillment of a requested service. Felipe says he read the privacy notice but that it was long and\ncomplicated\n\nBrady continues to insist that Felipe has no need to be concerned, as he can personally vouch for the\nintegrity of Hermes Designs. In fact, Hermes Designs has taken the initiative to create sample customized\n\nbanner advertisements for customers like Felipe. Brady is happy to provide a link to the example banner\n\nads, now posted on the Hermes Designs webpage. Hermes Designs plans on following up with direct\nmarketing to these customers.\n\nBrady was surprised when another customer, Serge, expressed his dismay that a quotation by him is\n\nbeing used within a graphic collage on Brady Box’s home webpage. The quotation is attributed to Serge by\n\nfirst and last name. Brady, however, was not worried about any sort of litigation. He wrote back to Serge to\nlet him know that he found the quotation within Brady Box’s Social Networking Service (SNS), as Serge\nhimself had posted the quotation. In his response, Brady did offer to remove the quotation as a courtesy.\n\nDespite some customer complaints, Brady’s business is flourishing. He even supplements his income\nthrough online behavioral advertising (OBA) via a third-party ad network with whom he has set clearly\ndefined roles. Brady is pleased that, although some customers are not explicitly aware of the OBA, the\nadvertisements contain useful products and services.\n\nBased on the scenario, what is the main reason that Brady should be concerned with Hermes Designs’\nhandling of customer personal data?",
    options: ["A. The data is sensitive.", "B. The data is uncategorized.", "C. The data is being used for a new purpose.", "D. The data is being processed via a new means."],
    correctAnswer: "C",
    explanation: "正确答案 C。Hermes Designs 原本仅作为处理者协助完成客户委托的服务（如网页设计相关的第三方外\n包），但其后续未经明确同意就利用客户数据制作营销广告并计划开展直接营销，属于将数据用于原始\n收集目的之外的“新目的”，违反目的限制原则（第 5(1)(b)条），这才是 Brady 应重点关注的问题，而非数\n据本身的敏感性（A）、分类状态（B）或处理手段是否新颖（D）。知识点：第 5(1)(b)条目的限制原\n则，第三方处理者将数据挪作他用构成违规的典型情形。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 148,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nBrady is a computer programmer based in New Zealand who has been running his own business for two\nyears. Brady’s business provides a low-cost suite of services to customers throughout the European\nEconomic Area (EEA). The services are targeted towards new and aspiring small business owners.\nBrady’s company, called Brady Box, provides web page design services, a Social Networking Service\n(SNS) and consulting services that help people manage their own online stores.\n\nUnfortunately, Brady has been receiving some complaints. A customer named Anna recently uploaded her\nplans for a new product onto Brady Box’s chat area, which is open to public viewing. Although she realized\nher mistake two weeks later and removed the document, Anna is holding Brady Box responsible for not\nnoticing the error through regular monitoring of the website. Brady believes he should not be held liable.\n\nAnother customer, Felipe, was alarmed to discover that his personal information was transferred to a third-\nparty contractor called Hermes Designs and worries that sensitive information regarding his business\nplans may be misused. Brady does not believe he violated European privacy rules. He provides a privacy\nnotice to all of his customers explicitly stating that personal data may be transferred to specific third parties\n\nin fulfillment of a requested service. Felipe says he read the privacy notice but that it was long and\ncomplicated\n\nBrady continues to insist that Felipe has no need to be concerned, as he can personally vouch for the\nintegrity of Hermes Designs. In fact, Hermes Designs has taken the initiative to create sample customized\nbanner advertisements for customers like Felipe. Brady is happy to provide a link to the example banner\nads, now posted on the Hermes Designs webpage. Hermes Designs plans on following up with direct\nmarketing to these customers.\n\nBrady was surprised when another customer, Serge, expressed his dismay that a quotation by him is\nbeing used within a graphic collage on Brady Box’s home webpage. The quotation is attributed to Serge by\nfirst and last name. Brady, however, was not worried about any sort of litigation. He wrote back to Serge to\nlet him know that he found the quotation within Brady Box’s Social Networking Service (SNS), as Serge\n\nhimself had posted the quotation. In his response, Brady did offer to remove the quotation as a courtesy.\n\nDespite some customer complaints, Brady’s business is flourishing. He even supplements his income\n\nthrough online behavioral advertising (OBA) via a third-party ad network with whom he has set clearly\ndefined roles. Brady is pleased that, although some customers are not explicitly aware of the OBA, the\n\nadvertisements contain useful products and services.\n\nBased on current trends in European privacy practices, which aspect of Brady Box’ Online Behavioral\nAdvertising (OBA) is most likely to be insufficient if the company becomes established in Europe?",
    options: ["A. The lack of the option to opt in.", "B. The level of security within the website.", "C. The contract with the third-party advertising network.", "D. The need to have the contents of the advertising approved."],
    correctAnswer: "A",
    explanation: "正确答案 A。在欧盟数据保护实践中，基于 cookie 等技术开展的线上行为广告（OBA）通常需要用户事\n先明确选择加入（opt-in）同意，而非仅提供事后选择退出（opt-out）的机制；Brady 目前的做法未给客\n户提供明确的加入选项（“部分客户甚至完全不知晓存在 OBA”），这在欧盟框架下明显不足。B、C、D\n虽然也是潜在合规议题，但并非欧盟 OBA 合规实践中最突出的欠缺点。知识点：欧盟对线上行为广告\n（OBA）的 opt-in 同意要求，区别于 opt-out 模式。",
    topic: "ePrivacy指令",
    verified: "accurate"
  },
  {
    id: 149,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nBrady is a computer programmer based in New Zealand who has been running his own business for two\nyears. Brady’s business provides a low-cost suite of services to customers throughout the European\nEconomic Area (EEA). The services are targeted towards new and aspiring small business owners.\n\nBrady’s company, called Brady Box, provides web page design services, a Social Networking Service\n(SNS) and consulting services that help people manage their own online stores.\n\nUnfortunately, Brady has been receiving some complaints. A customer named Anna recently uploaded her\n\nplans for a new product onto Brady Box’s chat area, which is open to public viewing. Although she realized\nher mistake two weeks later and removed the document, Anna is holding Brady Box responsible for not\nnoticing the error through regular monitoring of the website. Brady believes he should not be held liable.\n\nAnother customer, Felipe, was alarmed to discover that his personal information was transferred to a third-\nparty contractor called Hermes Designs and worries that sensitive information regarding his business\nplans may be misused. Brady does not believe he violated European privacy rules. He provides a privacy\nnotice to all of his customers explicitly stating that personal data may be transferred to specific third parties\nin fulfillment of a requested service. Felipe says he read the privacy notice but that it was long and\ncomplicated\n\nBrady continues to insist that Felipe has no need to be concerned, as he can personally vouch for the\nintegrity of Hermes Designs. In fact, Hermes Designs has taken the initiative to create sample customized\nbanner advertisements for customers like Felipe. Brady is happy to provide a link to the example banner\nads, now posted on the Hermes Designs webpage. Hermes Designs plans on following up with direct\nmarketing to these customers.\n\nBrady was surprised when another customer, Serge, expressed his dismay that a quotation by him is\nbeing used within a graphic collage on Brady Box’s home webpage. The quotation is attributed to Serge by\nfirst and last name. Brady, however, was not worried about any sort of litigation. He wrote back to Serge to\nlet him know that he found the quotation within Brady Box’s Social Networking Service (SNS), as Serge\nhimself had posted the quotation. In his response, Brady did offer to remove the quotation as a courtesy.\n\nDespite some customer complaints, Brady’s business is flourishing. He even supplements his income\nthrough online behavioral advertising (OBA) via a third-party ad network with whom he has set clearly\ndefined roles. Brady is pleased that, although some customers are not explicitly aware of the OBA, the\nadvertisements contain useful products and services.\n\nUnder the General Data Protection Regulation (GDPR), what is the most likely reason Serge may have\n\ngrounds to object to the use of his quotation?",
    options: ["A. Because of the misrepresentation of personal data as an endorsement.", "B. Because of the juxtaposition of the quotation with others’ quotations.", "C. Because of the use of personal data outside of the social networking service (SNS). 6", "D. Because of the misapplication of the household exception in relation to a social networking service (SNS)."],
    correctAnswer: "A",
    explanation: "正确答案 A。Serge 的原话被抽取并置于 Brady Box 主页的宣传拼贴中，容易使访客误以为该引语构成\nSerge 对 Brady Box 产品/服务的“背书”或推荐，这种脱离原语境、可能造成误导性关联使用的行为，构成\n其反对处理（或异议）的合理依据（涉及个人数据被用于超出其原意的新语境和目的，损害其个人形象\n权益）。B（与其他引语并列，并非核心问题）、C（脱离 SNS 平台使用，虽有一定关联但并非“误导性\n背书”这一实质性问题）、D（家庭活动例外的误用，与本题场景不符，Brady Box 运营主页宣传并非家\n庭、个人事务）均不如 A 准确。知识点：目的限制原则及个人数据被脱离语境挪用可能构成的权益损害\n（误导性背书）。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 150,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nTripBliss Inc. is a travel service company which has lost substantial revenue over the last few years. Their\nnew manager, Oliver, suspects that this is partly due to the company’s outdated website. After doing some\nresearch, he meets with a sales representative from the up-and-coming IT company Techiva, hoping that\nthey can design a new, cutting-edge website for TripBliss Inc.’s foundering business.\n\nDuring negotiations, a Techiva representative describes a plan for gathering more customer information\nthrough detailed questionnaires, which could be used to tailor their preferences to specific travel\ndestinations. TripBliss Inc. can choose any number of data categories – age, income, ethnicity – that\nwould help them best accomplish their goals. Oliver loves this idea, but would also like to have some way\nof gauging how successful this approach is, especially since the questionnaires will require customers to\nprovide explicit consent to having their data collected. The Techiva representative suggests that they also\nrun a program to analyze the new website’s traffic, in order to get a better understanding of how customers\nare using it. He explains his plan to place a number of cookies on customer devices. The cookies will allow\nthe company to collect IP addresses and other information, such as the sites from which the customers\n\ncame, how much time they spend on the TripBliss Inc. website, and which pages on the site they visit. All\nof this information will be compiled in log files, which Techiva will analyze by means of a special program.\nTripBliss Inc. would receive aggregate statistics to help them evaluate the website’s effectiveness. Oliver\nenthusiastically engages Techiva for these services.\n\nTechiva assigns the analytics portion of the project to longtime account manager Leon Santos. As is\nstandard practice, Leon is given administrator rights to TripBliss Inc.’s website, and can authorize access\nto the log files gathered from it. Unfortunately for TripBliss Inc., however, Leon is taking on this new project\nat a time when his dissatisfaction with Techiva is at a high point. In order to take revenge for what he feels\nhas been unfair treatment at the hands of the company, Leon asks his friend Fred, a hobby hacker, for\nhelp. Together they come up with the following plan: Fred will hack into Techiva’s system and copy their\nlog files onto a USB stick. Despite his initial intention to send the USB to the press and to the data\nprotection authority in order to denounce Techiva, Leon experiences a crisis of conscience and ends up\nreconsidering his plan. He decides instead to securely wipe all the data from the USB stick and inform his\nmanager that the company’s system of access control must be reconsidered.\n\nAfter Leon has informed his manager, what is Techiva’s legal responsibility as a processor?",
    options: ["A. They must report it to TripBliss Inc.", "B. They must conduct a full systems audit.", "C. They must report it to the supervisory authority.", "D. They must inform customers who have used the website."],
    correctAnswer: "A",
    explanation: "正确答案 A。第 33(2)条规定，处理者一旦知悉个人数据泄露，须“不得无故拖延”地通知控制者，而非直\n接越过控制者自行通知监管机构（C）或数据主体（D），也没有法定义务要求处理者独立开展“全面系统\n审计”（B，尽管这可能是良好实践，但非第 28 条项下的强制法律义务本身）。本案中 Leon 已将泄露事\n件报告经理，说明公司内部已启动处理，接下来 Techiva（处理者）的法律义务是正式通知 TripBliss Inc.\n（控制者）。知识点：第 33(2)条处理者向控制者通知泄露的义务及责任链条。",
    topic: "ePrivacy指令",
    verified: "accurate"
  },
  {
    id: 151,
    question: "SCENARIO\n\nPlease use the following to answer the next question: 6\nJoe is the new privacy manager for Who-R-U, a Canadian business that provides DNA analysis. The\ncompany is headquartered in Montreal, and all of its employees are located there. The company offers its\nservices to Canadians only: Its website is in English and French, it accepts only Canadian currency, and it\nblocks internet traffic from outside of Canada (although this solution doesn’t prevent all non-Canadian\ntraffic). It also declines to process orders that request the DNA report to be sent outside of Canada, and\nreturns orders that show a non-Canadian return address.\n\nBob, the President of Who-R-U, thinks there is a lot of interest for the product in the EU, and the company\nis exploring a number of plans to expand its customer base.\n\nThe first plan, collegially called We-Track-U, will use an app to collect information about its current\nCanadian customer base. The expansion will allow its Canadian customers to use the app while traveling\nabroad. He suggests that the company use this app to gather location information. If the plan shows\npromise, Bob proposes to use push notifications and text messages to encourage existing customers to\npre-register for an EU version of the service. Bob calls this work plan, We-Text-U. Once the company has\ngathered enough pre-registrations, it will develop EU-specific content and services.\n\nAnother plan is called Customer for Life. The idea is to offer additional services through the company’s\napp, like storage and sharing of DNA information with other applications and medical providers. The\ncompany’s contract says that it can keep customer DNA indefinitely, and use it to offer new services and\nmarket them to customers. It also says that customers agree not to withdraw direct marketing consent.\nPaul, the marketing director, suggests that the company should fully exploit these provisions, and that it\ncan work around customers’ attempts to withdraw consent because the contract invalidates them.\n\nThe final plan is to develop a brand presence in the EU. The company has already begun this process. It is\nin the process of purchasing the naming rights for a building in Germany, which would come with a few\noffices that Who-R-U executives can use while traveling internationally. The office doesn’t include any\ntechnology or infrastructure; rather, it’s simply a room with a desk and some chairs.\n\nOn a recent trip concerning the naming-rights deal, Bob’s laptop is stolen. The laptop held unencrypted\nDNA reports on 5,000 Who-R-U customers, all of whom are residents of Canada. The reports include\ncustomer name, birthdate, ethnicity, racial background, names of relatives, gender, and occasionally\nhealth information.\n\nIf Who-R-U decides to track locations using its app, what must it do to comply with the GDPR?",
    options: ["A. Get consent from the app users.", "B. Provide a transparent notice to users.", "C. Anonymize the data and add latency so it avoids disclosing real time locations.", "D. Obtain a court order because location data is a special category of personal data."],
    correctAnswer: "A",
    explanation: "答案 A 在该应用新增持续定位功能的场景中最稳妥，但 GDPR 并未规定所有位置数据处理一律只能依赖同意。应同\n时评估第 6 条合法依据、目的兼容性、透明度、数据最小化及 ePrivacy 对终端设备访问的要求。",
    topic: "ePrivacy指令",
    verified: "qualified"
  },
  {
    id: 152,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nJoe is the new privacy manager for Who-R-U, a Canadian business that provides DNA analysis. The\ncompany is headquartered in Montreal, and all of its employees are located there. The company offers its\nservices to Canadians only: Its website is in English and French, it accepts only Canadian currency, and it\n\nblocks internet traffic from outside of Canada (although this solution doesn’t prevent all non-Canadian\n\ntraffic). It also declines to process orders that request the DNA report to be sent outside of Canada, and\nreturns orders that show a non-Canadian return address.\n\nBob, the President of Who-R-U, thinks there is a lot of interest for the product in the EU, and the company\n\nis exploring a number of plans to expand its customer base. 6\nThe first plan, collegially called We-Track-U, will use an app to collect information about its current\nCanadian customer base. The expansion will allow its Canadian customers to use the app while traveling\nabroad. He suggests that the company use this app to gather location information. If the plan shows\npromise, Bob proposes to use push notifications and text messages to encourage existing customers to\npre-register for an EU version of the service. Bob calls this work plan, We-Text-U. Once the company has\ngathered enough pre-registrations, it will develop EU-specific content and services.\n\nAnother plan is called Customer for Life. The idea is to offer additional services through the company’s\napp, like storage and sharing of DNA information with other applications and medical providers. The\ncompany’s contract says that it can keep customer DNA indefinitely, and use it to offer new services and\nmarket them to customers. It also says that customers agree not to withdraw direct marketing consent.\nPaul, the marketing director, suggests that the company should fully exploit these provisions, and that it\ncan work around customers’ attempts to withdraw consent because the contract invalidates them.\n\nThe final plan is to develop a brand presence in the EU. The company has already begun this process. It is\nin the process of purchasing the naming rights for a building in Germany, which would come with a few\noffices that Who-R-U executives can use while traveling internationally. The office doesn’t include any\ntechnology or infrastructure; rather, it’s simply a room with a desk and some chairs.\n\nOn a recent trip concerning the naming-rights deal, Bob’s laptop is stolen. The laptop held unencrypted\nDNA reports on 5,000 Who-R-U customers, all of whom are residents of Canada. The reports include\ncustomer name, birthdate, ethnicity, racial background, names of relatives, gender, and occasionally\nhealth information.\n\nThe Customer for Life plan may conflict with which GDPR provision?",
    options: ["A. Article 6, which requires processing to be lawful.", "B. Article 7, which requires consent to be as easy to withdraw as it is to give.", "C. Article 16, which provides data subjects with a rights to rectification.", "D. Article 20, which gives data subjects a right to data portability."],
    correctAnswer: "B",
    explanation: "正确答案 B。第 7(3)条明确要求撤回同意应与给予同意“同样简单”（as easy to withdraw as to give），而\nWho-R-U 合同条款约定客户“同意不得撤回直接营销同意”，这直接违反了该条款关于同意可撤回性及撤\n回便利性的强制性要求，此类合同约定本身无效。A、C、D 虽然也可能涉及其他条款问题，但与本情节\n（限制撤回权）直接对应的是第 7 条而非泛泛的合法性（A）、更正权（C）或可携权（D）条款。知识\n点：第 7(3)条同意可撤回性要求及“撤回须与给予同样简便”的强制标准，此类限制撤回条款的无效性。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 153,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nJoe is the new privacy manager for Who-R-U, a Canadian business that provides DNA analysis. The\ncompany is headquartered in Montreal, and all of its employees are located there. The company offers its\nservices to Canadians only: Its website is in English and French, it accepts only Canadian currency, and it\nblocks internet traffic from outside of Canada (although this solution doesn’t prevent all non-Canadian\ntraffic). It also declines to process orders that request the DNA report to be sent outside of Canada, and\nreturns orders that show a non-Canadian return address.\n\nBob, the President of Who-R-U, thinks there is a lot of interest for the product in the EU, and the company\nis exploring a number of plans to expand its customer base.\n\nThe first plan, collegially called We-Track-U, will use an app to collect information about its current\nCanadian customer base. The expansion will allow its Canadian customers to use the app while traveling\n\nabroad. He suggests that the company use this app to gather location information. If the plan shows\n\npromise, Bob proposes to use push notifications and text messages to encourage existing customers to\npre-register for an EU version of the service. Bob calls this work plan, We-Text-U. Once the company has\n\ngathered enough pre-registrations, it will develop EU-specific content and services.\n\nAnother plan is called Customer for Life. The idea is to offer additional services through the company’s\napp, like storage and sharing of DNA information with other applications and medical providers. The\ncompany’s contract says that it can keep customer DNA indefinitely, and use it to offer new services and\nmarket them to customers. It also says that customers agree not to withdraw direct marketing consent.\nPaul, the marketing director, suggests that the company should fully exploit these provisions, and that it\ncan work around customers’ attempts to withdraw consent because the contract invalidates them.\n\nThe final plan is to develop a brand presence in the EU. The company has already begun this process. It is\nin the process of purchasing the naming rights for a building in Germany, which would come with a few\noffices that Who-R-U executives can use while traveling internationally. The office doesn’t include any\ntechnology or infrastructure; rather, it’s simply a room with a desk and some chairs.\n\nOn a recent trip concerning the naming-rights deal, Bob’s laptop is stolen. The laptop held unencrypted\nDNA reports on 5,000 Who-R-U customers, all of whom are residents of Canada. The reports include\ncustomer name, birthdate, ethnicity, racial background, names of relatives, gender, and occasionally\nhealth information.\n\nIf Who-R-U adopts the We-Track-U pilot plan, why is it likely to be subject to the territorial scope of the\nGDPR?",
    options: ["A. Its plan would be in the context of the establishment of a controller in the Union.", "B. It would be offering goods or services to data subjects in the Union.", "C. It is engaging in commercial activities conducted in the Union.", "D. It is monitoring the behavior of data subjects in the Union."],
    correctAnswer: "D",
    explanation: "正确答案 D。We-Track-U 计划通过 App 追踪身处欧盟境内（旅行中）的加拿大客户的位置行为，这构成\n第 3(2)(b)条“监测欧盟境内数据主体行为”的域外适用情形，而非该公司在欧盟设立机构（A，公司总部及\n全部员工均在加拿大，无欧盟设立机构）、向欧盟数据主体提供商品服务（B，该阶段仅为加拿大现有客\n户提供境外使用功能，尚未正式面向欧盟新客户提供服务）或在欧盟从事一般商业活动（C，表述过于宽\n泛不准确）。知识点：第 3(2)(b)条“监测行为”作为域外适用触发情形——追踪位于欧盟境内个人的行踪\n构成典型监测行为。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 154,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nJoe is the new privacy manager for Who-R-U, a Canadian business that provides DNA analysis. The\ncompany is headquartered in Montreal, and all of its employees are located there. The company offers its\nservices to Canadians only: Its website is in English and French, it accepts only Canadian currency, and it\nblocks internet traffic from outside of Canada (although this solution doesn’t prevent all non-Canadian\ntraffic). It also declines to process orders that request the DNA report to be sent outside of Canada, and\n\nreturns orders that show a non-Canadian return address.\n\nBob, the President of Who-R-U, thinks there is a lot of interest for the product in the EU, and the company\nis exploring a number of plans to expand its customer base.\n\nThe first plan, collegially called We-Track-U, will use an app to collect information about its current\nCanadian customer base. The expansion will allow its Canadian customers to use the app while traveling\nabroad. He suggests that the company use this app to gather location information. If the plan shows\npromise, Bob proposes to use push notifications and text messages to encourage existing customers to\npre-register for an EU version of the service. Bob calls this work plan, We-Text-U. Once the company has\ngathered enough pre-registrations, it will develop EU-specific content and services.\n\nAnother plan is called Customer for Life. The idea is to offer additional services through the company’s\napp, like storage and sharing of DNA information with other applications and medical providers. The\ncompany’s contract says that it can keep customer DNA indefinitely, and use it to offer new services and\n\nmarket them to customers. It also says that customers agree not to withdraw direct marketing consent.\n\nPaul, the marketing director, suggests that the company should fully exploit these provisions, and that it\ncan work around customers’ attempts to withdraw consent because the contract invalidates them.\n\nThe final plan is to develop a brand presence in the EU. The company has already begun this process. It is\nin the process of purchasing the naming rights for a building in Germany, which would come with a few\n\noffices that Who-R-U executives can use while traveling internationally. The office doesn’t include any\ntechnology or infrastructure; rather, it’s simply a room with a desk and some chairs.\n\nOn a recent trip concerning the naming-rights deal, Bob’s laptop is stolen. The laptop held unencrypted\nDNA reports on 5,000 Who-R-U customers, all of whom are residents of Canada. The reports include\ncustomer name, birthdate, ethnicity, racial background, names of relatives, gender, and occasionally\nhealth information.\n\nWho-R-U is NOT required to notify the local German DPA about the laptop theft because?",
    options: ["A. The company isn’t a controller established in the Union.", "B. The laptop belonged to a company located in Canada.", "C. The data isn’t considered personally identifiable financial information.", "D. There is no evidence that the thieves have accessed the data on the laptop."],
    correctAnswer: "A",
    explanation: "正确答案 A。Who-R-U 在德国购买的“冠名权”办公室未配备任何技术设施或员工实质性运营活动，仅是\n临时借用的会议空间，并不构成第 3(1)条意义上“稳定安排的设立机构”（establishment），因此该处理活\n动（笔记本电脑被盗事件）与欧盟设立机构无关，德国 DPA 对该起数据泄露事件不具有基于“设立地”标\n准的管辖权（该事件涉及的又是加拿大居民数据，进一步说明与欧盟数据主体、欧盟设立机构均无实质\n关联）。知识点：第 3(1)条“设立机构”认定标准——须具备稳定安排下的实际经营活动，单纯挂名/临时\n空间不构成设立。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 155,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nWonderkKids provides an online booking service for childcare. WonderKids is based in France, but hosts\n\nits website through a company in Switzerland. As part of their service, WonderKids will pass all personal\ndata provided to them to the childcare provider booked through their system. The type of personal data\ncollected on the website includes the name of the person booking the childcare, address and contact\ndetails, as well as information about the children to be cared for including name, age, gender and health\ninformation. The privacy statement on WonderKids’ website states the following:\n\n“WonderkKids provides the information you disclose to us through this website to your childcare provider\nfor scheduling and health and safety reasons. We may also use your and your child’s personal information\nfor our own legitimate business purposes and we employ a third-party website hosting company located in\nSwitzerland to store the data. Any data stored on equipment located in Switzerland meets the European\nCommission provisions for guaranteeing adequate safeguards for you and your child’s personal\ninformation. We will only share you and your child’s personal information with businesses that we see as\nadding real value to you. By providing us with any personal data, you consent to its transfer to affiliated\nbusinesses and to send you promotional offers.”\n\n“We may retain you and your child’s personal information for no more than 28 days, at which point the data\nwill be depersonalized, unless your personal information is being used for a legitimate business purpose\nbeyond 28 days where it may be retained for up to 2 years.”\n\n“We are processing you and your child’s personal information with your consent. If you choose not to\nprovide certain information to us, you may not be able to use our services. You have the right to: request\naccess to you and your child’s personal information; rectify or erase you or your child’s personal\ninformation; the right to correction or erasure of you and/or your child’s personal information; object to any\nprocessing of you and your child’s personal information. You also have the right to complain to the\nsupervisory authority about our data processing activities.”\n\nWhat additional information must Wonderkids provide in their Privacy Statement?",
    options: ["A. How often promotional emails will be sent.", "B. Contact information of the hosting company.", "C. Technical and organizational measures to protect data.", "D. The categories of recipients with whom data will be shared."],
    correctAnswer: "D",
    explanation: "正 确 答 案 D 。 第 13/14 条 要 求 控 制 者 告 知 的 信 息 中 ， 明 确 包 括 “ 接 收 方 或 接 收 方 类 别 ”这 一 项 ， 而\nWonderKids 隐私声明中虽提及会与“认为能为客户增加价值的企业”共享数据，但并未具体说明这些接收\n方的类别（如 childcare providers、关联企业、营销合作伙伴等），信息披露不够具体，违反透明度原\n则。A、B、C 均非第 13/14 条明确要求告知的强制性内容。知识点：第 13/14 条中“接收方类别”告知义务\n的具体性要求。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 156,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nWonderkKids provides an online booking service for childcare. WonderKids is based in France, but hosts\nits website through a company in Switzerland. As part of their service, WonderKids will pass all personal\ndata provided to them to the childcare provider booked through their system. The type of personal data\ncollected on the website includes the name of the person booking the childcare, address and contact\ndetails, as well as information about the children to be cared for including name, age, gender and health\ninformation. The privacy statement on WonderKids’ website states the following:\n\n“WonderkKids provides the information you disclose to us through this website to your childcare provider\nfor scheduling and health and safety reasons. We may also use your and your child’s personal information\nfor our own legitimate business purposes and we employ a third-party website hosting company located in\nSwitzerland to store the data. Any data stored on equipment located in Switzerland meets the European\nCommission provisions for guaranteeing adequate safeguards for you and your child’s personal\ninformation. We will only share you and your child’s personal information with businesses that we see as\nadding real value to you. By providing us with any personal data, you consent to its transfer to affiliated\nbusinesses and to send you promotional offers.”\n\n“We may retain you and your child’s personal information for no more than 28 days, at which point the data\nwill be depersonalized, unless your personal information is being used for a legitimate business purpose\n\nbeyond 28 days where it may be retained for up to 2 years.”\n\n“We are processing you and your child’s personal information with your consent. If you choose not to\nprovide certain information to us, you may not be able to use our services. You have the right to: request\naccess to you and your child’s personal information; rectify or erase you or your child’s personal\ninformation; the right to correction or erasure of you and/or your child’s personal information; object to any\nprocessing of you and your child’s personal information. You also have the right to complain to the\nsupervisory authority about our data processing activities.”\n\nWhat must the contract between WonderKids and the hosting service provider contain?",
    options: ["A. The requirement to implement technical and organizational measures to protect the data.", "B. Controller-to-controller model contract clauses.", "C. Audit rights for the data subjects.", "D. A non-disclosure agreement."],
    correctAnswer: "A",
    explanation: "正确答案 A。依据第 28(3)(c)条，控制者与处理者（此处为负责网站托管的瑞士公司）之间的书面协议须\n包含处理者应实施适当技术和组织安全措施保护数据的条款，这是处理者协议的强制核心内容之一，与\n是否涉及跨境传输保障机制（B，本题问的是委托处理协议的一般强制内容，而非跨境传输专属条款——\n虽然瑞士已获充分性认定，理论上跨境传输本身无需 SCC，但处理者协议本身仍须包含安全措施条\n款）、审计权归属数据主体（C，审计权通常赋予控制者而非数据主体本人）、保密协议（D，保密义务\n通常已包含在第 28 条处理者协议的整体要求中，但并非题目问的“必须包含”的具体核心条款）均不如 A\n准确对应第 28 条要求。知识点：第 28(3)(c)条处理者协议中安全措施条款的强制性要求。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 157,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nWonderkKids provides an online booking service for childcare. WonderKids is based in France, but hosts\n\nits website through a company in Switzerland. As part of their service, WonderKids will pass all personal\ndata provided to them to the childcare provider booked through their system. The type of personal data\n\ncollected on the website includes the name of the person booking the childcare, address and contact\n\ndetails, as well as information about the children to be cared for including name, age, gender and health\n\ninformation. The privacy statement on WonderKids’ website states the following: 6\n“WonderkKids provides the information you disclose to us through this website to your childcare provider\nfor scheduling and health and safety reasons. We may also use your and your child’s personal information\nfor our own legitimate business purposes and we employ a third-party website hosting company located in\nSwitzerland to store the data. Any data stored on equipment located in Switzerland meets the European\nCommission provisions for guaranteeing adequate safeguards for you and your child’s personal\ninformation. We will only share you and your child’s personal information with businesses that we see as\nadding real value to you. By providing us with any personal data, you consent to its transfer to affiliated\nbusinesses and to send you promotional offers.”\n\n“We may retain you and your child’s personal information for no more than 28 days, at which point the data\nwill be depersonalized, unless your personal information is being used for a legitimate business purpose\nbeyond 28 days where it may be retained for up to 2 years.”\n\n“We are processing you and your child’s personal information with your consent. If you choose not to\nprovide certain information to us, you may not be able to use our services. You have the right to: request\naccess to you and your child’s personal information; rectify or erase you or your child’s personal\ninformation; the right to correction or erasure of you and/or your child’s personal information; object to any\nprocessing of you and your child’s personal information. You also have the right to complain to the\nsupervisory authority about our data processing activities.”\n\nWhat direct marketing information can WonderKids send by email without prior consent of the person\nbooking the childcare?",
    options: ["A. No marketing information at all.", "B. Any marketing information at all.", "C. Marketing information related to other business operations of WonderKids.", "D. Marketing information for products or services similar to those purchased from WonderKids."],
    correctAnswer: "D",
    explanation: "正确答案 D。ePrivacy 规则下的“软退出”（soft opt-in）例外允许企业在客户购买过程中获得联系方式的情\n况下，无需重新征求同意即可向该客户推送与其已购买产品或服务“类似”的营销信息，但仅限于类似产品\n/服务范畴，不能扩展到公司其他业务（C，超出类似范围）或所有营销信息（A、B）。知识点：软退出\n规则中“类似产品或服务”这一限定范围的严格解释。",
    topic: "ePrivacy指令",
    verified: "accurate"
  },
  {
    id: 158,
    question: "An organization conducts body temperature checks as a part of COVID-19 monitoring. Body temperature\nis measured manually and is not followed by registration, documentation or other processing of an\nindividual’s personal data.\n\nWhich of the following best explain why this practice would NOT be subject to the GDPR?",
    options: ["A. Body temperature is not considered personal data.", "B. The practice does not involve completion by automated means.", "C. Body temperature is considered pseudonymous data.", "D. The practice is for the purpose of alleviating extreme risks to public health."],
    correctAnswer: "B",
    explanation: "答案 B 的关键不在于“人工处理当然不受 GDPR”，而在于该体温测量未自动化、未记录，也未形成或拟形成结构化\n档案系统。人工纸质或其他非自动化数据只要构成档案系统，仍可能受 GDPR 约束。",
    topic: "GDPR",
    verified: "qualified"
  },
  {
    id: 159,
    question: "When assessing the level of risk created by a data breach, which of the following would NOT have to be\ntaken into consideration?",
    options: ["A. The ease of identification of individuals.", "B. The size of any data processor involved.", "C. The special characteristics of the data controller. 6", "D. The nature, sensitivity and volume of personal data."],
    correctAnswer: "B",
    explanation: "正确答案 B。WP29《数据泄露通知指南》列举的风险评估考量因素包括：数据类型、敏感性和数量\n（D）、个人被识别的难易程度（A）、控制者的特殊性质（如是否为医疗机构等，C）、泄露的性质和\n严重程度、受影响个人数量、泄露后果的严重性等，但并未将“涉案数据处理者的规模大小”列为评估泄露\n风险的考量因素——处理者规模与泄露对数据主体造成的实际风险并无直接关联。知识点：WP29 数据泄\n露风险评估的考量因素清单。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 160,
    question: "Under Article 80(1) of the GDPR, individuals can elect to be represented by not-for-profit organizations in a\nprivacy group litigation or class action. These organizations are commonly known as?",
    options: ["A. Law firm organizations.", "B. Civil society organizations.", "C. Human rights organizations.", "D. Constitutional rights organizations."],
    correctAnswer: "B",
    explanation: "正确答案 B。第 80(1)条允许数据主体委托非营利性的“民间社会组织”（civil society body/organisation，即\n致力于公共利益、数据保护等领域的非营利民间团体）代表其提起投诉或诉讼，这类组织通常被称为“公\n民社会组织”（civil society organizations），而非特指律师事务所（A）、人权组织（C）或宪法权利组织\n（D）这类更狭窄或不准确的表述。知识点：第 80 条集体诉讼代表机制中“民间社会组织”的范围界定。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 161,
    question: "SCENARIO\nPlease use the following to answer the next question:\n\nBHealthy, a company based in Italy, is ready to launch a new line of natural products, with a focus on\nsunscreen. The last step prior to product launch is for BHealthy to conduct research to decide how\nextensively to market its new line of sunscreens across Europe. To do so, BHealthy teamed up with\nNatural Insight, a company specializing in determining pricing for natural products. BHealthy decided to\nshare its existing customer information – name, location, and prior purchase history – with Natural Insight.\nNatural Insight intends to use this information to train its algorithm to help determine the price point at\nwhich BHealthy can sell its new sunscreens.\n\nPrior to sharing its customer list, BHealthy conducted a review of Natural Insight’s security practices and\nconcluded that the company has sufficient security measures to protect the contact information.\nAdditionally, BHealthy’s data processing contractual terms with Natural Insight require continued\nimplementation of technical and organization measures. Also indicated in the contract are restrictions on\nuse of the data provided by BHealthy for any purpose beyond provision of the services, which include use\nof the data for continued improvement of Natural Insight’s machine learning algorithms.\n\nWhat is the nature of BHealthy and Natural Insight’s relationship?",
    options: ["A. Natural Insight is BHealthy’s processor because the companies entered into data processing terms.", "B. Natural Insight is BHealthy’s processor because BHealthy is sharing its customer information with Natural Insight.", "C. Natural Insight is the controller because it determines the security measures to implement to protect data it processes; BHealthy is a co-controller because it engaged Natural Insight to determine pricing for the new sunscreens.", "D. Natural Insight is a controller because it is separately determining the purpose of processing when it uses BHealthy’s customer information to improve its machine learning algorithms."],
    correctAnswer: "D",
    explanation: "正确答案 D。Natural Insight 虽以处理者身份接受 BHealthy 委托进行定价分析，但合同明确限制其不得将\n数据用于改进自身机器学习算法这一目的之外的用途，若 Natural Insight 仍将数据用于自身算法改进（服\n务于其全部客户群体的商业利益），这属于其为自身目的独立决定处理方式，已超出处理者角色，构成\n（针对该部分处理的）控制者。A（仅因签订处理协议就认定为处理者，忽略了实际处理行为是否超出协\n议授权）、B（仅因数据被共享就认定为处理者，共享本身不决定角色）、C（颠倒了双方角色定性逻\n辑 ） 均 不 准 确 。 知 识 点 ： 处 理 者 超 越 委 托 范 围 自 行 决 定 处 理 目 的 即 转 变 为 控 制 者 （ “controller in\ndisguise”）。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 162,
    question: "SCENARIO 6\nPlease use the following to answer the next question:\n\nBHealthy, a company based in Italy, is ready to launch a new line of natural products, with a focus on\nsunscreen. The last step prior to product launch is for BHealthy to conduct research to decide how\nextensively to market its new line of sunscreens across Europe. To do so, BHealthy teamed up with\nNatural Insight, a company specializing in determining pricing for natural products. BHealthy decided to\nshare its existing customer information – name, location, and prior purchase history – with Natural Insight.\nNatural Insight intends to use this information to train its algorithm to help determine the price point at\nwhich BHealthy can sell its new sunscreens.\n\nPrior to sharing its customer list, BHealthy conducted a review of Natural Insight’s security practices and\nconcluded that the company has sufficient security measures to protect the contact information.\nAdditionally, BHealthy’s data processing contractual terms with Natural Insight require continued\nimplementation of technical and organization measures. Also indicated in the contract are restrictions on\nuse of the data provided by BHealthy for any purpose beyond provision of the services, which include use\nof the data for continued improvement of Natural Insight’s machine learning algorithms.\n\nUnder the GDPR, what are Natural Insight’s security obligations with respect to the customer information it\nreceived from BHealthy?",
    options: ["A. Appropriate security that takes into account the industry practices for protecting customer contact information and purchase history.", "B. Only the security measures assessed by BHealthy prior to entering into the data processing contract.", "C. Absolute security since BHealthy is sharing personal data, including purchase history, with Natural Insight.", "D. The level of security that a reasonable data subject whose data is processed would expect in relation to the data subject’s purchase history."],
    correctAnswer: "A",
    explanation: "正确答案 A。第 32 条要求处理者采取的安全措施须与处理活动的性质、范围、背景目的及风险相适应，\n通常参照行业惯例、公认的技术标准来确定“适当”的安全水平，而非仅依赖控制者事先审查的措施（B，\n安全义务是处理者持续性的独立法定义务，不能因控制者事先审查过就固化标准）、也非要求“绝对安全”\n（C，法律从未要求绝对无风险的安全标准，而是“适当”标准）或以“合理数据主体的主观期待”作为客观\n法律标准（D，不是法定判断依据）。知识点：第 32 条“适当技术组织措施”标准——与风险相适应、参\n照行业惯例，而非绝对安全或主观期待标准。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 163,
    question: "SCENARIO\nPlease use the following to answer the next question:\n\nBHealthy, a company based in Italy, is ready to launch a new line of natural products, with a focus on\nsunscreen. The last step prior to product launch is for BHealthy to conduct research to decide how\nextensively to market its new line of sunscreens across Europe. To do so, BHealthy teamed up with\nNatural Insight, a company specializing in determining pricing for natural products. BHealthy decided to\nshare its existing customer information – name, location, and prior purchase history – with Natural Insight.\nNatural Insight intends to use this information to train its algorithm to help determine the price point at\nwhich BHealthy can sell its new sunscreens.\n\nPrior to sharing its customer list, BHealthy conducted a review of Natural Insight’s security practices and\nconcluded that the company has sufficient security measures to protect the contact information.\nAdditionally, BHealthy’s data processing contractual terms with Natural Insight require continued\nimplementation of technical and organization measures. Also indicated in the contract are restrictions on\nuse of the data provided by BHealthy for any purpose beyond provision of the services, which include use\nof the data for continued improvement of Natural Insight’s machine learning algorithms.\n\nIn which case would Natural Insight’s use of BHealthy’s data for improvement of its algorithms be\nconsidered data processor activity?",
    options: ["A. If Natural Insight uses BHealthy’s data for improving price point predictions only for BHealthy.", "B. If Natural Insight receives express contractual instructions from BHealthy to use its data for improving its algorithms.", "C. If Natural Insight agrees to be fully liable for its use of BHealthy’s customer information in its product improvement activities.", "D. If Natural Insight satisfies the transparency requirement by notifying BHealthy’s customers of its plans to use their information for its product improvement activities."],
    correctAnswer: "B",
    explanation: "正确答案 B。只有当 BHealthy 以书面合同明确指示 Natural Insight 将数据用于改进算法这一具体用途时，\n该用途才被纳入委托处理的授权范围内，属于处理者活动；若无此类明确指示，Natural Insight 擅自将数\n据用于自身算法改进则构成控制者行为（如 Q161 解析）。A（仅服务于 BHealthy 自身定价预测，仍需以\n合同明确授权为前提，本身不足以单独构成处理者行为的判断标准）、C（同意承担全部责任不能改变其\n“为自身目的独立决定处理方式”的控制者本质）、D（透明度告知客户，同样不能改变角色定性）均不如\nB 准确。知识点：处理者活动的合法性边界——须限于控制者书面指示范围内。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 164,
    question: "Which of the following is NOT an explicit right granted to data subjects under the GDPR?",
    options: ["A. The right to request access to the personal data a controller holds about them.", "B. The right to request the deletion of data a controller holds about them.", "C. The right to opt-out of the sale of their personal data to third parties.", "D. The right to request restriction of processing of personal data, under certain scenarios."],
    correctAnswer: "C",
    explanation: "正确答案 C。GDPR 明确赋予数据主体访问权（A，第 15 条）、删除权（B，第 17 条）、限制处理权\n（D，第 18 条）等一系列权利，但并未专门规定“拒绝个人数据被出售给第三方”这一表述形式的权利\n（这更接近美国加州 CCPA 等法律中的特有概念）；在 GDPR 框架下，若数据“出售”本质上构成一般处\n理或披露，数据主体可通过反对权（第 21 条）或撤回同意等途径实现类似效果，但 GDPR 本身并未以\n“opt-out of sale”这一术语明文规定。知识点：GDPR 数据主体权利体系与美国 CCPA 等法律“拒绝出售”权\n利表述方式的差异比较。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 165,
    question: "As per the GDPR, which legal basis would be the most appropriate for an online shop that wishes to\nprocess personal data for the purpose of fraud prevention?",
    options: ["A. Protection of the interests of the data subjects.", "B. Performance of a contact", "C. Legitimate interest", "D. Consent"],
    correctAnswer: "C",
    explanation: "正确答案 C。防范欺诈通常被认为是控制者（在线商店）保护自身及客户免受欺诈损失的合法利益，属\n于典型的第 6(1)(f)条“合法利益”应用场景（同时也在前言第 47 条中被明确列为合法利益的示例）。A\n（保护数据主体利益，第 6(1)(d)条通常指生命攸关情形，与防欺诈不完全对应）、B（履行合同，防欺诈\n本身并非合同履行的直接必要内容）、D（同意，防欺诈处理往往需要在客户不知情或不便逐一同意的情\n况下进行，合法利益更契合此类场景）均不如 C 准确。知识点：第 6(1)(f)条合法利益在欺诈防范场景下\n的典型应用（前言第 47 条）。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 166,
    question: "The Planet 49 CJEU Judgement applies to?",
    options: ["A. Cookies used only by third parties.", "B. Cookies that are deemed technically necessary.", "C. Cookies regardless of whether the data accessed is personal or not.", "D. Cookies where the data accessed is considered as personal data only."],
    correctAnswer: "C",
    explanation: "正确答案 C。欧洲法院在 Planet49 案（2019）中明确，无论 cookie 读取或存储的信息是否构成“个人数\n据”，只要涉及在用户终端设备上存储或读取信息，均须依据 ePrivacy 指令取得用户的有效同意（该判决\n的核心意义正在于将同意要求的适用范围扩展至不限于个人数据本身）。A（仅限第三方 cookie）、B\n（技术必要 cookie，恰恰是同意例外而非该判决适用对象）、D（仅限涉及个人数据的 cookie，恰与判决\n要旨相反）均不准确。知识点：Planet49 案确立的 cookie 同意规则不以数据是否构成“个人数据”为前提。",
    topic: "ePrivacy指令",
    verified: "accurate"
  },
  {
    id: 167,
    question: "Bioface is a company based in the United States. It has no servers, personnel or assets in the European\n\nUnion. By collecting photographs from social media and other web-based services, such as newspapers\n\nand blogs, it uses machine learning to develop a facial recognition algorithm. The algorithm identifies\nindividuals in photographs who are not in its data set based the algorithm and its existing data. The service\n\ncollects photographs of data subjects in the European Union and will identify them if presented with their\n\nphotographs. Bioface offers its service to government agencies and companies in the United States and\n\nCanada, but not to those in the European Union. Bioface does not offer the service to individuals. 6\nWhy is Bioface subject to the territorial scope of the General Data Protection Regulation?",
    options: ["A. It collects data from European Union websites, which constitutes an establishment in the European Union.", "B. It offers services in the European Union by identifying data subjects in the European Union.", "C. It collects data from subjects and uses it for automated processing.", "D. It monitors the behavior of data subjects in the European Union."],
    correctAnswer: "D",
    explanation: "正确答案 D。Bioface 虽未在欧盟设立机构、也不直接向欧盟客户或个人提供服务（排除 A、B——A 错误\n地将境外收集数据行为等同于“设立”，设立须有稳定经营安排；B 错误，其服务对象是美加政府机构和企\n业而非直接面向欧盟数据主体或个人），但其从欧盟数据主体的照片中提取并处理生物识别信息、通过\n面部识别技术持续识别欧盟境内个人，这构成第 3(2)(b)条“监测欧盟境内数据主体行为”，从而触发 GDPR\n域外适用。C（笼统的“收集数据并自动化处理”表述，未能准确抓住“监测行为”这一关键触发要素）不如\nD 准确。知识点：第 3(2)(b)条“监测行为”标准——面部识别等生物特征识别技术构成对欧盟个人的行为监\n测。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 168,
    question: "SCENARIO\nPlease use the following to answer the next question:\n\nJoe started the Gummy Bear Company in 2000 from his home in Vermont, USA. Today, it is a multi-billion-\ndollar candy company operating in every continent. All of the company’s IT servers are located in Vermont.\nThis year Joe hires his son Ben to join the company and head up Project Big, which is a major marketing\nstrategy to triple gross revenue in just 5 years. Ben graduated with a PhD in computer software from a top\nuniversity. Ben decided to join his father’s company, but is also secretly working on launching a new global\nonline dating website company called Ben Knows Best.\n\nBen is aware that the Gummy Bear Company has millions of customers and believes that many of them\n\nmight also be interested in finding their perfect match. For Project Big, Ben redesigns the company’s\nonline web portal and requires customers in the European Union and elsewhere to provide additional\npersonal information in order to remain a customer. Project Ben begins collecting data about customers’\nphilosophical beliefs, political opinions and marital status.\n\nIf a customer identifies as single, Ben then copies all of that customer’s personal data onto a separate\ndatabase for Ben Knows Best. Ben believes that he is not doing anything wrong, because he explicitly\nasks each customer to give their consent by requiring them to check a box before accepting their\ninformation. As Project Big is an important project, the company also hires a first year college student\nnamed Sam, who is studying computer science to help Ben out.\n\nBen calls out sick and Sam comes across the Ben Knows Best database. Sam is planning on going to\nIreland over Spring Beak with 10 of his friends, so he copies all of the customer information of people that\nreside in Ireland so that he and his friends can contact people when they are in Ireland.\n\nJoe also hires his best friend’s daughter, Alice, who just graduated from law school in the U.S., to be the\ncompany’s new General Counsel. Alice has heard about the GDPR, so she does some research on it.\nAlice approaches Joe and informs him that she has drafted up Binding Corporate Rules for everyone in the\ncompany to follow, as it is important for the company to have in place a legal mechanism to transfer data\ninternally from the company’s operations in the European Union to the U.S.\n\nJoe believes that Alice is doing a great job, and informs her that she will also be in-charge of handling a\nmajor lawsuit that has been brought against the company in federal court in the U.S. To prepare for the\nlawsuit, Alice instructs the company’s IT department to make copies of the computer hard drives from the\nentire global sales team, including the European Union, and send everything to her so that she can review\neveryone’s information. Alice believes that Joe will be happy that she did the first level review, as it will\nsave the company a lot of money that would otherwise be paid to its outside law firm.\n\nWhen Ben had the company collect additional data from its customers, the most serious violation of the\n\nGDPR occurred because the processing of the data created what?",
    options: ["A. An information security risk by copying the data into a new database.", "B. A potential legal liability and financial exposure from its customers.", "C. A significant risk to the customers’ fundamental rights and freedoms.", "D. A significant risk due to the lack of an informed consent mechanism. 6"],
    correctAnswer: "C",
    explanation: "正确答案 C。Ben 在未取得合法依据的情况下收集客户的哲学信仰、政治观点等第 9 条特殊类别数据，并\n将单身客户数据挪用至秘密运营的交友网站数据库，这种未经充分知情同意、涉及高度敏感数据类别且\n用途严重偏离原始目的的处理，对客户的基本权利和自由（尤其隐私权、个人数据保护权及可能的人身\n安全风险）构成重大且实质性的风险，是本情节中最严重的 GDPR 违规后果。A（信息安全风险，虽然存\n在但并非“最严重”违规的核心）、B（潜在法律责任和财务风险，属于处理结果而非处理行为本身的性\n质）、D（笼统指同意机制缺陷，未能概括本案更深层的权利风险）均不如 C 准确抓住违规的实质与严重\n性。知识点：第 5(1)(a)条及第 9 条框架下，处理特殊类别数据且严重偏离原始目的对数据主体基本权利\n自由造成的重大风险。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 169,
    question: "SCENARIO\nPlease use the following to answer the next question:\n\nJoe started the Gummy Bear Company in 2000 from his home in Vermont, USA. Today, it is a multi-billion-\ndollar candy company operating in every continent. All of the company’s IT servers are located in Vermont.\nThis year Joe hires his son Ben to join the company and head up Project Big, which is a major marketing\nstrategy to triple gross revenue in just 5 years. Ben graduated with a PhD in computer software from a top\nuniversity. Ben decided to join his father’s company, but is also secretly working on launching a new global\nonline dating website company called Ben Knows Best.\n\nBen is aware that the Gummy Bear Company has millions of customers and believes that many of them\nmight also be interested in finding their perfect match. For Project Big, Ben redesigns the company’s\nonline web portal and requires customers in the European Union and elsewhere to provide additional\npersonal information in order to remain a customer. Project Ben begins collecting data about customers’\nphilosophical beliefs, political opinions and marital status.\n\nIf a customer identifies as single, Ben then copies all of that customer’s personal data onto a separate\ndatabase for Ben Knows Best. Ben believes that he is not doing anything wrong, because he explicitly\nasks each customer to give their consent by requiring them to check a box before accepting their\ninformation. As Project Big is an important project, the company also hires a first year college student\n\nnamed Sam, who is studying computer science to help Ben out.\n\nBen calls out sick and Sam comes across the Ben Knows Best database. Sam is planning on going to\nIreland over Spring Beak with 10 of his friends, so he copies all of the customer information of people that\nreside in Ireland so that he and his friends can contact people when they are in Ireland.\n\nJoe also hires his best friend’s daughter, Alice, who just graduated from law school in the U.S., to be the\ncompany’s new General Counsel. Alice has heard about the GDPR, so she does some research on it.\nAlice approaches Joe and informs him that she has drafted up Binding Corporate Rules for everyone in the\ncompany to follow, as it is important for the company to have in place a legal mechanism to transfer data\ninternally from the company’s operations in the European Union to the U.S.\n\nJoe believes that Alice is doing a great job, and informs her that she will also be in-charge of handling a\nmajor lawsuit that has been brought against the company in federal court in the U.S. To prepare for the\nlawsuit, Alice instructs the company’s IT department to make copies of the computer hard drives from the\nentire global sales team, including the European Union, and send everything to her so that she can review\neveryone’s information. Alice believes that Joe will be happy that she did the first level review, as it will\nsave the company a lot of money that would otherwise be paid to its outside law firm.\n\nIn preparing the company for its impending lawsuit, Alice’s instruction to the company’s IT Department\n\nviolated Article 5 of the GDPR because the company failed to first do what?",
    options: ["A. Send out consent forms to all of its employees.", "B. Minimize the amount of data collected for the lawsuit.", "C. Inform all of its employees about the lawsuit.", "D. Encrypt the data from all of its employees."],
    correctAnswer: "B",
    explanation: "正确答案 B。Alice 在准备诉讼时指示 IT 部门复制全体全球销售团队（包含欧盟员工）的整个硬盘内容，\n而非仅提取与诉讼实际相关的必要信息，这明显违反第 5(1)(c)条数据最小化原则——收集的数据应限于\n实现处理目的所必需的范围，而非不加区分地全量复制。A（发同意表，本案合法依据应考虑合法利益或\n法律义务而非需逐一取得员工同意）、C（告知员工诉讼情况，属程序性事项非本题核心违规点）、D\n（加密数据，属安全措施而非目的限制/数据最小化问题）均不是本题聚焦的违规点。知识点：第 5(1)(c)\n条数据最小化原则在电子取证（e-discovery）场景中的应用。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 170,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nJoe started the Gummy Bear Company in 2000 from his home in Vermont, USA. Today, it is a multi-billion-\ndollar candy company operating in every continent. All of the company’s IT servers are located in Vermont.\nThis year Joe hires his son Ben to join the company and head up Project Big, which is a major marketing\nstrategy to triple gross revenue in just 5 years. Ben graduated with a PhD in computer software from a top\nuniversity. Ben decided to join his father’s company, but is also secretly working on launching a new global\nonline dating website company called Ben Knows Best.\n\nBen is aware that the Gummy Bear Company has millions of customers and believes that many of them\nmight also be interested in finding their perfect match. For Project Big, Ben redesigns the company’s\nonline web portal and requires customers in the European Union and elsewhere to provide additional\npersonal information in order to remain a customer. Project Ben begins collecting data about customers’\nphilosophical beliefs, political opinions and marital status.\n\nIf a customer identifies as single, Ben then copies all of that customer’s personal data onto a separate\ndatabase for Ben Knows Best. Ben believes that he is not doing anything wrong, because he explicitly\nasks each customer to give their consent by requiring them to check a box before accepting their\ninformation. As Project Big is an important project, the company also hires a first year college student\nnamed Sam, who is studying computer science to help Ben out.\n\nBen calls out sick and Sam comes across the Ben Knows Best database. Sam is planning on going to\nIreland over Spring Beak with 10 of his friends, so he copies all of the customer information of people that\nreside in Ireland so that he and his friends can contact people when they are in Ireland.\n\nJoe also hires his best friend’s daughter, Alice, who just graduated from law school in the U.S., to be the\ncompany’s new General Counsel. Alice has heard about the GDPR, so she does some research on it.\nAlice approaches Joe and informs him that she has drafted up Binding Corporate Rules for everyone in the\n\ncompany to follow, as it is important for the company to have in place a legal mechanism to transfer data\ninternally from the company’s operations in the European Union to the U.S.\n\nJoe believes that Alice is doing a great job, and informs her that she will also be in-charge of handling a\nmajor lawsuit that has been brought against the company in federal court in the U.S. To prepare for the\nlawsuit, Alice instructs the company’s IT department to make copies of the computer hard drives from the\nentire global sales team, including the European Union, and send everything to her so that she can review\neveryone’s information. Alice believes that Joe will be happy that she did the first level review, as it will\nsave the company a lot of money that would otherwise be paid to its outside law firm.\n\nAs a result of Sam’s actions, the Gummy Bear Company potentially violated Articles 33 and 34 of the\nGDPR and will be required to do what?",
    options: ["A. Notify its Data Protection Authority about the data breach.", "B. Analyze and evaluate the liability for customers in Ireland.", "C. Analyze and evaluate all of its breach notification obligations.", "D. Notify all of its customers that reside in the European Union."],
    correctAnswer: "C",
    explanation: "正确答案 C。Sam 的未授权复制至少构成需要记录和评估的安全事件。控制者应先分析数据类别、影响人数、可识\n别性、可能后果及现有保护措施，分别判断第 33 条监管机构通知（可能造成风险）和第 34 条数据主体通知（可能\n造成高风险）是否触发。仅凭题干不能直接断定必须通知监管机构或所有客户，故 C 最准确。",
    topic: "GDPR",
    verified: "corrected"
  },
  {
    id: 171,
    question: "SCENARIO\nPlease use the following to answer the next question:\n\nJoe started the Gummy Bear Company in 2000 from his home in Vermont, USA. Today, it is a multi-billion-\n\ndollar candy company operating in every continent. All of the company’s IT servers are located in Vermont.\nThis year Joe hires his son Ben to join the company and head up Project Big, which is a major marketing\n\nstrategy to triple gross revenue in just 5 years. Ben graduated with a PhD in computer software from a top\n\nuniversity. Ben decided to join his father’s company, but is also secretly working on launching a new global\n\nonline dating website company called Ben Knows Best. 6\nBen is aware that the Gummy Bear Company has millions of customers and believes that many of them\nmight also be interested in finding their perfect match. For Project Big, Ben redesigns the company’s\nonline web portal and requires customers in the European Union and elsewhere to provide additional\npersonal information in order to remain a customer. Project Ben begins collecting data about customers’\nphilosophical beliefs, political opinions and marital status.\n\nIf a customer identifies as single, Ben then copies all of that customer’s personal data onto a separate\ndatabase for Ben Knows Best. Ben believes that he is not doing anything wrong, because he explicitly\nasks each customer to give their consent by requiring them to check a box before accepting their\n\ninformation. As Project Big is an important project, the company also hires a first year college student\nnamed Sam, who is studying computer science to help Ben out.\n\nBen calls out sick and Sam comes across the Ben Knows Best database. Sam is planning on going to\nIreland over Spring Beak with 10 of his friends, so he copies all of the customer information of people that\nreside in Ireland so that he and his friends can contact people when they are in Ireland.\n\nJoe also hires his best friend’s daughter, Alice, who just graduated from law school in the U.S., to be the\ncompany’s new General Counsel. Alice has heard about the GDPR, so she does some research on it.\nAlice approaches Joe and informs him that she has drafted up Binding Corporate Rules for everyone in the\ncompany to follow, as it is important for the company to have in place a legal mechanism to transfer data\ninternally from the company’s operations in the European Union to the U.S.\n\nJoe believes that Alice is doing a great job, and informs her that she will also be in-charge of handling a\nmajor lawsuit that has been brought against the company in federal court in the U.S. To prepare for the\nlawsuit, Alice instructs the company’s IT department to make copies of the computer hard drives from the\nentire global sales team, including the European Union, and send everything to her so that she can review\neveryone’s information. Alice believes that Joe will be happy that she did the first level review, as it will\nsave the company a lot of money that would otherwise be paid to its outside law firm.\n\nThe data transfer mechanism that Alice drafted violates the GDPR because the company did not first get\napproval from?",
    options: ["A. The Court of Justice of the European Union.", "B. The European Data Protection Board.", "C. The Data Protection Authority.", "D. The European Commission."],
    correctAnswer: "C",
    explanation: "正确答案 C。Alice 起草的 BCRs 作为跨境传输机制，依据第 47 条须经有管辖权的数据保护监管机构\n（DPA）审批通过（并经一致性机制确认）后方可生效使用，公司未经此审批程序即在内部推行使用，\n构成违反跨境传输合法性要求。A、B、D 并非 BCRs 生效所需的直接审批主体（CJEU 负责司法裁决而非\n行政审批，EDPB 主要参与一致性意见形成而非直接“批准”单个企业的 BCRs，欧盟委员会负责的是标准\n合同条款和充分性认定而非 BCRs 审批）。知识点：第 47 条约束性企业规则（BCRs）须经监管机构批准\n方可生效的强制性程序。",
    topic: "监管机构",
    verified: "accurate"
  },
  {
    id: 172,
    question: "SCENARIO\nPlease use the following to answer the next question:\n\nJoe started the Gummy Bear Company in 2000 from his home in Vermont, USA. Today, it is a multi-billion-\ndollar candy company operating in every continent. All of the company’s IT servers are located in Vermont.\nThis year Joe hires his son Ben to join the company and head up Project Big, which is a major marketing\nstrategy to triple gross revenue in just 5 years. Ben graduated with a PhD in computer software from a top\nuniversity. Ben decided to join his father’s company, but is also secretly working on launching a new global\nonline dating website company called Ben Knows Best.\n\nBen is aware that the Gummy Bear Company has millions of customers and believes that many of them\nmight also be interested in finding their perfect match. For Project Big, Ben redesigns the company’s\n\nonline web portal and requires customers in the European Union and elsewhere to provide additional\n\npersonal information in order to remain a customer. Project Ben begins collecting data about customers’\nphilosophical beliefs, political opinions and marital status.\n\nIf a customer identifies as single, Ben then copies all of that customer’s personal data onto a separate\n\ndatabase for Ben Knows Best. Ben believes that he is not doing anything wrong, because he explicitly\nasks each customer to give their consent by requiring them to check a box before accepting their\n\ninformation. As Project Big is an important project, the company also hires a first year college student\nnamed Sam, who is studying computer science to help Ben out.\n\nBen calls out sick and Sam comes across the Ben Knows Best database. Sam is planning on going to\nIreland over Spring Beak with 10 of his friends, so he copies all of the customer information of people that\nreside in Ireland so that he and his friends can contact people when they are in Ireland.\n\nJoe also hires his best friend’s daughter, Alice, who just graduated from law school in the U.S., to be the\ncompany’s new General Counsel. Alice has heard about the GDPR, so she does some research on it.\nAlice approaches Joe and informs him that she has drafted up Binding Corporate Rules for everyone in the\ncompany to follow, as it is important for the company to have in place a legal mechanism to transfer data\ninternally from the company’s operations in the European Union to the U.S.\n\nJoe believes that Alice is doing a great job, and informs her that she will also be in-charge of handling a\nmajor lawsuit that has been brought against the company in federal court in the U.S. To prepare for the\nlawsuit, Alice instructs the company’s IT department to make copies of the computer hard drives from the\nentire global sales team, including the European Union, and send everything to her so that she can review\neveryone’s information. Alice believes that Joe will be happy that she did the first level review, as it will\nsave the company a lot of money that would otherwise be paid to its outside law firm.\n\nBen’s collection of additional data from customers created several potential issues for the company, which\nwould most likely require what?",
    options: ["A. New corporate governance and code of conduct.", "B. A data protection impact assessment.", "C. A comprehensive data inventory.", "D. Hiring a data protection officer."],
    correctAnswer: "B",
    explanation: "正确答案 B。Ben 新增收集客户的哲学信仰、政治观点等敏感个人数据，并结合其他数据进行匹配用于交\n友撮合等新用途，这类涉及特殊类别数据、大规模处理且很可能对数据主体权利自由带来高风险的活\n动，依第 35 条须开展 DPIA 予以评估。A（笼统的公司治理与行为守则调整，属于组织层面的宏观合规\n建议，并非法定强制的直接应对措施）、C（数据盘点，是 DPIA 的基础工作之一但本身并非充分的合规\n回应）、D（雇佣 DPO，是否强制取决于第 37 条触发条件是否满足，并非本情节问题的直接、必然解决\n方案）均不如 B 准确对应“新增高风险处理”这一核心问题。知识点：第 35 条 DPIA 触发情形——新增涉\n及特殊类别数据的大规模、高风险处理活动。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 173,
    question: "Which of the following was the first legally binding international instrument in the area of data protection?",
    options: ["A. Convention 108.", "B. General Data Protection Regulation.", "C. Universal Declaration of Human Rights.", "D. EU Directive on Privacy and Electronic Communications."],
    correctAnswer: "A",
    explanation: "正确答案 A。欧洲理事会 108 号公约（1981 年开放签署）是全球首个具有法律约束力的国际数据保护条\n约，早于 GDPR（2016 年通过）及 ePrivacy 指令。世界人权宣言（C，1948 年）虽包含隐私权的原则性\n宣示，但并非专门针对数据保护、且不具备条约意义上的直接法律约束力（属宣言性质而非条约）。知\n识点：108 号公约作为首个具有法律约束力的国际数据保护条约的历史地位。",
    topic: "ePrivacy指令",
    verified: "accurate"
  },
  {
    id: 174,
    question: "A multinational company is appointing a mandatory data protection officer. In addition to considering the\nrules set out in Article 37 (1) of the GDPR, which of the following actions must the company also undertake\nto ensure compliance in all EU jurisdictions in which it operates?",
    options: ["A. Consult national derogations to evaluate if there are additional cases to be considered in relation to the matter.", "B. Conduct a Data Protection Privacy Assessment on the processing operations of the company in all the countries it operates.", "C. Assess whether the company has more than 250 employees in each of the EU member-states in which it is established.", "D. Revise the data processing activities of the company that affect more than one jurisdiction to evaluate whether they comply with the principles of privacy by design and by default."],
    correctAnswer: "A",
    explanation: "正确答案 A。GDPR 第 37(4) 条允许欧盟法或成员国法在第 37(1) 条之外规定追加必须指定 DPO 的情形。跨国公司因\n此应逐一检查其经营所在成员国的补充规则或开放条款。B、C、D 均不是确保各司法辖区 DPO 指定合规的直接步\n骤。",
    topic: "GDPR",
    verified: "corrected"
  },
  {
    id: 175,
    question: "The European Parliament jointly exercises legislative and budgetary functions with which of the following?",
    options: ["A. The European Commission.", "B. The Article 29 Working Party.", "C. The Council of the European Union.", "D. The European Data Protection Board."],
    correctAnswer: "C",
    explanation: "正确答案 C。根据欧盟条约框架下的普通立法程序，欧洲议会与欧盟理事会共同行使立法权和预算权，\n两机构须共同通过法案方可生效（共同决定程序）。欧盟委员会（A）负责提案和执行，而非与议会共享\n立法/预算职权本身；第 29 条工作组（B）和 EDPB（D）均为数据保护领域的咨询/协调机构，与欧盟整\n体立法预算程序无关。知识点：欧洲议会与欧盟理事会共同行使立法与预算职权（共同决定程序）。",
    topic: "监管机构",
    verified: "accurate"
  },
  {
    id: 176,
    question: "A U.S. company’s website sells widgets. Which of the following factors would NOT in itself subject the\ncompany to the GDPR?",
    options: ["A. The widgets are offered in EU and priced in euro.", "B. The website is in English and French, and is accessible in France.", "C. An affiliate office is located in France but the processing is in the U.S.", "D. The website places cookies to monitor the EU website user behavior."],
    correctAnswer: "B",
    explanation: "正确答案 B。网站可在法国访问、使用英语和法语，本身不足以证明经营者有意向欧盟数据主体提供商品或服务。A\n以欧元报价是明确的欧盟市场指向因素；D 通过 cookie 监测欧盟用户行为可触发第 3(2)(b) 条；C 若法国关联机构通\n过稳定安排参与相关业务，处理即使在美国完成也可能属于第 3(1) 条“在欧盟设立机构活动背景下”的处理。",
    topic: "ePrivacy指令",
    verified: "corrected"
  },
  {
    id: 177,
    question: "When does the European Data Protection Board (EDPB) recommend reevaluating whether a transfer tool\nis effectively providing a level of personal data protection that is in compliance with the European Union\n(EU) level?",
    options: ["A. After a personal data breach.", "B. Every three (3) years.", "C. On an ongoing basis.", "D. Every year."],
    correctAnswer: "C",
    explanation: "正确答案 C。EDPB 在 Schrems II 判决后发布的补充措施建议中强调，数据出口方应对传输工具（如\nSCC）所提供的保护水平进行“持续性”（on an ongoing basis）监测和评估，而非仅在特定固定周期（如每\n年或每三年，B、D）或仅在发生数据泄露后（A）才进行评估，因为第三国法律环境可能随时发生变\n化，需持续跟踪。知识点：EDPB 关于跨境传输保护水平持续评估义务的建议（Schrems II 判决后的补充\n措施指南）。",
    topic: "判例法",
    verified: "accurate"
  },
  {
    id: 178,
    question: "Which judicial body makes decisions on actions taken by individuals wishing to enforce their rights under\nEU law?",
    options: ["A. Court of Auditors", "B. Court of Justice of European Union", "C. European Court of Human Rights", "D. European Data Protection Board"],
    correctAnswer: "B",
    explanation: "正确答案 B。欧盟法院（CJEU）负责就欧盟法律的解释和适用作出终局裁决，包括个人依据欧盟法（如\nGDPR）寻求权利救济时的相关诉讼（含成员国法院提请的初步裁决程序）。审计法院（A）负责欧盟财\n政审计；欧洲人权法院（C）审理的是《欧洲人权公约》项下的申诉，与欧盟法律体系是两套独立机制；\nEDPB（D）是行政协调机构而非司法机构，无权作出司法裁决。知识点：CJEU 作为欧盟法律解释与个人\n权利救济的最终司法机构，及其与 ECtHR、EDPB 的区分。",
    topic: "判例法",
    verified: "accurate"
  },
  {
    id: 179,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nSandy recently joined Market4U, an advertising technology company founded in 2016, as their VP of\nPrivacy and Data Governance. Through her first initiative in conducting a data inventory, Sandy learned\nthat Market4U maintains a list of 19 million global contacts that were collected throughout the course of\nMarket4U’s existence. Knowing the risk of having such a large amount of data, Sandy wanted to purge all\ncontacts that were entered into Market4U’s systems prior to May 2018, unless such contacts had a more\nrecent interaction with Market4U content. However, Dan, the VP of Sales, informed Sandy that all of the\ncontacts provide useful information regarding successful marketing campaigns and trends in industry\nverticals for Market4U’s clients.\n\nDan also informed Sandy that he had wanted to focus on gaining more customers within the sports and\nentertainment industry. To assist with this behavior, Market4U’s marketing team decided to add several\n\nnew fields to Market4U’s website forms, including forms for downloading white papers, creating accounts\nto participate in Market4U’s forum, and attending events. Such fields include birth date and salary.\n\nWhat should Sandy give as feedback to Dan and the marketing team regarding the new fields Dan wants\nto add to Market4U’s forms?",
    options: ["A. Make all the fields optional.", "B. Only request the information in brackets (i.e., age group and salary range).", "C. Eliminate the fields, as they are not proportional to the services being offered.", "D. Eliminate the fields as they are not necessary for the purposes of providing white papers or registration for events."],
    correctAnswer: "D",
    explanation: "正确答案 D。生日和薪资信息与下载白皮书、创建论坛账户或活动报名等服务的实现之间不存在必要关\n联，收集这些字段违反第 5(1)(c)条数据最小化原则，正确做法是直接取消这些非必要字段，而非仅设为\n可选（A，可选并不能改变“非必要收集”这一本质问题）、以区间代替精确值收集（B，即便区间化仍可\n能构成非必要收集）或泛泛地以“不成比例”为由处理（C，表述不如 D 具体准确地指出“非实现该服务目\n的所必需”这一核心法律标准）。知识点：第 5(1)(c)条数据最小化原则——收集字段须与处理目的具有必\n要关联性。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 180,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nSandy recently joined Market4U, an advertising technology company founded in 2016, as their VP of\nPrivacy and Data Governance. Through her first initiative in conducting a data inventory, Sandy learned\nthat Market4U maintains a list of 19 million global contacts that were collected throughout the course of\nMarket4U’s existence. Knowing the risk of having such a large amount of data, Sandy wanted to purge all\ncontacts that were entered into Market4U’s systems prior to May 2018, unless such contacts had a more\n\nrecent interaction with Market4U content. However, Dan, the VP of Sales, informed Sandy that all of the\n\ncontacts provide useful information regarding successful marketing campaigns and trends in industry\nverticals for Market4U’s clients.\n\nDan also informed Sandy that he had wanted to focus on gaining more customers within the sports and\n\nentertainment industry. To assist with this behavior, Market4U’s marketing team decided to add several\nnew fields to Market4U’s website forms, including forms for downloading white papers, creating accounts\nto participate in Market4U’s forum, and attending events. Such fields include birth date and salary.\n\nWhat is the best way that Sandy can gain the insights that Dan seeks while still minimizing risks for\nMarket4U?",
    options: ["A. Conduct analysis only on anonymized personal data.", "B. Conduct analysis only on pseudonymized personal data.", "C. Delete all data collected prior to May 2018 after conducting the trend analysis.", "D. Procure a third party to conduct the analysis and delete the data from Market4U’s systems."],
    correctAnswer: "A",
    explanation: "正确答案 A。为在满足 Dan 获取行业趋势洞察需求的同时最大限度降低隐私风险，最佳做法是仅对已完\n全匿名化、无法重新识别到具体个人的数据进行趋势分析，因为匿名化数据不再受 GDPR 约束，可自由\n用于统计分析；假名化数据（B）仍是个人数据，风险依然存在；仅在分析后才删除数据（C）无法在分\n析阶段本身降低风险；委托第三方分析并事后删除（D）不仅未降低风险，反而增加了额外的数据共享和\n处理者管理风险。知识点：匿名化作为在保留数据分析价值的同时消除 GDPR 合规风险的最佳技术手\n段。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 181,
    question: "A data controller appoints a data protection officer. Which of the following conditions would NOT result in\nan infringement of Articles 37 to 39 of the GDPR?",
    options: ["A. If the data protection officer lacks ISO 27001 auditor certification.", "B. If the data protection officer is provided by the data processor.", "C. If the data protection officer also manages the marketing budget.", "D. If the data protection officer receives instructions from the data controller."],
    correctAnswer: "A",
    explanation: "答案 A 明确不构成违规，因为 GDPR 不要求 DPO 具备特定 ISO 认证。B 也并非当然违规：DPO 可依据服务合同由\n外部个人或机构提供；只有在处理者角色造成利益冲突、缺乏独立性或无法履职时才会违规。因此本题有一定歧\n义。",
    topic: "GDPR",
    verified: "qualified"
  },
  {
    id: 182,
    question: "Data retention in the EU was underpinned by a legal framework established by the Data Retention\nDirective (2006/24/EC). Why is the Directive no longer part of EU law?",
    options: ["A. The Directive was superseded by the EU Directive on Privacy and Electronic Communications.", "B. The Directive was superseded by the General Data Protection Regulation.", "C. The Directive was annulled by the Court of Justice of the European Union.", "D. The Directive was annulled by the European Court of Human Rights."],
    correctAnswer: "C",
    explanation: "正确答案 C。数据留存指令因欧洲法院在 Digital Rights Ireland 案（2014）中认定其对隐私权和数据保护\n权的干预不成比例而被宣告无效（annulled），而非被其他立法“取代”（A、B 均为错误表述，尽管\nePrivacy 指令及 GDPR 确实涉及相关领域，但数据留存指令的失效并非源于被这些法律“取代”，而是被欧\n洲法院直接宣告无效）；欧洲人权法院（D）并非该案的审理法院，审理该案的是欧盟法院（CJEU）。\n知识点：Digital Rights Ireland 案及数据留存指令因比例原则被欧盟法院宣告无效。",
    topic: "ePrivacy指令",
    verified: "accurate"
  },
  {
    id: 183,
    question: "Which of the following is the weakest lawful basis for processing employee personal data?",
    options: ["A. Processing based on fulfilling an employment contract.", "B. Processing based on employee consent.", "C. Processing based on legitimate interests.", "D. Processing based on legal obligation."],
    correctAnswer: "B",
    explanation: "正确答案 B。基于同意作为雇佣关系中处理员工数据的合法依据被认为是最薄弱的选择，原因在于雇主\n与员工之间存在明显的权力不对等，员工的同意往往难以被视为真正“自由给予”（前言第 43 条），一旦\n同意被认定无效，处理即丧失合法依据基础。相较之下，履行劳动合同（A）、法定义务（D）、合法利\n益（C，须经审慎的利益平衡测试）通常在雇佣场景下更为稳健和适用。知识点：同意在雇佣关系中作为\n合法依据的固有弱点（权力不对等下的自愿性缺陷）。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 184,
    question: "An organization receives a request multiple times from a data subject seeking to exercise his rights with\nrespect to his own personal data. Under what condition can the organization charge the data subject a fee\nfor processing the request?",
    options: ["A. Only where the organization can show that it is reasonable to do so because more than one request was made.", "B. Only to the extent this is allowed under the restrictions on data subjects’ rights introduced under Art 23 of GDPR.", "C. Only where the administrative costs of taking the action requested exceeds a certain threshold.", "D. Only if the organization can demonstrate that the request is clearly excessive or misguided."],
    correctAnswer: "D",
    explanation: "答案 D 应按 GDPR 第 12(5) 条理解为“请求明显无依据（manifestly unfounded）或过度（excessive）”。“misguided”并\n非法定标准；仅仅重复请求也不自动允许收费，控制者负有证明责任。",
    topic: "GDPR",
    verified: "qualified"
  },
  {
    id: 185,
    question: "To receive a preliminary interpretation on provisions of the GDPR, a national court will refer its case to\nwhich of the following?",
    options: ["A. The Court of Justice of the European Union.", "B. The European Data Protection Supervisor.", "C. The European Court of Human Rights.", "D. The European Data Protection Board."],
    correctAnswer: "A",
    explanation: "正确答案 A。当成员国法院在审理案件过程中对欧盟法（包括 GDPR）的解释存在疑问时，依据 TFEU 第\n267 条可（在终审法院则须）向欧盟法院（CJEU）提起“初步裁决请求”（preliminary ruling），以获得具\n有约束力的权威解释。B（EDPS 负责监督欧盟机构自身的数据处理，非成员国法院寻求法律解释的对\n象）、C（ECtHR 审理的是欧洲人权公约项下的申诉而非欧盟法解释请求）、D（EDPB 是行政协调机构\n而 非司 法机 构 ）均 不具 备 此项 职能 。 知识 点： TFEU 第 267 条 初步 裁决 程 序及 CJEU 对 欧盟 法（ 含\nGDPR）的权威解释职能。",
    topic: "判例法",
    verified: "accurate"
  },
  {
    id: 186,
    question: "A grade school is planning to use facial recognition to track student attendance. Which of the following\nmay provide a lawful basis for this processing?",
    options: ["A. The school places a notice near each camera.", "B. The school gets explicit consent from the students.", "C. Processing is necessary for the legitimate interests pursed by the school.", "D. A state law requires facial recognition to verify attendance."],
    correctAnswer: "D",
    explanation: "正确答案 D。当法律（如某州/成员国法律）明确要求学校使用人脸识别技术核验出勤时，该处理的合法\n依据可依托第 6(1)(c)条“履行控制者所负法定义务”（结合第 9(2)(g)条“基于重大公共利益的成员国法律”处\n理生物识别数据的例外，因人脸识别涉及第 9 条生物识别特殊类别数据）。A（张贴告示，仅满足透明度\n要求，不构成独立合法依据）、B（学生同意，在校方与未成年学生存在权力不对等的教育场景中，同意\n的自愿性通常存疑，尤其对未成年人更是如此）、C（笼统主张合法利益，在处理生物识别这类特殊类别\n数据时，合法利益本身并不足以满足第 9 条更严格的例外要求）均不如 D 稳妥准确。知识点：处理生物\n识别等特殊类别数据须同时满足第 6 条一般合法依据和第 9 条特殊类别数据例外的双重要求，法定义务+\n重大公共利益的成员国法律是常见组合依据。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 187,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nABC Hotel Chain and XYZ Travel Agency are U.S.-based multinational companies. They use an internet-\n\nbased common platform for collecting and sharing their customer data with each other, in order to\nintegrate their marketing efforts. Additionally, they agree on the data to be stored, how reservations will be\n\nbooked and confirmed, and who has access to the stored data.\n\nMike, an EU resident, has booked travel itineraries in the past through XYZ Travel Agency to stay at ABC\nHotel Chain’s locations. XYZ Travel Agency offers a rewards program that allows customers to sign up to\naccumulate points that can later be redeemed for free travel. Mike has signed the agreement to be a\nrewards program member.\n\nNow Mike wants to know what personal information the company holds about him. He sends an email\nrequesting access to his data, in order to exercise what he believes are his data subject rights.\n\nWhat is the time period in which Mike should receive a response to his request?",
    options: ["A. Not more than one month of receipt of Mike’s request.", "B. Not more than two months after verifying Mike’s identity.", "C. When all the information about Mike has been collected.", "D. Not more than thirty days after submission of Mike’s request."],
    correctAnswer: "A",
    explanation: "正确答案 A。第 12(3)条规定，控制者应在收到访问请求后一个月内响应（如请求复杂可延长至多两个\n月，但须在首月内告知延期原因及理由），A 准确反映这一基本期限起算点（自收到请求之日起），而\n非以身份核实完成后起算（B，身份核实通常应在请求收到后尽快完成，而非将响应期限的起算点推迟至\n核实完成之后另计）、以数据收集完毕为准（C，缺乏时限约束，不符合法条精神）或使用“30 天”这一非\n法定单位表述（D，法条使用的是“一个月”而非固定 30 天，两者虽接近但并非完全等同的法律术语）。\n知识点：第 12(3)条数据主体访问请求响应期限的起算及计算方式。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 188,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nABC Hotel Chain and XYZ Travel Agency are U.S.-based multinational companies. They use an internet-\n\nbased common platform for collecting and sharing their customer data with each other, in order to\nintegrate their marketing efforts. Additionally, they agree on the data to be stored, how reservations will be\nbooked and confirmed, and who has access to the stored data.\n\nMike, an EU resident, has booked travel itineraries in the past through XYZ Travel Agency to stay at ABC\nHotel Chain’s locations. XYZ Travel Agency offers a rewards program that allows customers to sign up to\naccumulate points that can later be redeemed for free travel. Mike has signed the agreement to be a\nrewards program member.\n\nNow Mike wants to know what personal information the company holds about him. He sends an email\nrequesting access to his data, in order to exercise what he believes are his data subject rights.\n\nWhat are ABC Hotel Chain and XYZ Travel Agency’s roles in this relationship?",
    options: ["A. ABC Hotel Chain is the controller and XYZ Travel Agency is the processor.", "B. XYZ Travel Agency is the controller and ABC Hotel Chain is the processor.", "C. ABC Hotel Chain and XYZ Travel Agency are independent controllers.", "D. ABC Hotel Chain and XYZ Travel Agency are joint controllers."],
    correctAnswer: "D",
    explanation: "正确答案 D。ABC 酒店集团与 XYZ 旅行社共同决定通过共享平台收集、存储客户数据的方式、内容及访\n问权限，共同参与决定处理的目的和方式，符合第 26 条“共同控制者”（joint controllers）的认定标准，双\n方须通过协议明确各自的责任分工。A、B（将其中一方定性为处理者，忽略了双方共同决策处理方式和\n目的的事实）、C（独立控制者，忽略了双方在同一平台上协作决定处理目的和方式的共同性）均不准\n确。知识点：第 26 条共同控制者的认定标准——共同决定处理的目的和方式。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 189,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nABC Hotel Chain and XYZ Travel Agency are U.S.-based multinational companies. They use an internet-\n\nbased common platform for collecting and sharing their customer data with each other, in order to\n\nintegrate their marketing efforts. Additionally, they agree on the data to be stored, how reservations will be\n\nbooked and confirmed, and who has access to the stored data. 6\nMike, an EU resident, has booked travel itineraries in the past through XYZ Travel Agency to stay at ABC\nHotel Chain’s locations. XYZ Travel Agency offers a rewards program that allows customers to sign up to\naccumulate points that can later be redeemed for free travel. Mike has signed the agreement to be a\nrewards program member.\n\nNow Mike wants to know what personal information the company holds about him. He sends an email\nrequesting access to his data, in order to exercise what he believes are his data subject rights.\n\nIn which of the following situations would ABC Hotel Chain and XYZ Travel Agency NOT have to honor\nMike’s data access request?",
    options: ["A. The request is to obtain access and correct inaccurate personal data in his profile.", "B. The request is to obtain access and information about the purpose of processing his personal data.", "C. The request is to obtain access and erasure of his personal data while keeping his rewards membership.", "D. The request is to obtain access and the categories of recipients who have received his personal data to process his rewards membership."],
    correctAnswer: "C",
    explanation: "答案 C 是四项中最接近的选项，但题干把访问权与删除权混为一体。即使删除请求不能全部满足，控制者仍应回应\n并履行访问权部分。对维持奖励会员关系所必需的数据，删除权可能因第 17(1)(a) 条的“数据仍为原目的所必需”而不\n成立，或因其他适用的法定义务而受限；“履行合同所必需”并不是第 17(3)(b) 条列明的独立例外。",
    topic: "GDPR",
    verified: "qualified"
  },
  {
    id: 190,
    question: "Which of the following Convention 108+ principles, as amended in 2018, is NOT consistent with a principle\n\nfound in the GDPR?",
    options: ["A. The obligation of companies to declare data breaches.", "B. The requirement to demonstrate compliance to a supervisory authority.", "C. The lawfulness of the bulk collection of personal data by the government.", "D. The necessity of establishing a specific legal basis for processing personal data."],
    correctAnswer: "C",
    explanation: "正确答案 C。经 2018 年现代化修订的 108+号公约明确要求政府对个人数据的收集和监控须符合必要性和\n比例原则，并不认可无差别、无限制的政府大规模数据收集行为，这与 GDPR 及欧盟基本权利保护理念\n（如 Digital Rights Ireland 案所体现的比例原则）是一致的，而非“合法”，因此 C 的表述（认可政府大规\n模无差别收集数据的合法性）与 GDPR 原则不一致，是本题应选的“不一致项”。A（数据泄露申报义\n务）、B（问责制下的合规证明义务）、D（须有具体合法依据）均是 108+号公约与 GDPR 理念高度一致\n的原则。知识点：108+号公约（2018 现代化修订）与 GDPR 在政府大规模数据收集比例原则上的一致\n性。",
    topic: "Convention 108/108+",
    verified: "accurate"
  },
  {
    id: 191,
    question: "If a data subject puts a complaint before a DPA and receives no information about its progress or\noutcome, how long does the data subject have to wait before taking action in the courts?",
    options: ["A. 1 month.", "B. 3 months.", "C. 5 months.", "D. 12 months."],
    correctAnswer: "B",
    explanation: "正确答案 B。根据 GDPR 体系及相关实践（前言第 141 条、第 78 条司法救济权），若数据主体向监管机\n构投诉后三个月内未收到关于投诉处理进展或结果的告知，即可据此向法院提起诉讼寻求有效司法救\n济，无需无限期等待监管机构处理。知识点：第 78(2)条及前言第 141 条——监管机构三个月内未回应投\n诉时数据主体可诉诸法院的救济权。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 192,
    question: "For which of the following operations would an employer most likely be justified in requesting the data\nsubject’s consent?",
    options: ["A. Posting an employee’s bicycle race photo on the company’s social media. 6", "B. Processing an employee’s health certificate in order to provide sick leave.", "C. Operating a CCTV system on company premises.", "D. Assessing a potential employee’s job application."],
    correctAnswer: "A",
    explanation: "正确答案 A。在企业社交媒体上发布员工参加自行车比赛的照片，属于与雇佣关系履行、法定义务均无\n必然关联的“额外”用途（本质上更接近宣传/公关性质），员工在此类非雇佣必需事项上拥有真正的自由\n选择空间，因此同意可以成为恰当且有效的合法依据。B（处理健康证明以安排病假，属于履行雇佣合同\n/法定义务的必要处理，不适合、也无需以同意作为依据）、C（运营 CCTV 系统，通常基于合法利益/安\n全需要而非员工同意，且雇佣关系下同意的自愿性存疑）、D（评估求职申请，属于订立合同前的必要步\n骤，同样不适合以同意作为依据）均不如 A 适合使用同意机制。知识点：雇佣关系中同意作为合法依据\n的适用场景——仅限于真正非强制性、员工有实际自由选择权的处理活动。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 193,
    question: "An entity’s website stores text files on EU users’ computer and mobile device browsers. Prior to doing so,\nthe entity is required to provide users with notices containing information and consent under which of the\nfollowing frameworks?",
    options: ["A. General Data Protection Regulation 2016/679.", "B. E-Privacy Directive 2002/58/EC.", "C. E-Commerce Directive 2000/31/EC.", "D. Data Protection Directive 95/46/EC."],
    correctAnswer: "B",
    explanation: "正确答案 B。在用户设备终端存储或读取信息（如 cookie 等文本文件）的行为，专门由 ePrivacy 指令\n（第 5(3)条“cookie 规则”）规制，要求企业事先提供信息并取得用户同意，这是相较 GDPR、电子商务指\n令、原 95/46 指令更具体、更直接适用的专门规则。知识点：ePrivacy 指令第 5(3)条对终端设备存储/读取\n信息（cookie）的专门规制。",
    topic: "ePrivacy指令",
    verified: "accurate"
  },
  {
    id: 194,
    question: "All of the following are considered fair processing practices in relation to the transparency principle\nEXCEPT?",
    options: ["A. Providing a multi-layered privacy notice, in a website environment.", "B. Providing a QR code linking to more detailed privacy notice, in a CCTV sign.", "C. Providing a hyperlink to the organization’s home page, in a hard copy application form.", "D. Providing a “just-in-time” contextual pop-up privacy notice, in an online application form field."],
    correctAnswer: "C",
    explanation: "正确答案 C。在纸质申请表上仅提供指向机构主页（而非具体隐私政策页面）的超链接，既不符合纸质\n媒介本身无法直接点击访问的现实限制，也未能提供充分、具体、易于获取的隐私信息，不构成有效的\n公平透明处理实践。A（网站分层通知）、B（CCTV 告示配二维码链接详细政策）、D（在线表单即时\n情境弹窗提示）均是 ICO 透明度实践指南认可的有效透明度实现方式。知识点：ICO 透明度实践指南关\n于不同媒介（纸质、网站、CCTV 等）下有效告知方式的具体要求。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 195,
    question: "Which of the following was the first to implement national law for data protection in 1973?",
    options: ["A. France", "B. Sweden", "C. Germany", "D. United Kingdom"],
    correctAnswer: "B",
    explanation: "正确答案 B。瑞典于 1973 年颁布了《数据法》（Datalagen），是世界上第一部国家层面的综合性数据保\n护立法，早于德国黑森州 1970 年的地方性立法（黑森州立法虽更早但属于州/地方层面而非国家层面法\n律）及法国、英国后续的国家立法。知识点：瑞典 1973 年《数据法》作为全球首部国家层面数据保护立\n法的历史地位。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 196,
    question: "The GDPR forbids the practice of “forum shopping”, which occurs when companies do what?",
    options: ["A. Choose the data protection officer that is most sympathetic to their business concerns. 6", "B. Designate their main establishment in member state with the most flexible practices.", "C. File appeals of infringement judgments with more than one EU institution simultaneously.", "D. Select third-party processors on the basis of cost rather than quality of privacy protection."],
    correctAnswer: "B",
    explanation: "正确答案 B。（与前述 Q100 同一知识点）“监管机构选购”（forum shopping）是指企业刻意将“主要设立\n地”设在监管执法环境相对宽松的成员国，以规避严格监管，这被 GDPR 一站式机制的立法精神所禁止。\nA、C、D 均非 forum shopping 的准确定义。知识点：一站式机制下主要设立地认定标准与 forum shopping\n的禁止。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 197,
    question: "What is the most frequently used mechanism for legitimizing cross-border data transfer?",
    options: ["A. Standard Contractual Clauses.", "B. Approved Code of Conduct.", "C. Binding Corporate Rules.", "D. Derogations."],
    correctAnswer: "A",
    explanation: "正确答案 A。标准合同条款（SCCs）因其无需事先获得监管机构逐案批准、可直接采用欧盟委员会制定\n的标准文本、灵活适用于各类跨境传输场景，是目前实践中使用最广泛的跨境传输合法化机制，相较约\n束性企业规则（C，审批耗时较长，多用于大型跨国集团内部传输）、行为守则（B）、克减条款（D，\n仅作为最后手段的例外情形）使用频率更高。知识点：标准合同条款（SCCs）作为最常用的跨境传输合\n法化机制。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 198,
    question: "If a French controller has a car-sharing app available only in Morocco, Algeria and Tunisia, but the data\n\nprocessing activities are carried out by the appointed processor in Spain, the GDPR will apply to the\nprocessing of the personal data so long as?",
    options: ["A. The individuals are European citizens or residents.", "B. The data processing activities are in Spain.", "C. The data controller is in France.", "D. The EU individuals are targeted."],
    correctAnswer: "C",
    explanation: "正确答案 C。第 3(1)条设立地标准规定，只要处理活动是在欧盟设立机构“活动的背景下”进行的，无论该\n处理实际发生地点在何处（此处为西班牙处理者执行处理）、也无论数据主体是否为欧盟居民或位于欧\n盟境内（此处数据主体位于摩洛哥、阿尔及利亚、突尼斯等非欧盟国家），只要控制者本身在欧盟设立\n（此处为法国控制者），该处理即受 GDPR 约束——这体现了设立地标准相较目标指向标准（第 3(2)\n条，需数据主体位于欧盟境内）更宽泛的适用逻辑。知识点：第 3(1)条设立地标准的域内适用——不要\n求处理发生地或数据主体位于欧盟境内，只要求控制者在欧盟设立且处理在其活动背景下进行。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 199,
    question: "Select the answer below that accurately completes the following:\n\n“The right to compensation and liability under the GDPR…",
    options: ["A. …provides for an exemption from liability if the data controller (or data processor) proves that it is not in any way responsible for the event giving rise to the damage.”", "B. …precludes any subsequent recourse proceedings against other controllers or processors involved in the same processing.”", "C. ...can only be exercised against the data controller, even if a data processor was involved in the same processing.”", "D. …is limited to a maximum amount of EUR 20 million per event of damage or loss.”"],
    correctAnswer: "A",
    explanation: "正确答案 A。第 82(3)条规定，控制者或处理者若能证明其对造成损害的事件完全不承担责任（即在任何\n方面均无过错），可免除赔偿责任，这是唯一的法定免责事由。B（不排斥追偿权，控制者/处理者承担\n全部赔偿后仍可向其他责任方追偿，第 82(5)条）、C（数据主体不仅可向控制者主张，也可直接向处理\n者主张赔偿，视具体责任情形而定）、D（GDPR 并未设定统一的赔偿上限，与行政罚款上限是两套不同\n机制）均不准确。知识点：第 82 条数据主体获得赔偿权利的免责事由及连带责任下的追偿权。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 200,
    question: "Pursuant to Article 4(5) of the GDPR, data is considered “pseudonymized” if?",
    options: ["A. It cannot be attributed to a data subject without the use of additional information.", "B. It cannot be attributed to a person under any circumstances.", "C. It can only be attributed to a person by the controller.", "D. It can only be attributed to a person by a third party."],
    correctAnswer: "A",
    explanation: "正确答案 A。第 4(5)条对“假名化”的定义核心是：个人数据在不借助另外保存的补充信息的情况下不能再\n归属于特定数据主体。B（不可再识别，混淆了假名化与匿名化的概念，假名化理论上仍可通过补充信息\n重新识别）、C、D（仅限控制者或第三方才能重新识别，并非该定义的核心要件，定义关注的是“是否需\n要额外信息”而非“由谁掌握该信息”这一维度本身，尽管补充信息通常由控制者掌握并单独保存）均不如\nA 准确对应法条原文。知识点：第 4(5)条假名化定义的准确表述。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 201,
    question: "According to Article 84 of the GDPR, the rules on penalties applicable to infringements shall be laid down\nby?",
    options: ["A. The local Data Protection Supervisory Authorities.", "B. The European Data Protection Board.", "C. The EU Commission.", "D. The Member States."],
    correctAnswer: "D",
    explanation: "正确答案 D。第 84 条明确规定，成员国应自行制定适用于违反 GDPR 行为的处罚规则（尤其是不属于第\n83 条行政罚款范畴的其他违规情形，如未落实行政罚款条款的违规行为，成员国须规定“有效、相称且具\n有警示性”的处罚措施，含可能的刑事处罚），这属于成员国立法保留事项，而非欧盟层面统一规定。知\n识点：第 84 条成员国就 GDPR 之外违规行为处罚规则的立法保留。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 202,
    question: "A company plans to transfer employee health information between two of its entities in France. To maintain\nthe security of the processing, what would be the most important security measure to apply to the health\ndata transmission?",
    options: ["A. Inform the data subject of the security measures in place.", "B. Ensure that the receiving entity has signed a data processing agreement.", "C. Encrypt the transferred data in transit and at rest.", "D. Conduct a data protection impact assessment."],
    correctAnswer: "C",
    explanation: "正确答案 C。对健康数据这类特殊类别数据在传输过程中，加密是保护数据机密性、防止未经授权访问\n最直接、最核心的技术安全措施（第 32(1)(a)条明确列举加密为示例措施），尤其适用于传输中和静态存\n储双重场景。A（告知数据主体安全措施，属透明度义务而非安全措施本身）、B（签订处理协议，适用\n于控制者-处理者关系而非本案两个关联实体间传输的直接安全措施）、D（开展 DPIA，是风险评估的前\n置程序而非传输本身的直接安全保护措施）均不如 C 直接对应“安全措施”这一问题核心。知识点：第 32\n条安全处理措施——加密作为保护敏感数据传输的核心技术手段。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 203,
    question: "If a company chooses to ground an international data transfer on the contractual route, which of the\nfollowing is NOT a valid set of standard contractual clauses?",
    options: ["A. Decision 2001/497/EC (EU controller to non-EU or EEA controller).", "B. Decision 2004/915/EC (EU controller to non-EU or EEA controller).", "C. Decision 2007/72/EC (EU processor to non-EU or EEA controller).", "D. Decision 2010/87/EU (Non-EU or EEA processor from EU controller)."],
    correctAnswer: "无（现行法下四项均已过时；历史预期答案为 C）",
    explanation: "本题已过时。现行法下 A、B、C、D 均不能作为新安排使用的有效 SCC 集合。欧盟委员会实施决定 (EU) 2021/914\n自 2021 年起提供模块化跨境 SCC，并废止 2001/497/EC、2004/915/EC 和 2010/87/EU；旧合同过渡期已于 2022 年 12\n月 27 日结束。按旧题历史语境，C 曾是预期答案，因为不存在 2007/72/EC 这一 SCC 决定。",
    topic: "GDPR",
    verified: "corrected"
  },
  {
    id: 204,
    question: "Article 58 of the GDPR describes the power of supervisory authorities. Which of the following is NOT\namong those granted?",
    options: ["A. Legislative powers.", "B. Corrective powers.", "C. Investigatory powers.", "D. Authorization and advisory powers."],
    correctAnswer: "A",
    explanation: "正确答案 A。第 58 条列明监管机构享有调查权（第 1 款，C）、更正权/纠正权（第 2 款，B）、授权及\n咨询权（第 3 款，D），但监管机构本身并不享有制定新法律的“立法权”——立法权属于成员国议会及欧\n盟立法机构（欧洲议会、欧盟理事会），监管机构仅在授权/执法层面行使职权，无权自行创设具有普遍\n约束力的新法律规范。知识点：第 58 条监管机构三类职权（调查、纠正、授权咨询）与立法权的区分。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 205,
    question: "According to the European Data Protection Board, which of the following concepts or practices does NOT\nfollow from the principles relating to the processing of personal data under EU data protection law?",
    options: ["A. Data ownership allocation.", "B. Access control management.", "C. Frequent pseudonymization key rotation.", "D. Error propagation avoidance along the processing chain."],
    correctAnswer: "A",
    explanation: "正确答案 A。欧盟数据保护法律框架下的核心原则（如访问控制管理 B、避免处理链条中的错误传播 D、\n假名化密钥定期轮换 C 作为安全和数据最小化实践）均与数据保护基本原则（尤其是完整性保密性、准\n确性原则）密切相关；而“数据所有权分配”（data ownership）并非欧盟数据保护法的核心概念——GDPR\n框架下讨论的是控制者/处理者的角色与责任分配，而非“数据所有权”这一非法律术语（欧盟数据保护法\n并不采用“所有权”框架来描述个人数据上的权益）。知识点：欧盟数据保护法不采用“数据所有权”框架，\n而是以控制者/处理者角色及数据主体权利体系为核心。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 206,
    question: "Which statement provides an accurate description of a directive?",
    options: ["A. A directive specifies certain results that must be achieved, but each member state is free to decide how to turn it into a national law.", "B. A directive has binding legal force throughout every member state and enters into force on a set date in all the member states.", "C. A directive is a legal act relating to specific cases and directed towards member states, companies or private individuals.", "D. A directive is a legal act that applies automatically and uniformly to all EU countries as soon as it enters into force."],
    correctAnswer: "A",
    explanation: "正确答案 A。“指令”（Directive）是欧盟对成员国规定应实现的特定结果或目标，但赋予各成员国在多大\n程度上、以何种立法形式将其转化为本国法的自由裁量空间，与“条例”（Regulation，直接统一适用、无\n需转化，对应 B、D 的描述）及“决定”（Decision，针对特定对象的具体法律行为，对应 C 的描述）在法\n律 效 力 和 适 用 方 式 上 存 在 本 质 区 别 。 知 识 点 ： 欧 盟 法 律 渊 源 —— 指 令 （ Directive ） 与 条 例\n（Regulation）、决定（Decision）的效力区别。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 207,
    question: "Which aspect of processing does the GDPR allow processors to determine for themselves?",
    options: ["A. The question of whether the controller needs to be informed about the substitution of another processor carrying out specific processing activities on behalf of the controller.", "B. Their own purposes for the processing, if such purposes are compatible with those for which the personal data were initially collected.", "C. The parameters of their marketing campaigns using personal data relating to the controller's customers.", "D. Their own type of hardware or software and the specific security measures for the processing. 6"],
    correctAnswer: "D",
    explanation: "正确答案 D。处理者虽须按照控制者的指示行事，但在具体的技术实现层面，如选用何种硬件/软件、部\n署哪些具体安全措施细节，处理者通常拥有一定的自主决定空间（只要能达到第 32 条要求的适当安全水\n平并符合控制者的整体指示）。A（更换次级处理者须事先告知/取得控制者授权，非处理者可自行决定\n的事项）、B（处理者不得为自身兼容目的自行处理数据，否则将转变为控制者）、C（处理者不能自行\n决定营销活动参数，这属于目的和方式层面的决策，超出处理者权限）均不属于处理者可自主决定的范\n畴。知识点：处理者在遵从控制者指示前提下，对具体技术安全实现方式享有的有限自主空间（第 28、\n32 条）。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 208,
    question: "Two companies, Gellcoat and Freifish, make plans to launch a co-branded product, the prototype of which\nis called Gellifish 5337. The companies want to organize an event to introduce the new product, so they\ndecide to share data from their client databases and come up with a list of people to invite. They agree on\nthe content of the invitations and together build an app to gather feedback at the event.\n\nIn this scenario, Gellcoat and Freifish are considered to be?",
    options: ["A. Joint controllers with respect to the personal data related to the event and separate controllers for their other purposes.", "B. Joint controllers for all purposes because they have merged their databases and their data is now jointly owned.", "C. Separate controllers because joint controllership requires a written designation in a contract.", "D. Separate controllers and processors since they are each providing services to the other."],
    correctAnswer: "A",
    explanation: "正确答案 A。Gellcoat 与 Freifish 共同决定该联合营销活动的处理目的和方式（共享数据库邀请名单、共\n同设计邀请函内容、共建反馈 App），就该特定活动而言构成共同控制者；但对于各自其他业务范围内\n的处理活动（如各自其他产品线的客户数据处理），双方仍各自独立作为单独控制者，共同控制者身份\n并不自动延伸至合作范围之外的所有处理活动。B（笼统认定“数据库合并即所有目的下均为共同控制\n者”，扩大了共同控制者认定的范围）、C（共同控制者身份并非必须以书面合同形式“指定”才能成立，\n实质性共同决策的事实本身即可认定，尽管第 26 条确实要求以协议明确责任分工）、D（将双方定性为\n互为处理者，忽略了双方实际共同决策处理目的和方式的事实）均不准确。知识点：共同控制者身份的\n认定应限于共同决策的具体处理活动范围内，而非自动扩展至合作双方的全部业务。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 209,
    question: "According to guidance from the European Data Protection Board, in which of the following cases would a\ncontroller established outside of the EU not be subject to the GDPR?",
    options: ["A. If the controller monitors the behavior of persons on the territory of the Republic of Switzerland.", "B. If the controller has a fully-owned branch office in the EU overseeing all its European operations, including marketing and advertising.", "C. If the controller has its some of its offices and servers based in the EU without having a legal branch or subsidiary in any EU Member State.", "D. If the controller uses the services of an EU-based processor without offering goods or services to persons on EU territory or monitoring their behavior."],
    correctAnswer: "D",
    explanation: "【经复核，本题参考答案有误，正确答案应为 D，理由见文末【答案修正】说明】原解析（针对原答案\nA）：正确答案 A。第 3(2)(b)条“监测行为”标准仅适用于监测“欧盟境内”数据主体的行为，瑞士并非欧盟\n成员国，若控制者仅监测瑞士境内人员行为而不涉及欧盟境内数据主体，则不落入 GDPR 第 3(2)(b)条域\n外适用范围（除非瑞士个人当时身处欧盟境内被监测，情况另当别论，但题目情形为监测瑞士境内人\n员）。B（在欧盟设有全资分支机构负责营销广告等业务，构成第 3(1)条设立地关联标准，触发 GDPR 适\n用）、C（在欧盟设有办公室和服务器，即便无正式法律分支机构，仍可能构成“稳定安排”的设立，触发\n适用）、D（使用欧盟处理者的服务，若控制者本身既不提供商品服务也不监测欧盟个人行为，则不适用\nGDPR，这与 D 选项描述一致，因此 D 不是本题应选的“不适用”反例——需重新审视，实际上 D 描述的\n正是“不适用”的情形，但题目问的是“不受 GDPR 约束”的情形，A、D 都可能符合，但根据 EDPB 相关指\n南，A 更精确地对应“监测非欧盟地域”这一明确排除因素，是标准答案）。知识点：第 3(2)(b)条监测行为\n标准仅限于监测欧盟境内数据主体，监测欧盟境外人员（即便地理相邻如瑞士）不触发该项域外适用。\n 【答案修正】原答案标注为 A，经核查 EDPB《3/2018 号关于 GDPR 域外适用范围指南》原文，正确答\n案应为 D。该指南明确指出：“a 'non-EU' controller will not become subject to the GDPR simply because it\nchooses to use a processor in the Union”（非欧盟控制者不会仅因使用了欧盟境内的处理者而当然受 GDPR\n约束），这正是选项 D 所描述的情形（使用欧盟处理者、且未向欧盟提供商品服务或监测欧盟个人行\n为），也是该指南中被反复引用的经典示例。而选项 A（监测瑞士境内人员）虽然结论上也不触发第\n3(2)(b)条，但并非该指南原文引用的具体示例，题干“According to guidance from the EDPB”明确指向指南\n原文内容，因此 D 比 A 更准确、更贴合题意。",
    topic: "监管机构",
    verified: "accurate"
  },
  {
    id: 210,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nCreditPlaya, SA is an established Spanish online insurance company whose exclusive activity is providing\nhealth insurance for legal residents of Spain, regardless of their nationality.\n\nCreditPlaya autonomously manages its own website, through which a potential customer, engaging in a\n\nfree pre-contractual activity, enters his or her full name, e-mail address, tax identification number (to verify\nresidence in Spain), age, profession, and the full names of any other adult members of his or her family.\n\nWith this data, CreditPlaya immediately sends an email granting or denying eligibility for a health insurance\n\npolicy. In the case of eligibility, the email also contains the eventual cost of the policy and two PDF\ndocuments – one with the contractual Terms and Conditions, and the other with the privacy notice as\n\nrequired by Article 13 of the GDPR.\n\nThe CreditPlaya Information Tracking System (ITS) is very efficient, with a low rate of unpaid insurance\npolicies. The ITS is automatically fed by the information provided by every applicant, whose data is then\nused to refine insurance policy rates.\n\nTo ensure their back-up procedures, in January 2021 CreditPlaya started sending weekly copies of the\nwhole database with all the applicants' personal data to an independent company in Uruguay. The\n\ninformation was sent through state-of-the-art encrypting tools, but once in Uruguay was stored without any\nencryption method.\n\nIn March 2022, the entire data base stored on the Uruguay's company servers was encrypted by malicious\nransomware. There was no evidence that the data was accessed by unauthorized persons, much less\naltered or exfiltrated. Despite the incident, CreditPlaya found that they could rely on the locally based\nSpanish back-up information and carry on its activity without interrupting its operations. The incident\ncaused the termination of the professional relationship between the two companies.\n\nAccording to the GDPR, current CreditPlaya customers who have expressly accepted the policy Terms\nand Conditions would NOT be granted which of the following rights?",
    options: ["A. The Right To Object.", "B. The Right to Erasure.", "C. The Right to Data Portability.", "D. The Right Not to be Subject to Profiling."],
    correctAnswer: "D",
    explanation: "正确答案 D。“不受制于纯自动化决策（含画像）的权利”（第 22 条）仅适用于对个人产生法律效力或类\n似重大影响的“完全自动化决策”，而 CreditPlaya 的核保决策虽然自动生成，但题目未表明该决策会对客\n户产生此类重大自动化决策效果达到触发第 22 条特别保护门槛的程度（且该处理是订立/履行保险合同所\n必需，属于第 22(2)(a)条允许自动化决策的例外情形），因此客户在此类基于合同必需的自动化承保场景\n下，其“不受纯自动化决策约束”的绝对权利受到限制。反对权（A）、删除权（B，除非有例外理由）、\n可携权（C，基于合同的自动化处理数据可携权通常适用）在一般情况下仍可正常行使。知识点：第 22\n条免受自动化决策约束权利的例外——订立/履行合同所必需的自动化决策。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 211,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nCreditPlaya, SA is an established Spanish online insurance company whose exclusive activity is providing\nhealth insurance for legal residents of Spain, regardless of their nationality.\n\nCreditPlaya autonomously manages its own website, through which a potential customer, engaging in a\nfree pre-contractual activity, enters his or her full name, e-mail address, tax identification number (to verify\nresidence in Spain), age, profession, and the full names of any other adult members of his or her family.\n\nWith this data, CreditPlaya immediately sends an email granting or denying eligibility for a health insurance\npolicy. In the case of eligibility, the email also contains the eventual cost of the policy and two PDF\ndocuments – one with the contractual Terms and Conditions, and the other with the privacy notice as\nrequired by Article 13 of the GDPR.\n\nThe CreditPlaya Information Tracking System (ITS) is very efficient, with a low rate of unpaid insurance\npolicies. The ITS is automatically fed by the information provided by every applicant, whose data is then\n\nused to refine insurance policy rates.\n\nTo ensure their back-up procedures, in January 2021 CreditPlaya started sending weekly copies of the\nwhole database with all the applicants' personal data to an independent company in Uruguay. The\n\ninformation was sent through state-of-the-art encrypting tools, but once in Uruguay was stored without any\n\nencryption method.\n\nIn March 2022, the entire data base stored on the Uruguay's company servers was encrypted by malicious\n\nransomware. There was no evidence that the data was accessed by unauthorized persons, much less\naltered or exfiltrated. Despite the incident, CreditPlaya found that they could rely on the locally based\n\nSpanish back-up information and carry on its activity without interrupting its operations. The incident\n\ncaused the termination of the professional relationship between the two companies.\n\nThe disclosure of personal data to the independent company in Uruguay should be regulated by which of\nthe following?",
    options: ["A. Binding Corporate Rules.", "B. A controller/processor agreement.", "C. An ad hoc authorization from the EU Commission.", "D. An ad hoc authorization from the Spanish Data Protection Authority."],
    correctAnswer: "B",
    explanation: "答案 B 正确：独立乌拉圭公司若代表 CreditPlaya 处理数据，双方须签订第 28 条控制者—处理者协议。乌拉圭已获\n欧盟充分性认定，因此通常无需另行使用 SCC；但仍须满足安全、指示处理、分包等第 28 条要求。",
    topic: "GDPR",
    verified: "qualified"
  },
  {
    id: 212,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nCreditPlaya, SA is an established Spanish online insurance company whose exclusive activity is providing\nhealth insurance for legal residents of Spain, regardless of their nationality.\n\nCreditPlaya autonomously manages its own website, through which a potential customer, engaging in a\n\nfree pre-contractual activity, enters his or her full name, e-mail address, tax identification number (to verify\nresidence in Spain), age, profession, and the full names of any other adult members of his or her family.\n\nWith this data, CreditPlaya immediately sends an email granting or denying eligibility for a health insurance\npolicy. In the case of eligibility, the email also contains the eventual cost of the policy and two PDF\ndocuments – one with the contractual Terms and Conditions, and the other with the privacy notice as\nrequired by Article 13 of the GDPR.\n\nThe CreditPlaya Information Tracking System (ITS) is very efficient, with a low rate of unpaid insurance\npolicies. The ITS is automatically fed by the information provided by every applicant, whose data is then\nused to refine insurance policy rates.\n\nTo ensure their back-up procedures, in January 2021 CreditPlaya started sending weekly copies of the\nwhole database with all the applicants' personal data to an independent company in Uruguay. The\ninformation was sent through state-of-the-art encrypting tools, but once in Uruguay was stored without any\nencryption method.\n\nIn March 2022, the entire data base stored on the Uruguay's company servers was encrypted by malicious\nransomware. There was no evidence that the data was accessed by unauthorized persons, much less\naltered or exfiltrated. Despite the incident, CreditPlaya found that they could rely on the locally based\nSpanish back-up information and carry on its activity without interrupting its operations. The incident\ncaused the termination of the professional relationship between the two companies.\n\nThe privacy notice provided by CreditPlaya contravenes Article 13 of the GDPR because?",
    options: ["A. The document is delivered after the personal data has been obtained.", "B. The document is separated from the document listing Terms and Conditions.", "C. The document is not written in the language of the average prospective customer.", "D. The document fails to mention the applicable security measures for the processing."],
    correctAnswer: "A",
    explanation: "正确答案 A。第 13 条要求控制者应在“收集个人数据时”（at the time when personal data are obtained）即向\n数据主体提供隐私声明，而 CreditPlaya 是在收集数据、作出核保决定后才随邮件一并发送隐私声明，属\n于事后告知，违反了第 13 条关于告知时点的强制性要求。B（与条款文件分开提供，本身并不违反\nGDPR，甚至是良好实践）、C（语言问题，题目未提及存在语言障碍）、D（未提及安全措施，非第 13\n条强制要求告知的核心内容）均不构成本案违规的准确原因。知识点：第 13 条告知义务的时点要求——\n须在收集数据时提供，而非事后随附。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 213,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nCreditPlaya, SA is an established Spanish online insurance company whose exclusive activity is providing\nhealth insurance for legal residents of Spain, regardless of their nationality.\n\nCreditPlaya autonomously manages its own website, through which a potential customer, engaging in a\nfree pre-contractual activity, enters his or her full name, e-mail address, tax identification number (to verify\nresidence in Spain), age, profession, and the full names of any other adult members of his or her family.\n\nWith this data, CreditPlaya immediately sends an email granting or denying eligibility for a health insurance\npolicy. In the case of eligibility, the email also contains the eventual cost of the policy and two PDF\n\ndocuments – one with the contractual Terms and Conditions, and the other with the privacy notice as\nrequired by Article 13 of the GDPR.\n\nThe CreditPlaya Information Tracking System (ITS) is very efficient, with a low rate of unpaid insurance\npolicies. The ITS is automatically fed by the information provided by every applicant, whose data is then\nused to refine insurance policy rates.\n\nTo ensure their back-up procedures, in January 2021 CreditPlaya started sending weekly copies of the\nwhole database with all the applicants' personal data to an independent company in Uruguay. The\ninformation was sent through state-of-the-art encrypting tools, but once in Uruguay was stored without any\nencryption method.\n\nIn March 2022, the entire data base stored on the Uruguay's company servers was encrypted by malicious\nransomware. There was no evidence that the data was accessed by unauthorized persons, much less\naltered or exfiltrated. Despite the incident, CreditPlaya found that they could rely on the locally based\nSpanish back-up information and carry on its activity without interrupting its operations. The incident\ncaused the termination of the professional relationship between the two companies.\n\nIf the data on the Uruguay company's servers had been encrypted, what kind of security measure would\nthis be considered?",
    options: ["A. A remediation security measure.", "B. A prevention security measure.", "C. A corrective security measure.", "D. A detection security measure."],
    correctAnswer: "B",
    explanation: "正确答案 B。对静态存储数据进行加密属于预防性安全措施（preventative security），旨在事先降低数据\n被未经授权访问或泄露的风险，而非在事件发生后采取的补救性（remedial/corrective，A、C）或检测性\n（detection，D）措施。知识点：第 32 条安全措施的分类——预防性、检测性、补救性措施及加密的预防\n性质。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 214,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nCreditPlaya, SA is an established Spanish online insurance company whose exclusive activity is providing\nhealth insurance for legal residents of Spain, regardless of their nationality.\n\nCreditPlaya autonomously manages its own website, through which a potential customer, engaging in a\nfree pre-contractual activity, enters his or her full name, e-mail address, tax identification number (to verify\n\nresidence in Spain), age, profession, and the full names of any other adult members of his or her family.\n\nWith this data, CreditPlaya immediately sends an email granting or denying eligibility for a health insurance\n\npolicy. In the case of eligibility, the email also contains the eventual cost of the policy and two PDF\ndocuments – one with the contractual Terms and Conditions, and the other with the privacy notice as\nrequired by Article 13 of the GDPR.\n\nThe CreditPlaya Information Tracking System (ITS) is very efficient, with a low rate of unpaid insurance\npolicies. The ITS is automatically fed by the information provided by every applicant, whose data is then\nused to refine insurance policy rates.\n\nTo ensure their back-up procedures, in January 2021 CreditPlaya started sending weekly copies of the\nwhole database with all the applicants' personal data to an independent company in Uruguay. The\ninformation was sent through state-of-the-art encrypting tools, but once in Uruguay was stored without any\nencryption method.\n\nIn March 2022, the entire data base stored on the Uruguay's company servers was encrypted by malicious\nransomware. There was no evidence that the data was accessed by unauthorized persons, much less\naltered or exfiltrated. Despite the incident, CreditPlaya found that they could rely on the locally based\nSpanish back-up information and carry on its activity without interrupting its operations. The incident\ncaused the termination of the professional relationship between the two companies.\n\nThe content of the email that CreditPlaya sends does not comply with GDPR requirements because it\nlacks what?",
    options: ["A. The list of information with regard to personal data that were not obtained from the data subject, according to Article 14.", "B. The list of the processors and subprocessors involved in the processing, as required by Article 28.", "C. The list of processing activities as set out in the records of processing activities, according to Article 30.", "D. The list of technical and organizational measures that will be implemented, according to Article 32."],
    correctAnswer: "A",
    explanation: "正确答案 A。由于部分申请人数据可能并非直接从数据主体本人处获得（如“家庭其他成年成员的姓名”是\n由申请人代为提供，而非该家庭成员本人直接提供），依据第 14 条，控制者对此类非直接获取的数据负\n有特定的告知义务（如告知数据来源），而 CreditPlaya 发送的隐私声明未能针对这部分数据履行第 14 条\n特有的告知要求。B、C、D 均非本案隐私声明内容缺失的准确指向。知识点：第 14 条间接获取个人数据\n（如通过申请人代填家庭成员信息）时控制者的特定告知义务。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 215,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nCreditPlaya, SA is an established Spanish online insurance company whose exclusive activity is providing\nhealth insurance for legal residents of Spain, regardless of their nationality.\n\nCreditPlaya autonomously manages its own website, through which a potential customer, engaging in a\nfree pre-contractual activity, enters his or her full name, e-mail address, tax identification number (to verify\n\nresidence in Spain), age, profession, and the full names of any other adult members of his or her family.\n\nWith this data, CreditPlaya immediately sends an email granting or denying eligibility for a health insurance\npolicy. In the case of eligibility, the email also contains the eventual cost of the policy and two PDF\ndocuments – one with the contractual Terms and Conditions, and the other with the privacy notice as\nrequired by Article 13 of the GDPR.\n\nThe CreditPlaya Information Tracking System (ITS) is very efficient, with a low rate of unpaid insurance\npolicies. The ITS is automatically fed by the information provided by every applicant, whose data is then\nused to refine insurance policy rates.\n\nTo ensure their back-up procedures, in January 2021 CreditPlaya started sending weekly copies of the\n\nwhole database with all the applicants' personal data to an independent company in Uruguay. The\ninformation was sent through state-of-the-art encrypting tools, but once in Uruguay was stored without any\nencryption method.\n\nIn March 2022, the entire data base stored on the Uruguay's company servers was encrypted by malicious\nransomware. There was no evidence that the data was accessed by unauthorized persons, much less\n\naltered or exfiltrated. Despite the incident, CreditPlaya found that they could rely on the locally based\nSpanish back-up information and carry on its activity without interrupting its operations. The incident\ncaused the termination of the professional relationship between the two companies.\n\nThe refinement of the CreditPlaya Information Tracking System (ITS) is a processing activity that should\nbe?",
    options: ["A. Explained in the privacy notice, with a list of the special categories of applicants' data.", "B. Specified in the Terms and Conditions document sent to applicants.", "C. Capable of allowing applicants to exercise their Right to Object.", "D. Subject to the explicit consent of the applicants."],
    correctAnswer: "C",
    explanation: "正确答案 C。CreditPlaya 利用申请人数据持续优化其信息追踪系统（ITS）以完善保费定价，这属于对个\n人数据的画像/评估类处理，即便基于合法利益，数据主体依第 21(1)条仍应享有反对此类处理的权利（除\n非控制者能证明存在令人信服的合法理由）；处理设计上应确保申请人能够便捷行使该反对权，而非仅\n限于书面条款说明（B）、笼统纳入隐私声明特殊类别数据说明（A，该处理未必涉及特殊类别数据）或\n一律要求明确同意（D，若合法依据是合法利益而非同意，则无需以同意作为该项处理的依据，但仍须保\n留反对权入口）。知识点：第 21 条反对权在基于合法利益的画像/评估处理中的落实要求。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 216,
    question: "The Planet 49 decision clarified all of the following issues regarding cookies EXCEPT?",
    options: ["A. Whether a pre-ticked box constitutes valid consent under the ePrivacy Directive and the GDPR.", "B. Whether consent may be bundled to cover a number of activities or purposes at the same time.", "C. Whether is it necessary to provide information about the duration of cookies and any third-party cookies.", "D. Whether users may be forced to provide their consent as a condition for benefiting from goods or services being offered."],
    correctAnswer: "D",
    explanation: "正确答案 D。Planet49 案主要澄清的问题包括：预勾选同意框不构成有效同意（A）、同意不得笼统打包\n覆盖多个不同处理目的（B，须具体明确）、须告知 cookie 存续时间及第三方 cookie 相关信息（C，属透\n明度告知内容）；但该案并未就“是否可以将同意作为获得商品/服务的强制条件”（即同意与服务提供“捆\n绑”问题，通常涉及第 7(4)条同意自由性判断）作出裁决，该问题并非 Planet49 案的争议焦点。知识点：\nPlanet49 案的具体裁决范围——不涉及“同意作为获取服务前提条件”这一问题（该问题主要由第 7(4)条及\n其他案例/指南规制）。",
    topic: "ePrivacy指令",
    verified: "accurate"
  },
  {
    id: 217,
    question: "Pursuant to Article 17 and EDPB Guidelines 5/2019 on RTBF criteria in search engines cases, all of the\nfollowing would be valid grounds for data subject delisting requests EXCEPT?",
    options: ["A. The personal data has been collected in relation to the offer of information society services (ISS) to a child.", "B. The data subject withdraws consent and there is no other legal basis for the processing.", "C. The personal data is no longer necessary in relation to the search engine provider's processing.", "D. The processing is necessary for exercising the right of freedom of expression and information."],
    correctAnswer: "D",
    explanation: "正确答案 D。EDPB《5/2019 号指南》关于搜索引擎场景下被遗忇权（去索引）标准列举的有效去索引理\n由包括：数据涉及向儿童提供信息社会服务时收集（A）、同意被撤回且无其他合法依据（B）、数据不\n再为处理目的所必需（C）等；但若处理（即搜索结果的呈现）本身是为行使表达自由和信息获取权所必\n需（言论自由与信息公众利益的平衡），则这恰恰构成拒绝去索引请求的正当理由，而非支持去索引的\n依据，因此 D 不属于有效的去索引申请理由，反而是反对去索引的抗辩事由。知识点：EDPB 指南\n5/2019 下搜索引擎去索引的有效理由及言论自由抗辩的区分。",
    topic: "监管机构",
    verified: "accurate"
  },
  {
    id: 218,
    question: "Article 58 of the GDPR describes the powers of supervisory authorities. Which of the following is NOT\namong those granted?",
    options: ["A. Legislative powers.", "B. Corrective powers.", "C. Investigatory powers.", "D. Authorization and advisory powers."],
    correctAnswer: "A",
    explanation: "正确答案 A。（与 Q204 同一知识点重复出现）第 58 条监管机构职权分为调查权（C）、纠正权（B）、\n授权咨询权（D）三大类，不包含立法权（A）。知识点：第 58 条监管机构三类职权不含立法权。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 219,
    question: "Which of the following statements is inconsistent with the EDPB's position on qualifying a given\nprocessing as a “transfer” under Chapter V of the GDPR?",
    options: ["A. Transfers subject to the GDPR can only occur when two separate parties – each of them a controller, joint controller or processor – are involved.", "B. Transfers subject to the GDPR may involve data disclosures between entities belonging to the same corporate group (intra-group data disclosures).", "C. Transfers subject to the GDPR may involve remote access of personal data from a third country during a business trip of an employee of the controller for the given processing.", "D. Transfers in which a controller or processor makes personal data available to another controller, joint controller, or processor needs to be subject to the GDPR for the given processing."],
    correctAnswer: "C",
    explanation: "正确答案 C。EDPB《跨境传输认定指南》明确“传输”须满足三要件：涉及控制者/处理者向另一（独立\n的）控制者、共同控制者或处理者披露/提供个人数据（A、D）、可涵盖集团内部披露（B，同一企业集\n团内不同法律实体之间的数据流动同样可构成“传输”）；但员工本人在出差至第三国期间，以受雇于该控\n制者的身份、代表该控制者远程访问位于欧盟的个人数据数据库，并不构成两个独立主体之间的数据“传\n输”（因为访问者仍是同一控制者的员工，并非独立的另一方接收数据），EDPB 明确将此类情形排除在\n“传输”认定之外。知识点：EDPB 跨境传输认定指南——员工出差远程访问不构成第五章意义上的“传\n输”。",
    topic: "监管机构",
    verified: "accurate"
  },
  {
    id: 220,
    question: "To comply with the GDPR and the EU Court of Justice's decision in Schrems II, the European Commission\nissued what are commonly referred to as the new standard contractual clauses (SCCs). As a result,\nbusinesses must do all of the following EXCEPT?",
    options: ["A. Consider the new optional docking clause, which expressly permits adding new parties to the SCCs.", "B. Migrate all contracts entered into before September 27, 2021, that use the old SCCs to the new SCCs by December 27, 2022.", "C. Take steps to flow down the new SCCs to relevant parts of their supply chain using the new SCCs as of September 27, 2021, if the business is a data importer.", "D. Implement the new SCCs in the U.K. following Brexit, as the U.K. Information Commissioner's Office does not have the authority to publish its own set of SCCs."],
    correctAnswer: "D",
    explanation: "答案 D 正确。英国脱欧后建立了自己的国际数据传输协议（IDTA）及英国附加条款，并非无权制定。B 所述迁移期\n限属于历史性要求，已于 2022 年 12 月 27 日届满；新安排应使用现行欧盟 SCC。",
    topic: "判例法",
    verified: "qualified"
  },
  {
    id: 221,
    question: "A company would like to implement CCTV monitoring in its offices for safety and security purposes. Which\nof the following would be the best legal basis for the company to rely upon?",
    options: ["A. Public interest.", "B. Individual consent.", "C. Legitimate interest.", "D. Exercise of public authority."],
    correctAnswer: "C",
    explanation: "正确答案 C。企业为办公场所安全目的部署 CCTV 监控，通常被认为是保护企业财产及人员安全的合法\n利益，属于第 6(1)(f)条“合法利益”的典型应用场景（须经必要性与比例性平衡测试）。A（公共利益，通\n常适用于公权力机构而非普通企业）、B（个人同意，在雇佣关系权力不对等下并非合适或稳健的依\n据）、D（行使公权力，同样不适用于私营企业）均不如合法利益贴切。知识点：第 6(1)(f)条合法利益作\n为企业安防监控（CCTV）的典型合法依据。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 222,
    question: "The EDPB's Guidelines 8/2020 on the Targeting of Social Media Users stipulates that in order to rely on\nlegitimate interest as a legal basis to process personal data, three tests must be passed. Which of the\nfollowing is NOT one of the three tests?",
    options: ["A. Purpose test.", "B. Necessity test.", "C. Balancing test.", "D. Adequacy test."],
    correctAnswer: "D",
    explanation: "正确答案 D。EDPB《8/2020 号指南》关于合法利益作为社交媒体用户定向投放合法依据的三重测试为：\n目的测试（确认存在合法利益，A）、必要性测试（处理是否为实现该利益所必需，B）、平衡测试（该\n利益是否超越数据主体的权利自由，C），并不包含所谓的“适当性测试”（adequacy test，该术语更多用\n于跨境传输的“充分性认定”概念，与合法利益三重测试无关，属于混淆概念的干扰项）。知识点：EDPB\n指南 8/2020 关于合法利益的三重测试（目的、必要性、平衡）。",
    topic: "监管机构",
    verified: "accurate"
  },
  {
    id: 223,
    question: "The GDPR's list of processor obligations regarding cloud computing includes all of the following EXCEPT?",
    options: ["A. Controllers must be given notice of any subprocessors and have a right of objection.", "B. Individuals authorized to process the personal data are subject to an obligation of confidentiality.", "C. Any personal data related to data subjects must be securely maintained for a maximum of ten years.", "D. Processors must implement technical and organizational measures to ensure a level of security appropriate to the risk."],
    correctAnswer: "C",
    explanation: "正确答案 C。第 28 条关于云计算处理者义务的清单包括：次级处理者的告知与异议权（A）、处理人员\n保密义务（B）、适当技术组织安全措施（D）等，但 GDPR 并未设定统一的“最长十年”数据留存期限—\n—留存期限应依据具体处理目的、适用法律及存储限制原则个案确定，而非法律统一规定的固定期限。\n知识点：第 28 条云处理者义务清单，及 GDPR 并不设定统一法定留存期限（留存期限须依处理目的个案\n判断）。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 224,
    question: "The origin of privacy as a fundamental human right can be found in which document?",
    options: ["A. Universal Declaration of Human Rights 1948.", "B. European Convention of Human Rights 1953.", "C. OECD Guidelines on the Protection of Privacy 1980.", "D. Charter of Fundamental Rights of the European Union 2000."],
    correctAnswer: "A",
    explanation: "正确答案 A。1948 年《世界人权宣言》第 12 条首次在国际人权文件中明确将“隐私”确立为一项基本人权\n（任何人的私生活、家庭、住宅或通信不得任意干涉），早于欧洲人权公约（B，1953 年生效）、OECD\n隐私准则（C，1980 年）及欧盟基本权利宪章（D，2000 年）。知识点：世界人权宣言第 12 条作为隐私\n权确立为基本人权的国际法源头。",
    topic: "Convention 108/108+",
    verified: "accurate"
  },
  {
    id: 225,
    question: "What is the primary purpose of Convention 108+, which amends the Convention for the Protection of\nIndividuals with regard to Automatic Processing of Personal Data?",
    options: ["A. To issue updated guidelines for data transfers from the EU to third-country signatories to the Convention.", "B. To modify the process for third countries to obtain an adequacy decision from the European Commission.", "C. To strengthen data protection in line with the European and international regulatory framework.", "D. To establish new data subject rights and safeguards for consumers in the EU member states."],
    correctAnswer: "C",
    explanation: "正确答案 C。经 2018 年现代化修订的 108+号公约的主要目的是使该公约与包括 GDPR 在内的欧洲及国际\n最新数据保护监管框架保持同步，强化和更新其保护标准（如新增问责制、假名化、数据泄露通知等概\n念），而非专门针对跨境传输指引修订（A）、修改充分性认定获取流程（B，充分性认定属欧盟法律框\n架下的概念，非 108 公约本身的直接内容）或专门为欧盟消费者创设新权利（D，108 公约面向所有缔约\n国而非仅欧盟消费者）。知识点：108+号公约现代化修订的主要目的——与欧洲/国际数据保护监管框架\n保持一致并强化保护水平。",
    topic: "Convention 108/108+",
    verified: "accurate"
  },
  {
    id: 226,
    question: "Which of the following regulates the use of electronic communications services within the European\nUnion?",
    options: ["A. Regulation (EU) 2015/2120 of the European Parliament and of the Council of 25 November 2015.", "B. Regulation (EU) 2017/1953 of the European Parliament and of the Council of 25 October 2017.", "C. Directive 2002/58/EC of the European Parliament and of the Council of 12 July 2002.", "D. Directive (EU) 2019/789 of the European Parliament and of the Council of 17 April 2019."],
    correctAnswer: "C",
    explanation: "正 确 答 案 C 。 规 范 欧 盟 电 子 通 信 服 务 隐 私 事 项 （ 如 cookie 、 直 接 营 销 、 通 信 保 密 ） 的 核 心 法 律 是\n2002/58/EC 号指令（即 ePrivacy 指令），A（2015/2120 号条例涉及网络中立及漫游费用规则）、B（虚构\n或与本主题无关的条例编号）、D（2019/789 号指令涉及广播节目跨境传输规则）均与电子通信隐私规制\n无直接关联。知识点：2002/58/EC 号 ePrivacy 指令作为欧盟电子通信隐私规制的核心法律依据。",
    topic: "ePrivacy指令",
    verified: "accurate"
  },
  {
    id: 227,
    question: "What was the main failing of Convention 108 that led to the creation of the Data Protection Directive\n(Directive 95/46/EC)?",
    options: ["A. It did not account for the rapid growth of the Internet.", "B. It did not include protections for sensitive personal data.", "C. It was implemented in a fragmented manner by a small number of states.", "D. Its penalties for violations of data protection rights were widely viewed as insufficient."],
    correctAnswer: "C",
    explanation: "正确答案 C。108 号公约作为一项国际条约，其效力和保护水平的落地依赖各缔约国自行批准和转化为国\n内法，但历史上仅有少数国家真正批准并有效实施，导致欧盟内部数据保护水平参差不齐、难以形成统\n一市场，这正是促使欧盟以更具强制约束力的 95/46/EC 指令取而代之的主要原因。A（未预见互联网发\n展，非主要历史原因，指令出台时互联网尚处早期）、B（未涵盖敏感数据保护，108 号公约实际上已包\n含特殊类别数据的相关条款）、D（处罚力度不足，并非公认的核心历史原因）均不如 C 准确。知识点：\n108 号公约因缔约国实施不均衡而催生 95/46/EC 指令的历史背景。",
    topic: "历史沿革/95-46-EC",
    verified: "accurate"
  },
  {
    id: 228,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nJane starts her new role as a Data Protection Officer (DPO) at a Malta-based company that allows anyone\nto buy and sell cryptocurrencies via its online platform. The company stores and processes the personal\ndata of its customers in a dedicated data center located in Malta (EU).\n\nPeople wishing to trade cryptocurrencies are required to open an online account on the platform. They\nthen must successfully pass a Know Your Customer (KYC) due diligence procedure aimed at preventing\nmoney laundering and ensuring compliance with applicable financial regulations.\n\nThe non-European customers are also required to waive all their GDPR rights by reading a disclaimer\nwritten in bold and ticking a checkbox on a separate page in order to get their account approved on the\nplatform.\n\nAll customers must likewise accept the terms of service of the platform. The terms of service also include a\nprivacy policy section, saying, among other things, that if a customer fails the KYC process, its KYC data\n\nwill be automatically shared with the national anti-money laundering agency.\n\nThe KYC procedure requires customers to answer many questions, including whether they have any\n\ncriminal convictions, whether they use recreational drugs or have problems with alcohol, and whether they\n\nhave a terminal illness. While providing this data, customers see a conspicuous message saying that this\n\ndata is meant only to prevent fraud and account takeover, and will be never shared with private third\nparties.\nThe company regularly conducts external security testing of its online systems by independent\ncybersecurity companies from the EU. At the final stage of testing, the company provides cybersecurity\nassessors with access to its central database to review security permissions, roles and policies. Personal\ndata in the database is encrypted; however, cybersecurity assessors usually have access to the decryption\nkeys obtained while running initial security testing. The assessors must strictly follow the guidelines\nimposed by the company during the entire testing and auditing process.\n\nAll customer data, including trading activities and all internal communications with technical support, are\npermanently stored in a secured AWS S3 Glacier cloud data storage, located in Ireland, for backup and\ncompliance purposes. The data is securely transferred to the cloud and then is properly encrypted while at\nrest by using AWS-native encryption mechanisms. These mechanisms give AWS the necessary technical\nmeans to encrypt and decrypt the data when such is required by the company. There is no data\nprocessing agreement between AWS and the company.\n\nAre the cybersecurity assessors required to sign a data processing agreement with the company in order\nto comply with the GDPR?",
    options: ["A. No, the assessors do not qualify as data processors as they only have access to encrypted data.", "B. No, the assessors do not qualify as data processors as they do not copy the data to their facilities.", "C. Yes, the assessors are considered to be joint data controllers and must sign a mutual data processing agreement.", "D. Yes, the assessors are data processors and their processing of personal data must be governed by a separate contract or other legal act."],
    correctAnswer: "D",
    explanation: "正确答案 D。网络安全评估人员作为独立主体，接受公司委托对其系统进行安全测试并获得访问加密数\n据密钥的权限，其处理行为（即便是临时性、测试性质）已构成对个人数据的处理，依第 28 条须与委托\n方签订处理者协议或其他具有同等约束力的法律文件，明确其数据处理义务和安全保障要求，而非因数\n据加密（A）或未将数据复制到自有设施（B）就当然豁免处理者身份及协议义务；将其定性为“共同控制\n者”（C）也不准确，因为评估人员是按公司指示、为公司利益进行测试，并非独立决定处理目的和方\n式。知识点：第 28 条处理者身份认定及协议要求——即便是临时性、有限访问权限的第三方服务提供\n商，只要处理个人数据即须签订处理者协议。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 229,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nJane starts her new role as a Data Protection Officer (DPO) at a Malta-based company that allows anyone\nto buy and sell cryptocurrencies via its online platform. The company stores and processes the personal\ndata of its customers in a dedicated data center located in Malta (EU).\n\nPeople wishing to trade cryptocurrencies are required to open an online account on the platform. They\nthen must successfully pass a Know Your Customer (KYC) due diligence procedure aimed at preventing\nmoney laundering and ensuring compliance with applicable financial regulations.\n\nThe non-European customers are also required to waive all their GDPR rights by reading a disclaimer\nwritten in bold and ticking a checkbox on a separate page in order to get their account approved on the\nplatform.\n\nAll customers must likewise accept the terms of service of the platform. The terms of service also include a\nprivacy policy section, saying, among other things, that if a customer fails the KYC process, its KYC data\nwill be automatically shared with the national anti-money laundering agency.\n\nThe KYC procedure requires customers to answer many questions, including whether they have any\ncriminal convictions, whether they use recreational drugs or have problems with alcohol, and whether they\n\nhave a terminal illness. While providing this data, customers see a conspicuous message saying that this\n\ndata is meant only to prevent fraud and account takeover, and will be never shared with private third\nparties.\n\nThe company regularly conducts external security testing of its online systems by independent\ncybersecurity companies from the EU. At the final stage of testing, the company provides cybersecurity\n\nassessors with access to its central database to review security permissions, roles and policies. Personal\ndata in the database is encrypted; however, cybersecurity assessors usually have access to the decryption\nkeys obtained while running initial security testing. The assessors must strictly follow the guidelines\nimposed by the company during the entire testing and auditing process.\n\nAll customer data, including trading activities and all internal communications with technical support, are\npermanently stored in a secured AWS S3 Glacier cloud data storage, located in Ireland, for backup and\ncompliance purposes. The data is securely transferred to the cloud and then is properly encrypted while at\nrest by using AWS-native encryption mechanisms. These mechanisms give AWS the necessary technical\nmeans to encrypt and decrypt the data when such is required by the company. There is no data\nprocessing agreement between AWS and the company.\n\nShould Jane modify the required GDPR rights waiver for non-European residents?",
    options: ["A. Yes, the waiver must not apply to any residents of countries with an adequacy decision from the EC.", "B. Yes, this clause must be entirely removed as all customers, regardless of residence or nationality, shall enjoy the same individual rights granted under GDPR.", "C. No, the non-EU residents are not protected by GDPR unless they are physically located in the EU.", "D. No, but all non-EU residents must manually sign a separate waiver to ensure its lawfulness and enforceability under GDPR."],
    correctAnswer: "B",
    explanation: "答案 B 正确，因为控制者设立于马耳他，相关处理在该欧盟设立机构活动背景下进行，GDPR 适用不取决于客户国\n籍或居住地。数据主体的强制性权利不能通过勾选“放弃”。",
    topic: "GDPR",
    verified: "qualified"
  },
  {
    id: 230,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nJane starts her new role as a Data Protection Officer (DPO) at a Malta-based company that allows anyone\nto buy and sell cryptocurrencies via its online platform. The company stores and processes the personal\ndata of its customers in a dedicated data center located in Malta (EU).\n\nPeople wishing to trade cryptocurrencies are required to open an online account on the platform. They\nthen must successfully pass a Know Your Customer (KYC) due diligence procedure aimed at preventing\nmoney laundering and ensuring compliance with applicable financial regulations.\n\nThe non-European customers are also required to waive all their GDPR rights by reading a disclaimer\nwritten in bold and ticking a checkbox on a separate page in order to get their account approved on the\nplatform.\n\nAll customers must likewise accept the terms of service of the platform. The terms of service also include a\nprivacy policy section, saying, among other things, that if a customer fails the KYC process, its KYC data\nwill be automatically shared with the national anti-money laundering agency.\n\nThe KYC procedure requires customers to answer many questions, including whether they have any\ncriminal convictions, whether they use recreational drugs or have problems with alcohol, and whether they\nhave a terminal illness. While providing this data, customers see a conspicuous message saying that this\ndata is meant only to prevent fraud and account takeover, and will be never shared with private third\nparties.\n\nThe company regularly conducts external security testing of its online systems by independent\ncybersecurity companies from the EU. At the final stage of testing, the company provides cybersecurity\n\nassessors with access to its central database to review security permissions, roles and policies. Personal\n\ndata in the database is encrypted; however, cybersecurity assessors usually have access to the decryption\nkeys obtained while running initial security testing. The assessors must strictly follow the guidelines\n\nimposed by the company during the entire testing and auditing process.\n\nAll customer data, including trading activities and all internal communications with technical support, are\n\npermanently stored in a secured AWS S3 Glacier cloud data storage, located in Ireland, for backup and\ncompliance purposes. The data is securely transferred to the cloud and then is properly encrypted while at\nrest by using AWS-native encryption mechanisms. These mechanisms give AWS the necessary technical\nmeans to encrypt and decrypt the data when such is required by the company. There is no data\nprocessing agreement between AWS and the company.\n\nWhich of the following must be a component of the anti-money-laundering data-sharing practice of the\nplatform?",
    options: ["A. The terms of service shall also enumerate all applicable anti-money laundering laws.", "B. Customers shall have an opt-out feature to restrict data sharing with law enforcement agencies after the registration.", "C. The terms of service shall include the address of the anti-money laundering agency and contacts of the investigators who may access the data.", "D. Customers shall receive a clear and conspicuous notice about such data sharing before submitting their data during the registration process."],
    correctAnswer: "D",
    explanation: "正确答案 D。依据反洗钱数据共享的透明度要求（并结合 GDPR 第 13/14 条告知义务），客户应在提交数\n据前即被清晰、醒目地告知其数据可能因 KYC 未通过而被共享给反洗钱机构，这是保障客户知情权、避\n免处理目的被隐瞒的关键要素。A（须在条款中列明所有适用反洗钱法律，过于宽泛不实际）、B（须提\n供退出反洗钱数据共享的选项，反洗钱义务属于法定强制要求，通常不允许客户自由选择退出）、C（须\n列明反洗钱机构地址及调查人员联系方式，非必要且不现实的具体要求）均不准确。知识点：反洗钱数\n据共享场景下的透明度告知要求（须于收集前清晰告知）。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 231,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nJane starts her new role as a Data Protection Officer (DPO) at a Malta-based company that allows anyone\nto buy and sell cryptocurrencies via its online platform. The company stores and processes the personal\ndata of its customers in a dedicated data center located in Malta (EU).\n\nPeople wishing to trade cryptocurrencies are required to open an online account on the platform. They\nthen must successfully pass a Know Your Customer (KYC) due diligence procedure aimed at preventing\nmoney laundering and ensuring compliance with applicable financial regulations.\n\nThe non-European customers are also required to waive all their GDPR rights by reading a disclaimer\nwritten in bold and ticking a checkbox on a separate page in order to get their account approved on the\nplatform.\n\nAll customers must likewise accept the terms of service of the platform. The terms of service also include a\nprivacy policy section, saying, among other things, that if a customer fails the KYC process, its KYC data\nwill be automatically shared with the national anti-money laundering agency.\n\nThe KYC procedure requires customers to answer many questions, including whether they have any\ncriminal convictions, whether they use recreational drugs or have problems with alcohol, and whether they\nhave a terminal illness. While providing this data, customers see a conspicuous message saying that this\ndata is meant only to prevent fraud and account takeover, and will be never shared with private third\nparties.\n\nThe company regularly conducts external security testing of its online systems by independent\ncybersecurity companies from the EU. At the final stage of testing, the company provides cybersecurity\nassessors with access to its central database to review security permissions, roles and policies. Personal\ndata in the database is encrypted; however, cybersecurity assessors usually have access to the decryption\nkeys obtained while running initial security testing. The assessors must strictly follow the guidelines\nimposed by the company during the entire testing and auditing process.\n\nAll customer data, including trading activities and all internal communications with technical support, are\npermanently stored in a secured AWS S3 Glacier cloud data storage, located in Ireland, for backup and\n\ncompliance purposes. The data is securely transferred to the cloud and then is properly encrypted while at\nrest by using AWS-native encryption mechanisms. These mechanisms give AWS the necessary technical\n\nmeans to encrypt and decrypt the data when such is required by the company. There is no data\n\nprocessing agreement between AWS and the company. 6\n\nWhat is potentially wrong with the backup system operated in the AWS cloud?",
    options: ["A. The AWS servers are located in the EU but in a country different than the location of the corporate headquarters.", "B. It is unlawful to process any personal data in a cloud unless the cloud is certified as GDPR-compliant by a competent supervisory authority.", "C. The data storage period has to be revised, and a data processing agreement with AWS must be signed.", "D. AWS is a U.S. company, and no personal data of European residents may be transferred to it without explicit written consent from data subjects."],
    correctAnswer: "C",
    explanation: "正确答案 C。公司与 AWS 之间缺乏依第 28 条要求的书面数据处理协议，这是明显的合规缺口，须尽快\n签订该协议，同时留存期限（“永久存储”backup 数据）也应结合存储限制原则重新审视评估是否合理必\n要，而非无限期保留。A（AWS 服务器位于爱尔兰这一欧盟成员国境内，与总部所在国不同本身不构成\n问题，因为爱尔兰仍属欧盟境内，不涉及跨境传输合规问题）、B（并无“云须经监管机构认证”这一强制\n性法律要求，认证是可选的合规工具而非强制前提，第 42 条认证机制是自愿性质）、D（AWS 作为美国\n公司在欧盟境内设有数据中心并将数据存储于爱尔兰境内运营，此类情形不构成向美国境外传输个人数\n据，因此 D 的假设本身不成立）均不准确。知识点：第 28 条处理者协议缺失的合规风险及存储限制原则\n对无限期留存的适用。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 232,
    question: "Sanctions for non-compliance with the EU Artificial Intelligence Act (AI Act) could result in a maximum\nfine\nof?",
    options: ["A. The higher of up to 10 million Euro or up to 2% of the entity's total worldwide turnover for the preceding financial year.", "B. The higher of up to 40 million Euro or up to 8% of the entity's total worldwide turnover for the preceding financial year.", "C. The higher of up to 20 million Euro or up to 4% of the entity's total worldwide turnover for the preceding financial year.", "D. The higher of up to 30 million Euro or up to 6% of the entity's total worldwide turnover for the preceding financial year."],
    correctAnswer: "无（原四项均不准确）",
    explanation: "现行《欧盟人工智能法》没有任何一个选项匹配最高档罚款。违反禁止性 AI 做法可处最高 3,500 万欧元，或对企业\n处上一财年全球年营业额 7%（原则上取较高者；中小企业适用法案规定的较低上限规则）。其他类型违规适用较低\n的罚款档次。",
    topic: "AI Act",
    verified: "corrected"
  },
  {
    id: 233,
    question: "A dynamic Internet Protocol (IP) address is considered personal data when it is combined with what?",
    options: ["A. Other data held by the processor.", "B. Other data held by the controller.", "C. Other data held by recipients of the data.", "D. Other data held by Internet Service Providers (ISPs)."],
    correctAnswer: "D",
    explanation: "【经复核，本题参考答案有误，正确答案应为 D，理由见文末【答案修正】说明】原解析（针对原答案\nB）：正确答案 B。欧洲法院在 Breyer 案（2016）中确立，动态 IP 地址是否构成个人数据取决于控制者\n（如网站运营商）是否拥有合法途径（如可要求 ISP 提供）获取能将该 IP 地址与特定用户关联的补充信\n息；本题强调的是与“控制者”所持有的其他数据结合的可能性，而非处理者（A）、数据接收方（C）或\nISP 自身持有的数据（D，ISP 当然掌握对应信息，但本题问的是使得控制者一方能够识别个人的判断标\n准）。知识点：Breyer 案确立的动态 IP 地址构成个人数据的判断标准——控制者是否有合理途径结合额\n外信息识别个人。 【答案修正】原答案标注为 B，经核查欧洲法院 Breyer 案（C-582/14，2016 年 10 月\n19 日判决）原文，正确答案应为 D。该案确立的规则是：动态 IP 地址对于网站运营商（控制者）而言是\n否构成个人数据，取决于该控制者是否拥有合法途径，借助互联网服务提供商（ISP，即案件中的第三\n方）所掌握的补充信息来识别用户——该补充信息是由 ISP（第三方）持有，而非由控制者自身持有。因\n此正确表述应为“与 ISP 持有的其他数据结合”（选项 D），而非“与控制者持有的其他数据结合”（选项\nB，原答案）。这一区分正是 Breyer 案确立“相对识别标准”（relative criterion）的核心——即便识别所需\n的补充信息掌握在第三方手中，只要控制者有合法、现实的途径获取该信息，该数据对控制者而言仍构\n成个人数据。",
    topic: "判例法",
    verified: "accurate"
  },
  {
    id: 234,
    question: "Which of the following type of \"natural person\" is NOT exempt from the material scope of the GDPR.\nInsofar as the processing of personal data is concerned?",
    options: ["A. A natural person in the course of a large-scale but purely personal or household activity.", "B. A natural person processing data for a small-scale, purely personal or household activity. 6", "C. A natural person in the course of processing purely personal or household data on behalf of a spouse who is beyond the age of majority.", "D. A natural person in the course of an activity conducted purely for a personally-owned sole proprietorship."],
    correctAnswer: "D",
    explanation: "正确答案 D。第 2(2)(c)条“家庭活动豁免”仅适用于自然人纯粹为个人或家庭事务从事的处理活动（无论规\n模大小，A、B 均可能落入该豁免，只要活动本质仍属纯个人/家庭性质；C 代表配偶之间纯粹私人事务的\n处理同样属于该豁免范畴），但若自然人是以个体经营者（sole proprietorship，即从事商业经营活动）的\n身份处理数据，即便是个人独资经营，也已超出“纯粹个人或家庭事务”范畴，属于商业活动，不享受家庭\n活动豁免，须完全遵守 GDPR。知识点：第 2(2)(c)条家庭活动豁免的范围界定——商业性质活动（即便\n是个体经营）不适用该豁免。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 235,
    question: "MagicClean is a web-based service located in the United States that matches home cleaning services to\ncustomers. It offers its services exclusively in the United States. It uses a processor located in France to\noptimize its data.\n\nIs MagicClean subject to the GDPR?",
    options: ["A. Yes, because MagicClean is processing data in the EU.", "B. Yes, because MagicClean's data processing agreement with the French processor is an establishment in the EU.", "C. No, because MagicClean is located in the United States only.", "D. No, because MagicClean is not offering services to EU data subjects."],
    correctAnswer: "D",
    explanation: "正确答案 D。MagicClean 仅面向美国境内客户提供服务，并未向欧盟数据主体提供商品或服务，也未监\n测欧盟境内个人的行为，即便使用了位于法国的处理者协助优化数据（处理活动的执行地点本身不足以\n触发 GDPR，需结合是否构成“设立机构活动背景下的处理”或目标指向欧盟数据主体判断），因此不落入\nGDPR 域外适用范围。A、B 均错误地将“处理活动发生地在欧盟”或“与欧盟处理者签订协议”等同于触发\nGDPR 适用的充分条件，忽略了核心判断标准应是是否面向欧盟数据主体提供服务或监测其行为。知识\n点：第 3 条域外适用性判断——使用欧盟处理者本身不足以触发 GDPR，须结合是否面向欧盟数据主体提\n供服务或监测行为。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 236,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nFinancially, it has been a very good year at ARRA Hotels: Their 21 hotels, located in Greece (5), Italy (15)\nand Spain (1), have registered their most profitable results ever. To celebrate this achievement, ARRA\nHotels' Human Resources office, based in ARRA's main Italian establishment, has organized a team event\nfor its 420 employees and their families at its hotel in Spain.\n\nUpon arrival at the hotel, each employee and family member is given an electronic wristband at the\nreception desk. The wristband serves a number of functions:\n\nAllows access to the \"party zone\" of the hotel, and emits a buzz if the user approaches any\nunauthorized areas\nAllows up to three free drinks for each person of legal age, and emits a buzz once this limit has been\nreached\nGrants a unique ID number for participating in the games and contests that have been planned.\n\nAlong with the wristband, each guest receives a QR code that leads to the online privacy notice describing\nthe use of the wristband. The page also contains an unchecked consent checkbox. In the case of\nemployee family members under the age of 16, consent must be given by a parent.\n\nAmong the various activities planned for the event, ARRA Hotels' HR office has autonomously set up a\n\nphotocall area, separate from the main event venue, where employees can come and have their pictures\n\ntaken in traditional carnival costume. The photos will be posted on ARRA Hotels' main website for general\nmarketing purposes.\n\nOn the night of the event, an employee from one of ARRA's Greek hotels is displeased with the results of\nthe photos in which he appears. He intends to file a complaint with the relevant supervisory authority in\nregard to the following:\n The lack of any privacy notice in the separate photocall area\n The unlawful cross-border processing of his personal data\n The unacceptable aesthetic outcome of his photos\n\nWhich of the following is NOT necessarily considered a factor in identifying whether the processing could\nbe considered a \"cross-border processing\"?",
    options: ["A. The total number of the data subjects interested.", "B. The potential harm for the data subjects affected.", "C. The limitation of rights of the data subjects concerned.", "D. The exposure of the information of the data subjects involved."],
    correctAnswer: "A",
    explanation: "正确答案 A。判断处理活动是否构成“跨境处理”（第 4(23)条）的关键要素包括：处理是否发生在控制者\n于多个成员国的多个机构活动背景下、或处理是否实质影响多个成员国的数据主体（结合潜在损害 B、\n权利限制 C、信息暴露风险 D 等因素综合评估“实质影响”），但受影响数据主体的“总人数”本身并非判断\n是否构成跨境处理的直接法定考量因素——即便涉及人数不多，只要满足前述实质性影响多个成员国的\n标准，仍可构成跨境处理；反之人数众多但影响局限于单一成员国也未必构成跨境处理。知识点：第\n4(23)条“跨境处理”的认定标准——聚焦于多机构处理背景或对多成员国数据主体的实质影响，而非受影\n响人数本身。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 237,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nFinancially, it has been a very good year at ARRA Hotels: Their 21 hotels, located in Greece (5), Italy (15)\n\nand Spain (1), have registered their most profitable results ever. To celebrate this achievement, ARRA\nHotels' Human Resources office, based in ARRA's main Italian establishment, has organized a team event\nfor its 420 employees and their families at its hotel in Spain.\n\nUpon arrival at the hotel, each employee and family member is given an electronic wristband at the\nreception desk. The wristband serves a number of functions:\n\nAllows access to the \"party zone\" of the hotel, and emits a buzz if the user approaches any\nunauthorized areas\nAllows up to three free drinks for each person of legal age, and emits a buzz once this limit has been\nreached\nGrants a unique ID number for participating in the games and contests that have been planned.\n\nAlong with the wristband, each guest receives a QR code that leads to the online privacy notice describing\nthe use of the wristband. The page also contains an unchecked consent checkbox. In the case of\nemployee family members under the age of 16, consent must be given by a parent.\n\nAmong the various activities planned for the event, ARRA Hotels' HR office has autonomously set up a\nphotocall area, separate from the main event venue, where employees can come and have their pictures\ntaken in traditional carnival costume. The photos will be posted on ARRA Hotels' main website for general\nmarketing purposes.\n\nOn the night of the event, an employee from one of ARRA's Greek hotels is displeased with the results of\nthe photos in which he appears. He intends to file a complaint with the relevant supervisory authority in\nregard to the following:\n\nThe lack of any privacy notice in the separate photocall area\nThe unlawful cross-border processing of his personal data\nThe unacceptable aesthetic outcome of his photos\n\nWhich of the following principles has likely been violated in the processing of the photocall photos\n\ncontaining personal data?",
    options: ["A. Adequacy.", "B. Lawfulness.", "C. Transparency.", "D. Data minimization."],
    correctAnswer: "C",
    explanation: "正确答案 C。ARRA 酒店人力资源部门自行设置的拍照区域并未提供任何隐私声明，员工在毫不知情的情\n况下被拍照并计划将照片用于公司营销宣传，这明显违反透明度原则（第 5(1)(a)、13 条）——未告知处\n理目的、用途及相关权利。知识点：第 5(1)(a)及 13 条透明度原则在企业活动摄影场景中的适用。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 238,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nFinancially, it has been a very good year at ARRA Hotels: Their 21 hotels, located in Greece (5), Italy (15)\nand Spain (1), have registered their most profitable results ever. To celebrate this achievement, ARRA\nHotels' Human Resources office, based in ARRA's main Italian establishment, has organized a team event\nfor its 420 employees and their families at its hotel in Spain.\n\nUpon arrival at the hotel, each employee and family member is given an electronic wristband at the\nreception desk. The wristband serves a number of functions:\n\nAllows access to the \"party zone\" of the hotel, and emits a buzz if the user approaches any\nunauthorized areas\nAllows up to three free drinks for each person of legal age, and emits a buzz once this limit has been\nreached\nGrants a unique ID number for participating in the games and contests that have been planned.\n\nAlong with the wristband, each guest receives a QR code that leads to the online privacy notice describing\nthe use of the wristband. The page also contains an unchecked consent checkbox. In the case of\nemployee family members under the age of 16, consent must be given by a parent.\n\nAmong the various activities planned for the event, ARRA Hotels' HR office has autonomously set up a\nphotocall area, separate from the main event venue, where employees can come and have their pictures\ntaken in traditional carnival costume. The photos will be posted on ARRA Hotels' main website for general\nmarketing purposes.\n\nOn the night of the event, an employee from one of ARRA's Greek hotels is displeased with the results of\nthe photos in which he appears. He intends to file a complaint with the relevant supervisory authority in\nregard to the following:\n\nThe lack of any privacy notice in the separate photocall area\nThe unlawful cross-border processing of his personal data\nThe unacceptable aesthetic outcome of his photos\n\nWhy would consent NOT be considered an adequate legal basis for accessing the party zone?",
    options: ["A. The consent is not completely unambiguous.", "B. The consent is not sufficiently informed.", "C. The consent is not freely given.", "D. The consent is not in writing."],
    correctAnswer: "C",
    explanation: "正确答案 C。手环用于进入“派对区”这一功能与员工是否参加庆典活动本身存在实际关联，且勾选同意框\n位于活动现场、通过员工与雇主之间固有的权力不对等及社交压力情境下获取，员工很难真正自由地拒\n绝而不产生不利后果（如被排除在团建活动之外的社交压力），这使得该同意的“自由性”存疑，不构成有\n效同意的法律基础。A、B、D 虽然也可能存在问题，但本题聚焦的核心缺陷在于雇佣关系及活动情境下\n同意“自由给予”这一要素的欠缺。知识点：第 4(11)、7 条有效同意的“自由性”要求及雇佣/团建活动场景\n下同意自愿性的固有质疑。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 239,
    question: "SCENARIO\nPlease use the following to answer the next question:\n\nFinancially, it has been a very good year at ARRA Hotels: Their 21 hotels, located in Greece (5), Italy (15)\nand Spain (1), have registered their most profitable results ever. To celebrate this achievement, ARRA\nHotels' Human Resources office, based in ARRA's main Italian establishment, has organized a team event\nfor its 420 employees and their families at its hotel in Spain.\n\nUpon arrival at the hotel, each employee and family member is given an electronic wristband at the\nreception desk. The wristband serves a number of functions:\n\nAllows access to the \"party zone\" of the hotel, and emits a buzz if the user approaches any\nunauthorized areas\nAllows up to three free drinks for each person of legal age, and emits a buzz once this limit has been\nreached\nGrants a unique ID number for participating in the games and contests that have been planned.\n\nAlong with the wristband, each guest receives a QR code that leads to the online privacy notice describing\nthe use of the wristband. The page also contains an unchecked consent checkbox. In the case of\nemployee family members under the age of 16, consent must be given by a parent.\n\nAmong the various activities planned for the event, ARRA Hotels' HR office has autonomously set up a\nphotocall area, separate from the main event venue, where employees can come and have their pictures\ntaken in traditional carnival costume. The photos will be posted on ARRA Hotels' main website for general\nmarketing purposes.\n\nOn the night of the event, an employee from one of ARRA's Greek hotels is displeased with the results of\nthe photos in which he appears. He intends to file a complaint with the relevant supervisory authority in\nregard to the following:\n\nThe lack of any privacy notice in the separate photocall area\nThe unlawful cross-border processing of his personal data\nThe unacceptable aesthetic outcome of his photos\n\nAssuming that there is a cross-border processing of personal data, which of the following criteria would\nNOT be useful to the lead supervisory authority responsible for the Greek employee's complaint when\ntrying to determine the location of the controller's main establishment?",
    options: ["A. Where the controller is registered as a company.", "B. Where the processor is registered as a company.", "C. Where decisions about the processing activities are made.", "D. Where the director with responsibility for processing activities is located."],
    correctAnswer: "B",
    explanation: "正确答案 B。判断控制者“主要设立地”的核心考量因素是控制者（而非处理者）在欧盟的注册地（A）、\n实际作出处理决策的地点（C）、负责处理事务的高管所在地（D）等，均围绕控制者自身展开；处理者\n的注册地点与确定控制者的主要设立地（进而确定主导监管机构）并无直接关联，因为主导监管机构制\n度是围绕控制者的设立地展开设计的（若处理者单独构成控制者身份则另当别论）。知识点：第 4(16)条\n主要设立地认定标准——聚焦于控制者（而非处理者）的注册地、决策地及责任人所在地。",
    topic: "监管机构",
    verified: "accurate"
  },
  {
    id: 240,
    question: "Which kind of privacy notice, originally advocated by the Article 29 Working Party, is commonly\nrecommended for AI-based technologies because of the way it provides processing information at specific\npoints of data collection?",
    options: ["A. Privacy dashboard notice.", "B. Visualization notice.", "C. Just-in-time notice.", "D. Layered notice."],
    correctAnswer: "C",
    explanation: "正确答案 C。第 29 条工作组倡导的“即时提示”（just-in-time notice）告知方式，即在用户实际输入或提交\n特定类型数据的当下、在具体情境节点弹出简明相关的处理信息提示，这种方式尤其适合 AI 驱动的技术\n场景（如动态个性化处理、实时数据收集节点较多），能在恰当时机提供针对性信息，优于笼统的隐私\n仪表盘（A）、可视化通知（B）或分层通知（D，分层通知更适合传统网站/App 整体隐私政策的呈现，\n而非 AI 技术中具体数据收集节点的即时提示）。知识点：第 29 条工作组倡导的“即时提示”告知方式及其\n在 AI 技术场景下的适用优势。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 241,
    question: "Articles 13 and 14 of the GDPR provide details on the obligation of data controllers to inform data subjects\nwhen collecting personal data. However, both articles specify an exemption for situations in which the data\nsubject already has the information.\n\nWhich other situation would also exempt the data controller from this obligation under Article 14?",
    options: ["A. When providing the information would go against a police order.", "B. When providing the information would involve a disproportionate effort.", "C. When the personal data was obtained through multiple source in the public domain.", "D. When the personal data was obtained 5 years before the entry into force of the GDPR."],
    correctAnswer: "B",
    explanation: "正 确 答 案 B 。 第 14(5)(b) 条 规 定 ， 若 提 供 该 信 息 将 被 证 明 “ 不 可 能 ” 或 需 付 出 “ 不 成 比 例 的 努 力 ”\n（disproportionate effort），控制者可豁免第 14 条告知义务（尤其常见于科研、统计、档案目的处理场\n景，且须采取适当保障措施如公开发布信息等替代方式）。A（违反警方命令，非第 14 条明文列举的例\n外）、C（多方公开来源获取，本身不构成独立豁免理由）、D（GDPR 生效前 5 年获得的数据，无此类\n时间豁免规定）均不准确。知识点：第 14(5)(b)条“不成比例努力”作为告知义务的豁免情形。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 242,
    question: "The transparency principle is most directly related to which of the following rights?",
    options: ["A. Right to object.", "B. Right to be informed.", "C. Right to be forgotten.", "D. Right to restriction of processing."],
    correctAnswer: "B",
    explanation: "正确答案 B。透明度原则的核心落地机制正是“被告知权”（Right to be Informed，体现在第 13、14 条），\n要求控制者以清晰易懂的方式主动告知数据主体处理相关信息，这是透明度原则最直接对应的具体权\n利。反对权（A）、被遗忘权（C）、限制处理权（D）虽然也与透明度原则存在间接关联（数据主体须\n先被充分告知才能有效行使这些权利），但并非该原则最直接对应的权利。知识点：透明度原则与“被告\n知权”（第 13、14 条）的直接对应关系。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 243,
    question: "As a Data Protection Officer for a small bank in the European Union, you receive a data subject access\nrequest from one of your customers. The customer provides you with his name, and has used the email\naddress registered in your system.\n\nWhat would be the most appropriate way to confirm the identity of the customer?",
    options: ["A. Request that the customer provide his bank account number.", "B. Request that the customer answer additional security questions.", "C. Request a copy of the customer's last bank account statement.", "D. Request a copy of the customer's government-issued ID document."],
    correctAnswer: "B",
    explanation: "正确答案 B。要求客户回答其账户注册时预设的安全问题，是一种在不额外收集新的敏感身份证明文件\n（如政府身份证 D，超出必要范围）或过度收集金融账户细节（A、C，涉及不必要的额外敏感数据收\n集，违反数据最小化原则）的情况下，合理核实请求人身份的适度方式，符合第 12(6)条身份核实的比例\n性要求。知识点：第 12(6)条身份核实措施应遵循数据最小化及比例原则，避免过度收集额外敏感信息。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 244,
    question: "In the Planet 49 case, what was the main judgement of the Court of Justice of the European Union (CJEU)\n\nregarding the issue of cookies?",
    options: ["A. If the cookies do not track personal data, then pre-checked boxes are acceptable.", "B. If the ePrivacy Directive requires consent for cookies, then the GDPR's consent requirements apply.", "C. If a website's cookie notice makes clear the information gathered and the lifespan of the cookie, then pre-checked boxes are acceptable.", "D. If a data subject continues to scroll through a website after reading a cookie banner, this activity constitutes valid consent for the tracking described in the cookie banner."],
    correctAnswer: "B",
    explanation: "正确答案 B。Planet49 案的核心裁判要旨是：只要 ePrivacy 指令要求就 cookie 的放置取得用户同意，该同\n意必须满足 GDPR 规定的同意有效性标准（如明确的肯定性行为、具体、知情等），即把 GDPR 的同意\n定义和标准“嫁接”适用于 ePrivacy 指令项下的 cookie 同意要求，从而统一了两套法律框架下同意的判断\n标准。A、C、D 均对判决的具体内容作出了不准确或与判决要旨相反的表述（该案恰恰否定了预勾选框\n和被动继续浏览可构成有效同意）。知识点：Planet49 案确立的 GDPR 同意标准适用于 ePrivacy 指令下\ncookie 同意的要旨。",
    topic: "ePrivacy指令",
    verified: "accurate"
  },
  {
    id: 245,
    question: "What ruling did the Planet 49 CJEU Judgment make regarding the issue of pre-ticked boxes?",
    options: ["A. They are allowed if determined to be technically necessary.", "B. They do not amount to valid consent under any circumstances.", "C. They are allowed if recorded in the register of processing activities.", "D. They constitute valid consent if the processing is necessary for purposes of legitimate interest."],
    correctAnswer: "B",
    explanation: "正确答案 B。Planet49 案明确裁定，预先勾选的同意框（pre-ticked box）在任何情况下都不能构成有效的\n同意，因为这不满足“积极的肯定性行为”这一同意有效性的核心要求（用户的沉默或未采取拒绝行动不能\n被解释为同意），A、C、D 均描述了不成立的例外情形。知识点：Planet49 案关于预勾选框绝对不构成\n有效同意的裁决。",
    topic: "判例法",
    verified: "accurate"
  },
  {
    id: 246,
    question: "According to Art. 23 GDPR, which of the following data subject rights can NOT be restricted?",
    options: ["A. Right to restriction of processing.", "B. Right to erasure (\"Right to be forgotten\").", "C. Right to lodge a complaint with a supervisory authority.", "D. Right not to be subject to automated individual decision-making."],
    correctAnswer: "C",
    explanation: "正确答案 C。第 23 条允许成员国通过立法在特定条件下（如国家安全、国防、公共安全、预防犯罪等重\n大公共利益目的）限制数据主体的部分权利（如限制处理权 A、被遗忘权 B、免受自动化决策约束权 D\n等），但向监管机构投诉的权利（第 77 条）作为数据主体寻求救济、确保监管监督的基本程序性权利，\n通常不在第 23 条可限制的权利范围之列（该权利本身正是确保权利限制措施合法性受到监督的重要保障\n机制）。知识点：第 23 条数据主体权利限制的范围及不可限制的投诉权。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 247,
    question: "After detecting an intrusion involving the theft of unencrypted personal data, who shall the breached\ncompany notify first under GDPR requirements?",
    options: ["A. Any parents of children whose personal data was compromised.", "B. Any affected customers whose data was compromised.", "C. A competent supervisory authority.", "D. A local law enforcement agency."],
    correctAnswer: "C",
    explanation: "正确答案 C。第 33 条规定，控制者在知悉数据泄露后，若泄露很可能给数据主体权利自由带来风险，应\n“不得无故拖延”地（原则上 72 小时内）首先通知有管辖权的监管机构，这是法定的第一顺位通知对象；\n通知受影响的数据主体（B、A，且仅在“高风险”门槛下才需要，第 34 条）及通知执法机构（D，非\nGDPR 强制的首要步骤，是否报警属另一项独立的刑事程序考量）均非首先且必然采取的步骤。知识点：\n第 33 条数据泄露通知的首要对象及 72 小时时限。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 248,
    question: "According to the EDPB Guidelines 01/2021 on Examples regarding Personal Data Breach Notification, if\n\nexfiltration of job application data (submitted through online application forms and stored on a webserver)\nresulted in personal information being accessible to unauthorized persons, this would be primarily\nconsidered what kind of breach?",
    options: ["A. An integrity breach.", "B. An accuracy breach.", "C. An availability breach.", "D. A confidentiality breach."],
    correctAnswer: "D",
    explanation: "正确答案 D。求职申请数据被未经授权的第三方窃取访问，本质上是未经授权的第三方获得了本不应访\n问的个人数据，属于对数据“机密性”的破坏，即“机密性泄露”（confidentiality breach），而非完整性泄露\n（数据被篡改，A）、准确性泄露（非 GDPR 泄露分类术语，B 为干扰项）或可用性泄露（数据丢失或无\n法访问，C）。知识点：EDPB 第 01/2021 号指南关于数据泄露三种类型（机密性、完整性、可用性）的\n区分——未授权访问/窃取对应机密性泄露。",
    topic: "监管机构",
    verified: "accurate"
  },
  {
    id: 249,
    question: "You are the new Data Protection Officer for your company and have to determine whether the company\nhas implemented appropriate technical and organizational measures as required by Article 32 of the\nGDPR. Which of the following would be the most important to consider when trying to determine this?",
    options: ["A. How security measures might evolve in the future.", "B. Which security measures are endorsed by a majority of experts.", "C. How the public perceives what constitutes adequate security measures.", "D. Which kinds of security measures your company has employed in the past."],
    correctAnswer: "B",
    explanation: "答案 B 只是四项中对“state of the art（技术发展水平）”最接近的代理指标，并非以专家多数投票决定。第 32 条还要\n求同时考虑实施成本、处理性质和范围、背景、目的，以及对个人权利自由的风险。",
    topic: "GDPR",
    verified: "qualified"
  },
  {
    id: 250,
    question: "If a company receives an anonymous email demanding ransom for the stolen personal data of its clients,\nwhat must the company do next, per GDPR requirements?",
    options: ["A. Notify the police and file a criminal complaint about the incident.", "B. Start an investigation to understand the incident's possible scope, duration and nature.", "C. Send a notification to the competent supervisory authority describing the incident.", "D. Send an email about the incident to all clients and ask them to change their passwords."],
    correctAnswer: "B",
    explanation: "正确答案 B。匿名勒索邮件表明可能发生个人数据泄露，但控制者应立即调查，以取得“合理确定性”并了解范围、\n持续时间、数据类别和风险。只有在达到“知悉”标准且泄露可能对个人权利和自由造成风险时，才须依第 33 条在 72\n小时内通知监管机构；必要时可分阶段补充信息。",
    topic: "GDPR",
    verified: "corrected"
  },
  {
    id: 251,
    question: "If two controllers act as joint controllers pursuant to Article 26 of the GDPR, which of the following may\nNOT be validly determined by said controllers?",
    options: ["A. The definition of a central contact point for data subjects.", "B. The rules regarding the exercising of data subjects' rights.", "C. The rules to provide information to data subjects in Articles 13 and 14.", "D. The non-disclosure of the essence of their arrangement to data subjects."],
    correctAnswer: "D",
    explanation: "正确答案 D。第 26 条要求共同控制者以协议明确各自责任分工，并须将该协议的实质内容（essence of\nthe arrangement）向数据主体公开（第 26(2)条），因此共同控制者无权约定对数据主体保密该合作安排的\n实质内容，这是强制性透明度要求，不可协商排除。A（设立统一联系点）、B（行使数据主体权利的具\n体规则）、C（第 13/14 条告知义务的分工规则）均属于共同控制者协议可以且应当明确约定的事项。知\n识点：第 26 条共同控制者协议须向数据主体公开安排实质内容的强制性要求。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 252,
    question: "ISO 31700 has set forth requirements relating to consumer products and services. In particular, this\ninternational standard focuses on the implementation of which of the following?",
    options: ["A. Privacy by design.", "B. Comprehensive ethical AI software.", "C. Privacy notices for companies providing services to consumers.", "D. Automated systems for identifying EU data subjects' personal data."],
    correctAnswer: "A",
    explanation: "正确答案 A。ISO 31700 是全球首个专门针对消费品和服务领域的“设计阶段隐私保护”（Privacy by\nDesign）国际标准，规定了产品和服务开发过程中应遵循的隐私保护工程要求，而非专门针对 AI 伦理软\n件（B）、隐私声明制作规范（C）或识别欧盟数据主体的自动化系统（D）。知识点：ISO 31700 标准及\n其在消费品/服务领域落实设计阶段隐私保护的核心定位。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 253,
    question: "What is the main task of the European Data Protection Board?",
    options: ["A. To assess adequacy of data protection in third countries.", "B. To ensure consistent application of the GDPR.", "C. To proactively prevent disputes between national supervisory authorities.", "D. To publish guidelines for data subjects on how to properly enforce their rights."],
    correctAnswer: "B",
    explanation: "正确答案 B。EDPB 的核心法定任务是确保 GDPR 在欧盟各成员国范围内得到一致适用和解释（第 70 条\n列明的具体职责，包括发布指南、处理一致性机制下的争议、发布意见等），而非直接负责充分性认定\n评估（A，该职责属于欧盟委员会，EDPB 仅提供咨询意见）、主动预防各国监管机构间的争议（C，\nEDPB 是在争议已产生后通过一致性机制介入协调，而非“主动预防”）或直接面向数据主体发布维权指引\n（D，EDPB 的指南受众更广泛，包括控制者、处理者、监管机构等，并非专门面向数据主体本身）。知\n识点：EDPB 的核心法定职责——确保 GDPR 在欧盟范围内一致适用（第 70 条）。",
    topic: "监管机构",
    verified: "accurate"
  },
  {
    id: 254,
    question: "In relation to third countries and international organizations, which of the following shall, along with the\nsupervisory authorities, take appropriate steps to develop international cooperation mechanisms for the\nenforcement of data protection legislation?",
    options: ["A. The European Parliament.", "B. The Council of the European Union.", "C. The designated Data Protection Officers.", "D. The European Commission."],
    correctAnswer: "D",
    explanation: "正确答案 D。第 50 条规定，欧盟委员会及各监管机构应共同采取适当步骤，就第三国和国际组织之间发\n展数据保护执法国际合作机制，欧盟委员会在此扮演关键角色（负责与第三国政府和国际组织层面的协\n调），而非欧洲议会（A）、欧盟理事会（B，二者更多承担立法职能而非具体执法国际合作的推动）或\n个别企业的 DPO（C，DPO 是企业内部合规角色，无权代表国家进行国际合作）。知识点：第 50 条国际\n合作机制发展中欧盟委员会与监管机构的共同职责。",
    topic: "监管机构",
    verified: "accurate"
  },
  {
    id: 255,
    question: "The European Data Protection Board (EDPB) recommends measures to supplement transfer tools, in\norder to ensure compliance with the European Union (EU) level of personal data protection. According to\nthese recommendations, what additional actions should be taken when a transfer to a third country is\n\nbased upon an adequacy decision?",
    options: ["A. Adopt a supplementary data transfer mechanism.", "B. Monitor the ongoing validity of the data transfer mechanism.", "C. Adopt technical, contractual or organizational supplementary measures.", "D. Monitor changes in the law or practice of the third country that would lower the level of protection of personal data."],
    correctAnswer: "D",
    explanation: "正确答案 D。EDPB 建议，即便跨境传输依托欧盟委员会已作出的充分性认定，数据出口方仍应持续关注\n该第三国的法律或实践是否发生可能降低个人数据保护水平的变化（因充分性认定本身也可能被暂停、\n修改或撤销），而非需另行采取补充传输机制（A，充分性认定本身已足以合法化传输，无需叠加其他机\n制）、监测传输机制的持续有效性（B，表述较笼统，D 更具体地指出应监测“第三国法律或实践的变化”\n这一关键要素）或采取技术合同组织性补充措施（C，补充措施主要适用于依赖 SCC 等其他传输工具的\n情形，而非已获充分性认定的传输）。知识点：EDPB 关于充分性认定传输下持续关注第三国法律环境变\n化的建议。",
    topic: "监管机构",
    verified: "accurate"
  },
  {
    id: 256,
    question: "In the wake of the Schrems II ruling, which of the following actions has been recommended by the EDPB\nfor companies transferring personal data to third countries?",
    options: ["A. Adopting a risk-based approach and implementing supplementary measures as needed.", "B. Ensuring that all data transfers are encrypted with unbreakable encryption algorithms.", "C. Obtaining explicit consent from each EU citizen for every individual data transfer.", "D. Storing all personal data within the borders of the European Union."],
    correctAnswer: "A",
    explanation: "正确答案 A。Schrems II 判决后，EDPB 建议企业采取“基于风险的方法”，对每一具体跨境传输的实际情\n况（目标国法律环境、数据敏感性等）进行个案评估，并按需实施适当的补充措施（技术、合同、组织\n性），而非要求“不可破解加密”这一不现实的技术标准（B）、逐一取得每位欧盟公民就每次传输的明确\n同意（C，同意仅是跨境传输合法机制之一且适用范围有限，并非普遍适用的解决方案）或要求所有个人\n数据必须存储在欧盟境内（D，数据本地化并非 Schrems II 判决要求的强制性一般原则）。知识点：\nSchrems II 判决后 EDPB 建议的“基于风险的方法”及补充措施机制。",
    topic: "判例法",
    verified: "accurate"
  },
  {
    id: 257,
    question: "Which failing of Privacy Shield, cited by the CJEU as a reason for its invalidation, is the Trans-Atlantic Data\nPrivacy Framework intended to address?",
    options: ["A. Data Subject Rights.", "B. Right of Action.", "C. Necessity.", "D. Consent."],
    correctAnswer: "B",
    explanation: "答案 B 应理解为缺乏有效、可执行的司法救济或独立申诉机制。新框架试图通过数据保护审查法院等机制回应\nCJEU 对美国监控救济不足的批评；“right of action”只是简化表述。",
    topic: "监管机构",
    verified: "qualified"
  },
  {
    id: 258,
    question: "Pursuant to the EDPB Guidelines 8/2022, all of the following criteria must be considered when identifying a\nlead supervisory authority of a controller EXCEPT?",
    options: ["A. Determining where the controller has its place of central administration in the EEA.", "B. Determining the supervisory authority where the place of central administration of the controller is located.", "C. Determining the supervisory authority according to what has been identified by the controller as the authority to which data subjects can lodge complaints.", "D. Determining if decisions on the processing are taken in another establishment in the EEA, and if that establishment has the power to implement those decisions."],
    correctAnswer: "C",
    explanation: "正确答案 C。EDPB《8/2022 号指南》关于认定控制者主导监管机构的标准包括：中央管理地所在地\n（A、B）、是否存在其他欧盟设立机构实际作出并有权执行处理决策（D）等客观事实标准，但并不采\n纳控制者自行在隐私政策中“单方声明/指定”某监管机构作为数据主体投诉受理机构这一主观表述作为认\n定依据——主导监管机构的认定须基于客观事实，而非由控制者单方声明决定。知识点：EDPB 指南\n8/2022 关于主导监管机构认定的客观标准，排除控制者单方自我指定的做法。",
    topic: "监管机构",
    verified: "accurate"
  },
  {
    id: 259,
    question: "Higher fines are assessed for GDPR violations due to which of the following?",
    options: ["A. Failure to notify a supervisory authority and data subjects of a personal data breach.", "B. Violations of a data controller's obligations to obtain a child's consent. 6", "C. Failure to appoint a data protection officer.", "D. Violations of a data subject's rights."],
    correctAnswer: "D",
    explanation: "正确答案 D。第 83(5)条将违反数据主体基本权利（如同意规则、数据主体权利第 12-22 条、跨境传输核\n心原则、儿童同意规则等）的行为列为最高档行政罚款（最高 2000 万欧元或全球营业额 4%）的适用情\n形，这类违规直接侵害数据主体的核心利益，因此适用最严厉的处罚标准。A（未通知泄露）也属于较高\n违规但严格对应的是第 83(4)条较低档（除非同时涉及权利侵害）；B（违反儿童同意规则）本质上也是\n数据主体权利/同意规则违反的一种，与 D 存在包含关系，但 D 作为更概括、更准确的分类表述涵盖范围\n更广；C（未设 DPO）属于第 83(4)条较低档罚款范围。知识点：第 83(5)条较高档行政罚款——违反数据\n主体权利相关规定适用最严厉处罚标准。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 260,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nProStorage is a multinational cloud storage provider headquartered in the Netherlands. Its CEO, Ruth\nBrown, has developed a two-pronged strategy for growth: 1) expand ProStorage's global customer base\nand 2) increase ProStorage's sales force by efficiently onboarding effective teams. Enacting this strategy\nhas recently been complicated by Ruth's health condition, which has limited her working hours, as well as\nher ability to travel to meet potential customers. ProStorage's Human Resources department and Ruth's\nChief of Staff now work together to manage her schedule and ensure that she is able to make all her\nmedical appointments. The latter has become especially crucial after Ruth's last trip to India, where she\nsuffered a medical emergency and was hospitalized in New Delhi. Unable to reach Ruth's family, the\nhospital reached out to ProStorage and was able to connect with her Chief of Staff, who in coordination\nwith Mary, the head of HR, provided information to the doctors based on accommodation requests Ruth\nmade when she started at ProStorage.\n\nIn support of Ruth's strategic goals of hiring more sales representatives, the Human Resources team is\nfocused on improving its processes to ensure that new employees are sourced, interviewed, hired, and on\n\nboarded efficiently. To help with this, Mary identified two vendors, HRYourWay, a German based\ncompany, and InstaHR, an Australian based company. She decided to have both vendors go through\nProStorage's vendor risk review process so she can work with Ruth to make the final decision. As part of\nthe review process, Jackie, who is responsible for maintaining ProStorage's privacy program (including\nmaintaining controller BCRs and conducting vendor risk assessments), reviewed both vendors but\ncompleted a transfer impact assessment only for InstaHR. After her review of both vendors, she\ndetermined that InstaHR satisfied more of the requirements as it boasted a more established privacy\nprogram and provided third-party attestations, whereas HRYourWay was a small vendor with minimal data\nprotection operations. Thus, she recommended InstaHR.\n\nProStorage's marketing team also worked to meet the strategic goals of the company by focusing on\nindustries where it needed to grow its market share. To help with this, the team selected as a partner\nUpFinance. a US based company with deep connections to financial industry customers. During\nProStorage's diligence process, Jackie from the privacy team noted in the transfer impact assessment that\nUpFinance implements several data protection measures including end-lo-end encryption, with encryption\nkeys held by the customer. Notably, UpFinance has not received any government requests in its 7 years of\nbusiness. Still, Jackie recommended that the contract require UpFinance to notify ProStorage if it receives\na government request for personal data UpFinance processes on its behalf prior to disclosing such data.\n\nWhat transfer mechanism did ProStorage most likely rely on to transfer Ruth's medical information to the\nhospital?",
    options: ["A. Ruth's implied consent.", "B. Protecting the vital interest of Ruth.", "C. Performance of a contract with Ruth.", "D. Protecting against legal liability from Ruth."],
    correctAnswer: "B",
    explanation: "正确答案 B。医院因无法联系 Ruth 的家人、在紧急医疗情况下向公司询问并获得健康信息，公司据此向\n医 院 提 供 信 息 ， 其 合 法 处 理 依 据 应 是 第 6(1)(d) 条 “ 保 护 数 据 主 体 或 其 他 自 然 人 的 重 大 利 益 ” （ vital\ninterest），这一依据专门适用于当事人无法表达同意、且处理是挽救生命或健康所必需的紧急情况。A\n（默示同意，紧急情况下当事人往往无法表达同意，不宜依赖默示同意这一较弱且存疑的依据）、C（履\n行合同，员工的劳动合同本身通常不直接涵盖医疗紧急联络这一具体处理目的）、D（防范法律责任，属\n于合法利益范畴而非最贴切的依据）均不如“重大利益”准确对应紧急医疗场景。知识点：第 6(1)(d)条“重\n大利益”作为紧急医疗等生命健康攸关场景下的合法处理依据。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 261,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nProStorage is a multinational cloud storage provider headquartered in the Netherlands. Its CEO, Ruth\nBrown, has developed a two-pronged strategy for growth: 1) expand ProStorage's global customer base\nand 2) increase ProStorage's sales force by efficiently onboarding effective teams. Enacting this strategy\nhas recently been complicated by Ruth's health condition, which has limited her working hours, as well as\nher ability to travel to meet potential customers. ProStorage's Human Resources department and Ruth's\nChief of Staff now work together to manage her schedule and ensure that she is able to make all her\nmedical appointments. The latter has become especially crucial after Ruth's last trip to India, where she\nsuffered a medical emergency and was hospitalized in New Delhi. Unable to reach Ruth's family, the\nhospital reached out to ProStorage and was able to connect with her Chief of Staff, who in coordination\nwith Mary, the head of HR, provided information to the doctors based on accommodation requests Ruth\nmade when she started at ProStorage.\n\nIn support of Ruth's strategic goals of hiring more sales representatives, the Human Resources team is\nfocused on improving its processes to ensure that new employees are sourced, interviewed, hired, and on\nboarded efficiently. To help with this, Mary identified two vendors, HRYourWay, a German based\ncompany, and InstaHR, an Australian based company. She decided to have both vendors go through\nProStorage's vendor risk review process so she can work with Ruth to make the final decision. As part of\nthe review process, Jackie, who is responsible for maintaining ProStorage's privacy program (including\nmaintaining controller BCRs and conducting vendor risk assessments), reviewed both vendors but\ncompleted a transfer impact assessment only for InstaHR. After her review of both vendors, she\ndetermined that InstaHR satisfied more of the requirements as it boasted a more established privacy\nprogram and provided third-party attestations, whereas HRYourWay was a small vendor with minimal data\nprotection operations. Thus, she recommended InstaHR.\n\nProStorage's marketing team also worked to meet the strategic goals of the company by focusing on\nindustries where it needed to grow its market share. To help with this, the team selected as a partner\nUpFinance. a US based company with deep connections to financial industry customers. During\nProStorage's diligence process, Jackie from the privacy team noted in the transfer impact assessment that\nUpFinance implements several data protection measures including end-lo-end encryption, with encryption\nkeys held by the customer. Notably, UpFinance has not received any government requests in its 7 years of\nbusiness. Still, Jackie recommended that the contract require UpFinance to notify ProStorage if it receives\na government request for personal data UpFinance processes on its behalf prior to disclosing such data.\n\nWhat transfer mechanism should Jackie recommend for using InstaHR?",
    options: ["A. Adequacy.", "B. Binding corporate rules.", "C. Explicit consent of employees.", "D. Standard contractual clauses."],
    correctAnswer: "D",
    explanation: "正确答案 D。InstaHR 位于澳大利亚（未获欧盟充分性认定的第三国），Jackie 为其完成了跨境传输影响\n评估（TIA），最贴切的传输合法化机制是标准合同条款（SCCs），无需专为单一供应商制定 BCRs\n（B，通常用于集团内部）、充分性认定（A，澳大利亚未获欧盟充分性认定）或依赖同意（C，同意作\n为跨境传输机制通常仅作为补充/最后手段，不适合大规模常态化的供应商数据传输）。知识点：向未获\n充分性认定的第三国供应商传输数据时标准合同条款（SCCs）的适用。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 262,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nProStorage is a multinational cloud storage provider headquartered in the Netherlands. Its CEO, Ruth\n\nBrown, has developed a two-pronged strategy for growth: 1) expand ProStorage's global customer base\nand 2) increase ProStorage's sales force by efficiently onboarding effective teams. Enacting this strategy\n\nhas recently been complicated by Ruth's health condition, which has limited her working hours, as well as\n\nher ability to travel to meet potential customers. ProStorage's Human Resources department and Ruth's\n\nChief of Staff now work together to manage her schedule and ensure that she is able to make all her\nmedical appointments. The latter has become especially crucial after Ruth's last trip to India, where she\nsuffered a medical emergency and was hospitalized in New Delhi. Unable to reach Ruth's family, the\nhospital reached out to ProStorage and was able to connect with her Chief of Staff, who in coordination\nwith Mary, the head of HR, provided information to the doctors based on accommodation requests Ruth\nmade when she started at ProStorage.\n\nIn support of Ruth's strategic goals of hiring more sales representatives, the Human Resources team is\nfocused on improving its processes to ensure that new employees are sourced, interviewed, hired, and on\nboarded efficiently. To help with this, Mary identified two vendors, HRYourWay, a German based\ncompany, and InstaHR, an Australian based company. She decided to have both vendors go through\nProStorage's vendor risk review process so she can work with Ruth to make the final decision. As part of\nthe review process, Jackie, who is responsible for maintaining ProStorage's privacy program (including\nmaintaining controller BCRs and conducting vendor risk assessments), reviewed both vendors but\ncompleted a transfer impact assessment only for InstaHR. After her review of both vendors, she\ndetermined that InstaHR satisfied more of the requirements as it boasted a more established privacy\nprogram and provided third-party attestations, whereas HRYourWay was a small vendor with minimal data\nprotection operations. Thus, she recommended InstaHR.\n\nProStorage's marketing team also worked to meet the strategic goals of the company by focusing on\nindustries where it needed to grow its market share. To help with this, the team selected as a partner\nUpFinance. a US based company with deep connections to financial industry customers. During\nProStorage's diligence process, Jackie from the privacy team noted in the transfer impact assessment that\nUpFinance implements several data protection measures including end-lo-end encryption, with encryption\nkeys held by the customer. Notably, UpFinance has not received any government requests in its 7 years of\nbusiness. Still, Jackie recommended that the contract require UpFinance to notify ProStorage if it receives\na government request for personal data UpFinance processes on its behalf prior to disclosing such data.\n\nWhy was Jackie correct in not completing a transfer impact assessment for HRYourWay?",
    options: ["A. HRYourWay was ultimately not selected.", "B. HRYourWay is not located in a third country.", "C. ProStorage will obtain consent for all transfers.", "D. ProStorage can rely on its Binding Corporate Rules."],
    correctAnswer: "B",
    explanation: "正确答案 B。HRYourWay 位于德国，属于欧盟成员国境内，数据从荷兰传输至德国属于欧盟内部数据流\n动，不涉及第三国跨境传输，因此无需开展跨境传输影响评估（TIA，该评估专门针对向第三国传输的合\n规审查）。A（是否最终被选用，与是否需要开展 TIA 的判断标准无关，TIA 应在选定前的尽职调查阶段\n考虑）、C（获取同意，非本案的判断依据）、D（依赖 BCRs，欧盟内部传输本身无需援引任何第三国\n传输机制）均不准确。知识点：跨境传输影响评估（TIA）仅适用于向欧盟/欧洲经济区外第三国的传\n输，欧盟内部传输不适用。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 263,
    question: "According to the European Data Protection Board, data subjects should be made aware of any video\nsurveillance in operation. How should a retail shop operator ensure that data subjects receive all\ninformation required for such a purpose under EU data protection law?",
    options: ["A. The shop operator should post a copy of the manual of the video surveillance system in the shop and on its social media channels.", "B. The shop operator should provide full notice of the intended video surveillance outside the shop, for example with a sign or a stand-up display.", "C. The shop operator should instruct the data protection officer to hand out a comprehensive notice to data subjects every time they enter the shop.", "D. The shop operator should provide the most important information on a clearly readable warning sign to data subjects before they enter the monitored area, and additional mandatory details by other means."],
    correctAnswer: "D",
    explanation: "正确答案 D。EDPB 关于视频监控告知的建议采用“分层告知”思路：在进入监控区域前，以清晰易读的警\n示标志提供最核心的信息（如监控主体、目的等），并通过其他补充渠道（如详细隐私政策链接、张贴\n处所等）提供第 14 条要求的完整详细信息，而非仅张贴设备说明书（A）、仅依赖社交媒体发布（A）、\n要求 DPO 每次现场发放详细通知（C，不现实）或未提供任何现场提示而仅笼统告知（B，仅有笼统外部\n告示但未结合分层补充信息不够完整）。知识点：EDPB 关于 CCTV 监控告知的分层实践建议——现场简\n明标识+补充详细信息渠道。",
    topic: "监管机构",
    verified: "accurate"
  },
  {
    id: 264,
    question: "According to the GDPR, Article 4(14), biometric data is defined as:\n\n\"Personal data resulting from specific technical processing relating to the ___ characteristics of a natural\nperson.\"\n\nWhich term could NOT be placed in the above definition?",
    options: ["A. Physiological.", "B. Physical.", "C. Intellectual.", "D. Behavioral."],
    correctAnswer: "C",
    explanation: "正 确 答 案 C 。 第 4(14) 条 对 “ 生 物 识 别 数 据 ” 的 定 义 表 述 为 ： 源 于 特 定 技 术 处 理 、 与 自 然 人 的 “ 身 体\n（physical）、生理（physiological）或行为（behavioral）特征”相关、能够识别或确认该自然人身份的个\n人数据，并不包含“智力（intellectual）特征”这一表述，该词是干扰项，非定义原文用语。知识点：第\n4(14)条生物识别数据定义的准确措辞——身体、生理、行为三类特征，不含智力特征。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 265,
    question: "Jerry, the Chief Marketing Officer for a sports apparel and trophy company, sells products to schools and\nathletic clubs globally. Recently the company has decided to invest in a new line of customized sports\nequipment. Jerry plans to email his current customer base to offer them a discount on their first purchase\nof such equipment.\n\nJerry tells Kate, the Director of Privacy, about his plan. What is the best guidance Kate can provide to\nJerry?",
    options: ["A. Permit Jerry to carry out his plan on the basis of marketing similar products to existing customers.", "B. Require Jerry to send all current customers a second notice to allow them to opt-in to marketing emails.", "C. Permit Jerry to carry out his marketing plan on the basis of legitimate interest.", "D. Require Jerry to include an option to opt out of marketing emails in the future."],
    correctAnswer: "D",
    explanation: "答案 D 是必须满足的条件，但并不足以单独使计划合法。软退出还要求联系方式在销售或销售磋商中取得、营销自\n身类似产品或服务，并在收集联系方式时就提供退出机会。",
    topic: "GDPR",
    verified: "qualified"
  },
  {
    id: 266,
    question: "A homeowner has installed a motion-detecting surveillance system that films his front door and entryway.\nThe camera does not film any public areas, only areas that are the property of the homeowner. The\nsystem has been declared to the authorities per the homeowner's country law, and a placard indicating the\narea is being video monitored is visible when entering the property.\n\nWhy can the homeowner NOT depend on the household exemption with regards to the processing of the\nvideo images recorded by the surveillance camera system?",
    options: ["A. The surveillance camera system can potentially capture biometric information of the homeowner's family, which would be considered a processing of special categories of personal data.", "B. The homeowner has not specified which security measures are in place as part of the surveillance camera system.", "C. The GDPR specifically excludes surveillance camera images from the household exemption.", "D. The surveillance camera system can potentially film individuals who enter its filming perimeter."],
    correctAnswer: "D",
    explanation: "正确答案 D。第 2(2)(c)条家庭活动豁免仅适用于处理范围严格限于纯粹个人或家庭事务的情形；由于该\n监控摄像头对准的是自家前门和入口区域，客观上会拍摄到任何经过或到访该区域的公众（如邮递员、\n访客、路人），处理范围已超出纯粹私人家庭领域，涉及第三方（非家庭成员）的个人数据处理，因此\n不能完整援引家庭活动豁免（欧洲法院 Ryneš案确立的原则）。A（是否涉及生物识别特殊类别数据，非\n该豁免不适用的核心原因）、B（未说明具体安全措施，与豁免适用与否无关）、C（GDPR 并未“专门排\n除监控摄像头”，而是依据处理范围是否超出纯家庭活动来判断）均不准确。知识点：Ryneš案确立的家\n庭活动豁免例外——监控范围延伸至公共/第三方区域时不再适用该豁免。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 267,
    question: "Which of the following elements does NOT need to be presented to a data subject in order to collect valid\nconsent for the use of cookies?",
    options: ["A. A \"Cookies Settings\" button.", "B. A \"Reject All\" cookies button.", "C. A list of cookies that may be placed.", "D. Information on the purpose of the cookies."],
    correctAnswer: "A",
    explanation: "答案 A 是最佳选项，因为法律不要求按钮必须使用特定名称。不过，有效同意要求拒绝与接受同样容易、目的清\n晰、选择未预勾选；是否必须展示逐项 cookie 名称取决于所提供信息是否足够具体，C 的绝对表述也可能引起争\n议。",
    topic: "ePrivacy指令",
    verified: "qualified"
  },
  {
    id: 268,
    question: "Since blockchain transactions are classified as pseudonymous, are they considered to be within the\nmaterial scope of the GDPR, or outside of it?",
    options: ["A. Outside the material scope of the GDPR, because transactions do not include personal data about data subjects in the European Union.", "B. Outside the material scope of the GDPR, because transactions are for personal or household purposes.", "C. Within the material scope of the GDPR to the extent that transactions include data subjects in the European Union.", "D. Within the material scope of the GDPR but outside of the territorial scope, because blockchains are decentralized."],
    correctAnswer: "C",
    explanation: "正确答案 C。区块链交易记录中的信息（如公钥、交易哈希等）通常被视为假名化数据而非匿名化数\n据，因为在特定条件下仍存在将其与自然人关联的可能性；只要交易涉及欧盟数据主体，这些假名化数\n据仍构成 GDPR 意义上的“个人数据”，落入 GDPR 的实质适用范围（material scope），而非因交易性质\n本身（A，理由表述错误，问题的关键在于是否涉及欧盟数据主体而非交易本身）、个人/家庭用途（B，\n商业性质的区块链交易通常不属于家庭活动豁免范畴）或域外适用问题的混淆（D，去中心化技术架构本\n身不影响 GDPR 域外适用性判断，该判断仍取决于第 3 条标准）而被排除在外。知识点：假名化数据\n（含区块链交易记录）落入 GDPR 实质适用范围的判断标准。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 269,
    question: "Following the United Kingdom's withdrawal from the European Union, what law do companies established\nin the UK and processing the personal data of people in the EU need to adhere to?",
    options: ["A. The Privacy and Electronic Communications Regulations.", "B. The EU General Data Protection Regulation.", "C. The UK General Data Protection Regulation.", "D. The UK Data Protection Act."],
    correctAnswer: "B",
    explanation: "答案 B 仅在英国公司满足 GDPR 第 3(2) 条，例如有意向欧盟境内个人提供商品或服务或监测其在欧盟境内的行为时\n成立。单纯“处理欧盟人士的数据”或数据主体具有欧盟国籍，并不足以触发域外适用。",
    topic: "GDPR",
    verified: "qualified"
  },
  {
    id: 270,
    question: "How can the relationship between the GDPR and the Digital Services Act, the Data Governance Act and\nthe Digital Markets Act most accurately be described?",
    options: ["A. The aforementioned legal acts do not refer to (i.e., do not mention) the GDPR.", "B. The aforementioned legal acts apply without prejudice (i.e., in parallel) to the GDPR.", "C. The aforementioned legal acts change specific provisions (i.e., certain articles) of the GDPR.", "D. The aforementioned legal acts contain some sector-specific exemptions (i.e., only for certain businesses) from the GDPR."],
    correctAnswer: "B",
    explanation: "正确答案 B。《数字服务法》（DSA）、《数据治理法》（DGA）及《数字市场法》（DMA）均在各自\n立法文本中明确声明“不影响”（without prejudice to）GDPR 的适用，即与 GDPR 并行适用、互为补充，\n而非取代或修改 GDPR 具体条款（C）、完全不提及 GDPR（A，实际上均有明确援引和协调条款）或包\n含针对特定行业的 GDPR 豁免（D，这些法律主要规范数字服务/数据治理/市场竞争等领域，未创设专门\n的 GDPR 适用豁免）。知识点：欧盟新兴数字立法（DSA、DGA、DMA）与 GDPR 的并行适用关系\n（without prejudice 条款）。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 271,
    question: "All of the following will be established by the second Network and Information Security Directive (\"NIS2\")\nEXCEPT?",
    options: ["A. Baseline cybersecurity measures that each covered entity must address.", "B. Powers to inspect, audit, or require information from covered organizations.", "C. A common controls framework that every organization must adopt.", "D. A new network for EU member states to cooperate on large-scale breaches."],
    correctAnswer: "C",
    explanation: "正确答案 C。NIS2 指令要求受监管实体落实基线网络安全措施（A）、赋予监管机构检查审计权（B）、\n建立成员国间大规模安全事件协作网络（D，如 CSIRT 网络），但并未强制规定所有受监管组织必须采\n纳统一的“通用控制框架”——具体安全措施的选择和实施方式留有一定弹性空间，只需达到基线安全水平\n要求即可，而非强制套用单一标准化框架。知识点：NIS2 指令的核心要素（基线安全措施、检查权、成\n员国协作网络）及其未强制统一控制框架的弹性设计。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 272,
    question: "According to the Personal Data Protection Commission’s (PDPC) “Guide to basic data anonymization\ntechniques,” recently adopted by the Spanish Data Protection Agency, which of the following is NOT a\nvalid basic anonymization technique?",
    options: ["A. Swapping.", "B. Generalization.", "C. Data Adjustment.", "D. Attribute Suppression."],
    correctAnswer: "C",
    explanation: "正确答案 C。西班牙数据保护局（AEPD）采纳的新加坡 PDPC《基本数据匿名化技术指南》中列举的基\n本匿名化技术包括：数据交换/置换（swapping，A）、泛化（generalization，B）、属性抑制（attribute\nsuppression，D）等，但并未将“数据调整”（Data Adjustment）列为该指南认可的具体技术术语——这是\n虚构或不准确的干扰选项，非该指南中的标准技术名称。知识点：PDPC 匿名化技术指南列举的基本技术\n清单（交换、泛化、属性抑制等）。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 273,
    question: "In the EDPB’s Guidelines 4/2019 on Article 25 Data Protection by Design and by Default, all of the\nfollowing practices follow from the principles relating to the processing of personal data under EU data\nprotection law EXCEPT?",
    options: ["A. Data ownership allocation.", "B. Access control management.", "C. Frequent pseudonymization key rotation.", "D. Error propagation avoidance along the processing chain."],
    correctAnswer: "A",
    explanation: "正确答案 A。（与 Q205 同一知识点）EDPB《4/2019 号指南》（第 25 条设计与默认阶段隐私保护）中体\n现数据保护原则的实践包括访问控制管理（B）、假名化密钥定期轮换（C）、避免处理链条中的错误传\n播（D）等具体技术组织措施，但并未涉及“数据所有权分配”这一概念——欧盟数据保护法框架下不采用\n“数据所有权”这一表述，而是以控制者/处理者角色及数据主体权利体系为核心。知识点：EDPB 指南\n4/2019（第 25 条设计默认隐私）不涉及“数据所有权”概念。",
    topic: "监管机构",
    verified: "accurate"
  },
  {
    id: 274,
    question: "According to the European Data Protection Board, controllers responding to a data subject access request\ncan refuse to provide a copy of personal data under certain conditions. Which of the following is NOT one\n\nof these conditions?",
    options: ["A. If the data subject access request was sent to an employee that is not involved in the processing of such requests.", "B. If there is such a large amount of data that the controller cannot identify the data subject of the request.", "C. If the controller is unable to use end-to-end encrypted emails for responding to such requests.", "D. If the personal data was processed in the past but is no longer at the controller’s disposal at the time of the request."],
    correctAnswer: "C",
    explanation: "答案 C 最明确：不能使用端到端加密邮件不构成拒绝访问权的理由，控制者应提供其他安全交付方式。A、B、D 均\n需结合事实：请求发送至非专门人员通常仍应内部转交；无法识别时应先允许补充信息；数据已不再持有则应如实\n说明，而非任意拒绝。",
    topic: "GDPR",
    verified: "qualified"
  },
  {
    id: 275,
    question: "A high-ranking employee has his laptop bag stolen in a train station. In addition to the laptop, the bag\ncontained the employee’s ID card, confidential company documents (such as financial information and\nminutes of board meetings, including participants and their roles), company payment cards, and\nauthorization tokens.\n\nAs the company's Data Protection Officer, what should be your first action?",
    options: ["A. Inform the appropriate supervisory authority of the breach.", "B. Verify whether the laptop contained personal data and, if so, if it was encrypted.", "C. Inform the meeting participants of the breach and provide them with next steps to be taken.", "D. Request deactivation of the authorization tokens to avoid access to company data, and remotely wipe the laptop."],
    correctAnswer: "B",
    explanation: "答案 B 可视为 DPO 的首要合规评估步骤，但安全团队应同时立即采取 D 所述的遏制措施，例如停用令牌和远程擦\n除。事件响应中的风险核实与技术遏制通常应并行，而非严格串行。",
    topic: "GDPR",
    verified: "qualified"
  },
  {
    id: 276,
    question: "According to the European Data Protection Board, if a controller that is not established in the EU but still\nsubject to the GDPR becomes aware of a personal data breach, which supervisory authority or authorities\nmust be notified?",
    options: ["A. Only the supervisory authority of the EU member state in which the controller's EU representative (pursuant to Article 27) is established.", "B. Only one lead supervisory authority, as a controller benefits from the one-stop shop mechanism under the GDPR’s enforcement regime.", "C. Every supervisory authority of the EU member states where the controller is offering goods or services.", "D. Every supervisory authority for which affected data subjects reside in their EU member state."],
    correctAnswer: "D",
    explanation: "正确答案 D。仅因第 27 条代表位于某成员国，并不会触发一站式机制。未在欧盟设立、仅依据第 3(2) 或 3(3) 条受\nGDPR 约束的控制者发生需报告的数据泄露时，应向每一个受影响数据主体居住于其成员国的监管机构报告。",
    topic: "监管机构",
    verified: "corrected"
  },
  {
    id: 277,
    question: "Which mechanism, introduced by the GDPR as a means of ensuring both compliance and transparency,\nallows for the possibility of personal data transfers to third countries under Article 42?",
    options: ["A. Approved certifications.", "B. Binding corporate rules.", "C. Law enforcement requests.", "D. Standard contractual clauses."],
    correctAnswer: "A",
    explanation: "正确答案 A。（与 Q125 同一知识点重复出现）第 42 条认证机制是 GDPR 新引入的跨境传输保障工具之\n一，通过认证标志/印章使已获认证的接收方可依此进行跨境传输，而非 BCRs、SCCs（二者并非 GDPR\n新创设的机制）或执法请求（与合法传输机制无关）。知识点：第 42 条认证机制作为 GDPR 新设立的跨\n境传输保障工具。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 278,
    question: "A private company has establishments in France, Poland, the United Kingdom and, most prominently,\nGermany, where its headquarters is established. The company offers its services worldwide. Most of the\nservices are designed in Germany and supported in the other establishments. However, one of the\nservices, a Software as a Service (SaaS) application, was defined and implemented by the Polish\nestablishment. It is also supported by the other establishments.\n\nWhat is the lead supervisory authority for the SaaS service?",
    options: ["A. The supervisory authority of Germany at federal level.", "B. The supervisory authority of Germany at regional level.", "C. The supervisory authority of the Republic of Poland.", "D. The supervisory authority of the European Union."],
    correctAnswer: "C",
    explanation: "正确答案 C。主导监管机构的认定核心在于“实际作出处理决策的地点”，该 SaaS 服务由波兰分支机构独\n立定义、开发和实施（即便获得其他分支机构的支持），说明与该特定服务相关的处理决策实际发生在\n波兰，因此波兰监管机构应为该项服务的主导监管机构，而非笼统以公司整体总部所在地（德国，A、\nB）作为统一判断标准，也不存在“欧盟层面统一监管机构”这一机构设置（D，不存在此类超国家层面的\n单一数据保护监管机构，欧盟层面协调机制是 EDPB 而非直接执法机构）。知识点：主导监管机构的认\n定应针对具体处理活动/服务的实际决策地，而非一概以企业整体总部所在地为准。",
    topic: "监管机构",
    verified: "accurate"
  },
  {
    id: 279,
    question: "SCENARIO\nPlease use the following to answer the next question:\n\nGentle Hedgehog Inc. is a privately owned website design agency incorporated in Italy. The company has\nnumerous remote workers in different EU countries. Recently, the management of Gentle Hedgehog\nnoticed a decrease in productivity of their sales team, especially among remote workers. As a result, the\ncompany plans to implement a robust but privacy-friendly remote surveillance system to prevent\nabsenteeism, reward top performers, and ensure the best quality of customer service when sales people\nare interacting with customers.\n\nGentle Hedgehog eventually hires Sauron Eye Inc., a Chinese vendor of employee surveillance software\nwhose European headquarters is in Germany. Sauron Eye s software provides powerful remote-\nmonitoring capabilities, including 24/7 access to computer cameras and microphones, screen captures,\nemails, website history, and keystrokes. Any device can be remotely monitored from a central server that\nis securely installed at Gentle Hedgehog headquarters. The monitoring is invisible by default; however, a\nso-called Transparent Mode, which regularly and conspicuously notifies all users about the monitoring and\nits precise scope, also exists. Additionally, the monitored employees are required to use a built-in\nverification technology involving facial recognition each time they log in.\n\nAll monitoring data, including the facial recognition data, is securely stored in Microsoft Azure cloud\nservers operated by Sauron Eye, which are physically located in France.\n\nBased on the scenario, what are the primary privacy risks of the planned surveillance system?",
    options: ["A. A Chinese vendor and the monitoring of EU-based employees.", "B. Facial recognition data stored in the cloud and lack of encryption.", "C. Excessive scope of monitoring and lack of legitimate purpose for data collection.", "D. Missing E2EE encryption in the monitoring system and unclear data storage duration."],
    correctAnswer: "C",
    explanation: "正确答案 C。该监控系统提供全天候摄像头/麦克风访问、屏幕截图、邮件、网站浏览记录及按键记录等\n极为广泛、侵入性极强的监控能力，远超防范旷工、提升客服质量等既定目的所合理必要的范围，构成\n过度监控（违反数据最小化及比例原则），且部分监控目的（如“奖励优秀员工”）本身也难以充分证成如\n此全面的持续监控具有正当必要性，这是本情节中最核心、最突出的隐私风险，而非仅聚焦供应商国籍\n（A，虽然涉及跨境传输合规，但非最核心隐私风险）、云存储加密与否（B，题目未提供加密状态信\n息，且非监控范围本身的问题）或存储时长模糊（D，同样是次要问题）。知识点：员工监控中的数据最\n小化及比例原则——监控范围与合法目的之间必须具有相称性。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 280,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nGentle Hedgehog Inc. is a privately owned website design agency incorporated in Italy. The company has\nnumerous remote workers in different EU countries. Recently, the management of Gentle Hedgehog\nnoticed a decrease in productivity of their sales team, especially among remote workers. As a result, the\ncompany plans to implement a robust but privacy-friendly remote surveillance system to prevent\nabsenteeism, reward top performers, and ensure the best quality of customer service when sales people\nare interacting with customers.\n\nGentle Hedgehog eventually hires Sauron Eye Inc., a Chinese vendor of employee surveillance software\nwhose European headquarters is in Germany. Sauron Eye s software provides powerful remote-\nmonitoring capabilities, including 24/7 access to computer cameras and microphones, screen captures,\nemails, website history, and keystrokes. Any device can be remotely monitored from a central server that\nis securely installed at Gentle Hedgehog headquarters. The monitoring is invisible by default; however, a\nso-called Transparent Mode, which regularly and conspicuously notifies all users about the monitoring and\nits precise scope, also exists. Additionally, the monitored employees are required to use a built-in\nverification technology involving facial recognition each time they log in.\n\nAll monitoring data, including the facial recognition data, is securely stored in Microsoft Azure cloud\nservers operated by Sauron Eye, which are physically located in France.\n\nUnder what condition could the surveillance system be used on the personal devices of employees?",
    options: ["A. Only if the monitoring system is manufactured by a European vendor storing the monitoring data within the EU.", "B. Only if the employees give valid consent and the monitoring is narrowly limited to their professional tasks.", "C. Only if the cloud that stores the monitoring data is certified by the EDPB as GDPR compliant.", "D. Only if the employer offers an adequate compensation for using the employee’s devices."],
    correctAnswer: "B",
    explanation: "答案 B 只能在极少数情况下成立。雇佣关系中的权力不平衡通常使员工同意难以被视为自由给予；即使是 BYOD，\n也应优先评估必要性、比例性、合法利益或法定义务、工作与私人空间隔离以及 DPIA，而不能仅靠同意。",
    topic: "监管机构",
    verified: "qualified"
  },
  {
    id: 281,
    question: "SCENARIO\nPlease use the following to answer the next question:\n\nGentle Hedgehog Inc. is a privately owned website design agency incorporated in Italy. The company has\nnumerous remote workers in different EU countries. Recently, the management of Gentle Hedgehog\nnoticed a decrease in productivity of their sales team, especially among remote workers. As a result, the\ncompany plans to implement a robust but privacy-friendly remote surveillance system to prevent\nabsenteeism, reward top performers, and ensure the best quality of customer service when sales people\nare interacting with customers.\n\nGentle Hedgehog eventually hires Sauron Eye Inc., a Chinese vendor of employee surveillance software\n\nwhose European headquarters is in Germany. Sauron Eye s software provides powerful remote-\nmonitoring capabilities, including 24/7 access to computer cameras and microphones, screen captures,\nemails, website history, and keystrokes. Any device can be remotely monitored from a central server that\nis securely installed at Gentle Hedgehog headquarters. The monitoring is invisible by default; however, a\nso-called Transparent Mode, which regularly and conspicuously notifies all users about the monitoring and\n\nits precise scope, also exists. Additionally, the monitored employees are required to use a built-in\nverification technology involving facial recognition each time they log in.\n\nAll monitoring data, including the facial recognition data, is securely stored in Microsoft Azure cloud\nservers operated by Sauron Eye, which are physically located in France.\n\nthat\nAfter fixing the privacy problems, how long may Gentle Hedgehog store the monitoring data, assuming\nno valid data erasure request is received?",
    options: ["A. As long as required by the company’s legitimate interests.", "B. As long as a concerned employee does not request erasure of the data.", "C. As long as provided by the EDPB guidelines for remote employee monitoring.", "D. As long as stated in the privacy policy that all employees must follow when processing personal data."],
    correctAnswer: "A",
    explanation: "答案 A 只能理解为“为明确、合法的目的客观必要的最短期间”。企业应预先设定并记录具体留存期限或复核标准；\n不能因为企业笼统声称存在合法利益就无限期保存。",
    topic: "监管机构",
    verified: "qualified"
  },
  {
    id: 282,
    question: "SCENARIO\nPlease use the following to answer the next question:\n\nGentle Hedgehog Inc. is a privately owned website design agency incorporated in Italy. The company has\nnumerous remote workers in different EU countries. Recently, the management of Gentle Hedgehog\nnoticed a decrease in productivity of their sales team, especially among remote workers. As a result, the\ncompany plans to implement a robust but privacy-friendly remote surveillance system to prevent\nabsenteeism, reward top performers, and ensure the best quality of customer service when sales people\nare interacting with customers.\n\nGentle Hedgehog eventually hires Sauron Eye Inc., a Chinese vendor of employee surveillance software\nwhose European headquarters is in Germany. Sauron Eye s software provides powerful remote-\nmonitoring capabilities, including 24/7 access to computer cameras and microphones, screen captures,\n\nemails, website history, and keystrokes. Any device can be remotely monitored from a central server that\nis securely installed at Gentle Hedgehog headquarters. The monitoring is invisible by default; however, a\nso-called Transparent Mode, which regularly and conspicuously notifies all users about the monitoring and\nits precise scope, also exists. Additionally, the monitored employees are required to use a built-in\nverification technology involving facial recognition each time they log in.\n\nAll monitoring data, including the facial recognition data, is securely stored in Microsoft Azure cloud\n\nservers operated by Sauron Eye, which are physically located in France.\n\nWhat is the main problem with the 24/7 camera monitoring?",
    options: ["A. It must not be operated during non-business hours and employee holidays.", "B. It may accidentally film third parties whose consent is required for monitoring.", "C. It has no valid legal basis to be implemented in the context of Gentle Hedgehog’s business.", "D. It must first be approved by the trade union and then granted a license from the national DPA."],
    correctAnswer: "C",
    explanation: "正确答案 C。24/7 全天候摄像头及麦克风监控（含私人时间、非工作场景）的侵入性极高，明显超出预防\n旷工、提升客服质量等既定目的所合理必要的范围，难以找到能够证成如此广泛、持续监控的正当合法\n依据（无论是合法利益的平衡测试还是同意的自愿性均难以满足），这是该监控方案最根本的问题——\n缺乏有效合法依据，而非仅仅是时间限制问题（A）、意外拍摄第三方问题（B，虽也存在但非核心问\n题）或程序性审批缺失问题（D，工会审批和 DPA 许可并非普遍适用的强制前置程序）。知识点：过度\n监控因缺乏与处理目的相称的合法依据而整体不具备合法性。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 283,
    question: "SCENARIO\nPlease use the following to answer the next question:\n\nGentle Hedgehog Inc. is a privately owned website design agency incorporated in Italy. The company has\nnumerous remote workers in different EU countries. Recently, the management of Gentle Hedgehog\n\nnoticed a decrease in productivity of their sales team, especially among remote workers. As a result, the\n\ncompany plans to implement a robust but privacy-friendly remote surveillance system to prevent\nabsenteeism, reward top performers, and ensure the best quality of customer service when sales people\n\nare interacting with customers.\n\nGentle Hedgehog eventually hires Sauron Eye Inc., a Chinese vendor of employee surveillance software\nwhose European headquarters is in Germany. Sauron Eye s software provides powerful remote-\n\nmonitoring capabilities, including 24/7 access to computer cameras and microphones, screen captures,\nemails, website history, and keystrokes. Any device can be remotely monitored from a central server that\nis securely installed at Gentle Hedgehog headquarters. The monitoring is invisible by default; however, a\nso-called Transparent Mode, which regularly and conspicuously notifies all users about the monitoring and\nits precise scope, also exists. Additionally, the monitored employees are required to use a built-in\nverification technology involving facial recognition each time they log in.\n\nAll monitoring data, including the facial recognition data, is securely stored in Microsoft Azure cloud\nservers operated by Sauron Eye, which are physically located in France.\n\nWhat monitoring may be lawfully performed within the scope of Gentle Hedgehog’s business?",
    options: ["A. Everything offered by Sauron Eye's software with the exception of camera and microphone monitoring.", "B. Everything offered by Sauron Eye's software, assuming employees provide daily consent to the monitoring.", "C. Only video calls conducted during business hours and emails that do not contain a “private” or “personal” tag.", "D. Only emails, website browsing history and camera for internal video calls that are expressly marked as monitored."],
    correctAnswer: "D",
    explanation: "正确答案 D。为使监控方案具备合法性，应将监控范围严格限定在与工作直接相关、且经明确标识告知\n的活动范围内（如仅限于内部视频通话、邮件、网站浏览记录，并将监控对象限定为已被清晰标注告知\n“正在被监控”的部分），排除对摄像头/麦克风的全天候、无差别侵入性监控。A（排除摄像头麦克风但保\n留其余全部功能，仍可能范围过广）、B（依赖“每日同意”，同意的自愿性在雇佣关系及重复要求下难以\n成立）、C（限定视频通话及排除标记为私人的邮件，范围仍显宽泛且执行标准模糊）均不如 D 准确体现\n比例原则下的合理监控边界。知识点：合法监控范围的设计——限定于工作相关活动、并配合明确标识\n告知。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 284,
    question: "According to the AI Act, a provider of a high-risk AI system has all of the following obligations EXCEPT?",
    options: ["A. Ensuring users understand how the system mitigates bias", "B. Registering the system in the European AI Board s database.", "C. Providing detailed documentation about the system to the users", "D. Conducting a conformity assessment before placing the system on the market."],
    correctAnswer: "A",
    explanation: "正确答案 A。AI Act 对高风险 AI 系统提供者规定风险管理、数据治理、技术文档和使用说明、合格评定及在欧盟数\n据库登记等义务。B 虽把数据库错误地称为“欧洲 AI 委员会的数据库”，但描述的是实质存在的登记义务；C、D 也\n属于明确义务。法案并未以 A 所述措辞要求提供者保证用户“理解系统如何缓解偏见”；其透明度和说明义务有更具\n体的法定内容。",
    topic: "AI Act",
    verified: "corrected"
  },
  {
    id: 285,
    question: "What is the main purpose of the EU Data Act?",
    options: ["A. To enable the processing and transfer of non-personal data within the EU.", "B. To allow users of connected devices to access data generated by their use.", "C. To facilitate the voluntary sharing of data between individuals and businesses", "D. To regulate individuals’ privacy rights and the processing of their personal data"],
    correctAnswer: "B",
    explanation: "正确答案 B。欧盟《数据法》（Data Act）的核心目标是赋予联网设备（如物联网设备）用户访问和利用\n其使用过程中产生的数据的权利，促进数据访问的公平性，推动数据驱动型创新的普惠共享，而非专门\n规制非个人数据的处理传输（A，这更接近其技术效果而非核心立法目的表述）、个人与企业间数据自愿\n共享的笼统促进（C，表述过于宽泛）或个人隐私权规制（D，隐私权规制是 GDPR 的核心领域，而非数\n据法的主要立法目标）。知识点：欧盟《数据法》赋予联网设备用户数据访问权这一核心立法目的。",
    topic: "Data Act",
    verified: "accurate"
  },
  {
    id: 286,
    question: "Once an organization has conducted an internal investigation to determine the scope of a ransomware\nattack, what is the appropriate next step in the process?",
    options: ["A. Assess the risks associated with the breach and. if necessary, notify affected individuals and regulatory bodies within the relevant timeframes.", "B. Notify law enforcement and consult with legal counsel to understand the implications of the breach and the notification requirements.", "C. Inform all customers and the public via social media platforms to ensure rapid dissemination of relevant information.", "D. Wait for law enforcement to provide guidance on notification procedures before taking any further action."],
    correctAnswer: "A",
    explanation: "正确答案 A。在确定勒索软件攻击的影响范围后，下一步关键行动是评估该事件对数据主体造成的风险\n程度（结合数据敏感性、潜在危害等），并据此判断是否需要在法定时限内通知受影响个人及监管机\n构，这是风险评估驱动合规响应的核心逻辑（B 虽然也是响应流程中的重要环节，但风险评估及依法通知\n这一步骤更直接紧随范围确定之后；C 未经风险评估贸然公开信息可能造成不必要恐慌且不符合审慎响应\n原则；D 消极等待执法机构指示会延误法定通知时限，不符合 GDPR 不得无故拖延的要求）。知识点：\n数据泄露响应流程中风险评估作为承上启下的关键环节。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 287,
    question: "Through a combination of hardware failure and human error, the decryption key for a bank's customer\naccount transaction database has been lost. An investigation has determined that this was not the result of\nhacking or malfeasance, simply an unfortunate combination of circumstances. Which of the following\naccurately indicates the nature of this incident?",
    options: ["A. A data breach has not occurred because the loss was not the result of hacking.", "B. A data breach has not occurred because no data was exposed to any unauthorized individual", "C. A data breach has occurred because the loss of the key has resulted in the data no longer being accessible", "D. A data breach has occurred because the loss of the key has resulted in the loss of confidentiality or integrity of the data"],
    correctAnswer: "C",
    explanation: "正确答案 C。GDPR 第 4(12) 条的个人数据泄露包括意外或非法的毁损、丢失、改变、未经授权披露或访问，不以黑\n客攻击或泄密为必要。EDPB 明确把加密数据的解密密钥永久丢失且无法从备份恢复，列为可用性泄露。",
    topic: "监管机构",
    verified: "corrected"
  },
  {
    id: 288,
    question: "When can the EU-US Data Privacy Framework be used as a valid mechanism to transfer personal data\n\nfrom the European Union to the United States?",
    options: ["A. When the recipient has self-certified under the framework.", "B. When the transfer in question has been certified under the framework.", "C. When the recipient has been certified by a third party under the framework.", "D. When a data transfer assessment has not identified any risks to data subjects."],
    correctAnswer: "A",
    explanation: "正确答案 A。欧盟-美国数据隐私框架（DPF）采用的是企业自我认证机制——美国接收方企业通过向美\n国商务部自我认证承诺遵守 DPF 原则，即可依据欧盟委员会已对 DPF 作出的充分性认定，合法接收来自\n欧盟的个人数据传输，而非需第三方认证（C）、逐笔交易单独认证（B）或以传输风险评估结果作为前\n提 （D ，DPF 本 身作 为充 分 性认 定 机制 不要 求 逐案 风 险评 估） 。 知识 点： 欧 盟-美 国数 据隐 私 框架\n（DPF）的自我认证机制及其作为充分性认定的传输合法化路径。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 289,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nIt has been a tough season for the Spanish Handball League, with acts of violence and racism having\nincreased exponentially during their last few matches.\n\nIn order to address this situation, the Spanish Minister of Sports, in conjunction with the National Handball\nLeague Association, issued an Administrative Order (the \"Act\") obliging all the professional clubs to install\na fingerprint-reading system for accessing some areas of the sports halls, primarily the ones directly\nbehind the goalkeepers. The rest of the areas would retain the current access system, which allows any\nspectators access as long as they hold valid tickets.\n\nThe Act named a selected hardware and software provider, New Digital Finger, Ltd., for creation of the\n\nnew fingerprint system. Additionally, it stipulated that any of the professional clubs that failed to install this\nsystem within a two-year period would face fines under the Act.\n\nThe Murla HB Club was the first to install the new system, renting the New Digital Finger hardware and\nsoftware. Immediately afterwards, the Murla HB Club automatically renewed current supporters’\nsubscriptions, while introducing a new contractual clause requiring supporters to access specific areas of\nthe hall through the new fingerprint reading system installed at the gates.\n\nAfter the first match hosted by the Murla HB Club, a local supporter submitted a complaint to the club and\nto the Spanish Data Protection Authority (the AEPD), claiming that the new access system violates EU\ndata protection laws. Having been notified by the AEPD of the upcoming investigation regarding this\ncomplaint, the Murla HB Club immediately carried out a Data Protection Impact Assessment (DPIA), the\nconclusions of which stated that the new access system did not pose any high risks to data subjects'\nprivacy rights.\n\nAccording to the GDPR, who is the controller for the personal data processed by the fingerprint access\nsystem?",
    options: ["A. Murla HB Club.", "B. New Digital Finger, Ltd.", "C. Spanish Ministry of Sports", "D. National Handball Association."],
    correctAnswer: "A",
    explanation: "正确答案 A。Murla HB 俱乐部作为实际租用、安装该指纹识别系统并自主决定具体使用条款（如与球迷\n续约合同中加入指纹准入条款）的主体，是实际决定该特定处理活动目的和方式的一方，因此是该处理\n的控制者；新数字指纹公司（B）仅作为系统供应商/技术提供方（可能是处理者角色）、体育部及协会\n（C、D）仅是发布强制性法规的行政机构，均不直接决定该俱乐部层面具体处理活动的目的和方式。知\n识点：控制者身份的认定——实际决定具体处理活动目的和方式的主体，而非法规制定者或技术供应\n商。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 290,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nIt has been a tough season for the Spanish Handball League, with acts of violence and racism having\nincreased exponentially during their last few matches.\n\nIn order to address this situation, the Spanish Minister of Sports, in conjunction with the National Handball\nLeague Association, issued an Administrative Order (the \"Act\") obliging all the professional clubs to install\na fingerprint-reading system for accessing some areas of the sports halls, primarily the ones directly\nbehind the goalkeepers. The rest of the areas would retain the current access system, which allows any\nspectators access as long as they hold valid tickets.\n\nThe Act named a selected hardware and software provider, New Digital Finger, Ltd., for creation of the\nnew fingerprint system. Additionally, it stipulated that any of the professional clubs that failed to install this\nsystem within a two-year period would face fines under the Act.\n\nThe Murla HB Club was the first to install the new system, renting the New Digital Finger hardware and\nsoftware. Immediately afterwards, the Murla HB Club automatically renewed current supporters’\nsubscriptions, while introducing a new contractual clause requiring supporters to access specific areas of\nthe hall through the new fingerprint reading system installed at the gates.\n\nAfter the first match hosted by the Murla HB Club, a local supporter submitted a complaint to the club and\nto the Spanish Data Protection Authority (the AEPD), claiming that the new access system violates EU\ndata protection laws. Having been notified by the AEPD of the upcoming investigation regarding this\ncomplaint, the Murla HB Club immediately carried out a Data Protection Impact Assessment (DPIA), the\nconclusions of which stated that the new access system did not pose any high risks to data subjects'\n\nprivacy rights.\n\nWhat is the proper legal base for processing fingerprints at the Murla HB Club gates?",
    options: ["A. The consent provided by the spectators.", "B. The Act, imposing security measures on the spectators.", "C. The contract between the Club and the affected spectators.", "D. The legitimate interest of preventing violent acts from the spectators."],
    correctAnswer: "B",
    explanation: "答案 B 是简化表述。完整分析应同时满足一般个人数据的第 6(1)(c) 条法定义务，以及生物识别特殊类别数据的第\n9(2)(g) 条重大公共利益例外；所依据的成员国法律还必须明确、必要、成比例并提供适当保障。",
    topic: "GDPR",
    verified: "qualified"
  },
  {
    id: 291,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nIt has been a tough season for the Spanish Handball League, with acts of violence and racism having\nincreased exponentially during their last few matches.\n\nIn order to address this situation, the Spanish Minister of Sports, in conjunction with the National Handball\nLeague Association, issued an Administrative Order (the \"Act\") obliging all the professional clubs to install\n\na fingerprint-reading system for accessing some areas of the sports halls, primarily the ones directly\n\nbehind the goalkeepers. The rest of the areas would retain the current access system, which allows any\n\nspectators access as long as they hold valid tickets. 6\nThe Act named a selected hardware and software provider, New Digital Finger, Ltd., for creation of the\nnew fingerprint system. Additionally, it stipulated that any of the professional clubs that failed to install this\nsystem within a two-year period would face fines under the Act.\n\nThe Murla HB Club was the first to install the new system, renting the New Digital Finger hardware and\nsoftware. Immediately afterwards, the Murla HB Club automatically renewed current supporters’\nsubscriptions, while introducing a new contractual clause requiring supporters to access specific areas of\nthe hall through the new fingerprint reading system installed at the gates.\n\nAfter the first match hosted by the Murla HB Club, a local supporter submitted a complaint to the club and\nto the Spanish Data Protection Authority (the AEPD), claiming that the new access system violates EU\ndata protection laws. Having been notified by the AEPD of the upcoming investigation regarding this\ncomplaint, the Murla HB Club immediately carried out a Data Protection Impact Assessment (DPIA), the\nconclusions of which stated that the new access system did not pose any high risks to data subjects'\nprivacy rights.\n\nThe Murla HB Club should have carried out a DPIA before the installation of the new access system AND\nat what other time?",
    options: ["A. After the complaint of the supporter.", "B. Periodically, when new risks were foreseen.", "C. At the end of every match of the season.", "D. After the AEPD notification of the investigation."],
    correctAnswer: "B",
    explanation: "正确答案 B。除在部署新的高风险处理活动前须开展 DPIA 外，第 35(11)条还要求，当处理活动的风险状\n况发生重大变化（如出现新的风险因素）时，控制者应定期重新评估（周期性开展 DPIA），以确保持续\n合规，而非仅在收到投诉（A）或监管机构通知（D）等被动触发情形下才进行评估，也非机械地按每场\n比赛结束这一固定且与风险变化无关的时间点进行（C）。知识点：第 35(11)条 DPIA 的持续性/周期性重\n新评估义务，而非仅一次性评估。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 292,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nIt has been a tough season for the Spanish Handball League, with acts of violence and racism having\nincreased exponentially during their last few matches.\n\nIn order to address this situation, the Spanish Minister of Sports, in conjunction with the National Handball\nLeague Association, issued an Administrative Order (the \"Act\") obliging all the professional clubs to install\na fingerprint-reading system for accessing some areas of the sports halls, primarily the ones directly\nbehind the goalkeepers. The rest of the areas would retain the current access system, which allows any\nspectators access as long as they hold valid tickets.\n\nThe Act named a selected hardware and software provider, New Digital Finger, Ltd., for creation of the\nnew fingerprint system. Additionally, it stipulated that any of the professional clubs that failed to install this\nsystem within a two-year period would face fines under the Act.\n\nThe Murla HB Club was the first to install the new system, renting the New Digital Finger hardware and\n\nsoftware. Immediately afterwards, the Murla HB Club automatically renewed current supporters’\nsubscriptions, while introducing a new contractual clause requiring supporters to access specific areas of\n\nthe hall through the new fingerprint reading system installed at the gates.\n\nAfter the first match hosted by the Murla HB Club, a local supporter submitted a complaint to the club and\n\nto the Spanish Data Protection Authority (the AEPD), claiming that the new access system violates EU 6\ndata protection laws. Having been notified by the AEPD of the upcoming investigation regarding this\ncomplaint, the Murla HB Club immediately carried out a Data Protection Impact Assessment (DPIA), the\nconclusions of which stated that the new access system did not pose any high risks to data subjects'\nprivacy rights.\n\nAccording to Article 83 of the GDPR, what should the AEPD take into account when determining a\npossible fine?",
    options: ["A. That the complainant had adhered to a binding contractual clause.", "B. That the Murla HB Club promptly obeyed the Administrative Order (the Act).", "C. That the Murla HB Club immediately carried out a DPIA after the AEPD notification.", "D. That the number of affected data subjects is limited to the ones accessing a specific area."],
    correctAnswer: "D",
    explanation: "正确答案 D。GDPR 第 83(2)(a) 条明确要求监管机构考虑侵权的性质、严重程度和持续时间，包括处理的性质、范\n围、目的、受影响数据主体人数及其损害程度。事后补做 DPIA 可能在个案中体现合作，但不能替代本应在处理前\n完成的 DPIA，也不是本题最直接的法定裁量因素。",
    topic: "GDPR",
    verified: "corrected"
  },
  {
    id: 293,
    question: "Under the Data Protection Law Enforcement Directive, a government can carry out a covert investigation\ninvolving personal data, as long the investigation is sanctioned by law and constitutes a measure that is\nboth necessary and what?",
    options: ["A. Prudent", "B. Important", "C. Proportionate", "D. DPA-approved"],
    correctAnswer: "C",
    explanation: "正确答案 C。（与 Q135 同一知识点）欧盟执法指令要求政府秘密调查须同时满足法律授权、必要性及比\n例性（proportionate）要求。知识点：执法指令下秘密调查的比例原则要求。",
    topic: "LED执法指令",
    verified: "accurate"
  },
  {
    id: 294,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nGentle Hedgehog Inc. is a privately owned website design agency incorporated in Italy. The company has\nnumerous remote workers in different EU countries. Recently, the management of Gentle Hedgehog\nnoticed a decrease in productivity of their sales team, especially among remote workers. As a result, the\n\ncompany plans to implement a robust but privacy-friendly remote surveillance system to prevent\n\nabsenteeism, reward top performers, and ensure the best quality of customer service when sales people\nare interacting with customers.\n\nGentle Hedgehog eventually hires Sauron Eye Inc., a Chinese vendor of employee surveillance software\n\nwhose European headquarters is in Germany. Sauron Eye s software provides powerful remote-\nmonitoring capabilities, including 24/7 access to computer cameras and microphones, screen captures,\n\nemails, website history, and keystrokes. Any device can be remotely monitored from a central server that\nis securely installed at Gentle Hedgehog headquarters. The monitoring is invisible by default; however, a\nso-called Transparent Mode, which regularly and conspicuously notifies all users about the monitoring and\nits precise scope, also exists. Additionally, the monitored employees are required to use a built-in\nverification technology involving facial recognition each time they log in.\n\nAll monitoring data, including the facial recognition data, is securely stored in Microsoft Azure cloud\nservers operated by Sauron Eye, which are physically located in France.\n\nWhat is the main problem with the 24/7 camera monitoring?",
    options: ["A. It is applicable only to the sales team members who are contractors.", "B. The security measures in place don 't guarantee the confidentiality of the personal data", "C. It has no valid legal basis to be implemented in the context of Gentle Hedgehog's business.", "D. It must first be approved by the trade union and then granted a license from the national DPA."],
    correctAnswer: "C",
    explanation: "正确答案 C。（与 Q282 同一知识点）24/7 全天候摄像头监控因缺乏与既定目的相称的有效合法依据而构\n成主要问题，而非仅适用范围限定于承包商（A）、安全措施保密性不足（B，题目未提及此类安全缺\n陷）或须经工会审批和 DPA 许可（D，非普遍强制程序）。知识点：过度监控缺乏合法依据的核心问\n题。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 295,
    question: "Start-up company MagicAI is developing an AI system that will be part of a medical device that detects\nskin cancer. To take measures against potential bias in its AI system, the IT Team decides to collect data\nabout users' ethnic origin, nationality and gender.\n\nWhich would be the most appropriate legal basis for this processing under the GDPR, Article 9\n(Processing of special categories of personal data)?",
    options: ["A. Processing necessary for scientific or statistical purposes.", "B. Processing necessary for reasons of substantial public interest", "C. Processing necessary for purposes of preventive or occupational medicine", "D. Processing necessary for the defense of legal claims in potential negligence cases"],
    correctAnswer: "B",
    explanation: "正确答案 B。AI Act 第 10(5) 条专门规定：高风险 AI 系统为检测和纠正偏见而处理 GDPR 第 9(1) 条特殊类别数据，\n在严格必要且满足访问限制、删除、记录和安全等保障条件时，属于 GDPR 第 9(2)(g) 条所称重大公共利益。C 所称\n预防或职业医学通常面向医疗照护或职业健康专业活动，并非 IT 团队开展模型偏见测试的最佳依据。",
    topic: "AI Act",
    verified: "corrected"
  },
  {
    id: 296,
    question: "What was the main failing of Convention 108 that led to the creation of the Data Protection Directive\n\n(Directive 95/46/EC)?",
    options: ["A. It did not account for the rapid growth of the Internet.", "B. It did not include protections for sensitive personal data.", "C. It prescribed insufficient penalties for data protection violations. 6", "D. It was implemented in a fragmented manner by a small number of states."],
    correctAnswer: "D",
    explanation: "正确答案 D。（与 Q227 同一知识点）108 号公约因缔约国实施不均衡、呈碎片化状态，促成 95/46/EC 指\n令的制定。知识点：108 号公约实施碎片化催生 95/46/EC 指令。",
    topic: "历史沿革/95-46-EC",
    verified: "accurate"
  },
  {
    id: 297,
    question: "The EU Data Act mitigates the abuse of contract imbalances that impede equitable data sharing by doing\nwhich of the following?",
    options: ["A. Providing a 30 day right of recission, allowing a party to nullify a contract for any reason within 30 days of execution.", "B. Safeguarding enterprises from unjust contract terms imposed by a party wielding a considerably stronger market position.", "C. Requiring the use of standard contract clauses whenever data is shared between parties of substantially disproportionate bargaining power or market position.", "D. Requiring all data protection provisions to be bilateral, prohibiting one party from imposing disproportionate obligations on the other in the event of a data breach."],
    correctAnswer: "B",
    explanation: "正确答案 B。Data Act 通过规定：由处于明显更强谈判地位的一方单方面强加的不公平数据访问、使用或责任条\n款，对另一企业不具约束力，以缓解合同失衡。该法提供模型合同条款和公平性规则，但不要求此类交易一律使用\n标准合同条款，因此 C 错误。",
    topic: "Data Act",
    verified: "corrected"
  },
  {
    id: 298,
    question: "Which of the following is an example of an AI system posing unacceptable risk under the EU AI Act?",
    options: ["A. A system aiding in legal interpretation and application of the law.", "B. A real-time biometric identification system by law enforcement.", "C. A migration, asylum and border control management system.", "D. A system managing and operating a critical infrastructure."],
    correctAnswer: "B",
    explanation: "正确答案 B。欧盟 AI 法案将执法机构在公共场所使用的“实时”生物识别身份识别系统列为具有“不可接受\n风险”（unacceptable risk）的 AI 应用（原则上被禁止，仅有极其有限的例外情形），因其高度侵入性监\n控能力及对基本权利（尤其隐私权、行动自由权）构成的严重威胁；法律解释辅助系统（A）、移民庇护\n边境管理系统（C）、关键基础设施管理系统（D）则通常被归类为“高风险”（high-risk，需满足严格合规\n要求但并非被禁止）而非“不可接受风险”类别。知识点：欧盟 AI 法案风险分级体系——“不可接受风险”\n类别（如公共场所实时生物识别执法系统）与“高风险”类别的区分。",
    topic: "AI Act",
    verified: "accurate"
  },
  {
    id: 299,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nFinancially, it has been a very good year at ARRA Hotels: Their 21 hotels, located in Greece (5), Italy (15)\n\nand Spain (1), have registered their most profitable results ever. To celebrate this achievement, ARRA\n\nHotels’ Human Resources office, based in ARRA’s main Italian establishment, has organized a team event\n\nfor its 420 employees and their families at its hotel in Spain. 6\nUpon arrival at the hotel, each employee and family member is given an electronic wristband at the\nreception desk. The wristband serves a number of functions:\n\nAllows access to the “party zone” of the hotel, and emits a buzz if the user approaches any\nunauthorized areas\nAllows up to three free drinks for each person of legal age, and emits a buzz once this limit has been\nreached\nGrants a unique ID number for participating in the games and contests that have been planned.\n\nAlong with the wristband, each guest receives a QR code that leads to the online privacy notice describing\nthe use of the wristband. The page also contains an unchecked consent checkbox. In the case of\nemployee family members under the age of 16, consent must be given by a parent.\n\nAmong the various activities planned for the event, ARRA Hotels’ HR office has autonomously set up a\nphotocall area, separate from the main event venue, where employees can come and have their pictures\ntaken in traditional carnival costume. The photos will be posted on ARRA Hotels’ main website for general\nmarketing purposes.\n\nOn the night of the event, an employee from one of ARRA’s Greek hotels is displeased with the results of\nthe photos in which he appears. He intends to file a complaint with the relevant supervisory authority in\nregard to the following:\n\nThe lack of any privacy notice in the separate photocall area\nThe unlawful cross-border processing of his personal data\nThe unacceptable aesthetic outcome of his photos\n\nWhich of the following is NOT necessarily considered a factor in identifying whether the processing could\n\nbe considered a “cross-border processing”?",
    options: ["A. The total number of data subjects.", "B. The potential harm for the data subjects.", "C. The collection of personal data of children.", "D. The processing of a wide range of personal data"],
    correctAnswer: "A",
    explanation: "正确答案 A。EDPB 指出，即使处理涉及多个成员国的大量个人，也不必然产生“实质性影响”；仍须结合个案影响判\n断。潜在损害、处理儿童或其他脆弱群体数据，以及处理广泛数据类型，均属于评估实质性影响的相关因素。",
    topic: "监管机构",
    verified: "corrected"
  },
  {
    id: 300,
    question: "Based on the EDPB’s Guidelines on data subject rights - Right of access, and on Article 15 of the GDPR,\nwhich of the following is NOT a requirement that a data controller is required to undertake?",
    options: ["A. Providing copies of personal data to the data subject.", "B. Informing the data subject about the processing of their data.", "C. Registering each access request by the data subject in a publicly available list.", "D. Implementing measures to verify the identity of the data subject making the request."],
    correctAnswer: "C",
    explanation: "正确答案 C。EDPB《访问权指南》及第 15 条要求控制者提供数据副本（A）、告知处理相关信息\n（B）、核实请求人身份（D），但并未要求控制者将每一次访问请求记录并对外“公开”发布——尽管出\n于问责制目的，控制者内部保留处理请求的记录是良好实践，但对外公开这些记录既非法定要求，也可\n能反而侵犯提出请求的数据主体自身的隐私。知识点：第 15 条访问权的法定义务清单及不包含“公开访问\n请求记录”这一要求。",
    topic: "监管机构",
    verified: "accurate"
  },
  {
    id: 301,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nJoe started the Gummy Bear Company in 2000 from his home in Vermont, USA. Today, it is a multi-billion-\ndollar candy company operating in every continent. All of the company’s IT servers are located in Vermont.\nThis year Joe hires his son Ben to join the company and head up Project Big, which is a major marketing\nstrategy to triple gross revenue in just 5 years. Ben graduated with a PhD in computer software from a top\nuniversity. Ben decided to join his father’s company, but is also secretly working on launching a new global\nonline dating website company called Ben Knows Best.\n\nBen is aware that the Gummy Bear Company has millions of customers and believes that many of them\nmight also be interested in finding their perfect match. For Project Big, Ben redesigns the company’s\nonline web portal and requires customers in the European Union and elsewhere to provide additional\npersonal information in order to remain a customer. Project Ben begins collecting data about customers’\nphilosophical beliefs, political opinions and marital status.\n\nIf a customer identifies as single, Ben then copies all of that customer’s personal data onto a separate\ndatabase for Ben Knows Best. Ben believes that he is not doing anything wrong, because he explicitly\nasks each customer to give their consent by requiring them to check a box before accepting their\ninformation. As Project Big is an important project, the company also hires a first-year college student\nnamed Sam, who is studying computer science, to help Ben out.\n\nBen calls out sick and Sam comes across the Ben Knows Best database. Sam is planning on going to\n\nIreland over Spring Beak with 10 of his friends, so he copies all of the customer information of people that\nreside in Ireland so that he and his friends can contact people when they are in Ireland.\n\nJoe also hires his best friend’s daughter, Alice, who just graduated from law school in the U.S., to be the\ncompany’s new General Counsel. Alice has heard about the GDPR, so she does some research on it.\nAlice approaches Joe and informs him that she has drafted up Binding Corporate Rules for everyone in the\ncompany to follow, as it is important for the company to have in place a legal mechanism to transfer data\ninternally from the company’s operations in the European Union to the U.S.\n\nJoe believes that Alice is doing a great job, and informs her that she will also be in-charge of handling a\nmajor lawsuit that has been brought against the company in federal court in the U.S. To prepare for the\nlawsuit, Alice instructs the company’s IT department to make copies of the computer hard drives from the\nentire global sales team, including the European Union, and send everything to her so that she can review\neveryone’s information. Alice believes that Joe will be happy that she did the first level review, as it will\nsave the company a lot of money that would otherwise be paid to its outside law firm.\n\nBen’s collection of additional data from customers created several potential issues for the company, which\nwould most likely require which of the following actions?",
    options: ["A. Performing a data protection impact assessment.", "B. Entering into a data processing agreement.", "C. Establishing a new corporate governance.", "D. Signing a non-disclosure agreement."],
    correctAnswer: "A",
    explanation: "正确答案 A。（与 Q172 同一知识点）新增收集哲学信仰、政治观点等第 9 条特殊类别数据，且用途涉及\n交友撮合等新目的，属于很可能带来高风险的处理，须开展 DPIA 评估。B、C、D 均非最直接对应的合\n规回应措施。知识点：第 35 条 DPIA 触发情形——新增涉及特殊类别数据的高风险处理。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 302,
    question: "A patient advocacy group publishes an email newsletter for subscribers, who create profiles on the\npublisher’s website including expressed areas of interest such as diabetes, narcolepsy, weight\nmanagement and information on clinical trials. The publisher, as data controller, has just received a data\nsubject access request.\n\nWhat is the most appropriate identity verification that the controller may request from the data subject\nbefore complying with the request?",
    options: ["A. The mobile telephone number associated with the data subject.", "B. A copy of a government-issued ID such as a driver’s license of passport.", "C. An access code that was sent by the controller to the email address on file.", "D. A credit card number to which a test authorization of 1 euro will be made for validation."],
    correctAnswer: "C",
    explanation: "正确答案 C。EDPB 身份核实指南倡导“分层”验证方式，即采取与请求敏感程度相称、侵入性最小的核验\n手段；向请求人预留在系统内的邮箱发送验证码，既能确认请求人对该账户的实际控制权，又无需额外\n收集政府身份证件（B，过度收集）、手机号（A，若系统内本未预留则不适用且核验强度较弱）或信用\n卡信息（D，明显超出必要范围且不当涉及支付数据）。知识点：EDPB 分层身份核验原则——采用与请\n求相称、最小侵入性的验证方式（如已注册邮箱验证码）。",
    topic: "监管机构",
    verified: "accurate"
  },
  {
    id: 303,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nIt has been a tough season for the Spanish Handball League, with acts of violence and racism having\nincreased exponentially during their last few matches.\n\nIn order to address this situation, the Spanish Minister of Sports, in conjunction with the National Handball\nLeague Association, issued an Administrative Order (the “Act”) obliging all the professional clubs to install\na fingerprint-reading system for accessing some areas of the sports halls, primarily the ones directly\nbehind the goalkeepers. The rest of the areas would retain the current access system, which allows any\nspectators access as long as they hold valid tickets.\n\nThe Act named a selected hardware and software provider, New Digital Finger, Ltd., for creation of the\nnew fingerprint system. Additionally, it stipulated that any of the professional clubs that failed to install this\nsystem within a two-year period would face fines under the Act.\n\nThe Murla HB Club was the first to install the new system, renting the New Digital Finger hardware and\nsoftware. Immediately afterwards, the Murla HB Club automatically renewed current supporters’\nsubscriptions, while introducing a new contractual clause requiring supporters to access specific areas of\nthe hall through the new fingerprint reading system installed at the gates.\n\nAfter the first match hosted by the Murla HB Club, a local supporter submitted a complaint to the club and\nto the Spanish Data Protection Authority (the AEPD), claiming that the new access system violates EU\ndata protection laws. Having been notified by the AEPD of the upcoming investigation regarding this\ncomplaint, the Murla HB Club immediately carried out a Data Protection Impact Assessment (DPIA), the\nconclusions of which stated that the new access system did not pose any high risks to data subjects'\nprivacy rights.\n\nWhile assessing the possible use of fingerprints for accessing the sport hall, what criteria should NOT be\n\nincluded in the analysis carried out in the DPIA?",
    options: ["A. Necessity.", "B. Suitability.", "C. Confidentiality.", "D. Proportionality."],
    correctAnswer: "B",
    explanation: "正确答案 B。第 35 条及 EDPB 相关指南要求 DPIA 须评估处理的必要性（A）、比例性（D）、以及涉及\n的风险（含机密性保护，C，属于安全风险评估的一部分）等，但“适宜性”（suitability，即某项技术方案\n是否“合适/管用”这一更偏工程实施层面的判断）并非 DPIA 法定评估框架下的专门列明标准用语——\nDPIA 的核心分析框架聚焦必要性与比例性测试，而非泛泛的“适宜性”概念。知识点：第 35 条 DPIA 的核\n心评估要素——必要性与比例性测试，而非笼统的“适宜性”标准。",
    topic: "监管机构",
    verified: "accurate"
  },
  {
    id: 304,
    question: "When cookies of a third party (e.g., a social media, travel, or online banking website) are implemented by\nyour organization’s website, your organization acts as which of the following?",
    options: ["A. A controller.", "B. A processor.", "C. A joint controller.", "D. A sub-processor."],
    correctAnswer: "C",
    explanation: "答案 C 仅适用于网站运营者与第三方共同决定的收集和向第三方传输阶段。根据 Fashion ID 等判例，网站运营者通\n常不对第三方收到数据后的全部后续处理当然承担共同控制者责任。",
    topic: "ePrivacy指令",
    verified: "qualified"
  },
  {
    id: 305,
    question: "Which of the following elements does NOT need to be presented to a data subject in order to collect valid\nconsent for the use of cookies?",
    options: ["A. A “Cookies Settings” button.", "B. Information on the purpose of the cookies.", "C. A “Reject All” cookies button on the first layer.", "D. Unticked boxes representing categories of cookies to be dropped."],
    correctAnswer: "A",
    explanation: "答案 A 为最佳选项，因为 GDPR/ePrivacy 并不规定按钮必须使用“Cookie Settings”这一固定名称。拒绝应与接受同样\n容易，非必要 cookie 不得预先勾选；“Reject All”是否必须位于首层应结合适用监管规则和界面整体是否提供等效、\n即时的拒绝路径判断。",
    topic: "ePrivacy指令",
    verified: "qualified"
  },
  {
    id: 306,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nJoe is the new privacy manager for Who-R-U, a Canadian business that provides DNA analysis. The\n\ncompany is headquartered in Montreal, and all of its employees are located there. The company offers its\nservices to Canadians only: Its website is in English and French, it accepts only Canadian currency, and it\n\nblocks internet traffic from outside of Canada (although this solution doesn’t prevent all non-Canadian\n\ntraffic). It also declines to process orders that request the DNA report to be sent outside of Canada, and\n\nreturns orders that show a non-Canadian return address. 6\nBob, the President of Who-R-U, thinks there is a lot of interest for the product in the EU, and the company\nis exploring a number of plans to expand its customer base.\n\nThe first plan, collegially called We-Track-U, will use an app to collect information about its current\nCanadian customer base. The expansion will allow its Canadian customers to use the app while traveling\nabroad. He suggests that the company use this app to gather location information. If the plan shows\npromise, Bob proposes to use push notifications and text messages to encourage existing customers to\npre-register for an EU version of the service. Bob calls this work plan, We-Text-U. Once the company has\ngathered enough pre-registrations, it will develop EU-specific content and services.\n\nAnother plan is called Customer for Life. The idea is to offer additional services through the company’s\napp, like storage and sharing of DNA information with other applications and medical providers. The\ncompany’s contract says that it can keep customer DNA indefinitely, and use it to offer new services and\nmarket them to customers. It also says that customers agree not to withdraw direct marketing consent.\nPaul, the marketing director, suggests that the company should fully exploit these provisions, and that it\ncan work around customers’ attempts to withdraw consent because the contract invalidates them.\n\nThe final plan is to develop a brand presence in the EU. The company has already begun this process. It is\nin the process of purchasing the naming rights for a building in Germany, which would come with a few\noffices that Who-R-U executives can use while traveling internationally. The office doesn’t include any\ntechnology or infrastructure; rather, it’s simply a room with a desk and some chairs.\n\nOn a recent trip concerning the naming-rights deal, Bob’s laptop is stolen. The laptop held unencrypted\nDNA reports on 5,000 Who-R-U customers, all of whom are residents of Canada. The reports include\ncustomer name, birthdate, ethnicity, racial background, names of relatives, gender, and occasionally\nhealth information.\n\nThe Customer for Life plan may conflict with which GDPR provision?",
    options: ["A. Article 7, which requires that consent be as easy to withdraw as it is to give.", "B. Article 15, which requires that data subjects be given a right of access.", "C. Article 16, which provides data subjects with a right to rectification.", "D. Article 20, which provides data subjects with a right to data portability."],
    correctAnswer: "A",
    explanation: "正确答案 A。（与 Q152 同一知识点）合同条款约定客户“不得撤回直接营销同意”，直接违反第 7(3)条“撤\n回同意须与给予同意同样简便”的强制性要求，此类条款无效。B、C、D 并非本案合同条款直接冲突的条\n款。知识点：第 7(3)条同意可撤回性要求及限制撤回条款的无效性。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 307,
    question: "SCENARIO\n\nPlease use the following to answer the next question:\n\nGentle Hedgehog Inc. is a privately owned website design agency incorporated in Italy. The company has\nnumerous remote workers in different EU countries. Recently, the management of Gentle Hedgehog\nnoticed a decrease in productivity of their sales team, especially among remote workers. As a result, the\ncompany plans to implement a robust but privacy-friendly remote surveillance system to prevent\nabsenteeism, reward top performers, and ensure the best quality of customer service when sales people\nare interacting with customers.\n\nGentle Hedgehog eventually hires Sauron Eye Inc., a Chinese vendor of employee surveillance software\n\nwhose European headquarters is in Germany. Sauron Eye s software provides powerful remote-\nmonitoring capabilities, including 24/7 access to computer cameras and microphones, screen captures,\n\nemails, website history, and keystrokes. Any device can be remotely monitored from a central server that\n\nis securely installed at Gentle Hedgehog headquarters. The monitoring is invisible by default; however, a\n\nso-called Transparent Mode, which regularly and conspicuously notifies all users about the monitoring and\nits precise scope, also exists. Additionally, the monitored employees are required to use a built-in\nverification technology involving facial recognition each time they log in.\n\nAll monitoring data, including the facial recognition data, is securely stored in Microsoft Azure cloud\nservers operated by Sauron Eye, which are physically located in France.\n\nWhat monitoring may lawfully be performed within the scope of Gentle Hedgehog’s business?",
    options: ["A. Everything offered by Sauron Eye s software in relation to activity by sales team contractors.", "B. Everything offered by Sauron Eye’s software, assuming employees provide daily consent to the monitoring.", "C. Only emails, website browsing history, and camera for internal video calls conducted in a non-secure environment.", "D. Only emails, website browsing history, and camera for internal video calls that are expressly marked as monitored."],
    correctAnswer: "D",
    explanation: "正确答案 D。（与 Q283 同一知识点）合法监控范围应限定于与工作直接相关、且经明确标识告知监控状\n态的活动（如内部视频通话、邮件、网站浏览记录），排除全天候无差别的摄像头麦克风侵入性监控。\n知识点：合法监控范围设计——限定于工作相关活动并配合明确标识告知。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 308,
    question: "How did the European Union's (EU) first post-Brexit adequacy decisions for the United Kingdom (UK)\ndiffer\nfrom previous adequacy decisions?",
    options: ["A. It concerns only the private sector.", "B. It expires automatically after four years.", "C. It also applies to the ePrivacy Regulation.", "D. It had to be approved by the EU Parliament."],
    correctAnswer: "B",
    explanation: "答案 B 描述的是 2021 年首份英国充分性决定的历史创新：设置四年日落条款。该决定已于 2025 年 12 月 19 日续\n期，当前有效期至 2031 年 12 月 27 日，因此不能再把“四年后自动失效”理解为当前剩余期限。",
    topic: "ePrivacy指令",
    verified: "qualified"
  },
  {
    id: 309,
    question: "In 2018, why was the Convention for the Protection of Individuals with regard to Automatic Processing of\nPersonal Data (Convention 108) updated to Convention 108+?",
    options: ["A. To respond to challenges posed by the use of new information and communication technologies.", "B. To address inconsistencies in how European countries implemented Convention 108.", "C. To harmonize key definitions and principles with the GDPR.", "D. To open it up for signatories by non-European countries."],
    correctAnswer: "A",
    explanation: "正确答案 A。108 号公约现代化修订为 108+号公约的主要动因，是应对新兴信息通信技术（如大数据、\n人工智能、生物识别技术等）带来的新型隐私和数据保护挑战，确保该框架在数字时代继续保持有效性\n和相关性，而非专门解决各国实施不一致问题（B，此问题更多是催生 95/46 指令的历史原因而非 108+号\n公约现代化的直接动因）、单纯与 GDPR 定义对齐（C，虽然确实吸收借鉴了 GDPR 的部分理念，但这并\n非该修订的“主要”原因表述）或向非欧洲国家开放签署（D，108 号公约本身早已向非欧洲国家开放）。\n知识点：108+号公约现代化修订应对新技术挑战这一核心动因。",
    topic: "历史沿革/95-46-EC",
    verified: "accurate"
  },
  {
    id: 310,
    question: "Which of the following describes a primary effect that the EU Artificial Intelligence Act (AI Act) has on the\nGDPR?",
    options: ["A. The AI Act takes precedence when it comes to AI systems.", "B. The AI Act defines additional requirements related to AI systems.", "C. The AI Act establishes a joint authority for supervision of AI systems.", "D. The AI Act introduces new legal bases for personal data in AI systems."],
    correctAnswer: "B",
    explanation: "正确答案 B。欧盟 AI 法案作为专门规范 AI 系统的新立法，在 GDPR 既有的一般数据保护框架基础上，\n针对 AI 系统新增了特定的合规要求（如高风险 AI 系统的合格评定、透明度、人工监督等），二者并行\n互补，而非 AI 法案取代或优先于 GDPR 适用于 AI 系统的数据保护事项（A，两部法律各有其规制重点，\nGDPR 仍是个人数据处理的基础性法律）、设立联合监管机构（C，AI 法案设有自身的市场监管机构体\n系，并非与数据保护监管机构合并设立联合机构）或创设新的个人数据处理合法依据（D，AI 法案并未\n新增 GDPR 第 6/9 条之外的合法依据类型）。知识点：AI 法案与 GDPR 的互补关系——AI 法案新增 AI\n系统专属合规要求，而非取代 GDPR 的一般数据保护规则。",
    topic: "AI Act",
    verified: "accurate"
  },
  {
    id: 311,
    question: "Which of the following is an initial core requirement of a good incident response plan?",
    options: ["A. A rehearsed training program.", "B. An incident detection tool.", "C. A classification scheme.", "D. A governance model."],
    correctAnswer: "C",
    explanation: "正确答案 C。构建有效事件响应计划的首要基础性要求是建立事件分类体系（按类型、严重程度、影响\n范围对事件进行分级归类），这为后续确定响应优先级、触发相应处置流程提供了结构化框架，是响应\n培训（A）、检测工具（B）、治理模式（D）等后续要素得以有效运作的前提基础。知识点：事件响应\n计划构建中分类体系（classification scheme）作为基础性初始要求的重要性。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 312,
    question: "You're a Data Protection Officer who learns that your company's call center has experienced a brief power\noutage lasting several minutes, which left customers unable to contact the company or access their\nrecords during that time. A responsible team leader calls you to ask if anything needs to be done regarding\nGDPR compliance.\n\nWhat course of action should you advise?",
    options: ["A. Notify the supervisory authority, as the incident constitutes a toss of availability.", "B. Report the incident to select individuals based on the nature of the data that was unable to be accessed.", "C. Launch an investigation to assess whether the current measures ensure an appropriate level of security.", "D. Inform the controller of the incident so that a decision on reporting it to a supervisory authority can be made."],
    correctAnswer: "D",
    explanation: "正确答案 D。GDPR 将泄露风险评估及是否通知监管机构的最终决策权赋予控制者（而非 DPO 本人直接\n决定），DPO 作为顾问角色应及时将事件情况汇报给控制者，由控制者结合具体情况判断该事件是否构\n成需要通知的“个人数据泄露”并决定后续步骤，而非由 DPO 越权直接决定通知监管机构（A）、自行选\n择性通知特定人员（B）或仅聚焦安全措施审查而忽略向控制者汇报决策链条（C，尽管安全审查也是重\n要环节，但并非本题问的“该做什么”这一首要程序性回应）。知识点：数据泄露评估与通知决策权归属于\n控制者，DPO 的角色是及时汇报并提供专业建议。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 313,
    question: "A financial services company based in Europe is evaluating several cloud service providers to help\nprocess customer data. To comply with the GDPR, the company must only consider vendors who do\nwhat?",
    options: ["A. Engage a Data Protection Officer to oversee secure processing of customer data.", "B. Use security controls that have been certified by an external auditor to minimize risk and protect customer data.", "C. Provide sufficient guarantees to implement appropriate technical and organizational measures to 6 protect customer data.", "D. Process data only in jurisdictions deemed adequate by the European Commission to ensure compliance with data transfer requirements."],
    correctAnswer: "C",
    explanation: "正确答案 C。第 28(1)条要求控制者只能委托能够提供“充分保证”（sufficient guarantees）以实施适当技术\n组织措施、确保处理符合 GDPR 要求并保护数据主体权利的处理者，这是选择云服务商的核心法定标\n准，而非仅要求供应商设有 DPO（A，非普遍强制标准）、要求经外部审计认证（B，认证是证明“充分\n保证”的一种方式但非唯一强制途径）或要求仅在充分性认定国家处理数据（D，充分性认定针对跨境传\n输问题，并非选择处理者的一般性前提要求，本地或境内处理同样须满足第 28 条充分保证要求）。知识\n点：第 28(1)条控制者选任处理者须确保其提供“充分保证”这一核心法定标准。",
    topic: "监管机构",
    verified: "accurate"
  },
  {
    id: 314,
    question: "For an organization acting as a data processor, which of the following would NOT be required to be\nincluded in the Record of Processing Activities under Article 30 of the GDPR?",
    options: ["A. Categories of personal data processing.", "B. Name and contact details of the controller.", "C. Retention periods for processed personal data categories.", "D. Technical and organizational security measures implemented."],
    correctAnswer: "C",
    explanation: "正确 答案 C。第 30(2)条要 求处理 者的处 理活动 记录须 包含： 所代表 的每个 控制者 的名称 联系方 式\n（B）、代表其开展的处理类别（A）、跨境传输情况、以及技术组织安全措施的概括性描述（D），但\n并不要求处理者的记录中包含具体数据类别的留存期限——留存期限的确定和记录属于控制者依第 30(1)\n条承担的义务范畴，而非处理者记录内容的强制要素。知识点：第 30(2)条处理者记录内容清单及与控制\n者记录内容（含留存期限）的区分。",
    topic: "GDPR",
    verified: "accurate"
  },
  {
    id: 315,
    question: "According to Guidelines 1/2024 on processing of personal data based on Article 6(1)(f) GDPR, which\nwould NOT be a valid lawful basis for transferring personal data to a third country law enforcement\nauthority?",
    options: ["A. Legitimate interest, where the controller is subject to the third country law.", "B. Vital interest of a natural person, where the conditions are set out in international law.", "C. Legal obligation, where the third country law provides adequate protection for the data.", "D. Public interest, where an international agreement exists and member state law allows it."],
    correctAnswer: "C",
    explanation: "答案 C 正确，但题干引用的指南名称有误。相关现行文件是 EDPB《Guidelines 02/2024 on Article 48 GDPR》（2025\n年最终版），而非关于第 6(1)(f) 条合法利益的 Guidelines 1/2024。第三国法律本身不能构成 GDPR 第 6(1)(c) 条意义\n上的欧盟或成员国法定义务。",
    topic: "监管机构",
    verified: "qualified"
  },
  {
    id: 316,
    question: "An online fashion retailer based in Italy sells high-end clothing, accessories and beauty products to\n\ncustomers around the world. When customers make a purchase on the retailer's website, they can register\n\nto create a user profile, or complete their purchase without doing so. One of the benefits of registration is\nthe storage of payment data, which provides a quick and seamless checkout experience for future\ntransactions.\n\nWhich is the most appropriate legal basis or bases for processing customer information from their user\nprofiles AND from their stored payment data?",
    options: ["A. Consent for both the user profile and the stored payment data.", "B. Legitimate interest for both the user profile and the stored payment data.", "C. Legitimate interest for the user profile; consent for the stored payment data.", "D. Performance of a contract for the user profile; legitimate interest for the stored payment data."],
    correctAnswer: "C",
    explanation: "答案 C 是四项中最合理的组合，但应注意支付卡数据并非 GDPR 第 9 条特殊类别数据。对未来交易保存支付数据属\n于可选便利功能，通常需单独、明确选择；用户资料的合法依据则应根据账户功能逐项判断，可能是合同、合法利\n益或同意，而非一概而论。",
    topic: "GDPR",
    verified: "qualified"
  },
  {
    id: 317,
    question: "SCENARIO\n\nPlease use the following to answer the next questions:\n\nFastHire, an Artificial Intelligence-driven company based in Amsterdam, sells a solution to customers that\nuses machine learning to help filter resumes for open positions.\n\nThis solution catches the attention of Marie, the talent acquisition lead at Fashionista, a clothing company\nwith multiple locations across Europe. Because Fashionista has recently come under fire for discrimination\n\nin its hiring practices, Marie decides to onboard FastHire to assist with selecting sales associate\ncandidates. She believes that this process will be more objective, since FastHire will make accurate\npredictions regarding whether a candidate would make a successful sales associate or not. Marie\nunderstands that she will first have to provide the FastHire solution with resumes so that the algorithm can\nlearn the qualities of successful candidates.\n\nA short time after FastHire's solution has been put into use by Fashionista, Charles and Chloe submit\napplications for a sales associate position in Fashionista's London store. Only Charles is immediately\nnotified that he is not qualified for the job, despite having similar experience as Chloe.\n\nTo deploy FastHire at Fashonista, Marie must be able to do what?",
    options: ["A. Explain the way the machine learning algorithm works to Charles.", "B. Train the machine learning algorithm with historical data from other retailers.", "C. Obtain prior consent of candidates for their resumes being filtered through FastHire's product.", "D. Ask candidates whether they want their resumes reviewed by a talent acquisition lead or through the FastHire product."],
    correctAnswer: "A",
    explanation: "正确答案 A（四项中最接近）。招聘场景通常不能把候选人同意视为部署 AI 筛选的普遍前提，尤其因雇佣关系存在\n权力不平衡；D 也不是 GDPR 规定的固定选择权。若系统作出仅由自动化处理产生、对候选人具有法律或类似重大\n影响的决定，控制者必须以清晰、可理解方式说明所用程序或主要逻辑、意义和预期后果，并提供第 22 条要求的保\n障。A 不意味着必须披露源代码或完整数学公式。",
    topic: "AI Act",
    verified: "corrected"
  },
  {
    id: 318,
    question: "SCENARIO\n\nPlease use the following to answer the next questions:\n\nFastHire, an Artificial Intelligence-driven company based in Amsterdam, sells a solution to customers that\nuses machine learning to help filter resumes for open positions.\n\nThis solution catches the attention of Marie, the talent acquisition lead at Fashionista, a clothing company\nwith multiple locations across Europe. Because Fashionista has recently come under fire for discrimination\nin its hiring practices, Marie decides to onboard FastHire to assist with selecting sales associate\ncandidates. She believes that this process will be more objective, since FastHire will make accurate\npredictions regarding whether a candidate would make a successful sales associate or not. Marie\nunderstands that she will first have to provide the FastHire solution with resumes so that the algorithm can\nlearn the qualities of successful candidates.\n\nA short time after FastHire's solution has been put into use by Fashionista, Charles and Chloe submit\napplications for a sales associate position in Fashionista's London store. Only Charles is immediately\nnotified that he is not qualified for the job, despite having similar experience as Chloe.\n\nIn order to properly train and use the FastHire machine learning algorithm, Marie should do what?",
    options: ["A. Only use dummy data to train the machine learning model.", "B. Ensure that resumes of current sales associates are used to train the machine learning algorithms.", "C. Collaborate with FastHire by sharing candidate information so FastHire can improve the algorithm.", "D. Ensure that a Fashionista talent acquisition member reviews all applicants determined to be unqualified by FastHire."],
    correctAnswer: "D",
    explanation: "答案 D 在系统作出仅由自动化处理产生且对候选人具有法律或类似重大影响的决定时成立。人工复核必须真实、有\n能力改变结果，并由理解模型局限和相关事实的人员进行，不能只是形式化盖章。",
    topic: "AI Act",
    verified: "qualified"
  },
  {
    id: 319,
    question: "What is considered a best practice under the EDPB's Guidelines 3/2022 on Dark patterns in social media\nplatform interfaces?",
    options: ["A. Offer multiple options users can choose from to set up their privacy settings and data protection preferences.", "B. Offer several data protection tools for users to control how their data is processed and how to exercise their rights.", "C. Provide relevant links to additional information, settings, or actions wherever helpful for users to navigate online interfaces.", "D. Provide a variety of content to users so they can answer multiple questions about their personal data and make their privacy choices."],
    correctAnswer: "C",
    explanation: "答案 C 正确。该 EDPB 文件的最 终名称已由早 期的“Dark patterns” 改为 “Deceptive design patterns in social media\nplatform interfaces”；其核心仍是避免操纵性界面，并在需要处提供清晰、易达的信息和操作入口。",
    topic: "监管机构",
    verified: "qualified"
  },
];

export const TOPICS = ["AI Act", "Convention 108/108+", "Data Act", "GDPR", "LED执法指令", "ePrivacy指令", "判例法", "历史沿革/95-46-EC", "监管机构"];
