import { usePeepsStore } from "../stores/usePeepsStore";
import SuperPerson from "./SuperPerson";

function SuperPeople() {
  const { peeps } = usePeepsStore();
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Super People List
      </h3>
      {peeps.length === 0 ? (
        <div>
          <p className="text-gray-500 text-center py-4">
            No super people added yet.
          </p>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => {
              usePeepsStore.getState().loadPeepsFromServer();
            }}
          >
            Lataa palvelimelta
          </button>
        </div>
      ) : (
        <ul className="space-y-2">
          {peeps.map((peep, index) => {
            return (
              <SuperPerson
                key={index}
                name={peep.name}
                superpower={peep.superpower}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default SuperPeople;
