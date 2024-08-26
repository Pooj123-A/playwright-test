
import { test, expect } from "@playwright/experimental-ct-react";
import App2069 from "../example/App2069.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2069 />);
  await expect(component).toContainText("Learn React");
});
