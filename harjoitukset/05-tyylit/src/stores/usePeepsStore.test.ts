import { beforeEach, describe, expect, it } from "vitest";
import { usePeepsStore } from "./usePeepsStore";

type Peep = { name: string; superpower: string };

const originalPeeps: Peep[] = [
  { name: "Batman", superpower: "Echo location" },
  { name: "Spiderman", superpower: "Spidey sense" },
  { name: "Keijo", superpower: "Mökkiautoilu" },
];

beforeEach(() => {
  // Reset state before each test to original
  usePeepsStore.setState({ peeps: [...originalPeeps] });
});

describe("usePeepsStore", () => {
  it("has initial peeps", () => {
    const peeps = usePeepsStore.getState().peeps;
    expect(peeps).toHaveLength(3);
    expect(peeps).toEqual(originalPeeps);
  });

  it("addPeep adds a new peep", () => {
    const newPeep: Peep = { name: "NewHero", superpower: "Invisibility" };
    usePeepsStore.getState().addPeep(newPeep);
    const peeps = usePeepsStore.getState().peeps;
    expect(peeps).toContainEqual(newPeep);
    expect(peeps).toHaveLength(4);
  });

  it("removePeep removes only exact matches", () => {
    // Add a duplicate name but different superpower
    const dup: Peep = { name: "Batman", superpower: "Different" };
    usePeepsStore.getState().addPeep(dup);
    expect(usePeepsStore.getState().peeps).toHaveLength(4);

    // Remove the original Batman (Echo location)
    const target: Peep = { name: "Batman", superpower: "Echo location" };
    usePeepsStore.getState().removePeep(target);
    const peepsAfter = usePeepsStore.getState().peeps;

    // The duplicate with different superpower should remain
    expect(peepsAfter).toContainEqual(dup);
    // The original Batman should be removed
    expect(peepsAfter).not.toContainEqual(target);
    // Total should be 3 now (original 3 + dup - removed original)
    expect(peepsAfter).toHaveLength(3);
  });

  it("deleteAll clears the list", () => {
    usePeepsStore.getState().deleteAll();
    const peeps = usePeepsStore.getState().peeps;
    expect(peeps).toHaveLength(0);
  });

  it("removePeep does nothing when target not found", () => {
    const target: Peep = { name: "NonExistent", superpower: "Nope" };
    const before = usePeepsStore.getState().peeps;
    usePeepsStore.getState().removePeep(target);
    const after = usePeepsStore.getState().peeps;
    // contents unchanged
    expect(after).toEqual(before);
    // length unchanged
    expect(after).toHaveLength(before.length);
  });

  it("operations are immutable (old arrays are not mutated)", () => {
    const beforeRef = usePeepsStore.getState().peeps;
    const newPeep: Peep = { name: "Immutable", superpower: "Test" };
    usePeepsStore.getState().addPeep(newPeep);
    const afterRef = usePeepsStore.getState().peeps;
    // new array reference should be different
    expect(afterRef).not.toBe(beforeRef);
    // old array still equals the original contents
    expect(beforeRef).toEqual(originalPeeps);
  });
});
