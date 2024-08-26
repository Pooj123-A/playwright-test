
import { test, expect } from "@playwright/experimental-ct-react";
import App2849 from "../example/App2849.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2849 />);
  await expect(component).toContainText("Learn React");
});
