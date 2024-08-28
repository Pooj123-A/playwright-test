
import { test, expect } from "@playwright/experimental-ct-react";
import App2444 from "./App2444.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2444 />);
  await expect(component).toContainText("Learn React");
});
