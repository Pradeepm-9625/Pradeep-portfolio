import myticket from '../assets/png/myticket.png';
import AQI from '../assets/png/aql.png';
import yadara from '../assets/png/yadara.png';
// NCOG image removed (not used)

export const projectsData = [
    {
        id: 1,
        projectName: 'Bizfi ',
        projectDesc: 'Performed end-to-end testing, identifying and resolving critical UI/UX issues before production release, and created and maintained detailed bug reports in JIRA, reducing defect leakage by 30%.',
        tags: ['React', 'Node','Postgres'],
        image: myticket
    },
    {
        id: 2,
        projectName: "First Class data ",
        projectDesc: 'Designed and executed test cases for a web-based application, ensuring functional accuracy and 98% test coverage, and conducted cross-browser testing to ensure compatibility across Chrome, Firefox, Edge, and Safari.',
        tags: ['React', 'Node','MySql'],
        image:  AQI
    },
    {
        id: 3,
        projectName: 'RemoteCom - SCOUT',
        projectDesc: 'Designed and developed automation test cases to reduce manual efforts and integrated them with Jira for continuous tracking. Conducted smoke, system, and happy path tests across Dev, Staging, and Pre-prod environments. Executed over 200 manual test cases, documented findings using a test management system, and submitted detailed reports via Jira to ensure effective issue resolution. Played a key role in 12 successful product releases with zero rollbacks, maintaining a crash rate of less than 0.1% by adhering strictly to quality benchmarks and testing schedules.',
        tags: ['Next', 'Node','Postgres'],
        image: yadara
    },
    // {
    //     id: 4,
    //     projectName: 'NCOG',
    //     projectDesc: 'NCOG is a blockchain project focused on providing decentralized email hosting services leveraging Web3 technologies. It aims to offer users email services that are resistant to censorship and centralized control',
    //     tags: ['React', 'Ether', 'Solidity'],
    //     image: NCOG
    // },
    
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/