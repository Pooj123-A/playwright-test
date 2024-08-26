
import { test, expect } from "@playwright/experimental-ct-react";
import App2395 from "../example/App2395.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2395 />);
  await expect(component).toContainText("Learn React");
});
