import StoryPage from '../../components/StoryPage';

export default function RomeoAndJuliet() {
  return (
    <StoryPage
      title="Romeo and Juliet"
      subtitle="A Tragedy of Star-Crossed Lovers"
      description="In the fair city of Verona, two noble families, the Montagues and Capulets, are locked in an ancient feud. Amidst this strife, young Romeo Montague and Juliet Capulet fall instantly in love at a masked ball. Their secret marriage, orchestrated by Friar Laurence, sets in motion a chain of events that will forever change both families."
      era="Renaissance Italy"
      years="1597"
      region="Verona, Italy"
      characters={[
        { name: "Romeo Montague", role: "Protagonist", family: "Montague", description: "Young heir to the Montague family, passionate and impulsive in love", image: "/Romeo (R&J).png", path: "/romeo", accentColor: "#60a5fa" },
        { name: "Juliet Capulet", role: "Protagonist", family: "Capulet", description: "Young daughter of Lord Capulet, wise beyond her years", image: "/Juliet (R&J).png", path: "/juliet", accentColor: "#f87171" },
        { name: "Friar Laurence", role: "Confidant", family: "Church", description: "Franciscan friar who marries Romeo and Juliet in secret", image: "/Friar Lawrence.png", path: "/friarlawrence", accentColor: "#facc15" },
        { name: "Mercutio", role: "Romeo's Friend", family: "Neutral", description: "Kinsman to the Prince, witty and quick-tempered", image: "/Mercution (R&J).png", path: "/mercutio", accentColor: "#60a5fa" },
        { name: "Tybalt", role: "Juliet's Cousin", family: "Capulet", description: "Hot-headed cousin of Juliet, skilled swordsman", image: "/Tybalt (R&J).png", path: "/tybalt", accentColor: "#f87171" },
        { name: "Benvolio", role: "Romeo's Cousin", family: "Montague", description: "Peace-loving cousin of Romeo, tries to prevent violence", image: "/Benvolio (R&J).png", path: "/benvolio", accentColor: "#60a5fa" },
        { name: "The Nurse", role: "Juliet's Caregiver", family: "Capulet", description: "Juliet's devoted nurse and confidante since birth", image: "/The Nurse (R&J).png", path: "/thenurse", accentColor: "#facc15" },
        { name: "Balthasar", role: "Romeo's Servant", family: "Montague", description: "Faithful servant who brings tragic news to Romeo", image: "/Balthasar (R&J).png", path: "/balthasar", accentColor: "#60a5fa" },
        { name: "Paris", role: "Suitor to Juliet", family: "Capulet", description: "Noble count promised to Juliet by her father", image: "/Paris (R&J).png", path: "/paris", accentColor: "#f87171" },
        { name: "Prince Escalus", role: "Ruler of Verona", family: "Royal", description: "Prince of Verona who tries to maintain peace", image: "/Prince Escalus (R&J).png", path: "/princeescalus", accentColor: "#facc15" },
        { name: "Lord & Lady Capulet", role: "Juliet's Parents", family: "Capulet", description: "Juliet's parents who arrange her marriage to Paris", image: "/Lord&Lady Capulet (R&J).png", path: "/lordladycapulet", accentColor: "#f87171" },
        { name: "Lord & Lady Montague", role: "Romeo's Parents", family: "Montague", description: "Romeo's parents concerned for their son's wellbeing", image: "/Lord&Lady Montague (R&J).png", path: "/lordladymontague", accentColor: "#60a5fa" },
      ]}
      backgroundImage="/Background_Romeo&Juliet.png"
      accentColor="#ef4444"
    />
  );
}
