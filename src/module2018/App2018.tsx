
import { test, expect } from "@playwright/experimental-ct-react";
import App2018 from "./App2018.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2018 />);
  await expect(component).toContainText("Learn React");
});
