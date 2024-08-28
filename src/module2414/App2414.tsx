
import { test, expect } from "@playwright/experimental-ct-react";
import App2414 from "./App2414.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2414 />);
  await expect(component).toContainText("Learn React");
});
