
import { test, expect } from "@playwright/experimental-ct-react";
import App988 from "./App988.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App988 />);
  await expect(component).toContainText("Learn React");
});
