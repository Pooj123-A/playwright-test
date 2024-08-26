
import { test, expect } from "@playwright/experimental-ct-react";
import App2242 from "../example/App2242.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2242 />);
  await expect(component).toContainText("Learn React");
});
