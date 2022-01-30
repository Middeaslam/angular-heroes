import { Mission } from "./Mission";

export interface Hero {
  id: string;
  name: string;
  alias: string;
  shortBio: string;
  missions: Mission[]
}
