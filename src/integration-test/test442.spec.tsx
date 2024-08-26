
import { test, expect } from "@playwright/experimental-ct-react";
import App442 from "../example/App442.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App442 />);
  await expect(component).toContainText("Learn React");
});
