
import { test, expect } from "@playwright/experimental-ct-react";
import App287 from "./App287.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App287 />);
  await expect(component).toContainText("Learn React");
});
