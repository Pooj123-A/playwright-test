
import { test, expect } from "@playwright/experimental-ct-react";
import App726 from "../example/App726.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App726 />);
  await expect(component).toContainText("Learn React");
});
