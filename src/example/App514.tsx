
import { test, expect } from "@playwright/experimental-ct-react";
import App514 from "./App514.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App514 />);
  await expect(component).toContainText("Learn React");
});
