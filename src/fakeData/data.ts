import type {LastCampaign} from "@/types/campaigns.ts";
import type {LastChapter} from "@/types/chapters.ts";
import type {PlayerSummary} from "@/types/characters.ts";
import type {SpellResume} from "@/types/spell.ts";
import type {LastNote} from "@/types/notes.ts";

export const lastNote: LastNote = {
    id: 1,
    title: "Exploration du donjon",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere metus quis erat lacinia, " +
        "ut dictum mi euismod. Nam justo arcu, pharetra at nibh eu, porta viverra dolor. Nunc velit neque, varius id eros " +
        "eu, sagittis posuere augue. Maecenas euismod quis arcu vitae tincidunt. Nunc placerat fermentum odio vitae " +
        "dictum. Quisque fringilla est non tortor faucibus rhoncus. Aliquam in ullamcorper nulla. In ut mauris vel " +
        "urna ultrices ultrices. ut dictum mi euismod. Nam justo arcu, pharetra at nibh eu, porta viverra dolor. Nunc velit neque, varius id eros" +
        "ut dictum mi euismod. Nam justo arcu, pharetra at nibh eu, porta viverra dolor. Nunc velit neque, varius id eros" +
        "ut dictum mi euismod. Nam justo arcu, pharetra at nibh eu, porta viverra dolor. Nunc velit neque, varius id eros" +
        "ut dictum mi euismod. Nam justo arcu, pharetra at nibh eu, porta viverra dolor. Nunc velit neque, varius id eros" +
        "ut dictum mi euismod. Nam justo arcu, pharetra at nibh eu, porta viverra dolor. Nunc velit neque, varius id eros" +
        "ut dictum mi euismod. Nam justo arcu, pharetra at nibh eu, porta viverra dolor. Nunc velit neque, varius id eros",
}

export const lastSpell: SpellResume = {
    id: 1,
    name: "Boule de feu",
    level: 3,
    castingTime: "1 action",
    duration: "instantanée",
    classes: ["Ensorceleur", "Magicien", "Occultiste"],
    description: "Une éclatante traînée lumineuse est émise de la pointe de votre doigt vers un point de votre choix " +
        "dans la portée du sort, puis s'amplifie dans un rugissement grave jusqu'à éclater en flammes. Chaque " +
        "créature située dans une sphère de 6 mètres de rayon centrée sur le point doit effectuer un jet de " +
        "sauvegarde de Dextérité, subissant 8d6 dégâts de feu en cas d'échec, ou la moitié de ces dégâts en cas de réussite." +
        "Le feu contourne les coins. Il enflamme les objets inflammables qui ne sont pas portés ou transportés.",
}


export const lastNPC = {
    id: 1,
    name: "Uther Gardecorbeau",
    role: "Chef de la porte de Baldur",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi volutpat elit ut tincidunt " +
        "consequat. Phasellus a magna leo. Integer blandit lorem nibh, quis feugiat ante iaculis id. Cras ut orci " +
        "vitae lectus fermentum scelerisque. Nulla et mauris in purus mollis convallis. Proin odio augue, ultricies " +
        "nec risus eget, tempus sagittis nibh. Nullam nibh libero, rutrum ac aliquet at, blandit at lacus. Phasellus " +
        "et risus risus. Fusce pulvinar a nisl a pretium. Fusce at diam ac arcu sollicitudin cursus ut ut sapien. " +
        "Duis ac tristique ligula. Suspendisse ipsum justo, eleifend nec pulvinar in, gravida ac sapien. Nunc a " +
        "velit non lorem consequat maximus eu et eros." +
        "Nunc quis mollis diam, et rutrum libero. Suspendisse accumsan neque a accumsan ultrices. Aliquam pretium " +
        "faucibus sem, a bibendum ipsum pellentesque a. Fusce vel justo a massa vulputate suscipit. Donec pellentesque " +
        "elementum ligula, nec luctus ante tincidunt ac. Duis lorem dui, condimentum ut volutpat eget, accumsan sed " +
        "elit. Vestibulum lacinia non mauris vel pretium. Curabitur auctor dolor eget neque faucibus, id tincidunt " +
        "tortor ullamcorper.",
}

