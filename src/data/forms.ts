export type Form = {
  number: number;
  name: string;
  title: string;
  role: string;
  description: string;
  heritage: string;
  limitation?: string;
};
export const forms: Form[] = [
  {
    number: 1,
    name: "Han River",
    title: "First Current",
    role: "Swift attack",
    description:
      "The practitioner takes a fluid step to the side and delivers a single rising diagonal cut. The blade moves like a river current flowing around an obstacle instead of colliding with it.",
    heritage:
      "The Han is one of the Korean Peninsula’s most important rivers: a fitting beginning for a style descended from Water Breathing. Simple and economical, this form lays the foundation for the techniques that follow.",
  },
  {
    number: 2,
    name: "Taekkyeon",
    title: "Swaying Reeds",
    role: "Evasion & counter",
    description:
      "The swordsman sways, shifting weight between the feet and slipping outside the line of attack. A lightning-fast cut then strikes the opponent’s exposed flank.",
    heritage:
      "Taekkyeon combines soft, rhythmic movements with sudden releases of power. This distinctive footwork sets Korean Breathing apart from traditional Water Breathing.",
  },
  {
    number: 3,
    name: "Goguryeo",
    title: "Unbroken Fortress",
    role: "Defense",
    description:
      "The warrior lowers their center of gravity and makes compact, circular sword movements, guiding successive blows to either side. When the enemy loses balance, a thrust or short counter follows.",
    heritage:
      "The kingdom of Goguryeo was known for its defensive systems and mountain fortifications. This form embodies resilience: water may flow calmly, yet it can also offer immense resistance.",
  },
  {
    number: 4,
    name: "Hwarang",
    title: "Crescent of Loyalty",
    role: "Combined attack",
    description:
      "Two sweeping cuts form intersecting crescents. The first drives the opponent away from the person being protected; the second strikes from the opposite side.",
    heritage:
      "The Hwarang were an organization of elite young people in the kingdom of Silla, associated with education, loyalty, and service. This form therefore joins offense with the protection of companions.",
  },
  {
    number: 5,
    name: "Cheomseongdae",
    title: "Seven Star Orbit",
    role: "Maneuvering",
    description:
      "The practitioner makes seven precise shifts around a circle, changing the angle of the blade with each movement. The final cut comes from a direction the opponent has not had time to guard.",
    heritage:
      "Cheomseongdae is an astronomical monument from the Silla period, associated with Queen Seondeok’s seventh-century reign. The seven movements draw inspiration from stargazing.",
  },
  {
    number: 6,
    name: "Goryeo",
    title: "Celadon Ripples",
    role: "Precision cuts",
    description:
      "Three delicate, extraordinarily precise cuts follow almost without pause. The first two disrupt the opponent’s guard; the third finds the opening they create.",
    heritage:
      "The Goryeo dynasty became renowned for celadon ceramics and the sanggam inlay technique. Just as intricate patterns emerge from precise lines, the practitioner creates an exacting sequence with the blade.",
  },
  {
    number: 7,
    name: "Hahoe",
    title: "False Reflection",
    role: "Feint",
    description:
      "The swordsman begins an unmistakable swing, then turns the hips and changes the direction of the cut at the last instant. The opponent reacts to the feint and exposes their own guard.",
    heritage:
      "The Korean tradition of Hahoe mask dances uses character, gesture, and expression. This form carries that theatrical unpredictability into a duel.",
  },
  {
    number: 8,
    name: "Sejong",
    title: "Written Currents",
    role: "Three-part technique",
    description:
      "Three connected movements form the technique: a horizontal cut, a vertical cut, and a final thrust. Each transition is exact, like the strokes of a written character.",
    heritage:
      "King Sejong established the foundations of Hangul in 1443; the alphabet was proclaimed in 1446. This form symbolizes precision, knowledge, and order: victory through technique, rather than strength alone.",
  },
  {
    number: 9,
    name: "Geobukseon",
    title: "Armored Tide",
    role: "Powerful defense",
    description:
      "The practitioner traces tight, overlapping circles with the blade, creating an almost unbroken guard. When an opponent overcommits to a heavy blow, the swordsman answers with a short, powerful counterattack.",
    heritage:
      "The geobukseon, or Korean turtle ship, served in Admiral Yi Sun-sin’s fleet during the late-sixteenth-century war. This form echoes its union of protection and offensive strength.",
  },
  {
    number: 10,
    name: "Myeongnyang",
    title: "Reversing Tide",
    role: "Powerful counter",
    description:
      "The warrior appears to retreat, drawing the opponent into range. At the decisive moment, they sharply reverse direction, channeling the momentum of the incoming attack into one crushing cut.",
    heritage:
      "At the Battle of Myeongnyang in 1597, Yi Sun-sin used a narrow strait and powerful currents against a far larger fleet. The form draws on this idea of defeating a stronger enemy through the force of their own advance.",
  },
  {
    number: 11,
    name: "March First",
    title: "Unbroken Wave",
    role: "Protecting many",
    description:
      "The swordsman moves in front of a group of people, using a series of rapid blade deflections and short cuts to hold attackers back. Above all, the technique keeps a passage safe.",
    heritage:
      "The March First Movement of 1919 was a mass independence movement against Japanese colonial rule, beginning with peaceful demonstrations. The form honors the solidarity and courage of its participants through the protection of others, without glorifying violence.",
  },
  {
    number: 12,
    name: "Arirang",
    title: "River of Returning Voices",
    role: "Ultimate form",
    description:
      "The most powerful form of Korean Breathing. The warrior flows through movements inspired by the preceding eleven forms, constantly changing the blade’s tempo, direction, and height. Every sequence joins into a single full rotation, ending in a precise cut aimed at the demon’s neck.",
    heritage:
      "Arirang is a traditional Korean folk song with many regional versions, a symbol of community, memory, and identity. Just as a recognizable motif unites its different versions, the final form brings together every technique of this breathing style.",
    limitation:
      "Requires almost perfect breath control. A failed sequence causes extreme exhaustion and leaves the practitioner defenseless.",
  },
];
export const pad = (n: number) => String(n).padStart(2, "0");
export const artPath = (n: number, kind: "study" | "art" = "study") =>
  `/art/form-${pad(n)}-${kind}.webp`;
