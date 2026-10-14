import { Navigate, useParams } from 'react-router-dom'
import caseStudies from '../projects/caseStudies.js'
import '../resources/css/case-study.css'

export default function CaseStudyPage() {
  const { slug } = useParams()
  const CaseStudy = caseStudies[slug]

  if (!CaseStudy) return <Navigate to="../projects" replace />

  return <CaseStudy />
}
