
import { test, expect } from "@playwright/experimental-ct-react";
import App2339 from "./App2339.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2339 />);
  await expect(component).toContainText("Learn React");
});
