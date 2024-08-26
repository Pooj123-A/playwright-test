
import { test, expect } from "@playwright/experimental-ct-react";
import App2267 from "../example/App2267.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2267 />);
  await expect(component).toContainText("Learn React");
});
