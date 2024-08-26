
import { test, expect } from "@playwright/experimental-ct-react";
import App2829 from "../example/App2829.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2829 />);
  await expect(component).toContainText("Learn React");
});
