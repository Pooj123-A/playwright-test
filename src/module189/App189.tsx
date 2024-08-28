
import { test, expect } from "@playwright/experimental-ct-react";
import App189 from "./App189.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App189 />);
  await expect(component).toContainText("Learn React");
});
