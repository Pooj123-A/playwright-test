
import { test, expect } from "@playwright/experimental-ct-react";
import App432 from "../example/App432.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App432 />);
  await expect(component).toContainText("Learn React");
});
