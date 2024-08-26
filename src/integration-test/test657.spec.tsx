
import { test, expect } from "@playwright/experimental-ct-react";
import App657 from "../example/App657.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App657 />);
  await expect(component).toContainText("Learn React");
});
