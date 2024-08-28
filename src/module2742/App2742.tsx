
import { test, expect } from "@playwright/experimental-ct-react";
import App2742 from "./App2742.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2742 />);
  await expect(component).toContainText("Learn React");
});