export const character = {
    characterIcon: "https://docs.material-tailwind.com/img/face-3.jpg",
    characterName: "Guy",
    characterClass: "Mage",
    characterRace: "Haut-Elfe",
    characterLevel: 4,
    characterCurrentHealth: 14,
    characterMaxHealth: 20,
    characterInitiative: 2,
    characterArmor: 12,
    characterInspirations: 1,
    characterStats: {
        strength: 12,
        dexterity: 11,
        constitution: 10,
        intelligence: 14,
        wisdom: 15,
        charisma: 18,
    },
    characterStatsProficiencies: ["CHARISMA", "WISDOM"],
    characterDefenses: ["feu", "glace"],
    characterVulnerabilities: ["électrique", "contondant"],
    characterImmunities: ["perçant", "tranchant"],
    characterLanguages: ["commun", "elfe", "nain", "infernal"],
}

export const lastCampaign: LastCampaign = {
    id: 1,
    title: "Descente en Avernes",
};

export const lastChapter: LastChapter = {
    id: 1,
    title: "Le Culte des Trois Morts",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere metus quis erat lacinia, " +
        "ut dictum mi euismod. Nam justo arcu, pharetra at nibh eu, porta viverra dolor. Nunc velit neque, varius id eros " +
        "eu, sagittis posuere augue. Maecenas euismod quis arcu vitae tincidunt. Nunc placerat fermentum odio vitae " +
        "dictum. Quisque fringilla est non tortor faucibus rhoncus. Aliquam in ullamcorper nulla. In ut mauris vel " +
        "urna ultrices ultrices.",
};

export const charactersData: PlayerSummary[] = [
    {
        playerId: 1,
        playerName: "Jean-Christophain de la table basse",
        playerClass: "Mage",
        playerRace: "Haut-Elfe",
        playerLevel: 2,
        playerCurrentHP: 15,
        playerMaxHP: 24,
        playerIcon: "https://docs.material-tailwind.com/img/face-2.jpg",
    },
    {
        playerId: 2,
        playerName: "Annick",
        playerClass: "Druidesse",
        playerRace: "Elfe des bois",
        playerLevel: 2,
        playerCurrentHP: 2,
        playerMaxHP: 30,
        playerIcon: "https://docs.material-tailwind.com/img/face-1.jpg",
    },
    {
        playerId: 3,
        playerName: "Jean-Pierre",
        playerClass: "Barde",
        playerRace: "Tieffelin",
        playerLevel: 2,
        playerCurrentHP: 8,
        playerMaxHP: 12,
        playerIcon: "https://docs.material-tailwind.com/img/face-3.jpg",
    },
    {
        playerId: 4,
        playerName: "Richard McGlutan",
        playerClass: "Barbare",
        playerRace: "Demi-Elfe",
        playerLevel: 2,
        playerCurrentHP: 21,
        playerMaxHP: 30,
        playerIcon: "https://docs.material-tailwind.com/img/face-4.jpg",
    },
]

