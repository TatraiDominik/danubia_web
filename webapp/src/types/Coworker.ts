export enum CoWorkerType {
  EDUCATIONAL_SUPPORT = 'educational_support',
  INSTITUTION_LEADERSHIP = 'institution_leadership'
}

export interface Coworker{
  _id?:string,
  type: CoWorkerType,
  occupation?: string,
  fullName:string,
  bio:string,
  locations: string[],
  email:string,
  mobile?:string,
  facebook?:string,
  instagram?:string,
  pfp:string
}
