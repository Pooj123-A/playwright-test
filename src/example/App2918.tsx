
import { test, expect } from "@playwright/experimental-ct-react";
import App2918 from "./App2918.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2918 />);
  await expect(component).toContainText("Learn React");
});
