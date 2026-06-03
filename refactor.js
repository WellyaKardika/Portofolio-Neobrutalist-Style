const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const componentsDir = path.join(srcDir, 'components');
const libDir = path.join(srcDir, 'lib');
const dataDir = path.join(srcDir, 'data');

// 1. Create dirs
['animations', 'sections', 'ui', 'layout'].forEach(d => fs.mkdirSync(path.join(componentsDir, d), { recursive: true }));
fs.mkdirSync(dataDir, { recursive: true });

// 2. Move files
const moves = {
  'Hero.tsx': 'sections/Hero.tsx',
  'About.tsx': 'sections/About.tsx',
  'Projects.tsx': 'sections/Projects.tsx',
  'Timeline.tsx': 'sections/Experience.tsx',
  'Testimonials.tsx': 'sections/Testimonials.tsx',
  'Contact.tsx': 'sections/Contact.tsx',
  'Navbar.tsx': 'ui/Navbar.tsx',
  'ProjectDetailModal.tsx': 'ui/ProjectDetailModal.tsx'
};

for (const [srcFile, destFile] of Object.entries(moves)) {
  const oldPath = path.join(componentsDir, srcFile);
  const newPath = path.join(componentsDir, destFile);
  if (fs.existsSync(oldPath)) {
    fs.renameSync(oldPath, newPath);
  }
}

// 3. Create dummy files
const dummies = {
  'ui/Button.tsx': 'export default function Button() { return <button></button>; }',
  'ui/Card.tsx': 'export default function Card() { return <div></div>; }',
  'ui/Badge.tsx': 'export default function Badge() { return <span></span>; }',
  'ui/ThemeToggle.tsx': 'export default function ThemeToggle() { return <button></button>; }',
  'layout/SectionHeader.tsx': 'export default function SectionHeader() { return <div></div>; }',
  'layout/Container.tsx': 'export default function Container({ children }: { children: React.ReactNode }) { return <div>{children}</div>; }',
  '../lib/gsap.ts': '// GSAP plugin registration\nexport {};'
};

for (const [file, content] of Object.entries(dummies)) {
  const p = path.join(componentsDir, file);
  if (!fs.existsSync(p)) fs.writeFileSync(p, content);
}

// 4. Split data.ts
const dataTsPath = path.join(libDir, 'data.ts');
if (fs.existsSync(dataTsPath)) {
  const dataContent = fs.readFileSync(dataTsPath, 'utf8');
  
  const imports = `import { Project, StatItem, SkillItem, TimelineItem, TestimonialItem } from '@/lib/types';\n\n`;
  
  const projectsData = dataContent.match(/export const PROJECTS[\s\S]*?(?=export const|$)/);
  if(projectsData) fs.writeFileSync(path.join(dataDir, 'projects.ts'), imports + projectsData[0]);

  const statsData = dataContent.match(/export const STATS[\s\S]*?(?=export const|$)/);
  const skillsData = dataContent.match(/export const SKILLS[\s\S]*?(?=export const|$)/);
  if(statsData || skillsData) fs.writeFileSync(path.join(dataDir, 'skills.ts'), imports + (statsData?.[0]||'') + '\n' + (skillsData?.[0]||''));

  const timelineData = dataContent.match(/export const TIMELINE_ITEMS[\s\S]*?(?=export const|$)/);
  if(timelineData) fs.writeFileSync(path.join(dataDir, 'experience.ts'), imports + timelineData[0]);

  const testiData = dataContent.match(/export const TESTIMONIALS[\s\S]*?(?=export const|$)/);
  if(testiData) fs.writeFileSync(path.join(dataDir, 'testimonials.ts'), imports + testiData[0]);
  
  fs.renameSync(dataTsPath, path.join(libDir, 'data.ts.bak'));
}

// 5. Update imports
function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) {
      replaceInDir(p);
    } else if (p.endsWith('.tsx') || p.endsWith('.ts')) {
      let content = fs.readFileSync(p, 'utf8');
      let modified = false;
      
      if (f === 'page.tsx') {
        content = content.replace(/import Timeline from '\.\.\/components\/Timeline';/g, "import Experience from '@/components/sections/Experience';");
        content = content.replace(/<Timeline \/>/g, '<Experience />');
        
        content = content.replace(/import Navbar from '\.\.\/components\/Navbar';/g, "import Navbar from '@/components/ui/Navbar';");
        content = content.replace(/import Hero from '\.\.\/components\/Hero';/g, "import Hero from '@/components/sections/Hero';");
        content = content.replace(/import About from '\.\.\/components\/About';/g, "import About from '@/components/sections/About';");
        content = content.replace(/import Projects from '\.\.\/components\/Projects';/g, "import Projects from '@/components/sections/Projects';");
        content = content.replace(/import Testimonials from '\.\.\/components\/Testimonials';/g, "import Testimonials from '@/components/sections/Testimonials';");
        content = content.replace(/import Contact from '\.\.\/components\/Contact';/g, "import Contact from '@/components/sections/Contact';");
        content = content.replace(/import ProjectDetailModal from '\.\.\/components\/ProjectDetailModal';/g, "import ProjectDetailModal from '@/components/ui/ProjectDetailModal';");
        modified = true;
      }
      
      if (f === 'Experience.tsx') {
        content = content.replace(/export default function Timeline\(/g, "export default function Experience(");
        modified = true;
      }
      
      // Fix types imports
      const newContent = content
        .replace(/['"]\.\.\/\.\.\/lib\/types['"]/g, "'@/lib/types'")
        .replace(/['"]\.\.\/lib\/types['"]/g, "'@/lib/types'")
        .replace(/['"]\.\/types['"]/g, "'@/lib/types'");
      
      if (newContent !== content) { content = newContent; modified = true; }
      
      // Fix data imports
      if (content.includes('../lib/data') || content.includes('../../lib/data')) {
        content = content.replace(/import\s+\{([^}]+)\}\s+from\s+['"]\.\.\/\.\.\/lib\/data['"]/g, "import { $1 } from '@/lib/data'");
        content = content.replace(/import\s+\{([^}]+)\}\s+from\s+['"]\.\.\/lib\/data['"]/g, "import { $1 } from '@/lib/data'");
        
        let importsToAdd = [];
        if (content.includes('PROJECTS')) importsToAdd.push("import { PROJECTS } from '@/data/projects';");
        if (content.includes('STATS') || content.includes('SKILLS')) {
          let req = [];
          if(content.includes('STATS')) req.push('STATS');
          if(content.includes('SKILLS')) req.push('SKILLS');
          importsToAdd.push(`import { ${req.join(', ')} } from '@/data/skills';`);
        }
        if (content.includes('TIMELINE_ITEMS')) importsToAdd.push("import { TIMELINE_ITEMS } from '@/data/experience';");
        if (content.includes('TESTIMONIALS')) importsToAdd.push("import { TESTIMONIALS } from '@/data/testimonials';");
        
        content = content.replace(/import\s+\{([^}]+)\}\s+from\s+['"]@\/lib\/data['"];?\n?/g, importsToAdd.join('\n') + '\n');
        modified = true;
      }
      
      if (modified) {
        fs.writeFileSync(p, content);
      }
    }
  }
}

replaceInDir(path.join(srcDir, 'app'));
replaceInDir(path.join(srcDir, 'components'));
console.log('Restructure complete!');
