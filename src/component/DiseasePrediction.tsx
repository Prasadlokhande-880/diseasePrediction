import React, { useState } from "react";
import { cn } from "../lib/utils";

const symptoms = [
  "itching", "skin_rash", "nodal_skin_eruptions", "continuous_sneezing", "shivering", "chills",
  "joint_pain", "stomach_pain", "acidity", "ulcers_on_tongue", "muscle_wasting", "vomiting",
  "burning_micturition", "spotting_urination", "fatigue", "weight_gain", "anxiety",
  "cold_hands_and_feets", "mood_swings", "weight_loss", "restlessness", "lethargy",
  "patches_in_throat", "irregular_sugar_level", "cough", "high_fever", "sunken_eyes",
  "breathlessness", "sweating", "dehydration", "indigestion", "headache", "yellowish_skin",
  "dark_urine", "nausea", "loss_of_appetite", "pain_behind_the_eyes", "back_pain",
  "constipation", "abdominal_pain", "diarrhoea", "mild_fever", "yellow_urine",
  "yellowing_of_eyes", "acute_liver_failure", "fluid_overload", "swelling_of_stomach",
  "swelled_lymph_nodes", "malaise", "blurred_and_distorted_vision", "phlegm",
  "throat_irritation", "redness_of_eyes", "sinus_pressure", "runny_nose", "congestion",
  "chest_pain", "weakness_in_limbs", "fast_heart_rate", "pain_during_bowel_movements",
  "pain_in_anal_region", "bloody_stool", "irritation_in_anus", "neck_pain", "dizziness",
  "cramps", "bruising", "obesity", "swollen_legs", "swollen_blood_vessels",
  "puffy_face_and_eyes", "enlarged_thyroid", "brittle_nails", "swollen_extremeties",
  "excessive_hunger", "extra_marital_contacts", "drying_and_tingling_lips",
  "slurred_speech", "knee_pain", "hip_joint_pain", "muscle_weakness", "stiff_neck",
  "swelling_joints", "movement_stiffness", "spinning_movements", "loss_of_balance",
  "unsteadiness", "weakness_of_one_body_side", "loss_of_smell", "bladder_discomfort",
  "foul_smell_of_urine", "continuous_feel_of_urine", "passage_of_gases", "internal_itching",
  "toxic_look_(typhos)", "depression", "irritability", "muscle_pain", "altered_sensorium",
  "red_spots_over_body", "belly_pain", "abnormal_menstruation", "dischromic_patches",
  "watering_from_eyes", "increased_appetite", "polyuria", "family_history", "mucoid_sputum",
  "rusty_sputum", "lack_of_concentration", "visual_disturbances", "receiving_blood_transfusion",
  "receiving_unsterile_injections", "coma", "stomach_bleeding", "distention_of_abdomen",
  "history_of_alcohol_consumption", "fluid_overload", "blood_in_sputum",
  "prominent_veins_on_calf", "palpitations", "painful_walking", "pus_filled_pimples",
  "blackheads", "scurring", "skin_peeling", "silver_like_dusting", "small_dents_in_nails",
  "inflammatory_nails", "blister", "red_sore_around_nose", "yellow_crust_ooze", "prognosis"
];

export default function DiseasePredictionForm() {
  const [selectedOptions, setSelectedOptions] = useState(Array(7).fill(""));

  const handleSelectChange = (index: number, value: string) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[index] = value;
    setSelectedOptions(newSelectedOptions);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Selected values:", selectedOptions);
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black mt-[20px]">
      <h2 className="font-bold text-xl text-neutral-200">
        Disease Prediction
      </h2>
      <p className="text-neutral-300 text-sm max-w-sm mt-2">
        Please select options from the dropdowns below to assist in the prediction.
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        {/* Dropdowns */}
        {[...Array(7).keys()].map((index) => (
          <LabelInputContainer className="mb-4" key={index}>
            <Label htmlFor={`dropdown-${index}`}>Dropdown {index + 1}</Label>
            <select
              id={`dropdown-${index}`}
              className="w-full p-2 border border-neutral-600 rounded-md bg-black text-neutral-300"
              value={selectedOptions[index]}
              onChange={(e) => handleSelectChange(index, e.target.value)}
            >
              <option value="" disabled>Select an option</option>
              {symptoms.map((symptom, i) => (
                <option key={i} value={symptom}>{symptom}</option>
              ))}
            </select>
          </LabelInputContainer>
        ))}

        <button
          className="bg-gradient-to-br relative group/btn from-black to-black block dark:bg-black w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Predict &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const Label = ({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="text-neutral-300 text-sm font-medium dark:text-neutral-200"
    >
      {children}
    </label>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
