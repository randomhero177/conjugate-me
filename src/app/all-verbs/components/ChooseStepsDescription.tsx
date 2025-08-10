import { CardSlider } from "@/components/CardSlider";

export default function ChooseStepsDescription() {
  const config = [
    {
      title: "Use text field",
      description:
        "You can either search for a specific verb using the input field",
      separator: "or",
    },
    {
      title: "Select a preset",
      description:
        "Quickly start practicing by choosing from curated verb sets — like most common verbs, regular only, irregular only, or thematic groups.",
      separator: "or",
    },
    {
      title: "Find it in the list of all verbs to select",
      description:
        "Scroll through the full list below. Click on a verb to select&nbsp;or&nbsp;deselect&nbsp;it.",
      separator: "or",
    },
  ];
  return (
    <div className="lg:flex mb-8">
      <CardSlider cardsList={config} />
    </div>
  );
}
