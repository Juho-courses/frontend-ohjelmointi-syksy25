import SuperPeople from "./SuperPeople";
import SuperPersonAdd from "./SuperPersonAdd";

function MainBody() {
  return (
    <div className="flex-1 container mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8 text-center">
        Tänne laitetaan sisältö.
      </h2>

      <div className="max-w-4xl mx-auto space-y-8">
        <SuperPersonAdd />
        <SuperPeople />
      </div>
    </div>
  );
}

export default MainBody;
