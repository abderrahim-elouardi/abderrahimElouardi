import { Acteur } from "./Acteur"
import { Technologie } from "./Technologie"

export class ProjetEntite {
    id: number = -1
    titre: string = ""
    titre_arabe: string = ""
    titre_anglais: string = ""
    img: string = ""
    description: string = ""
    description_anglais: string = ""
    description_arabe: string = ""
    detail_description: string = ""
    technologies: Technologie[] = []
    acteurs: Acteur[] = []
    link_detail: string = ""
} 