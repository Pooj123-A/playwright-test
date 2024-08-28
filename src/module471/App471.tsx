
import { test, expect } from "@playwright/experimental-ct-react";
import App471 from "./App471.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App471 />);
  await expect(component).toContainText("Learn React");
});
