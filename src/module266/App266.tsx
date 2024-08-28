
import { test, expect } from "@playwright/experimental-ct-react";
import App266 from "./App266.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App266 />);
  await expect(component).toContainText("Learn React");
});
