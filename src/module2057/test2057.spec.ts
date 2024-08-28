
import { test, expect } from "@playwright/experimental-ct-react";
import App2057 from "./App2057.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2057 />);
  await expect(component).toContainText("Learn React");
});
