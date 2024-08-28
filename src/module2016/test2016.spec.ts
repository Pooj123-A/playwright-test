
import { test, expect } from "@playwright/experimental-ct-react";
import App2016 from "./App2016.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2016 />);
  await expect(component).toContainText("Learn React");
});
