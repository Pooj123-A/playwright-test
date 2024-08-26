
import { test, expect } from "@playwright/experimental-ct-react";
import App2014 from "./App2014.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2014 />);
  await expect(component).toContainText("Learn React");
});
