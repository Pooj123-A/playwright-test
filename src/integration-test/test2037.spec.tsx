
import { test, expect } from "@playwright/experimental-ct-react";
import App2037 from "../example/App2037.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2037 />);
  await expect(component).toContainText("Learn React");
});