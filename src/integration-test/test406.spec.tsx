
import { test, expect } from "@playwright/experimental-ct-react";
import App406 from "../example/App406.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App406 />);
  await expect(component).toContainText("Learn React");
});
