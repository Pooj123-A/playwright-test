
import { test, expect } from "@playwright/experimental-ct-react";
import App2429 from "../example/App2429.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2429 />);
  await expect(component).toContainText("Learn React");
});
