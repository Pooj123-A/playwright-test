
import { test, expect } from "@playwright/experimental-ct-react";
import App725 from "../example/App725.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App725 />);
  await expect(component).toContainText("Learn React");
});