export const campaignData = {
    id: 1,
    title: "Descente en Avernes",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lectus turpis, fringilla sit amet " +
        "auctor in, suscipit quis risus. Nullam iaculis porttitor pretium. Maecenas eget nibh maximus, pretium massa " +
        "a, auctor tortor. Curabitur ultrices dui felis, non mattis ipsum fermentum eget. Nunc laoreet elit nibh, at " +
        "venenatis lorem vehicula ac. Nam tempus sagittis ante vel laoreet. Cras id leo euismod, eleifend urna eu, " +
        "eleifend magna. Etiam leo mauris, ornare id neque et, pellentesque feugiat erat.\n" +
        "\n" +
        "Etiam molestie sit amet nulla id sollicitudin. Nunc aliquam leo non dolor viverra, non lacinia magna " +
        "fringilla. Phasellus sed gravida urna, id iaculis lacus. Nullam in erat massa. Integer in tellus eget ligula " +
        "pharetra viverra eu eu ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus " +
        "mus. Aliquam posuere nibh quis libero rhoncus, eget efficitur lacus finibus. In odio tortor, aliquam fermentum " +
        "erat vel, viverra commodo odio. Sed libero turpis, vehicula eu metus non, bibendum pellentesque dolor. Nunc " +
        "vitae ullamcorper turpis. Etiam nec neque et nibh gravida mollis sed vitae mi. Integer molestie, felis et " +
        "dignissim lacinia, ex quam faucibus est, nec semper erat felis in augue. Quisque ut commodo dolor, in cursus " +
        "nibh. Praesent interdum euismod arcu quis ornare. Donec ullamcorper suscipit libero, in interdum tortor " +
        "ultrices quis. Nunc sit amet odio id sapien vulputate imperdiet.",
    chapters: [
        {
            id: 1,
            title: "Début de l'aventure",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lectus turpis, fringilla " +
                "sit amet auctor in, suscipit quis risus. Nullam iaculis porttitor pretium. Maecenas eget nibh maximus, " +
                "pretium massa a, auctor tortor. Curabitur ultrices dui felis, non mattis ipsum fermentum eget. Nunc laoreet " +
                "elit nibh, at venenatis lorem vehicula ac. Nam tempus sagittis ante vel laoreet. Cras id leo euismod, " +
                "eleifend urna eu, eleifend magna. Etiam leo mauris, ornare id neque et, pellentesque feugiat erat."
        },
        {
            id: 2,
            title: "Début de l'aventure",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lectus turpis, fringilla " +
                "sit amet auctor in, suscipit quis risus. Nullam iaculis porttitor pretium. Maecenas eget nibh maximus, " +
                "pretium massa a, auctor tortor. Curabitur ultrices dui felis, non mattis ipsum fermentum eget. Nunc laoreet " +
                "elit nibh, at venenatis lorem vehicula ac. Nam tempus sagittis ante vel laoreet. Cras id leo euismod, " +
                "eleifend urna eu, eleifend magna. Etiam leo mauris, ornare id neque et, pellentesque feugiat erat."
        },
        {
            id: 3,
            title: "Début de l'aventure",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lectus turpis, fringilla " +
                "sit amet auctor in, suscipit quis risus. Nullam iaculis porttitor pretium. Maecenas eget nibh maximus, " +
                "pretium massa a, auctor tortor. Curabitur ultrices dui felis, non mattis ipsum fermentum eget. Nunc laoreet " +
                "elit nibh, at venenatis lorem vehicula ac. Nam tempus sagittis ante vel laoreet. Cras id leo euismod, " +
                "eleifend urna eu, eleifend magna. Etiam leo mauris, ornare id neque et, pellentesque feugiat erat."
        },
        {
            id: 4,
            title: "Début de l'aventure",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lectus turpis, fringilla " +
                "sit amet auctor in, suscipit quis risus. Nullam iaculis porttitor pretium. Maecenas eget nibh maximus, " +
                "pretium massa a, auctor tortor. Curabitur ultrices dui felis, non mattis ipsum fermentum eget. Nunc laoreet " +
                "elit nibh, at venenatis lorem vehicula ac. Nam tempus sagittis ante vel laoreet. Cras id leo euismod, " +
                "eleifend urna eu, eleifend magna. Etiam leo mauris, ornare id neque et, pellentesque feugiat erat."
        },
        {
            id: 5,
            title: "Début de l'aventure",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lectus turpis, fringilla " +
                "sit amet auctor in, suscipit quis risus. Nullam iaculis porttitor pretium. Maecenas eget nibh maximus, " +
                "pretium massa a, auctor tortor. Curabitur ultrices dui felis, non mattis ipsum fermentum eget. Nunc laoreet " +
                "elit nibh, at venenatis lorem vehicula ac. Nam tempus sagittis ante vel laoreet. Cras id leo euismod, " +
                "eleifend urna eu, eleifend magna. Etiam leo mauris, ornare id neque et, pellentesque feugiat erat."
        },
        {
            id: 6,
            title: "Début de l'aventure c'est le chapitre 6",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lectus turpis, fringilla " +
                "sit amet auctor in, suscipit quis risus. Nullam iaculis porttitor pretium. Maecenas eget nibh maximus, " +
                "pretium massa a, auctor tortor. Curabitur ultrices dui felis, non mattis ipsum fermentum eget. Nunc laoreet " +
                "elit nibh, at venenatis lorem vehicula ac. Nam tempus sagittis ante vel laoreet. Cras id leo euismod, " +
                "eleifend urna eu, eleifend magna. Etiam leo mauris, ornare id neque et, pellentesque feugiat erat."
        },
        {
            id: 7,
            title: "Début de l'aventure mais en même temps le milieu",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lectus turpis, fringilla " +
                "sit amet auctor in, suscipit quis risus. Nullam iaculis porttitor pretium. Maecenas eget nibh maximus, " +
                "pretium massa a, auctor tortor. Curabitur ultrices dui felis, non mattis ipsum fermentum eget. Nunc laoreet " +
                "elit nibh, at venenatis lorem vehicula ac. Nam tempus sagittis ante vel laoreet. Cras id leo euismod, " +
                "eleifend urna eu, eleifend magna. Etiam leo mauris, ornare id neque et, pellentesque feugiat erat."
        },
        {
            id: 8,
            title: "Début de l'aventure incroyable du cul",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lectus turpis, fringilla " +
                "sit amet auctor in, suscipit quis risus. Nullam iaculis porttitor pretium. Maecenas eget nibh maximus, " +
                "pretium massa a, auctor tortor. Curabitur ultrices dui felis, non mattis ipsum fermentum eget. Nunc laoreet " +
                "elit nibh, at venenatis lorem vehicula ac. Nam tempus sagittis ante vel laoreet. Cras id leo euismod, " +
                "eleifend urna eu, eleifend magna. Etiam leo mauris, ornare id neque et, pellentesque feugiat erat."
        }
    ],
    characters: [
        {
            playerId: 1,
            playerName: "Jean-Christophain de la table basse",
            playerClass: "Mage",
            playerRace: "Haut-Elfe",
            playerLevel: 2,
            playerCurrentHP: 15,
            playerMaxHP: 24,
            playerIcon: "https://docs.material-tailwind.com/img/face-2.jpg",
        },
        {
            playerId: 2,
            playerName: "Annick",
            playerClass: "Druidesse",
            playerRace: "Elfe des bois",
            playerLevel: 2,
            playerCurrentHP: 2,
            playerMaxHP: 30,
            playerIcon: "https://docs.material-tailwind.com/img/face-1.jpg",
        },
        {
            playerId: 3,
            playerName: "Jean-Pierre",
            playerClass: "Barde",
            playerRace: "Tieffelin",
            playerLevel: 2,
            playerCurrentHP: 8,
            playerMaxHP: 12,
            playerIcon: "https://docs.material-tailwind.com/img/face-3.jpg",
        },
        {
            playerId: 4,
            playerName: "Richard McGlutan",
            playerClass: "Barbare",
            playerRace: "Demi-Elfe",
            playerLevel: 2,
            playerCurrentHP: 21,
            playerMaxHP: 30,
            playerIcon: "https://docs.material-tailwind.com/img/face-4.jpg",
        },
    ],
    notes: [
        {
            id: 1,
            title: "Note de session : 12/10/2024",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lectus turpis, fringilla " +
                "sit amet auctor in, suscipit quis risus. Nullam iaculis porttitor pretium. Maecenas eget nibh maximus, " +
                "pretium massa a, auctor tortor. Curabitur ultrices dui felis, non mattis ipsum fermentum eget. Nunc laoreet " +
                "elit nibh, at venenatis lorem vehicula ac. Nam tempus sagittis ante vel laoreet. Cras id leo euismod, " +
                "eleifend urna eu, eleifend magna. Etiam leo mauris, ornare id neque et, pellentesque feugiat erat.",
            updatedAt: "24/07/2025"
        },
        {
            id: 2,
            title: "Note de session : 18/10/2024",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lectus turpis, fringilla " +
                "sit amet auctor in, suscipit quis risus. Nullam iaculis porttitor pretium. Maecenas eget nibh maximus, " +
                "pretium massa a, auctor tortor. Curabitur ultrices dui felis, non mattis ipsum fermentum eget. Nunc laoreet " +
                "elit nibh, at venenatis lorem vehicula ac. Nam tempus sagittis ante vel laoreet. Cras id leo euismod, " +
                "eleifend urna eu, eleifend magna. Etiam leo mauris, ornare id neque et, pellentesque feugiat erat.",
            updatedAt: "25/07/2025"
        },
        {
            id: 3,
            title: "Note de session : 24/10/2024",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lectus turpis, fringilla " +
                "sit amet auctor in, suscipit quis risus. Nullam iaculis porttitor pretium. Maecenas eget nibh maximus, " +
                "pretium massa a, auctor tortor. Curabitur ultrices dui felis, non mattis ipsum fermentum eget. Nunc laoreet " +
                "elit nibh, at venenatis lorem vehicula ac. Nam tempus sagittis ante vel laoreet. Cras id leo euismod, " +
                "eleifend urna eu, eleifend magna. Etiam leo mauris, ornare id neque et, pellentesque feugiat erat.",
            updatedAt: "26/07/2025"
        },
    ]
}
