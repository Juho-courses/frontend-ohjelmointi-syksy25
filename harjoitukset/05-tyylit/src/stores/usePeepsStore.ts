import { create } from "zustand";

/**
 * Kirjoitin tämän TypeScriptinä, jotta saan koodin täydennyksen
 * storea käyttäessäni.
 *
 * Isoimmat erot ovat tietenkin tyyppimäärittelyt Peep ja PeepStore,
 * sekä peeps_og:n tyyppi (array Peepsejä)
 * ja createn paluuarvomäärittelyn (create<PeepStore>).
 */

type Peep = {
  name: string;
  superpower: string;
};

type PeepsStore = {
  peeps: Peep[];
  deleteAll: () => void;
  addPeep: (new_peep: Peep) => void;
  removePeep: (target: Peep) => void;
};

const peeps_og: Peep[] = [
  { name: "Batman", superpower: "Echo location" },
  { name: "Spiderman", superpower: "Spidey sense" },
  { name: "Keijo", superpower: "Mökkiautoilu" },
];

const usePeepsStore = create<PeepsStore>((set) => ({
  peeps: peeps_og,
  deleteAll: () => set({ peeps: [] }),
  addPeep: (new_peep) =>
    set((state) => ({ peeps: [...state.peeps, new_peep] })),
  removePeep: (target) =>
    set((state) => ({
      peeps: state.peeps.filter(
        (p) => !(p.name === target.name && p.superpower === target.superpower)
      ),
    })),
}));

export { usePeepsStore };
