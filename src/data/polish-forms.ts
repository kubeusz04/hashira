import type { Form } from "./forms";

export const polishForms: Form[] = [
  {
    number: 1,
    name: "Piast",
    title: "First Spark",
    role: "Swift attack",
    description:
      "A forceful forward step drives one lightning-fast diagonal cut. The blade leaves the trail of an igniting spark. This is the fastest and most economical of the style’s basic techniques.",
    heritage:
      "The Piasts were Poland’s first historical ruling dynasty. Mieszko I’s baptism in 966 symbolizes the beginnings of Polish statehood: the first spark from which the other forms take their fire.",
  },
  {
    number: 2,
    name: "Wawel Dragon",
    title: "Blazing Maw",
    role: "Guard-breaking cut",
    description:
      "Kuba lowers his stance, then unleashes a powerful rising cut. Flames unfurl behind the blade into the shape of a dragon’s opening jaws, tearing through the opponent’s guard.",
    heritage:
      "The Wawel Dragon belongs to Kraków’s legends and appears in medieval chronicles. Its fiery maw gives a familiar Polish monster a new silhouette in a swordsman’s battle against demons.",
  },
  {
    number: 3,
    name: "St. Mary’s Trumpet",
    title: "Broken Note",
    role: "Feint & reversal",
    description:
      "An unmistakable, sweeping wind-up stops completely. As the demon reacts to the promised blow, a short, unexpected cut comes from the opposite direction. The interruption is the attack’s true beginning.",
    heritage:
      "Kraków’s trumpet call ends abruptly. Legend tells of a trumpeter struck by an arrow while warning the city of danger. The form turns that broken melody into a sudden break in the rhythm of a fight.",
  },
  {
    number: 4,
    name: "Grunwald",
    title: "Crossing Blades",
    role: "Successive cuts",
    description:
      "Two consecutive cuts trace a blazing X. The first forces the enemy’s weapon outside its defensive line; the second strikes through the opening. Both cuts are performed with a single sabre.",
    heritage:
      "The Polish–Lithuanian victory at Grunwald in 1410 inspires this form. Its intersecting cuts recall the two swords presented to Władysław Jagiełło and Vytautas before the battle.",
  },
  {
    number: 5,
    name: "Sarmatian Sabre",
    title: "Crimson Crescent",
    role: "Rotational swordwork",
    description:
      "A turn of the wrist transforms a short parry into a broad semicircular cut. A fluid rotation of the hips sends a second blow in the opposite direction, leaving two overlapping crescents of fire.",
    heritage:
      "The sabre became an enduring symbol of Polish nobility and Sarmatian culture. These fluid arcs mark Polish Breathing’s clearest departure from classical Flame Breathing, drawing directly on Polish swordsmanship.",
  },
  {
    number: 6,
    name: "Winged Hussars",
    title: "Heaven-Piercing Charge",
    role: "Explosive charge",
    description:
      "Leaning forward, Kuba accelerates violently along a straight line. At the last moment, a powerful thrust carries that momentum through the demon’s defense. Great wings of flame open behind his shoulders.",
    heritage:
      "The winged hussars broke enemy formations through speed, equipment, and discipline. Kuba brings the concentrated force of their cavalry charge into a duel fought with a sabre.",
  },
  {
    number: 7,
    name: "Vienna",
    title: "Descending Victory",
    role: "Attack from above",
    description:
      "A high leap or an elevated position becomes the starting point for a descending, two-handed cut. Where the sixth form concentrates horizontal momentum, the seventh commits its strength to a vertical strike.",
    heritage:
      "At the relief of Vienna in 1683, the allied armies commanded by Jan III Sobieski struck the Ottoman besiegers. The Polish advance from the heights of the Vienna Woods inspires a technique built around the advantage of elevation.",
  },
  {
    number: 8,
    name: "May Third",
    title: "Three Pillars of Flame",
    role: "Defense & counterattack",
    description:
      "Three movements follow without a break: deflect the incoming attack, close the exposed space to protect the swordsman, then answer with a counter-cut. Each stage supports the next in one uninterrupted rhythm.",
    heritage:
      "The Constitution of May 3, 1791 established a division between legislative, executive, and judicial power. The form’s three movements echo those cooperating pillars: a stable whole built from distinct responsibilities.",
  },
  {
    number: 9,
    name: "Kościuszko",
    title: "Scythe of Rebellion",
    role: "Break the guard",
    description:
      "From a low stance, a wide, sweeping cut turns sharply upward. Its scythe-like path can unbalance the opponent or force the neck into the open, while remaining a functional sabre technique.",
    heritage:
      "The kosynierzy—peasant soldiers armed with war scythes—played an important role in the Kościuszko Uprising of 1794. Their weapons and determination inspire this rising arc.",
  },
  {
    number: 10,
    name: "Mazurka",
    title: "Dance of Crimson Sparks",
    role: "Unpredictable rhythm",
    description:
      "Kuba moves in triple time: a measured first step, a sudden acceleration on the second, and an unexpected cut on the third. He can then shift the accent, striking on the second step before the enemy can settle into his rhythm.",
    heritage:
      "Polish mazurka dances use triple meter and shifting accents, a tradition carried into Frédéric Chopin’s compositions. This form wins through rhythm and timing rather than sheer force.",
  },
  {
    number: 11,
    name: "January Uprising",
    title: "Hidden Embers",
    role: "Hit & withdraw",
    description:
      "Movement narrows to a low, economical stance. A quick attack from the flank is followed by an immediate retreat. Further strikes arrive from changing directions before the opponent can locate the swordsman.",
    heritage:
      "The January Uprising of 1863–1864 relied on small, mobile units and guerrilla warfare. The form carries that emphasis on surprise and survival into the duel, abandoning prolonged open confrontation.",
  },
  {
    number: 12,
    name: "White Eagle",
    title: "Rebirth from Ashes",
    role: "The final form",
    description:
      "The most powerful form of Polish Breathing unfolds in three phases. A flame that refuses to disappear gathers itself for one final ascent.",
    heritage:
      "Poland regained independence in 1918 after 123 years of partitions. The white eagle recalls the Polish coat of arms; rising from ashes becomes a metaphor for rebuilding a country and refusing to let its identity vanish.",
    limitation:
      "The form consumes almost all of the swordsman’s remaining physical reserves. It does not restore his strength. If the final attack fails to end the fight, his muscles may give out, leaving him defenseless.",
  },
];

export const finalPhases = [
  {
    name: "Ashes",
    text: "The pace drops sharply. Kuba assumes an apparently exhausted stance and reduces every visible movement, inviting the opponent to commit.",
  },
  {
    name: "Embers",
    text: "As the enemy attacks, he seizes the initiative with a sequence of short evasions and lightning-fast cuts.",
  },
  {
    name: "Rebirth",
    text: "Every remaining effort feeds one powerful attack along a rising arc. The blade’s trail forms a vast white eagle, its wings edged with crimson flames.",
  },
];
export const polishArt = (number: number, kind = "study") =>
  `/art/polish/form-${String(number).padStart(2, "0")}-${kind}.webp`;
