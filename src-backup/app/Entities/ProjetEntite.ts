import { Acteur } from "./acteur"
import { Technologie } from "./technologie"

export class ProjetEntite {
    titre: string = ""
    img: string = ""
    description: string = ""
    detail_description: string = ""
    technologies: Technologie[] = []
    acteurs: Acteur[] = []
} 