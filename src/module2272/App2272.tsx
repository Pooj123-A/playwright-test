
import { test, expect } from "@playwright/experimental-ct-react";
import App2272 from "./App2272.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2272 />);
  await expect(component).toContainText("Learn React");
});
