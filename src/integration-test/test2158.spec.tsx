
import { test, expect } from "@playwright/experimental-ct-react";
import App2158 from "../example/App2158.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2158 />);
  await expect(component).toContainText("Learn React");
});
