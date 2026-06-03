import { PROJECTS } from '@/data/projects';
import ProjectDetailClient from './ProjectDetailClient';

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id,
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ProjectDetailPage({ params }: PageProps) {
  return <ProjectDetailClient params={params} />;
}
