
import { test, expect } from "@playwright/experimental-ct-react";
import App2095 from "../example/App2095.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2095 />);
  await expect(component).toContainText("Learn React");
});
