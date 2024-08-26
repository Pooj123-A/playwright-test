
import { test, expect } from "@playwright/experimental-ct-react";
import App2226 from "../example/App2226.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2226 />);
  await expect(component).toContainText("Learn React");
});
