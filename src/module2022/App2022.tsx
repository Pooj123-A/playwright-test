
import { test, expect } from "@playwright/experimental-ct-react";
import App2022 from "./App2022.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2022 />);
  await expect(component).toContainText("Learn React");
});
