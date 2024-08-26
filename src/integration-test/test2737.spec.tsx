
import { test, expect } from "@playwright/experimental-ct-react";
import App2737 from "../example/App2737.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2737 />);
  await expect(component).toContainText("Learn React");
});
