export type Athlete = {
  id: number,
  fullName: string,
  kt: string,
  birthyear: number,
  gender: number,
  country: string,
  thorId: number,
  lastCompeted: Date,
  club: Club
  membership: Membership[]
}
