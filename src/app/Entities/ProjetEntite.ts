import { Acteur } from "./Acteur"
import { Technologie } from "./Technologie"

export class ProjetEntite {
    id: number = -1
    titre: string = ""
    img: string = ""
    description: string = ""
    detail_description: string = ""
    technologies: Technologie[] = []
    acteurs: Acteur[] = []
} 