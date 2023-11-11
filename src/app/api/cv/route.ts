import { cvRecords } from '@/data/cv-records'

export async function GET() {
  return Response.json(cvRecords, {
    status: 200,
  })
}
